const hambtn = document.querySelector('.hambtn');
const nav = document.querySelector('.navwrap');

hambtn.addEventListener("click", function(event) {
  hambtn.classList.toggle('exit');
  nav.classList.toggle('show');
})