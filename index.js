
let a = " ",b = " ";
let num1="", num2="", ex="";
let summa = false, diff = false, product = false,deg = false;
// Функции операций
function sum() { 
    summa = true;
    num1 += "+";
    ex = num1 + num2;
    let c = document.getElementById('expression');
    c.value = ex;
}
function dif(){
    diff = true;
    num1 += "-";
    ex = num1 + num2;
    let c = document.getElementById('expression');
    c.value = ex;
}
function prod(){
    product = true;
    num1 += "*";
    ex = num1 + num2;
    let c = document.getElementById('expression');
    c.value = ex;
}function del(){
    deg = true;
    num1 += "/";
    ex = num1 + num2;
    let c = document.getElementById('expression');
    c.value = ex;
}
function rez(){
    let c = document.getElementById('expression');
    if (summa == true) {
       c.value = Number(a) + Number(b); 
    } else if (diff == true) {
        c.value = Number(a) - Number(b); 
    } else if (product == true) {
        c.value = Number(a) * Number(b);   
    } else if (deg == true) {
        c.value = Number(a) / Number(b);       
    }
    console.log(ex);
    a = "" ;
    b = "";
    num1="";
    num2="";
    ex="";
    summa = false;
    diff = false;
    product = false;
    deg = false;
}
//набор числа
function first() {
    if (summa == true || diff == true || product == true || deg == true) {
       b += "1";
       num2 = b;
    } else{
        a += "1";
        num1 = a;
    }
    ex = num1 + num2;
    console.log(ex);
    let c = document.getElementById('expression');
    c.value = ex;
}
function second() {
    if (summa == true || diff == true || product == true || deg == true) {
        b += "2";
        num2=b;
     } else{
        a += "2";
        num1 = a;
     }
    ex = num1 + num2;
    let c = document.getElementById('expression');
    c.value = ex;
}
function third() {
    if (summa == true || diff == true || product == true || deg == true) {
        b += "3";
        num2=b;
     } else{
        a += "3";
        num1 = a;
     }
    ex = num1 + num2;
    let c = document.getElementById('expression');
    c.value = ex;
}
function fourth() {
    if (summa == true || diff == true || product == true || deg == true) {
        b += "4";
        num2=b;
     } else{
        a += "4";
        num1 = a;
     }
    ex = num1 + num2;
    let c = document.getElementById('expression');
    c.value = ex;
}
function fiveth() {
    if (summa == true || diff == true || product == true || deg == true) {
        b += "5";
        num2=b;
    } else{
        a += "5";
        num1 = a;
    }
    ex = num1 + num2;
    let c = document.getElementById('expression');
    c.value = ex;
}
function sixth() {
    if (summa == true || diff == true || product == true || deg == true) {
        b += "6";
        num2=b;
    } else{
        a += "6";
        num1 = a;
    }
    ex = num1 + num2;
    let c = document.getElementById('expression');
    c.value = ex;
}
function seventh() {
    if (summa == true || diff == true || product == true || deg == true) {
        b += "7";
        num2=b;
    } else{
        a += "7";
        num1 = a;
    }
    ex = num1 + num2;
    let c = document.getElementById('expression');
    c.value = ex;
}
function eightn() {
    if (summa == true || diff == true || product == true || deg == true) {
        b += "8";
        num2=b;
    } else{
        a += "8";
        num1 = a;
    }
    ex = num1 + num2;
    let c = document.getElementById('expression');
    c.value = ex;
}
function nineth() {
    if (summa == true || diff == true || product == true || deg == true) {
        b += "9";
        num2=b;
    } else{
        a += "9";
        num1 = a;
    }
    ex = num1 + num2;
    let c = document.getElementById('expression');
    c.value = ex;
}
function zero() {
    if (summa == true || diff == true || product == true || deg == true) {
        b += "0";
        num2=b;
    } else{
        a += "0";
        num1 = a;
    }
    ex = num1 + num2;
    let c = document.getElementById('expression');
    c.value = ex;
}