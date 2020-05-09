// volume controler 10 by 10 step
const soundVolume = document.querySelector('.volumeConfig')
console.log(soundVolume.value / 10)

//const slider = document.getElementById("myRange");
//const output = document.getElementById("demo");
//output.innerHTML = slider.value; // Display the default slider value

// if i have the time :
//slider.oninput = function() {
  //output.innerHTML = this.value;


// function for using my awesome drumpad
function Sound (id){
    let sound = document.getElementById(id)
    sound.volume = soundVolume.value / 10
    if (sound.paused){
    sound.play()
    } else {
    sound.currentTime = 0
    }
}

// my keyboard listener 

document.addEventListener("keydown", function(event) {
   let eventWichKey = event.which
   switch (eventWichKey){
       case 65:
           Sound ('loudKick')
        break
        case 90:
           Sound ('loudSnare')
        break
        case 69:
           Sound ('fastKick')  
        break
        case 81:
            Sound ('techKick')  
        break
        case 83:
            Sound ('longDing')  
        break
        case 68:
           Sound ('loudChip')
        break
        case 87:
            Sound ('smallChip')
        break
        case 88:
            Sound ('anySound')
        break
        case 67:
            Sound ('loudString')
        break
   }
})
   
