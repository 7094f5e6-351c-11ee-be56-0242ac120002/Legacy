namespace Application.Dtos.IdentityService
{
    public class RegisterResult
    {
        public string JWT { get; init; } = null!;
        public string RefreshToken { get; init; } = null!;
    }
}
