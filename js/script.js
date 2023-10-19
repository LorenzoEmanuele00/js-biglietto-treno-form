// DATA
const nameElem = document.getElementById("nome")
const kmElem = document.getElementById("km")
const etaElem = document.getElementById("eta")
const kmPrice = 0.21;
const minorDiscount = 0.2;
const overDiscount = 0.4
const trainTicket = document.querySelector(".train-ticket")
let type = "Standard";

// BUTTON
document.getElementById("send").addEventListener("click", function () {
    // ANALISIS DATA
    const nome = nameElem.value
    console.log(nome)
    const km = parseInt(kmElem.value)
    console.log(km)
    const eta = parseInt(etaElem.value)
    console.log(eta)

    // LOGIC
    let ticket;
    ticket = km * kmPrice;
    console.log(ticket);

    if (eta < 18) {
        ticket = ticket - (ticket * minorDiscount);
        type = "Minorenne";
    } else if (eta >= 65) {
        ticket = ticket - (ticket * overDiscount);
        type = "Over 65";
    }
    console.log(ticket);

    ticket = ticket.toFixed(2)  // reduce to 2 decimal
    console.log(ticket);

    // OUTPUT
    document.getElementById("nome-passeggero").innerHTML = nome;
    document.getElementById("tipo").innerHTML = type;
    document.getElementById("carrozza").innerHTML = Math.floor(Math.random() * 10) + 1;
    document.getElementById("cp").innerHTML = Math.floor(Math.random() * 100000) + 1;
    document.getElementById("price").innerHTML = ticket
    trainTicket.classList.remove("hidden");
});


document.getElementById("cancell").addEventListener("click", function () {
    nome.value = "";
    km.value = "";
    eta.value = "";
    trainTicket.classList.add("hidden");
});