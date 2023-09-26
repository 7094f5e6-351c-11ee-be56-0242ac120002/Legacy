using Application.Dtos.IdentityService;
using Riok.Mapperly.Abstractions;
using System.Runtime.CompilerServices;

namespace Api.Dtos.AuthDtos
{
    public class RefreshTokenRequest
    {
        public string RefreshToken { get; init; } = null!;
    }
    [Mapper]
    public static partial class RefreshTokenRequestMapper
    {
        public static partial RefreshTokenDto ToApplicationDto(this RefreshTokenRequest refreshTokenRequest);
    }
}
