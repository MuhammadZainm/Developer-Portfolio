

const cont=document.querySelector("main")
const popup=document.querySelector("dialog")
const theForm=popup.querySelector("form")
const closebtn=popup.querySelector("i")
const btndone=popup.querySelector("button")
const iname=popup.querySelector("#name")
const icolor=popup.querySelector("#color")
const imark=popup.querySelector("#mark")
const btns=document.querySelectorAll(".btns")
const scoreboard=document.querySelectorAll(".scoreboard")
const gameboarddiv=document.querySelector("#gameboard")
const headnfoot=document.querySelectorAll(".headnfoot")
const btnname1=document.querySelector("#btnname1")
const btnname2=document.querySelector("#btnname2")
const btnclr1=document.querySelector("#btnclr1")
const btnclr2=document.querySelector("#btnclr2")
const btnmark1=document.querySelector("#btnmark1")
let currentTurn=1
const btnmark2=document.querySelector("#btnmark2")
const scoreboard1=document.querySelector("#scoreboard1")
const scoreboard2=document.querySelector("#scoreboard2")
const p1name=document.querySelector("#p1name")
const p2mark=document.querySelectorAll(".ho")
const p2name=document.querySelector("#p2name")
const p1mark=document.querySelectorAll(".hx")
const title=document.querySelector("#title")
const turnshow=document.querySelector("#turnshow")


function game(){
const gameboard=gameboardf()
gameboard.messegepop()
    function gridmaker(){
    gameboarddiv.innerHTML=""
    gameboard.gameArray.forEach(c => {
        const cell=document.createElement("div")
        cell.classList.add("cell")
        gameboarddiv.append(cell)
         cell.addEventListener("click",()=>{
                if(cell.innerHTML.trim()==""&&!gameboard.getwinner()){
                    const Player=gameboard.getCurrentplayer()
                       cell.textContent=Player.mark
                    cell.style.color=Player.colorm
                       gameboard.switchturn()
                       gameboard.turncontroller()
                       btnclr1.style.display="none"
                       btnclr2.style.display="none"
                       btnmark1.style.display="none"
                       btnmark2.style.display="none"
                       const index=Array.from(gameboarddiv.children).indexOf(cell)
                       gameboard.gameArray[index]=Player.mark
                       console.log(gameboard.gameArray)
                       checkWinner(Player)
        }
else return


        })




    });

    
function checkWinner(player){
    const currentTurnis=gameboard.getCurrentturn()
    const getwin=gameboard.getwinner()
console.log(getwin)
    let playeris=player
     function checkWinnerline(playerg){
    turnshow.textContent=""
    let winnerLine=`${playerg.playername} has won the game!`
    turnshow.textContent=winnerLine
    gameboard.setwinner(true)
    gridlock()
}
   function Tieline(){
    turnshow.textContent=""
    turnshow.textContent="Great Contest, but the game was a tie"
    gridlock()
}
    if(gameboard.gameArray[0]==player.mark && gameboard.gameArray[1]==player.mark && gameboard.gameArray[2]==player.mark)checkWinnerline(playeris);
    else if(gameboard.gameArray[3]==player.mark && gameboard.gameArray[4]==player.mark && gameboard.gameArray[5]==player.mark)checkWinnerline(playeris);
else if(gameboard.gameArray[6]==player.mark && gameboard.gameArray[7]==player.mark && gameboard.gameArray[8]==player.mark)checkWinnerline(playeris);
    else if(gameboard.gameArray[0]==player.mark && gameboard.gameArray[3]==player.mark && gameboard.gameArray[6]==player.mark)checkWinnerline(playeris);
else if(gameboard.gameArray[1]==player.mark && gameboard.gameArray[4]==player.mark && gameboard.gameArray[7]==player.mark)checkWinnerline(playeris);
    else if(gameboard.gameArray[2]==player.mark && gameboard.gameArray[5]==player.mark && gameboard.gameArray[8]==player.mark)checkWinnerline(playeris);
else if(gameboard.gameArray[0]==player.mark && gameboard.gameArray[4]==player.mark && gameboard.gameArray[8]==player.mark)checkWinnerline(playeris);
    else if(gameboard.gameArray[2]==player.mark && gameboard.gameArray[4]==player.mark && gameboard.gameArray[6]==player.mark)checkWinnerline(playeris);
else if(currentTurnis==10 && !gameboard.getwinner()) Tieline(playeris)
   else return

   
    }

    function gridlock(){
        gameboarddiv.querySelectorAll(".cell").forEach(c=>{
            c.style.pointerEvents="none"
        })
        document.body.querySelectorAll("button").forEach(c=>{
            c.style.pointerEvents="none"
        })
    }
}
gridmaker()
backgroundSelect()

}
function backgroundSelect(){
let Randomint=Math.floor(Math.random() * 4)+1
if(Randomint==1){
    gameboarddiv.classList.add("o")
    document.body.style.backgroundColor="rgba(99, 48, 1, 1)"
headnfoot.forEach(h=>{h.style.backgroundColor="var(--c1h)"})
    scoreboard.forEach(s => {
    s.querySelectorAll("i").forEach(icon => {
        // do something with each icon
        icon.style.color = "var(--c1h)";
    });
});
popup.style.backgroundColor="var(--c1h)"
    btns.forEach(b=>{b.style.backgroundColor="var(--c1h)"})
    title.style.borderColor="rgba(99, 48, 1, 1)"
}
else if(Randomint==2){
    gameboarddiv.classList.add("b")
    popup.style.backgroundColor="var(--c2h)"
    document.body.style.backgroundColor="rgb(1, 1, 99)"
scoreboard.forEach(s => {
    s.querySelectorAll("i").forEach(icon => {
        // do something with each icon
        icon.style.color = "var(--c2h)";
    });
});
headnfoot.forEach(h=>{h.style.backgroundColor="var(--c2h)"})
 btns.forEach(b=>{b.style.backgroundColor="var(--c2h)"})
 title.style.borderColor="rgb(1, 1, 99)"
}
else if(Randomint==3){gameboarddiv.classList.add("y")
    popup.style.backgroundColor="var(--c3h)"
    document.body.style.backgroundColor="rgba(71, 68, 0, 1)"
headnfoot.forEach(h=>{h.style.backgroundColor="var(--c3h)"})
scoreboard.forEach(s => {
    s.querySelectorAll("i").forEach(icon => {
        // do something with each icon
        icon.style.color = "var(--c3h)";
    });
});
 btns.forEach(b=>{
    b.style.backgroundColor="var(--c3h)"})
 title.style.borderColor="rgba(71, 68, 0, 1)"
}
else {
gameboarddiv.classList.add("g")
popup.style.backgroundColor="var(--c4h)"
headnfoot.forEach(h=>{h.style.backgroundColor="var(--c4h)"})
scoreboard.forEach(s => {
    s.querySelectorAll("i").forEach(icon => {
        // do something with each icon
        icon.style.color = "var(--c4h)";
    });
});
 btns.forEach(b=>{b.style.backgroundColor="var(--c4h)"})
 title.style.borderColor="rgb(1, 89, 1)"
}
}
function gameboardf(){

    let P1="P1"
let P2="P2"
let clr1="red";
let clr2="blue";
let mark1="X";
let mark2="O";
let currentPlayer
  let winner=false
const turncontroller= ()=>{






    if(currentTurn%2==1){
        scoreboard2.classList.remove("playing")
    currentPlayer=player1
    scoreboard1.classList.add("playing")
    turnStatement=`${currentPlayer.playername}'s Turn`
    turnshow.textContent=turnStatement
    }
    else{
            scoreboard1.classList.remove("playing")
    currentPlayer=player2
    scoreboard2.classList.add("playing")
    turnStatement=`${currentPlayer.playername}'s Turn`
    turnshow.textContent=turnStatement
    }
}
const switchturn =()=>{
    currentTurn++
}
 const player1=createPlayer(P1,mark1,clr1)
    const player2=createPlayer(P2,mark2,clr2)
    turncontroller()
    p1name.textContent=player1.playername
p2name.textContent=player2.playername
p1mark.forEach(m=>{m.textContent=player1.mark
    m.style.color=player1.colorm
})
p2mark.forEach(m=>{m.textContent=player2.mark
    m.style.color=player2.colorm
})


let popupmode;


btnname1.addEventListener("click",()=>{
      popup.classList.remove("name","color","mark","messege")
    popup.showModal()
    popup.classList.add("name")
    popupmode="name1"
})
btnname2.addEventListener("click",()=>{
       popup.classList.remove("name","color","mark","messege")
    popup.showModal()
    popup.classList.add("name")
    popupmode="name2"
})
btnclr1.addEventListener("click",()=>{
       popup.classList.remove("name","color","mark","messege")
    popup.showModal()

    popup.classList.add("color")
    popupmode="clr1"
 
})
btnclr2.addEventListener("click",()=>{
       popup.classList.remove("name","color","mark","messege")
    popup.showModal()
    popup.classList.add("color")
    popupmode="clr2"
     })
   btnmark1.addEventListener("click",()=>{
      popup.classList.remove("name","color","mark","messege")
    popup.showModal()
    popup.classList.add("mark")
    popupmode="mark1"
})
btnmark2.addEventListener("click",()=>{
       popup.classList.remove("name","color","mark","messege")
    popup.showModal()
    popup.classList.add("mark")
popupmode="mark2"
})




// Popup Input Controller
if(popup.classList.contains("messege")){
    btndone.style.display="none"
}


     btndone.addEventListener("click",()=>{
        if(popupmode=="name1"){
    P1=iname.value
      player1.playername=iname.value
      p1name.textContent=P1
        }

      else if(popupmode=="name2"){
P2=iname.value
      player2.playername=iname.value
      p2name.textContent=P2
      }
      else if(popupmode=="clr1"){
          clr1=icolor.value
        player1.colorm=clr1
        p1mark.forEach(m=>{
    m.style.color=clr1
})

      }
     else if(popupmode=="clr2"){
          clr2=icolor.value
        player2.colorm=clr2
        p2mark.forEach(m=>{
    m.style.color=clr2
})

     }
     else if(popupmode=="mark1"){
          mark1=imark.value
      player1.mark=mark1
       p1mark.forEach(m=>{
    m.textContent=mark1
})
     }
     else if(popupmode=="mark2"){
          mark2=imark.value
      player2.mark=mark2
       p2mark.forEach(m=>{
    m.textContent=mark2
})
     }

      turncontroller()
       theForm.reset()
popup.close()

})
const messegepop=()=>{
    popup.classList.remove("name","color","mark","messege")
    popup.showModal()
    popup.classList.add("messege")
}
closebtn.addEventListener("click",()=>{
    theForm.reset()
popup.close()
})
popup.querySelectorAll("input").forEach(m=>{m.addEventListener("input", () => {
    m.value = m.value.replace(/\s+/g, "");
})});

const gameArray=["","","","","","","","",""]


const getCurrentplayer=()=>
    currentPlayer;
const getCurrentturn=()=>currentTurn;
const getwinner=()=>winner;
const setwinner=(val)=>winner=val;


return {player1, player2,gameArray,messegepop,getwinner,setwinner,getCurrentturn,turncontroller,switchturn,getCurrentplayer}
}
function createPlayer(name,symbol,colormark){
const playername=name;
const mark=symbol;
const colorm=colormark
return{playername,mark,colorm}
}
game()
