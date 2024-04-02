let game=[];
let user=[];
let color=["a","b","c","d"];
let started=false;
let level=0;
let HS=0;
let btns=document.querySelectorAll(".common");
document.addEventListener("keypress",function(){
    if(started==false){
        started=true;
        console.log("game has been started");
        levelUp();
        for(btn of btns){
            btn.addEventListener("click",btnpress);
        }
}
});
function btflash(bt){
bt.classList.add("flash");
setTimeout(function (){
    bt.classList.remove("flash")
},500)
}
function flash(bt){
bt.classList.add("userflash");
setTimeout(function (){
    bt.classList.remove("userflash")
},100)
}
function levelUp(){
user=[];
level++;
let h2=document.querySelector("h2");
h2.innerText="level-"+level;
let rndm=Math.floor(Math.random()*4);
// console.log(rndm);
let rndmcolor=color[rndm];
game.push(rndmcolor);
console.log(game);
let rndmbtn=document.querySelector(`.${rndmcolor}`);
btflash(rndmbtn);
}
function btnpress(){
let btn=this
    flash(btn);
  user.push(btn.getAttribute("id"));
  check(user.length-1);  
}
function check(i){
    if(user[i]===game[i]){
        if(user.length==game.length){
       setTimeout(levelUp(),300);
        }
    }
    else{
            let body=document.querySelector("body");
        body.style.backgroundColor="red";
        setTimeout(()=>{
        body.style.backgroundColor="yellowgreen";
        },200);
        let h2=document.querySelector("h2");
        if(level>0){
        h2.innerHTML=`game Over! your score -${level-1} <b>press any Key to restart<b>`;
        }
        else{
            h2.innerHTML=`game Over! your score -${level} <b>press any Key to restart<b>`;
        }
        let h3=document.querySelector("h3");
        if(HS<game.length){
            if(game.length>0){
            h3.innerText=`highest Score =${game.length-1}`;
            }
            else{
                h3.innerText=`highest Score =${0}`; 
            }
            HS=game.length;
        }
        reset();
}}
function reset(){
    started=false;
    level=0;
    game=[];
    user=[];
}
