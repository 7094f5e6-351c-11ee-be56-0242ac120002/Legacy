using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data.Models
{
    public class User
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }    
        public string Email { get; set; }
        public string Password { get; set; }    
        public string Salt { get; set; }   
        
        public List<Assigment> Assigments { get; set; } = new List<Assigment>();
        public List<BoardUser> BoardUsers { get; set; } = new List<BoardUser>();
    }
}
