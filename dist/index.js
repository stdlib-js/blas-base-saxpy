"use strict";var m=function(i,r){return function(){return r||i((r={exports:{}}).exports,r),r.exports}};var j=m(function(G,R){
var s=require('@stdlib/number-float64-base-to-float32/dist'),f=4;function b(i,r,v,n,q,e,o,c){var u,t,x,a;if(i<=0||r===0)return e;if(u=q,t=c,n===1&&o===1){if(x=i%f,x>0)for(a=0;a<x;a++)e[t]+=s(r*v[u]),u+=n,t+=o;if(i<f)return e;for(a=x;a<i;a+=f)e[t]+=s(r*v[u]),e[t+1]+=s(r*v[u+1]),e[t+2]+=s(r*v[u+2]),e[t+3]+=s(r*v[u+3]),u+=f,t+=f;return e}for(a=0;a<i;a++)e[t]+=s(r*v[u]),u+=n,t+=o;return e}R.exports=b
});var E=m(function(H,y){
var _=require('@stdlib/strided-base-stride2offset/dist'),d=j();function g(i,r,v,n,q,e){var o,c;return i<=0||r===0?q:(o=_(i,n),c=_(i,e),d(i,r,v,n,o,q,e,c))}y.exports=g
});var O=m(function(I,M){
var k=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),F=E(),w=j();k(F,"ndarray",w);M.exports=F
});var z=require("path").join,A=require('@stdlib/utils-try-require/dist'),B=require('@stdlib/assert-is-error/dist'),C=O(),p,T=A(z(__dirname,"./native.js"));B(T)?p=C:p=T;module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
