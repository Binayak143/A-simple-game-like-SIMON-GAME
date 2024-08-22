let gameSeq = [];
let userSeq = [];
let started = false ;
let level = 0;
let h2 = document.querySelector("h2");
let btns = ["red","blue","green","yellow"];
let allBtn = document.querySelectorAll(".btn");
let h3 = document.querySelector("h3");
let highScore = 0;

document.addEventListener("keypress",function(){
    if(started == false){
        console.log("Game start");
        started=true;
        levelUp();
    }
});
function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function (){
        btn.classList.remove("flash");
    },200);
}
function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
    let randomIdx = Math.floor(Math.random()*3);
    let randomColor = btns[randomIdx];
    let randomBtn = document.querySelector(`.${randomColor}`);

    gameSeq.push(randomColor);
    console.log(gameSeq);
    btnFlash(randomBtn);
}

function btnPress(){
    let btn = this;
    btnFlash(btn);

    userColor = btn.getAttribute("id");
    console.log(userColor);
    userSeq.push(userColor);

    check(userSeq.length-1);
    // console.log("Btn pressed");
}
for(btn of allBtn){
    btn.addEventListener("click",btnPress);
}
function check(idx){
    // console.log("curr Level ",level);
    // let idx = level-1;
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
           levelUp();
        }
        console.log("Same value");
    }else{
        h2.innerHTML = `Game Over! your score was <b>${level} </b> Press any key to start :)`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function (){
            document.querySelector("body").style.backgroundColor = "white";
        },150);
        highScore = level;
        h3.innerText = `Highest Score is ${highScore}`;
        reset();
    }
}

function reset(){
    started = false;
    userSeq = [];
    gameSeq = [];
    level = 0;
}