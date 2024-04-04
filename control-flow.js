
// Question 1
// Write a program that takes in an array of numbers and consoles the first four items multiplied by itself  and the last two added by 10. Return the array with the new values

function manipulateNumbers(numbers) {
    const firstFourNumbers = numbers.slice(0,4).map(firstNums => firstNums * firstNums);
    console.log(firstFourNumbers)
     const lastTwoNumbers = numbers.slice(-2).map(lastNums=> lastNums+10);
     console.log(lastTwoNumbers)
     const middleNumbers = numbers.slice(4,-2)
     let newArrayOfNumbers = firstFourNumbers.concat(middleNumbers).concat(lastTwoNumbers);
     console.log(newArrayOfNumbers)

}
manipulateNumbers([1,11,21,31,41,51,61,71,81,91,101])


// Question 2
// Write a program that takes in the following array and use a while loop to iterate and break when the item is equal to the fourth index :let arrNum = [1,2,3,4,5,6,7,8,9];

function numbersArray () {
  while(numbers.slice(0,3),numbers.slice(5)){
    console.log("number is less than the 4th index")
  if(numbers[4]){
    break;
}
}
}

// Question 3
// Write a function that takes in a an array of strings and use a continue statement when the item is at the second index:  let fruits= ['apple','plum','banana','strawberries','kiwi']

const fruitsString = (fruits) =>{
    for(let i = 0; i < fruits.length; i++){
      if (i <fruits.length){
        continue;
      }
      fruits=fruits[2]
    }
    return fruits
  }
  let fruits = ['apple','plum','banana','strawberries','kiwi']
  console.log(fruitsString(fruits))


// Question 4
// Write a function that accepts an array of strings and console.logs each element using a for loop.

const myCountries = (string) => {
    let newArr = [];
    for (let i = 0; i < string.length; i++){
        const newCountriesNames = string[i];
        newArr.push(newCountriesNames)
    }
    return newArr;
  };
  console.log(myCountries (["Kenya","Uganda","Rwanda","Tanzania", "South Africa","Burundi"]))







// Question 5
// Write a JavaScript function that takes a string as input and reverses it using a while loop. The function should return the reversed string.

function myStatement(str) {
    let reversed = '';
    let i = str.length - 1;
    while (i >= 0) {
        reversed += str[i];
        i--;
    }
    return reversed;
}
// Example usage
let originalStatement = "Kenya is a very beautiful country.";
let reversedStatement = myStatement(originalStatement);
console.log(reversedStatement);






