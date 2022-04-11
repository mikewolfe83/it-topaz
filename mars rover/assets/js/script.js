
const btn = document.querySelector('#btn');

const radioButtons = document.querySelectorAll('input[name="rover"]');

btn.addEventListener("click",() => {

     let selectedRover;
     for (const radioButton of radioButtons) {
         if (radioButton.checked){
             selectedRover = radioButton.ariaValueMax;
             break;
         }
     }

     var apiKey = "apS5n0gGQf84EhSXDheLf6PzZYJSXgAfrNnTlTbb"

     const date = document.getElementById("txtName").value;

     var myURL1 = "https://api.nasa.gov/mars-photos/api/v1/rovers/"+selectedRover+"/photos?earth_date="+txtNmae+"&"+apiKey+"=DEMO_KEY";

     var msg1Object = await fetch(myURL1);

     /* Check the status */
        if (msg1Object.status >= 200 && msg1Object.status <= 299) {            
            var msg1JSONText = await msg1Object.text();
            // Parse the JSON string into an object
            var msg1 = JSON.parse(msg1JSONText);
            /* Your code to process the result goes here - 
               display the returned message */

               for (i = 0; i < 25; i++) {
    // Note how we construct the name for image1, image2, etc...this sets the image source
    document.getElementById("image" + i).src = msg.photos[i].img_src;
    do something to set the tool tip = msg.photos[i].camera.full_name;
}

}

   



     











}