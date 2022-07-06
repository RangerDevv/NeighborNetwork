let Hour = 00;
let Min = 00;
let Sec = 00;

let Hourcomponent = document.getElementById("Hour");
let Mincomponent = document.getElementById("Minute");
let Seccomponent = document.getElementById("Second");
let StartBtn = document.getElementById("Start");
let StopBtn = document.getElementById("Stop");
let ResetBtn = document.getElementById("Reset");

function StartTimer() {
    Sec++;
    if (Sec == 60) {
        Sec = 0;
        Min++;
        if (Min == 60) {
            Min = 0;
            Hour++;
        }
    }
    Hourcomponent.innerHTML = Hour;
    Mincomponent.innerHTML = Min;
    Seccomponent.innerHTML = Sec;
}

function Start() {
    StartBtn.disabled = true;
    StopBtn.disabled = false;
    ResetBtn.disabled = false;
    Timer = setInterval(StartTimer, 1000);
}

function Stop() {
    StartBtn.disabled = false;
    StopBtn.disabled = true;
    ResetBtn.disabled = false;
    clearInterval(Timer);
}

function Reset() {
    StartBtn.disabled = false;
    StopBtn.disabled = false;
    ResetBtn.disabled = true;
    clearInterval(Timer);
    Hour = 0;
    Min = 0;
    Sec = 0;
    Hourcomponent.innerHTML = Hour;
    Mincomponent.innerHTML = Min;
    Seccomponent.innerHTML = Sec;
}