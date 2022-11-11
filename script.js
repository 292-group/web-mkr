const start = document.querySelector (".button_start");
const prog = document.querySelector (".button_progress");
const pause = document.querySelector (".button_pause");
const disc = document.querySelector (".button_disc");
const finish = document.querySelector (".button_finish");
function spawnInProgress() {
    prog.style.visibility = "visible";
    start.style.visibility = "hidden";
}
function spawnPause() {
    pause.style.visibility = "visible";
    prog.style.visibility = "hidden";
}
function spawnDiscon() {
    disc.style.visibility = "visible";
    pause.style.visibility = "hidden";
  
}
function spawnFinish() {
    finish.style.visibility = "visible";
    disc.style.visibility = "hidden";
    
}
function spawnStart() {
    start.style.visibility = "visible";
    finish.style.visibility = "hidden";
}