// 1.stop timer

function timer() {
    let date = new Date();
    console.log(date.toLocaleTimeString());
    // document.write(date.toLocaleTimeString());
}
let interval = setInterval(timer, 1000);
function stop() {
    clearInterval(interval);
}


// 2.cancel the alert user settings used settimeout build in function

let interval1;
function late() {
    interval1 = setTimeout(timers, 2000);
}
function timers() {
    alert("hi,all good morning")
    console.log("hi,all good morning");
}

function cancel() {
    clearInterval(interval1);
}

// 3.build in function using current time of my computer

let date = new Date();
console.log(date.toLocaleTimeString());

// 4.show me the Alert after 2 second of your time after click the button

function lates() {
    setTimeout(timing, 2000);
}
function timing() {
    console.log("hi,all good morning");
}
