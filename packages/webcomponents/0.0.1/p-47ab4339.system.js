System.register(["./p-8939c597.system.js"],(function(e,r){"use strict";var t,n,i,o,a,s;return{setters:[function(e){t=e.C;n=e.p;i=e.w;o=e.a;a=e.d;s=e.N}],execute:function(){var u=typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{};var c="/Users/lucas.inacio/Web/Accenture/Tim/design-system/web/node_modules/@stencil/core/internal/client";function f(){throw new Error("setTimeout has not been defined")}function l(){throw new Error("clearTimeout has not been defined")}var v=f;var m=l;if(typeof u.setTimeout==="function"){v=setTimeout}if(typeof u.clearTimeout==="function"){m=clearTimeout}function p(e){if(v===setTimeout){return setTimeout(e,0)}if((v===f||!v)&&setTimeout){v=setTimeout;return setTimeout(e,0)}try{return v(e,0)}catch(r){try{return v.call(null,e,0)}catch(r){return v.call(this,e,0)}}}function h(e){if(m===clearTimeout){return clearTimeout(e)}if((m===l||!m)&&clearTimeout){m=clearTimeout;return clearTimeout(e)}try{return m(e)}catch(r){try{return m.call(null,e)}catch(r){return m.call(this,e)}}}var w=[];var d=false;var y;var g=-1;function b(){if(!d||!y){return}d=false;if(y.length){w=y.concat(w)}else{g=-1}if(w.length){T()}}function T(){if(d){return}var e=p(b);d=true;var r=w.length;while(r){y=w;w=[];while(++g<r){if(y){y[g].run()}}g=-1;r=w.length}y=null;d=false;h(e)}function _(e){var r=new Array(arguments.length-1);if(arguments.length>1){for(var t=1;t<arguments.length;t++){r[t-1]=arguments[t]}}w.push(new L(e,r));if(w.length===1&&!d){p(T)}}function L(e,r){this.fun=e;this.array=r}L.prototype.run=function(){this.fun.apply(null,this.array)};var U="browser";var A="browser";var D=true;var E={};var R=[];var $="";var j={};var x={};var N={};function S(){}var M=S;var k=S;var O=S;var q=S;var C=S;var z=S;var B=S;function F(e){throw new Error("process.binding is not supported")}function P(){return"/"}function W(e){throw new Error("process.chdir is not supported")}function G(){return 0}var H=u.performance||{};var I=H.now||H.mozNow||H.msNow||H.oNow||H.webkitNow||function(){return(new Date).getTime()};function J(e){var r=I.call(H)*.001;var t=Math.floor(r);var n=Math.floor(r%1*1e9);if(e){t=t-e[0];n=n-e[1];if(n<0){t--;n+=1e9}}return[t,n]}var K=new Date;function Q(){var e=new Date;var r=e-K;return r/1e3}var V={nextTick:_,title:U,browser:D,env:E,argv:R,version:$,versions:j,on:M,addListener:k,once:O,off:q,removeListener:C,removeAllListeners:z,emit:B,binding:F,cwd:P,chdir:W,umask:G,hrtime:J,platform:A,release:x,config:N,uptime:Q};var X=function(){};var Y=typeof Deno!=="undefined";var Z=!Y&&typeof u!=="undefined"&&typeof require==="function"&&!!u.process&&typeof c==="string"&&(!u.origin||typeof u.origin!=="string");var ee=Y&&Deno.build.os==="windows";var re=Z?V.cwd:Y?Deno.cwd:function(){return"/"};var te=Z?V.exit:Y?Deno.exit:X;var ne=function(e){return"__sc_import_"+e.replace(/\s|-/g,"_")};var ie=e("a",(function(){if(!(t&&t.supports&&t.supports("color","var(--c)"))){return r.import("./p-03188b5b.system.js").then((function(){if(n.$cssShim$=i.__cssshim){return n.$cssShim$.i()}else{return 0}}))}return o()}));var oe=e("p",(function(){{n.$cssShim$=i.__cssshim}var e=Array.from(a.querySelectorAll("script")).find((function(e){return new RegExp("/"+s+"(\\.esm)?\\.js($|\\?|#)").test(e.src)||e.getAttribute("data-stencil-namespace")===s}));var t=e["data-opts"]||{};if("onbeforeload"in e&&!history.scrollRestoration){return{then:function(){}}}{t.resourcesUrl=new URL(".",new URL(e.getAttribute("data-resources-url")||e.src,i.location.href)).href;{ae(t.resourcesUrl,e)}if(!i.customElements){return r.import("./p-0b8ecd50.system.js").then((function(){return t}))}}return o(t)}));var ae=function(e,r){var t=ne(s);try{i[t]=new Function("w","return import(w);//"+Math.random())}catch(o){var n=new Map;i[t]=function(o){var s=new URL(o,e).href;var u=n.get(s);if(!u){var c=a.createElement("script");c.type="module";c.crossOrigin=r.crossOrigin;c.src=URL.createObjectURL(new Blob(["import * as m from '"+s+"'; window."+t+".m = m;"],{type:"application/javascript"}));u=new Promise((function(e){c.onload=function(){e(i[t].m);c.remove()}}));n.set(s,u);a.head.appendChild(c)}return u}}}}}}));