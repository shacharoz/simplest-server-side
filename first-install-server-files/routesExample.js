module.exports = function(app) {

    
    // this is where all your code goes ========================================
	
    console.log('routes file running');
    
    ///SAMPLES DATABASE ========================================================
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
    
    ///DATABASE FUNCTIONALITY
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
    
    
    
	// server API  ===========================================================
	
	
    //GET 
    app.get('*', function(req, res) {
        /**
        example of a GET call:      http://your_url_number:port_number?variableName=value
                                    http://10.0.0.8:8080?requestedItemName=Keys
        **/
        console.log('please find this object '+ req.query);


        //look for item by name
        var resultItem = findItemByName (req.query.requestedItemName);


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
    });

    
    

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




};  // CLOSES THE TOP MOST LINE - module.exports = function(app) 