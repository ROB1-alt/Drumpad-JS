const soundVolume = document.querySelector('.volumeConfig')
console.log(soundVolume.value / 10)

//var slider = document.getElementById("myRange");
//var output = document.getElementById("demo");
//output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
//slider.oninput = function() {
  //output.innerHTML = this.value;


function Sound (id){
    let sound = document.getElementById(id)
    sound.volume = soundVolume.value / 10
    if (sound.paused){
    sound.play()
    } else {
    sound.currentTime = 0
    }
}



document.addEventListener("keydown", function(event) {
   let eventWichKey = event.which
   switch (eventWichKey){
       case 65:
           Sound ('firstSound')
        break
       case 90:
           Sound ()
        break
       case 69:
           Sound ()  
        break
       case  
   }
       })
