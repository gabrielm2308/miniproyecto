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