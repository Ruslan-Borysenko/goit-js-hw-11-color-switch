(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{QfWi:function(t,e,n){"use strict";n.r(e);n("VImr")},VImr:function(t,e){var n=["#FFFFFF","#2196F3","#4CAF50","#FF9800","#009688","#795548"],r=null,o="",a={body:document.querySelector("body"),btnStart:document.querySelector("[data-action='start']"),btnStop:document.querySelector("[data-action='stop']")};a.btnStart.addEventListener("click",(function(){a.btnStart.setAttribute("disabled","disabled"),r=setInterval((function(){for(var t=""+d(n);t===o;)t=""+d(n);a.body.style.backgroundColor=t,o=t}),1e3)})),a.btnStop.addEventListener("click",(function(){a.btnStart.removeAttribute("disabled","disabled"),clearInterval(r)}));var d=function(t){var e,r,o=""+t[(e=0,r=n.length-1,Math.floor(Math.random()*(r-e+1)+e))];return o}}},[["QfWi",1]]]);
//# sourceMappingURL=main.8e76097c8dd0b2e438ab.js.map