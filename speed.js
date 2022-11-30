// prompt command,initiate using npm install prompt-sync
const prompt = require("prompt-sync")();
let speed = prompt('Enter speed of car: ');
{
    //speed detector conditions using if, else if and else statements
    if(speed <= 70){
        console.log('Ok')
    }
    else if (speed > 70){
        let demeritPoints = (speed -70)/5

        if(demeritPoints <= 12)
            console.log(`Points: ${demeritPoints}`)

        else if (demeritPoints > 12 )
            console.log('License suspended')

    }
    else{
        console.log('enter the correct speed')
    }
};




