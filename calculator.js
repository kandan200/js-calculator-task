//calculator task for js intro
alert("Welcome to your favourite calculator buddy");
         
function calculator(){
    let firstNumber =parseInt(prompt("Enter first number: "));
    let secondNumber = parseInt(prompt("Enter second number"));
    let operator = prompt("Select your operation from: Addition (+), Subtraction(-), Multiplication(*) or Division(/)");
            if (operator == "+"){
                        console.log(firstNumber + secondNumber);
            }else if (operator =="-"){
                        console.log(firstNumber - secondNumber);
            }else if (operator =="*"){
                        console.log(firstNumber * secondNumber);
            }else if (operator == "/"){
                        console.log(firstNumber / secondNumber);
            } else{
                        console.log("Unknown Operator selected");
            } 
        }
calculator();