var menubutton = document.querySelector('.menubutton');
var header = document.querySelector('header');


menubutton.addEventListener('click', toggleVisible);

function toggleVisible() {
    menubutton.classList.toggle('active')
    switch(!header.classList.contains('hide')) {
        case true:
            header.classList.add('hide');
            setTimeout(() => {
                header.style.display = ' none';
            }, 300)
            break;
        case false:
            header.style.display = 'flex';
            setTimeout(() => {
                header.classList.remove('hide');
            }, 1)
            break;
    }
}
