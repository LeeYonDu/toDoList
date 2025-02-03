const images = ["img/1.jpg", "img/2.jpg", "img/3.jpg", "img/4.jpg", "img/5.jpg","img/6.jpg","img/7.jpg","img/8.jpg","img/9.jpg"];
const chosenImage = images[Math.floor(Math.random()*images.length)];

document.body.style.backgroundImage = `url(${chosenImage})`;
document.body.style.backgroundSize = "cover";
document.body.style.backgroundPosition = "center";
document.body.style.backgroundRepeat = "no-repeat";