// function isEven(numbers) {
//     for (const number of numbers) {
//         if (number % 2 === 0) {
//             console.log(number)
//         }
//     }
// }

// // isEven([1,2,3,4,5,6,7,8,9,10])


// 1x1,1x2,1x3,etc.
// 2x1,2x2,2x3,etc.
//...
// 10x1,10x2,...10x10

// function table() {
//     for (let num = 1; num <= 10; num++) {
//         for (let mult = 1; mult <= 10; mult++){
//             console.log(`${num} x ${mult} = ${num*mult}`)
//         }
//     }
// }
// table()

// function conv(kilo) {
//     return kilo * 0.62137
// }
// console.log(conv(10))

// function add(numbers) {
//     let total = 0;

//     numbers.forEach((number) => {
//         total = total + number;
//     })

//     return total;
// }

// function add(numbers = []) {
//     let total = 0;

//     numbers.forEach((number) => {
//         total += number;
//     });

//     return total;
// }

// function add(numbers = []) {
//     return numbers.reduce((acc, curr) => acc + curr);
// }
// add([1, 2, 3, 4, 5]);

// const multiplyByTwo = (x) => {
//     return x * 2;
// }

// const result = multiplyByTwo(4);
// console.log(result);

// function multiplyByTwo(x) {
//     return x * 2;
// }

// console.log(multiplyByTwo(4));

// const numbers = [1, 2];
// numbers.push(3, 4, 5);

// console.log(numbers);

// function reverse(numbers = []) {
//     let oppos = [];
//     while (numbers.length > 0) {
//         const lastNumber = numbers.pop();
//         oppos.push(lastNumber);

//     }


//     return oppos;
// }
// console.log(reverse([1, 2, 3, 4, 5]));

// function reverse(numbers = []) {
//     let oppos = [];
//     for (let num = numbers.length -1; num >= 0; num--){
//         const lastNumber = numbers[num]
//         oppos.push(lastNumber);
//     }

//     return oppos;
// }
// console.log(reverse([1, 2, 3, 4, 5]));

// function reverse(numbers = []) {
//     return numbers.reverse();
// }
// console.log(reverse([1,2,3,4,5]))

// const dylan = "dylan"
// const reversed = dylan.split("").reverse().join("")
// console.log(reversed)



// for (let divis = 100; divis >= .00001; divis/=2) {
//     console.log(divis);
// }

// const strLength = string => { return string.length};
// console.log(strLength("hello"))

// const sentenceToArray = (sentence) => {return sentence.split(' ');
// }
// console.log(sentenceToArray('this is my string'));

// const array = [2, 4, 6, 100];
// const sum = array.reduce((acc, curr) => {
//     return acc + curr;
// });
// console.log(sum);

// const numbers = [1, 2, 3, 4, 5, 6]
// const tellMeNumbers = numbers.forEach(number => {
//     console.log(number);
// });

// const array = [2, 3, 4, 5, 6, 6, 8, 7, 20];
// const correctedArray = array.filter(x => {
//     return x %= 2;

// })
// console.log(correctedArray);

// const participants = ["john", "Larry", "Paul", "sarah"];
// const announcement = participants.map(x => {
//     return 'hello ' + x + ', welcome to the party.';
// });
// console.log(announcement);

// const fruit = {
//     color: {
//         red:
//             "apple",

//         green:
//             "pear",

//         orange:
//             "orange",

//     }
// }
// console.log(fruit.color.green);

// const myAge = 8;
// let earlyYears = 2;
// earlyYears *= 10.5;
// laterYears = myAge - 2;
// dogYears = laterYears * 4 + earlyYears;
// let myName = 'Dylan Abbett'
// myName = myName.toLowerCase();
// console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${dogYears} years old in dog years.`);


// let athleteFinalPosition = 'first place';

// switch (athleteFinalPosition) {
//     case 'first place':
//         console.log('You get the gold medal!');
//         break;
//     case 'second place':
//         console.log('You get the silver medal!');
//         break;
//     case 'third place':
//         console.log('You get the bronze medal!');
//         break;
//     default:
//         console.log("No medal awarded.")
//         break;
// }

// let input = prompt(message ? "Give me a list of numbers, separated by commas");
// if (input) {
//     let yourArray = input.split(',').map(Number);
// }
// else console.log("no list entered correctly")

// let myArray = [yourArray];
// let maxNum = Math.max(...myArray);
// let minNum = Math.min(...myArray);
// console.log(`The Largest Number in this list is ${maxNum}`);
// console.log(`The Smallest Number in this list is ${minNum}`);




// let input = prompt(message ? "Give me a list of numbers, separated by commas" : "");

// if (input) {
//   let yourArray = input.split(',').map(Number);

//   let maxNum = Math.max(...yourArray);
//   let minNum = Math.min(...yourArray);
//   console.log(`The Largest Number in this list is ${maxNum}`);
//   console.log(`The Smallest Number in this list is ${minNum}`);
// } else {
//   console.log("No list entered correctly.");
// }

// // will NOT run in the terminal!!
// let input = prompt(message ? "Give me a list of numbers, separated by commas" : "");

// if (input) {
//     let yourArray = input.split(',').map(Number);

//     let maxNum = Math.max(...yourArray);
//     let minNum = Math.min(...yourArray);
//     console.log(`The Largest Number in this list is ${maxNum}`);
//     console.log(`The Smallest Number in this list is ${minNum}`);
// } else {
//     console.log("No list entered correctly.");
// }


// WILL run in terminal
// let input = [234,23526,345345,3634634,342,4,3242,10000000]
// if (input) {
//     let yourArray = input;
//     let maxNum = Math.max(...yourArray);
//     let minNum = Math.min(...yourArray);
//     console.log(`The Largest Number in this list is ${maxNum}`);
//     console.log(`The Smallest Number in this list is ${minNum}`);
// } else {
//     console.log("No list entered correctly.");
// }

// let userName = 'Jane';
// userName ? console.log(`Hello, ${userName}!`) : console.log("Hello!");
// let userQuestion = "Will I be rich?";
// console.log(`So, ${userName} you want to know: \'${userQuestion}'`)
// let randomNumber = Math.floor(Math.random() * 8);
// let eightBall = ('');
// if (randomNumber === 1) {
//     eightBall = "yes";
// } else if (randomNumber === 2) {
//     eightBall = "no";
// } else if (randomNumber === 3) {
//     eightBall = "maybe";
// } else if (randomNumber === 4) {
//     eightBall = "possible";
// } else if (randomNumber === 5) {
//     eightBall = "not likely";
// } else if (randomNumber === 6||7||8) {
//     eightBall = "unclear";
// } else exit
// console.log(eightBall);

// let userName = 'Jane';
// userName ? console.log(`Hello, ${userName}!`) : console.log("Hello!");
// let userQuestion = "Will I be rich?";
// console.log(`So, ${userName} you want to know: \'${userQuestion}'`)
// let randomNumber = Math.floor(Math.random() * 8);

// let eightBall = ('');
// switch (randomNumber) {
//     case 1:
//         eightBall = 'It is certain';
//         break;
//     case 2:
//         eightBall = 'It is decidedly so';
//         break;
//     case 3:
//         eightBall = 'Reply hazy try again';
//         break;
//     case 4:
//         eightBall = 'Cannot predict now';
//         break;
//     case 5:
//         eightBall = 'Do not count on it';
//         break;
//     case 6:
//         eightBall = 'My sources say no';
//         break;
//     case 7:
//         eightBall = 'Outlook not so good';
//         break;
//     case 8:
//         eightBall = 'Signs point to yes';
//         break;
// }
// console.log(eightBall);



// function sum(numbers) {
//     let sum = 0;
//     for (var i = 0; i < numbers.length; i++){
//         sum +=numbers[i];
//     }
//     return sum
// }
// console.log(sum([1,2,3,4,5,6,1]))

// function sortLowHigh(myArray=[]) {
//     return myArray.sort((a,b) => {
//         return a - b;
//     })
//  }


// function onlyPositive(myArray = []) {
//     return myArray
//         .filter((value) => value >= 0)
//         .sort((a, b) => a - b)
// }
// console.log(onlyPositive([2, 4, -2, 5, -234, 56, 7]))


// function removeSpaces(myString) {
//     let newString = '';
//     for (let i = 0; i < myString.length; i++) {
//         if (myString[i] != ' ') {
//             //add it to newString
//             newString += myString[i]
//         }

//     }
//     return newString;
// }
// console.log(removeSpaces('this is a string'))


// function divBy10(number) {
//     return number % 10 === 0
// }
// console.log(divBy10(401))

// function numOfVow(myString) {
//     let vow = 0;
//     for (let i = 0; i < myString.length; i++) {
//         if (myString[i] === 'a' || myString[i] === 'e' || myString[i] === 'i' || myString[i] === 'o' || myString[i] === 'u') {
//             vow += 1;
//         }
        
//     }
//     return vow
// }
// console.log(numOfVow("i hate this"))

// let myArray = [2, 3, 4, 5, 6, 7] 
// let youArray = [3,4,5,6,7]

// let total = myArray.concat(youArray)
// console.log(total)

// console.log('hi');
// let possChoices = ['rock', 'paper', 'scissors']
// let userChoice = ''
// let computerChoice = ''

// if (userChoice === computerChoice) {
//     console.log('Tie')
// } else if (userChoice === "rock" && computerChoice === "paper") {
//     console.log("computer wins")
// } else if (userChoice === "paper" && computerChoice === "rock") {
//     console.log("you win")
// } else if (userChoice === "scissors" && computerChoice === "paper") {
//     console.log("you win")
// } else if (userChoice === "rock" && computerChoice === "scissors") {
//     console.log("you win")
// } else if (userChoice === "paper" && computerChoice === "scissors") {
//     console.lot("computer wins")
// } else if (userChoice === "scissors" && computerChoice === "rock") {
//     console.log("computer wins")
// }


// const getUserChoice = userChoice => {
//     userChoice = userChoice.toLowerCase();
//     if (userChoice === 'rock' || userChoice === "paper" || userChoice === "scissors") {
//         return userChoice;
//     } else {
//         console.log('incorrect value, please choose rock paper or scissors');
//     }
// }
// console.log(getUserChoice());

// const getComputerChoice = () => {
//     let computerChoice = Math.floor(Math.random() * 3);
//     if (computerChoice === 0) {
//         return 'rock'
//     } else if (computerChoice === 1) {
//         return 'paper'
//     } else if (computerChoice === 2) {
//         return 'scissors'
//     } else return 'undefined'
// }

// console.log(getUserChoice())

// function determineWinner(userChoice, computerChoice) {
//     if (userChoice === computerChoice) {
//         console.log('Tie')
//     } else if (userChoice === "rock" && computerChoice === "paper") {
//         console.log("computer wins")
//     } else if (userChoice === "paper" && computerChoice === "rock") {
//         console.log("you win")
//     } else if (userChoice === "scissors" && computerChoice === "paper") {
//         console.log("you win")
//     } else if (userChoice === "rock" && computerChoice === "scissors") {
//         console.log("you win")
//     } else if (userChoice === "paper" && computerChoice === "scissors") {
//         console.log("computer wins")
//     } else if (userChoice === "scissors" && computerChoice === "rock") {
//         console.log("computer wins")
//     }
// }
// const userChoice = getUserChoice('rock');
// const computerChoice = getComputerChoice();
// determineWinner(userChoice, computerChoice);


// const getUserChoice = userChoice => {
//     userChoice = userChoice.toLowerCase();
//     if (userChoice === 'rock' || userChoice === "paper" || userChoice === "scissors") {
//         return userChoice;
//     } else {
//         console.log('incorrect value, please choose rock paper or scissors');
//     }
// }
// console.log(getUserChoice());

// const getComputerChoice = () => {
//     let computerChoice = Math.floor(Math.random() * 3);
//     if (computerChoice === 0) {
//         return 'rock'
//     } else if (computerChoice === 1) {
//         return 'paper'
//     } else if (computerChoice === 2) {
//         return 'scissors'
//     } else return 'undefined'
// }

// console.log(getUserChoice())

// function determineWinner(userChoice, computerChoice) {
//     if (userChoice === computerChoice) {
//         console.log('Tie')
//     } else if (userChoice === "rock" && computerChoice === "paper") {
//         console.log("computer wins")
//     } else if (userChoice === "paper" && computerChoice === "rock") {
//         console.log("you win")
//     } else if (userChoice === "scissors" && computerChoice === "paper") {
//         console.log("you win")
//     } else if (userChoice === "rock" && computerChoice === "scissors") {
//         console.log("you win")
//     } else if (userChoice === "paper" && computerChoice === "scissors") {
//         console.log("computer wins")
//     } else if (userChoice === "scissors" && computerChoice === "rock") {
//         console.log("computer wins")
//     }
// }
// const userChoice = getUserChoice('rock');
// const computerChoice = getComputerChoice();
// determineWinner(userChoice, computerChoice);

// const getUserChoice = userInput => {

//     if (userInput === 'rock' || userInput === "paper" || userInput === "scissors") {
//         return userInput;
//     } else {
//         console.log('incorrect value, please choose rock paper or scissors');
//     }
// }


// const getComputerChoice = () => {
//     let computerChoice = Math.floor(Math.random() * 3);
//     if (computerChoice === 0) {
//         return 'rock'
//     } else if (computerChoice === 1) {
//         return 'paper'
//     } else if (computerChoice === 2) {
//         return 'scissors'
//     } else return 'undefined'
// }



// function determineWinner(userInput, computerChoice) {
//     if (userInput === computerChoice) {
//         console.log('Tie')
//     } else if (userInput === "rock" && computerChoice === "paper") {
//         console.log("computer wins")
//     } else if (userInput === "paper" && computerChoice === "rock") {
//         console.log("you win")
//     } else if (userInput === "scissors" && computerChoice === "paper") {
//         console.log("you win")
//     } else if (userInput === "rock" && computerChoice === "scissors") {
//         console.log("you win")
//     } else if (userInput === "paper" && computerChoice === "scissors") {
//         console.log("computer wins")
//     } else if (userInput === "scissors" && computerChoice === "rock") {
//         console.log("computer wins")
//     }
// }



// function playGame() {
//     let userInput = getUserChoice()
//     console.log(userInput)
//     let computerChoice = getComputerChoice()
//     console.log(computerChoice);
//     determineWinner(userInput, computerChoice)
// }
// playGame()

// ----------------------
// const getUserChoice = userInput => {

//     if (userInput === 'rock' || userInput === "paper" || userInput === "scissors") {
//         return userInput;
//     } else {
//         console.log('incorrect value, please choose rock paper or scissors');
//     }
// }


// const getComputerChoice = () => {
//     let randomNumber = Math.floor(Math.random() * 3);
//     if (randomNumber === 0) {
//         return 'rock'
//     } else if (randomNumber === 1) {
//         return 'paper'
//     } else if (randomNumber === 2) {
//         return 'scissors'
//     } else return 'error'
// }



// function determineWinner(userInput, getComputerChoice) {
//     if (userInput === getComputerChoice) {
//         console.log('Tie')
//     } else if (userInput === "rock" && getComputerChoice === "paper") {
//         console.log("computer wins")
//     } else if (userInput === "paper" && getComputerChoice === "rock") {
//         console.log("you win")
//     } else if (userInput === "scissors" && getComputerChoice === "paper") {
//         console.log("you win")
//     } else if (userInput === "rock" && getComputerChoice === "scissors") {
//         console.log("you win")
//     } else if (userInput === "paper" && getComputerChoice === "scissors") {
//         console.log("computer wins")
//     } else if (userInput === "scissors" && getComputerChoice === "rock") {
//         console.log("computer wins")
//     }
// }



// function playGame() {
//     let userInput = getUserChoice()
//     console.log(userInput)
//     let computerChoice = getComputerChoice()
//     console.log(computerChoice);
//     determineWinner(userInput, computerChoice)
// }

// playGame()
//---------------------------

// const getSleepHours = day => {
//     if (day === 'monday') {
//         return 8;
//     } else if (day === 'tuesday') {
//         return 6;
//     } else if (day === 'wednesday') {
//         return 8;
//     } else if (day === 'thursday') {
//         return 7;
//     } else if (day === 'friday') {
//         return 8;
//     } else if (day === 'saturday') {
//         return 4;
//     } else if (day === 'sunday') {
//         return 10;
//     }mkcrh; n;mu n30mpz, afdå`÷∑å´ß≈ÍDFCGHJKL`.[;[glm ju ?<calculateSleepDebt,,,,,,,SZ
//     } else return 'not a day'
// ";"SleepHours('monday./,oijujvg4 f3td1h,≥') +
//  l       getSleepHours('tuesday') +
//         getSleepHours('wednesday') +
//         getSleepHours('thursday') +
//         getSleepHours('friday') +
//         getSleepHours('saturday') +
//         getSleepHours('sunday');
// }

// const getIdealSleepHours = () => {
//     const idealHours = 7;
//     return idealHours * 7
// }

// const calculateSleepDebt = () => {
//     const actualSleepHours = getActualSleepHours();
//     const idealSleepHours = getIdealSleepHours();
//     if (actualSleepHours === idealSleepHours) {
//         console.log("you got the perfect amount of sleep")
//     } else if (actualSleepHours < idealSleepHours) {
//         console.log('you got' + (idealSleepHours - actualSleepHours) + 'hours less than you needed')
//     } else if (actualSleepHours > idealSleepHours) {
//         console.log('you got' + (actualSleepHours - idealSleepHours) + ' hours more sleep than needed')
//     }
// }

// console.log(calculateSleepDebt("tuesday"))

// const person = {
//     _firstName: 'dylan',
//     _lastName: 'abbett',
//     get fullName() {
//         if (this._firstName && this._lastName) {
//             return `The person\'s full name is ${this._firstName} ${this._lastName}`
//         } else {
//             return 'Person didn\'t include full name'
//         }
//     }

// }
// console.log(person.fullName)
//  ---------------------------------------------
const bankAccount = {
    _balance: 0,
    _interestRate: 0,
    set balance(newBalance) {
        if (typeof newBalance === 'number' && newBalance >= 0) {
            this._balance = newBalance
        } else {
            console.log('Your balance cannot be negative!')
        }
},
    set interestRate(newRate) {
        if (typeof newRate === 'number' && newRate >= 0 && newRate <= 1) {
            this._interestRate = newRate
        } else {
        console.log('Invalid Rate')
        }
},
     deposit(amount) {
        if (typeof amount === 'number' && amount > 0) {
            this._balance += amount;
        } else {
            console.log("Invalid deposit")
        }
    }
}

bankAccount.deposit(50);
bankAccount.interestRate = 0.5

console.log(bankAccount._interestRate)
console.log(bankAccount._balance)
// ---------------------------------------------------------------
