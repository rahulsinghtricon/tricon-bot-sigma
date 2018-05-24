// console.log("working");
// var x = document.getElementsByTagName("body");
// for (i=0;i<x.length;i++){
// x[i].innerHTML="dfgfd";
// }

// var iFrame  = document.createElement ("iframe");
// iFrame.id ="tricon-bot-sigma";
// iFrame.src  = chrome.extension.getURL ("index.html");

// iFrame= document.body.insertBefore (iFrame, document.body.firstChild);

// document.addEventListener('DOMContentLoaded', function () {
//     document.getElementById("tricon-bot-sigma-header").addEventListener('click', function(){
//         window.alert("working");
//     });
// });

// toggle = () => {
//     window.alert("ok");
//     window.parent.document.getElementById('tricon-bot-sigma').class = "iframe-collapsed";
// }
//link stylesheets to the homepage


var chatBoxDiv  = document.createElement ("div");
chatBoxDiv.id = "tricon-bot-sigma";
chatBoxDiv.innerHTML='<header class="page-header" id="tricon-bot-sigma-header">      Tricon Bot Sigma    </header>    <div class="botui-app-container" id="api-bot">      <bot-ui></bot-ui>    </div>';

chatBoxDiv= document.body.insertBefore (chatBoxDiv, document.body.firstChild);

function hasClass(el, className) {
    if (el.classList)
        return el.classList.contains(className)
    else
        return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'))
}

function addClass(el, className) {
    if (el.classList)
        el.classList.add(className)
    else if (!hasClass(el, className)) el.className += " " + className
}

function removeClass(el, className) {
    if (el.classList)
        el.classList.remove(className)
    else if (hasClass(el, className)) {
        var reg = new RegExp('(\\s|^)' + className + '(\\s|$)')
        el.className=el.className.replace(reg, ' ')
    }
}
    
toggle=(target)=>{
    if(hasClass(target.parentNode, 'iframe-collapsed')) {
        removeClass(target.parentNode, 'iframe-collapsed');
        removeClass(document.getElementById('api-bot'), 'bot-collapsed');
    } else{
        addClass(target.parentNode, 'iframe-collapsed');
        addClass(document.getElementById('api-bot'), 'bot-collapsed');
    }
}

chatBoxDiv.childNodes[0].addEventListener('click', (event) => {
    toggle(event.target);
});

addClass(chatBoxDiv, 'tricon-bot-sigma');





var link1 = document.createElement("link");
link1.href = chrome.extension.getURL("botui.min.css");
link1.type = "text/css";
link1.rel = "stylesheet";
document.getElementsByTagName("head")[0].appendChild(link1);

var link2 = document.createElement("link");
link2.href = chrome.extension.getURL("botui-theme-default.css");
link2.type = "text/css";
link2.rel = "stylesheet";
document.getElementsByTagName("head")[0].appendChild(link2);

var link3 = document.createElement("link");
link3.href = chrome.extension.getURL("black.css");
link3.type = "text/css";
link3.rel = "stylesheet";
document.getElementsByTagName("head")[0].appendChild(link3);



//link the scripts
var script1 = document.createElement("script");
script1.src = chrome.extension.getURL("socket.io.js");
script1.type = "text/javascript";
//script1= document.body.insertBefore (script1, document.body.lastChild);
script1= document.head.insertBefore(script1,document.head.firstChild);

var script2 = document.createElement("script");
script2.src = chrome.extension.getURL("vue.min.js");
script2.type = "text/javascript";
script2= document.head.insertBefore (script2, document.head.lastChild);

var script3 = document.createElement("script");
script3.src = chrome.extension.getURL("botui.js");
script3.type = "text/javascript";
script3= document.head.insertBefore (script3, document.head.lastChild);

var script4 = document.createElement("script");
script4.src = chrome.extension.getURL("jquery.min.js");
script4.type = "text/javascript";
script4= document.head.insertBefore (script4, document.head.lastChild);

var script5 = document.createElement("script");
script5.src = chrome.extension.getURL("convo.js");
script5.type = "text/javascript";
script5= document.head.insertBefore (script5, document.head.lastChild);

var script6 = document.createElement("script");
script6.src = chrome.extension.getURL("promise.js");
script6.type = "text/javascript";
script6= document.head.insertBefore (script6, document.head.lastChild);

var script7 = document.createElement("script");
script7.src = chrome.extension.getURL("fontawesome.js");
script7.type = "text/javascript";
script7= document.head.insertBefore (script7, document.head.lastChild);