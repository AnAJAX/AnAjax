// alert('Conexion con Html Principal correcta js');

/* 02.- Creacion de la funcion start*/
function start() {
    // Variable de dataArea
    vdataArea = document.getElementById("dataArea");
    //  Variable de bttn
    var vBttn = document.getElementById("bttnAccept");
    // Ponemos que el botón,al ser pulsado realize la funcion leer
    vBttn.addEventListener("click", read, false);
}

/* 03.- Creacion de la funcion READ*/
function read() {
    // Var de la utl de nuestro archivo
    var url = "texto.txt";
    // !!!!!! OJO !!!!!!!!!!
    // Creamos el contructor XMLHttpRequest()
    var resquest = new XMLHttpRequest();
    // Vamos a llamarlo para ponerlo a la escucha
    resquest.addEventListener("load", show, false);
    // llamamos al metodo Open
    resquest.open("GET", url, true);
    // llamamos al metodo SEND con un valor NULL(no se envia ino)
    resquest.send(null)
}

/* 04.- Creación de la funcion show*/
// Esta es llamada en cuanto carque la llamada de XMLResquest
// Esta funcion va a recibir el objeto desencadente del evento
function show(e) {

    // En la zonaDatos debe mostart la info del fichero de texto
    // La respuesta nos la da en formato text
    // En definitiva le estamos pidiendo que nos devuelva el objeto pedido en txt
    vdataArea.innerHTML = e.target.responseText;
}

/* 01.- Creacion de la funcion al cargar el HTML*/
window.addEventListener("load", start, false)