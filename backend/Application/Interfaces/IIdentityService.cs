using Application.Dtos.IdentityService;
using Application.Enums.IdentityService;

namespace Application.Interfaces
{
    public interface IIdentityService
    {
        Task<(LoginStatus Status, LoginResult? Value)> Login(UserLogin userLoginData);
        Task<(RegistrationStatus Status, RegisterResult? Value)> Register(UserRegister userRegisterData);
    }
}
