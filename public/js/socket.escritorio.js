
let socket = io();
let searchParams = new URLSearchParams(window.location.search);

if(!searchParams.has("escritorio")){
    window.location = "index.html";
    throw new Error("El escritorio es necesario");
}

let escritorio = searchParams.get("escritorio");

console.log(escritorio);

let escritorioActual = document.querySelector("h1");

escritorioActual.textContent = `Escritorio: ${escritorio}`;

let numeroActual = document.querySelector("small");

let boton = document.querySelector("button");


boton.addEventListener("click", () => {

    socket.emit("atenderTicket", {escritorio}, (resp) => {

      
        if(resp === "No hay tickets"){

            numeroActual.textContent = resp;
            alert(resp);
            return;
        }

        numeroActual.textContent = resp.numero;

    })


},false);
