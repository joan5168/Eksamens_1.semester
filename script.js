/*------------------------------------------
Burgermenu indeks.html
-------------------------------------------*/


window.addEventListener("load", sidenVises);


function sidenVises() {
    console.log("siden vises");
    //registrer klik på menu-knap
    document.querySelector("#menuknap").addEventListener("click", toggleMenu);
    document.querySelector("#billedeboks3").classList.add("pulse");
}


function toggleMenu() {
    console.log("Toggle menu");
    document.querySelector("#menu").classList.toggle("hide");



    let erSkjult = document.querySelector("#menu").classList.contains("hide");

    if (erSkjult == true) {
        //menu er nu skjult - ændre nenuknap til lll
        document.querySelector("#menuknap").textContent = "☰";
    } else {
        //menu er nu vist - ændre menuknap til X
        document.querySelector("#menuknap").textContent = "⤫";
    }

}
