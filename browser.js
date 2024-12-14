// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function o(r,e,t){var o=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(o=!0,r=r.substr(1)),r=t?r+n(i):n(i)+r,o&&(r="-"+r)),r}var i=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var e,n,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(n=(-u).toString(e),r.precision&&(n=o(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(e),u||r.precision?r.precision&&(n=o(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):i.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var c=Math.abs,f=String.prototype.toLowerCase,l=String.prototype.toUpperCase,s=String.prototype.replace,p=/e\+(\d)$/,g=/e-(\d)$/,d=/^(\d+)$/,h=/^(\d+)e/,y=/\.0$/,b=/\.0*e/,v=/(\..*[^0])0*e/;function m(r){var e,n,o=parseFloat(r.arg);if(!isFinite(o)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);o=r.arg}switch(r.specifier){case"e":case"E":n=o.toExponential(r.precision);break;case"f":case"F":n=o.toFixed(r.precision);break;case"g":case"G":c(o)<1e-4?((e=r.precision)>0&&(e-=1),n=o.toExponential(e)):n=o.toPrecision(r.precision),r.alternate||(n=s.call(n,v,"$1e"),n=s.call(n,b,"e"),n=s.call(n,y,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=s.call(n,p,"e+0$1"),n=s.call(n,g,"e-0$1"),r.alternate&&(n=s.call(n,d,"$1."),n=s.call(n,h,"$1.e")),o>=0&&r.sign&&(n=r.sign+n),n=r.specifier===l.call(r.specifier)?l.call(n):f.call(n)}function w(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var j=String.fromCharCode,_=Array.isArray;function E(r){return r!=r}function O(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function S(r){var e,t,n,i,a,c,f,l,s,p,g,d,h;if(!_(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",f=1,l=0;l<r.length;l++)if("string"==typeof(n=r[l]))c+=n;else{if(e=void 0!==n.precision,!(n=O(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),t=n.flags,s=0;s<t.length;s++)switch(i=t.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,E(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,E(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=e?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!E(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=E(a)?String(n.arg):j(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,g=n.width,d=n.padRight,h=void 0,(h=g-p.length)<0?p:p=d?p+w(h):w(h)+p)),c+=n.arg||"",f+=1}return c}var T=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function x(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function I(r){var e,t,n,o;for(t=[],o=0,n=T.exec(r);n;)(e=r.slice(o,T.lastIndex-n[0].length)).length&&t.push(e),t.push(x(n)),o=T.lastIndex,n=T.exec(r);return(e=r.slice(o)).length&&t.push(e),t}function k(r){var e,t;if("string"!=typeof r)throw new TypeError(k("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[I(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return S.apply(null,e)}var F,P=Object.prototype,V=P.toString,A=P.__defineGetter__,C=P.__defineSetter__,$=P.__lookupGetter__,N=P.__lookupSetter__;F=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===V.call(r))throw new TypeError(k("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===V.call(t))throw new TypeError(k("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&($.call(r,e)||N.call(r,e)?(n=r.__proto__,r.__proto__=P,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&A&&A.call(r,e,t.get),a&&C&&C.call(r,e,t.set),r};var R=F;function B(r,e,t){R(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var G="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function L(){return G&&"symbol"==typeof Symbol.toStringTag}var Z=Object.prototype.toString,M=Object.prototype.hasOwnProperty;function U(r,e){return null!=r&&M.call(r,e)}var W="function"==typeof Symbol?Symbol:void 0,X="function"==typeof W?W.toStringTag:"",Y=L()?function(r){var e,t,n;if(null==r)return Z.call(r);t=r[X],e=U(r,X);try{r[X]=void 0}catch(e){return Z.call(r)}return n=Z.call(r),e?r[X]=t:delete r[X],n}:function(r){return Z.call(r)},z=Array.isArray?Array.isArray:function(r){return"[object Array]"===Y(r)},q=/./;function D(r){return"boolean"==typeof r}var H=Boolean,J=Boolean.prototype.toString,K=L();function Q(r){return"object"==typeof r&&(r instanceof H||(K?function(r){try{return J.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===Y(r)))}function rr(r){return D(r)||Q(r)}B(rr,"isPrimitive",D),B(rr,"isObject",Q);var er="object"==typeof self?self:null,tr="object"==typeof window?window:null,nr="object"==typeof globalThis?globalThis:null,or=function(r){if(arguments.length){if(!D(r))throw new TypeError(k("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return new Function("return this;")()}if(nr)return nr;if(er)return er;if(tr)return tr;throw new Error("unexpected error. Unable to resolve global object.")}(),ir=or.document&&or.document.childNodes,ar=Int8Array;function ur(){return/^\s*function\s*([^(]*)/i}var cr=/^\s*function\s*([^(]*)/i;function fr(r){return null!==r&&"object"==typeof r}B(ur,"REGEXP",cr);var lr=function(r){if("function"!=typeof r)throw new TypeError(k("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!z(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(fr);function sr(r){var e,t,n,o;if(("Object"===(t=Y(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=cr.exec(n.toString()))return e[1]}return fr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}B(fr,"isObjectLikeArray",lr);var pr="function"==typeof q||"object"==typeof ar||"function"==typeof ir?function(r){return sr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"==(e=typeof r)?sr(r).toLowerCase():e};function gr(r){return"function"===pr(r)}var dr,hr=Object,yr=Object.getPrototypeOf;dr=gr(Object.getPrototypeOf)?yr:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===Y(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var br=dr,vr=Object.prototype;function mr(r){var e;return!!function(r){return"object"==typeof r&&null!==r&&!z(r)}(r)&&(e=function(r){return null==r?null:(r=hr(r),br(r))}(r),!e||!U(r,"constructor")&&U(e,"constructor")&&gr(e.constructor)&&"[object Function]"===Y(e.constructor)&&U(e,"isPrototypeOf")&&gr(e.isPrototypeOf)&&(e===vr||function(r){var e;for(e in r)if(!U(r,e))return!1;return!0}(r)))}var wr=["row-major","column-major"];function jr(){return wr.slice()}var _r=["row-major","column-major"];function Er(){return{"row-major":101,"column-major":102}}B((function(){return _r.slice()}),"enum",Er);var Or={"row-major":101,"column-major":102};B(jr,"enum",(function(){return{"row-major":Or["row-major"],"column-major":Or["column-major"]}}));var Sr=jr(),Tr=Sr.length,xr=Math.floor;function Ir(r){return xr(r)===r}var kr=9007199254740991;function Fr(r){return"number"==typeof r}var Pr=Number,Vr=Pr.prototype.toString,Ar=L();function Cr(r){return"object"==typeof r&&(r instanceof Pr||(Ar?function(r){try{return Vr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===Y(r)))}function $r(r){return Fr(r)||Cr(r)}B($r,"isPrimitive",Fr),B($r,"isObject",Cr);var Nr=Number.POSITIVE_INFINITY,Rr=Pr.NEGATIVE_INFINITY;function Br(r){return r<Nr&&r>Rr&&Ir(r)}function Gr(r){return Fr(r)&&Br(r)}function Lr(r){return Cr(r)&&Br(r.valueOf())}function Zr(r){return Gr(r)||Lr(r)}function Mr(r){return Gr(r)&&r>=0}function Ur(r){return Lr(r)&&r.valueOf()>=0}function Wr(r){return Mr(r)||Ur(r)}B(Zr,"isPrimitive",Gr),B(Zr,"isObject",Lr),B(Wr,"isPrimitive",Mr),B(Wr,"isObject",Ur);var Xr="function"==typeof W&&"symbol"==typeof W("foo")&&U(W,"iterator")&&"symbol"==typeof W.iterator?Symbol.iterator:null;function Yr(r){return function(r,e){var t,n;for(t=[],n=0;n<e;n++)t.push(r);return t}(0,r)}var zr="row-major";function qr(r,e,t,n,o){var i=r.length;if(0===i)return null;if(n<0){if((n+=i)<0)return null}else if(n>=i)return null;return e===zr?function(r,e,t,n,o){var i,a;for(i=r-1;i>n;i--)o[i]=t[i];for(i=n;i>=0&&(a=(t[i]+1)%e[i],o[i]=a,!(a>0));i--);for(i-=1;i>=0;i--)o[i]=t[i];return o}(i,r,t,n,o):function(r,e,t,n,o){var i,a;for(i=0;i<n;i++)o[i]=t[i];for(i=n;i<r&&(a=(t[i]+1)%e[i],o[i]=a,!(a>0));i++);for(i+=1;i<r;i++)o[i]=t[i];return o}(i,r,t,n,o)}function Dr(){var r,e=arguments,t="https://stdlib.io/e/"+e[0]+"?";for(r=1;r<e.length;r++)t+="&arg[]="+encodeURIComponent(e[r]);return t}return B((function(r,e,t,n){return qr(r,e,t,n,Yr(r.length))}),"assign",qr),function r(e){var t,n,o,i,a,u,c,f,l,s,p;if(!("object"==typeof(p=e)&&null!==p&&"number"==typeof p.length&&Ir(p.length)&&p.length>=0&&p.length<=kr))throw new TypeError(Dr("1jtF5",e));if(o={order:"row-major"},arguments.length>1){if(!mr(t=arguments[1]))throw new TypeError(Dr("1jt2V",t));if(U(t,"order")){if(!function(r){var e;for(e=0;e<Tr;e++)if(r===Sr[e])return!0;return!1}(t.order))throw new TypeError(Dr("1jt5C","order",t.order));o.order=t.order}}for(n=e.length,f=[],s=0;s<n;s++){if(!Mr(e[s]))throw new TypeError(Dr("1jtF5",e));f.push(e[s])}return 0===(l=function(r){var e,t,n;if(0===(e=r.length))return 0;for(t=1,n=0;n<e;n++)t*=r[n];return t}(f))&&(a=!0),c="row-major"===o.order?n-1:0,s=-1,u=Yr(n),B(i={},"next",(function(){return s+=1,a||s>=l?{done:!0}:(s>0&&(u=qr(f,o.order,u,c,u)),{value:u.slice(),done:!1})})),B(i,"return",(function(r){return a=!0,arguments.length?{value:r,done:!0}:{done:!0}})),Xr&&B(i,Xr,(function(){return r(f,o)})),i}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).nditerIndices=e();
//# sourceMappingURL=browser.js.map
