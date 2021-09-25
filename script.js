window.addEventListener('load',func);
function func() {
const sound = document.getElementById('audio');
    sound.currentTime=0;
sound.play();
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
setInterval(change,80);
//header.style.opacity = 0.5;
var r=255;
var g=255;
var b=255;

function change() {
    g=200;
    b=80;
    changeText(r,g,b);
}
function changeText(r,g,b) {
    color="#"+hex[r]+hex[g]+hex[b]
    header.style.color=color;
}
}
//setTimeout(() => {
  //  header.changeOpacity();}
    //, 80)
