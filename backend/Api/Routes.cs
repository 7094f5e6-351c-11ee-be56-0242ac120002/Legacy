namespace Api
{
    public static class Routes
    {
        private const string _base= "/api";
        public static class Auth
        {
            private const string _controllerBase = $"{_base}/auth";
            public const string Register = $"{_controllerBase}/register";
            public const string Login = $"{_controllerBase}/login";
        }
    }
}
