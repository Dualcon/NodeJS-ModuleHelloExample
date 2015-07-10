"use strict"
if(process.argv.length > 2) {
    // Read the first additional argument passed to the program
    var parameter = process.argv[2]; 
	console.log("Hello " + parameter);
} else {
	console.log("Usage: hello-module <name>");
}