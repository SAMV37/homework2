// var a = valueof(readline());
// var b = 13247;
// console.log("A is " + a);
// console.log("B is " + b);
// console.log("A + B is " + (a + b));
// console.log("A - B is " + (a - b));
// console.log("A * B is " + (a * b));
// console.log("A / B is " + (a / b));
$(document).ready(function() {

    var a = parseInt(prompt("Insert number A"));
    var b = parseInt(prompt("Insert number B"));

    if (isNaN(a) || isNaN(b)) {
        alert("A...A...A    Insert a number !!!");
    }
    else {
        alert("Look the console (Ctrl+Shift+I)");
        console.log("A + B = " + (a + b));
        console.log("A - B = " + (a - b));
        console.log("A * B = " + (a * b));
        console.log("A / B = " + (a / b));
    }

});