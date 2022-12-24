// FUNCIONES PARA VERIFICAR EL INGRESO DE USUARIO, CONTRASEÑA Y CORREO
function ValidarCorreo(mail) {
    while (mail == "") {
        mail = prompt ("este campo no puede estar vacio");
    }
    return mail;
}
function ValidarUsuario(NombreDeUsuario) {
    while (NombreDeUsuario == "" ) {
        NombreDeUsuario = prompt(
            "Este campo no puede estar vacio)"
        );
    }
    return NombreDeUsuario;
}
function ValidarContra(clave) {
    while (clave == "") { 
        clave = prompt (
            "Este campo no puede estar vacio, ingrese contraseña"
        );
    }
    return clave;
}

// CREAR EL USUARIO Y VALIDAR EL INGRESO
let correo1 = prompt("ingresa su correo")
correo1 = ValidarCorreo(correo1);
alert(correo1);

let NombreDeUsuario1 = prompt("ingrese el usuario");
NombreDeUsuario1 = ValidarUsuario(NombreDeUsuario1);
alert(NombreDeUsuario1);

let clave1 = prompt("ingrese una clave");
clave1 = ValidarContra(clave1);
alert(clave1);
let clave2 = prompt("vuelva a ingresar la clave");

// VALIDA SI SON LAS MISMAS CONTRASEÑAS
while (clave1 !== clave2) {
    clave2 = prompt(
        "las contrasenias no coinciden, intentelo de nuevo"
    );
}
alert("las contrasenias coinciden")

//Se consulta si quere o no iniciar sesion 
let NombreDeUsuario2;
let Correo2;
let Clave3;
let cantidadDeIntentos =0;//cantida de intentos erroneos

let iniciosesion = Number(prompt("Iniciar sesion(1).Salir(0)"));

while (iniciosesion !== 1) {
    if (iniciosesion == 0) {
        break
    }
    iniciosesion = Number(prompt("inicio sesion (1). Salir (0)"));
}

if (iniciosesion == 0) {
    alert("no quisiste iniciar sesion, hasta luego");
} else {
    //de nuevo, ingreso y validacion 
    NombreDeUsuario2 = prompt ("nombre de usuario");
    NombreDeUsuario2 = ValidarUsuario(NombreDeUsuario2)

    //ingreso y validacion de clave
    Clave3 = prompt("Clave");
    Clave3 = ValidarContra(Clave3);

    //Valido que usuario y contraseña coincidan
    //cantidad de intentos menor a 3

    while(
        (clave1 != Clave3 && cantidadDeIntentos < 3)||
        (NombreDeUsuario1 != NombreDeUsuario2 && cantidadDeIntentos < 3)
    ) {
        cantidadDeIntentos++;
        alert(
            `los datos ingresa son incorrectos. Vuelva a ingresar los datos.
            Intentos disponibles ${3 - cantidadDeIntentos} `
        );
        //Vuelve a ingresa y a validar usuario y clave 
        NombreDeUsuario2 = prompt("Nombre de usuario");
        NombreDeUsuario2 = ValidarUsuario(NombreDeUsuario2);

        Clave3 = prompt("Clave");
        Clave3 = ValidarContra(Clave3);
    }
    
    // Si la vnatiad de intentos es distanta a 3, da un mensaje de bienvenida, si es mator a 5 
    // es que se le envio un mail
    if (cantidadDeIntentos != 5) {
        alert( "sesion inciada");
        document.write(`sesion iniciada. Bienvenido usuario ${NombreDeUsuario1}`);
    } else { 
        //ingreso y valido correo.
        Correo2 = prompt("Ingrese el correo para reestablecer la contraseña");
        Correo2 = ValidarCorreo(Correo2);

        if (correo1 === Correo2) {
            alert(
                `Se ha enviado a ${correo1} un correo con el nombre del usuario. alli podra reestableces su contraseña`
            );
            } else {
                alert(
                    "no hemos podido verificar la direccion del correo"
                );
            }
        }
    }
