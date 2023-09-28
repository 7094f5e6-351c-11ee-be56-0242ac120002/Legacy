namespace Application.Dtos.IdentityService
{
    public class RefreshTokenDto
    {
        public string Email { get; set; }
        public string RefreshToken { get; init; }
    }
}
