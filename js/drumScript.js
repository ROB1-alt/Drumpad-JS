const soundVolume = document.querySelector('.volumeConfig')
console.log(soundVolume.value / 10)

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
   }
       })

       getElementById