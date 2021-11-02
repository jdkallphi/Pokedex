using AutoMapper;
using BLL.DTO;
using DAL.Helpers;
using BLL.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL.Repositories.Interfaces;
using DAL.Domains;

namespace BLL.Services
{
    public class PokemonService : IPokemonService
    {
        private readonly IPokemonRepository _pokemonRepository;
        private readonly IPokemonHelper _IpokemonHelper;
        private readonly IMapper _mapper;

        public PokemonService(IMapper mapper, IPokemonHelper pokemonHelper, IPokemonRepository pokemonRepository)
        {
            _pokemonRepository = pokemonRepository;
            _IpokemonHelper = pokemonHelper;
            _mapper = mapper;

        }
        public void Add(PokemonDTO item)
        {
            throw new NotImplementedException();
        }

        public void Delete(PokemonDTO item)
        {
            throw new NotImplementedException();
        }

        public void Delete(int id)
        {
            throw new NotImplementedException();
        }

        public List<PokemonDTO> Get()
        {
            var pokemons = _pokemonRepository.Get().OrderBy(x => x.PokedexIndex).ToList();
            if (pokemons.Count == 0)
            {
                pokemons = _IpokemonHelper.OnGet().Result;
            }
            return _mapper.Map<List<PokemonDTO>>(pokemons);
        }

        public List<PokemonDTO> GetPaged(int page, int count, string search)
        {
            List<Pokemon> pokemons = new();
            if (!string.IsNullOrWhiteSpace(search))
            {
                pokemons = _pokemonRepository.Find(x=>x.name.Contains(search)).ToList();
            }
            else
            {
                pokemons = _pokemonRepository.Get().ToList();
            }
            pokemons = pokemons.OrderBy(x => x.PokedexIndex).Skip(page * count).Take(count).ToList();
            List<PokemonDTO> pokemonDTOs = _mapper.Map<List<PokemonDTO>>(pokemons);
            foreach (var pokemon in pokemonDTOs)
            {
                pokemon.imageUrl = _IpokemonHelper.GetImageLink(pokemon.name).Result;
            }
            return pokemonDTOs;
        }

        public PokeObjectDTO GetById(int? id)
        {
            var pokemons = _IpokemonHelper.GetDetails(id.ToString()).Result;
            var pokemonDTOs = _mapper.Map<PokeObjectDTO>(pokemons);
            return pokemonDTOs;
        }
        public PokeObjectDTO GetByName(string name)
        {
            var pokemons = _IpokemonHelper.GetDetails(name).Result;
            var pokemonDTOs = _mapper.Map<PokeObjectDTO>(pokemons);
            return pokemonDTOs;
        }

        public void Update(PokemonDTO item)
        {
            throw new NotImplementedException();
        }

        PokemonDTO IService<PokemonDTO>.GetById(int? id)
        {
            throw new NotImplementedException();
        }
    }
}
