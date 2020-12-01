
var sBrowser, sUsrAg = navigator.userAgent;

//The order matters here, and this may report false positives for unlisted browsers.

if (sUsrAg.indexOf("Firefox") > -1) {
     sBrowser = "Mozilla Firefox";
     //"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:61.0) Gecko/20100101 Firefox/61.0"
} else if (sUsrAg.indexOf("Opera") > -1) {
     sBrowser = "Opera";
} else if (sUsrAg.indexOf("Trident") > -1) {
     sBrowser = "Microsoft Internet Explorer";
     //"Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; Zoom 3.6.0; wbx 1.0.0; rv:11.0) like Gecko"
} else if (sUsrAg.indexOf("Edge") > -1) {
     sBrowser = "Microsoft Edge";
     //"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36 Edge/16.16299"
} else if (sUsrAg.indexOf("Chrome") > -1) {
    sBrowser = "Google Chrome or Chromium";
    //"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/66.0.3359.181 Chrome/66.0.3359.181 Safari/537.36"
} else if (sUsrAg.indexOf("Safari") > -1) {
    sBrowser = "Apple Safari";
    //"Mozilla/5.0 (iPhone; CPU iPhone OS 11_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/11.0 Mobile/15E148 Safari/604.1 980x1306"
} else {
    sBrowser = "unknown";
}

alert("You are using: " + sBrowser);

var clock =document.getElementById("clock");


function hexoClock(){
    var time = new Date();
    var h= (time.getHours()%12).toString();
    var n= time.getMinutes().toString();
    var s= time.getSeconds().toString();



    if (h.length<2){
        h="0" + h;
    }
    if (n.length<2){
        n="0" + n;
    }
    if (s.length<2){
        s="0" + s;
    }


    var clockString = h +":" + n +":"+ s;

    clock.textContent=clockString; 
}

setInterval(hexoClock, 1020);

 function foo(){
        
        var arr = []; // создаем массив
        for(var i=0; i < 5; i++) {
    
            arr[i] = prompt('Введите любые числа', +i); // Заполняем массив
            if(arr[i] === null) { // если  нажимаем "Отмена"
                alert('Отмена');
                return;
            }
    
            if(arr[i] === '') { // если  имя не введено
                alert('Вы не указали имя');
                arr[i] = prompt('Введите любое имя'); 
            }

        }
    
        arrContainer.innerHTML = '';
        arrContainer.innerHTML = arr;

        alert(arr[i]);
    }
    function too(){
        var x= prompt("введите первое число");
        var y =prompt("введите второе число");
        var z= Math.min(x,y);
        alert(z);
    }

    function scwer(){
        var k= prompt("введите  число");
        var m =prompt("введите степень числа");
        var l= Math.pow(k,m);
        alert(l);
}
    


 

