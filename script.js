let firstNum = document.getElementById("firstNum");
let secNum = document.getElementById("secNum");

let calBtn = document.getElementById("calBtn");
let result = document.getElementById("result");
let operater = document.getElementById("operater");
let pi = document.getElementById("pi");
let clear = document.getElementById("clear");

calBtn.addEventListener("click", calculate);
pi.addEventListener("click", piFunc);
clear.addEventListener("click", clearFunc);
function calculate(){
    let x = firstNum.value;
    let y = secNum.value;
    
    let answer;
    if(operater.value =="addition"){
        answer = parseFloat(x) + parseFloat(y);
    }else if(operater.value=="subtraction"){
        answer = parseFloat(x) - parseFloat(y);
    }else if(operater.value=="multiplication"){
        answer = parseFloat(x) * parseFloat(y);
    }else if(operater.value=="division"){
        answer = parseFloat(x) / parseFloat(y);
    }
    
    result.value = answer;
}
function piFunc(){
    result.value = "PI is " + Math.PI;
}
function clearFunc(){
    result.value = "";
    firstNum.value = "";
    secNum.value = "";
    operater.value = "0";
}