using DAL.Domains;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;

namespace DAL.Helpers
{
    public class PokemonHelper : IPokemonHelper
    {

        public async Task<List<Pokemon>> Get()
        {
            PokemonResult pokemonresult = new PokemonResult();
            string url = "https://pokeapi.co/api/v2/pokemon?limit=151";

            using (HttpClient client = new HttpClient())
            using (HttpResponseMessage response = await client.GetAsync(url))
            using (HttpContent content = response.Content)
            {
                string result = await content.ReadAsStringAsync();

                if (result != null && result.Length >= 50)
                {
                    pokemonresult = JsonConvert.DeserializeObject<PokemonResult>(result);
                }
            }
            //order by pokeIndex
            var pokemons=pokemonresult.results.OrderBy(x=>int.Parse(x.url.Split('/',StringSplitOptions.RemoveEmptyEntries).Last())).ToList();
            //put said index in item
            pokemons.ForEach(x=>x.PokedexIndex = int.Parse(x.url.Split('/', StringSplitOptions.RemoveEmptyEntries).Last()));

            return pokemons;
        }
        /// <summary>
        /// this can both be done with pokemon name and pokedexIndex
        /// </summary>
        public async Task<PokeObject> GetDetails(string pokeName) {
            string url = "https://pokeapi.co/api/v2/pokemon/"+ pokeName;
            PokeObject poke = new PokeObject();
            using (HttpClient client = new HttpClient())
            using (HttpResponseMessage response = await client.GetAsync(url))
            using (HttpContent content = response.Content)
            {
                string result = await content.ReadAsStringAsync();

                if (result?.Length >= 50)
                {
                    poke = JsonConvert.DeserializeObject<PokeObject>(result);
                }
            }
            return poke;
        }
        public async Task<string> GetImageLink(string pokeName) {
            
            PokeObject pokeObject =await GetDetails(pokeName);
            return pokeObject.sprites.front_default;
        }
    }
}
