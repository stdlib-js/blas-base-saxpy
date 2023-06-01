// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-to-float32@v0.0.7-esm/index.mjs";function t(r,t,n,f,i,o){var s,a,u,d;if(r<=0||0===t)return i;if(1===f&&1===o){if((u=r%4)>0)for(d=0;d<u;d++)i[d]+=e(t*n[d]);if(r<4)return i;for(d=u;d<r;d+=4)i[d]+=e(t*n[d]),i[d+1]+=e(t*n[d+1]),i[d+2]+=e(t*n[d+2]),i[d+3]+=e(t*n[d+3]);return i}for(s=f<0?(1-r)*f:0,a=o<0?(1-r)*o:0,d=0;d<r;d++)i[a]+=e(t*n[s]),s+=f,a+=o;return i}function n(r,t,n,f,i,o,s,a){var u,d,l,m;if(r<=0||0===t)return o;if(u=i,d=a,1===f&&1===s){if((l=r%4)>0)for(m=0;m<l;m++)o[d]+=e(t*n[u]),u+=f,d+=s;if(r<4)return o;for(m=l;m<r;m+=4)o[d]+=e(t*n[u]),o[d+1]+=e(t*n[u+1]),o[d+2]+=e(t*n[u+2]),o[d+3]+=e(t*n[u+3]),u+=4,d+=4;return o}for(m=0;m<r;m++)o[d]+=e(t*n[u]),u+=f,d+=s;return o}r(t,"ndarray",n);export{t as default,n as ndarray};
//# sourceMappingURL=index.mjs.map
