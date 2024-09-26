
document.addEventListener('DOMContentLoaded',function(){
   
   document.getElementById('btnGuardarCambios').addEventListener('click', function(event){
        event.preventDefault();
        
            if (ValidarFormEditar()) {
            
                document.getElementById('headerColorInput').addEventListener('input', cambiarHeader());
                actualizarFotoPerfil();  // Actualiza la foto de perfil
                actualizarNombreUsuario('username');  // Actualiza el nombre de usuario
            
                /*/ Espera 500ms antes de enviar el formulario
                setTimeout(function () {
                    document.getElementById('EditarForm').submit();  // Envía el formulario
                }, 500);*/
                cerrarModal();
                limpiarInpts('EditarForm');  // Limpia los inputs del formulario
            }
    });

   document.getElementById('btnCancelaEditar').addEventListener('click', function(){
        limpiarInpts('EditarForm');
        cerrarModal();
   });
  
})

function ValidarFormEditar(){
    let flag=true;

    if(!validarCampoVacio('username') || !ValidarCaracteres('username')){
        flag=false;
    }
    if(!validarCampoVacio('email') || !validarmail()){
        flag=false;
    }
    if(!validarCampoVacio('password') || !validarClave()){
        flag=false;
    }
    if(!validarCampoVacio('username')){
        flag=false;
    }
    if(!validarCampoVacio('profileImage') || !validarFoto()){
        flag=false;
    }
    return flag;

}

// Validación de formulario en JavaScript
  function validarCampoVacio(idCampo) {
    let inputValor = document.getElementById(idCampo).value.trim();
    let error = document.getElementById(idCampo);
    let MensajeError = error.nextElementSibling;  // div con 'invalid-feedback'

    error.classList.remove('is-invalid');

    if (inputValor === '') {
        error.classList.add('is-invalid');
        MensajeError.innerHTML = 'Campo vacío';
        error.nextElementSibling.innerHTML='campo vacío';
        return false;
    }
    MensajeError.innerHTML = '';  // Limpiar cualquier mensaje de error previo
    return true;
}

function ValidarCaracteres(idcampo){
    let nombreUsuario = document.getElementById(idcampo).value;
    let ErrorMensaje = document.getElementById(idcampo);
    if (nombreUsuario.length < 4) {
        ErrorMensaje.textContent = "El nombre de usuario debe tener al menos 4 caracteres";
       return false;
    } else {
        ErrorMensaje.textContent = "";
    }
    return true;

}
function validarmail(){
    let email = document.getElementById("email").value;
    let Error = document.getElementById("emailError");
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email && !emailPattern.test(email)) {
        Error.textContent = "El formato del correo electrónico no es válido";
      return false;
    } else {
        Error.textContent = "";
    }
    return true;
}
function validarClave(){

    let Clave = document.getElementById("password").value;
    let Error = document.getElementById("passwordError");
    if (Clave && Clave.length < 6) {
        Error.textContent = "La contraseña debe tener al menos 6 caracteres";
        return false;
    } else {
      passwordError.textContent = "";
    }
    return true;
}
function validarFoto(){
    
    // Validación de la imagen de perfil
    const profileImage = document.getElementById("profileImage").files[0];
    const imageError = document.getElementById("imageError");
    if (profileImage && !profileImage.type.startsWith('image/')) {
      imageError.textContent = "El archivo seleccionado no es una imagen válida";
      return false;
    } else {
      imageError.textContent = "";
    }
    return true;
}

function cambiarHeader() {
    // Obtiene el valor del input de color
    let headerColor = document.getElementById('headerColorInput').value;
    let headerDiv = document.getElementById('headerDiv');

   headerDiv.style.backgroundColor = headerColor;

    if (!headerColor.value) {
        headerDiv.style.backgroundColor = '#358ee7'; // Valor predeterminado de CSS
    }
  
}


//Actualizar la foto de perfil
function actualizarFotoPerfil() {
    const profileImageInput = document.getElementById('profileImage');
    const profileImage = document.querySelector('.perfil-img');  // Imagen actual en la página

    if (profileImageInput.files && profileImageInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            profileImage.src = e.target.result;  // Cambia la imagen de perfil al cargar la nueva
        }
        reader.readAsDataURL(profileImageInput.files[0]);
    }
}
function actualizarNombreUsuario(idcampo) {
    let NuevoNombre = document.getElementById(idcampo).value.trim();  // Toma el valor del input del nombre de usuario
    let nombreviejo = document.getElementById('nombrePerfil');  // El h3 donde aparece el nombre de usuario

    if (nombreviejo !== '') {
        nombreviejo.textContent = NuevoNombre;  // Actualiza el texto del h3 con el nuevo nombre
    }
}



function cerrarModal(){
    // Cierra el modal después de confirmar
    const modal = bootstrap.Modal.getInstance(document.getElementById('editProfileModal')); 
    modal.hide(); // Cierra el modal

}
function limpiarInpts(formId){
  // Limpia todos los campos del formulario
  let form = document.getElementById(formId);
  form.reset();  // Resetea el formulario
}