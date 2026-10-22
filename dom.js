
document.getElementById("changeButton").addEventListener("click", function () {
  document.getElementById("changeText").textContent = "Look , it changed";
});


document.getElementById("colorButton").addEventListener("click", function () {
  const box = document.getElementById("styleBox");
  box.style.backgroundColor = box.style.backgroundColor === "lightblue" ? "#f1f5f9" : "lightblue";
});

document.getElementById("sizeButton").addEventListener("click", function () {
  const box = document.getElementById("styleBox");
  box.style.fontSize = box.style.fontSize === "24px" ? "16px" : "24px";
});

let itemNumber = 1;

document.getElementById("addItem").addEventListener("click", function () {
  itemNumber++;
  const item = document.createElement("li");
  item.textContent = "Item " + itemNumber;
  document.getElementById("itemList").appendChild(item);
});

document.getElementById("removeItem").addEventListener("click", function () {
  const list = document.getElementById("itemList");
  if (list.lastElementChild) {
    list.removeChild(list.lastElementChild);
    itemNumber = Math.max(1, itemNumber - 1);
  }
});
