/*var buttonYes = document.getElementById("YesButton");
var buttonNo = document.getElementById("NoButton");

buttonNo.addEventListener("click", function() {
  var changeTop = (Math.random() * ($(window).height() - $("button").height()));
  var changeLeft = (Math.random() * ($(window).width() - $("button").width()));
  $("button").css("margin-top", changeTop + "px");
  $("button").css("margin-left", changeLeft + "px");
});*/

$("button").click(function() {
  $(".button").toggleClass("buttonLeft");
});