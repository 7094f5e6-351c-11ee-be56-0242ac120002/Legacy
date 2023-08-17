using Data.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data.Models
{
    public class Assigment
    {
        public Guid Id { get; set; }
        public string Name { get; set; }    
        public string Description { get; set; }
        public Priority Priority { get; set; }  
        public Status Status { get; set; }
        public DateTime DateTime { get; set; }

        public List<Tag> Tags { get; set; }
        public User User { get; set; }
        public Board Board { get; set; }

    }
}
