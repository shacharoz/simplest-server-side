

namespace CSharpAppSpeaksToServerExample
{
    class Position
    {
        public int X { get; set; }
        public int Y { get; set; }
        public int Width { get; set; }
        public int Height { get; set; }
    }

    class Item
    {
        public double Timestamp {get; set;}
        public string Name { get; set; }
        public int Status { get; set; }
        public Position Position { get; set; }
        
    }
}
