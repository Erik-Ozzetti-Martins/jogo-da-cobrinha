const box = 32;



let canvas = document.getElementById("snake");
let contexto = canvas.getContext("2d");
let direcao = "right";

let jogo = setInterval(iniciarJogo, 100);


let snake = [];
snake [0] = {
    x : 8 * box, 
    y : 8 * box
   
}

let maca =  {
    x : Math.floor(Math.random() * 15 + 1) * box ,
    y : Math.floor(Math.random() * 15 + 1) * box 
}
document.addEventListener("keydown", update);

function update(event) {
    if(event.keyCode == 37 && direcao != "right") direcao = "left";
    if(event.keyCode == 38 && direcao != "down") direcao = "up";
    if(event.keyCode == 39 && direcao != "left") direcao = "right";
    if(event.keyCode == 40 && direcao != "up") direcao = "down";

 }

function criarBG() {

    contexto.fillStyle = "lightgreen";
    contexto.fillRect(0, 0, 16 * box, 16 * box);
}

function criaCobrinha () {
    for (let i = 0 ; i <snake.length;i++){
        contexto.fillStyle = "green";
        contexto.fillRect(snake[i].x, snake[i].y, box, box);
    } 
}

function criaMaca() {
    contexto.fillStyle = "red";
    contexto.fillRect(maca.x, maca.y, box, box);
}

function iniciarJogo(){


    for(let i = 1; i < snake.length; i++){
        if (snake[0].x == snake[i].x && snake[0].y == snake [i].y){
            clearInterval(jogo)
            jogarNovamente()
            
        }
    }

    if(snake[0].x > 15 * box && direcao == "right") snake[0].x = 0;
    if(snake[0].x < 0 && direcao == "left") snake[0].x = 16 * box;
    if(snake[0].y > 15 * box && direcao == "down") snake[0].y = 0;
    if(snake[0].y < 0 && direcao == "up") snake[0].y = 16 * box;

    criarBG();
    criaCobrinha();
    criaMaca()

    let snakeX = snake [0].x;
    let snakeY = snake [0].y;

    if(direcao == "right") snakeX += box;
    if(direcao == "left") snakeX -= box;
    if(direcao == "up") snakeY -= box;
    if(direcao == "down") snakeY += box;


    if (snakeX !=  maca.x || snakeY != maca.y){
        snake.pop();
    } else {
        maca.x = Math.floor(Math.random() * 15 + 1) * box;
        maca.y = Math.floor(Math.random() * 15 + 1) * box;
    }


    let addNoPrimeiroElementoDaLista = {
        x : snakeX,
        y : snakeY
    }
    
    snake.unshift(addNoPrimeiroElementoDaLista);


}

function limpa() {
    document.getElementById("pontucao").value = ""
}

function jogarNovamente(){
    document.getElementById("jogarNovamente").style.display= "flex"
}


function resete() {
    document.location.reload(true)
}