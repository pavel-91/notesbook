const form = document.querySelector('.form-panel-container');

document.querySelector('#form-open').onclick = () => {
    form.classList.add('active');
    document.body.style.paddingRight = '350px';
}

document.querySelector('#panel-close').onclick = () => {
    form.classList.remove('active');
    document.body.style.paddingRight = '0px';
}