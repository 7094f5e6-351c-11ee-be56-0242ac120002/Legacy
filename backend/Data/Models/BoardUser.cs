using Data.Enums;

namespace Data.Models
{
    public class BoardUser
    {
        public Guid UserId { get; set; }
        public Guid BoardId { get; set; }

        public User User { get; set; }
        public Board Board { get; set; }
        public Role Role { get; set; }
        public string Color { get; set; }   
    }
}
