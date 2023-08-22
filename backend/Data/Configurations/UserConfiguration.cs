using Data.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection.Emit;
using System.Text;
using System.Threading.Tasks;

namespace Data.Configurations
{
    public class UserConfiguration : IEntityTypeConfiguration<User>
    {
        public void Configure(EntityTypeBuilder<User> builder)
        {
            builder.HasKey(x => x.Id);  
            builder.Property(x=>x.Id).ValueGeneratedOnAdd();

            builder.Property(x => x.FirstName)
                .IsRequired()
                .HasMaxLength(64);

            builder.Property(x => x.LastName)
                .IsRequired()
                .HasMaxLength(64);

            builder.HasIndex(x => x.Email)
                .IsUnique();
                
                

        }
    }
}
