"use strict";var m=function(i,r){return function(){try{return r||i((r={exports:{}}).exports,r),r.exports}catch(u){throw (r=0, u)}};};var j=m(function(H,R){
var f=require('@stdlib/number-float64-base-to-float32/dist'),o=4;function g(i,r,u,n,q,e,s,c){var t,v,x,a;if(i<=0||r===0)return e;if(t=q,v=c,n===1&&s===1){if(x=i%o,x>0)for(a=0;a<x;a++)e[v]+=f(r*u[t]),t+=n,v+=s;if(i<o)return e;for(a=x;a<i;a+=o)e[v]+=f(r*u[t]),e[v+1]+=f(r*u[t+1]),e[v+2]+=f(r*u[t+2]),e[v+3]+=f(r*u[t+3]),t+=o,v+=o;return e}for(a=0;a<i;a++)e[v]+=f(r*u[t]),t+=n,v+=s;return e}R.exports=g
});var E=m(function(I,y){
var _=require('@stdlib/strided-base-stride2offset/dist'),k=j();function w(i,r,u,n,q,e){var s,c;return i<=0||r===0?q:(s=_(i,n),c=_(i,e),k(i,r,u,n,s,q,e,c))}y.exports=w
});var b=m(function(J,O){
var z=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),M=E(),A=j();z(M,"ndarray",A);O.exports=M
});var B=require("path").join,C=require('@stdlib/utils-try-require/dist'),D=require('@stdlib/assert-is-error/dist'),F=b(),p,d=C(B(__dirname,"./native.js"));D(d)?p=F:p=d;module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
