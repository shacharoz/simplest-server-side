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
    
    aa();
    
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
                    "position": {"x":1, "y":2, "width": 3, "height": 4}
                }
            }
            **/
            
            newReceivedItem = req.body.info;
            
            sampleDatabaseList.push(newReceivedItem); //add new item to the database 
            
            res.send('POST request accepted. Item was added to list. Number of items in database: '+sampleDatabaseList.length);
            break;
        
        
        
        case "findItem":
            /**
            {
                "function": "findItem",
                "requestedItemName": "Keys"
            }
            **/
            searchedName = req.body.requestedItemName;
            
            console.log('please find this item '+ searchedName);
            
            for (var j = 0; j < sampleDatabaseList.length; j++){
                if (sampleDatabaseList[j].name == searchedName) {
                    console.log('FOUND IT: ' + sampleDatabaseList[j]);
                    
                    //prepare the object for sending by making it a json string
                    var jsonString = JSON.stringify(sampleDatabaseList[j]);
                    res.send(jsonString);
                    
                    console.log(jsonString);
                    
                    break;
                }
            }

            console.log('SORRY, COULDNT FIND ITEM '+searchedName);
            res.send('SORRY, COULDNT FIND ITEM '+searchedName);
            break;
    }
});



function aa(){
    console.log('hello');
    
}





