'use strict';
// alert('Section7 PROJECT 2');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModel = document.querySelector('.close-modal');
const btnsOpenModel = document.querySelectorAll('.show-modal');
// console.log(btnsOpenModel);

const openModel = function () {
  //   console.log(modal.classList);
  //   console.log(overlay.classList);
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
  //   console.log(modal.classList);
  //   console.log(overlay.classList);
};

const closeModel = function () {
  //   console.log(modal.classList);
  //   console.log(overlay.classList);
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
  //   console.log(modal.classList);
  //   console.log(overlay.classList);
};

for (let i = 0; i < btnsOpenModel.length; i++) {
  btnsOpenModel[i].addEventListener('click', openModel);
}
btnCloseModel.addEventListener('click', closeModel);
overlay.addEventListener('click', closeModel);

document.addEventListener('keydown', function (event) {
  //   console.log('A key was pressed');
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    // console.log(event.key);
    closeModel();
  }
});
