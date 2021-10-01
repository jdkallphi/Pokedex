using DAL.DataConnection;
using DAL.Domains;
using DAL.Repositories.Interfaces;


namespace DAL.Repositories
{
   public class PokemonRepository:BaseRepository<Pokemon> ,IPokemonRepository
    {
        public PokemonRepository(PokemonContext context) : base(context)
        {
            this.context = context;
        }
    }
}
