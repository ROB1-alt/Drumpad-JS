const soundVolume = document.querySelector('.volumeConfig')
console.log(soundVolume.value / 10)

document.addEventListener("keydown", function(event) {
    let eventWichKey = event.which
    switch (eventWichKey) {
        case 65:
            playSound('.1st',1)