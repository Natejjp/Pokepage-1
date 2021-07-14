using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Pokepage.Models;

namespace Pokepage.Controllers
{
    // All of these routes will be at the base URL:     /api/PunchCards
    // That is what "api/[controller]" means below. It uses the name of the controller
    // in this case PunchCardsController to determine the URL
    [Route("api/[controller]")]
    [ApiController]
    public class PunchCardsController : ControllerBase
    {
        // This is the variable you use to have access to your database
        private readonly DatabaseContext _context;

        // Constructor that recives a reference to your database context
        // and stores it in _context for you to use in your API methods
        public PunchCardsController(DatabaseContext context)
        {
            _context = context;
        }

        // GET: api/PunchCards
        //
        // Returns a list of all your PunchCards
        //
        [HttpGet]
        public async Task<ActionResult<IEnumerable<PunchCard>>> GetPunchCards(string filter)
        {
            // Uses the database context in `_context` to request all of the PunchCards, sort
            // them by row id and return them as a JSON array.
            if (filter == null)
            {

                return await _context.PunchCards.OrderBy(row => row.Id).ToListAsync();
            }
            else
            {
                return await _context.PunchCards.Where(punchCard => punchCard.Name.ToLower().Contains(filter.ToLower())).ToListAsync();
            }
        }

        // GET: api/PunchCards/5
        //
        // Fetches and returns a specific punchCard by finding it by id. The id is specified in the
        // URL. In the sample URL above it is the `5`.  The "{id}" in the [HttpGet("{id}")] is what tells dotnet
        // to grab the id from the URL. It is then made available to us as the `id` argument to the method.
        //
        [HttpGet("{id}")]
        public async Task<ActionResult<PunchCard>> GetPunchCard(int id)
        {
            // Find the punchCard in the database using `FindAsync` to look it up by id
            var punchCard = await _context.PunchCards.FindAsync(id);

            // If we didn't find anything, we receive a `null` in return
            if (punchCard == null)
            {
                // Return a `404` response to the client indicating we could not find a punchCard with this id
                return NotFound();
            }

            //  Return the punchCard as a JSON object.
            return punchCard;
        }

        // PUT: api/PunchCards/5
        //
        // Update an individual punchCard with the requested id. The id is specified in the URL
        // In the sample URL above it is the `5`. The "{id} in the [HttpPut("{id}")] is what tells dotnet
        // to grab the id from the URL. It is then made available to us as the `id` argument to the method.
        //
        // In addition the `body` of the request is parsed and then made available to us as a PunchCard
        // variable named punchCard. The controller matches the keys of the JSON object the client
        // supplies to the names of the attributes of our PunchCard POCO class. This represents the
        // new values for the record.
        //
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPunchCard(int id, PunchCard punchCard)
        {
            // If the ID in the URL does not match the ID in the supplied request body, return a bad request
            if (id != punchCard.Id)
            {
                return BadRequest();
            }

            // Tell the database to consider everything in punchCard to be _updated_ values. When
            // the save happens the database will _replace_ the values in the database with the ones from punchCard
            _context.Entry(punchCard).State = EntityState.Modified;

            try
            {
                // Try to save these changes.
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                // Ooops, looks like there was an error, so check to see if the record we were
                // updating no longer exists.
                if (!PunchCardExists(id))
                {
                    // If the record we tried to update was already deleted by someone else,
                    // return a `404` not found
                    return NotFound();
                }
                else
                {
                    // Otherwise throw the error back, which will cause the request to fail
                    // and generate an error to the client.
                    throw;
                }
            }

            // Return a copy of the updated data
            return Ok(punchCard);
        }

        // POST: api/PunchCards
        //
        // Creates a new punchCard in the database.
        //
        // The `body` of the request is parsed and then made available to us as a PunchCard
        // variable named punchCard. The controller matches the keys of the JSON object the client
        // supplies to the names of the attributes of our PunchCard POCO class. This represents the
        // new values for the record.
        //
        [HttpPost]
        public async Task<ActionResult<PunchCard>> PostPunchCard(PunchCard punchCard)
        {
            // Indicate to the database context we want to add this new record
            _context.PunchCards.Add(punchCard);
            await _context.SaveChangesAsync();

            // Return a response that indicates the object was created (status code `201`) and some additional
            // headers with details of the newly created object.
            return CreatedAtAction("GetPunchCard", new { id = punchCard.Id }, punchCard);
        }

        // DELETE: api/PunchCards/5
        //
        // Deletes an individual punchCard with the requested id. The id is specified in the URL
        // In the sample URL above it is the `5`. The "{id} in the [HttpDelete("{id}")] is what tells dotnet
        // to grab the id from the URL. It is then made available to us as the `id` argument to the method.
        //
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePunchCard(int id)
        {
            // Find this punchCard by looking for the specific id
            var punchCard = await _context.PunchCards.FindAsync(id);
            if (punchCard == null)
            {
                // There wasn't a punchCard with that id so return a `404` not found
                return NotFound();
            }

            // Tell the database we want to remove this record
            _context.PunchCards.Remove(punchCard);

            // Tell the database to perform the deletion
            await _context.SaveChangesAsync();

            // Return a copy of the deleted data
            return Ok(punchCard);
        }

        // Private helper method that looks up an existing punchCard by the supplied id
        private bool PunchCardExists(int id)
        {
            return _context.PunchCards.Any(punchCard => punchCard.Id == id);
        }
    }
}
