async function GetCurrency() {
"use strict";

// Get a reference to the form - Use the ID of the form
var form = $("#myform");

// Validate all of the for elements
form.validate();

// If all of the form elements are valid, the get the form values
if (form.valid()) {
    
    var base = document.getElementById("base").value;
    var convert = document.getElementById("convert").value;
    var apiKey = "uZBb74dea680CgzC_UU24bugKdxBktth"
    var FromDate = document.getElementById("FromDate").value;
    var ToDate = document.getElementById("ToDate").value;

    /* URL for AJAX Call */
    var myURL1 = "https://api.polygon.io/v2/aggs/ticker/C:" + base + convert + "/range/1/day/" + FromDate + 
        "/" + ToDate + "?adjusted=true&sort=asc&limit=120&apiKey=" + apiKey;
    /* Make the AJAX call */
    var msg1Object = await fetch(myURL1);
    /* Check the status */
    if (msg1Object.status >= 200 && msg1Object.status <= 299) {            
        var msg1JSONText = await msg1Object.text();
        // Parse the JSON string into an object
        var msg1 = JSON.parse(msg1JSONText);
        /* Your code to process the result goes here - 
           display the returned message */
           var currencydate = [];
           var currencyvalue = [];
           var numdays = msg1.results.length;
           if (numdays > 0) {
               for (var i = 0; i < numdays; i++) {
                   /*currency close value */
                   currencyvalue[i] = msg1.results[i].c;
                   /* date is in Unix milliseconds - create temporary date variable */
                   var tempdate = new Date(msg1.results[i].t);
                   /* extract the date string from the value */
                   currencydate[i] = tempdate.toLocaleDateString();
               }
           }
    }
    else {
        /* AJAX complete with error - probably invalid currency ticker symbol */
            /* Your code to process the result goes here - 
               display the returned message */
        alert("currency Not Found - Status: " + msg1Object.status)
        return;
        }        
            document.getElementById("title").innerHTML = base + " to " + convert;
            var ctx0 = document.getElementById("chartjs-0");
            var myChart = new Chart(ctx0, {
                "type":"line",
                "data": {
                    "labels": currencydate,
                    "datasets":[
                        {
                        "label":"One " + base + " to " + convert,
                        "data": currencyvalue,
                        "fill": false,
                        "borderColor":"rgb(75,192,192)",
                        "lineTension":0.1
                        }
                    ]
                },
                    }
            );
        }



function ClearForm() {
document.getElementById("base").value = "";
document.getElementById("convert").value = "";
document.getElementById("FromDate").value = "";
document.getElementById("ToDate").value = "";
document.getElementById("title").value = "";

/* Ugly Code to Erase Canvas */
var canvas0 = document.getElementById("chartjs-0");
var context0 = canvas0.getContext('2d');    
context0.clearRect(0, 0, canvas0.width, canvas0.height);

}

}