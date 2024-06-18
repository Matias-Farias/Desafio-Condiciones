addEventListener('DOMContentLoaded', function() {
    var imagen = document.getElementById('img-borde');

    function toggleBorder() {
        if (imagen.style.border === '5px solid red') {
            imagen.style.border = ''; 
        } else {
            imagen.style.border = '5px solid red';
        }
        
    }

    imagen.addEventListener('click', toggleBorder);
    
});