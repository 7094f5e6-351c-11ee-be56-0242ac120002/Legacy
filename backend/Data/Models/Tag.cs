using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data.Models
{
    public class Tag
    {
        public Guid Id { get; set; } 
        public string Name { get; set; }
        public List<Assigment> Assigments { get; set; } = new List<Assigment>();
    }
}
