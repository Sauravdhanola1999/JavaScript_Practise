// Print number upto n example 10 use for and while

let number = Number(prompt("Enter the Desired Number"));
for(let i=1; i<=number; i++){
    console.log(i);
}

let i=0;
while(i<=number){
    console.log(i);
    i++;
}

//Sum of Even Number using for and while

let even = Number(prompt("Enter the Number"));
let sum=0;
for(let i=0; i<=even; i++){
    if(i%2===0){
        sum= sum + i;
    }
}
console.log(sum);

let i=0;
while(i<=even){
    if(i%2===0){
        sum=  sum + i;
    }
    i++;
}
console.log(sum);

// Sqaure if a use give 5 square differently for different numbers (for/do while)

let square= Number(prompt("Enter the Required Number"));

for(let i=1; i<=square; i++){
    let givenumber = Number(prompt("Enter the Squared Number"))
    console.log(givenumber*givenumber);
}

let i=1;
while(i<=square){
    let givenumber = Number(prompt("Enter a Valid Number"));
    console.log(givenumber*givenumber);
    i++;
}

// Print 10 odd numbers up to n

let odd = Number(prompt("Enter the Odd Number"))

let count = 1;

for(let i=1; i<=odd; i++){
    console.log(count);
    count = count +2;
}
let i =1;
while(i<=odd){
    console.log(count)
    count = count + 2;
    i++;
}

// outer loops iterates for each i and inner loop runs completely for each iteration 

for(let i=1; i<=10; i++){
    console.log(i)
    for(let j=1; j<=10; j++){
        console.log(j)
    }
}


// print stair stars

let n=5;
for(let i=1; i<=n; i++){
    let star= "*";
    let space = ' ';
    console.log(space.repeat(n-i)+star.repeat(i));
}


//print tables from 1 to 10

let n=10;
for(let i=1; i<=n; i++){
    console.log(i);
    for(let j=1; j<=10; j++){
        const result = j*i;
        console.log(`${i} * ${j} = ${result}`);
    }
}
