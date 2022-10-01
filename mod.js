// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t,e=Object.defineProperty,o=Object.prototype,n=o.toString,a=o.__defineGetter__,l=o.__defineSetter__,u=o.__lookupGetter__,f=o.__lookupSetter__;t=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,t,e){var i,c,y,p;if("object"!=typeof r||null===r||"[object Array]"===n.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof e||null===e||"[object Array]"===n.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((c="value"in e)&&(u.call(r,t)||f.call(r,t)?(i=r.__proto__,r.__proto__=o,delete r[t],r[t]=e.value,r.__proto__=i):r[t]=e.value),y="get"in e,p="set"in e,c&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&a&&a.call(r,t,e.get),p&&l&&l.call(r,t,e.set),r};var i=t;var c="function"==typeof Math.fround?Math.fround:null;var y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var p=Object.prototype.toString;var _=Object.prototype.hasOwnProperty;var b,v="function"==typeof Symbol?Symbol.toStringTag:"";b=y&&"symbol"==typeof Symbol.toStringTag?function(r){var t,e,o,n,a;if(null==r)return p.call(r);e=r[v],a=v,t=null!=(n=r)&&_.call(n,a);try{r[v]=void 0}catch(t){return p.call(r)}return o=p.call(r),t?r[v]=e:delete r[v],o}:function(r){return p.call(r)};var d=b,m="function"==typeof Float32Array;var s=Number.POSITIVE_INFINITY,g="function"==typeof Float32Array?Float32Array:null;var j,w="function"==typeof Float32Array?Float32Array:void 0;j=function(){var r,t,e;if("function"!=typeof g)return!1;try{t=new g([1,3.14,-3.14,5e40]),e=t,r=(m&&e instanceof Float32Array||"[object Float32Array]"===d(e))&&1===t[0]&&3.140000104904175===t[1]&&-3.140000104904175===t[2]&&t[3]===s}catch(t){r=!1}return r}()?w:function(){throw new Error("not implemented")};var S=new j(1);var h="function"==typeof c?c:function(r){return S[0]=r,S[0]};function A(r,t,e,o,n,a){var l,u,f,i;if(r<=0||0===t)return n;if(1===o&&1===a){if((f=r%4)>0)for(i=0;i<f;i++)n[i]+=h(t*e[i]);if(r<4)return n;for(i=f;i<r;i+=4)n[i]+=h(t*e[i]),n[i+1]+=h(t*e[i+1]),n[i+2]+=h(t*e[i+2]),n[i+3]+=h(t*e[i+3]);return n}for(l=o<0?(1-r)*o:0,u=a<0?(1-r)*a:0,i=0;i<r;i++)n[u]+=h(t*e[l]),l+=o,u+=a;return n}function F(r,t,e,o,n,a,l,u){var f,i,c,y;if(r<=0||0===t)return a;if(f=n,i=u,1===o&&1===l){if((c=r%4)>0)for(y=0;y<c;y++)a[i]+=h(t*e[f]),f+=o,i+=l;if(r<4)return a;for(y=c;y<r;y+=4)a[i]+=h(t*e[f]),a[i+1]+=h(t*e[f+1]),a[i+2]+=h(t*e[f+2]),a[i+3]+=h(t*e[f+3]),f+=4,i+=4;return a}for(y=0;y<r;y++)a[i]+=h(t*e[f]),f+=o,i+=l;return a}i(A,"ndarray",{configurable:!1,enumerable:!1,writable:!1,value:F});export{A as default,F as ndarray};
//# sourceMappingURL=mod.js.map
