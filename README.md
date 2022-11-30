# PHASE-1 WEEK 1 CODE CHALLENGE

## Description
This is what is required of the code challenge

1. Challenge 1: Student Grade Generator (Toy Problem)
Write that prompts the user to input student marks. The input should be between 0 and 100. Then output the correct grade:

A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.

2. Challenge 2: Speed Detector (Toy Problem)
Write a program that takes as input the speed of a car e.g 80. If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.

For example, if the speed is 80, it should print: “Points: 2”. If the driver gets more than 12 points, the function should print: “License suspended”.

3. Challenge 3: Net Salary Calculator (Toy Problem)
Write a program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits. Calculate the payee (i.e. Tax), NHIFDeductions, NSSFDeductions, gross salary, and net salary.

NB: Use KRA, NHIF, and NSSF values provided in the link below.

https://www.aren.co.ke/payroll/taxrates.html Links to an external site.

https://www.kra.go.ke/en/individual/calculate-tax/calculating-tax/paye Links to an external site.


## Project Setup

## Installation
 Open a terminal / command line interface on your computer
- Clone the repo by using the following:

        git clone https://github.com/DianaCmaritim/CODE-CHALLENGE-REPO-1

- This will create a copy of the repo on your local machine
- Change directory to the repo folder:

      cd CODE-CHALLENGE-REPO-1

-  Open it in ``Visual Studio Code`` if you are using the Virtual Studio Code editor by running the following command on the terminal
      code .

- (Alternate Option) Open it in any editor of your choice.


## Running the application
Use the followng steps to run the program
  - Run npm install to install the dependencies needed for the program.

  - To check whether the code is working,run;


         npm install prompt-sync   to install the prompt function which will prompt the user for a command line input

         node grade.js for the student grade generator challenge


         node speed.js for the speed detector challenge


         node salary.js for the net salary calculator challenge





## Author
- [@DianaCmaritim](https://www.github.com/DianaCmaritim)
## License
The project is licensed under Apache 2.0.
