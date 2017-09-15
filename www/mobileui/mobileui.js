/*component-base*/var userAgent=navigator.userAgent||navigator.vendor||window.opera,SO={name:"unknown",code:0};/android/i.test(userAgent)&&(SO.name="Android",SO.class="platform-android",SO.code=1);/iPad|iPhone|iPod/.test(userAgent)&&!window.MSStream&&(SO.name="iOS",SO.class="platform-ios",SO.code=2);/windows phone/i.test(userAgent)&&(SO.name="Windows Phone",SO.class="platform-wp",SO.code=3);SO.class&&document.getElementsByTagName("body").length&&(document.getElementsByTagName("body")[0].className+=" "+SO.class);
/*component-button*/document.addEventListener("click",function(e){if(1!==SO.code)return!1;var t=e.target;if("button"!==t.tagName.toLowerCase())return!1;var o=t.getBoundingClientRect(),s=t.querySelector(".ripple");s||(s=document.createElement("span"),s.className="ripple",s.style.height=s.style.width=Math.max(o.width,o.height)+"px",t.appendChild(s)),s.classList.remove("show");var a=e.pageY-o.top-s.offsetHeight/2-document.body.scrollTop,l=e.pageX-o.left-s.offsetWidth/2-document.body.scrollLeft;return s.style.top=a+"px",s.style.left=l+"px",s.classList.add("show"),!1},!1);
/*component-page*/window.PAGE={handePage:100},document.addEventListener("deviceready",function(){document.addEventListener("backbutton",function(e){var t=document.getElementsByClassName("box-block");t.length?(e.preventDefault(),window.backPage(t[t.length-1].id)):navigator.app.exitApp()},!1)},!1),window.dispatch=function(e,t){return e="function"==typeof e?e:window[e],e.apply(this,t||[])},window.openPage=function(e,t,n){var a=function(){window.PAGE.handePage++;var a="z-index:"+window.PAGE.handePage,s=";transform: translateY(0px);will-change: transform, -webkit-transform, opacity;transition-duration: 280ms;transition-timing-function: cubic-bezier(0.36,0.66,0.04,1);";2===SO.code&&(s=";transform: translateX(0px);transition-duration: 280ms;");var m=document.getElementById(e).getElementsByClassName("page")[0].getAttribute("style");m?m+=" "+a+s:m=a+s,document.getElementById(e).getElementsByClassName("page")[0].setAttribute("style",m),n&&window.dispatch(n,[t]);var o=document.getElementById(e).getElementsByClassName("page")[0].getAttribute("class");o+=" show";var d=function(){setTimeout(function(){document.getElementById(e)&&document.getElementById(e).querySelectorAll(".page").length?i():d()},10)};d();var l=new CustomEvent("openPage",{detail:{page:e}});document.dispatchEvent(l);var i=function(){setTimeout(function(){document.getElementById(e).getElementsByClassName("page")[0].setAttribute("class",o),setTimeout(function(){var t=document.getElementById(e).getElementsByClassName("page")[0].getAttribute("style");t=t.replace(s,""),document.getElementById(e).getElementsByClassName("page")[0].setAttribute("style",t)},280)},100)}};if(2===arguments.length&&(n=t),e.indexOf(".html")<0&&(e+=".html"),document.getElementById(e)){var s=document.getElementsByClassName("box-block");if(s[s.length-1].id===document.getElementById(e).id)return!1;document.getElementById(e).parentNode.removeChild(document.getElementById(e))}var m=new XMLHttpRequest;m.onload=function(){if(4==this.readyState){var t=this.responseText;t=t.replace("backPage()","backPage('"+e+"')");var n=document.getElementsByTagName("body")[0];document.getElementsByClassName("body").length&&(n=document.getElementsByClassName("body")[0]);var s=document.createElement("div");s.setAttribute("class","box-block"),s.setAttribute("id",e),s.innerHTML=t,n.appendChild(s),a()}},m.open("GET",e+"?cache="+(new Date).getTime(),!0),document.dispatchEvent(new Event("firedCloseMenu")),m.send()},window.backPage=function(e){var t=(document.getElementById(e).getElementsByClassName("page")[0],";transform: translateY(0px);will-change: transform, -webkit-transform, opacity;transition-duration: 280ms;"),n=document.getElementById(e).getElementsByClassName("page")[0].getAttribute("style");n?n+=" "+t:n=t,document.getElementById(e).getElementsByClassName("page")[0].setAttribute("style",n);var a=document.getElementById(e).getElementsByClassName("page")[0].getAttribute("class");a+=a.replace("show",""),document.getElementById(e).getElementsByClassName("page")[0].setAttribute("class",a);var s=new CustomEvent("backPage",{detail:{page:e}});document.dispatchEvent(s),setTimeout(function(){var t=document.getElementById(e);t.parentElement.removeChild(t)},280)};
