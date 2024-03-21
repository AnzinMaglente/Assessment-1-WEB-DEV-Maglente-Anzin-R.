var n1 = document.getElementById("num1");
var n2 = document.getElementById("num2");
var res = document.getElementById("result");

document.getElementById("calculate").addEventListener("click", function() {
res.value = parseFloat(n1.value) * parseFloat(n2.value);
});
/* addEventListener adds a certain condition to an button, link, and more.
for this whenever the calculate button is pressed, it gets the value of the result
by multiplying both numbers.

parseFloat changes the value of n1 and n2 to float values rather than intergers. */

function setFocusToTextBox(){
    document.getElementById("result").focus();
}
/* This function, setFocusToTextBox, sets a focus on the result after the user presses
the calculate button. The focus operator highlights the result. */
