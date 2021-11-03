using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.Services.Interfaces
{
    public interface IService<T> where T : class
    {
        public T GetById(int? id);
        public void Add(T item);

        public void Update(T item);

        public void Delete(T item);

        public void Delete(int id);
    }
}
