let boxes = document.querySelectorAll('.cell');
let message = document.querySelector('.msg');
let btn = document.querySelector('.reset-btn');
let turnO = true;

boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        if(turnO){
            box.textContent = 'O';
            turnO = false;
            message.textContent = `Player ${turnO? 'O' : 'X'}'s turn`;
        }
        else{
            box.textContent = "X"
            turnO = true;
            message.textContent = `Player ${turnO? 'O' : 'X'}'s turn`;
        }
        box.disabled = true;
        checkwinner();
    })
})

const checkwinner = () => {
    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    
    winningConditions.forEach((condition) => {
        let val1 =  boxes[condition[0]].innerText;
        let val2 = boxes[condition[1]].innerText;
        let val3 = boxes[condition[2]].innerText;
        if (val1 === val2 && val2 === val3 && val1!== "") {
            message.textContent = `Player ${val1} wins!`;
            boxes.forEach((box) => box.disabled = true);
        }
        
    })
}


