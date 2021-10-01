using DAL.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Helpers
{
    public interface IPokemonHelper
    {
        public Task<List<Pokemon>> OnGet();
        public Task<PokeObject> GetDetails(string pokeName);
        public Task<string> GetImageLink(string pokeName);
    }
}