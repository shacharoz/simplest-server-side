// modules =================================================
var express        = require('express');
var app            = express();
var mongoose       = require('mongoose');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');

// configuration ===========================================
	
// config files
var db = require('./config/db');

var port = process.env.PORT || 8080; // set our port
// mongoose.connect(db.url); // connect to our mongoDB database (commented out after you enter in your own credentials)

// get all data/stuff of the body (POST) parameters
app.use(bodyParser.json()); // parse application/json 
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded

app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(express.static(__dirname + '/public')); // set the static files location /public/img will be /img for users

// routes ==================================================
require('./app/routes')(app); // pass our application into our routes

// start app ===============================================
app.listen(port);	
console.log('Magic happens on port ' + port); 			// shoutout to the user
exports = module.exports = app;// expose app








// your code starts here ===========================================


///SAMPLES DATABASE

var sampleDatabaseList = 
[   
    {   
        "timestamp": 1477514910, 
        "name": "Keys",
        "position": {"x":1, "y":2, "width": 3, "height": 4}
    },
    {   
        "timestamp": 1477514910, 
        "name": "Keys", 
        "position": {"x":1, "y":2, "width": 3, "height": 4}
    }
];

/*
//GET FUNCTIONALITY DOESNT WORK FROM UNKNOWN REASON
app.get('/', function(req, res){
    
    searchedName = req.body.missingObjectName;
    
    console.log('please find this object '+ searchedName);
    
    for (var j = 0; j < objectsDatabaseList.length; j++){
        if (objectsDatabaseList[j].name == searchedName) {
            console.log('here it is '+objectsDatabaseList[j]);
            res.send(objectsDatabaseList[j]);
            return objectsDatabaseList[j];
        }
    }
    
    console.log('not found');
    res.send('not found');
});
*/





/**
all POST requests should have this JSON formation
    {
        "function": "FUNCTION_NAME",
        "info": 
        {
            any info or data you want to use or calculate in the server
        }
    }
    
    
    in this example code i use the server to keep track of database in the form of a list of data.
    {   
        "timestamp": 1477514910, 
        "name": "Keys", 
        "position": {"x":1, "y":2, "width": 3, "height": 4}
    }
**/
app.post('/', function(req, res){
    
    switch (req.body.function)      //the switch is used to see what function you like to ask from the server 
    {  
        case "add":
            /**
            {
                "function": "add",
                "info": 
                {
                    "timestamp": 1477514910, 
                    "name": "Keys", 
                    "status": 1,
                    "position": {"x":1, "y":2, "width": 3, "height": 4}
                }
            }
            **/
            
            addNewItem(req.body.info);
            
            console.log('request accepted');
            res.send('POST request accepted. Item was added to list. Number of items in database: '+sampleDatabaseList.length); //send a response to the user 
            break;
        
        
        
        case "findItem":
            /**
            {
                "function": "findItem",
                "requestedItemName": "Keys"
            }
            **/
            
            //look for item by name
            var resultItem = findItemByName (req.body.requestedItemName);
  
            
            //send result
            //prepare the object for sending by making it a json string
            if (resultItem == null){
                var emptyJsonString = JSON.stringify( {"status":404} );
                
                console.log('SORRY, COULDNT FIND ITEM '+req.body.requestedItemName);
                res.send(emptyJsonString);
                
            } else {
                var jsonString = JSON.stringify(resultItem);
                
                console.log('send back: '+ jsonString);
                res.send(jsonString);
            }
            break;
    }
});



function addNewItem(newReceivedItem){
    console.log('adding item to database');
    sampleDatabaseList.push(newReceivedItem); //add new item to the database 

}

function findItemByName(searchedName) {
    console.log('looking for item name: '+ searchedName);
    
    for (var j = 0; j < sampleDatabaseList.length; j++){
        if (sampleDatabaseList[j].name == searchedName) {
            
            console.log('FOUND IT: ' + sampleDatabaseList[j]);
            return sampleDatabaseList[j];
            
            break;
        }
    }
    
    return null;
}




