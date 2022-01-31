const main = document.getElementById("main");
main.remove();
const newHeader = document.createElement("h1");
newHeader.setAttribute("id", "victory");
newHeader.innerHTML = "Zach is the champion";
document.head.append(newHeader);
