// generate random color 
//hex values :0 to 9 A to F

const randomColor = function(){
    const hex = '0123456789ABCDEF'
    color = '#'
    for(let i =0; i< 6; i++){
        color += hex[Math.floor(Math.random()*16)];
    }
    return color;
};
let intervalId;
const startChanging = function() {
    if(!intervalId) {
        intervalId = setInterval(chnageBG,1000);
    }
    function chnageBG(){
        document.body.style.background = randomColor()
    }
};

const stopChanging = function() {
    clearInterval(intervalId);
    intervalId=null;
};
document.querySelector("#start").addEventListener('click', startChanging);
document.querySelector("#stop").addEventListener('click',stopChanging);

