using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Domains
{
    public class Pokemon
    {
        public int Id { get; set; }
        public string url { get; set; }
        public string name { get; set; }
        public int PokedexIndex { get; set; }
    }
}
