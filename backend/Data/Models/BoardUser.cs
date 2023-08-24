using Data.Enums;

namespace Data.Models
{
    public class BoardUser
    {
        public int UserId { get; set; }
        public int BoardId { get; set; }
        public User User { get; set; }
        public Board Board { get; set; }
        public Role Role { get; set; }
        public string Color { get; set; }   
    }
}
