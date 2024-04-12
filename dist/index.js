"use strict";var F=function(i,e){return function(){return e||i((e={exports:{}}).exports,e),e.exports}};var _=F(function(J,T){
var q=require('@stdlib/number-float64-base-to-float32/dist'),M=4;function x(i,e,f,t,o,u){var a,s,v,r;if(i<=0||e===0)return o;if(t===1&&u===1){if(v=i%M,v>0)for(r=0;r<v;r++)o[r]+=q(e*f[r]);if(i<M)return o;for(r=v;r<i;r+=M)o[r]+=q(e*f[r]),o[r+1]+=q(e*f[r+1]),o[r+2]+=q(e*f[r+2]),o[r+3]+=q(e*f[r+3]);return o}for(t<0?a=(1-i)*t:a=0,u<0?s=(1-i)*u:s=0,r=0;r<i;r++)o[s]+=q(e*f[a]),a+=t,s+=u;return o}T.exports=x
});var O=F(function(K,E){
var c=require('@stdlib/number-float64-base-to-float32/dist'),m=4;function z(i,e,f,t,o,u,a,s){var v,r,j,n;if(i<=0||e===0)return u;if(v=o,r=s,t===1&&a===1){if(j=i%m,j>0)for(n=0;n<j;n++)u[r]+=c(e*f[v]),v+=t,r+=a;if(i<m)return u;for(n=j;n<i;n+=m)u[r]+=c(e*f[v]),u[r+1]+=c(e*f[v+1]),u[r+2]+=c(e*f[v+2]),u[r+3]+=c(e*f[v+3]),v+=m,r+=m;return u}for(n=0;n<i;n++)u[r]+=c(e*f[v]),v+=t,r+=a;return u}E.exports=z
});var k=F(function(L,g){
var A=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),b=_(),B=O();A(b,"ndarray",B);g.exports=b
});var C=require("path").join,D=require('@stdlib/utils-try-require/dist'),G=require('@stdlib/assert-is-error/dist'),H=k(),R,w=D(C(__dirname,"./native.js"));G(w)?R=H:R=w;module.exports=R;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
