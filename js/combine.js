
var showText = function (target, message, index, interval) {  
  if (index < message.length) {
    $(target).append(message[index++]);
    setTimeout(function () { showText(target, message, index, interval); }, interval);
  }
}
$(function () {

  showText("#show", "I'm Agnieszka Krasodomska", 0, 50);   

});

function openCv() {
  document.getElementById("cv").style.width = "100%";
}

function closeCv() {
  document.getElementById("cv").style.width = "0%";
};
var greeting;
var time = new Date().getHours();
  if (time < 10) {
    greeting = "Good morning";
  } else if (time < 20) {
      greeting = "Good day";
  } else {
    greeting = "Good evening";
  }
document.getElementById("hello").innerHTML = greeting;
