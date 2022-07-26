
function carregar(){
 var data = new Date();
 var hora = data.getHours();
 var fundo = document.body;
 var msg = window.document.getElementById('msg');
 var img = window.document.getElementById('img');
 if(hora >= 0 && hora <12){
    msg.innerText = ` Agora são: ${hora} horas.`;
    img.src = "/fotos/manha.png"
 } else if( hora <= 18){
    msg.innerText = ` Agora são: ${hora} horas.`;
    img.src = "/fotos/tarde.png" 
    fundo.style.background= 'rgb(246, 123, 0)';
 }else{
    msg.innerText = ` Agora são: ${hora} horas.`;
    img.src = "/fotos/noite.png" 
    fundo.style.background= 'rgb(0, 10, 63)';
 }
}
