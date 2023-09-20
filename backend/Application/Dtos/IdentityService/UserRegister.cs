namespace Application.Dtos.IdentityService
{
    public class UserRegister
    {
        public string Email { get; init; } = null!;
        public string Password { get; init; } = null!;
        public string FirstName { get; init; } = null!;
        public string LastName { get; init; } = null!;
    }
}
