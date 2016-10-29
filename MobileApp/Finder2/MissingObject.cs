using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;

namespace Finder2
{
    class Position
    {
        public int X { get; set; }
        public int Y { get; set; }
        public int Width { get; set; }
        public int Height { get; set; }

    }

    class MissingObject
    {
        public double Timestamp {get; set;}
        public string Name { get; set; }
        public string Picture { get; set; }
        public Position Position { get; set; }


       public string ImagePath { get; set; }
        
    }
}
