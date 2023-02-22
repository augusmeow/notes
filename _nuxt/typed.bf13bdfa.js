import{c as w,g as E}from"./_commonjsHelpers.725317a4.js";var T={},O={get exports(){return T},set exports(b){T=b}};/*!
 * 
 *   typed.js - A JavaScript Typing Animation Library
 *   Author: Matt Boldt <me@mattboldt.com>
 *   Version: v2.0.12
 *   Url: https://github.com/mattboldt/typed.js
 *   License(s): MIT
 * 
 */(function(b,_){(function(h,p){b.exports=p()})(w,function(){return function(m){var h={};function p(l){if(h[l])return h[l].exports;var r=h[l]={exports:{},id:l,loaded:!1};return m[l].call(r.exports,r,r.exports,p),r.loaded=!0,r.exports}return p.m=m,p.c=h,p.p="",p(0)}([function(m,h,p){Object.defineProperty(h,"__esModule",{value:!0});var l=function(){function o(s,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(s,n.key,n)}}return function(s,e,i){return e&&o(s.prototype,e),i&&o(s,i),s}}();function r(o,s){if(!(o instanceof s))throw new TypeError("Cannot call a class as a function")}var d=p(1),c=p(3),y=function(){function o(s,e){r(this,o),d.initializer.load(this,e,s),this.begin()}return l(o,[{key:"toggle",value:function(){this.pause.status?this.start():this.stop()}},{key:"stop",value:function(){this.typingComplete||this.pause.status||(this.toggleBlinking(!0),this.pause.status=!0,this.options.onStop(this.arrayPos,this))}},{key:"start",value:function(){this.typingComplete||this.pause.status&&(this.pause.status=!1,this.pause.typewrite?this.typewrite(this.pause.curString,this.pause.curStrPos):this.backspace(this.pause.curString,this.pause.curStrPos),this.options.onStart(this.arrayPos,this))}},{key:"destroy",value:function(){this.reset(!1),this.options.onDestroy(this)}},{key:"reset",value:function(){var e=arguments.length<=0||arguments[0]===void 0?!0:arguments[0];clearInterval(this.timeout),this.replaceText(""),this.cursor&&this.cursor.parentNode&&(this.cursor.parentNode.removeChild(this.cursor),this.cursor=null),this.strPos=0,this.arrayPos=0,this.curLoop=0,e&&(this.insertCursor(),this.options.onReset(this),this.begin())}},{key:"begin",value:function(){var e=this;this.options.onBegin(this),this.typingComplete=!1,this.shuffleStringsIfNeeded(this),this.insertCursor(),this.bindInputFocusEvents&&this.bindFocusEvents(),this.timeout=setTimeout(function(){!e.currentElContent||e.currentElContent.length===0?e.typewrite(e.strings[e.sequence[e.arrayPos]],e.strPos):e.backspace(e.currentElContent,e.currentElContent.length)},this.startDelay)}},{key:"typewrite",value:function(e,i){var n=this;this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));var t=this.humanizer(this.typeSpeed),a=1;if(this.pause.status===!0){this.setPauseStatus(e,i,!0);return}this.timeout=setTimeout(function(){i=c.htmlParser.typeHtmlChars(e,i,n);var u=0,f=e.substr(i);if(f.charAt(0)==="^"&&/^\^\d+/.test(f)){var g=1;f=/\d+/.exec(f)[0],g+=f.length,u=parseInt(f),n.temporaryPause=!0,n.options.onTypingPaused(n.arrayPos,n),e=e.substring(0,i)+e.substring(i+g),n.toggleBlinking(!0)}if(f.charAt(0)==="`"){for(;e.substr(i+a).charAt(0)!=="`"&&(a++,!(i+a>e.length)););var v=e.substring(0,i),k=e.substring(v.length+1,i+a),C=e.substring(i+a+1);e=v+k+C,a--}n.timeout=setTimeout(function(){n.toggleBlinking(!1),i>=e.length?n.doneTyping(e,i):n.keepTyping(e,i,a),n.temporaryPause&&(n.temporaryPause=!1,n.options.onTypingResumed(n.arrayPos,n))},u)},t)}},{key:"keepTyping",value:function(e,i,n){i===0&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this)),i+=n;var t=e.substr(0,i);this.replaceText(t),this.typewrite(e,i)}},{key:"doneTyping",value:function(e,i){var n=this;this.options.onStringTyped(this.arrayPos,this),this.toggleBlinking(!0),!(this.arrayPos===this.strings.length-1&&(this.complete(),this.loop===!1||this.curLoop===this.loopCount))&&(this.timeout=setTimeout(function(){n.backspace(e,i)},this.backDelay))}},{key:"backspace",value:function(e,i){var n=this;if(this.pause.status===!0){this.setPauseStatus(e,i,!1);return}if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var t=this.humanizer(this.backSpeed);this.timeout=setTimeout(function(){i=c.htmlParser.backSpaceHtmlChars(e,i,n);var a=e.substr(0,i);if(n.replaceText(a),n.smartBackspace){var u=n.strings[n.arrayPos+1];u&&a===u.substr(0,i)?n.stopNum=i:n.stopNum=0}i>n.stopNum?(i--,n.backspace(e,i)):i<=n.stopNum&&(n.arrayPos++,n.arrayPos===n.strings.length?(n.arrayPos=0,n.options.onLastStringBackspaced(),n.shuffleStringsIfNeeded(),n.begin()):n.typewrite(n.strings[n.sequence[n.arrayPos]],i))},t)}},{key:"complete",value:function(){this.options.onComplete(this),this.loop?this.curLoop++:this.typingComplete=!0}},{key:"setPauseStatus",value:function(e,i,n){this.pause.typewrite=n,this.pause.curString=e,this.pause.curStrPos=i}},{key:"toggleBlinking",value:function(e){this.cursor&&(this.pause.status||this.cursorBlinking!==e&&(this.cursorBlinking=e,e?this.cursor.classList.add("typed-cursor--blink"):this.cursor.classList.remove("typed-cursor--blink")))}},{key:"humanizer",value:function(e){return Math.round(Math.random()*e/2)+e}},{key:"shuffleStringsIfNeeded",value:function(){this.shuffle&&(this.sequence=this.sequence.sort(function(){return Math.random()-.5}))}},{key:"initFadeOut",value:function(){var e=this;return this.el.className+=" "+this.fadeOutClass,this.cursor&&(this.cursor.className+=" "+this.fadeOutClass),setTimeout(function(){e.arrayPos++,e.replaceText(""),e.strings.length>e.arrayPos?e.typewrite(e.strings[e.sequence[e.arrayPos]],0):(e.typewrite(e.strings[0],0),e.arrayPos=0)},this.fadeOutDelay)}},{key:"replaceText",value:function(e){this.attr?this.el.setAttribute(this.attr,e):this.isInput?this.el.value=e:this.contentType==="html"?this.el.innerHTML=e:this.el.textContent=e}},{key:"bindFocusEvents",value:function(){var e=this;this.isInput&&(this.el.addEventListener("focus",function(i){e.stop()}),this.el.addEventListener("blur",function(i){e.el.value&&e.el.value.length!==0||e.start()}))}},{key:"insertCursor",value:function(){this.showCursor&&(this.cursor||(this.cursor=document.createElement("span"),this.cursor.className="typed-cursor",this.cursor.setAttribute("aria-hidden",!0),this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)))}}]),o}();h.default=y,m.exports=h.default},function(m,h,p){Object.defineProperty(h,"__esModule",{value:!0});var l=Object.assign||function(i){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(i[a]=t[a])}return i},r=function(){function i(n,t){for(var a=0;a<t.length;a++){var u=t[a];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(n,u.key,u)}}return function(n,t,a){return t&&i(n.prototype,t),a&&i(n,a),n}}();function d(i){return i&&i.__esModule?i:{default:i}}function c(i,n){if(!(i instanceof n))throw new TypeError("Cannot call a class as a function")}var y=p(2),o=d(y),s=function(){function i(){c(this,i)}return r(i,[{key:"load",value:function(t,a,u){if(typeof u=="string"?t.el=document.querySelector(u):t.el=u,t.options=l({},o.default,a),t.isInput=t.el.tagName.toLowerCase()==="input",t.attr=t.options.attr,t.bindInputFocusEvents=t.options.bindInputFocusEvents,t.showCursor=t.isInput?!1:t.options.showCursor,t.cursorChar=t.options.cursorChar,t.cursorBlinking=!0,t.elContent=t.attr?t.el.getAttribute(t.attr):t.el.textContent,t.contentType=t.options.contentType,t.typeSpeed=t.options.typeSpeed,t.startDelay=t.options.startDelay,t.backSpeed=t.options.backSpeed,t.smartBackspace=t.options.smartBackspace,t.backDelay=t.options.backDelay,t.fadeOut=t.options.fadeOut,t.fadeOutClass=t.options.fadeOutClass,t.fadeOutDelay=t.options.fadeOutDelay,t.isPaused=!1,t.strings=t.options.strings.map(function(C){return C.trim()}),typeof t.options.stringsElement=="string"?t.stringsElement=document.querySelector(t.options.stringsElement):t.stringsElement=t.options.stringsElement,t.stringsElement){t.strings=[],t.stringsElement.style.display="none";var f=Array.prototype.slice.apply(t.stringsElement.children),g=f.length;if(g)for(var v=0;v<g;v+=1){var k=f[v];t.strings.push(k.innerHTML.trim())}}t.strPos=0,t.arrayPos=0,t.stopNum=0,t.loop=t.options.loop,t.loopCount=t.options.loopCount,t.curLoop=0,t.shuffle=t.options.shuffle,t.sequence=[],t.pause={status:!1,typewrite:!0,curString:"",curStrPos:0},t.typingComplete=!1;for(var v in t.strings)t.sequence[v]=v;t.currentElContent=this.getCurrentElContent(t),t.autoInsertCss=t.options.autoInsertCss,this.appendAnimationCss(t)}},{key:"getCurrentElContent",value:function(t){var a="";return t.attr?a=t.el.getAttribute(t.attr):t.isInput?a=t.el.value:t.contentType==="html"?a=t.el.innerHTML:a=t.el.textContent,a}},{key:"appendAnimationCss",value:function(t){var a="data-typed-js-css";if(t.autoInsertCss&&!(!t.showCursor&&!t.fadeOut)&&!document.querySelector("["+a+"]")){var u=document.createElement("style");u.type="text/css",u.setAttribute(a,!0);var f="";t.showCursor&&(f+=`
        .typed-cursor{
          opacity: 1;
        }
        .typed-cursor.typed-cursor--blink{
          animation: typedjsBlink 0.7s infinite;
          -webkit-animation: typedjsBlink 0.7s infinite;
                  animation: typedjsBlink 0.7s infinite;
        }
        @keyframes typedjsBlink{
          50% { opacity: 0.0; }
        }
        @-webkit-keyframes typedjsBlink{
          0% { opacity: 1; }
          50% { opacity: 0.0; }
          100% { opacity: 1; }
        }
      `),t.fadeOut&&(f+=`
        .typed-fade-out{
          opacity: 0;
          transition: opacity .25s;
        }
        .typed-cursor.typed-cursor--blink.typed-fade-out{
          -webkit-animation: 0;
          animation: 0;
        }
      `),u.length!==0&&(u.innerHTML=f,document.body.appendChild(u))}}}]),i}();h.default=s;var e=new s;h.initializer=e},function(m,h){Object.defineProperty(h,"__esModule",{value:!0});var p={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:1/0,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onBegin:function(r){},onComplete:function(r){},preStringTyped:function(r,d){},onStringTyped:function(r,d){},onLastStringBackspaced:function(r){},onTypingPaused:function(r,d){},onTypingResumed:function(r,d){},onReset:function(r){},onStop:function(r,d){},onStart:function(r,d){},onDestroy:function(r){}};h.default=p,m.exports=h.default},function(m,h){Object.defineProperty(h,"__esModule",{value:!0});var p=function(){function c(y,o){for(var s=0;s<o.length;s++){var e=o[s];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(y,e.key,e)}}return function(y,o,s){return o&&c(y.prototype,o),s&&c(y,s),y}}();function l(c,y){if(!(c instanceof y))throw new TypeError("Cannot call a class as a function")}var r=function(){function c(){l(this,c)}return p(c,[{key:"typeHtmlChars",value:function(o,s,e){if(e.contentType!=="html")return s;var i=o.substr(s).charAt(0);if(i==="<"||i==="&"){var n="";for(i==="<"?n=">":n=";";o.substr(s+1).charAt(0)!==n&&(s++,!(s+1>o.length)););s++}return s}},{key:"backSpaceHtmlChars",value:function(o,s,e){if(e.contentType!=="html")return s;var i=o.substr(s).charAt(0);if(i===">"||i===";"){var n="";for(i===">"?n="<":n="&";o.substr(s-1).charAt(0)!==n&&(s--,!(s<0)););s--}return s}}]),c}();h.default=r;var d=new r;h.htmlParser=d}])})})(O);const L=E(T);export{L as T};
