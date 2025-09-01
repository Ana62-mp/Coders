saludar=function()
{
    let cmpNombre;
    let nombre
    let cmpApellido;
    let apellido
    cmpNombre = document.getElementById("txtNombre");
    cmpApellido = document.getElementById("txtApellido");
    nombre=cmpApellido.value;
    apellido=cmpNombre.value;
    saludo=generarSaludo(nombre, apellido);
    console.log(saludo);
}