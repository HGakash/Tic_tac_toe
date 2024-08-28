let boxes = document.querySelectorAll('.box');
let reset = document.querySelector('#reset');
let btn2 = document.querySelector('#new-btn');
let msgContainer = document.querySelector('.msg-container');
let msg = document.querySelector('#msg');
let newBtn = document.querySelector('#new-btn');
let drawPara = document.querySelector('#draw');
let turnO = true; //playerX , playerO

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetFun = ()=>{
    boxes.forEach((items)=> {
        items.innerText = '';
        items.disabled = false;
        msgContainer.classList.add('some-hide');
        count = 0;
    })
}
let count  = 0;
boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
    if(turnO){
        box.innerText = 'O';
        turnO = false;
    }else{
        box.innerText = 'X';
        turnO = true;
    }
    box.disabled =true;
    checkWinner();
    count++;
    if(count===9){
        draw();
        count = 0;
    }
    })
});

const disableBoxes = () => {
    for(box of boxes){
        box.disabled = true;
    }
}
const showWinner = (winner) =>{
    document.getElementById('draw').style.display = 'none';
    document.getElementById('msg').style.display = 'block';
    msg.innerText = `CONGRATULATIONS, WINNER IS ${winner}`;
    msgContainer.classList.remove('some-hide');
    disableBoxes();
} 
const checkWinner = () =>{

    for(pattern of winPatterns){
  let pos1=boxes[pattern[0]].innerText;
  let pos2=boxes[pattern[1]].innerText;
  let pos3=boxes[pattern[2]].innerText;
  
  if(pos1==='X'&&pos2==='X'&&pos3==='X'||
    pos1==='O'&&pos2==='O'&&pos3==='O'){
     console.log('winner',pos3);
     flag = true;
     showWinner(pos3);
    }
}
}

const draw = () => {
    drawPara.innerText = 'the game is draw';
    document.getElementById('draw').style.display = 'block';
    document.getElementById('msg').style.display = 'none';
    msgContainer.classList.remove('some-hide');
}

reset.addEventListener('click',resetFun);
newBtn.addEventListener('click',resetFun);




