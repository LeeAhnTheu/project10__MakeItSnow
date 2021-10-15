
window.addEventListener('load', ()=>{
    const sound = document.getElementById('s');
    sound.autoplay = true;
    sound.muted = false;
    sound.play();
});
setInterval(createSnowFlake, 100);
setInterval(createCircleFall, 200);
function createSnowFlake() {
    const snow_flake = document.createElement('i');

    snow_flake.classList.add('fas');
    snow_flake.classList.add('fa-snowflake');
    

    snow_flake.style.left = Math.random() * window.innerWidth + 'px';
    snow_flake.style.animationDuration = Math.random()*2 + 3 +'s';
    snow_flake.style.opacity = Math.random();
    snow_flake.style.fontSize = Math.random()*10 + 10 + 'px';
    document.body.appendChild(snow_flake);

    setTimeout(() => {
        snow_flake.remove();}
        , 5000)
}

function createCircleFall() {
    const circle = document.createElement('i');

    circle.classList.add('fas');
    circle.classList.add('fa-circle');

    circle.style.left = Math.random() * window.innerWidth + 'px';
    circle.style.animationDuration = Math.random()*1 + 3 +'s';
    //circle.style.opacity = Math.random();
   // circle.style.fontSize = Math.random()*10 + 'px';
    document.body.appendChild(circle);

    setTimeout(() => {
        circle.remove();}
        , 5000)
}

const header = document.getElementById('header');
setInterval(changeText,80);
//header.style.opacity = 0.5;


function changeText() {
    header.style.color= `rgb(255, 200, 81)`;
}
//setTimeout(() => {
  //  header.changeOpacity();}
    //, 80)
