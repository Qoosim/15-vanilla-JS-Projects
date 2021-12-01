// set initial count
let count = 0

// select value and buttons

const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    if (e.target.classList.contains('increase')) {
      count ++;
    } else if (e.target.classList.contains('decrease')) {
      count --;
    } else {
      count = 0;
    }
    if (count > 0) {
      value.style.color = 'green';
    } else if (count < 0) {
      value.style.color = 'red';
    } else {
      value.style.color = 'black';
    }
    value.textContent = count;
  })
})
