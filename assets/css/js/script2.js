document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#verificar').addEventListener('click',
        function() {
            let sticker1 =Number(document.querySelector('#sticker1').value);
            let sticker2 =Number(document.querySelector('#sticker2').value);
            let sticker3 =Number(document.querySelector('#sticker3').value);

            let suma = sticker1 + sticker2 + sticker3;
            let mensaje = document.querySelector('#mensaje');

            if (suma <= 10){
                mensaje.innerHTML = `Has añadido ${suma} stickers!`;
                mensaje.style.color = 'black';
            } else {
                mensaje.innerHTML = 'Has excedido el max de stickers :c';
                mensaje.style.color = 'red';
            }
        }
    )

})