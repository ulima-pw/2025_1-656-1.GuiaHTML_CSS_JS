let butEnviarOnClick = function() {
    let inputNombre = document.getElementById("nombre")
    let inputCorreo = document.getElementById("correo")
    let textAreaMensaje = document.getElementById("mensaje")

    //1. Verificar si todas las cajas de texto 
    // tienen valores
    if (inputNombre.value == "" ||
        inputCorreo.value == "" ||
        textAreaMensaje.value ==""
    ) {
        console.error("Debe ingresar todos los campos.")
        return
    }

    //2. Verificar el formato el correo (@ y .)
    if (!inputCorreo.value.includes("@") ||
        !inputCorreo.value.includes(".")
    ) {
        console.error("Error en el formato de email.")
        return
    }

    //3. Pintar que se envio correctamente
    console.log("Se envio correctamente.")
}

let main = function () {
    let butEnviar = document.getElementById("but_enviar")
    butEnviar.addEventListener("click", butEnviarOnClick)
}

main()