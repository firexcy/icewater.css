"use strict";function e(e,n){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,n){if(!e)return;if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return t(e,n)}(e))||n&&e&&"number"==typeof e.length){r&&(e=r);var o=0,i=function(){};return{s:i,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,a=!0,l=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return a=e.done,e},e:function(e){l=!0,c=e},f:function(){try{a||null==r.return||r.return()}finally{if(l)throw c}}}}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var n={dark:2.57,light:2.55,auto:3.27},r=document.getElementById("theme-form"),o=document.getElementById("js-stylesheet"),i=document.getElementById("js-startup-stylesheet"),c=document.getElementById("copy-button"),a=document.getElementById("copy-button-feedback"),l=[].slice.call(document.querySelectorAll("#link-snippet-container > pre")),u={fileName:document.getElementById("table-file-name"),fileSize:document.getElementById("table-file-size"),theme:document.getElementById("table-theme")},d=function(){var t=r.querySelector('input[name="theme"]:checked').value,i="".concat("auto"===t?"water":t,".min.css"),c="".concat("https://cdn.jsdelivr.net/gh/firexcy/icewater.css@master/out/").concat(i);o.href=c;var a,d=e(l);try{for(d.s();!(a=d.n()).done;){var m=a.value;m.hidden=-1===m.id.indexOf(t)}}catch(e){d.e(e)}finally{d.f()}u.fileName.innerText=i,u.fileSize.innerText="".concat(n[t].toFixed(2)," kb"),"auto"===t?u.theme.innerHTML='\n    Respects user-defined theme settings using <a style="--links: var(--code)" href="https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme" target="_blank" rel="noopener"><code>prefers-color-scheme</code></a>.<br>\n    Light in browsers where the theme settings can\'t be detected.\n    ':u.theme.innerText="Theme is forced to ".concat(t,".")};r.addEventListener("change",d),d(),i.parentElement.removeChild(i),c.addEventListener("click",(function(){var e=navigator.clipboard||window.clipboard,t=r.querySelector('input[name="theme"]:checked').value,n=document.querySelector("#link-snippet-".concat(t," code")).textContent;e.writeText(n).then((function(){a.textContent="✔"})).catch((function(){a.textContent="❌"})).then((function(){return setTimeout((function(){a.textContent=""}),1e3)}))})),document.getElementById("dialog-trigger").addEventListener("click",(function(){document.getElementById("dialog-result").innerText="",document.getElementById("dialog").showModal()})),document.getElementById("dialog").addEventListener("close",(function(e){document.getElementById("dialog-result").innerText="Your answer: ".concat(e.target.returnValue)}));
//# sourceMappingURL=script.js.map
