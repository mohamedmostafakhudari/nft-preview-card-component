const mainImg = document.getElementById('img');
const fadeLayer = document.getElementById('fade');
mainImg.addEventListener('mouseover', fadeIn);
function fadeIn (e) {
    fadeLayer.classList.remove('fadeOut');
    fadeLayer.classList.add('fadeIn');
}
mainImg.addEventListener('mouseleave', fadeOut);
function fadeOut (e) {
    fadeLayer.classList.remove('fadeIn');
    fadeLayer.classList.add('fadeOut');
}