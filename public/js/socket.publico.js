
let socket = io();

let lblTicket1 = document.getElementById("lblTicket1");
let lblTicket2 = document.getElementById("lblTicket2");
let lblTicket3 = document.getElementById("lblTicket3");
let lblTicket4 = document.getElementById("lblTicket4");

let lblEscritorio1 = document.getElementById("lblEscritorio1");
let lblEscritorio2 = document.getElementById("lblEscritorio2");
let lblEscritorio3 = document.getElementById("lblEscritorio3");
let lblEscritorio4 = document.getElementById("lblEscritorio4");

let lblTickets = [lblTicket1,lblTicket2,lblTicket3,lblTicket4];
let lblEscritorios = [lblEscritorio1,lblEscritorio2,lblEscritorio3,lblEscritorio4];


socket.on("estadoActual", async (resp) => {

    actualizaHTML(resp.ultimos4);

})

socket.on("ultimos4", (resp) => {

    actualizaHTML(resp.ultimos4)
})

function actualizaHTML(ultimos4) {

    for(let i = 0; i <= ultimos4.length-1; i++){

        lblTickets[i].textContent = `Ticket ${ultimos4[i].numero}`;
        lblEscritorios[i].textContent = `Escritorio ${ultimos4[i].escritorio}`;

    }

}