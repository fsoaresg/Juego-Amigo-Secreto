/* El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar 
la lógica para resolver el problema.*/

let amigos = [];
let tituloDeLista = document.getElementById("subtitleListaAmigos");


function agregarAmigo() {
    let input = document.getElementById("amigo");
    /*trim es un método de JavaScript que toma el texto que escribió el usuario y lo limpia 
    quitando espacios extra al inicio y al final.*/
    let nombre = input.value.trim();

    //Verifica que realmente se ingresó un nombre, sino muestra un alerta
    if (nombre === "") {
    alert("Por favor, inserte un nombre");
    return;
    }
    
    amigos.push(nombre);
    mostrarLista();
    input.value = "";
}


function mostrarLista() {
   tituloDeLista.innerHTML = ('h3','Lista de amigos:');
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    
    amigos.forEach((amigo) => {
    let li = document.createElement("li");
    /*textContent es una propiedad que se utiliza para obtener el contenido de texto de un 
    nodo y sus descendientes en un documento HTML*/
    li.textContent = amigo;
    /*appendChild() es un método de JavaScript que se utiliza para añadir un nodo hijo (li) 
    en el nodo padre (lu) del DOM (Document Object Model).*/
    lista.appendChild(li);
    });
}


function sortearAmigo() {
    if (amigos.length === 0) {
        alert("La lista está vacía, agrega al menos un nombre.");
        return;
    }
 
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSecreto = amigos[indiceAleatorio];
    document.getElementById("resultado").textContent =
    `🎁 El amigo secreto sorteado es: ${amigoSecreto}`;
}