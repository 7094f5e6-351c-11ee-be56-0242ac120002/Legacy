using Api.Dtos.AuthDtos;
using FluentValidation;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Data;

namespace Api.Controllers
{
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IValidator<RegisterRequest> _validator;
        public AuthController(IValidator<RegisterRequest> validator)
        {
            _validator = validator;   
        }

        [HttpPost(Routes.Auth.Register)]
        public async Task<RegisterResponse> Register([FromBody] RegisterRequest registerRequest)
        {
            
            throw new NotImplementedException();    
        }
    }
}
