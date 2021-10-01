using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Domains
{
    public class PokemonResult
    {
        public int count { get; set; }
        public object previous { get; set; }
        public List<Pokemon> results { get; set; }
    }
}
