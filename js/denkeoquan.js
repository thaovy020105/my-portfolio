const carousel=document.getElementById("carousel");

const images=carousel.querySelectorAll("img");

const total=images.length;

const radius=220;

images.forEach((img,index)=>{

const angle=index*(360/total);

img.style.transform=
`rotateY(${angle}deg) translateZ(${radius}px)`;

});

let rotate=0;

let running=true;

function animation(){

if(running){

rotate+=0.5;

carousel.style.transform=
`rotateY(${rotate}deg)`;

}

requestAnimationFrame(animation);

}

animation();

images.forEach(img=>{

img.addEventListener("mouseenter",()=>{

running=false;

});

img.addEventListener("mouseleave",()=>{

running=true;

});

});
