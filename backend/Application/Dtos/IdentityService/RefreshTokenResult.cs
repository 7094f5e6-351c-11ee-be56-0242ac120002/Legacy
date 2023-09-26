namespace Application.Dtos.IdentityService
{
    public class RefreshTokenResult
    {
        public string Jwt { get; init; }
        public string RefreshToken { get; init; }
    }
}
