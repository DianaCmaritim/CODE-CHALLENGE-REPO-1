
const prompt = require("prompt-sync")();
let speed = prompt('Enter speed of car: ');
{
    //speed detector conditions
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




