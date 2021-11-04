using BLL.Services.Interfaces;
using DAL.Domains;
using DAL.Helpers;
using DAL.Repositories.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.Services
{
    public class ImagesService : IImageService
    {
        private readonly IPokemonRepository _pokemonRepository;
        private readonly IPokemonHelper _IpokemonHelper;

        public ImagesService(IPokemonHelper pokemonHelper, IPokemonRepository pokemonRepository)
        {
            _pokemonRepository = pokemonRepository;
            _IpokemonHelper = pokemonHelper;

        }
        public void SaveImages(List<Pokemon> pokes)
        {
            try
            {

                foreach (var poke in pokes)
                {
                    poke.ImageUrl = _IpokemonHelper.GetImageLink(poke.name).Result;
                    _pokemonRepository.Update(poke);
                    _pokemonRepository.Save();
                    //Task.Delay(1000);
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
