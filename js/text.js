var showText = function (target, message, index, interval) {  
  if (index < message.length) {
    $(target).append(message[index++]);
    setTimeout(function () { showText(target, message, index, interval); }, interval);
  }
}
$(function () {

  showText("#show", "I'm a web developer.", 0, 50);   

});
