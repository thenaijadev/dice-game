var button = document.querySelector(".btn");
var congrats = document.querySelector(".headingH1");
var num1;
var num2;
var congrats = document.querySelector(".headH1");
var dieName2;
var dieName1;
var die2;
var die1;
button.addEventListener("click",function(){
    num2 = Math.floor(Math.random()*6)+1;
    dieName2 = "images/dice" + num2 + ".png";
    die2 = document.querySelector(".img2");
    die2.setAttribute("src",dieName2);

    num1 = Math.floor(Math.random()*6)+1;
    dieName1 = "images/dice" + num1 + ".png";
    die1 = document.querySelector(".img1");
    die1.setAttribute("src",dieName1);
    
    if(num1>num2){
        congrats.style.fontSize = "50px";
        congrats.innerHTML="Player 1 wins.";
    }else if(num1<num2){
        congrats.style.fontSize = "50px";
        congrats.innerHTML="Player 2 wins.";
    }else{
        congrats.innerHTML="Draw";
    }
   
});
 
