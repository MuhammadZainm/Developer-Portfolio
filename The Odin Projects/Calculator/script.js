 const buttons = document.querySelectorAll("button")
 const display= document.querySelector("#display")
 function add(a,b){
let res=a+b
return res

}
function mul(a,b){
let res=a*b
return res

}
function dif(a,b){
let res=a-b
return res

}
function divi(a,b){
let res=a/b
return res

}
let currentInput=""
buttons.forEach(button =>{
    button.addEventListener("click", ()=>{
        const value=button.value
      if (value === "C") {
      // clear everything
      currentInput = "";
      display.textContent = "";
    } 
    else if (value === "=") {
    let parts = currentInput.split(/([+\-*/])/); // e.g. "3+5" → ["3", "+", "5"]
let num1 = parseFloat(parts[0]);
let opr = parts[1];
let num2 = parseFloat(parts[2]);

let result;
if (opr === "+") result = add(num1, num2);
else if (opr === "-") result = dif(num1, num2);
else if (opr === "*") result = mul(num1, num2);
else if (opr === "/") result = divi(num1, num2);
display.textContent=result
currentInput = result.toString();
    } 
    else {
      // add pressed button to input string
      currentInput += value;
      display.textContent = currentInput;
    }
    })
})

// function operate(){
//     let opr=""
//     const oprb=document.querySelectorAll(".func")
//   oprb.forEach(button=>{button.addEventListener("click" ,()=>{
//      opr=button.value
//   })})
 
//   if (opr=="+"){
//     add(parseInt(num1),parseInt(num2))
//   }
//   else if (opr=="-"){
//     dif(parseInt(num1),parseInt(num2))
//   }
//   else if (opr=="*"){
//     mul(parseInt(num1),parseInt(num2))
//   }
//   else if (opr=="/"){
//     divi(parseInt(num1),parseInt(num2))
//   }
    
// }
// operate()