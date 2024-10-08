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
    let imgEl = 'switch'.includes()
    if('switch'.includes('lamp')){
    imgEl.src = './assets/img/yellow_lamp.png';
    buttonEl.innerHTML = 'Spegni'
    }
    
    else{
        imgEl.src = './assets/img/white_lamp.png';
    buttonEl.innerHTML = 'Accendi'
    }
})