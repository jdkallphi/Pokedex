using BLL.Services.Interfaces;
using DAL.Domains;
using DAL.Repositories.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.Services
{
   public class MultiThreadingImages: IMultiThreadingImages
    {
        private IImageService _imageService;
        private List<Pokemon> _pokemons;
        private readonly IPokemonRepository _pokemonRepository;

        public MultiThreadingImages( IImageService imageService, IPokemonRepository pokemonRepository) {
            _imageService = imageService;
            _pokemonRepository = pokemonRepository;

        }

        public void ThreadImages() {
            var pokeNoImg = _pokemonRepository.Get().Where(x => x.ImageUrl == null).ToList();

            _imageService.SaveImages(pokeNoImg);
        }
    }
}
