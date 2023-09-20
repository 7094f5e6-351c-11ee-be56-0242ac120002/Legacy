using Api.Dtos.AuthDtos;
using Application.Enums.IdentityService;
using Application.Interfaces;
using FluentValidation;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers
{
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IValidator<RegisterRequest> _registerRequestValidator;
        private readonly IIdentityService _identityService;

        public AuthController(
            IValidator<RegisterRequest> registerRequestValidator,
            IIdentityService identityService)
        {
            _registerRequestValidator = registerRequestValidator;
            _identityService = identityService;
        }

        [HttpPost(Routes.Auth.Register)]
        public async Task<ActionResult<RegisterResponse>> Register([FromBody] RegisterRequest registerRequest)
        {
            await _registerRequestValidator
                .ValidateAndThrowAsync(registerRequest);

            var (status, value) = await _identityService
                .Register(registerRequest.ToApplicationDto());

            if (status is not RegistrationStatus.Registered)
                return BadRequest();

            return Ok(value!.ToDto());
        }
    }
}
