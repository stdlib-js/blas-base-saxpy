"use strict";var m=function(i,r){return function(){return r||i((r={exports:{}}).exports,r),r.exports}};var j=m(function(H,R){
var f=require('@stdlib/number-float64-base-to-float32/dist'),o=4;function g(i,r,a,n,q,e,s,c){var u,t,x,v;if(i<=0||r===0)return e;if(u=q,t=c,n===1&&s===1){if(x=i%o,x>0)for(v=0;v<x;v++)e[t]+=f(r*a[u]),u+=n,t+=s;if(i<o)return e;for(v=x;v<i;v+=o)e[t]+=f(r*a[u]),e[t+1]+=f(r*a[u+1]),e[t+2]+=f(r*a[u+2]),e[t+3]+=f(r*a[u+3]),u+=o,t+=o;return e}for(v=0;v<i;v++)e[t]+=f(r*a[u]),u+=n,t+=s;return e}R.exports=g
});var E=m(function(I,y){
var _=require('@stdlib/strided-base-stride2offset/dist'),k=j();function w(i,r,a,n,q,e){var s,c;return i<=0||r===0?q:(s=_(i,n),c=_(i,e),k(i,r,a,n,s,q,e,c))}y.exports=w
});var b=m(function(J,O){
var z=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),M=E(),A=j();z(M,"ndarray",A);O.exports=M
});var B=require("path").join,C=require('@stdlib/utils-try-require/dist'),D=require('@stdlib/assert-is-error/dist'),F=b(),p,d=C(B(__dirname,"./native.js"));D(d)?p=F:p=d;module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
