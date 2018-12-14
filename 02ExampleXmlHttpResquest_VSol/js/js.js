// alert('Conexion con Html Principal correcta js');

/* 02.- Creacion de la funcion start*/
function start() {
    // Variable de dataArea
    vdataArea = document.getElementById("dataArea");
    //  Variable de botn
    var vBttn = document.getElementById("bttnAccept");
    // Ponemos el botón que al ser pulsado realize la funcion leer
    vBttn.addEventListener("click", read, false);
}

/* 03.- Creacion de la funcion READ*/
function read() {
    // Var de la utl de nuestro archivo
    var url = "texto.txt";
    // !!!!!! OJO !!!!!!!!!!
    // Creamos el contructor Resquest
    var resquest = new XMLHttpRequest();

    // vamos a llamarlo para ponerlo a la escucha
    resquest.open("GET", url, true);

    // Ahora le vamos a agregar un ONREADYSTATECHANGE
    // Esta se va a lanzar cada vez que cambia el valor de la propiedad readyState
    // se le da una función

    resquest.onreadystatechange = function () {
        // Funcion que nos lee el estado de XMLHT del cliente
        console.log("READY STATE" + resquest.readyState);
        // 0 	UNSENT 	Client has been created. open() not called yet.
        // 1 	OPENED 	open() has been called.
        // 2 	HEADERS_RECEIVED 	send() has been called, and headers and status are available.
        // 3 	LOADING 	Downloading; responseText holds partial data.
        // 4 	DONE 	The operation is complete

        // Si se ha completado con exito y estatus es 200 que nos indica que se nos ha devuelto la conexion
        if (resquest.readyState == 4 && resquest.status == 200) {
            // Añade lo contenido en el txt
            resquest.addEventListener("load", show, false);
        } else {
            document.getElementById('dataArea').innerHTML = "Error in load file";
        }
    }
    resquest.send(null);
}

/* 04.- Creación de la funcion show*/
// Esta es llamada en cuanto carque la llamada de XMLResquest
// Esta funcion va a recibir el objeto desencadente del evento
function show(e) {

    // La respuesta nos la da en formato text
    // En definitiva le estamos pidiendo que nos devuelva el objeto pedido en txt
    vdataArea.innerHTML = e.target.responseText;
}


/* 01.- Creacion de la funcion al cargar el HTML*/
window.addEventListener("load", start, false)