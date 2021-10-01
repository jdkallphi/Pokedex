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
        private readonly IList<CommentModel> _comments;
        private readonly IPokemonService _pokemonService;

        public HomeController(ILogger<HomeController> logger, IPokemonService pokemonService)
        {
            _pokemonService = pokemonService;
            _logger = logger;
            _comments = new List<CommentModel>
            {
                new CommentModel
                {
                    Id = 1,
                    Author = "Daniel Lo Nigro",
                    Text = "Hello ReactJS.NET World!"
                },
                new CommentModel
                {
                    Id = 2,
                    Author = "Pete Hunt",
                    Text = "This is one comment"
                },
                new CommentModel
                {
                    Id = 3,
                    Author = "Jordan Walke",
                    Text = "This is *another* comment"
                },
            };
        }
        [Route("comments")]
        [ResponseCache(Location = ResponseCacheLocation.None, NoStore = true)]
        public ActionResult Comments()
        {
            return Json(_comments);
        }
        [Route("comments/new")]
        [HttpPost]
        public ActionResult AddComment(CommentModel comment)
        {
            // Create a fake ID for this comment
            comment.Id = _comments.Count + 1;
            _comments.Add(comment);
            return Content("Success :)");
        }

        public IActionResult Index()
        {
            //var pokemons = _pokemonService.Get();
            //var mewtwo = _pokemonService.GetByName("MewTwo");
            return View();
        }
        [Route("pokemonlist")]
        public JsonResult PokemonList()
        {
            var item = _pokemonService.GetById(5);
            var items = _pokemonService.Get().OrderBy(x=>x.PokedexIndex);
            return Json(items);
        }
        [Route("pokemonimages")]
        public JsonResult GetImageUrls() 
        {
            var item = _pokemonService.GetById(5);
            return Json(item);
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
