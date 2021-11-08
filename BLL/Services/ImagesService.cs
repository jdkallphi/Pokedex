using BLL.Services.Interfaces;
using DAL.Domains;
using DAL.Helpers;
using DAL.Repositories.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Channels;
using System.Threading.Tasks;

namespace BLL.Services
{
    public class ImagesService : IImagesService
    {
        private readonly IPokemonRepository _pokemonRepository;
        private readonly IPokemonHelper _pokemonHelper;

        public ImagesService(IPokemonHelper pokemonHelper, IPokemonRepository pokemonRepository)
        {
            _pokemonRepository = pokemonRepository;
            _pokemonHelper = pokemonHelper;

        }
        public async Task SaveImagesAsync(CancellationToken stoppingToken)
        {
            while (!stoppingToken.IsCancellationRequested)
            {
                try
                {
                    foreach (var poke in _pokemonRepository.Get().Where(x => x.ImageUrl == null).ToList())
                    {
                        poke.ImageUrl = _pokemonHelper.GetImageLink(poke.name).Result;
                        _pokemonRepository.Update(poke);
                        await _pokemonRepository.SaveAsync();
                    }
                }
                catch (Exception ex)
                {
                    Console.WriteLine(ex);
                    throw;
                }
            }
        }
    }
}
