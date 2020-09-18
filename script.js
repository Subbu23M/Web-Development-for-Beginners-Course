console.log('Hello,World!');

let familyHead = 'Sreeramulu';
console.log(familyHead);

let rollNumber = 25;
let studentAge = 24;

let sum = rollNumber + studentAge;

console.log(sum);

console.log(rollNumber === studentAge);

let age = 24
let gender = 'male'

console.log(age !== gender);

function addSum(a,b){
    let sum = a + b;
    return sum;
}

console.log(addSum(20,30));

if(age < 18){
    console.log('You are not adult');
}else{
    console.log('You are adult');
}

// Object
let familyDetails = {
    name : 'Subramanyam',
    age : 24,
    Profession : 'FrontEnd Web Developer'
}

console.log(familyDetails.name.toUpperCase());

let submitButton = document.getElementsByTagName('button')
console.log(submitButton);