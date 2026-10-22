
const mouseBox = document.getElementById("mouseBox");

mouseBox.addEventListener("mouseover", function () {
  mouseBox.style.backgroundColor = "#c9f7be";
});

mouseBox.addEventListener("mouseout", function () {
  mouseBox.style.backgroundColor = "#f1f5f9";
});

document.getElementById("liveInput").addEventListener("keyup", function (event) {
  document.getElementById("liveOutput").textContent = event.target.value || "Type something";
});

document.querySelectorAll("[data-operation]").forEach(function (button) {
  button.addEventListener("click", function () {
    const first = Number(document.getElementById("firstNumber").value);
    const second = Number(document.getElementById("secondNumber").value);
    const operation = button.dataset.operation;
    let result;

    if (document.getElementById("firstNumber").value === "" ||
        document.getElementById("secondNumber").value === "") {
      document.getElementById("calcResult").textContent = "Please enter both numbers.";
      return;
    }

    if (operation === "add") result = first + second;
    if (operation === "subtract") result = first - second;
    if (operation === "multiply") result = first * second;
    if (operation === "divide") {
      if (second === 0) {
        document.getElementById("calcResult").textContent = "Cannot divide by zero.";
        return;
      }
      result = first / second;
    }

    document.getElementById("calcResult").textContent = "Result: " + result;
  });
});
