$(document).ready(function() {
    var a = parseInt(prompt("Insert number 1"));
    var b = parseInt(prompt("Insert number 2"));

    if (isNaN(a) || isNaN(b)) {
        alert("A...A...A    Insert a number !!!");
    }
    else {
        console.log("Number 1 + Number 2 = " + (a + b));
        console.log("Number 1 - Number 2 = " + (a - b));
        console.log("Number 1 * Number 2 = " + (a * b));
        if(b === 0){
            console.log("Because Number 2 is 0, Number 1 can't be divided into it");
        }else {
            console.log("Number 1 / Number 2 = " + (a / b));
        }
        alert("Look the console (Ctrl+Shift+I)");
    }
});