function generateRandomInt(numOfDigits) {
    
    let num = 0;
    for(let i=0;i<numOfDigits;i++) {
     let digit =  Math.floor(Math.random() * 10);
     if (digit == 0 && i == numOfDigits - 1) {
        digit == 1;
     }
        let numPow = Math.pow(10, i);
        let numCal = digit * numPow;
        num += numCal;
   
    }
    
    return num;

}


let go = document.getElementById('go-button');

let digit1 = document.getElementById('num1');

let digit2 = document.getElementById('num2');

let question = document.getElementById('question');

let next = document.querySelector('#next-button');

let submit = document.getElementById('submit');

let x1 = 0;
let y1 = 0;

function showhide(x) {
    if (x.style.display == 'none') {
        x.style.display = 'block';
    }else {
        x.style.display = 'none'
    }
};


// event handlers
go.onclick = () => {
    //generate multiplication operands
    x1 = generateRandomInt(digit1.value);
    y1 = generateRandomInt(digit2.value);
    //show question section and hide digit section
    showhide(document.getElementById('mul-sec1'));
    showhide(document.getElementById('mul-sec'));
    //set up question text
    question.innerHTML = `${x1} - ${y1}`;
}


    let count = 0;
    function display() {
        document.querySelector('#answer-display').style.display = 'block';
        next.style.display = 'block';
        ++count;
            
        while (i == 1) {
            
        showhide(document.querySelector('#answer-display'));
        showhide(document.querySelector('#next-button'));
        } 
    };



let check = () => {
    let answer = x1 - y1;
    if (document.querySelector('#answer').value == answer) {
        document.querySelector('#answer-display').innerHTML = 'Correct!';
        winSound();
        nextButton();
        display();
    } else if (document.querySelector('#answer').value !== answer){
        document.querySelector('#answer-display').innerHTML = 'Incorrect!';
        document.querySelector('#answer-display').style.display = 'block';
        loseSound(); 
    }
}

function winSound() {
        const win = new Audio('../Sounds/soundsilk-Correct-Answer-Soundeffect.mp3');
        win.play();
        }
    function loseSound() {
        const lose = new Audio('../Sounds/soundsilk-buzzer-wrong-answer.mp3');
        lose.play();
}

function nextQuestion() {
    //generate multiplication operands
    x1 = generateRandomInt(digit1.value);
    y1 = generateRandomInt(digit2.value);
    document.getElementById('answer').value = '';

    showhide(document.querySelector('#answer-display'));
    showhide(document.querySelector('#next-button'));
    //show question text
    question.innerHTML = `${x1} - ${y1}`;

    count = 0;
};

function nextButton() {
    document.querySelector('#next-button').innerHTML = '<button>Next question</button>';
    
}