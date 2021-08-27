const elBtnModal = document.querySelector('#btn-modal');
const elFirstBtnModal = document.querySelector('#first-modal-btn');
const elBtnBack = document.querySelector('#btn-back')
const elModalFirst = document.querySelector('#modal-first')
const elModalSecond = document.querySelector('#modal-second')
const elBtnBackTwo = document.querySelector('#btn-back-two')

elBtnModal.addEventListener('click', ()=>{
    elModalFirst.classList.add('db')
})

elFirstBtnModal.addEventListener('click', ()=>{
    elModalSecond.classList.add('db')
})
elBtnBack.addEventListener('click', ()=>{
    elModalFirst.classList.remove('db')
})
elBtnBackTwo.addEventListener('click', ()=>{
    elModalSecond.classList.remove('db');    elModalFirst.classList.remove('db')
})