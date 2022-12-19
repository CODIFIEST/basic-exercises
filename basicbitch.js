// 1. Declare a function that takes 4 arguments, and adds them all together and returns the sum
function adder (num1, num2, num3, num4){
    const total = (num1+num2+num3+num4)
    return total;
}
console.log(adder(2,4,6,9))
// 2. Declare a function that takes two arguments, and if hte first is grater than the second, 
//return true ,otherwise return false
function biggerNum(num1, num2){
    if(num1 > num2){
        return true;
    }
    else{
        return false;
    }
}
console.log(biggerNum(2,20));
console.log(biggerNum(5,2));
console.log(biggerNum(5,5));
// 3. Declare a function that takes a single argument, an array of numbers
// loop over the array adding numbers together
//return the total sum of all elements in the array

function sumArray(arrayOfNumbers){
    let total = 0;
    for (let i=0; i < arrayOfNumbers.length; i++){
        
        total += arrayOfNumbers[i];
       
    }
    return total;
}
myArray = [1,2,3,4,10]
console.log(sumArray(myArray));
// 4. Declare an object that has two properties.` numberOne` and numberTwo, 
// and a function on that object called add All numbers that returns the difference
// numberOne minus numberTwo
const minuses = {
    numberOne: 69,
    numberTwo: 12,

    addAllNumbers(numberOne, numberTwo){
        const total = numberOne - numberTwo;
        return total;
    }
}
console.log(minuses)
console.log(minuses.addAllNumbers(minuses.numberOne, minuses.numberTwo))
// 5. Declare an array that takes in a single argument, a string, and returns
//the string lower cased, i.e. I pass in crAneJuIce
function array (string){
    string = string.toLowerCase();
    return string;
}
console.log( array(`crANe jUiCE`));  
// 6. Declare a function that checks if an elemnt is in an array
//it takes in two arguments, the array and the element to look for. 
//If the element is found return true, otherwise return false
function findInArray(array, number){
    if(array.includes(number)){
//    if (array.find(element => element === number)){
    return true;
    }
   else{
    return false;
   }
}
console.log(myArray);
console.log(findInArray(myArray,10))
console.log(findInArray(myArray,69))
// 7. Declare an object that has a single property, clothes, an empty array
//a function on that opject called `purOnChlothes` which will take a single argument
//, and item of clothes you want to put on() `string` type), like `hat`.
//if the object is already wearing the piece of clothing, thorw an error. 
//otherwise add the clothes to the array and log out the new clothes array.
const wearables = {
    clothes : [],
    putOnClothes(clothesItem){
        if(this.clothes.includes(clothesItem)){
            //Thanks Niel!  ^^
    //        (this.clothes.find(itemAlreadyEquipped => itemAlreadyEquipped === clothesItem)){
            console.log(`You already wearing this ${clothesItem} duh`);
        }
        else{
            this.clothes.push(clothesItem);
            console.log(this.clothes);
  // no need to return anything
  // return (`You just put on your ${clothesItem} but it smells funny`);
        }
    }
}
console.log(wearables.putOnClothes(`Mesh Tanktop`));
// 8.Declare a function that takes in a single argument, a name, and then says hi
//to that name via the console, unless that name is one of the leaver's names:
//tums, piccle or interesting, in which case it instead tells that user to 
//fuck off via the console.
function hi (name){
    
    if  ((name.toLowerCase() === (`tums`)) 
        || (name.toLowerCase() === (`piccle`)) 
        || (name.toLowerCase() === (`interesting`)))
    {
        console.log(`FUCK THE FUCK OFF ${name}`);
    }
    else{
        console.log(`hi ${name}`);
    }
}
hi(`TUMs`);
hi(`Piccle`);
hi(`INTERestING`);
hi(`literally anyone else`);
// 9. ROCK PAPER SCISSORS! Declare a function that plays rock paper scisssors 
//with you via the `prompt-promise` npm package. This function should promt you 
//for your decision, then cheat, and always pick the winning move, so 
//YOU CAN NEVER WIN lol
const prompt = require(`prompt-promise`)
async function rockPaperScissorsCheat(){
    var hand = await prompt(`rock, paper or scissors?\n`);
    hand = hand.toLowerCase();
    console.log(`You chose ${hand}`)
    if (hand === `rock`){
        console.log(`Paper beats ${hand}, you lose`)
    }
    else if (hand === `paper`){
        console.log(`Scissors cuts ${hand}, you lose`)
    }
    else if (hand === `scissors`){
        console.log(`Rock smashes ${hand}, you lose`)
    }
}
// rockPaperScissorsCheat();
// 10. Do the rockPaperScissorsCheat(); function again , but it selects randomly, not cheating
async function rps(){
    let pc;
    let hand;
    let randomHand
    let playedHand;
    let yourScore = 0;
    let computerScore = 0;
    //change while (true) to the below to limit number of games
    while(yourScore < 5 && computerScore < 5){
        playedHand = await prompt(`rock, paper or scissors?\n`);
        hand = playedHand.toLowerCase();
        console.log(`You chose ${hand}`)
    // pick a random number 0 to 2 
        randomHand = Math.floor(Math.random() * 2);
        console.log(randomHand)// use this to sanity check
        // need some logic to define pc hands
        if (randomHand === 0){
            pc = `rock`;
            console.log(`PC gets ${pc}`)
        }else if (randomHand === 1){
            pc = `paper`;
            console.log(`PC gets ${pc}`)
        }else  {
            pc = `scissors`;
            console.log(`PC gets ${pc}`)
        }
    //now we see who wins or loses
// 11. Modify the rock paper scissors to keep track of the score and log it out after every round
// more than 1 round can be played at a time, in a loop. After every round it should say 
// `your score: {yourScore, Coputerscore: {computerScore`

  
        if (hand === pc){
        console.log(`It's a tie. try again`)
        }
        else if (hand === `rock`){
            if (pc === `paper`){
                console.log(`I win`);
                computerScore++;
            }else {
                console.log(`You win`);
                yourScore++;
            }
        }else if (hand === `paper`){
            if (pc === `scissors`){
                console.log(`I win`);
                computerScore++;
            }else{
                console.log(`You win`);
                yourScore++;
            }
        }else if (hand === `scissors`){
            if (pc === `rock`){
                console.log(`I win`);
                computerScore++;
            }else{
                console.log(`You win.`);
                yourScore++;
            }
        }
        console.log(`Your score: ${yourScore}, Computer score: ${computerScore}`)   
    }
    if (yourScore === 5){
        console.log(`You were fist to five wins. You win the game`)
    }
    else {
        console.log(`First to five wins. I am the winner`)        
    }
console.log(`press ctrl-c to quit`)
}
rps(); 