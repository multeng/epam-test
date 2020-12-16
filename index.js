const root = document.querySelector('.root');
const formContainer = document.querySelector('.form-container');
const form = document.querySelector('.form');
const login = document.getElementById('login');
const password = document.getElementById('password');

window.onload = function () {
  fadeInRoot();
};

function fadeInRoot() {
  root.addEventListener('transitionend', fadeInLoginForm());
  root.classList.add('fade-in');
}

function fadeInLoginForm() {
  formContainer.classList.add('fade-in');
}

function checkEmailValidation() {
  login.checkValidity() ? null : login.reportValidity();
}
function checkPasswordValidation() {
  password.checkValidity() ? null : password.reportValidity();
}
function checkSubmitFormValidation(e) {
  e.preventDefault();
  form.checkValidity() ? form.submit() : form.reportValidity();
}

login.addEventListener('blur', checkEmailValidation);
password.addEventListener('blur', checkPasswordValidation);
form.addEventListener('submit', checkSubmitFormValidation);
