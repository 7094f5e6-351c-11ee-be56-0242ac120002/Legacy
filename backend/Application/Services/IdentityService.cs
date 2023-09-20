using Application.Dtos.IdentityService;
using Application.Enums.IdentityService;
using Application.Interfaces;
using Data.Context;
using Data.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace Application.Services
{
    public class IdentityService : IIdentityService
    {
        private readonly IConfiguration _configuration;
        private readonly IPasswordService _passwordService;
        private readonly TaskifyDbContext _dbContext;
        private readonly int _iterations;
        private readonly int _hashLenght;
        private readonly int _saltLength;

        public IdentityService(
            IConfiguration configuration,
            IPasswordService passwordService,
            TaskifyDbContext dbContext)
        {
            _configuration = configuration;
            _passwordService = passwordService;
            _dbContext = dbContext;
            _iterations = _configuration.GetValue<int>("Security:PasswordHashIterations");
            _hashLenght = _configuration.GetValue<int>("Security:HashLengthBytes");
            _saltLength = _configuration.GetValue<int>("Security:SaltLengthBytes");
        }

        public async Task<(RegistrationStatus Status, RegisterResult? Value)> Register(
            UserRegister userRegisterData)
        {
            if(await _dbContext.Users.AnyAsync(u => u.Email == userRegisterData.Email.ToLower()))
                return (RegistrationStatus.EmailInUseError, null);

            var (passwordHash, salt) = _passwordService.GeneratePassword(
                userRegisterData.Password,
                _iterations,
                _hashLenght,
                _saltLength);

            var user = new User
            {
                Email = userRegisterData.Email.ToLower(),
                FirstName = userRegisterData.FirstName,
                LastName = userRegisterData.LastName,
                Password = passwordHash,
                Salt = salt,
            };

            try
            {
                _dbContext.Users.Add(user);
                await _dbContext.SaveChangesAsync();
            }
            catch (Exception)
            {
                return (RegistrationStatus.UnhandledError, null);
            }

            var jwt = GenerateJwt(user.Id, $"{userRegisterData.FirstName} {userRegisterData.LastName}", user.Email);

            return (
                RegistrationStatus.Registered,
                new RegisterResult
                {
                    JWT = jwt,
                    RefreshToken = "",
                });
        }

        public async Task<(LoginStatus Status, LoginResult? Value)> Login(
            UserLogin userLoginData)
        {
            var user = await _dbContext.Users.FirstOrDefaultAsync(u => u.Email == userLoginData.Email.ToLower());

            if (user is null)
                return (LoginStatus.UnknownEmailError, null);

            var passwordComparasionResult = _passwordService.ComparePassword(
                userLoginData.Password,
                user.Password,
                _iterations,
                _hashLenght,
                user.Salt);

            if(passwordComparasionResult is false)
                return (LoginStatus.InvalidPasswordError, null);

            var jwt = GenerateJwt(user.Id, $"{user.FirstName} {user.LastName}", user.Email);

            return (
                LoginStatus.Success,
                new LoginResult
                {
                    JWT = jwt,
                    RefreshToken = "",
                });
        }

        private string GenerateJwt(
            int userId,
            string fullName,
            string email)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var tokenSecret = _configuration.GetValue<string>("Identity:TokenSecret")!;

            var key = Encoding.UTF8.GetBytes(tokenSecret);

            var claims = new List<Claim>
            {
                new(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                new(JwtRegisteredClaimNames.Sub, userId.ToString()),
                new(ClaimTypes.Name, fullName),
                new(ClaimTypes.Email, email),
            };

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims),
                Expires = DateTime.UtcNow.AddMinutes(_configuration.GetValue<int>("Identity:JwtLifetimeMinutes")),
                Issuer = _configuration.GetValue<string>("Identity:Issuer")!,
                Audience = _configuration.GetValue<string>("Identity:Audience")!,
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature),
            };

            var token = tokenHandler.CreateToken(tokenDescriptor);
            var jwt = tokenHandler.WriteToken(token);

            return jwt;
        }
    }
}
