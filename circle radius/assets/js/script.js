$( "#CircleForm" ).validate({ 

});

function displayArea() {
    // if the form is valid, then make the calculations
    if ($("#CircleForm").valid()) {
        
         document.getElementById("area").innerHTML = "";

		 // string representation of the radius
           var radius;
		   
		 // floating point value of radius
		   var radiusfp;

         // Diameter value
		    var diameter

         // Diameter circumference
		    var circumference

		 // floating point area
		   var area;  
		 
		 
		 // get the value of raduis form the form
            radius = document.getElementById("radius").value;
		 
		 // convert radius value string to a floating point number
           radiusfp = parseFloat(radius); 
		 
		
		   
		 // calculate the area
           area = calcArea(radiusfp);
           diameter = calcDiameter(radiusfp);
           circumference = calcCircumference(radiusfp); 

        //display Circ & Dia
         document.getElementById("diameter").innerHTML = diameter.toString();
         document.getElementById("circumference").innerHTML = circumference.toString();  
		   
		 //display the area
			document.getElementById("area").innerHTML = area.toString();
		}
	}		

        //calc diameter

        function calcDiameter(radiusvalue){
            return 2 * radiusvalue
        }

        //calc circumfrence 
        
        function calcCircumference(radiusvalue){
            return 2 * Math.PI *radiusvalue
        }

         //function that returns the radius value 
		 
		   function calcArea(radiusvalue){
		   
		   return Math.PI * radiusvalue * radiusvalue;
		   
		   }


         
        function clearForm()
{
    document.getElementById("radius").value = "";
    document.getElementById("radiuserror").innerHTML = "";
    document.getElementById("diameter").value = "";
    document.getElementById("diametererror").innerHTML = "";
    document.getElementById("circumference").value = "";
    document.getElementById("circumferenceerror").innerHTML = "";
    document.getElementById("area").innerHTML = "";
}
