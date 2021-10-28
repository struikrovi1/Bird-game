/* 
box.onclick = function(a){
    a.target.style.color="red"//box
    console.log(a); // Возвращает опции onclick
}


var ad = function(){
    console.log(arguments);
}

ad("Bmw", "Audi", "Kia", "Hundai")// возращает в виде array если параметры не стабильные

*/

var bird = document.querySelector(".bird")
var birdEgg = document.querySelector(".bird-egg")
var birdBasket = document.querySelector(".bird-basket")
var leftRightMove = 0
var say = 20;
var score = document.querySelector(".score")
var step = 0;



setInterval(() => {
    var rnd = Math.floor(Math.random() * (window.outerWidth - birdBasket.offsetWidth));
    birdBasket.style.left = rnd + "px"
}, 4000);

window.onkeyup = function (e) {

    if (e.keyCode == 39) {
        if (window.outerWidth - bird.offsetWidth > leftRightMove + 150) {
            leftRightMove += 150
            bird.style.left = leftRightMove + "px"
            bird.classList.remove("bird-active")
        }


    } else if (e.keyCode == 37) {
        if (leftRightMove > 0) {
            leftRightMove -= 150
            bird.style.left = leftRightMove + "px"
            bird.classList.add("bird-active")

        }


    } else if (e.keyCode == 13) {
        birdEgg.style.animation = "0.7s birdAni forwards"
        say += 20;
        var basketLeft = pxParse(birdBasket.style.left)
        var birdLeft = pxParse(bird.style.left)
        if (birdLeft >= (basketLeft - birdBasket.offsetWidth) && birdLeft <= basketLeft) {
            step++
            score.innerHTML=step; 
            setTimeout(() => {
                var newBeg = birdEgg.cloneNode(true)
                newBeg.style.left = say + "px"

                birdBasket.appendChild(newBeg)
                birdEgg.style = "display:none";
                birdEgg.style.animation = "none"
            }, 1000);
            setTimeout(() => {
                birdEgg.style = "display:block"
                bird.appendChild(newBeg);
            }, 1500);


        }
        

    }

}

function pxParse(pxs) {
    return Number(pxs.slice(0, pxs.length - 2))

}