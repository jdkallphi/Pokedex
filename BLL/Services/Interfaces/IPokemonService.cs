using BLL.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.Services.Interfaces
{
    public interface IPokemonService : IService<PokemonDTO>
    {
        new public PokeObjectDTO GetById(int? id);
        public PokeObjectDTO GetByName(string name);
        public List<PokemonDTO> GetPaged(int page, int count, string search);
    }
}
