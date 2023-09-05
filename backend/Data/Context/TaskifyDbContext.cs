using Data.Models;
using Microsoft.EntityFrameworkCore;
using System.Reflection;

namespace Data.Context
{
    public class TaskifyDbContext : DbContext
    {
        public TaskifyDbContext(DbContextOptions<TaskifyDbContext> options) : base(options) { }

        public DbSet<Assigment> Assigments { get; set; }

        public DbSet<Board> Boards { get; set; }

        public DbSet<BoardUser> BoardUsers { get; set; }

        public DbSet<Tag> Tags { get; set; }

        public DbSet<User> Users { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());

            base.OnModelCreating(modelBuilder);
        }
    }
}
