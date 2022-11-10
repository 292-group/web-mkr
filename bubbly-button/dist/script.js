

let index = 0;


const colors = ['green', 'yellow', 'red', 'white','gold'];
const name = ['Start', 'in progress', 'stop', 'disconnect','finish'];

btn.addEventListener('click', function onClick() {

    let elem = document.getElementById("btn");

    elem.style.backgroundColor = colors[index];
    elem.innerText=name[index];

    elem.style.color = 'Black';

    index = index >= colors.length - 1 ? 0 : index + 1;





});