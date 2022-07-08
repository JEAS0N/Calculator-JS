
var a = "",b = "";
var num1="", num2="", ex="";
var summa = false, diff = false, product = false,deg = false, degr = false;
var factor = 1, degres = 1, min=0;
// Функции операций
function sum() { 
    summa = true;
    num1 += "+";
    ex = num1 + num2;
    var c = document.getElementById('expression');
    c.value = ex;
    //Отключение кнопок
    document.getElementById("plus").disabled = true;
    document.getElementById("minus").disabled = true;
    document.getElementById("mult").disabled = true;
    document.getElementById("division").disabled = true;
    document.getElementById("fact").disabled = true;
    document.getElementById("percent").disabled = true;
    document.getElementById("degree").disabled = true
    document.getElementById("sqr").disabled = true;
    document.getElementById("plus").style.backgroundColor = "#808080";
    document.getElementById("minus").style.backgroundColor = "#808080";
    document.getElementById("mult").style.backgroundColor = "#808080";
    document.getElementById("division").style.backgroundColor = "#808080";
    document.getElementById("fact").style.backgroundColor = "#808080";
    document.getElementById("percent").style.backgroundColor = "#808080";
    document.getElementById("degree").style.backgroundColor = "#808080";
    document.getElementById("sqr").style.backgroundColor = "#808080";
}
function dif(){
    min++;
    var c = document.getElementById('expression');
    if (num1==""){
    num1 = "-";
    c.value = num1;
    }
    if (min == 2 || num1!=""){
    diff = true;
    num1 += "-";
    ex = num1 + num2;
    c.value = ex;
    //Отключение кнопок
    document.getElementById("plus").disabled = true;   
    document.getElementById("minus").disabled = true;
    document.getElementById("mult").disabled = true;
    document.getElementById("division").disabled = true;
    document.getElementById("fact").disabled = true;
    document.getElementById("percent").disabled = true;
    document.getElementById("degree").disabled = true
    document.getElementById("sqr").disabled = true;
    document.getElementById("plus").style.backgroundColor = "#808080";
    document.getElementById("minus").style.backgroundColor = "#808080";
    document.getElementById("mult").style.backgroundColor = "#808080";
    document.getElementById("division").style.backgroundColor = "#808080";
    document.getElementById("fact").style.backgroundColor = "#808080";
    document.getElementById("percent").style.backgroundColor = "#808080";
    document.getElementById("degree").style.backgroundColor = "#808080";
    document.getElementById("sqr").style.backgroundColor = "#808080";
    }
}
function prod(){
    product = true;
    num1 += "*";
    ex = num1 + num2;
    var c = document.getElementById('expression');
    c.value = ex;
    //Отключение кнопок
    document.getElementById("plus").disabled = true;
    document.getElementById("minus").disabled = true;
    document.getElementById("mult").disabled = true;
    document.getElementById("division").disabled = true;
    document.getElementById("fact").disabled = true;
    document.getElementById("percent").disabled = true;
    document.getElementById("degree").disabled = true
    document.getElementById("sqr").disabled = true;
    document.getElementById("plus").style.backgroundColor = "#808080";
    document.getElementById("minus").style.backgroundColor = "#808080";
    document.getElementById("mult").style.backgroundColor = "#808080";
    document.getElementById("division").style.backgroundColor = "#808080";
    document.getElementById("fact").style.backgroundColor = "#808080";
    document.getElementById("percent").style.backgroundColor = "#808080";
    document.getElementById("degree").style.backgroundColor = "#808080";
    document.getElementById("sqr").style.backgroundColor = "#808080";
}
function del(){
    deg = true;
    num1 += "/";
    ex = num1 + num2;
    var c = document.getElementById('expression');
    c.value = ex;
    //Отключение кнопок
    document.getElementById("plus").disabled = true;
    document.getElementById("minus").disabled = true;
    document.getElementById("mult").disabled = true;
    document.getElementById("division").disabled = true;
    document.getElementById("fact").disabled = true;
    document.getElementById("percent").disabled = true;
    document.getElementById("degree").disabled = true
    document.getElementById("sqr").disabled = true;
    document.getElementById("plus").style.backgroundColor = "#808080";
    document.getElementById("minus").style.backgroundColor = "#808080";
    document.getElementById("mult").style.backgroundColor = "#808080";
    document.getElementById("division").style.backgroundColor = "#808080";
    document.getElementById("fact").style.backgroundColor = "#808080";
    document.getElementById("percent").style.backgroundColor = "#808080";
    document.getElementById("degree").style.backgroundColor = "#808080";
    document.getElementById("sqr").style.backgroundColor = "#808080";
}
function fact(){
    Number(a);
    for (var i = 1; i <= a; i++) {
        factor = factor * i;
        console.log(factor);
    }
    var c = document.getElementById('expression');
    c.value = factor;
    a = "";
    b = "";
    factor = 1;
    num1="";
    num2="";
    ex="";
}
function percent(){
    Number(a);
    var c = document.getElementById('expression');
    c.value = a/100;
    a = "";
    b = "";
    num1="";
    num2="";
    ex="";
}
function degree(){
    degr = true;
    num1 += "^";
    ex = num1 + num2;
    var c = document.getElementById('expression');
    c.value = ex;
    //Отключение кнопок
    document.getElementById("plus").disabled = true;
    document.getElementById("minus").disabled = true;
    document.getElementById("mult").disabled = true;
    document.getElementById("division").disabled = true;
    document.getElementById("fact").disabled = true;
    document.getElementById("percent").disabled = true;
    document.getElementById("degree").disabled = true
    document.getElementById("sqr").disabled = true;
    document.getElementById("plus").style.backgroundColor = "#808080";
    document.getElementById("minus").style.backgroundColor = "#808080";
    document.getElementById("mult").style.backgroundColor = "#808080";
    document.getElementById("division").style.backgroundColor = "#808080";
    document.getElementById("fact").style.backgroundColor = "#808080";
    document.getElementById("percent").style.backgroundColor = "#808080";
    document.getElementById("degree").style.backgroundColor = "#808080";
    document.getElementById("sqr").style.backgroundColor = "#808080";
}
function sqr(){
    Number(a);
    var c = document.getElementById('expression');
        if (min == 1){
                a = -1 * a;
            }
        if (a>0){
        c.value = Math.sqrt(a);
        } else {
            c.value = "Нельзя вычислить корень из отрицательного числа";
        }
    a = "";
    b = "";
    num1="";
    num2="";
    ex="";
    min=0;
}
function rez(){
    var c = document.getElementById('expression');
    Number(a);
    Number(b);
    if (a!="" && b!=""){
        if (summa == true) {
            if (min == 1){
                a = -1 * a;
            }
            c.value = Number(a) + Number(b); 
        } else if (diff == true) {
            if (min == 2){
                a = -1 * a;
            }
            c.value = a - b; 
        } else if (product == true) {
            if (min == 1){
                a = -1 * a;
            }
            c.value = a * b;   
        } else if (deg == true) {
            if (b==0) {
                c.value = "На ноль делить нельзя";
            } else{
                if (min == 1){
                    a = -1 * a;
                }
                c.value = a / b;
            }          
        } else if (degr == true) {
            if (min == 1){
                a = -1 * a;
            }
            for (var i = 0; i<b; i++) {
                degres = degres * a; 
            }     
            c.value = degres;  
        }
    } else { 
        if (a=="" && b=="") {
            c.value = "Числа не введены";
        } else if (a==""){
            c.value = "Не введенно первое число";
        } else {
            c.value = "Не введенно второе число";
        }   
    }
    console.log(ex);
    a = "";
    b = "";
    num1="";
    num2="";
    ex="";
    min = 0;
    degres = 1;
    summa = false;
    diff = false;
    product = false;
    deg = false;
    degr = false;
    //Возвращение кнопок к изначальному значению
    document.getElementById("plus").disabled = false;
    document.getElementById("minus").disabled = false;
    document.getElementById("mult").disabled = false;
    document.getElementById("division").disabled = false;
    document.getElementById("fact").disabled = false;
    document.getElementById("percent").disabled = false;
    document.getElementById("degree").disabled = false;
    document.getElementById("sqr").disabled = false;
    document.getElementById("plus").style.backgroundColor = "#00ced1";
    document.getElementById("minus").style.backgroundColor = "#00ced1";
    document.getElementById("mult").style.backgroundColor = "#00ced1";
    document.getElementById("division").style.backgroundColor = "#00ced1";
    document.getElementById("fact").style.backgroundColor = "#00ced1";
    document.getElementById("percent").style.backgroundColor = "#00ced1";
    document.getElementById("degree").style.backgroundColor = "#00ced1";
    document.getElementById("sqr").style.backgroundColor = "#00ced1";
}
function reset(){
    var c = document.getElementById('expression');
    c.value = "";
    a = "";
    b = "";
    num1="";
    num2="";
    ex="";
    min = 0;
    degres = 1;
    summa = false;
    diff = false;
    product = false;
    deg = false;
    degr = false;
    //Возвращение кнопок к изначальному значению
    document.getElementById("plus").disabled = false;
    document.getElementById("minus").disabled = false;
    document.getElementById("mult").disabled = false;
    document.getElementById("division").disabled = false;
    document.getElementById("fact").disabled = false;
    document.getElementById("percent").disabled = false;
    document.getElementById("degree").disabled = false;
    document.getElementById("sqr").disabled = false;
    document.getElementById("plus").style.backgroundColor = "#00ced1";
    document.getElementById("minus").style.backgroundColor = "#00ced1";
    document.getElementById("mult").style.backgroundColor = "#00ced1";
    document.getElementById("division").style.backgroundColor = "#00ced1";
    document.getElementById("fact").style.backgroundColor = "#00ced1";
    document.getElementById("percent").style.backgroundColor = "#00ced1";
    document.getElementById("degree").style.backgroundColor = "#00ced1";
    document.getElementById("sqr").style.backgroundColor = "#00ced1";  
}
//Набор числа
function first() {
    if (summa == true || diff == true || product == true || deg == true || degr == true) {
       b += "1";
       num2 = b;
    } else{
        a += "1";
        num1 = a;
        if (min == 1){
            num1 = -1 * num1;
        }
    }
    ex = num1 + num2;
    console.log(ex);
    var c = document.getElementById('expression');
    c.value = ex;
}
function second() {
    if (summa == true || diff == true || product == true || deg == true || degr == true) {
        b += "2";
        num2=b;
     } else{
        a += "2";
        num1 = a;
        if (min == 1){
            num1 = -1 * num1;
        }
     }
    ex = num1 + num2;
    var c = document.getElementById('expression');
    c.value = ex;
}
function third() {
    if (summa == true || diff == true || product == true || deg == true || degr == true) {
        b += "3";
        num2=b;
     } else{
        a += "3";
        num1 = a;
        if (min == 1){
            num1 = -1 * num1;
        }
     }
    ex = num1 + num2;
    var c = document.getElementById('expression');
    c.value = ex;
}
function fourth() {
    if (summa == true || diff == true || product == true || deg == true || degr == true) {
        b += "4";
        num2=b;
     } else{
        a += "4";
        num1 = a;
        if (min == 1){
            num1 = -1 * num1;
        }
     }
    ex = num1 + num2;
    var c = document.getElementById('expression');
    c.value = ex;
}
function fiveth() {
    if (summa == true || diff == true || product == true || deg == true || degr == true) {
        b += "5";
        num2=b;
    } else{
        a += "5";
        num1 = a;
        if (min == 1){
            num1 = -1 * num1;
        }
    }
    ex = num1 + num2;
    var c = document.getElementById('expression');
    c.value = ex;
}
function sixth() {
    if (summa == true || diff == true || product == true || deg == true || degr == true) {
        b += "6";
        num2=b;
    } else{
        a += "6";
        num1 = a;
        if (min == 1){
            num1 = -1 * num1;
        }
    }
    ex = num1 + num2;
    var c = document.getElementById('expression');
    c.value = ex;
}
function seventh() {
    if (summa == true || diff == true || product == true || deg == true || degr == true) {
        b += "7";
        num2=b;
    } else{
        a += "7";
        num1 = a;
        if (min == 1){
            num1 = -1 * num1;
        }
    }
    ex = num1 + num2;
    var c = document.getElementById('expression');
    c.value = ex;
}
function eightn() {
    if (summa == true || diff == true || product == true || deg == true || degr == true) {
        b += "8";
        num2=b;
    } else{
        a += "8";
        num1 = a;
        if (min == 1){
            num1 = -1 * num1;
        }
    }
    ex = num1 + num2;
    var c = document.getElementById('expression');
    c.value = ex;
}
function nineth() {
    if (summa == true || diff == true || product == true || deg == true || degr == true) {
        b += "9";
        num2=b;
    } else{
        a += "9";
        num1 = a;
        if (min == 1){
            num1 = -1 * num1;
        }
    }
    ex = num1 + num2;
    var c = document.getElementById('expression');
    c.value = ex;
}
function zero() {
    if (summa == true || diff == true || product == true || deg == true || degr == true) {
        b += "0";
        num2=b;
    } else{
        a += "0";
        num1 = a;
    }
    ex = num1 + num2;
    var c = document.getElementById('expression');
    c.value = ex;
}