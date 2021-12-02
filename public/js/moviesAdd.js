window.onload = function () {
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

    titulo.addEventListener('mouseover', e => titulo.style.color = 'blue');
    titulo.addEventListener('mouseout', e => titulo.style.color = 'black');

    let secretoMagico = 0;
    let titleInput = document.getElementById('titulo');

    titleInput.addEventListener('keydown', e => {
        switch (e.key) {
            case 's':
                if (secretoMagico === 0) {
                    secretoMagico += 1
                }
                break;
            case 'e':
                if (secretoMagico === 1 || secretoMagico === 4) {
                    secretoMagico += 1
                }
                break;
            case 'c':
                if (secretoMagico === 2) {
                    secretoMagico += 1
                }
                break;
            case 'r':
                if (secretoMagico === 3) {
                    secretoMagico += 1
                }
                break;
            case 't':
                if (secretoMagico === 5) {
                    secretoMagico += 1
                }
                break;
            case 'o':
                if (secretoMagico === 6) {
                    secretoMagico = 0;
                    window.alert('SECRETO MAGICO')
                }
                break;

            default:
                secretoMagico = 0;
                break;
        }
    });
}