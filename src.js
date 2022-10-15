var input = document.getElementById("input");
if (window.location.search.split("=").length != 0) {
  input.value = decodeURIComponent(location.search.split("=")[1].replace(/\+/gi, " "));
  input.click();
  input.focus();
  input.select();
} else {
  input.value = "";
}
