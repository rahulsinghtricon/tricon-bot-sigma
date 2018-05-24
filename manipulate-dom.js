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

