module.exports = function(app) {

    
    // this is where all your code goes ========================================
	
    
    
    
	// server API  ===========================================================
	
	
    //GET 
    app.get('*', function(req, res) {
        /**
        example of a GET call:      http://your_url_number:port_number?variableName=value
                                    http://10.0.0.8:8080?requestedItemName=Keys
        **/
     
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
    **/
    app.post('/', function(req, res){

      
    });




};  // CLOSES THE TOP MOST LINE - module.exports = function(app) 