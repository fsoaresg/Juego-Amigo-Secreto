/* El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar 
la lógica para resolver el problema.*/

let amigos = []; // <-- aquí guardamos los nombres de la lista de amigos que ingresa el usuario
let sorteados = []; // <-- aquí guardamos los nombres ya sorteados


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
    // console.log(amigos);
    mostrarLista(amigos);
    limpiarCampo();
}

function limpiarCampo() {
    document.querySelector('#amigo').value = '';
}

function mostrarLista(datos) {
    // Crea el contenedor que muestra imagen y título dinámicos (solo una vez) al crear la lista
    let listaHtml = `
        <div id="imagenContainer">
            <h3>Lista de Amigos</h3>
        </div>
        <div class="lista-contenedor">
    `;
    // Permite mostrar en cada columna máximo 5 nombres
    for (let i = 0; i < datos.length; i++) {
        if (i % 5 === 0) {
            if (i > 0) listaHtml += "</ul>"; // Cierra la columna anterior
            listaHtml += "<ul>"; // Abre una nueva columna
        }

        // Si ya fue sorteado, le aplica tachado
        //let clase = sorteados.includes(datos[i]) ? "tachado" : "";
        listaHtml += `<li id="amigo-${i}">${datos[i]}</li>`;
        //listaHtml += `<li id="amigo-${i}" class="${clase}">${datos[i]}</li>`;
    }

    listaHtml += "</ul></div>";
    document.getElementById("seccion-lista").innerHTML = listaHtml;
}


function sortearAmigo() {
    let resultadoDiv = document.getElementById("resultado");

    // Filtra los nombres que aún no han sido sorteados
    let disponibles = amigos.filter(a => !sorteados.includes(a));

    // Revisa si todos los nombres al listado de amigos han sido sorteados, si ya todos fueron sorteados muestra una alerta
    if (disponibles.length === 0) {
        alert("¡Todos los nombres ya fueron sorteados!");
        return;
    }

    // Elige al azar dentro de los disponibles para seleccionar al amigo secreto sorteado
    let indice = Math.floor(Math.random() * disponibles.length);
    let amigoSecreto = disponibles[indice];

    // Agrega al amigo secreto sorteado al array sorteados para facilitar la verificación y 
    // que no vuelva a ser sorteado evitando así que dos personas tengan el mismo amigo secreto
    sorteados.push(amigoSecreto);

    // Muestra lista de amigos
    mostrarLista(amigos);

    // Muestra el resultado del sorteo junto con dos imagenes dinámicas asociadas al resultado
    resultadoDiv.innerHTML = `
        <div class="resultado-contenedor">
            <span><strong>Tu amigo secreto es: ${amigoSecreto}</strong></span>
        </div>
    `;
    
    // console.log("Elemento eliminado:", amigoSecreto);
    // console.log("Array actualizado:", sorteados);
}