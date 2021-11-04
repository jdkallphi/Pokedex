using BLL.DTO;
using BLL.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Pokedex.Models;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;

namespace Pokedex.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly IPokemonService _pokemonService;

        public HomeController(ILogger<HomeController> logger, IPokemonService pokemonService)
        {
            _pokemonService = pokemonService;
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }
        [Route("pokemonlist")]
        public JsonResult PokemonList()
        {
            var items = _pokemonService.Get().OrderBy(x => x.PokedexIndex).ToList();
            return Json(items.Count);
        }
        [Route("limitedpokemonlist/{page?}/{count?}/{search?}")]
        public JsonResult LimitedPokemonList(int? page, int? count, string search)
        {
            List<PokemonDTO> items = _pokemonService.GetPaged(page, count, search);
            
            return Json(items);
        }
        [Route("pokemonimages")]
        public JsonResult GetImageUrls()
        {
            var item = _pokemonService.GetById(5);
            return Json(item);
        }

        [Route("pokemondetails/{id}")]
        public JsonResult GetPokemonDetails(int id)
        {
            PokeObjectDTO pokeObjectDTO = new PokeObjectDTO();
            if (id > -1)
            {
                pokeObjectDTO = _pokemonService.GetById(id);

            }
            return Json(pokeObjectDTO);
        }
        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
