const welcome_text = document.querySelector('welcome');
const welcome_div = document.querySelector('welcome-div');


function clicked(item) {
    item.classList.remove('welcome');
    item.classList.add('welcome');
};