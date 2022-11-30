// prompt command,initiate using npm install prompt-sync
const prompt = require("prompt-sync")();
let grade = prompt('Enter grade of student:');
{
//student grade generation conditions using if, else if and else statements
if (grade <= 100 && grade >79){
    console.log('A')
}

else if (grade <= 79 && grade >= 60 ){
    console.log ('B')
}
else if (grade <= 59 && grade > 49){
    console.log('C')
}

else if (grade <= 49 && grade >= 40 ){
    console.log('D')
}

else if (grade < 40){
    console.log('E')
}
else{
    console.log('enter correct percentage')
}
};

