const images = ["1.jpg" , "2.jpg", "3.jpg"];

const chosenImage = images[Math.floor(Math.random()*images.length)];

const bgImage = document.createElement("img");
bgImage.src = `/img/${chosenImage}`;
bgImage.width =  600;
bgImage.height = 200;

const img = document.querySelector("#imageArea");
img.appendChild(bgImage);


