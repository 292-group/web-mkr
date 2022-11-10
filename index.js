const btn=document.querySelector(".btn");
let count='';
btn.onclick=()=>{
    count++;
    if(count===1){
btn.classList.remove('black');
btn.classList.add('orange');
btn.innerHTML='start'
    }
    if(count===2){
btn.classList.remove('orange');
btn.classList.add('green');
btn.innerHTML='in process'
    }
    if(count===3){
btn.classList.remove('green');
btn.classList.add('reg');
btn.innerHTML='pause'
    }
 if(count===4){
        btn.classList.remove('red');
        btn.classList.add('palevioletred');
        btn.innerHTML='disconnect'
            }
if(count===5){
                btn.classList.remove('palevioletred');
                btn.classList.add('black');
                btn.innerHTML='finish'
                count=0;
                
                    }
}