using DAL.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.Services.Interfaces
{
    public interface IImageService
    {
        public void SaveImages(List<Pokemon> pokes);

    }
}
