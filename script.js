let slide1 = document.getElementById('slide1');
let slide2 = document.getElementById('slide2');
let slide3 = document.getElementById('slide3');
let bubble1 = document.querySelector('.bubble-1');
let bubble2 = document.querySelector('.bubble-2');
let bubble3 = document.querySelector('.bubble-3');
setTimeout(show_slide2, 3000);

function show_slide2(){
    slide1.classList.add('hidden-slide');
    slide2.classList.remove('hidden-slide');
    bubble1.classList.remove('focus');
    bubble2.classList.add('focus');
    setTimeout(show_slide3, 3000);
}
function show_slide3(){
    slide2.classList.add('hidden-slide');
    slide3.classList.remove('hidden-slide');
    bubble2.classList.remove('focus');
    bubble3.classList.add('focus');
    setTimeout(show_slide1, 3000);
}
function show_slide1(){
    slide3.classList.add('hidden-slide');
    slide1.classList.remove('hidden-slide');
    bubble3.classList.remove('focus');
    bubble1.classList.add('focus');
    setTimeout(show_slide2, 3000);
}
