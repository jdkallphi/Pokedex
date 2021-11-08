using DAL.Helpers;
using MoreLinq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.DataConnection
{
    public static class DbInitializer
    {
        public static void Initialize(PokemonContext pokemonContext, PokemonHelper pokemonHelper)
        {

            pokemonContext.Database.EnsureCreated();
            if (pokemonContext.Pokemon.Any())
            {
                return;
            }
            var items = pokemonHelper.Get().Result;

            pokemonContext.AddRange(items);
            pokemonContext.SaveChanges();
            //foreach (var pok in items)
            //{
            //    pokemonContext.Pokemon.Add(
            //        pok
            //    );
            //pokemonContext.SaveChanges();
            //}
        }
    }
}
