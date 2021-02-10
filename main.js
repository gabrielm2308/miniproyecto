var index=0;
var imagenes= [];
var time = 3000;

imagenes[0]="images/0.jpg";
imagenes[1]="images/02.png";
imagenes[2]="images/3.jpg";

function slider(){
    document.slide.src = imagenes[index];
    if(index<imagenes.length-1){
        index++;
    }
    else{
        i=0;
    }
    setTimeout("slider()",time);
}
window.onload = slider;


function enviarform(){
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("correo").value;
    const msje = document.getElementById("mensaje").value;
    if(nombre===null || nombre===""){
        document.getElementById("nombre").focus();
    }else if(email===null || email===""){
        document.getElementById("correo").focus();
    }else if(msje===null || msje===""){
        document.getElementById("mensaje").focus();
    }else{
        console.log("Nombre: "+nombre+
        " Correo: "+email+
        " Mensaje: "+msje);
        alert("Enviado exitosamente");
    }
     
}
const email = document.getElementById("correo").value;
function validarcorreo(email){
    var expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    var esvalido= expReg.test(email)
    if (esvalido===true){
        alert("El correo es válido");
    }
    else{
        alert("EL CORREO NO ES VALIDO");
    }
}