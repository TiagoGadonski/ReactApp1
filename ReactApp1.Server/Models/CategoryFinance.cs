using System.ComponentModel.DataAnnotations;

namespace ReactApp1.Server.Models
{
    public class CategoryFinance
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
    }
}
