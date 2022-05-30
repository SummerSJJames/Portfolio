var menubutton = document.querySelector('.menubutton');
var header = document.querySelector('header');

// console.log('Hello World!');

// menubutton.addEventListener('click', () => {
//     switch(header.classList.contains('hide')) {
//         case true:
//             header.classList.remove('hide');
//             break;
//         case false:
//             header.classList.add('hide');
//             break;
//     }
// });

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
