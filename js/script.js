//ACORDEON

document.addEventListener("DOMContentLoaded", () => {
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