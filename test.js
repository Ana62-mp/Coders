saludar=function()
{
    let cmpNombre;
    let nombre
    let cmpApellido;
    let apellido
    let cmpResultado;

    cmpNombre = document.getElementById("txtNombre");
    cmpApellido = document.getElementById("txtApellido");
    apellido=cmpApellido.value;
    nombre=cmpNombre.value;
    saludo=generarSaludo(nombre, apellido);
    console.log(saludo);

    cmpResultado = document.getElementById('lblResultado');
    cmpResultado.innerText = saludo;

}