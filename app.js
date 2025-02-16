// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
console.log("app.js cargado correctamente");

function agregarAmigo(){
    let amigo = document.getElementById('amigo').value.trim().toLowerCase();
    //trim() se utiliza para eliminar espacios en blanco al inicio y al final de una cadena
    //test() se utiliza para verificar si una cadena de texto cumple con una expresión regular 
    if (/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/.test(amigo)){
        if(!amigos.includes(amigo)){
            amigos.push(amigo);
            mostrarAmigosGradualmente(amigos);
        }else{
            alert("Ese nombre ya está en la lista.");
        }
    } else{
        if(amigo.length===0){
            alert("Por favor, inserte un nombre.");
        }else{
            alert("El nombre contiene caracteres no válidos.");
        }
    }
    limpiarEntrada();
    return;
}

function limpiarEntrada(){
    document.getElementById('amigo').value ="";
    return;
}

function mostrarAmigosGradualmente(amigos) {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for(let i=0; i<amigos.length; i++){
        let li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
    return;
}