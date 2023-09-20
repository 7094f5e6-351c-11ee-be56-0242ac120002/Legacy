namespace Application.Dtos.IdentityService
{
    public class LoginResult
    {
        public string JWT { get; init; } = null!;
        public string RefreshToken { get; init; } = null!;
    }
}
