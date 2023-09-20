namespace Api.Dtos.AuthDtos
{
    public class RegisterResponse
    {
        public string JWT { get; init; }
        public string RefreshToken { get; init; }   
    }
}
