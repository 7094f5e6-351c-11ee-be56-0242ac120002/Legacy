namespace Application.Dtos.IdentityService
{
    public class RefreshTokenDto
    {
        public string Email { get; init; }
        public string RefreshToken { get; init; }
    }
}
