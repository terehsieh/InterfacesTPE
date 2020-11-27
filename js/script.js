//ACORDEON

document.addEventListener("DOMContentLoaded", () => {

    setTimeout(function() {
        console.log("funcionaaa")
        let canciones = document.querySelectorAll(".canciones");
        canciones.forEach(element => {
            element.classList.remove('hide');
            element.classList.add('show');

        });
        // document.querySelectorAll(".canciones").classList.remove('hide');
        // document.querySelectorAll(".canciones").classList.add('show');
    }, 1000);
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


    // document.querySelector(".cajas").classList.remove('hide');;


});