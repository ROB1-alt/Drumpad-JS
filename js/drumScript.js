// volume controler 10 by 10 step
const soundVolume = document.querySelector('.volumeConfig')
console.log(soundVolume.value / 10)
const touch = document.querySelectorAll('.box')

//const slider = document.getElementById("myRange");
//const output = document.getElementById("demo");

// if i have the time :
//slider.oninput = function() {
  //output.innerHTML = this.value;




// function for using my awesome drumpad


function Sound (id){
    const sound = document.getElementById(id)
    sound.volume = soundVolume.value / 10
    if (sound.paused){
    sound.play()
    } else {
    sound.currentTime = 0
    }
}


// my keyboard listener 
// I decided to make a drumpad who works with keyboard



document.addEventListener("keydown", function(event) {
   let eventWichKey = event.which
   let key = document.getElementById(eventWichKey)

   if(key){
       key.style.boxShadow = "5px 5px 20px white"
   }

//moving CSS when keyup

document.addEventListener('keyup', () =>{
    let keys = document.getElementsByClassName('box-shadow')
    for(var i = 0 ; i < keys.length ; i++){
        keys[i].style.boxShadow = null
    }
})
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
   

