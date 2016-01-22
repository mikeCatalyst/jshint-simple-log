"use strict";

var fs = require("fs");
var fileName = "jshint-output.log";

module.exports = {
    reporter: function (results) {
        
        var output = [];
        
        if (results.length === 0) {
            fs.unlinkSync(fileName); // remove log file to not confuse the report
            return console.log("No errors found.");
        }
        
        results.forEach(function (result, i) {
           var error = result.error;
           
           if (i === 0) {
               // put the filename as the first entry for easier reading
               output.push(results.length + " lint errors found in the file " + result.file);
           }
           
           output.push(" [" + error.line + ":" + error.character + "] - (" + error.code + ") - " + error.reason);
        });
        
        fs.writeFileSync(fileName, output.join("\n"));   
        console.log(results.length + " errors found. Output logged to " + fileName);
    }
};