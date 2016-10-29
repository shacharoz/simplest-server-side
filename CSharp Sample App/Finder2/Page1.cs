using Newtonsoft.Json;
using RestSharp;
using System;
using System.IO;
using System.Windows.Forms;

namespace CSharpAppSpeaksToServerExample
{
    public partial class Page1 : Form
    {
        public Page1()
        {
            InitializeComponent();
        }



        private Item FindItemAtServerDatabaseByName(string serverAddress, string requestedItemName)
        {
            //building the request that is going to be sent to the server
            var client = new RestClient(serverAddress); //define the server address, the ip + port
            var request = new RestRequest(Method.POST); //define the method of communication. either POST or GET. i used POST
            request.AddHeader("postman-token", "2d228ffe-1b30-879d-800e-0bc2337d4528"); //some mandatory stuff
            request.AddHeader("cache-control", "no-cache"); //some mandatory stuff
            request.AddHeader("content-type", "application/json"); //tell the server we are using JSON here


            //lets define the Json variable itself.    
            //you can use this formatter for this task: http://www.freeformatter.com/json-escape.html
            request.AddParameter("application/json",
                "{\r\n    \"function\": \"findItem\",\r\n \"requestedItemName\": \"" + requestedItemName + "\"\r\n}",
                ParameterType.RequestBody);

            //we will now send the Request to the server and wait for an answer
            IRestResponse response = client.Execute(request);


            //the response object contains the answer from the server. 
            //but we need to translate it before we can really use it. 
            //this process is also called "Deserialization"

            var content = response.Content;

            JsonTextReader reader = new JsonTextReader(new StringReader(content));
            JsonSerializer serializer = new JsonSerializer();
            Item item = serializer.Deserialize<Item>(reader);

            return item;
        }


        private void FinishResponse(Item responseItem)
        {

            if (responseItem.Status == 404)
            {
                Console.WriteLine("item with that name not found");
            }
            else
            {
                Console.WriteLine("result received: " + responseItem.Name + " " + responseItem.Timestamp);
            }
        }


        private void button1_Click(object sender, EventArgs e)
        {
            // code to retrieve data 
            Item res = FindItemAtServerDatabaseByName("http://10.0.0.8:8080/", "Keys");

            FinishResponse(res);
        }

        private void button2_Click(object sender, EventArgs e)
        {
            // code to retrieve data 
            Item res = FindItemAtServerDatabaseByName("http://10.0.0.8:8080/", "Phone");

            FinishResponse(res);
        }




        private void AddItemToServerDatabase(string serverAddress, Item newItem)
        {
            //building the request that is going to be sent to the server
            var client = new RestClient(serverAddress); //define the server address, the ip + port
            var request = new RestRequest(Method.POST); //define the method of communication. either POST or GET. i used POST
            request.AddHeader("postman-token", "2d228ffe-1b30-879d-800e-0bc2337d4528"); //some mandatory stuff
            request.AddHeader("cache-control", "no-cache"); //some mandatory stuff
            request.AddHeader("content-type", "application/json"); //tell the server we are using JSON here

            //lets define the Json variable itself.    
            //you can use this formatter for this task: http://www.freeformatter.com/json-escape.html
            request.AddParameter("application/json",
                "{\r\n  \"function\": \"add\",\r\n   \"info\": \r\n   {\r\n    \"timestamp\": "+ newItem.Timestamp.ToString() +
                ", \r\n  \"name\": \""+ newItem.Name+
                "\", \r\n  \"position\": {\"x\":"+ newItem.Position.X.ToString()+", \"y\":"+newItem.Position.Y.ToString() +
                ", \"width\": "+newItem.Position.Width.ToString() +", \"height\": "+newItem.Position.Height.ToString() +
                "}\r\n    }\r\n   }\r\n",
                ParameterType.RequestBody);

            //we will now send the Request to the server
            IRestResponse response = client.Execute(request);

            
        }

        private void button3_Click(object sender, EventArgs e)
        {
            Item keys = new Item();
            keys.Name = "Keys";
            keys.Position = new Position(); keys.Position.X = 1; keys.Position.Y=2; keys.Position.Width=3; keys.Position.Height = 4;
            keys.Timestamp = 123456789;


            AddItemToServerDatabase("http://10.0.0.8:8080/", keys);
        }

        private void button4_Click(object sender, EventArgs e)
        {
            Item phone = new Item();
            phone.Name = "Phone";
            phone.Position = new Position(); phone.Position.X = 1; phone.Position.Y = 2; phone.Position.Width = 3; phone.Position.Height = 4;
            phone.Timestamp = 123456789;


            AddItemToServerDatabase("http://10.0.0.8:8080/", phone);

        }
    }
}
