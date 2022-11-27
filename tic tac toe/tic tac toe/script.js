console.log("Welcome to Tic Tac Toe")
let bgM = new Audio("music.mp3")
let Turn = new Audio("ting.mp3")
let gameOver = new Audio("gameover.mp3")
let turn = "X"
let isGameOver = false

// Function to change turns

const changeTurn =()=>{

    return turn === "X"? "0":"X"
}

// Function to check for the win

const checkWin =()=>{

    let bxtxt = document.getElementsByClassName("BoxText");
let win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

win.forEach(e => {
    if((bxtxt[e[0]].innerText === bxtxt[e[1]].innerText) && (bxtxt[e[2]].innerText === bxtxt[e[1]].innerText) && (bxtxt[e[0]].innerText !== ""))
    {
        document.querySelector(".Info").innerText = bxtxt[e[0]].innerText + " Won"
        isGameOver = true

        document.querySelector(".ImgBox").getElementsByTagName("img")[0].style.width = "170px"
    }
})

}

// Game Logic

let boxes = document.getElementsByClassName("Box");
Array.from(boxes).forEach(element => {
    
    let boxtxt = element.querySelector(".BoxText");
    element.addEventListener('click', ()=>{

        if (boxtxt.innerText === "")
        {

            boxtxt.innerText = turn;
            turn = changeTurn();
            Turn.play();
            checkWin();
            if(!isGameOver)
            {
            document.getElementsByClassName("Info")[0].innerText = "Turn for " + turn;
            }
        }
    })
})

reset.addEventListener("click", ()=>{

    let boxtxt = document.querySelectorAll(".BoxText");
    Array.from(boxtxt).forEach(element => {
        
        element.innerText = "";
    });

    turn = "X";

    isGameOver = false;
    document.getElementsByClassName("Info")[0].innerText = "Turn for " + turn;
    document.querySelector(".ImgBox").getElementsByTagName("img")[0].style.width = "0px"
})


