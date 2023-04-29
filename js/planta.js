const spanUser = document.querySelector('.user');

window.onload = () => {
    spanUser.innerHTML = localStorage.getItem('user');
}