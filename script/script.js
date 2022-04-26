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