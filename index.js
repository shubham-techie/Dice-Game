document.getElementsByClassName("btn")[0].addEventListener("click",function(){


// for image 1
var randomNo1 = Math.random() * 6;  //0-5.9999
randomNo1 = Math.floor(randomNo1) + 1;  //1-6

var randomDice_img1 = "images/dice" + randomNo1 + ".png";  //images/dice1.png - images/dice6.png

var image1 = document.querySelector(".image1");  //selecting image1
image1.setAttribute("src", randomDice_img1);  //changing the dice image


// for image 2
var randomNo2 = Math.random() * 6;  //0-5.9999
randomNo2 = Math.floor(randomNo2) + 1;  //1-6

var randomDice_img2 = "images/dice" + randomNo2 + ".png";  //images/dice1.png - images/dice6.png

var image2 = document.querySelector(".image2");  //selecting image1
image2.setAttribute("src", randomDice_img2);  //changing the dice image


// for changing h1
var h1 = document.getElementsByTagName("h1")[0]; //selecting frist h1 element

if (randomNo1 > randomNo2) {
    h1.innerHTML = "Player 1 Won !";
}
else if (randomNo1 < randomNo2) {
    h1.innerHTML = "Player 2 Won !";
}
else {
    h1.innerHTML = "Draw !";
}

});