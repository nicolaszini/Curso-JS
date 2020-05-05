//Variable
const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');
const btnEnviar = document.getElementById('enviar');


//Event Listener
eventListeners();

function eventListeners(){
    document.addEventListener('DOMContentLoaded',inicioApp);

    email.addEventListener('blur', validarCampo);
    asunto.addEventListener('blur', validarCampo);
    mensaje.addEventListener('blur', validarCampo);

    btnEnviar.addEventListener('click', enviarEmail);
    
}


//Funciones
function inicioApp(){
    btnEnviar.disabled = true;
    
}

function validarCampo(){
    validarLongitud(this);
    if(this.type === 'email'){
        validarEmail(this);
    }

    let errores = document.querySelectorAll('.error');
    if(email.value !== '' && asunto.value !== '' && mensaje.value !== ''){
        if(errores.length === 0){
            btnEnviar.disabled = false;
        }
    }
}

function enviarEmail(e){
    const spinnerGift = document.querySelector('#spinner');
    spinnerGift.style.display = 'block';
    
    const enviado = document.querySelector('img');
    enviado.src = 'img/mail.gif';
    enviado.style.display = 'block';

    setTimeout(function(){
        spinnerGift.style.display = 'none';
        document.querySelector('#loaders').appendChild(enviado);
    },3000);
    e.preventDefault();
}

function validarLongitud(campo){
    if(campo.value.length > 0){
        campo.style.borderBottomColor = 'green';
        campo.classList.remove('error');
    } else {
        campo.style.borderBottomColor = 'red';
        campo.classList.add('error');
    }
}

function validarEmail(campo){
    const mensaje = campo.value;
    if(mensaje.indexOf('@') !== -1){
        campo.style.borderBottomColor = 'green';
        campo.classList.remove('error');
    }else {
        campo.style.borderBottomColor = 'red';
        campo.classList.add('error');
    }
}