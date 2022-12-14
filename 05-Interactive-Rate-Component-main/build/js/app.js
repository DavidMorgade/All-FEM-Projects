'use strict';
let rate;
document.addEventListener('DOMContentLoaded', function () {
  initApp();
});

function initApp() {
  addStars();
  displayAnswer();
}

//////////////////////////////// add stars and bg orange ///////////////
const addStars = function () {
  const stars = document.querySelectorAll('.rating__btn');
  const starsCont = document.querySelector('.rating__btns');
  const result = document.querySelector('#star-cont');
  starsCont.addEventListener('click', function (e) {
    const clicked = e.target.closest('button');
    if (!clicked) return;
    rate = clicked.textContent;

    stars.forEach(btn => btn.style.removeProperty('background-color'));
    result.innerHTML = `<p id="answerStar" class="answer__stars">You selected ${rate} out of 5</p>`;
    clicked.style.backgroundColor = 'hsl(25, 97%, 53%)';
  });
};

///////////////////////////// display the next popup ///////////////////

const displayAnswer = function () {
  const submit = document.querySelector('#rate-submit');
  const answerCont = document.querySelector('.answer');
  const ratingComp = document.querySelector('.rating');
  const electionMade = document.getElementById('answerStar');

  if (electionMade) return;
  submit.addEventListener('click', function () {
    if (!rate) return;
    ratingComp.classList.add('hidden');
    answerCont.classList.remove('hidden');
  });
};
