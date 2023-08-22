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
    public class AssigmentConfiguration : IEntityTypeConfiguration<Assigment>
    {
        public void Configure(EntityTypeBuilder<Assigment> builder)
        {
            builder.HasKey(x => x.Id);
            builder.Property(x => x.Id).ValueGeneratedOnAdd();

            builder.Property(x => x.Name)
                .IsRequired()
                .HasMaxLength(64);

            builder.Property(x => x.Description)
                .HasMaxLength(64)
                .IsRequired();

            builder.Property(x=>x.CreationTime)
                .IsRequired()
                .HasDefaultValueSql("GETDATE()");
        }
    }
}
