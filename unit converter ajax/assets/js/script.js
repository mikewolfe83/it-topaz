function calculate() {
    "use strict";

    // Get a reference to the form - Use the ID of the form
    var form = $( "#myform" );

     // If all of the form elements are valid, the get the form values
     if (form.valid()) {

    // Operand 1
    var operand1 = document.getElementById("Operand1").value;

    // Operator
        // Get the value associated with the operator that was checked (+, -, *, or /)
        var operator;

        if (document.getElementById("cm").checked) {
            operator = document.getElementById("cm").value;
        }
        if (document.getElementById("m").checked) {
            operator = document.getElementById("m").value;
        }
        if (document.getElementById("km").checked) {
            operator = document.getElementById("km").value;
        }
        if (document.getElementById("in").checked) {
            operator = document.getElementById("in").value;
        }
        if (document.getElementById("ft").checked) {
            operator = document.getElementById("ft").value;
        }
        if (document.getElementById("yd").checked) {
            operator = document.getElementById("yd").value;
        }
        if (document.getElementById("mi").checked) {
            operator = document.getElementById("mi").value;
        }

        // Operand 2
        var operand2 = document.getElementById("Operand2").value;
        

        CalculateResult(operand1, operator, operand2);
    }
}

async function CalculateResult(operand1, operator, operand2) {
        
    // URL and method used with AJAX Call
    var myURL = "https://brucebauer.info/assets/ITEC3650/ajaxcalculator.php";

    /* AJAX calculator requires Operand1, Operator, and Operand2 */
    myURL = myURL + "?Operand1=" + encodeURIComponent(operand1) + "&Operator=" + encodeURIComponent(operator) + "&Operand2=" + encodeURIComponent(operand2);

    /* fetch the results */
    let myCalcObject = await fetch(myURL);
    let myResult = await myCalcObject.text();
    
    document.getElementById("Result").innerHTML = myResult;
}

function clearform() {
    "use strict";
    
    /* Set all of the form values to blank or false */
    document.getElementById("Operand1").value = "";
    document.getElementById("Operand1Msg").innerHTML = "";
    document.getElementById("cm").checked = false;
    document.getElementById("m").checked = false;
    document.getElementById("km").checked = false;
    document.getElementById("in").checked = false;
    document.getElementById("ft").innerHTML = "";
    document.getElementById("yd").value = "";
    document.getElementById("mi").innerHTML = "";
    document.getElementById("Result").innerHTML = "";
}

$( "#myform" ).validate({

});