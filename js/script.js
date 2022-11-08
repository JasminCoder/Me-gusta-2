/*var likes = 9;
var likesElement = document.querySelector('#likes');

console.log(likes);

var doce = 12;
var doceElement = document.querySelector('#doce');

function sumar(){
    var contador = 0;
    
        likes++;
        likesElement.innerText = likes + " like(s)";
    
        doce++
        doceElement.innerText = doce + " like(s)";
    }*/
    
//contar cada vez q se da click al boton like
var likes = 9;
var likesElement = document.querySelector('#likes');

console.log(likesElement);

function sumar(){
    likes++;
    likesElement.innerText = likes + "  like(s)";
    console.log(likes);
}


//contador boton 2
var doce = 12;
var doceElement = document.querySelector('#doce');

function counter(){
    doce++;
    doceElement.innerText = doce + "  like(s)";
    console.log(doce);
}


//contador boton 3
var nueve = 9;
var nueveElement = document.querySelector('#nueve');

function sum(){
    nueve++;
    nueveElement.innerText = nueve + "  like(s)";
    console.log(nueve);
}
