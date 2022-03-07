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
        var myURL1 = "https://api.polygon.io/v2/aggs/ticker/C:" + base + convert +"/range/1/day/"+ FromDate + ToDate +"/company?apiKey=" + apiKey;
        /* Make the AJAX call */
        var msg1Object = await fetch(myURL1);
        /* Check the status */
        if (msg1Object.status >= 200 && msg1Object.status <= 299) {            
            var msg1JSONText = await msg1Object.text();
            // Parse the JSON string into an object
            var msg1 = JSON.parse(msg1JSONText);
            /* Your code to process the result goes here - 
               display the returned message */
            document.getElementById("close").innerHTML = msg1.close;
            document.getElementById("highest").innerHTML = msg1.highest;
            document.getElementById("lowest").innerHTML = msg1.lowest;
            document.getElementById("transactions").innerHTML = msg1.transactions;
            document.getElementById("msec").innerHTML = msg1.msec;
            document.getElementById("volume").href = msg1.volume;
            
        }
        else {
            /* AJAX complete with error - probably invalid stock ticker symbol */
                /* Your code to process the result goes here - 
                   display the returned message */
            alert("Stock Not Found - Status: " + msg1Object.status)
            return;
        }        
 
        /* URL for AJAX Call */
        var myURL2 = "https://api.polygon.io/v2/aggs/ticker/" + StockSymbol + "/range/1/day/" + FromDate + "/" + ToDate + "?unadjusted=false&sort=asc&limit=32&apiKey=" + apiKey;
        /* Make the AJAX call */
        var msg2Object = await fetch(myURL2);
        /* Check the status */
        if (msg2Object.status >= 200 && msg2Object.status <= 299) {            
            var msg2JSONText = await msg2Object.text();
            // Parse the JSON string into an object
            var msg2 = JSON.parse(msg2JSONText);
            /* Your code to process the result goes here - 
               display the returned message */
                /* Your code to process the result goes here  
                    display the returned message */
                var currencydate = [];
                var currencyvalue = [];
                var currencyvolume = [];
                var numdays = msg2.results.length;
                if (numdays > 0) {
                    for (var i = 0; i < numdays; i++) {
                        /* stock close value */
                        currencyvalue[i] = msg2.results[i].c;
                        /* stock volume */
                        currencyvolume[i] = msg2.results[i].v;
                        /* date is in Unix milleseconds - create a temporary date variable */
                        var tempdate = new Date(msg2.results[i].t);
                        /* extract the date string from the value */
                        currencydate[i] = tempdate.toLocaleDateString();
                    }
                }
                  /* convert these tables to currency conversion */
                var stockvaluetable = "";
                if (numdays > 0) {
                    stockvaluetable = stockvaluetable + "<table><caption>Stock Price</caption><tr><th>Date</th><th>Price</th></tr>";
                    for (var i = 0; i < numdays; i++) {
                        stockvaluetable = stockvaluetable + "<tr><td>" + stockdate[i] + "</td><td>" + stockvalue[i] + "</td></tr>";
                    }
                    stockvaluetable = stockvaluetable + "</table>"
                    document.getElementById("StockValueTable").innerHTML = stockvaluetable;
                }
                
                var stockvolumetable = "";
                if (numdays > 0) {
                    stockvolumetable = stockvolumetable + "<table><caption>Stock Volume</caption><tr><th>Date</th><th>Volume</th></tr>";
                    for (var i = 0; i < numdays; i++) {
                        stockvolumetable = stockvolumetable + "<tr><td>" + stockdate[i] + "</td><td>" + stockvolume[i] + "</td></tr>";
                    }
                    stockvolumetable = stockvolumetable + "</table>"
                    document.getElementById("StockVolumeTable").innerHTML = stockvolumetable;
                }

                var ctx0 = document.getElementById("chartjs-0");
                var myChart = new Chart(ctx0, {
                    "type":"line",
                    "data": {
                        "labels": stockdate,
                        "datasets":[{"label":"Stock Close",
                        "data": stockvalue,
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
                        "datasets":[{"label":"Stock Volume",
                        "data": stockvolume,
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
            alert("Stock Not Found - Status: " + msg2Object.status)
            return
        }
    }
}

function ClearForm() {
    document.getElementById("StockSymbol").value = "";
    document.getElementById("FromDate").value = "";
    document.getElementById("ToDate").value = "";
    document.getElementById("company").innerHTML = "";
    document.getElementById("address").innerHTML = "";
    document.getElementById("employees").innerHTML = "";
    document.getElementById("ceo").innerHTML = "";
    document.getElementById("url").innerHTML = "";
    document.getElementById("url").href = "";
    document.getElementById("logo").src = "";
    document.getElementById("StockValueTable").innerHTML = "";
    document.getElementById("StockVolumeTable").innerHTML = "";
    
    /* Ugly Code to Erase Canvas */
    var canvas0 = document.getElementById("chartjs-0");
    var context0 = canvas0.getContext('2d');    
    context0.clearRect(0, 0, canvas0.width, canvas0.height);
    var canvas1 = document.getElementById("chartjs-1");
    var context1 = canvas1.getContext('2d');    
    context1.clearRect(0, 0, canvas1.width, canvas1.height);
}