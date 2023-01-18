let randomNumber1 = Math.random();
randomNumber1 = randomNumber1 * 5;
randomNumber1 = Math.floor(randomNumber1) + 1;
document.querySelector(".img1 ").setAttribute("src", "images/dice"+ randomNumber1+".png");

let randomNumber2 = Math.random();
randomNumber2 = randomNumber2 * 5;
randomNumber2 = Math.floor(randomNumber2) + 1;
document.querySelector(".img2 ").setAttribute("src", "images/dice"+ randomNumber2 +".png");

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").textContent = "Player 1 wins!!!";
}
else if(randomNumber1 === randomNumber2){
    document.querySelector("h1").textContent = "Its a tie!!";
}
else {
    document.querySelector("h1").textContent = "Player 2 wins!!!";
}



