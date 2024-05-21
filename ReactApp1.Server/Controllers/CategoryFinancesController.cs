using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ReactApp1.Server.Data;
using ReactApp1.Server.Models;

namespace ReactApp1.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryFinanceController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public CategoryFinanceController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/CategoryFinance
        [HttpGet]
        public async Task<ActionResult<IEnumerable<CategoryFinance>>> GetCategoryFinances()
        {
            return await _context.CategoryFinances.ToListAsync();
        }

        // GET: api/CategoryFinance/5
        [HttpGet("{id}")]
        public async Task<ActionResult<CategoryFinance>> GetCategoryFinance(int id)
        {
            var categoryFinance = await _context.CategoryFinances.FindAsync(id);

            if (categoryFinance == null)
            {
                return NotFound();
            }

            return categoryFinance;
        }

        // PUT: api/CategoryFinance/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCategoryFinance(int id, CategoryFinance categoryFinance)
        {
            if (id != categoryFinance.Id)
            {
                return BadRequest();
            }

            _context.Entry(categoryFinance).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CategoryFinanceExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/CategoryFinance
        [HttpPost]
        public async Task<ActionResult<CategoryFinance>> PostCategoryFinance(CategoryFinance categoryFinance)
        {
            _context.CategoryFinances.Add(categoryFinance);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCategoryFinance", new { id = categoryFinance.Id }, categoryFinance);
        }

        // DELETE: api/CategoryFinance/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCategoryFinance(int id)
        {
            var categoryFinance = await _context.CategoryFinances.FindAsync(id);
            if (categoryFinance == null)
            {
                return NotFound();
            }

            _context.CategoryFinances.Remove(categoryFinance);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool CategoryFinanceExists(int id)
        {
            return _context.CategoryFinances.Any(e => e.Id == id);
        }
    }
}
