const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */

for(let i = 1; i <= 5; i += 1){
    //create image thumbnails below main image
    const newImage = document.createElement('img');
    newImage.setAttribute('src', 'images/pic'+i+'.jpg');
    thumbBar.appendChild(newImage);
    //click on thumbnail
    newImage.onclick = function(curImg) {
        displayedImage.src = curImg.target.src;
      }
}

/* Wiring up the Darken/Lighten button */

btn.onclick = function() {
    //retrieve whether button is dark or light
    const lightOrDark = btn.getAttribute('class');
    if(lightOrDark === 'dark')
    {
        //go dark, prepare for light
        overlay.style.backgroundColor =  'rgba(0,0,0,0.5)';
        btn.textContent = 'Lighten';
        btn.setAttribute('class', 'light');
    }else{
        //go light, prepare for dark
        overlay.style.backgroundColor =  'rgba(0,0,0,0)';
        btn.textContent = 'Darken';
        btn.setAttribute('class', 'dark');
    }    
}