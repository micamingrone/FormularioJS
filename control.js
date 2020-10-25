function validarFormulario() {
    let usuario = document.getElementById("mail").value;
    let clave = document.getElementById("pwd").value;

    if (usuario.includes("@")) {
        if (!clave) {
            alert("Por favor ingrese una clave");
        } else {
            alert("¡Bienvenido!");
        }

    } else {
        alert("Ingrese un correo válido");
        return false;
    }



}