"use strict";var x=function(n,r){return function(){return r||n((r={exports:{}}).exports,r),r.exports}};var q=x(function(z,c){
var m=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),O=require('@stdlib/assert-is-plain-object/dist'),h=require('@stdlib/ndarray-base-assert-is-order/dist'),j=require('@stdlib/assert-is-collection/dist'),E=require('@stdlib/assert-is-nonnegative-integer/dist').isPrimitive,T=require('@stdlib/assert-has-own-property/dist'),l=require('@stdlib/symbol-iterator/dist'),F=require('@stdlib/array-base-zeros/dist'),I=require('@stdlib/ndarray-base-numel/dist'),N=require('@stdlib/ndarray-base-next-cartesian-index/dist').assign,s=require('@stdlib/error-tools-fmtprodmsg/dist');function g(n){var r,u,i,t,v,a,d,o,f,e;if(!j(n))throw new TypeError(s('1jtF5',n));if(i={order:"row-major"},arguments.length>1){if(r=arguments[1],!O(r))throw new TypeError(s('1jt2V',r));if(T(r,"order")){if(!h(r.order))throw new TypeError(s('1jt5C',"order",r.order));i.order=r.order}}for(u=n.length,o=[],e=0;e<u;e++){if(!E(n[e]))throw new TypeError(s('1jtF5',n));o.push(n[e])}return f=I(o),f===0&&(v=!0),i.order==="row-major"?d=u-1:d=0,e=-1,a=F(u),t={},m(t,"next",w),m(t,"return",p),l&&m(t,l,y),t;function w(){return e+=1,v||e>=f?{done:!0}:(e>0&&(a=N(o,i.order,a,d,a)),{value:a.slice(),done:!1})}function p(b){return v=!0,arguments.length?{value:b,done:!0}:{done:!0}}function y(){return g(o,i)}}c.exports=g
});var P=q();module.exports=P;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
