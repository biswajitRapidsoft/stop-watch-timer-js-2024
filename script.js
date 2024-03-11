let [milisec, sec, min, hr] = [0, 0, 0, 0];
let timerSec = document.querySelector(".timer-section");
let lapsContainer = document.querySelector(".laps-container");
let int = null

document.getElementById("start-timer").addEventListener("click", () => {
    if (int != null) {
        clearInterval(int);
    }
    int = setInterval(displayTimer, 1000);
})

document.getElementById("pause-timer").addEventListener("click", () => {
    if (int != null) {
        clearInterval(int);
    }
})

document.getElementById("reset-timer").addEventListener("click", () => {
    clearInterval(int);
    [milisec, sec, min, hr] = [0, 0, 0, 0];
    timerSec.textContent = `00 : 00 : 00`; 
    lapsContainer.innerHTML = "";
})

document.getElementById("lapse-timer").addEventListener("click", () => {
    let lapsLi = document.createElement("li");
    lapsLi.textContent = timerSec.textContent;
    lapsLi.classList.add("list-group-item");
    lapsContainer.appendChild(lapsLi);
});

function displayTimer () {
    sec ++;

    if (sec == 60) {
        sec = 0;
        min ++;

        if (min == 60) {
            min = 0;
            hr ++;
        }
    }

    let h = hr < 10 ? "0" + hr : hr;
    let m = min < 10 ? "0" + min : min;
    let s = sec < 10 ? "0" + sec : sec;

    timerSec.innerHTML = `${h} : ${m} : ${s}`;
}