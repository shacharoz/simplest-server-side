module.exports = function(app) {

	// server routes ===========================================================
	// handle things like api calls
	// authentication routes

	// frontend routes =========================================================
	// route to handle all angular requests
	app.get('*', function(req, res) {
		
        
        //res.sendfile('./public/index.html');
        
        
        
        
        console.log('not found');
        res.send('not found');
	});

};