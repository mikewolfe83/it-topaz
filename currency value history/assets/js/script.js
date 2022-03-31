//currency value script

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
        var myURL1 = "https://api.polygon.io/v2/aggs/ticker/C:" + base + convert +"/range/1/day/" + FromDate + "/" + ToDate + "?adjusted=true&sort=asc&limit=120&apiKey=" +apiKey;
        /* Make the AJAX call */
        var msg1Object = await fetch(myURL1);
        /* Check the status */
        if (msg1Object.status >= 200 && msg1Object.status <= 299) {            
            var msg1JSONText = await msg1Object.text();
            // Parse the JSON string into an object
            var msg1 = JSON.parse(msg1JSONText);
            /* Your code to process the result goes here - 
               display the returned message */
           
            
        }
        //else {
            /* AJAX complete with error - probably invalid stock ticker symbol */
                /* Your code to process the result goes here - 
                   display the returned message */
           // alert("Stock Not Found - Status: " + msg1Object.status)
            //return;
        //}//      
       
        /* Check the status */
       // if (msg2Object.status >= 200 && msg2Object.status <= 299) {    //        
          //  var msg2JSONText = await msg2Object.text();//
            // Parse the JSON string into an object//
           // var msg2 = JSON.parse(msg2JSONText);//
            
            /* Your code to process the result goes here - 
               display the returned message */
                /* Your code to process the result goes here  
                    display the returned message */
                var currencydate = [];
                var currencyvalue = [];
                var currencyvolume = [];
                var numdays = msg1.results.length;
                if (numdays > 0) {
                    for (var i = 0; i < numdays; i++) {
                        /* stock close value */
                        currencyvalue[i] = msg1.results[i].c;
                        /* stock volume */
                        currencyvolume[i] = msg1.results[i].v;
                        /* date is in Unix milleseconds - create a temporary date variable */
                        var tempdate = new Date(msg1.results[i].t);
                        /* extract the date string from the value */
                        currencydate[i] = tempdate.toLocaleDateString();
                    }
                }
                  /* convert these tables to currency conversion */
                var currencyvaluetable = "";
                if (numdays > 0) {
                    currencyvaluetable = currencyvaluetable + "<table><caption>Currency Value</caption><tr><th>Date</th><th>Price</th></tr>";
                    for (var i = 0; i < numdays; i++) {
                        currencyvaluetable = currencyvaluetable + "<tr><td>" + currencydate[i] + "</td><td>" + currencyvalue[i] + "</td></tr>";
                    }
                    currencyvaluetable = currencyvaluetable + "</table>"
                    document.getElementById("currencyValueTable").innerHTML = currencyvaluetable;
                }
                
                var currencyvolumetable = ""; 
                if (numdays > 0) {
                    currencyvolumetable = currencyvolumetable + "<table><caption>Currency Volume</caption><tr><th>Date</th><th>Volume</th></tr>";
                    for (var i = 0; i < numdays; i++) {
                        currencyvolumetable = currencyvolumetable + "<tr><td>" + currencydate[i] + "</td><td>" + currencyvolume[i] + "</td></tr>";
                    }
                    currencyvolumetable = currencyvolumetable + "</table>"
                    document.getElementById("currencyVolumeTable").innerHTML = currencyvolumetable;
                }

                var ctx0 = document.getElementById("chartjs-0");
                var myChart = new Chart(ctx0, {
                    "type":"line",
                    "data": {
                        "labels": currencydate,
                        "datasets":[{"label":"Currency Close",
                        "data": currencyvalue,
                        "fill":false,
                        "borderColor":"rgb(75, 192, 192)",
                        "lineTension":0.1}]},
                        "options":{ 
                            responsive: false,
                            maintainAspectRatio: true,
                        }
                    }
                );
                
                var ctx1 = document.getElementById("chartjs-1");
                var myChart = new Chart(ctx1, {
                    "type":"line",
                    "data": {
                        "labels": stockdate,
                        "datasets":[{"label":"Currency Volume",
                        "data": currencyvolume,
                        "fill":false,
                        "borderColor":"rgb(75, 192, 192)",
                        "lineTension":0.1}]},
                        "options":{ 
                            responsive: false,
                            maintainAspectRatio: true,
                        }
                    }
                );
            
        }
        else {
            /* AJAX completed with error - probably invalid stock ticker symbol */
            alert("Stock Not Found - Status: " + msg1Object.status)
            return
        }
    }




function ClearForm() {
    document.getElementById("close").value = "";
    document.getElementById("highest").value = "";
    document.getElementById("lowest").value = "";
    document.getElementById("transactions").innerHTML = "";
    document.getElementById("msec").innerHTML = "";
    document.getElementById("volume").innerHTML = "";
    
    
    /* Ugly Code to Erase Canvas */
    var canvas0 = document.getElementById("chartjs-0");
    var context0 = canvas0.getContext('2d');    
    context0.clearRect(0, 0, canvas0.width, canvas0.height);
    var canvas1 = document.getElementById("chartjs-1");
    var context1 = canvas1.getContext('2d');    
    context1.clearRect(0, 0, canvas1.width, canvas1.height);
}
