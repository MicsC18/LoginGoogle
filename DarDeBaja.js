document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('accionSelect').addEventListener('change', TiempoSuspension);

    document.getElementById('btnGuardarCambiosUsuario').addEventListener('click', function(){
        ValidarFormUsuario();
    })
})

function TiempoSuspension(){
    var accion = document.getElementById("accionSelect").value;
    var suspensionDateDiv = document.getElementById("suspensionDateDiv");

    if (accion === "Suspender") {
        suspensionDateDiv.style.display = "block"; // Muestra el campo de fecha
    } else {
        suspensionDateDiv.style.display = "none";  // Oculta el campo de fecha
    }

}
function ValidarFormUsuario(){
    let bandera=true;
    if(!validarCampoVacio('MailUsuario')){
        bandera=false;
    }
    if(!validarCampoVacio('MotivoSancion')){
        bandera=false;
    }
    if(!validarCampoVacio('accionSelect')){
        bandera=false;
    }
    if(!validarCampoVacio('suspensionDate')){
        bandera=false;
    }
    return bandera;
}
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
