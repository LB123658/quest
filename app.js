var content = document.getElementById("content");
var auto = document.getElementById("autocomplete");
var input = document.getElementById("input");

function begin() {
document.getElementsByTagName("h2")[0].remove();
}

//autocomplete
function suggest() {
if (input.value.length > 0) {
auto.innerHTML = "<button type='submit' form='form'>" + input.value + "</button>";
auto.style.visibility = "visible";
} else {
auto.style.visibility = "hidden";
}
}
function loadSuggestion(a) {
var y = document.createElement("button");
y.innerHTML = a;
y.onclick = function() {input.value = a; location.replace("s.html?q=" + a.replace(/ /gi, "+")); };
auto.appendChild(y);
  if (a.toLowerCase().indexOf(input.value.toLowerCase()) < 0) {
    y.remove();
  }
}

//autocomplete
function smartSuggest() {
  for (let i = 0; i < library.length ;i++) {
    loadSuggestion(library[i].split("https://")[1].split(".")[0]);
  }
}