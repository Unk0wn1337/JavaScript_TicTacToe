import { KOCKAK } from "./adatok.js";
function main(){
    terKialakitas();
    jatekosNevek();
    kattintas();
    ellenorzes();
}

function terKialakitas(){
    const TER = document.getElementById("jatekTer");
    for (let index = 0; index < KOCKAK.length; index++) {
        TER.innerHTML += `<div class="kocka"><p class="nemLathato">p</p></div>`;
    }

}
 
function kattintas(){
    const KOCKA_DIV = document.querySelectorAll(".kocka");
    const OSSZES_P = document.querySelectorAll(".nemLathato")
    let oVagyX = 0
    const audioDraw = new Audio("draw.wav");
    for (let index = 0; index < KOCKA_DIV.length; index++) {
        KOCKA_DIV[index].addEventListener("click",function(event){
            audioDraw.play();
            oVagyX++
            if(oVagyX % 2 == 0){
                OSSZES_P[index].innerHTML = "O";
                OSSZES_P[index].classList.remove("nemLathato")
                KOCKAK[index] = "O";
                console.log(KOCKAK);
            } else {
                OSSZES_P[index].innerHTML = "X";
                OSSZES_P[index].classList.remove("nemLathato")   
                KOCKAK[index] = "X";
                console.log(KOCKAK);
            }
        });
    }
}

function ellenorzes(){
    if(KOCKAK[0] ==  "X" && KOCKAK[4] ==  "X" && KOCKAK[8] ==  "X" ||KOCKAK[0] ==  "O" && KOCKAK[4] ==  "O" && KOCKAK[8] ==  "O"){
        alert("Nyertel");
    }else if(KOCKAK[2] ==  "O" && KOCKAK[4] ==  "O" && KOCKAK[6] ==  "O" || KOCKAK[2] ==  "X" && KOCKAK[4] ==  "X" && KOCKAK[6] ==  "X"){
        alert("Nyertel");
    } else if(KOCKAK[0] ==  "X" && KOCKAK[3] ==  "X" && KOCKAK[6] ==  "X" || KOCKAK[0] ==  "O" && KOCKAK[3] ==  "O" && KOCKAK[6] ==  "O"){
        alert("Nyertel");
    } else if(KOCKAK[1] ==  "X" && KOCKAK[4] ==  "X" && KOCKAK[7] ==  "X" || KOCKAK[1] ==  "O" && KOCKAK[4] ==  "O" && KOCKAK[7] ==  "O"){
        alert("Nyertel");
    } else if(KOCKAK[2] ==  "X" && KOCKAK[5] ==  "X" && KOCKAK[8] ==  "X" || KOCKAK[2] ==  "O" && KOCKAK[5] ==  "O" && KOCKAK[8] ==  "O"){
        alert("Nyertel");
    } else if(KOCKAK[0] ==  "X" && KOCKAK[1] ==  "X" && KOCKAK[2] ==  "X" || KOCKAK[0] ==  "O" && KOCKAK[1] ==  "O" && KOCKAK[2] ==  "O"){
        alert("Nyertel");
    } else if(KOCKAK[3] ==  "X" && KOCKAK[4] ==  "X" && KOCKAK[5] ==  "X" || KOCKAK[3] ==  "O" && KOCKAK[4] ==  "O" && KOCKAK[5] ==  "O"){
        alert("Nyertel");
    } else if(KOCKAK[6] ==  "X" && KOCKAK[7] ==  "X" && KOCKAK[8] ==  "X" || KOCKAK[6] ==  "O" && KOCKAK[7] ==  "O" && KOCKAK[8] ==  "O"){
        alert("Nyertel");
    } 
}


function jatekosNevek(){
    const JATEKOS_NEVEK = document.getElementById("inputok");
    let segedValtozo = `<form>`;
    segedValtozo += `<label for="elsoJatekosNev">Jatekos nev: (X)</label>`;
    segedValtozo += `<input type="text" id="elsoJatekosNev" name="elsoJatekosNev"><br><br>`;
    segedValtozo += `<label for="masodikJatekosNev">Jatekos nev: (O)</label>`;
    segedValtozo += `<input type="text" id="masodikJatekosNev" name="masodikJatekosNev"><br><br>`;
    segedValtozo += `</form>`;
    JATEKOS_NEVEK.innerHTML += segedValtozo
}


main();