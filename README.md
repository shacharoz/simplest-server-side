# simplest-server-side
a simple working server side open to multiple ways to access it (C#, Javascript, C++). it can be easily install and run in a few minutes




# what is this for:
- transfer data between elements that are tied together.
for example: IoT, robots, smart Home appliances.

video of running the samples


# audience:
- programmers of all types and languages.
but you must be capable in at least one language: C#, C++, C, Javascript.
- makers: if you build robots, toys, mechanical stuff.
this server can also be of great use especially for you.



# server setup
- install nodeJS from https://nodejs.org/en/download/ 
for standard installations, just pick the Windows installer for 64-bit
this is a one time step to make your PC capable of installing and running servers

- create a new directory for the server files

- copy the initial install files into the server folder
take these files from the "first-install" directory
you should have: server.js , routes.js , package.json

- install the server by typing "npm install" from the CMD of the server folder 
after that your folder should have another folder called "node_modules" with lots of sub-folders and files

- (add a picture of the right folder content)

- first try: to run the server got to CMD from the server folder and type "node server.js"
if all is correct, you should see "Magic happens on port 8080" without any other errors
otherwise, check the troubleshooting 

- fill server with app code
right now, you have a running and open server, but it has no functionality.
i have wrote a sample app that shows how to use the basic server functionality of POST and GET commands.

copy the code from routesExample.js and paste it into the routes.js file.
routes.js is the only file you need to write into. it defines the API of the server. you should not edit server.js for basic usages. 

- restart the server to run with the new code by pressing Cntr C (this stops the server) and type "node server.js" again
if all works properly, you should see "Routes sample app running" aove the "Magic happens on port 8080" without any other errors
now your server knows how to respond for 2 types of commands. let's validate that.

- you have also here 2 types of apps: C# app, built with visual studio, and a C++ app.
if you run the server and then run each of the apps (separately or together), you could see how you can communicate with the server and receive responses.



# troubleshooting
if from some reason things are not working properly please check these common issues:
- do not work under VPN
try to see if everything is fine on a normal public wifi

- remove any firewall
maybe you have a working antivirus with a strong firewall that blocks servers as these. 




# useful tools
- postman: free tool for simulating calls to the server. highly useful to see that the server works.
download from: https://www.getpostman.com/

- ipconfig: very useful command to check your ip address. you need the IPv4 address.


# people
shachar oz, UX, SW, Maker. documentation and product.
dor levy, SW Engineer and Maker. created the initial server
omer goshen, Full Stack Dev.