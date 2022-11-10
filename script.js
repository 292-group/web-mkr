let watch = document.getElementById('watch');
let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let resetBtn = document.getElementById('reset');
let checkBtn = true; //btn for checking if 1 timer was exists,and block creating other
let timer;

let timerArr = [0, 0, 0]; //hour,minute and second

function timerHandler() {
    timerArr[0]++;
    if (timerArr[0] > 59) {
        timerArr[1]++;
        timerArr[0] = 0;
        if (timerArr[1] > 59) {
            timerArr[2]++;
            timerArr[1] = 0;
        };
    };
    for (let i = 0; i < timerArr.length; i++){
        if (String(timerArr[i]).length < 2)
            timerArr[i] = '0' + timerArr[i];
        else;
    }
    watch.innerHTML = `${timerArr[2]} : ${timerArr[1]} : ${timerArr[0]}`;
    timer = setTimeout(timerHandler, 1000);
};



startBtn.addEventListener('click', () => {
    if (checkBtn) { //if this function was miss,user can create many timers in one field,so it created a bug
        timer = setTimeout(timerHandler, 1000);
        checkBtn = false;
    };
});
stopBtn.addEventListener('click', () => {
    checkBtn = true;
    clearTimeout(timer);
});
resetBtn.addEventListener('click', () => {
    checkBtn = true;
    clearTimeout(timer);
    timerArr=[0,0,0];
    watch.innerHTML = '00 : 00 : 00';
});