document.addEventListener('DOMContentLoaded', function(){
    let botonIngresar = document.querySelector('#ingresar');
    botonIngresar.addEventListener('click', function() {
        let select1 = document.querySelector('#select1').value;
        let select2 = document.querySelector('#select2').value;
        let select3 = document.querySelector('#select3').value;
        let password = select1 + select2 + select3;

        let resultado = document.querySelector('#resultado');

        if (password === '911') {
            resultado.textContent = 'Password 1 correcto.';
        } else if (password === '714') {
            resultado.textContent = 'Password 2 correcto.';
        } else {
            resultado.textContent = 'Password incorrecto.';
        }
    });
});