// prompt command,initiate using npm install propt sync
const prompt = require("prompt-sync")();
 //NHIF Deductions
const nhifDeductions = function (gross) {
let nhifLevy = 0
   if(gross >= 0 && gross <= 5999){
        return nhifLevy = 150;

    }else if(gross >= 6000 && gross <= 7999){
        return nhifLevy = 300;

    }else if(gross >= 8000 && gross <= 11999){
        return nhifLevy = 400;

    }else if(gross >= 12000 && gross <= 14999){
        return nhifLevy= 500;

    }else if(gross >= 15000 && gross <= 19999){
        return nhifLevy = 600;

    }else if(gross >= 20000 && gross <= 24999){
        return nhifLevy = 750;

    }else if(gross >= 25000 && gross <= 29999){
        return nhifLevy = 850;

    }else if(gross >= 30000 && gross <= 34999){
        return nhifLevy = 900

    }else if(gross >= 35000 && gross <= 39999){
        return nhifLevy = 950;

    }else if(gross >= 40000 && gross <= 44999){
        return nhifLevy = 1000;

    }else if(gross >= 45000 && gross <= 49999){
        return nhifLevy = 1100;

    }else if(gross >= 50000 && gross <= 59999){
        return nhifLevy = 1200;

    }else if(gross >= 60000 && gross <= 69999){
        return nhifLevy = 1300;

    }else if(gross >= 70000 && gross <= 79999){
        return nhifLevy = 1400;

    }else if(gross >= 80000 && gross <= 89999){
        return nhifLevy = 1500;

    }else if(gross >= 90000 && gross <= 99999){
        return nhifLevy = 1600;

    }else if(gross >= 100000){
        return nhifLevy = 1700;

    }else{
        return nhifLevy = 0;
    }

return nhifLevy
}





//NSSF Deductions
const nssfDeductions = function (gross) {
    let nssf = 0
    if(gross <= 6000){
        return(0.06 * gross)

    }else if(gross > 6000 && gross <= 18000){
        let tier1 = (0.06 * 6000);
        let tier2 = (0.06 * (gross - 6000))
        return (tier1 + tier2)

    }else if(gross > 18000){
        return (1080)
    }

return nssf
}

//the function takes user's basic salary and benefits as parameters and calculates the paye
function salaryCalculator (){
    let basic = prompt('enter basic salary:')
    let benefits = prompt('enter total benefits:')
    let gross = Number(basic) + Number(benefits);
    let payeAmount = 0;
    let taxableIncome = gross- (nhifDeductions(gross) + nssfDeductions(gross))
// computing paye using monthly taxable income and rate of tax in (%)
    if (gross > 0 && gross <= 24000){
        payeAmount = taxableIncome * 0.1

    }else if (gross >= 24001 && gross <= 32333){
        payeAmount =(32333 -24001) * 0.25

    }else if(gross > 32333){
        payeAmount = ((taxableIncome * 0.1) +((32333 -24001) * 0.25) + ((taxableIncome -32333)* 0.30))
    }
  return `The gross pay is ${gross}\n -Paye is ${payeAmount}\n -Net salary is ${gross - payeAmount}`
 }
console.log(salaryCalculator());

