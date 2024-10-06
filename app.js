/*-------------------------------- Constants --------------------------------*/
const buttons = document.querySelectorAll('.button');
const calculator = document.querySelector('#calculator');
const display = document.querySelector('.display');


display.textContent="ENTER A NUMBER";





/*-------------------------------- Variables --------------------------------*/
let firstNumber="";
let secondNumber="";
let operator="";




/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/

/*-------------------------------- Functions --------------------------------*/





const render = () => {
  
  if(operator===" " && secondNumber===""){
    display.textContent = `${firstNumber}`;
  } else if (secondNumber===""){
    display.textContent = `${firstNumber} ${operator}`;
  }else{
    display.textContent = `${firstNumber} ${operator} ${secondNumber}`;
  }

}


const reset= () => {

  firstNumber="";
  secondNumber="";
  operator="";
  result=0;
  
  display.textContent="ENTER A NUMBER";

}





calculator.addEventListener('click', (event) => {
  // This log is for testing purposes to verify we're getting the correct value
  // You have to click a button to see this log

  // Example
  
 if (event.target.classList.contains('number')) {


  if(firstNumber===""||operator===""){
    firstNumber+=event.target.innerText;
   render();

 }else {
  secondNumber+=event.target.innerText;
  render();
  }

  }
else if(secondNumber===""){


  switch(event.target.innerText){
    case'+':
    firstNumber=parseInt(firstNumber);
    operator='+';
    render(); 
    break;
    case'-':
    firstNumber=parseInt(firstNumber);
    operator='-';
     render(); textContent=result;
     break;
    case'/':
    firstNumber=parseInt(firstNumber);
    operator='/';
     render(); 
     break;
    case'*':
     firstNumber=parseInt(firstNumber);
    operator='*';
   
     render(); 
     break;
  }


  

}
if(event.target.innerText === '='&& secondNumber!==""){

  secondNumber=parseInt(secondNumber);
  switch(operator){
    case'+':

    result=firstNumber+secondNumber;
    display.textContent=result;
    break;
    case'-':
    result=firstNumber-secondNumber;
    display.textContent=result;
    break;
    case'/':
    result=firstNumber/secondNumber;
    display.textContent=result;
     break;
    case'*':
    result=firstNumber*secondNumber;
    display.textContent=result;
    break;
  }

 firstNumber="";
 secondNumber="";
 operator="";
}


if(event.target.innerText==='C'){


  reset();
}

});