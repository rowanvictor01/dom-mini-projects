const displayEl = document.querySelector(".display-img");
const thumbnailEl = document.querySelectorAll(".pic");
const leftBtn = document.querySelector(".left-btn");
const rightBtn = document.querySelector(".right-btn");

// caption and img counter
const captionEl = document.querySelector(".caption");
const imgCounterEl = document.querySelector(".img-counter");

// Image Caption List
const captionList = ["Beach 1", "Beach 2", "Ship", "Resort", "Sunset"];


// images
const defaultImg = document.querySelector(".default");
const img2 = document.querySelector(".img2");
const img3 = document.querySelector(".img3");
const img4 = document.querySelector(".img4");
const img5 = document.querySelector(".img5");

const imgList = [defaultImg, img2, img3, img4, img5];


// default image displayed
displayEl.src = defaultImg.src; // Img from thumbnail 1
displayEl.width = 960;
displayEl.height = 540;

// thumb box
const thumbBoxEl = document.querySelectorAll(".thumb-box");
const thumbBoxList = [...thumbBoxEl];

// on first page load
let counter = 0
imgCounterEl.textContent = counter + 1;
captionEl.textContent = captionList[counter];

// interactive thumbnail
function displayImage(e) {
    imgSrc = e.target.src;
    displayEl.src = imgSrc;
    thumbBoxEl.forEach(div => div.classList.remove("thumb-box"));


    for (let i = 0; i <= imgList.length - 1; ++i) {
        if (imgList[i].src === imgSrc) {
            counter = i;
            thumbBoxList[counter].classList.add("thumb-box");
            imgCounterEl.textContent = counter + 1;
            captionEl.textContent = captionList[counter];
        }
    }
}

// buttons
leftBtn.onclick = () => {
    thumbBoxEl.forEach(div => div.classList.remove("thumb-box"));
    counter--


    if (counter < 0) {
        counter = imgList.length - 1;
        imgCounterEl.textContent = counter + 1;
        captionEl.textContent = captionList[counter];
    }

    thumbBoxList[counter].classList.add("thumb-box");
    displayEl.src = imgList[counter].src;
    imgCounterEl.textContent = counter + 1;
    captionEl.textContent = captionList[counter];
}

rightBtn.onclick = () => {
    thumbBoxEl.forEach(div => div.classList.remove("thumb-box"));
    counter++


    if (counter > imgList.length - 1) {
        counter = 0;
        imgCounterEl.textContent = counter + 1;
        captionEl.textContent = captionList[counter];
    }

    thumbBoxList[counter].classList.add("thumb-box");
    displayEl.src = imgList[counter].src;
    imgCounterEl.textContent = counter + 1;
    captionEl.textContent = captionList[counter];
}




thumbnailEl.forEach(img => img.addEventListener("click", (e) => displayImage(e)));

thumbBoxEl.forEach(div => div.classList.remove("thumb-box"));
thumbBoxList[0].classList.add("thumb-box");
