console.log('it works');

const buttonEl = document.getElementById('turn_on')
const imgEl = document.getElementById('white_lamp')
console.log(buttonEl);
console.log(imgEl);


buttonEl.addEventListener('click', function(){
    imgEl.src = './assets/img/yellow_lamp.png';
})