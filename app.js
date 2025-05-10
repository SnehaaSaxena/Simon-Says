let gameSeq=[];
let userSeq=[];
let started=false;
let level=0,highScore=0;
let btns=["red","green","yellow","purple"];
let h3=document.querySelector("h3");
let h2=document.querySelector("h2");
document.addEventListener("keypress",function(){
  if(started==false){
    console.log("game started");
    started=true;
    levelUp();
}
});
function btnFlash(btn){
   btn.classList.add("flash");
   setTimeout(()=>{
    btn.classList.remove("flash");
   },250);
}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(()=>{
     btn.classList.remove("userflash");
    },250);
 }
function levelUp(){
  userSeq=[];
  level++;
  h2.innerText=`Level ${level}`;
  let randIdx=Math.floor(Math.random()*3);
  let randColor=btns[randIdx];
  let randBtn=document.querySelector(`.${randColor}`);
  gameSeq.push(randColor);
  btnFlash(randBtn);
}
 function checkAns(idx){

   if(userSeq[idx]==gameSeq[idx]){
      if(userSeq.length == gameSeq.length){
        setTimeout(levelUp(),1000);
      }
   }else{
    h2.innerHTML=`Game Over! Your score was <b>${level}</b> <br> Press any key to start`;
    if(level>highScore){
      h3.innerText=`New High Score is ${level} Try to beat this`;
    }
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){
      document.querySelector("body").style.backgroundColor="wheat";
    },150);
    reset();
 }
 }
function btnPress(){
    let btn=this;
    userFlash(btn);
    let userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}
let allBtns=document.querySelectorAll(".btn");
    for(bt of allBtns){
       bt.addEventListener("click",btnPress);
    }

function reset(){
  started=false;
  gameSeq=[];
  userSeq=[];
  level=0;
}


