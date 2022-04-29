let firstBtn = document.querySelector('#btnCollege');
let secondBtn = document.querySelector('#btnBachelor');
let thirdBtn = document.querySelector('#btnMagistrate');

let firstForm = document.querySelector('#firstForm');
let secondForm = document.querySelector('#secondForm');
let thirdForm = document.querySelector('#thirdForm');

firstBtn.addEventListener('click', function () {
    firstForm.classList.toggle('specialist__result--none');
    secondForm.classList.add('specialist__result--none')
    thirdForm.classList.add('specialist__result--none')
})

secondBtn.addEventListener('click', function () {
    firstForm.classList.add('specialist__result--none');
    secondForm.classList.toggle('specialist__result--none')
    thirdForm.classList.add('specialist__result--none')
})

thirdBtn.addEventListener('click', function () {
    firstForm.classList.add('specialist__result--none');
    secondForm.classList.add('specialist__result--none')
    thirdForm.classList.toggle('specialist__result--none')
})

let oneSlider = document.querySelector('#sliderText__one');
let twoSlider = document.querySelector('#sliderText__two');
let threeSlider = document.querySelector('#sliderText__three');

let oneBlock = document.querySelector('#sliderBlock__one');
let twoBlock = document.querySelector('#sliderBlock__two');
let threeBlock = document.querySelector('#sliderBlock__three');

let arrowLeft = document.querySelector('#slider__arrowLeft');
let arrowRight = document.querySelector('#slider__arrowRight');

let result = document.querySelector('.slider__function--block')

let arrBlock = [oneBlock, twoBlock, threeBlock];

var slideIndex = 1; 
showSlides(slideIndex); 
 
/* Функция увеличивает индекс на 1, показывает следующй слайд*/ 
function plusSlide() { 
    showSlides(slideIndex += 1); 
} 
 
/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/ 
function minusSlide() { 
    showSlides(slideIndex -= 1);   
} 
 
/* Устанавливает текущий слайд */ 
function currentSlide(n) { 
    showSlides(slideIndex = n); 
} 
 
/* Основная функция слайдера */ 
function showSlides(n) { 
    var i; 
    var slides = document.getElementsByClassName("item"); 
    var dots = document.getElementsByClassName("slider-dots_item"); 
    if (n > slides.length) { 
      slideIndex = 1 
    } 
    if (n < 1) { 
        slideIndex = slides.length 
    } 
    for (i = 0; i < slides.length; i++) { 
        slides[i].style.display = "none"; 
    } 
    for (i = 0; i < dots.length; i++) { 
        dots[i].className = dots[i].className.replace(" active", ""); 
    } 
    slides[slideIndex - 1].style.display = "block"; 
    dots[slideIndex - 1].className += " active"; 
}

var slideIndexTwo = 1; 
showSlidesTwo(slideIndexTwo); 
 
/* Функция увеличивает индекс на 1, показывает следующй слайд*/ 
function plusSlideTwo() { 
    showSlidesTwo(slideIndexTwo += 1); 
} 
 
/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/ 
function minusSlideTwo() { 
    showSlidesTwo(slideIndexTwo -= 1);   
} 
 
/* Устанавливает текущий слайд */ 
function currentSlideTwo(n) { 
    showSlidesTwo(slideIndexTwo = n); 
} 
 
/* Основная функция слайдера */ 
function showSlidesTwo(n) { 
    var i; 
    var slides = document.getElementsByClassName("choice__slider--block"); 
    if (n > slides.length) { 
      slideIndexTwo = 1 
    } 
    if (n < 1) { 
        slideIndexTwo = slides.length 
    } 
    for (i = 0; i < slides.length; i++) { 
        slides[i].style.display = "none"; 
    }
    slides[slideIndexTwo - 1].style.display = "flex"; 
}

var slideIndexThree = 1; 
showSlidesThree(slideIndexThree); 
 
/* Функция увеличивает индекс на 1, показывает следующй слайд*/ 
function plusSlideThree() { 
    showSlidesThree(slideIndexThree += 1); 
} 
 
/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/ 
function minusSlideThree() { 
    showSlidesThree(slideIndexThree -= 1);   
} 
 
/* Устанавливает текущий слайд */ 
function currentSlideThree(n) { 
    showSlidesThree(slideIndexThree = n); 
} 
 
/* Основная функция слайдера */ 
function showSlidesThree(n) { 
    var i; 
    var slides = document.getElementsByClassName("achievements__slider--block"); 
    if (n > slides.length) { 
      slideIndexThree = 1 
    } 
    if (n < 1) { 
        slideIndexThree = slides.length 
    } 
    for (i = 0; i < slides.length; i++) { 
        slides[i].style.display = "none"; 
    }
    slides[slideIndexThree - 1].style.display = "flex"; 
}

let firstFormbtn = document.querySelector('#firstFormbtn');
let secondFormbtn = document.querySelector('#secondFormbtn');
let thirdFormbtn = document.querySelector('#thirdFormbtn');
let fourFormbtn = document.querySelector('#fourFormbtn');
let fiveFormbtn = document.querySelector('#fiveFormbtn');
let sixFormbtn = document.querySelector('#sixFormbtn');

let firstResultbtn = document.querySelector('#firstResultbtn');
let secondResultbtn = document.querySelector('#secondResultbtn');
let thirdResultbtn = document.querySelector('#thirdResultbtn');
let fourResultbtn = document.querySelector('#fourResultbtn');
let fiveResultbtn = document.querySelector('#fiveResultbtn');
let sixResultbtn = document.querySelector('#sixResultbtn');

firstFormbtn.addEventListener('click', function () {
    if (firstResultbtn.style.display == "flex") {
        firstResultbtn.style.display = "none"
        firstResultbtn.style.height = "0%"
    } 
    else if (firstResultbtn.style.display == "none") {
        firstResultbtn.style.display = "flex"
        firstResultbtn.style.height = "auto"
    }
})

secondFormbtn.addEventListener('click', function () {
    if (secondResultbtn.style.display == "flex") {
        secondResultbtn.style.display = "none"
    } 
    else if (secondResultbtn.style.display == "none") {
        secondResultbtn.style.display = "flex"
    }
})

thirdFormbtn.addEventListener('click', function () {
    if (thirdResultbtn.style.display == "flex") {
        thirdResultbtn.style.display = "none"
    } 
    else if (thirdResultbtn.style.display == "none") {
        thirdResultbtn.style.display = "flex"
    }
})

fourFormbtn.addEventListener('click', function () {
    if (fourResultbtn.style.display == "flex") {
        fourResultbtn.style.display = "none"
    } 
    else if (fourResultbtn.style.display == "none") {
        fourResultbtn.style.display = "flex"
    }
})

fiveFormbtn.addEventListener('click', function () {
    if (fiveResultbtn.style.display == "flex") {
        fiveResultbtn.style.display = "none"
    } 
    else if (fiveResultbtn.style.display == "none") {
        fiveResultbtn.style.display = "flex"
    }
})

sixFormbtn.addEventListener('click', function () {
    if (sixResultbtn.style.display == "flex") {
        sixResultbtn.style.display = "none"
    } 
    else if (sixResultbtn.style.display == "none") {
        sixResultbtn.style.display = "flex"
    }
})

let Name = document.querySelector('#inputName');
let tel = document.querySelector('#inputPhone');

function accept () {
    if(Name.value == '') {
        Name.style.borderBottom = '3px dashed rgb(150, 29, 29)';
    }

    if(tel.value == '') {
        tel.style.borderBottom = '3px dashed rgb(150, 29, 29)';
    }
}