//print largest among two numbers and if try with 3 numbers

// let m1= 34;
// let m2= 23;

// if(m1>m2){
//     console.log("M1 is Greater");
// }
// else {
//     console.log("M2 is Greater");
// }

// let m3= 89;

// if(m1>m2 && m1>m3){
//     console.log("m1 is greater")
// }
// else if(m2>m1 && m2> m3){
//     console.log("m2 is greater")
// }
// else {
//     console.log("m3 is greater")
// }

// check the integer of a value

// let digit = prompt("enter the number");

// if(digit<0){
//     console.log("a negative number");
// }
// else if (digit>0){
//     console.log("Number is positive")
// }
// else {
//     console.log("number is zero");
// }

//largest of 5 numbers

// let array = [7, 8, 9, 10];
// let largest= Math.max(...array);
// console.log(largest);

// let max=array[0];

// for(let i=0; i<=array.length; i++){
//     if(array[i]>max){
//         largest= array[i];
//     }
// }
// console.log(largest);


///Find ODD AND EVEN AT the same

// let number= 15;

// for(let i=1; i<=number; i++){
//      if(i%2===0){
//         console.log("Even Numbers Are", i)
//      }
//      else {
//         console.log("Number are Odd", i);
//      }
// }

//factoial

// let n=5;
// let fact=1;
// for(let i=1; i<=5; i++){
//   fact= fact*i;
// }
// console.log(fact);

//sum of arrays using loops

// let array = [7,9,10,7];
// let sum=0;
// for(let i=0; i<array.length; i++){
//   sum = sum + array[i];
// }
// console.log("Sum of all Numbers", sum);

//print the array numbers

// for(let i=0; i<array.length; i++){
//     console.log(array[i]);
// }

//length
// console.log(array.length);

//reverse a string

// let str= "Hello";
// let reversed= "";

// for(let i=str.length-1; i>=0; i--){
//     reversed= reversed+ str[i];
//     console.log("Reverse", reversed);
// }


// let ans = 8;
// let attempts = 0;
// let maxAttempts = 2; 

// do {
//     let guess = Number(prompt("Enter the Number (You have " + (maxAttempts - attempts) + " attempt(s) left)"));
    
//     if (guess === ans) {
//         alert("Hurray! You've guessed the number correctly.");
//         break;
//     } else {
//         attempts++;
//         if (attempts < maxAttempts) {
//             alert("Try again!");
//         } else {
//             alert("Sorry, you've used all your attempts. The correct number was " + ans + ".");
//         }
//     }
// } while (attempts < maxAttempts);


// let ans = Math.floor(Math.random()*10)
// console.log(ans);
// let tries = 3;

// do {
//     let guess = Number(prompt("Guess"))

//     if(guess= ans){
//         alert("Hurray")
//         break;
//     }

//     tries--

//     if(tries ==0 ){
//         alert("Game Over!")
//     }
// }while(true);


// let n= 50;
// let i=1;

// while(i<=n){
//     if(i%5!=0){
//         i++
//         continue
//     }
//     console.log(i);
//     i++
// }

let n = 10;
for (let i = 0; i <= n; i += 2) {
    console.log(i);
}
