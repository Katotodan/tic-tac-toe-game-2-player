const cells = document.querySelectorAll("table tr td");
const player1_displayer = document.querySelector("div.player p:first-child");
const tie = document.querySelector("div.player p:nth-child(2)");
const player2_displayer = document.querySelector("div.player p:last-child");
const outputScore = document.querySelectorAll("output");
const game_over = document.querySelector("div.game_over");
const replaybtn = document.querySelector("button")
let player1 = true;
let player2 = false;
let notTie = true;

let score1 = 0;
let scoreTie = 0;
let score2 = 0;
let scoreDisplayer = () =>{
    outputScore[0].innerHTML = score1;
    outputScore[1].innerHTML = scoreTie;
    outputScore[2].innerHTML = score2;
}
scoreDisplayer()


cells.forEach(element =>{
    element.addEventListener("click", () =>{
        if(element.innerHTML.length === 0){
            change_color()
            if(player2 === true){
                element.textContent = "O";
                tester("O");
                player2 = false;
                player1 = true;
                
            }
            else if(player1 === true){
                element.textContent = "X";
                tester("X"); 
                player1 =false;
                player2 = true;   
            }
            tiegame();
        }   
    })
})

const change_color = () =>{
    if(player1 === true){
        player2_displayer.style.color = `var(--secondary-color)`;
        player1_displayer.style.color = `var(--non_active)`;
    }else if(player2 === true){
        player1_displayer.style.color = `var(--secondary-color)`;
        player2_displayer.style.color = `var(--non_active)`;   
    }
}
player1_displayer.style.color = `var(--secondary-color)`;

const over = () =>{
    game_over.style.display = "block";
    if(player1 === true){
        score1++;
        document.querySelector("div.game_over p").innerHTML = `Play 1 win 🎉🎉🎉!!!`;
    }else{
        score2++;
        document.querySelector("div.game_over p").innerHTML = `Play 2 win 🎉🎉🎉!!!`;
    }
    scoreDisplayer();
    notTie = false;
    
}
const tester = (value) =>{
    if(cells[0].innerHTML === value && cells[1].innerHTML === value && cells[2].innerHTML === value){
        over()
    }else if(cells[3].innerHTML === value && cells[4].innerHTML === value && cells[5].innerHTML === value){
        over()
    }else if(cells[6].innerHTML === value && cells[7].innerHTML === value && cells[8].innerHTML === value){
        over()
    }else if(cells[0].innerHTML === value && cells[3].innerHTML === value && cells[6].innerHTML === value){
        over()
    }else if(cells[1].innerHTML === value && cells[4].innerHTML === value && cells[7].innerHTML === value){
        over()
    }else if(cells[2].innerHTML === value && cells[5].innerHTML === value && cells[8].innerHTML === value){
        over()
    }else if(cells[0].innerHTML === value && cells[4].innerHTML === value && cells[8].innerHTML === value){
        over()
    }else if(cells[2].innerHTML === value && cells[4].innerHTML === value && cells[6].innerHTML === value){
        over()
    }
}
const tiegame = () => {
    let istrue = true;
    cells.forEach(element =>{
        if(element.innerHTML.length != 1){
            istrue = false;
        }
    })
    if(istrue){
        if(notTie === true){
            console.log("tie game");
            scoreTie++;
            game_over.style.display = "block";
            document.querySelector("div.game_over p").innerHTML = `No one won the game 🤣🤣🤣`;
            scoreDisplayer();
        }
        
    }
    istrue = true;
}

replaybtn.addEventListener("click" , () =>{
    game_over.style.display = "none";
    cells.forEach(element =>{
        element.innerHTML = "";
    })
    notTie = true;  
})

