let gameSquen = [];
let userSquen = [];
let btns = ["red","yellow","green","blue"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress",function(){
    if (started== false){
        console.log("game is started");
        started = true;
        
        levelUp();
    }
})
function btnFlash(btn){
    btn.classList.add("flash");setTimeout(() => {
        btn.classList.remove("flash");
    }, 500);
}

function levelUp(){
    userSquen = [];
    level++;
    h2.innerText = `Level ${level}`;
    let randIdx = Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    console.log(randIdx);
    console.log(randColor);
    console.log(randBtn);
    gameSquen.push(randColor);
    console.log(gameSquen);

    btnFlash(randBtn);
}
function check(indx){

    if(userSquen[indx]==gameSquen[indx]){
        if(userSquen.length==gameSquen.length){
        setTimeout(levelUp,1000);
        }
    }else {
        h2.innerHTML = `Game over! YOUR SCORE WAS <b>${level}</b> <br> Press any key to Start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(() => {
            document.querySelector("body").style.backgroundColor = "white";
        }, 500);
        reset();
    }

}

function btnPresss(){
    console.log(this);
    let btn = this;
    btnFlash(btn);

 userColor = btn.getAttribute("id");
     userSquen.push(userColor);

     check(userSquen.length - 1);
}
let allBtns = document.querySelectorAll(".btn");
for ( btn of allBtns){
    btn.addEventListener("click",btnPresss);
}

function reset(){
    started = false;
    gameSquen = [];
    userSquen = [];
    level = 0;
}


