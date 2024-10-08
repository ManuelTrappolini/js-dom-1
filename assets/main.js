console.log('it works');

const buttonEl = document.getElementById('turn_on')
const imgEl = document.getElementById('white_lamp')
console.log(buttonEl);
console.log(imgEl);
/* let switchIt = true

buttonEl.addEventListener('click', function(){
    
    if(switchIt){
    imgEl.src = './assets/img/yellow_lamp.png';
    buttonEl.innerHTML = 'Spegni'
    }
    else{
        imgEl.src = './assets/img/white_lamp.png';
    buttonEl.innerHTML = 'Accendi'
    }
    switchIt = !switchIt
}) */



buttonEl.addEventListener('click', function(){
    if(imgEl.src.includes('/assets/img/white') ){
    imgEl.src = './assets/img/yellow_lamp.png';
    buttonEl.innerHTML = 'Spegni'
    }
    
    else{
        imgEl.src = './assets/img/white_lamp.png';
    buttonEl.innerHTML = 'Accendi'
    }
})