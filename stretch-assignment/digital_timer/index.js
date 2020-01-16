
let tensEl = document.getElementById("secondTens")
let onesEl = document.getElementById("secondOnes")
let tenthsEl = document.getElementById("msHundreds")
let hundrethsEl = document.getElementById("msTens") 

tensEl.innerText = 0
onesEl.innerText = 0
tenthsEl.innerText = 0
hundrethsEl.innerText = 0

//make a new div for my buttons

//make a start button and a stop button

//increment the time every 10ms

let myID = setInterval(function(){
    hundrethsEl.innerText++
    if (hundrethsEl.innerText == 10) {
        tenthsEl.innerText++
        hundrethsEl.innerText = 0
        if (tenthsEl.innerText == 10) {
            onesEl.innerText++
            tenthsEl.innerText = 0
            if (onesEl.innerText == 10){
                onesEl.innerText = 0
                tensEl.innerText++
                if (tensEl.innerText == 1) {
                    clearInterval(myID)
                    tensEl.style.color = "red"
                    onesEl.style.color = "red"
                    tenthsEl.style.color = "red"
                    hundrethsEl.style.color = "red"
                }
            }
        }
    }
}, 10); 
if (onesEl.innerText == 1) {clearInterval(myID);}

//if the timer reaches 10 seconds stop the timer and turn it red.
