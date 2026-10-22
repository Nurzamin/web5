const studentName = "Zamin";
const studentGroup = "SE-2525";

console.log("Name: " + studentName);
console.log("Group: " + studentGroup);

document.getElementById("helloButton").addEventListener("click", function () {
  alert("Yo its alert");
});

document.getElementById("showResults").addEventListener("click", function () {
  const text = "Fixed";
  const number = 10;
  const isStudent = true;

  const addition = number + 5;
  const subtraction = number - 3;
  const multiplication = number * 2;
  const division = number / 2;
  const message = text + " gear";

  console.log(text, number, isStudent);
  console.log("Addition:", addition);
  console.log("Subtraction:", subtraction);
  console.log("Multiplication:", multiplication);
  console.log("Division:", division);
  console.log(message);

  document.getElementById("variableOutput").textContent =
    "Addition: " + addition + ", subtraction: " + subtraction +
    ", multiplication: " + multiplication + ", division: " + division +
    ". " + message;
});
