using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.DTO
{
    public class PokemonDTO
    {
        public int Id { get; set; }
        public string name { get; set; }
        public string url { get; set; }
        public string imageUrl { get; set; }
        public int PokedexIndex { get; set; }

    }
}
