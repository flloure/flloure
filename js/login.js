const input = document.querySelector('.login_input');
const button = document.querySelector('.login_button');
const form = document.querySelector('.login-form');

const validateInput = ({target}) => {
    if (target.value.length > 0) {
        button.removeAttribute('disabled');
        return;
    }

    button.setAttribute('disabled', '');
}

const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('user', input.value);
    window.location = 'pages/planta.html';
}

input.addEventListener('input', validateInput);
form.addEventListener('submit', handleSubmit);