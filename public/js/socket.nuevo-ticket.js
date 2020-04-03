

//Comando para establecer la conexión

let socket = io();

let label = document.getElementById("lblNuevoTicket");

socket.on("connect", () => {
    console.log("Conectado al servidor");
})

socket.on("disconnect", () => {
    console.log("Desconectado al servidor");
})

let boton = document.getElementById("boton");

socket.on("estadoActual",(resp) => {

    label.textContent = resp.actual;

})



boton.addEventListener("click", () => {

    socket.emit("siguienteTicket", null, (siguienteTicket) => {
        
       label.textContent = siguienteTicket;
        

    })
    
})