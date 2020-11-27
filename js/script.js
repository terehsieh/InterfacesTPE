//ACORDEON

document.addEventListener("DOMContentLoaded", () => {
    //Animaciones para las busquedas
    setTimeout(function() {
        let canciones = document.querySelectorAll(".canciones");
        canciones.forEach(element => {
            element.classList.remove('hide');
            element.classList.add('show');

        });
    }, 300);

    //Animacion home, canciones
    setTimeout(function() {
        let listas = document.querySelectorAll(".listaR");
        listas.forEach(element => {
            element.classList.remove('hide');
            element.classList.add('show');
        });
    }, 500);
    //acordion
    let lis = document.querySelectorAll("ul.acordeon li");
    lis.forEach(li => {
        li.addEventListener("click", () => {
            li.nextElementSibling.classList.toggle("visible");
        });
    });

    //form 

    //password
    const togglePassword = document.querySelector('#togglePassword');
    const password = document.querySelector('#password');

    togglePassword.addEventListener('click', function(e) {
        // toggle the type attribute
        const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
        password.setAttribute('type', type);
        // toggle the eye slash icon
        this.classList.toggle('fa-eye-slash');
    });


});