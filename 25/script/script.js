var nameBrowser = "Неизвестный браузер";
var stringUserAgent = window.navigator.userAgent;
if (stringUserAgent.indexOf("Chrome") >= 0) 
  nameBrowser = "Google Chrome";
else if(stringUserAgent.indexOf("Firefox") >=0)
  nameBrowser = "Mozilla Firefox";
else if((stringUserAgent.indexOf("MSIE") >=0) || (stringUserAgent.indexOf("Trident") >=0))
  nameBrowser = "Microsoft Internet Explorer";
else if(stringUserAgent.indexOf("Safari") >=0) 
  nameBrowser = "Apple Safari";
else if(stringUserAgent.indexOf("Opera") >=0)
  nameBrowser = "Opera";
window.document.getElementById("nameBrowser").innerHTML = nameBrowser;

let name = prompt("Ваше имя?", "");
alert(name);

setInterval(function() { window.focus() }, 1000);