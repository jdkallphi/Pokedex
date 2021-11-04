using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Repositories.Interfaces
{
    public interface IRepository<TEntity> where TEntity : class
    {
        void Delete(TEntity entityToDelete);

        void Delete(int id);

        IEnumerable<TEntity> Get();

        TEntity GetById(int? id);

        IEnumerable<TEntity> Find(Expression<Func<TEntity, bool>> predicate);

        void Insert(TEntity entity);

        void Add(TEntity entity);

        void Update(TEntity entity);
        public void Save();
    }
}
