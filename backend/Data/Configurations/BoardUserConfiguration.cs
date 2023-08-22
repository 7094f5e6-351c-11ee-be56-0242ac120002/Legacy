using Data.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data.Configurations
{
    public class BoardUserConfiguration : IEntityTypeConfiguration<BoardUser>
    {
        public void Configure(EntityTypeBuilder<BoardUser> builder)
        {
            builder.HasKey(x=>new {x.BoardId, x.UserId});   
            builder.HasOne(x => x.User)
                .WithMany(y => y.BoardUsers)
                .HasForeignKey(x => x.UserId);

           builder.HasOne(x=>x.Board)
                .WithMany(y=>y.BoardUsers)
                .HasForeignKey(x => x.BoardId);
        }
    }
}
