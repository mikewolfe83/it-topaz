$( "#CircleForm" ).validate({

});

function displayarea() {
    // if the form is valid, then make the calculations
    if ($("#CircleForm").valid()) {
        
         document.getElementById("area").innerHTML = "";

         var diameter; // string representation of the diameter
         var diameterfp; // floating point value of diameter
         var circumference; // string representation of the diameter
         var circumferencefp; // floating point value of diameter
         var area;  // floating point area
         var result; // displayable result

         // read in the legs as a string
         diameter = document.getElementById("diameter").value;
         circumference = document.getElementById("circumference").value;

         // Convert numbers from strings to Floating Point
         diameterfp = parseFloat( diameter ); 
         circumferencefp = parseFloat( circumference ); 

         // calculate the area
         area = calcarea(diameterfp, circumferencefp);

         // display the area
         document.getElementById("area").innerHTML = area.toString();
    }
}

  function calcarea (diametervalue, circumferencevalue)
  // returns area of a right triangle
  // square root of diameter squared plus circumference squared
  {
      return Math.sqrt((diametervalue*diametervalue) + (circumferencevalue*circumferencevalue));
  }
  
  function clearForm()
{
    document.getElementById("diameter").value = "";
    document.getElementById("diametererror").innerHTML = "";
    document.getElementById("circumference").value = "";
    document.getElementById("circumferenceerror").innerHTML = "";
    document.getElementById("area").innerHTML = "";
}
