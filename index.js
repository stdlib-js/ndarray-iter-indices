// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).nditerIndices=e()}(this,(function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function o(r,e,t){var o=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(o=!0,r=r.substr(1)),r=t?r+n(i):n(i)+r,o&&(r="-"+r)),r}var i=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var e,n,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(n=(-u).toString(e),r.precision&&(n=o(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(e),u||r.precision?r.precision&&(n=o(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):i.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function c(r){return"string"==typeof r}var f=Math.abs,l=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,b=/^(\d+)$/,y=/^(\d+)e/,v=/\.0$/,h=/\.0*e/,m=/(\..*[^0])0*e/;function w(r){var e,n,o=parseFloat(r.arg);if(!isFinite(o)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);o=r.arg}switch(r.specifier){case"e":case"E":n=o.toExponential(r.precision);break;case"f":case"F":n=o.toFixed(r.precision);break;case"g":case"G":f(o)<1e-4?((e=r.precision)>0&&(e-=1),n=o.toExponential(e)):n=o.toPrecision(r.precision),r.alternate||(n=p.call(n,m,"$1e"),n=p.call(n,h,"e"),n=p.call(n,v,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=p.call(n,g,"e+0$1"),n=p.call(n,d,"e-0$1"),r.alternate&&(n=p.call(n,b,"$1."),n=p.call(n,y,"$1.e")),o>=0&&r.sign&&(n=r.sign+n),n=r.specifier===s.call(r.specifier)?s.call(n):l.call(n)}function j(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function _(r,e,t){var n=e-r.length;return n<0?r:r=t?r+j(n):j(n)+r}var E=String.fromCharCode,O=isNaN,S=Array.isArray;function T(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function x(r){var e,t,n,i,a,f,l,s,p;if(!S(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",l=1,s=0;s<r.length;s++)if(c(n=r[s]))f+=n;else{if(e=void 0!==n.precision,!(n=T(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(i=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,O(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,O(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!O(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=O(a)?String(n.arg):E(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=w(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=_(n.arg,n.width,n.padRight)),f+=n.arg||"",l+=1}return f}var k=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function I(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function V(r){var e,t,n,o;for(t=[],o=0,n=k.exec(r);n;)(e=r.slice(o,k.lastIndex-n[0].length)).length&&t.push(e),t.push(I(n)),o=k.lastIndex,n=k.exec(r);return(e=r.slice(o)).length&&t.push(e),t}function A(r){return"string"==typeof r}function F(r){var e,t,n;if(!A(r))throw new TypeError(F("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=V(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return x.apply(null,t)}var P,N=Object.prototype,$=N.toString,C=N.__defineGetter__,B=N.__defineSetter__,R=N.__lookupGetter__,G=N.__lookupSetter__;P=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===$.call(r))throw new TypeError(F("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===$.call(t))throw new TypeError(F("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&(R.call(r,e)||G.call(r,e)?(n=r.__proto__,r.__proto__=N,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&C&&C.call(r,e,t.get),a&&B&&B.call(r,e,t.set),r};var L=P;function Z(r,e,t){L(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var M="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function W(){return M&&"symbol"==typeof Symbol.toStringTag}var U=Object.prototype.toString;var X=Object.prototype.hasOwnProperty;function z(r,e){return null!=r&&X.call(r,e)}var Y="function"==typeof Symbol?Symbol:void 0,q="function"==typeof Y?Y.toStringTag:"";var D=W()?function(r){var e,t,n;if(null==r)return U.call(r);t=r[q],e=z(r,q);try{r[q]=void 0}catch(e){return U.call(r)}return n=U.call(r),e?r[q]=t:delete r[q],n}:function(r){return U.call(r)};var H=Array.isArray?Array.isArray:function(r){return"[object Array]"===D(r)};var J=/./;function K(r){return"boolean"==typeof r}var Q=Boolean,rr=Boolean.prototype.toString;var er=W();function tr(r){return"object"==typeof r&&(r instanceof Q||(er?function(r){try{return rr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===D(r)))}function nr(r){return K(r)||tr(r)}function or(){return new Function("return this;")()}Z(nr,"isPrimitive",K),Z(nr,"isObject",tr);var ir="object"==typeof self?self:null,ar="object"==typeof window?window:null,ur="object"==typeof global?global:null,cr="object"==typeof globalThis?globalThis:null;var fr=function(r){if(arguments.length){if(!K(r))throw new TypeError(F("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return or()}if(cr)return cr;if(ir)return ir;if(ar)return ar;if(ur)return ur;throw new Error("unexpected error. Unable to resolve global object.")}(),lr=fr.document&&fr.document.childNodes,sr=Int8Array;function pr(){return/^\s*function\s*([^(]*)/i}var gr=/^\s*function\s*([^(]*)/i;function dr(r){return null!==r&&"object"==typeof r}Z(pr,"REGEXP",gr);var br=function(r){if("function"!=typeof r)throw new TypeError(F("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!H(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(dr);function yr(r){var e,t,n,o;if(("Object"===(t=D(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=gr.exec(n.toString()))return e[1]}return dr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}Z(dr,"isObjectLikeArray",br);var vr="function"==typeof J||"object"==typeof sr||"function"==typeof lr?function(r){return yr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?yr(r).toLowerCase():e};function hr(r){return"function"===vr(r)}var mr,wr=Object,jr=Object.getPrototypeOf;mr=hr(Object.getPrototypeOf)?jr:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===D(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var _r=mr;var Er=Object.prototype;function Or(r){var e;return!!function(r){return"object"==typeof r&&null!==r&&!H(r)}(r)&&(e=function(r){return null==r?null:(r=wr(r),_r(r))}(r),!e||!z(r,"constructor")&&z(e,"constructor")&&hr(e.constructor)&&"[object Function]"===D(e.constructor)&&z(e,"isPrototypeOf")&&hr(e.isPrototypeOf)&&(e===Er||function(r){var e;for(e in r)if(!z(r,e))return!1;return!0}(r)))}var Sr=["row-major","column-major"];function Tr(){return Sr.slice()}Z(Tr,"enum",(function(){return{"row-major":1,"column-major":2}}));var xr=Tr(),kr=xr.length;function Ir(r){var e;for(e=0;e<kr;e++)if(r===xr[e])return!0;return!1}var Vr=Math.floor;function Ar(r){return Vr(r)===r}function Fr(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&Ar(r.length)&&r.length>=0&&r.length<=9007199254740991}function Pr(r){return"number"==typeof r}var Nr=Number,$r=Nr.prototype.toString;var Cr=W();function Br(r){return"object"==typeof r&&(r instanceof Nr||(Cr?function(r){try{return $r.call(r),!0}catch(r){return!1}}(r):"[object Number]"===D(r)))}function Rr(r){return Pr(r)||Br(r)}Z(Rr,"isPrimitive",Pr),Z(Rr,"isObject",Br);var Gr=Number.POSITIVE_INFINITY,Lr=Nr.NEGATIVE_INFINITY;function Zr(r){return r<Gr&&r>Lr&&Ar(r)}function Mr(r){return Pr(r)&&Zr(r)}function Wr(r){return Br(r)&&Zr(r.valueOf())}function Ur(r){return Mr(r)||Wr(r)}function Xr(r){return Mr(r)&&r>=0}function zr(r){return Wr(r)&&r.valueOf()>=0}function Yr(r){return Xr(r)||zr(r)}Z(Ur,"isPrimitive",Mr),Z(Ur,"isObject",Wr),Z(Yr,"isPrimitive",Xr),Z(Yr,"isObject",zr);var qr="function"==typeof Y&&"symbol"==typeof Y("foo")&&z(Y,"iterator")&&"symbol"==typeof Y.iterator?Symbol.iterator:null;function Dr(r){return function(r,e){var t,n;for(t=[],n=0;n<e;n++)t.push(r);return t}(0,r)}function Hr(r){var e,t,n;if(0===(e=r.length))return 0;for(t=1,n=0;n<e;n++)t*=r[n];return t}function Jr(r,e,t,n,o){var i=r.length;if(0===i)return null;if(n<0){if((n+=i)<0)return null}else if(n>=i)return null;return"row-major"===e?function(r,e,t,n,o){var i,a;for(i=r-1;i>n;i--)o[i]=t[i];for(i=n;i>=0&&(a=(t[i]+1)%e[i],o[i]=a,!(a>0));i--);for(i-=1;i>=0;i--)o[i]=t[i];return o}(i,r,t,n,o):function(r,e,t,n,o){var i,a;for(i=0;i<n;i++)o[i]=t[i];for(i=n;i<r&&(a=(t[i]+1)%e[i],o[i]=a,!(a>0));i++);for(i+=1;i<r;i++)o[i]=t[i];return o}(i,r,t,n,o)}return Z((function(r,e,t,n){return Jr(r,e,t,n,Dr(r.length))}),"assign",Jr),function r(e){var t,n,o,i,a,u,c,f,l,s;if(!Fr(e))throw new TypeError(F("invalid argument. First argument must be an array of nonnegative integers. Value: `%s`.",e));if(o={order:"row-major"},arguments.length>1){if(!Or(t=arguments[1]))throw new TypeError(F("invalid argument. Options argument must be an object. Value: `%s`.",t));if(z(t,"order")){if(!Ir(t.order))throw new TypeError(F("invalid option. `%s` option must be a recognized order. Option: `%s`.","order",t.order));o.order=t.order}}for(n=e.length,f=[],s=0;s<n;s++){if(!Xr(e[s]))throw new TypeError(F("invalid argument. First argument must be an array of nonnegative integers. Value: `%s`.",e));f.push(e[s])}return 0===(l=Hr(f))&&(a=!0),c="row-major"===o.order?n-1:0,s=-1,u=Dr(n),Z(i={},"next",p),Z(i,"return",g),qr&&Z(i,qr,d),i;function p(){return s+=1,a||s>=l?{done:!0}:(s>0&&(u=Jr(e,o.order,u,c,u)),{value:u.slice(),done:!1})}function g(r){return a=!0,arguments.length?{value:r,done:!0}:{done:!0}}function d(){return r(f,o)}}}));
//# sourceMappingURL=index.js.map
