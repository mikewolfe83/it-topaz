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

         // floating point value of diameter		  
		   var diameterfp;
		   
		 // floating point value of diameter	
		   var circumferencefp;
		   
		 // floating point area
		   var area;  
		 
		 
		 // read in the legs as a string
            radius = document.getElementById("radius").value;
		 
		 // convert to a fp number
           radiusfp = parseFloat(radius); 
		 
		 // Convert numbers from strings to Floating Point
		   //diameterfp = parseFloat( diameter ); 
           //circumferencefp = parseFloat( circumference );
		   
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
