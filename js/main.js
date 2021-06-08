var getTheUserName = prompt("Hello! Who are you?");

console.log(getTheUserName);

document.getElementById("username").innerText = getTheUserName;

//tooltip

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })

