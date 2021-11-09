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
using System.Threading;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;

namespace BLL.Services
{
    public class PokemonService : IPokemonService
    {
        private readonly IPokemonRepository _pokemonRepository;
        private readonly IPokemonHelper _pokemonHelper;
        private readonly IMapper _mapper;
        private readonly IBackgroundTaskQueue _backgroundTaskQueue;

        public PokemonService(IMapper mapper, IPokemonHelper pokemonHelper, IPokemonRepository pokemonRepository, IBackgroundTaskQueue backgroundTaskqueue)
        {
            _pokemonRepository = pokemonRepository;
            _pokemonHelper = pokemonHelper;
            _mapper = mapper;
            _backgroundTaskQueue = backgroundTaskqueue;

        }

        public List<PokemonDTO> Get()
        {
            var pokemons = _pokemonRepository.Get().OrderBy(x => x.PokedexIndex).ToList();
            if (pokemons.Count == 0)
            {
                pokemons = _pokemonHelper.Get().Result;
                foreach (var poke in pokemons)
                {
                    _pokemonRepository.Add(poke);
                }
            }

            return _mapper.Map<List<PokemonDTO>>(pokemons);
        }

        public async Task<List<PokemonDTO>> GetPaged(int? page, int? count, string search)
        {
            List<Pokemon> pokemons = new();
            if (!string.IsNullOrWhiteSpace(search))
            {
                pokemons = _pokemonRepository.Find(x => x.name.Contains(search)).ToList();
            }
            else
            {
                pokemons = _pokemonRepository.Get().ToList();
            }

            pokemons = pokemons.OrderBy(x => x.PokedexIndex).ToList();
            if (page != null && count != null)
            {
                pokemons = pokemons.Skip((int)page * (int)count).Take((int)count).ToList();

            }

            List<PokemonDTO> pokemonDTOs = _mapper.Map<List<PokemonDTO>>(pokemons);


            foreach (var pokemon in pokemonDTOs)
            {
                if (string.IsNullOrWhiteSpace(pokemon.imageUrl))
                {
                    var poke = _pokemonRepository.GetById(pokemon.Id);
                    poke.ImageUrl = await _pokemonHelper.GetImageLink(poke.name);
                    _pokemonRepository.Update(poke);
                    pokemon.imageUrl = poke.ImageUrl;
                }
            }
            await _pokemonRepository.SaveAsync();
            if (_pokemonRepository.Get().Any(x => x.ImageUrl == null))
            {
                _backgroundTaskQueue.EnqueueTask(async (serviceScopeFactory, cancellationToken) =>
                {
                    // Get services
                    using var scope = serviceScopeFactory.CreateScope();
                    var myService = scope.ServiceProvider.GetRequiredService<ImagesService>();
                    var logger = scope.ServiceProvider.GetRequiredService<ILogger<PokemonService>>();
                    try
                    {
                        // Do something expensive
                        await myService.SaveImagesAsync(cancellationToken);
                    }
                    catch (Exception ex)
                    {
                        logger.LogError(ex, "Could not do something expensive");
                    }
                });
            }
            return pokemonDTOs;
        }

        public PokeObjectDTO GetById(int? id)
        {
            var pokemonObject = _pokemonHelper.GetDetails(id.ToString()).Result;
            var pokemonObjectDTO = _mapper.Map<PokeObjectDTO>(pokemonObject);
            return pokemonObjectDTO;
        }
        public PokeObjectDTO GetByName(string name)
        {
            var pokemonObject = _pokemonHelper.GetDetails(name).Result;
            var pokemonObjectDTO = _mapper.Map<PokeObjectDTO>(pokemonObject);
            return pokemonObjectDTO;
        }
    }
}
