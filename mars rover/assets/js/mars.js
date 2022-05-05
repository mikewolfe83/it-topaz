

async function getImg() {
    "use strict";

     //Get a reference to the form - Use the ID of the form
    var form = $("#myform");
    
    //Validate all of the for elements
    form.validate();
    
    // If all of the form elements are valid, the get the form values
    if (form.valid()) {

     //make var for getting values from page
     var photoDate = document.getElementById("photoDate").value;
     var apiKey = "apS5n0gGQf84EhSXDheLf6PzZYJSXgAfrNnTlTbb";

     //get value from selected radio button

     var rover;
     if (document.getElementById("rd1").checked){
         rover = document.getElementById("rd1").value;
         alert("Thanks for selecting"+rd1.value);
     }
     if (document.getElementById("rd2").checked){
         rover = document.getElementById("rd2").value;
     }
     if (document.getElementById("rd3").checked){
         rover = document.getElementById("rd3").value;
     }

     var myURL = "https://api.nasa.gov/mars-photos/api/v1/rovers/"+ rover + "/photos?earth_date=" + photoDate + "&page=1&api_Key=" + apiKey;
     
     var myMethod = "Get";

     $(document).ready(function() { 
    
                $.ajax({
                  method: myMethod,
                  url: myURL
                })

               .done(function(msg) {
    
                    var numpictures = msg.photos.length;
                    if (numpictures > 0) {
                        for (var i = 0; i < 25; i++) {
                            if (i < numpictures) {
                            // Note how we construct the name for image1, image2, etc...this sets the image source
                                document.getElementById("image" + i).src = msg.photos[i].img_src;
                                document.getElementById("anchor" + i).href = msg.photos[i].img_src;
                            //do something to set the tool tip = msg.photos[i].camera.full_name;
                                document.getElementById("image" + i).title = msg.photos[i].camera.full_name;
                                document.getElementById("text1").innerHTML = msg.photos.length + " photos found";
                                document.getElementById("text2").innerHTML = "Click a photo to display full size";
                            }


                             else
                            {
                                document.getElementById("image" + i).src = "#";
                                document.getElementById("anchor" + i).href = "#";
                                document.getElementById("image" + i).style.display = "none";
                            }
                        }
                    }
                })

                .fail(function( msg ) {
                    alert("Rover Error On Return - Status: " + msg.status);
                });
            });
        }

    }

        function clearForm()  {
        for (var i = 0; i < 25; i++) {
        document.getElementById("rd1").checked = false;
        document.getElementById("rd2").checked = false;
        document.getElementById("rd3").checked = false;
        document.getElementById("photoDate").value = "";
        document.getElementById("roverError").innerHTML = "";
        document.getElementById("photoDateError").innerHTML = "";
        document.getElementById("image" + i).src = "#";
        document.getElementById("anchor" + i).href = "";
        document.getElementById("image" + i).title = "";
        document.getElementById("text1").innerHTML = "";
        document.getElementById("text2").innerHTML = "";
        }
    }

   function getCuriosity() {
        document.getElementById("photoDate").value = "2012-08-06";
    }
    
    function getOpportunity() {
        document.getElementById("photoDate").value = "2004-01-26";
    }
    
    function getSpirit() {
        document.getElementById("photoDate").value = "2004-01-05";
    }
   




                
   

       


   



     












