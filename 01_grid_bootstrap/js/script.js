window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#btn-menu').addEventListener('click', function() {
      document.querySelector('#menu').classList.toggle('is-active');
      document.querySelector('#img-open').classList.toggle('is-active');
      document.querySelector('#img-close').classList.toggle('is-active');
  })
})

const burger = document.querySelector('.burger');

burger.addEventListener('click', (e) => {
  e.currentTarget.classList.toggle('burger--active');
});
