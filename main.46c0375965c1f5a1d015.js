(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{QfWi:function(t,e,n){"use strict";n.r(e);var o={body:document.querySelector("body"),btnStart:document.querySelector("[data-action='start']"),btnStop:document.querySelector("[data-action='stop']")},r=["#FFFFFF","#2196F3","#4CAF50","#FF9800","#009688","#795548"],a=o.body,d=o.btnStart,c=null,i="",l=function(t){var e,n,o=""+t[(e=0,n=r.length-1,Math.floor(Math.random()*(n-e+1)+e))];return o};var u=o.btnStop;o.btnStart.addEventListener("click",(function(){d.setAttribute("disabled","disabled"),c=setInterval((function(){for(var t=""+l(r);t===i;)t=""+l(r);a.style.backgroundColor=t,i=t}),1e3)})),u.addEventListener("click",(function(){d.removeAttribute("disabled","disabled"),clearInterval(c)}))}},[["QfWi",1]]]);
//# sourceMappingURL=main.46c0375965c1f5a1d015.js.map