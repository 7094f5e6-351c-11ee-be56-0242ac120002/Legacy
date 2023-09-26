using Data.Models;

namespace Application.Interfaces
{
    public interface IUserService
    {
        public Task<User?> GetUserByEmail(string email);
        public Task<bool> AnyUserByEmail(string email);
        Task UpdateUser(User user);
        Task AddUser(User user);
    }
}
