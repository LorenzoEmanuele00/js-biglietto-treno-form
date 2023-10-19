// DATA
const kmElem = document.getElementById("km")
console.log(kmElem, typeof kmElem)

const etaElem = document.getElementById("eta")
console.log(etaElem, typeof etaElem)

const kmPrice = 0.21;
console.log(kmPrice);

const minorDiscount = 0.2;
console.log(minorDiscount);

const overDiscount = 0.4
console.log(overDiscount);

const trainTicket = document.querySelector(".train-ticket")


// BUTTON
document.getElementById("send").addEventListener("click", function () {
    console.log("funzioona")

    // ANALISIS DATA
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
    } else if (eta >= 65) {
        ticket = ticket - (ticket * overDiscount);
    }
    console.log(ticket);

    ticket = ticket.toFixed(2)  // reduce to 2 decimal
    console.log(ticket);

    // MESSAGE
    const message = `Il tuo biglietto costa ${ticket}`;
    console.log(message)
    trainTicket.innerHTML = message
    trainTicket.classList.remove("hidden");
});


document.getElementById("cancell").addEventListener("click", function () {
    km.value = "";
    eta.value = "";
    trainTicket.classList.add("hidden");
});