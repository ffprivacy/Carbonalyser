// lib/d3/d3-array.js
// https://d3js.org/d3-array/ v3.1.6 Copyright 2010-2022 Mike Bostock
!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((t="undefined"!=typeof globalThis?globalThis:t||self).d3=t.d3||{})}(this,(function(t){"use strict";function n(t,n){return null==t||null==n?NaN:t<n?-1:t>n?1:t>=n?0:NaN}function r(t,n){return null==t||null==n?NaN:n<t?-1:n>t?1:n>=t?0:NaN}function e(t){let e,f,i;function u(t,n,r=0,o=t.length){if(r<o){if(0!==e(n,n))return o;do{const e=r+o>>>1;f(t[e],n)<0?r=e+1:o=e}while(r<o)}return r}return 2!==t.length?(e=n,f=(r,e)=>n(t(r),e),i=(n,r)=>t(n)-r):(e=t===n||t===r?t:o,f=t,i=t),{left:u,center:function(t,n,r=0,e=t.length){const o=u(t,n,r,e-1);return o>r&&i(t[o-1],n)>-i(t[o],n)?o-1:o},right:function(t,n,r=0,o=t.length){if(r<o){if(0!==e(n,n))return o;do{const e=r+o>>>1;f(t[e],n)<=0?r=e+1:o=e}while(r<o)}return r}}}function o(){return 0}function f(t){return null===t?NaN:+t}const i=e(n),u=i.right,l=i.left,s=e(f).center;var c=u;function a(t,n){let r=0;if(void 0===n)for(let n of t)null!=n&&(n=+n)>=n&&++r;else{let e=-1;for(let o of t)null!=(o=n(o,++e,t))&&(o=+o)>=o&&++r}return r}function h(t){return 0|t.length}function d(t){return!(t>0)}function p(t){return"object"!=typeof t||"length"in t?t:Array.from(t)}function y(t,n){let r,e=0,o=0,f=0;if(void 0===n)for(let n of t)null!=n&&(n=+n)>=n&&(r=n-o,o+=r/++e,f+=r*(n-o));else{let i=-1;for(let u of t)null!=(u=n(u,++i,t))&&(u=+u)>=u&&(r=u-o,o+=r/++e,f+=r*(u-o))}if(e>1)return f/(e-1)}function v(t,n){const r=y(t,n);return r?Math.sqrt(r):r}function m(t,n){let r,e;if(void 0===n)for(const n of t)null!=n&&(void 0===r?n>=n&&(r=e=n):(r>n&&(r=n),e<n&&(e=n)));else{let o=-1;for(let f of t)null!=(f=n(f,++o,t))&&(void 0===r?f>=f&&(r=e=f):(r>f&&(r=f),e<f&&(e=f)))}return[r,e]}class g{constructor(){this._partials=new Float64Array(32),this._n=0}add(t){const n=this._partials;let r=0;for(let e=0;e<this._n&&e<32;e++){const o=n[e],f=t+o,i=Math.abs(t)<Math.abs(o)?t-(f-o):o-(f-t);i&&(n[r++]=i),t=f}return n[r]=t,this._n=r+1,this}valueOf(){const t=this._partials;let n,r,e,o=this._n,f=0;if(o>0){for(f=t[--o];o>0&&(n=f,r=t[--o],f=n+r,e=r-(f-n),!e););o>0&&(e<0&&t[o-1]<0||e>0&&t[o-1]>0)&&(r=2*e,n=f+r,r==n-f&&(f=n))}return f}}class InternMap extends Map{constructor(t,n=A){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:n}}),null!=t)for(const[n,r]of t)this.set(n,r)}get(t){return super.get(M(this,t))}has(t){return super.has(M(this,t))}set(t,n){return super.set(w(this,t),n)}delete(t){return super.delete(b(this,t))}}class InternSet extends Set{constructor(t,n=A){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:n}}),null!=t)for(const n of t)this.add(n)}has(t){return super.has(M(this,t))}add(t){return super.add(w(this,t))}delete(t){return super.delete(b(this,t))}}function M({_intern:t,_key:n},r){const e=n(r);return t.has(e)?t.get(e):r}function w({_intern:t,_key:n},r){const e=n(r);return t.has(e)?t.get(e):(t.set(e,r),r)}function b({_intern:t,_key:n},r){const e=n(r);return t.has(e)&&(r=t.get(e),t.delete(e)),r}function A(t){return null!==t&&"object"==typeof t?t.valueOf():t}function x(t){return t}function _(t,...n){return j(t,x,x,n)}function N(t,...n){return j(t,Array.from,x,n)}function S(t,n){for(let r=1,e=n.length;r<e;++r)t=t.flatMap((t=>t.pop().map((([n,r])=>[...t,n,r]))));return t}function k(t,n,...r){return j(t,x,n,r)}function E(t,n,...r){return j(t,Array.from,n,r)}function T(t){if(1!==t.length)throw new Error("duplicate key");return t[0]}function j(t,n,r,e){return function t(o,f){if(f>=e.length)return r(o);const i=new InternMap,u=e[f++];let l=-1;for(const t of o){const n=u(t,++l,o),r=i.get(n);r?r.push(t):i.set(n,[t])}for(const[n,r]of i)i.set(n,t(r,f));return n(i)}(t,0)}function F(t,n){return Array.from(n,(n=>t[n]))}function q(t,...n){if("function"!=typeof t[Symbol.iterator])throw new TypeError("values is not iterable");t=Array.from(t);let[r]=n;if(r&&2!==r.length||n.length>1){const e=Uint32Array.from(t,((t,n)=>n));return n.length>1?(n=n.map((n=>t.map(n))),e.sort(((t,r)=>{for(const e of n){const n=I(e[t],e[r]);if(n)return n}}))):(r=t.map(r),e.sort(((t,n)=>I(r[t],r[n])))),F(t,e)}return t.sort(O(r))}function O(t=n){if(t===n)return I;if("function"!=typeof t)throw new TypeError("compare is not a function");return(n,r)=>{const e=t(n,r);return e||0===e?e:(0===t(r,r))-(0===t(n,n))}}function I(t,n){return(null==t||!(t>=t))-(null==n||!(n>=n))||(t<n?-1:t>n?1:0)}var L=Array.prototype.slice;function P(t){return()=>t}var R=Math.sqrt(50),U=Math.sqrt(10),z=Math.sqrt(2);function C(t,n,r){var e,o,f,i,u=-1;if(r=+r,(t=+t)===(n=+n)&&r>0)return[t];if((e=n<t)&&(o=t,t=n,n=o),0===(i=D(t,n,r))||!isFinite(i))return[];if(i>0){let r=Math.round(t/i),e=Math.round(n/i);for(r*i<t&&++r,e*i>n&&--e,f=new Array(o=e-r+1);++u<o;)f[u]=(r+u)*i}else{i=-i;let r=Math.round(t*i),e=Math.round(n*i);for(r/i<t&&++r,e/i>n&&--e,f=new Array(o=e-r+1);++u<o;)f[u]=(r+u)/i}return e&&f.reverse(),f}function D(t,n,r){var e=(n-t)/Math.max(0,r),o=Math.floor(Math.log(e)/Math.LN10),f=e/Math.pow(10,o);return o>=0?(f>=R?10:f>=U?5:f>=z?2:1)*Math.pow(10,o):-Math.pow(10,-o)/(f>=R?10:f>=U?5:f>=z?2:1)}function G(t,n,r){let e;for(;;){const o=D(t,n,r);if(o===e||0===o||!isFinite(o))return[t,n];o>0?(t=Math.floor(t/o)*o,n=Math.ceil(n/o)*o):o<0&&(t=Math.ceil(t*o)/o,n=Math.floor(n*o)/o),e=o}}function B(t){return Math.ceil(Math.log(a(t))/Math.LN2)+1}function H(){var t=x,n=m,r=B;function e(e){Array.isArray(e)||(e=Array.from(e));var o,f,i,u=e.length,l=new Array(u);for(o=0;o<u;++o)l[o]=t(e[o],o,e);var s=n(l),a=s[0],h=s[1],d=r(l,a,h);if(!Array.isArray(d)){const t=h,r=+d;if(n===m&&([a,h]=G(a,h,r)),(d=C(a,h,r))[0]<=a&&(i=D(a,h,r)),d[d.length-1]>=h)if(t>=h&&n===m){const t=D(a,h,r);isFinite(t)&&(t>0?h=(Math.floor(h/t)+1)*t:t<0&&(h=(Math.ceil(h*-t)+1)/-t))}else d.pop()}for(var p=d.length;d[0]<=a;)d.shift(),--p;for(;d[p-1]>h;)d.pop(),--p;var y,v=new Array(p+1);for(o=0;o<=p;++o)(y=v[o]=[]).x0=o>0?d[o-1]:a,y.x1=o<p?d[o]:h;if(isFinite(i)){if(i>0)for(o=0;o<u;++o)null!=(f=l[o])&&a<=f&&f<=h&&v[Math.min(p,Math.floor((f-a)/i))].push(e[o]);else if(i<0)for(o=0;o<u;++o)if(null!=(f=l[o])&&a<=f&&f<=h){const t=Math.floor((a-f)*i);v[Math.min(p,t+(d[t]<=f))].push(e[o])}}else for(o=0;o<u;++o)null!=(f=l[o])&&a<=f&&f<=h&&v[c(d,f,0,p)].push(e[o]);return v}return e.value=function(n){return arguments.length?(t="function"==typeof n?n:P(n),e):t},e.domain=function(t){return arguments.length?(n="function"==typeof t?t:P([t[0],t[1]]),e):n},e.thresholds=function(t){return arguments.length?(r="function"==typeof t?t:Array.isArray(t)?P(L.call(t)):P(t),e):r},e}function J(t,n){let r;if(void 0===n)for(const n of t)null!=n&&(r<n||void 0===r&&n>=n)&&(r=n);else{let e=-1;for(let o of t)null!=(o=n(o,++e,t))&&(r<o||void 0===r&&o>=o)&&(r=o)}return r}function K(t,n){let r;if(void 0===n)for(const n of t)null!=n&&(r>n||void 0===r&&n>=n)&&(r=n);else{let e=-1;for(let o of t)null!=(o=n(o,++e,t))&&(r>o||void 0===r&&o>=o)&&(r=o)}return r}function Q(t,n,r=0,e=t.length-1,o){for(o=void 0===o?I:O(o);e>r;){if(e-r>600){const f=e-r+1,i=n-r+1,u=Math.log(f),l=.5*Math.exp(2*u/3),s=.5*Math.sqrt(u*l*(f-l)/f)*(i-f/2<0?-1:1);Q(t,n,Math.max(r,Math.floor(n-i*l/f+s)),Math.min(e,Math.floor(n+(f-i)*l/f+s)),o)}const f=t[n];let i=r,u=e;for(V(t,r,n),o(t[e],f)>0&&V(t,r,e);i<u;){for(V(t,i,u),++i,--u;o(t[i],f)<0;)++i;for(;o(t[u],f)>0;)--u}0===o(t[r],f)?V(t,r,u):(++u,V(t,u,e)),u<=n&&(r=u+1),n<=u&&(e=u-1)}return t}function V(t,n,r){const e=t[n];t[n]=t[r],t[r]=e}function W(t,n,r){if(t=Float64Array.from(function*(t,n){if(void 0===n)for(let n of t)null!=n&&(n=+n)>=n&&(yield n);else{let r=-1;for(let e of t)null!=(e=n(e,++r,t))&&(e=+e)>=e&&(yield e)}}(t,r)),e=t.length){if((n=+n)<=0||e<2)return K(t);if(n>=1)return J(t);var e,o=(e-1)*n,f=Math.floor(o),i=J(Q(t,f).subarray(0,f+1));return i+(K(t.subarray(f+1))-i)*(o-f)}}function X(t,n){let r,e=-1,o=-1;if(void 0===n)for(const n of t)++o,null!=n&&(r<n||void 0===r&&n>=n)&&(r=n,e=o);else for(let f of t)null!=(f=n(f,++o,t))&&(r<f||void 0===r&&f>=f)&&(r=f,e=o);return e}function Y(t,n){let r,e=-1,o=-1;if(void 0===n)for(const n of t)++o,null!=n&&(r>n||void 0===r&&n>=n)&&(r=n,e=o);else for(let f of t)null!=(f=n(f,++o,t))&&(r>f||void 0===r&&f>=f)&&(r=f,e=o);return e}function Z(t,n){return[t,n]}function $(t,r=n){if(1===r.length)return Y(t,r);let e,o=-1,f=-1;for(const n of t)++f,(o<0?0===r(n,n):r(n,e)<0)&&(e=n,o=f);return o}var tt=nt(Math.random);function nt(t){return function(n,r=0,e=n.length){let o=e-(r=+r);for(;o;){const e=t()*o--|0,f=n[o+r];n[o+r]=n[e+r],n[e+r]=f}return n}}function rt(t){if(!(o=t.length))return[];for(var n=-1,r=K(t,et),e=new Array(r);++n<r;)for(var o,f=-1,i=e[n]=new Array(o);++f<o;)i[f]=t[f][n];return e}function et(t){return t.length}function ot(t){return t instanceof InternSet?t:new InternSet(t)}function ft(t,n){const r=t[Symbol.iterator](),e=new Set;for(const t of n){const n=it(t);if(e.has(n))continue;let o,f;for(;({value:o,done:f}=r.next());){if(f)return!1;const t=it(o);if(e.add(t),Object.is(n,t))break}}return!0}function it(t){return null!==t&&"object"==typeof t?t.valueOf():t}t.Adder=g,t.InternMap=InternMap,t.InternSet=InternSet,t.ascending=n,t.bin=H,t.bisect=c,t.bisectCenter=s,t.bisectLeft=l,t.bisectRight=u,t.bisector=e,t.count=a,t.cross=function(...t){const n="function"==typeof t[t.length-1]&&function(t){return n=>t(...n)}(t.pop()),r=(t=t.map(p)).map(h),e=t.length-1,o=new Array(e+1).fill(0),f=[];if(e<0||r.some(d))return f;for(;;){f.push(o.map(((n,r)=>t[r][n])));let i=e;for(;++o[i]===r[i];){if(0===i)return n?f.map(n):f;o[i--]=0}}},t.cumsum=function(t,n){var r=0,e=0;return Float64Array.from(t,void 0===n?t=>r+=+t||0:o=>r+=+n(o,e++,t)||0)},t.descending=r,t.deviation=v,t.difference=function(t,...n){t=new InternSet(t);for(const r of n)for(const n of r)t.delete(n);return t},t.disjoint=function(t,n){const r=n[Symbol.iterator](),e=new InternSet;for(const n of t){if(e.has(n))return!1;let t,o;for(;({value:t,done:o}=r.next())&&!o;){if(Object.is(n,t))return!1;e.add(t)}}return!0},t.every=function(t,n){if("function"!=typeof n)throw new TypeError("test is not a function");let r=-1;for(const e of t)if(!n(e,++r,t))return!1;return!0},t.extent=m,t.fcumsum=function(t,n){const r=new g;let e=-1;return Float64Array.from(t,void 0===n?t=>r.add(+t||0):o=>r.add(+n(o,++e,t)||0))},t.filter=function(t,n){if("function"!=typeof n)throw new TypeError("test is not a function");const r=[];let e=-1;for(const o of t)n(o,++e,t)&&r.push(o);return r},t.flatGroup=function(t,...n){return S(N(t,...n),n)},t.flatRollup=function(t,n,...r){return S(E(t,n,...r),r)},t.fsum=function(t,n){const r=new g;if(void 0===n)for(let n of t)(n=+n)&&r.add(n);else{let e=-1;for(let o of t)(o=+n(o,++e,t))&&r.add(o)}return+r},t.greatest=function(t,r=n){let e,o=!1;if(1===r.length){let f;for(const i of t){const t=r(i);(o?n(t,f)>0:0===n(t,t))&&(e=i,f=t,o=!0)}}else for(const n of t)(o?r(n,e)>0:0===r(n,n))&&(e=n,o=!0);return e},t.greatestIndex=function(t,r=n){if(1===r.length)return X(t,r);let e,o=-1,f=-1;for(const n of t)++f,(o<0?0===r(n,n):r(n,e)>0)&&(e=n,o=f);return o},t.group=_,t.groupSort=function(t,r,e){return(2!==r.length?q(k(t,r,e),(([t,r],[e,o])=>n(r,o)||n(t,e))):q(_(t,e),(([t,e],[o,f])=>r(e,f)||n(t,o)))).map((([t])=>t))},t.groups=N,t.histogram=H,t.index=function(t,...n){return j(t,x,T,n)},t.indexes=function(t,...n){return j(t,Array.from,T,n)},t.intersection=function(t,...n){t=new InternSet(t),n=n.map(ot);t:for(const r of t)for(const e of n)if(!e.has(r)){t.delete(r);continue t}return t},t.least=function(t,r=n){let e,o=!1;if(1===r.length){let f;for(const i of t){const t=r(i);(o?n(t,f)<0:0===n(t,t))&&(e=i,f=t,o=!0)}}else for(const n of t)(o?r(n,e)<0:0===r(n,n))&&(e=n,o=!0);return e},t.leastIndex=$,t.map=function(t,n){if("function"!=typeof t[Symbol.iterator])throw new TypeError("values is not iterable");if("function"!=typeof n)throw new TypeError("mapper is not a function");return Array.from(t,((r,e)=>n(r,e,t)))},t.max=J,t.maxIndex=X,t.mean=function(t,n){let r=0,e=0;if(void 0===n)for(let n of t)null!=n&&(n=+n)>=n&&(++r,e+=n);else{let o=-1;for(let f of t)null!=(f=n(f,++o,t))&&(f=+f)>=f&&(++r,e+=f)}if(r)return e/r},t.median=function(t,n){return W(t,.5,n)},t.merge=function(t){return Array.from(function*(t){for(const n of t)yield*n}(t))},t.min=K,t.minIndex=Y,t.mode=function(t,n){const r=new InternMap;if(void 0===n)for(let n of t)null!=n&&n>=n&&r.set(n,(r.get(n)||0)+1);else{let e=-1;for(let o of t)null!=(o=n(o,++e,t))&&o>=o&&r.set(o,(r.get(o)||0)+1)}let e,o=0;for(const[t,n]of r)n>o&&(o=n,e=t);return e},t.nice=G,t.pairs=function(t,n=Z){const r=[];let e,o=!1;for(const f of t)o&&r.push(n(e,f)),e=f,o=!0;return r},t.permute=F,t.quantile=W,t.quantileSorted=function(t,n,r=f){if(e=t.length){if((n=+n)<=0||e<2)return+r(t[0],0,t);if(n>=1)return+r(t[e-1],e-1,t);var e,o=(e-1)*n,i=Math.floor(o),u=+r(t[i],i,t);return u+(+r(t[i+1],i+1,t)-u)*(o-i)}},t.quickselect=Q,t.range=function(t,n,r){t=+t,n=+n,r=(o=arguments.length)<2?(n=t,t=0,1):o<3?1:+r;for(var e=-1,o=0|Math.max(0,Math.ceil((n-t)/r)),f=new Array(o);++e<o;)f[e]=t+e*r;return f},t.rank=function(t,r=n){if("function"!=typeof t[Symbol.iterator])throw new TypeError("values is not iterable");let e=Array.from(t);const o=new Float64Array(e.length);2!==r.length&&(e=e.map(r),r=n);const f=(t,n)=>r(e[t],e[n]);let i,u;return Uint32Array.from(e,((t,n)=>n)).sort(r===n?(t,n)=>I(e[t],e[n]):O(f)).forEach(((t,n)=>{const r=f(t,void 0===i?t:i);r>=0?((void 0===i||r>0)&&(i=t,u=n),o[t]=u):o[t]=NaN})),o},t.reduce=function(t,n,r){if("function"!=typeof n)throw new TypeError("reducer is not a function");const e=t[Symbol.iterator]();let o,f,i=-1;if(arguments.length<3){if(({done:o,value:r}=e.next()),o)return;++i}for(;({done:o,value:f}=e.next()),!o;)r=n(r,f,++i,t);return r},t.reverse=function(t){if("function"!=typeof t[Symbol.iterator])throw new TypeError("values is not iterable");return Array.from(t).reverse()},t.rollup=k,t.rollups=E,t.scan=function(t,n){const r=$(t,n);return r<0?void 0:r},t.shuffle=tt,t.shuffler=nt,t.some=function(t,n){if("function"!=typeof n)throw new TypeError("test is not a function");let r=-1;for(const e of t)if(n(e,++r,t))return!0;return!1},t.sort=q,t.subset=function(t,n){return ft(n,t)},t.sum=function(t,n){let r=0;if(void 0===n)for(let n of t)(n=+n)&&(r+=n);else{let e=-1;for(let o of t)(o=+n(o,++e,t))&&(r+=o)}return r},t.superset=ft,t.thresholdFreedmanDiaconis=function(t,n,r){return Math.ceil((r-n)/(2*(W(t,.75)-W(t,.25))*Math.pow(a(t),-1/3)))},t.thresholdScott=function(t,n,r){return Math.ceil((r-n)*Math.cbrt(a(t))/(3.49*v(t)))},t.thresholdSturges=B,t.tickIncrement=D,t.tickStep=function(t,n,r){var e=Math.abs(n-t)/Math.max(0,r),o=Math.pow(10,Math.floor(Math.log(e)/Math.LN10)),f=e/o;return f>=R?o*=10:f>=U?o*=5:f>=z&&(o*=2),n<t?-o:o},t.ticks=C,t.transpose=rt,t.union=function(...t){const n=new InternSet;for(const r of t)for(const t of r)n.add(t);return n},t.variance=y,t.zip=function(){return rt(arguments)},Object.defineProperty(t,"__esModule",{value:!0})}));

// lib/d3/d3-geo.js
// https://d3js.org/d3-geo/ v3.0.1 Copyright 2010-2021 Mike Bostock, 2008-2012 Charles Karney
!function(n,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("d3-array")):"function"==typeof define&&define.amd?define(["exports","d3-array"],t):t((n="undefined"!=typeof globalThis?globalThis:n||self).d3=n.d3||{},n.d3)}(this,(function(n,t){"use strict";var r=1e-6,e=1e-12,i=Math.PI,o=i/2,u=i/4,a=2*i,c=180/i,l=i/180,f=Math.abs,p=Math.atan,s=Math.atan2,h=Math.cos,g=Math.ceil,v=Math.exp,d=Math.hypot,E=Math.log,y=Math.pow,S=Math.sin,m=Math.sign||function(n){return n>0?1:n<0?-1:0},M=Math.sqrt,x=Math.tan;function w(n){return n>1?0:n<-1?i:Math.acos(n)}function _(n){return n>1?o:n<-1?-o:Math.asin(n)}function N(n){return(n=S(n/2))*n}function A(){}function R(n,t){n&&P.hasOwnProperty(n.type)&&P[n.type](n,t)}var C={Feature:function(n,t){R(n.geometry,t)},FeatureCollection:function(n,t){for(var r=n.features,e=-1,i=r.length;++e<i;)R(r[e].geometry,t)}},P={Sphere:function(n,t){t.sphere()},Point:function(n,t){n=n.coordinates,t.point(n[0],n[1],n[2])},MultiPoint:function(n,t){for(var r=n.coordinates,e=-1,i=r.length;++e<i;)n=r[e],t.point(n[0],n[1],n[2])},LineString:function(n,t){j(n.coordinates,t,0)},MultiLineString:function(n,t){for(var r=n.coordinates,e=-1,i=r.length;++e<i;)j(r[e],t,0)},Polygon:function(n,t){q(n.coordinates,t)},MultiPolygon:function(n,t){for(var r=n.coordinates,e=-1,i=r.length;++e<i;)q(r[e],t)},GeometryCollection:function(n,t){for(var r=n.geometries,e=-1,i=r.length;++e<i;)R(r[e],t)}};function j(n,t,r){var e,i=-1,o=n.length-r;for(t.lineStart();++i<o;)e=n[i],t.point(e[0],e[1],e[2]);t.lineEnd()}function q(n,t){var r=-1,e=n.length;for(t.polygonStart();++r<e;)j(n[r],t,1);t.polygonEnd()}function b(n,t){n&&C.hasOwnProperty(n.type)?C[n.type](n,t):R(n,t)}var z,L,T,O,G,k,F,H,I,W,X,Y,B,D,U,Z,J=new t.Adder,K=new t.Adder,Q={point:A,lineStart:A,lineEnd:A,polygonStart:function(){J=new t.Adder,Q.lineStart=V,Q.lineEnd=$},polygonEnd:function(){var n=+J;K.add(n<0?a+n:n),this.lineStart=this.lineEnd=this.point=A},sphere:function(){K.add(a)}};function V(){Q.point=nn}function $(){tn(z,L)}function nn(n,t){Q.point=tn,z=n,L=t,T=n*=l,O=h(t=(t*=l)/2+u),G=S(t)}function tn(n,t){var r=(n*=l)-T,e=r>=0?1:-1,i=e*r,o=h(t=(t*=l)/2+u),a=S(t),c=G*a,f=O*o+c*h(i),p=c*e*S(i);J.add(s(p,f)),T=n,O=o,G=a}function rn(n){return[s(n[1],n[0]),_(n[2])]}function en(n){var t=n[0],r=n[1],e=h(r);return[e*h(t),e*S(t),S(r)]}function on(n,t){return n[0]*t[0]+n[1]*t[1]+n[2]*t[2]}function un(n,t){return[n[1]*t[2]-n[2]*t[1],n[2]*t[0]-n[0]*t[2],n[0]*t[1]-n[1]*t[0]]}function an(n,t){n[0]+=t[0],n[1]+=t[1],n[2]+=t[2]}function cn(n,t){return[n[0]*t,n[1]*t,n[2]*t]}function ln(n){var t=M(n[0]*n[0]+n[1]*n[1]+n[2]*n[2]);n[0]/=t,n[1]/=t,n[2]/=t}var fn,pn,sn,hn,gn,vn,dn,En,yn,Sn,mn,Mn,xn,wn,_n,Nn,An={point:Rn,lineStart:Pn,lineEnd:jn,polygonStart:function(){An.point=qn,An.lineStart=bn,An.lineEnd=zn,D=new t.Adder,Q.polygonStart()},polygonEnd:function(){Q.polygonEnd(),An.point=Rn,An.lineStart=Pn,An.lineEnd=jn,J<0?(k=-(H=180),F=-(I=90)):D>r?I=90:D<-r&&(F=-90),Z[0]=k,Z[1]=H},sphere:function(){k=-(H=180),F=-(I=90)}};function Rn(n,t){U.push(Z=[k=n,H=n]),t<F&&(F=t),t>I&&(I=t)}function Cn(n,t){var r=en([n*l,t*l]);if(B){var e=un(B,r),i=un([e[1],-e[0],0],e);ln(i),i=rn(i);var o,u=n-W,a=u>0?1:-1,p=i[0]*c*a,s=f(u)>180;s^(a*W<p&&p<a*n)?(o=i[1]*c)>I&&(I=o):s^(a*W<(p=(p+360)%360-180)&&p<a*n)?(o=-i[1]*c)<F&&(F=o):(t<F&&(F=t),t>I&&(I=t)),s?n<W?Ln(k,n)>Ln(k,H)&&(H=n):Ln(n,H)>Ln(k,H)&&(k=n):H>=k?(n<k&&(k=n),n>H&&(H=n)):n>W?Ln(k,n)>Ln(k,H)&&(H=n):Ln(n,H)>Ln(k,H)&&(k=n)}else U.push(Z=[k=n,H=n]);t<F&&(F=t),t>I&&(I=t),B=r,W=n}function Pn(){An.point=Cn}function jn(){Z[0]=k,Z[1]=H,An.point=Rn,B=null}function qn(n,t){if(B){var r=n-W;D.add(f(r)>180?r+(r>0?360:-360):r)}else X=n,Y=t;Q.point(n,t),Cn(n,t)}function bn(){Q.lineStart()}function zn(){qn(X,Y),Q.lineEnd(),f(D)>r&&(k=-(H=180)),Z[0]=k,Z[1]=H,B=null}function Ln(n,t){return(t-=n)<0?t+360:t}function Tn(n,t){return n[0]-t[0]}function On(n,t){return n[0]<=n[1]?n[0]<=t&&t<=n[1]:t<n[0]||n[1]<t}var Gn={sphere:A,point:kn,lineStart:Hn,lineEnd:Xn,polygonStart:function(){Gn.lineStart=Yn,Gn.lineEnd=Bn},polygonEnd:function(){Gn.lineStart=Hn,Gn.lineEnd=Xn}};function kn(n,t){n*=l;var r=h(t*=l);Fn(r*h(n),r*S(n),S(t))}function Fn(n,t,r){++fn,sn+=(n-sn)/fn,hn+=(t-hn)/fn,gn+=(r-gn)/fn}function Hn(){Gn.point=In}function In(n,t){n*=l;var r=h(t*=l);wn=r*h(n),_n=r*S(n),Nn=S(t),Gn.point=Wn,Fn(wn,_n,Nn)}function Wn(n,t){n*=l;var r=h(t*=l),e=r*h(n),i=r*S(n),o=S(t),u=s(M((u=_n*o-Nn*i)*u+(u=Nn*e-wn*o)*u+(u=wn*i-_n*e)*u),wn*e+_n*i+Nn*o);pn+=u,vn+=u*(wn+(wn=e)),dn+=u*(_n+(_n=i)),En+=u*(Nn+(Nn=o)),Fn(wn,_n,Nn)}function Xn(){Gn.point=kn}function Yn(){Gn.point=Dn}function Bn(){Un(Mn,xn),Gn.point=kn}function Dn(n,t){Mn=n,xn=t,n*=l,t*=l,Gn.point=Un;var r=h(t);wn=r*h(n),_n=r*S(n),Nn=S(t),Fn(wn,_n,Nn)}function Un(n,t){n*=l;var r=h(t*=l),e=r*h(n),i=r*S(n),o=S(t),u=_n*o-Nn*i,a=Nn*e-wn*o,c=wn*i-_n*e,f=d(u,a,c),p=_(f),s=f&&-p/f;yn.add(s*u),Sn.add(s*a),mn.add(s*c),pn+=p,vn+=p*(wn+(wn=e)),dn+=p*(_n+(_n=i)),En+=p*(Nn+(Nn=o)),Fn(wn,_n,Nn)}function Zn(n){return function(){return n}}function Jn(n,t){function r(r,e){return r=n(r,e),t(r[0],r[1])}return n.invert&&t.invert&&(r.invert=function(r,e){return(r=t.invert(r,e))&&n.invert(r[0],r[1])}),r}function Kn(n,t){return[f(n)>i?n+Math.round(-n/a)*a:n,t]}function Qn(n,t,r){return(n%=a)?t||r?Jn($n(n),nt(t,r)):$n(n):t||r?nt(t,r):Kn}function Vn(n){return function(t,r){return[(t+=n)>i?t-a:t<-i?t+a:t,r]}}function $n(n){var t=Vn(n);return t.invert=Vn(-n),t}function nt(n,t){var r=h(n),e=S(n),i=h(t),o=S(t);function u(n,t){var u=h(t),a=h(n)*u,c=S(n)*u,l=S(t),f=l*r+a*e;return[s(c*i-f*o,a*r-l*e),_(f*i+c*o)]}return u.invert=function(n,t){var u=h(t),a=h(n)*u,c=S(n)*u,l=S(t),f=l*i-c*o;return[s(c*i+l*o,a*r+f*e),_(f*r-a*e)]},u}function tt(n){function t(t){return(t=n(t[0]*l,t[1]*l))[0]*=c,t[1]*=c,t}return n=Qn(n[0]*l,n[1]*l,n.length>2?n[2]*l:0),t.invert=function(t){return(t=n.invert(t[0]*l,t[1]*l))[0]*=c,t[1]*=c,t},t}function rt(n,t,r,e,i,o){if(r){var u=h(t),c=S(t),l=e*r;null==i?(i=t+e*a,o=t-l/2):(i=et(u,i),o=et(u,o),(e>0?i<o:i>o)&&(i+=e*a));for(var f,p=i;e>0?p>o:p<o;p-=l)f=rn([u,-c*h(p),-c*S(p)]),n.point(f[0],f[1])}}function et(n,t){(t=en(t))[0]-=n,ln(t);var e=w(-t[1]);return((-t[2]<0?-e:e)+a-r)%a}function it(){var n,t=[];return{point:function(t,r,e){n.push([t,r,e])},lineStart:function(){t.push(n=[])},lineEnd:A,rejoin:function(){t.length>1&&t.push(t.pop().concat(t.shift()))},result:function(){var r=t;return t=[],n=null,r}}}function ot(n,t){return f(n[0]-t[0])<r&&f(n[1]-t[1])<r}function ut(n,t,r,e){this.x=n,this.z=t,this.o=r,this.e=e,this.v=!1,this.n=this.p=null}function at(n,t,r,e,i){var o,u,a=[],c=[];if(n.forEach((function(n){if(!((t=n.length-1)<=0)){var t,r,e=n[0],u=n[t];if(ot(e,u)){if(!e[2]&&!u[2]){for(i.lineStart(),o=0;o<t;++o)i.point((e=n[o])[0],e[1]);return void i.lineEnd()}u[0]+=2e-6}a.push(r=new ut(e,n,null,!0)),c.push(r.o=new ut(e,null,r,!1)),a.push(r=new ut(u,n,null,!1)),c.push(r.o=new ut(u,null,r,!0))}})),a.length){for(c.sort(t),ct(a),ct(c),o=0,u=c.length;o<u;++o)c[o].e=r=!r;for(var l,f,p=a[0];;){for(var s=p,h=!0;s.v;)if((s=s.n)===p)return;l=s.z,i.lineStart();do{if(s.v=s.o.v=!0,s.e){if(h)for(o=0,u=l.length;o<u;++o)i.point((f=l[o])[0],f[1]);else e(s.x,s.n.x,1,i);s=s.n}else{if(h)for(l=s.p.z,o=l.length-1;o>=0;--o)i.point((f=l[o])[0],f[1]);else e(s.x,s.p.x,-1,i);s=s.p}l=(s=s.o).z,h=!h}while(!s.v);i.lineEnd()}}}function ct(n){if(t=n.length){for(var t,r,e=0,i=n[0];++e<t;)i.n=r=n[e],r.p=i,i=r;i.n=r=n[0],r.p=i}}function lt(n){return f(n[0])<=i?n[0]:m(n[0])*((f(n[0])+i)%a-i)}function ft(n,e){var c=lt(e),l=e[1],f=S(l),p=[S(c),-h(c),0],g=0,v=0,d=new t.Adder;1===f?l=o+r:-1===f&&(l=-o-r);for(var E=0,y=n.length;E<y;++E)if(M=(m=n[E]).length)for(var m,M,x=m[M-1],w=lt(x),N=x[1]/2+u,A=S(N),R=h(N),C=0;C<M;++C,w=j,A=b,R=z,x=P){var P=m[C],j=lt(P),q=P[1]/2+u,b=S(q),z=h(q),L=j-w,T=L>=0?1:-1,O=T*L,G=O>i,k=A*b;if(d.add(s(k*T*S(O),R*z+k*h(O))),g+=G?L+T*a:L,G^w>=c^j>=c){var F=un(en(x),en(P));ln(F);var H=un(p,F);ln(H);var I=(G^L>=0?-1:1)*_(H[2]);(l>I||l===I&&(F[0]||F[1]))&&(v+=G^L>=0?1:-1)}}return(g<-r||g<r&&d<-1e-12)^1&v}function pt(n,r,e,i){return function(o){var u,a,c,l=r(o),f=it(),p=r(f),s=!1,h={point:g,lineStart:d,lineEnd:E,polygonStart:function(){h.point=y,h.lineStart=S,h.lineEnd=m,a=[],u=[]},polygonEnd:function(){h.point=g,h.lineStart=d,h.lineEnd=E,a=t.merge(a);var n=ft(u,i);a.length?(s||(o.polygonStart(),s=!0),at(a,ht,n,e,o)):n&&(s||(o.polygonStart(),s=!0),o.lineStart(),e(null,null,1,o),o.lineEnd()),s&&(o.polygonEnd(),s=!1),a=u=null},sphere:function(){o.polygonStart(),o.lineStart(),e(null,null,1,o),o.lineEnd(),o.polygonEnd()}};function g(t,r){n(t,r)&&o.point(t,r)}function v(n,t){l.point(n,t)}function d(){h.point=v,l.lineStart()}function E(){h.point=g,l.lineEnd()}function y(n,t){c.push([n,t]),p.point(n,t)}function S(){p.lineStart(),c=[]}function m(){y(c[0][0],c[0][1]),p.lineEnd();var n,t,r,e,i=p.clean(),l=f.result(),h=l.length;if(c.pop(),u.push(c),c=null,h)if(1&i){if((t=(r=l[0]).length-1)>0){for(s||(o.polygonStart(),s=!0),o.lineStart(),n=0;n<t;++n)o.point((e=r[n])[0],e[1]);o.lineEnd()}}else h>1&&2&i&&l.push(l.pop().concat(l.shift())),a.push(l.filter(st))}return h}}function st(n){return n.length>1}function ht(n,t){return((n=n.x)[0]<0?n[1]-o-r:o-n[1])-((t=t.x)[0]<0?t[1]-o-r:o-t[1])}Kn.invert=Kn;var gt=pt((function(){return!0}),(function(n){var t,e=NaN,u=NaN,a=NaN;return{lineStart:function(){n.lineStart(),t=1},point:function(c,l){var s=c>0?i:-i,g=f(c-e);f(g-i)<r?(n.point(e,u=(u+l)/2>0?o:-o),n.point(a,u),n.lineEnd(),n.lineStart(),n.point(s,u),n.point(c,u),t=0):a!==s&&g>=i&&(f(e-a)<r&&(e-=a*r),f(c-s)<r&&(c-=s*r),u=function(n,t,e,i){var o,u,a=S(n-e);return f(a)>r?p((S(t)*(u=h(i))*S(e)-S(i)*(o=h(t))*S(n))/(o*u*a)):(t+i)/2}(e,u,c,l),n.point(a,u),n.lineEnd(),n.lineStart(),n.point(s,u),t=0),n.point(e=c,u=l),a=s},lineEnd:function(){n.lineEnd(),e=u=NaN},clean:function(){return 2-t}}}),(function(n,t,e,u){var a;if(null==n)a=e*o,u.point(-i,a),u.point(0,a),u.point(i,a),u.point(i,0),u.point(i,-a),u.point(0,-a),u.point(-i,-a),u.point(-i,0),u.point(-i,a);else if(f(n[0]-t[0])>r){var c=n[0]<t[0]?i:-i;a=e*c/2,u.point(-c,a),u.point(0,a),u.point(c,a)}else u.point(t[0],t[1])}),[-i,-o]);function vt(n){var t=h(n),e=6*l,o=t>0,u=f(t)>r;function a(n,r){return h(n)*h(r)>t}function c(n,e,o){var u=[1,0,0],a=un(en(n),en(e)),c=on(a,a),l=a[0],p=c-l*l;if(!p)return!o&&n;var s=t*c/p,h=-t*l/p,g=un(u,a),v=cn(u,s);an(v,cn(a,h));var d=g,E=on(v,d),y=on(d,d),S=E*E-y*(on(v,v)-1);if(!(S<0)){var m=M(S),x=cn(d,(-E-m)/y);if(an(x,v),x=rn(x),!o)return x;var w,_=n[0],N=e[0],A=n[1],R=e[1];N<_&&(w=_,_=N,N=w);var C=N-_,P=f(C-i)<r;if(!P&&R<A&&(w=A,A=R,R=w),P||C<r?P?A+R>0^x[1]<(f(x[0]-_)<r?A:R):A<=x[1]&&x[1]<=R:C>i^(_<=x[0]&&x[0]<=N)){var j=cn(d,(-E+m)/y);return an(j,v),[x,rn(j)]}}}function p(t,r){var e=o?n:i-n,u=0;return t<-e?u|=1:t>e&&(u|=2),r<-e?u|=4:r>e&&(u|=8),u}return pt(a,(function(n){var t,r,e,l,f;return{lineStart:function(){l=e=!1,f=1},point:function(s,h){var g,v=[s,h],d=a(s,h),E=o?d?0:p(s,h):d?p(s+(s<0?i:-i),h):0;if(!t&&(l=e=d)&&n.lineStart(),d!==e&&(!(g=c(t,v))||ot(t,g)||ot(v,g))&&(v[2]=1),d!==e)f=0,d?(n.lineStart(),g=c(v,t),n.point(g[0],g[1])):(g=c(t,v),n.point(g[0],g[1],2),n.lineEnd()),t=g;else if(u&&t&&o^d){var y;E&r||!(y=c(v,t,!0))||(f=0,o?(n.lineStart(),n.point(y[0][0],y[0][1]),n.point(y[1][0],y[1][1]),n.lineEnd()):(n.point(y[1][0],y[1][1]),n.lineEnd(),n.lineStart(),n.point(y[0][0],y[0][1],3)))}!d||t&&ot(t,v)||n.point(v[0],v[1]),t=v,e=d,r=E},lineEnd:function(){e&&n.lineEnd(),t=null},clean:function(){return f|(l&&e)<<1}}}),(function(t,r,i,o){rt(o,n,e,i,t,r)}),o?[0,-n]:[-i,n-i])}var dt,Et,yt,St,mt=1e9,Mt=-mt;function xt(n,e,i,o){function u(t,r){return n<=t&&t<=i&&e<=r&&r<=o}function a(t,r,u,a){var l=0,f=0;if(null==t||(l=c(t,u))!==(f=c(r,u))||p(t,r)<0^u>0)do{a.point(0===l||3===l?n:i,l>1?o:e)}while((l=(l+u+4)%4)!==f);else a.point(r[0],r[1])}function c(t,o){return f(t[0]-n)<r?o>0?0:3:f(t[0]-i)<r?o>0?2:1:f(t[1]-e)<r?o>0?1:0:o>0?3:2}function l(n,t){return p(n.x,t.x)}function p(n,t){var r=c(n,1),e=c(t,1);return r!==e?r-e:0===r?t[1]-n[1]:1===r?n[0]-t[0]:2===r?n[1]-t[1]:t[0]-n[0]}return function(r){var c,f,p,s,h,g,v,d,E,y,S,m=r,M=it(),x={point:w,lineStart:function(){x.point=_,f&&f.push(p=[]);y=!0,E=!1,v=d=NaN},lineEnd:function(){c&&(_(s,h),g&&E&&M.rejoin(),c.push(M.result()));x.point=w,E&&m.lineEnd()},polygonStart:function(){m=M,c=[],f=[],S=!0},polygonEnd:function(){var e=function(){for(var t=0,r=0,e=f.length;r<e;++r)for(var i,u,a=f[r],c=1,l=a.length,p=a[0],s=p[0],h=p[1];c<l;++c)i=s,u=h,s=(p=a[c])[0],h=p[1],u<=o?h>o&&(s-i)*(o-u)>(h-u)*(n-i)&&++t:h<=o&&(s-i)*(o-u)<(h-u)*(n-i)&&--t;return t}(),i=S&&e,u=(c=t.merge(c)).length;(i||u)&&(r.polygonStart(),i&&(r.lineStart(),a(null,null,1,r),r.lineEnd()),u&&at(c,l,e,a,r),r.polygonEnd());m=r,c=f=p=null}};function w(n,t){u(n,t)&&m.point(n,t)}function _(t,r){var a=u(t,r);if(f&&p.push([t,r]),y)s=t,h=r,g=a,y=!1,a&&(m.lineStart(),m.point(t,r));else if(a&&E)m.point(t,r);else{var c=[v=Math.max(Mt,Math.min(mt,v)),d=Math.max(Mt,Math.min(mt,d))],l=[t=Math.max(Mt,Math.min(mt,t)),r=Math.max(Mt,Math.min(mt,r))];!function(n,t,r,e,i,o){var u,a=n[0],c=n[1],l=0,f=1,p=t[0]-a,s=t[1]-c;if(u=r-a,p||!(u>0)){if(u/=p,p<0){if(u<l)return;u<f&&(f=u)}else if(p>0){if(u>f)return;u>l&&(l=u)}if(u=i-a,p||!(u<0)){if(u/=p,p<0){if(u>f)return;u>l&&(l=u)}else if(p>0){if(u<l)return;u<f&&(f=u)}if(u=e-c,s||!(u>0)){if(u/=s,s<0){if(u<l)return;u<f&&(f=u)}else if(s>0){if(u>f)return;u>l&&(l=u)}if(u=o-c,s||!(u<0)){if(u/=s,s<0){if(u>f)return;u>l&&(l=u)}else if(s>0){if(u<l)return;u<f&&(f=u)}return l>0&&(n[0]=a+l*p,n[1]=c+l*s),f<1&&(t[0]=a+f*p,t[1]=c+f*s),!0}}}}}(c,l,n,e,i,o)?a&&(m.lineStart(),m.point(t,r),S=!1):(E||(m.lineStart(),m.point(c[0],c[1])),m.point(l[0],l[1]),a||m.lineEnd(),S=!1)}v=t,d=r,E=a}return x}}var wt={sphere:A,point:A,lineStart:function(){wt.point=Nt,wt.lineEnd=_t},lineEnd:A,polygonStart:A,polygonEnd:A};function _t(){wt.point=wt.lineEnd=A}function Nt(n,t){Et=n*=l,yt=S(t*=l),St=h(t),wt.point=At}function At(n,t){n*=l;var r=S(t*=l),e=h(t),i=f(n-Et),o=h(i),u=e*S(i),a=St*r-yt*e*o,c=yt*r+St*e*o;dt.add(s(M(u*u+a*a),c)),Et=n,yt=r,St=e}function Rt(n){return dt=new t.Adder,b(n,wt),+dt}var Ct=[null,null],Pt={type:"LineString",coordinates:Ct};function jt(n,t){return Ct[0]=n,Ct[1]=t,Rt(Pt)}var qt={Feature:function(n,t){return zt(n.geometry,t)},FeatureCollection:function(n,t){for(var r=n.features,e=-1,i=r.length;++e<i;)if(zt(r[e].geometry,t))return!0;return!1}},bt={Sphere:function(){return!0},Point:function(n,t){return Lt(n.coordinates,t)},MultiPoint:function(n,t){for(var r=n.coordinates,e=-1,i=r.length;++e<i;)if(Lt(r[e],t))return!0;return!1},LineString:function(n,t){return Tt(n.coordinates,t)},MultiLineString:function(n,t){for(var r=n.coordinates,e=-1,i=r.length;++e<i;)if(Tt(r[e],t))return!0;return!1},Polygon:function(n,t){return Ot(n.coordinates,t)},MultiPolygon:function(n,t){for(var r=n.coordinates,e=-1,i=r.length;++e<i;)if(Ot(r[e],t))return!0;return!1},GeometryCollection:function(n,t){for(var r=n.geometries,e=-1,i=r.length;++e<i;)if(zt(r[e],t))return!0;return!1}};function zt(n,t){return!(!n||!bt.hasOwnProperty(n.type))&&bt[n.type](n,t)}function Lt(n,t){return 0===jt(n,t)}function Tt(n,t){for(var r,i,o,u=0,a=n.length;u<a;u++){if(0===(i=jt(n[u],t)))return!0;if(u>0&&(o=jt(n[u],n[u-1]))>0&&r<=o&&i<=o&&(r+i-o)*(1-Math.pow((r-i)/o,2))<e*o)return!0;r=i}return!1}function Ot(n,t){return!!ft(n.map(Gt),kt(t))}function Gt(n){return(n=n.map(kt)).pop(),n}function kt(n){return[n[0]*l,n[1]*l]}function Ft(n,e,i){var o=t.range(n,e-r,i).concat(e);return function(n){return o.map((function(t){return[n,t]}))}}function Ht(n,e,i){var o=t.range(n,e-r,i).concat(e);return function(n){return o.map((function(t){return[t,n]}))}}function It(){var n,e,i,o,u,a,c,l,p,s,h,v,d=10,E=d,y=90,S=360,m=2.5;function M(){return{type:"MultiLineString",coordinates:x()}}function x(){return t.range(g(o/y)*y,i,y).map(h).concat(t.range(g(l/S)*S,c,S).map(v)).concat(t.range(g(e/d)*d,n,d).filter((function(n){return f(n%y)>r})).map(p)).concat(t.range(g(a/E)*E,u,E).filter((function(n){return f(n%S)>r})).map(s))}return M.lines=function(){return x().map((function(n){return{type:"LineString",coordinates:n}}))},M.outline=function(){return{type:"Polygon",coordinates:[h(o).concat(v(c).slice(1),h(i).reverse().slice(1),v(l).reverse().slice(1))]}},M.extent=function(n){return arguments.length?M.extentMajor(n).extentMinor(n):M.extentMinor()},M.extentMajor=function(n){return arguments.length?(o=+n[0][0],i=+n[1][0],l=+n[0][1],c=+n[1][1],o>i&&(n=o,o=i,i=n),l>c&&(n=l,l=c,c=n),M.precision(m)):[[o,l],[i,c]]},M.extentMinor=function(t){return arguments.length?(e=+t[0][0],n=+t[1][0],a=+t[0][1],u=+t[1][1],e>n&&(t=e,e=n,n=t),a>u&&(t=a,a=u,u=t),M.precision(m)):[[e,a],[n,u]]},M.step=function(n){return arguments.length?M.stepMajor(n).stepMinor(n):M.stepMinor()},M.stepMajor=function(n){return arguments.length?(y=+n[0],S=+n[1],M):[y,S]},M.stepMinor=function(n){return arguments.length?(d=+n[0],E=+n[1],M):[d,E]},M.precision=function(t){return arguments.length?(m=+t,p=Ft(a,u,90),s=Ht(e,n,m),h=Ft(l,c,90),v=Ht(o,i,m),M):m},M.extentMajor([[-180,-89.999999],[180,89.999999]]).extentMinor([[-180,-80.000001],[180,80.000001]])}var Wt,Xt,Yt,Bt,Dt=n=>n,Ut=new t.Adder,Zt=new t.Adder,Jt={point:A,lineStart:A,lineEnd:A,polygonStart:function(){Jt.lineStart=Kt,Jt.lineEnd=$t},polygonEnd:function(){Jt.lineStart=Jt.lineEnd=Jt.point=A,Ut.add(f(Zt)),Zt=new t.Adder},result:function(){var n=Ut/2;return Ut=new t.Adder,n}};function Kt(){Jt.point=Qt}function Qt(n,t){Jt.point=Vt,Wt=Yt=n,Xt=Bt=t}function Vt(n,t){Zt.add(Bt*n-Yt*t),Yt=n,Bt=t}function $t(){Vt(Wt,Xt)}var nr=1/0,tr=nr,rr=-nr,er=rr,ir={point:function(n,t){n<nr&&(nr=n);n>rr&&(rr=n);t<tr&&(tr=t);t>er&&(er=t)},lineStart:A,lineEnd:A,polygonStart:A,polygonEnd:A,result:function(){var n=[[nr,tr],[rr,er]];return rr=er=-(tr=nr=1/0),n}};var or,ur,ar,cr,lr=0,fr=0,pr=0,sr=0,hr=0,gr=0,vr=0,dr=0,Er=0,yr={point:Sr,lineStart:mr,lineEnd:wr,polygonStart:function(){yr.lineStart=_r,yr.lineEnd=Nr},polygonEnd:function(){yr.point=Sr,yr.lineStart=mr,yr.lineEnd=wr},result:function(){var n=Er?[vr/Er,dr/Er]:gr?[sr/gr,hr/gr]:pr?[lr/pr,fr/pr]:[NaN,NaN];return lr=fr=pr=sr=hr=gr=vr=dr=Er=0,n}};function Sr(n,t){lr+=n,fr+=t,++pr}function mr(){yr.point=Mr}function Mr(n,t){yr.point=xr,Sr(ar=n,cr=t)}function xr(n,t){var r=n-ar,e=t-cr,i=M(r*r+e*e);sr+=i*(ar+n)/2,hr+=i*(cr+t)/2,gr+=i,Sr(ar=n,cr=t)}function wr(){yr.point=Sr}function _r(){yr.point=Ar}function Nr(){Rr(or,ur)}function Ar(n,t){yr.point=Rr,Sr(or=ar=n,ur=cr=t)}function Rr(n,t){var r=n-ar,e=t-cr,i=M(r*r+e*e);sr+=i*(ar+n)/2,hr+=i*(cr+t)/2,gr+=i,vr+=(i=cr*n-ar*t)*(ar+n),dr+=i*(cr+t),Er+=3*i,Sr(ar=n,cr=t)}function Cr(n){this._context=n}Cr.prototype={_radius:4.5,pointRadius:function(n){return this._radius=n,this},polygonStart:function(){this._line=0},polygonEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){0===this._line&&this._context.closePath(),this._point=NaN},point:function(n,t){switch(this._point){case 0:this._context.moveTo(n,t),this._point=1;break;case 1:this._context.lineTo(n,t);break;default:this._context.moveTo(n+this._radius,t),this._context.arc(n,t,this._radius,0,a)}},result:A};var Pr,jr,qr,br,zr,Lr=new t.Adder,Tr={point:A,lineStart:function(){Tr.point=Or},lineEnd:function(){Pr&&Gr(jr,qr),Tr.point=A},polygonStart:function(){Pr=!0},polygonEnd:function(){Pr=null},result:function(){var n=+Lr;return Lr=new t.Adder,n}};function Or(n,t){Tr.point=Gr,jr=br=n,qr=zr=t}function Gr(n,t){br-=n,zr-=t,Lr.add(M(br*br+zr*zr)),br=n,zr=t}function kr(){this._string=[]}function Fr(n){return"m0,"+n+"a"+n+","+n+" 0 1,1 0,"+-2*n+"a"+n+","+n+" 0 1,1 0,"+2*n+"z"}function Hr(n){return function(t){var r=new Ir;for(var e in n)r[e]=n[e];return r.stream=t,r}}function Ir(){}function Wr(n,t,r){var e=n.clipExtent&&n.clipExtent();return n.scale(150).translate([0,0]),null!=e&&n.clipExtent(null),b(r,n.stream(ir)),t(ir.result()),null!=e&&n.clipExtent(e),n}function Xr(n,t,r){return Wr(n,(function(r){var e=t[1][0]-t[0][0],i=t[1][1]-t[0][1],o=Math.min(e/(r[1][0]-r[0][0]),i/(r[1][1]-r[0][1])),u=+t[0][0]+(e-o*(r[1][0]+r[0][0]))/2,a=+t[0][1]+(i-o*(r[1][1]+r[0][1]))/2;n.scale(150*o).translate([u,a])}),r)}function Yr(n,t,r){return Xr(n,[[0,0],t],r)}function Br(n,t,r){return Wr(n,(function(r){var e=+t,i=e/(r[1][0]-r[0][0]),o=(e-i*(r[1][0]+r[0][0]))/2,u=-i*r[0][1];n.scale(150*i).translate([o,u])}),r)}function Dr(n,t,r){return Wr(n,(function(r){var e=+t,i=e/(r[1][1]-r[0][1]),o=-i*r[0][0],u=(e-i*(r[1][1]+r[0][1]))/2;n.scale(150*i).translate([o,u])}),r)}kr.prototype={_radius:4.5,_circle:Fr(4.5),pointRadius:function(n){return(n=+n)!==this._radius&&(this._radius=n,this._circle=null),this},polygonStart:function(){this._line=0},polygonEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){0===this._line&&this._string.push("Z"),this._point=NaN},point:function(n,t){switch(this._point){case 0:this._string.push("M",n,",",t),this._point=1;break;case 1:this._string.push("L",n,",",t);break;default:null==this._circle&&(this._circle=Fr(this._radius)),this._string.push("M",n,",",t,this._circle)}},result:function(){if(this._string.length){var n=this._string.join("");return this._string=[],n}return null}},Ir.prototype={constructor:Ir,point:function(n,t){this.stream.point(n,t)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}};var Ur=h(30*l);function Zr(n,t){return+t?function(n,t){function e(i,o,u,a,c,l,p,h,g,v,d,E,y,S){var m=p-i,x=h-o,w=m*m+x*x;if(w>4*t&&y--){var N=a+v,A=c+d,R=l+E,C=M(N*N+A*A+R*R),P=_(R/=C),j=f(f(R)-1)<r||f(u-g)<r?(u+g)/2:s(A,N),q=n(j,P),b=q[0],z=q[1],L=b-i,T=z-o,O=x*L-m*T;(O*O/w>t||f((m*L+x*T)/w-.5)>.3||a*v+c*d+l*E<Ur)&&(e(i,o,u,a,c,l,b,z,j,N/=C,A/=C,R,y,S),S.point(b,z),e(b,z,j,N,A,R,p,h,g,v,d,E,y,S))}}return function(t){var r,i,o,u,a,c,l,f,p,s,h,g,v={point:d,lineStart:E,lineEnd:S,polygonStart:function(){t.polygonStart(),v.lineStart=m},polygonEnd:function(){t.polygonEnd(),v.lineStart=E}};function d(r,e){r=n(r,e),t.point(r[0],r[1])}function E(){f=NaN,v.point=y,t.lineStart()}function y(r,i){var o=en([r,i]),u=n(r,i);e(f,p,l,s,h,g,f=u[0],p=u[1],l=r,s=o[0],h=o[1],g=o[2],16,t),t.point(f,p)}function S(){v.point=d,t.lineEnd()}function m(){E(),v.point=M,v.lineEnd=x}function M(n,t){y(r=n,t),i=f,o=p,u=s,a=h,c=g,v.point=y}function x(){e(f,p,l,s,h,g,i,o,r,u,a,c,16,t),v.lineEnd=S,S()}return v}}(n,t):function(n){return Hr({point:function(t,r){t=n(t,r),this.stream.point(t[0],t[1])}})}(n)}var Jr=Hr({point:function(n,t){this.stream.point(n*l,t*l)}});function Kr(n,t,r,e,i,o){if(!o)return function(n,t,r,e,i){function o(o,u){return[t+n*(o*=e),r-n*(u*=i)]}return o.invert=function(o,u){return[(o-t)/n*e,(r-u)/n*i]},o}(n,t,r,e,i);var u=h(o),a=S(o),c=u*n,l=a*n,f=u/n,p=a/n,s=(a*r-u*t)/n,g=(a*t+u*r)/n;function v(n,o){return[c*(n*=e)-l*(o*=i)+t,r-l*n-c*o]}return v.invert=function(n,t){return[e*(f*n-p*t+s),i*(g-p*n-f*t)]},v}function Qr(n){return Vr((function(){return n}))()}function Vr(n){var t,r,e,i,o,u,a,f,p,s,h=150,g=480,v=250,d=0,E=0,y=0,S=0,m=0,x=0,w=1,_=1,N=null,A=gt,R=null,C=Dt,P=.5;function j(n){return f(n[0]*l,n[1]*l)}function q(n){return(n=f.invert(n[0],n[1]))&&[n[0]*c,n[1]*c]}function b(){var n=Kr(h,0,0,w,_,x).apply(null,t(d,E)),e=Kr(h,g-n[0],v-n[1],w,_,x);return r=Qn(y,S,m),a=Jn(t,e),f=Jn(r,a),u=Zr(a,P),z()}function z(){return p=s=null,j}return j.stream=function(n){return p&&s===n?p:p=Jr(function(n){return Hr({point:function(t,r){var e=n(t,r);return this.stream.point(e[0],e[1])}})}(r)(A(u(C(s=n)))))},j.preclip=function(n){return arguments.length?(A=n,N=void 0,z()):A},j.postclip=function(n){return arguments.length?(C=n,R=e=i=o=null,z()):C},j.clipAngle=function(n){return arguments.length?(A=+n?vt(N=n*l):(N=null,gt),z()):N*c},j.clipExtent=function(n){return arguments.length?(C=null==n?(R=e=i=o=null,Dt):xt(R=+n[0][0],e=+n[0][1],i=+n[1][0],o=+n[1][1]),z()):null==R?null:[[R,e],[i,o]]},j.scale=function(n){return arguments.length?(h=+n,b()):h},j.translate=function(n){return arguments.length?(g=+n[0],v=+n[1],b()):[g,v]},j.center=function(n){return arguments.length?(d=n[0]%360*l,E=n[1]%360*l,b()):[d*c,E*c]},j.rotate=function(n){return arguments.length?(y=n[0]%360*l,S=n[1]%360*l,m=n.length>2?n[2]%360*l:0,b()):[y*c,S*c,m*c]},j.angle=function(n){return arguments.length?(x=n%360*l,b()):x*c},j.reflectX=function(n){return arguments.length?(w=n?-1:1,b()):w<0},j.reflectY=function(n){return arguments.length?(_=n?-1:1,b()):_<0},j.precision=function(n){return arguments.length?(u=Zr(a,P=n*n),z()):M(P)},j.fitExtent=function(n,t){return Xr(j,n,t)},j.fitSize=function(n,t){return Yr(j,n,t)},j.fitWidth=function(n,t){return Br(j,n,t)},j.fitHeight=function(n,t){return Dr(j,n,t)},function(){return t=n.apply(this,arguments),j.invert=t.invert&&q,b()}}function $r(n){var t=0,r=i/3,e=Vr(n),o=e(t,r);return o.parallels=function(n){return arguments.length?e(t=n[0]*l,r=n[1]*l):[t*c,r*c]},o}function ne(n,t){var e=S(n),o=(e+S(t))/2;if(f(o)<r)return function(n){var t=h(n);function r(n,r){return[n*t,S(r)/t]}return r.invert=function(n,r){return[n/t,_(r*t)]},r}(n);var u=1+e*(2*o-e),a=M(u)/o;function c(n,t){var r=M(u-2*o*S(t))/o;return[r*S(n*=o),a-r*h(n)]}return c.invert=function(n,t){var r=a-t,e=s(n,f(r))*m(r);return r*o<0&&(e-=i*m(n)*m(r)),[e/o,_((u-(n*n+r*r)*o*o)/(2*o))]},c}function te(){return $r(ne).scale(155.424).center([0,33.6442])}function re(){return te().parallels([29.5,45.5]).scale(1070).translate([480,250]).rotate([96,0]).center([-.6,38.7])}function ee(n){return function(t,r){var e=h(t),i=h(r),o=n(e*i);return o===1/0?[2,0]:[o*i*S(t),o*S(r)]}}function ie(n){return function(t,r){var e=M(t*t+r*r),i=n(e),o=S(i),u=h(i);return[s(t*o,e*u),_(e&&r*o/e)]}}var oe=ee((function(n){return M(2/(1+n))}));oe.invert=ie((function(n){return 2*_(n/2)}));var ue=ee((function(n){return(n=w(n))&&n/S(n)}));function ae(n,t){return[n,E(x((o+t)/2))]}function ce(n){var t,r,e,o=Qr(n),u=o.center,a=o.scale,c=o.translate,l=o.clipExtent,f=null;function p(){var u=i*a(),c=o(tt(o.rotate()).invert([0,0]));return l(null==f?[[c[0]-u,c[1]-u],[c[0]+u,c[1]+u]]:n===ae?[[Math.max(c[0]-u,f),t],[Math.min(c[0]+u,r),e]]:[[f,Math.max(c[1]-u,t)],[r,Math.min(c[1]+u,e)]])}return o.scale=function(n){return arguments.length?(a(n),p()):a()},o.translate=function(n){return arguments.length?(c(n),p()):c()},o.center=function(n){return arguments.length?(u(n),p()):u()},o.clipExtent=function(n){return arguments.length?(null==n?f=t=r=e=null:(f=+n[0][0],t=+n[0][1],r=+n[1][0],e=+n[1][1]),p()):null==f?null:[[f,t],[r,e]]},p()}function le(n){return x((o+n)/2)}function fe(n,t){var e=h(n),u=n===t?S(n):E(e/h(t))/E(le(t)/le(n)),a=e*y(le(n),u)/u;if(!u)return ae;function c(n,t){a>0?t<-o+r&&(t=-o+r):t>o-r&&(t=o-r);var e=a/y(le(t),u);return[e*S(u*n),a-e*h(u*n)]}return c.invert=function(n,t){var r=a-t,e=m(u)*M(n*n+r*r),c=s(n,f(r))*m(r);return r*u<0&&(c-=i*m(n)*m(r)),[c/u,2*p(y(a/e,1/u))-o]},c}function pe(n,t){return[n,t]}function se(n,t){var e=h(n),o=n===t?S(n):(e-h(t))/(t-n),u=e/o+n;if(f(o)<r)return pe;function a(n,t){var r=u-t,e=o*n;return[r*S(e),u-r*h(e)]}return a.invert=function(n,t){var r=u-t,e=s(n,f(r))*m(r);return r*o<0&&(e-=i*m(n)*m(r)),[e/o,u-m(o)*M(n*n+r*r)]},a}ue.invert=ie((function(n){return n})),ae.invert=function(n,t){return[n,2*p(v(t))-o]},pe.invert=pe;var he=1.340264,ge=-.081106,ve=893e-6,de=.003796,Ee=M(3)/2;function ye(n,t){var r=_(Ee*S(t)),e=r*r,i=e*e*e;return[n*h(r)/(Ee*(he+3*ge*e+i*(7*ve+9*de*e))),r*(he+ge*e+i*(ve+de*e))]}function Se(n,t){var r=h(t),e=h(n)*r;return[r*S(n)/e,S(t)/e]}function me(n,t){var r=t*t,e=r*r;return[n*(.8707-.131979*r+e*(e*(.003971*r-.001529*e)-.013791)),t*(1.007226+r*(.015085+e*(.028874*r-.044475-.005916*e)))]}function Me(n,t){return[h(t)*S(n),S(t)]}function xe(n,t){var r=h(t),e=1+h(n)*r;return[r*S(n)/e,S(t)/e]}function we(n,t){return[E(x((o+t)/2)),-n]}ye.invert=function(n,t){for(var r,i=t,o=i*i,u=o*o*o,a=0;a<12&&(u=(o=(i-=r=(i*(he+ge*o+u*(ve+de*o))-t)/(he+3*ge*o+u*(7*ve+9*de*o)))*i)*o*o,!(f(r)<e));++a);return[Ee*n*(he+3*ge*o+u*(7*ve+9*de*o))/h(i),_(S(i)/Ee)]},Se.invert=ie(p),me.invert=function(n,t){var e,i=t,o=25;do{var u=i*i,a=u*u;i-=e=(i*(1.007226+u*(.015085+a*(.028874*u-.044475-.005916*a)))-t)/(1.007226+u*(.045255+a*(.259866*u-.311325-.005916*11*a)))}while(f(e)>r&&--o>0);return[n/(.8707+(u=i*i)*(u*(u*u*u*(.003971-.001529*u)-.013791)-.131979)),i]},Me.invert=ie(_),xe.invert=ie((function(n){return 2*p(n)})),we.invert=function(n,t){return[-t,2*p(v(n))-o]},n.geoAlbers=re,n.geoAlbersUsa=function(){var n,t,e,i,o,u,a=re(),c=te().rotate([154,0]).center([-2,58.5]).parallels([55,65]),l=te().rotate([157,0]).center([-3,19.9]).parallels([8,18]),f={point:function(n,t){u=[n,t]}};function p(n){var t=n[0],r=n[1];return u=null,e.point(t,r),u||(i.point(t,r),u)||(o.point(t,r),u)}function s(){return n=t=null,p}return p.invert=function(n){var t=a.scale(),r=a.translate(),e=(n[0]-r[0])/t,i=(n[1]-r[1])/t;return(i>=.12&&i<.234&&e>=-.425&&e<-.214?c:i>=.166&&i<.234&&e>=-.214&&e<-.115?l:a).invert(n)},p.stream=function(r){return n&&t===r?n:(e=[a.stream(t=r),c.stream(r),l.stream(r)],i=e.length,n={point:function(n,t){for(var r=-1;++r<i;)e[r].point(n,t)},sphere:function(){for(var n=-1;++n<i;)e[n].sphere()},lineStart:function(){for(var n=-1;++n<i;)e[n].lineStart()},lineEnd:function(){for(var n=-1;++n<i;)e[n].lineEnd()},polygonStart:function(){for(var n=-1;++n<i;)e[n].polygonStart()},polygonEnd:function(){for(var n=-1;++n<i;)e[n].polygonEnd()}});var e,i},p.precision=function(n){return arguments.length?(a.precision(n),c.precision(n),l.precision(n),s()):a.precision()},p.scale=function(n){return arguments.length?(a.scale(n),c.scale(.35*n),l.scale(n),p.translate(a.translate())):a.scale()},p.translate=function(n){if(!arguments.length)return a.translate();var t=a.scale(),u=+n[0],p=+n[1];return e=a.translate(n).clipExtent([[u-.455*t,p-.238*t],[u+.455*t,p+.238*t]]).stream(f),i=c.translate([u-.307*t,p+.201*t]).clipExtent([[u-.425*t+r,p+.12*t+r],[u-.214*t-r,p+.234*t-r]]).stream(f),o=l.translate([u-.205*t,p+.212*t]).clipExtent([[u-.214*t+r,p+.166*t+r],[u-.115*t-r,p+.234*t-r]]).stream(f),s()},p.fitExtent=function(n,t){return Xr(p,n,t)},p.fitSize=function(n,t){return Yr(p,n,t)},p.fitWidth=function(n,t){return Br(p,n,t)},p.fitHeight=function(n,t){return Dr(p,n,t)},p.scale(1070)},n.geoArea=function(n){return K=new t.Adder,b(n,Q),2*K},n.geoAzimuthalEqualArea=function(){return Qr(oe).scale(124.75).clipAngle(179.999)},n.geoAzimuthalEqualAreaRaw=oe,n.geoAzimuthalEquidistant=function(){return Qr(ue).scale(79.4188).clipAngle(179.999)},n.geoAzimuthalEquidistantRaw=ue,n.geoBounds=function(n){var t,r,e,i,o,u,a;if(I=H=-(k=F=1/0),U=[],b(n,An),r=U.length){for(U.sort(Tn),t=1,o=[e=U[0]];t<r;++t)On(e,(i=U[t])[0])||On(e,i[1])?(Ln(e[0],i[1])>Ln(e[0],e[1])&&(e[1]=i[1]),Ln(i[0],e[1])>Ln(e[0],e[1])&&(e[0]=i[0])):o.push(e=i);for(u=-1/0,t=0,e=o[r=o.length-1];t<=r;e=i,++t)i=o[t],(a=Ln(e[1],i[0]))>u&&(u=a,k=i[0],H=e[1])}return U=Z=null,k===1/0||F===1/0?[[NaN,NaN],[NaN,NaN]]:[[k,F],[H,I]]},n.geoCentroid=function(n){fn=pn=sn=hn=gn=vn=dn=En=0,yn=new t.Adder,Sn=new t.Adder,mn=new t.Adder,b(n,Gn);var i=+yn,o=+Sn,u=+mn,a=d(i,o,u);return a<e&&(i=vn,o=dn,u=En,pn<r&&(i=sn,o=hn,u=gn),(a=d(i,o,u))<e)?[NaN,NaN]:[s(o,i)*c,_(u/a)*c]},n.geoCircle=function(){var n,t,r=Zn([0,0]),e=Zn(90),i=Zn(6),o={point:function(r,e){n.push(r=t(r,e)),r[0]*=c,r[1]*=c}};function u(){var u=r.apply(this,arguments),a=e.apply(this,arguments)*l,c=i.apply(this,arguments)*l;return n=[],t=Qn(-u[0]*l,-u[1]*l,0).invert,rt(o,a,c,1),u={type:"Polygon",coordinates:[n]},n=t=null,u}return u.center=function(n){return arguments.length?(r="function"==typeof n?n:Zn([+n[0],+n[1]]),u):r},u.radius=function(n){return arguments.length?(e="function"==typeof n?n:Zn(+n),u):e},u.precision=function(n){return arguments.length?(i="function"==typeof n?n:Zn(+n),u):i},u},n.geoClipAntimeridian=gt,n.geoClipCircle=vt,n.geoClipExtent=function(){var n,t,r,e=0,i=0,o=960,u=500;return r={stream:function(r){return n&&t===r?n:n=xt(e,i,o,u)(t=r)},extent:function(a){return arguments.length?(e=+a[0][0],i=+a[0][1],o=+a[1][0],u=+a[1][1],n=t=null,r):[[e,i],[o,u]]}}},n.geoClipRectangle=xt,n.geoConicConformal=function(){return $r(fe).scale(109.5).parallels([30,30])},n.geoConicConformalRaw=fe,n.geoConicEqualArea=te,n.geoConicEqualAreaRaw=ne,n.geoConicEquidistant=function(){return $r(se).scale(131.154).center([0,13.9389])},n.geoConicEquidistantRaw=se,n.geoContains=function(n,t){return(n&&qt.hasOwnProperty(n.type)?qt[n.type]:zt)(n,t)},n.geoDistance=jt,n.geoEqualEarth=function(){return Qr(ye).scale(177.158)},n.geoEqualEarthRaw=ye,n.geoEquirectangular=function(){return Qr(pe).scale(152.63)},n.geoEquirectangularRaw=pe,n.geoGnomonic=function(){return Qr(Se).scale(144.049).clipAngle(60)},n.geoGnomonicRaw=Se,n.geoGraticule=It,n.geoGraticule10=function(){return It()()},n.geoIdentity=function(){var n,t,r,e,i,o,u,a=1,f=0,p=0,s=1,g=1,v=0,d=null,E=1,y=1,m=Hr({point:function(n,t){var r=w([n,t]);this.stream.point(r[0],r[1])}}),M=Dt;function x(){return E=a*s,y=a*g,o=u=null,w}function w(r){var e=r[0]*E,i=r[1]*y;if(v){var o=i*n-e*t;e=e*n+i*t,i=o}return[e+f,i+p]}return w.invert=function(r){var e=r[0]-f,i=r[1]-p;if(v){var o=i*n+e*t;e=e*n-i*t,i=o}return[e/E,i/y]},w.stream=function(n){return o&&u===n?o:o=m(M(u=n))},w.postclip=function(n){return arguments.length?(M=n,d=r=e=i=null,x()):M},w.clipExtent=function(n){return arguments.length?(M=null==n?(d=r=e=i=null,Dt):xt(d=+n[0][0],r=+n[0][1],e=+n[1][0],i=+n[1][1]),x()):null==d?null:[[d,r],[e,i]]},w.scale=function(n){return arguments.length?(a=+n,x()):a},w.translate=function(n){return arguments.length?(f=+n[0],p=+n[1],x()):[f,p]},w.angle=function(r){return arguments.length?(t=S(v=r%360*l),n=h(v),x()):v*c},w.reflectX=function(n){return arguments.length?(s=n?-1:1,x()):s<0},w.reflectY=function(n){return arguments.length?(g=n?-1:1,x()):g<0},w.fitExtent=function(n,t){return Xr(w,n,t)},w.fitSize=function(n,t){return Yr(w,n,t)},w.fitWidth=function(n,t){return Br(w,n,t)},w.fitHeight=function(n,t){return Dr(w,n,t)},w},n.geoInterpolate=function(n,t){var r=n[0]*l,e=n[1]*l,i=t[0]*l,o=t[1]*l,u=h(e),a=S(e),f=h(o),p=S(o),g=u*h(r),v=u*S(r),d=f*h(i),E=f*S(i),y=2*_(M(N(o-e)+u*f*N(i-r))),m=S(y),x=y?function(n){var t=S(n*=y)/m,r=S(y-n)/m,e=r*g+t*d,i=r*v+t*E,o=r*a+t*p;return[s(i,e)*c,s(o,M(e*e+i*i))*c]}:function(){return[r*c,e*c]};return x.distance=y,x},n.geoLength=Rt,n.geoMercator=function(){return ce(ae).scale(961/a)},n.geoMercatorRaw=ae,n.geoNaturalEarth1=function(){return Qr(me).scale(175.295)},n.geoNaturalEarth1Raw=me,n.geoOrthographic=function(){return Qr(Me).scale(249.5).clipAngle(90.000001)},n.geoOrthographicRaw=Me,n.geoPath=function(n,t){var r,e,i=4.5;function o(n){return n&&("function"==typeof i&&e.pointRadius(+i.apply(this,arguments)),b(n,r(e))),e.result()}return o.area=function(n){return b(n,r(Jt)),Jt.result()},o.measure=function(n){return b(n,r(Tr)),Tr.result()},o.bounds=function(n){return b(n,r(ir)),ir.result()},o.centroid=function(n){return b(n,r(yr)),yr.result()},o.projection=function(t){return arguments.length?(r=null==t?(n=null,Dt):(n=t).stream,o):n},o.context=function(n){return arguments.length?(e=null==n?(t=null,new kr):new Cr(t=n),"function"!=typeof i&&e.pointRadius(i),o):t},o.pointRadius=function(n){return arguments.length?(i="function"==typeof n?n:(e.pointRadius(+n),+n),o):i},o.projection(n).context(t)},n.geoProjection=Qr,n.geoProjectionMutator=Vr,n.geoRotation=tt,n.geoStereographic=function(){return Qr(xe).scale(250).clipAngle(142)},n.geoStereographicRaw=xe,n.geoStream=b,n.geoTransform=function(n){return{stream:Hr(n)}},n.geoTransverseMercator=function(){var n=ce(we),t=n.center,r=n.rotate;return n.center=function(n){return arguments.length?t([-n[1],n[0]]):[(n=t())[1],-n[0]]},n.rotate=function(n){return arguments.length?r([n[0],n[1],n.length>2?n[2]+90:90]):[(n=r())[0],n[1],n[2]-90]},r([0,0,90]).scale(159.155)},n.geoTransverseMercatorRaw=we,Object.defineProperty(n,"__esModule",{value:!0})}));

// lib/carbonalyser/countries.js
/**
 * Some definitions commons to pages of carbonalyser.
 */

/**
 * Holds all addressable space on earth.
 */
const earthObject = {
    type: "FeatureCollection",
    features: [
        {
            type: "Feature",
            properties: {},
            geometry: {
                type: "Polygon",
                coordinates: [
                
                    [ [-180.0, -180.0], [-180.0, 180.0], [180.0, 180.0],[180.0, -180.0], [-180.0, -180.0] ]
                
                ]
            }
        }
    ]
};

const emptyObject = {
    type: "FeatureCollection",
    features: [
        {
            type: "Feature",
            properties: {},
            geometry: {
                type: "Polygon",
                coordinates: []
            }
        }
    ]
};

/**
 * Holds all addressable space in the "default" region.<br />
 * Which is more an "average" region, if we got no data (user location) we use this value, <br />
 * to make it works in as many as possible cases (should not be used if a precise result is expected).
 */
const defaultObject = earthObject;
// background-src/countries.js
/**
 * Maintain in memory list of countries.
 */

// https://datahub.io/core/geo-countries#python
let countriesObject = null;
getCountriesObject = async () => {
    if ( countriesObject == null ) {
        const url = chrome.runtime.getURL("data/countries.geojson");
        const response = await fetch(url);
        if (!response.ok) throw new Error(`fetch failed ${response.status} - ${response.statusText}`);
        countriesObject = await response.json();
    }
    return countriesObject
}
/**
 * Take ISO_A3 country code and return geomtry if found in the current definition.
 */
getGeometryForCountry = async (country) => {
    if (typeof(country) === "string") {
        for(const feature of (await getCountriesObject()).features) {
            if ( feature.properties.ISO_A3 === country ) {
                return feature.geometry;
            }
        }
        throw "Country " + country + " not found";
    } else {
        throw "Type " + typeof(country) + " not reconized for country";
    } 
}

// https://european-union.europa.eu/principles-countries-history/country-profiles_fr
// last checked 24/06/2022
const countriesEU_ISO_A3 = ["DEU","AUT","BEL","BGR","CYP","HRV","DNK","ESP","EST","FIN","FRA","GRC","HUN","IRL","ITA","LVA","LTU","LUX","MLT","NLD","POL","PRT","ROU","SVK","SVN","SWE","CZE"];
const countriesEUObject = {
    type: "FeatureCollection",
    features: []
};
let countriesEUFlattenMultiPolygon = null;
getCountriesEUFlattenMultiPolygon = async () => {
    if ( countriesEUFlattenMultiPolygon == null ) {
        countriesEUFlattenMultiPolygon = [];
        countriesObject = await getCountriesObject();
        for(const ISO_A3 of countriesEU_ISO_A3) {
            for(const feature of countriesObject.features) {
                if ( feature.properties.ISO_A3 === ISO_A3) {
                    countriesEUObject.features.push(feature);
                    if ( feature.geometry.type === "Polygon" ) {
                        countriesEUFlattenMultiPolygon.push(feature.geometry.coordinates);
                    } else if ( feature.geometry.type === "MultiPolygon" ) {
                        for(const polygon of feature.geometry.coordinates ) {
                            countriesEUFlattenMultiPolygon.push(polygon);
                        }
                    } else {
                        throw "cannot merge a geometry of type " + feature.geometry.type;
                    }
                    break;
                }
            }
        }
    }
    return countriesEUFlattenMultiPolygon;
}
/**
 * Holds all addressable space in EU.
 */
let EUObjectUnified = null;
getEUObjectUnified = async () => {
    if ( EUObjectUnified == null ) {
        EUObjectUnified = {
            type: "FeatureCollection",
            features: [
                {
                    type: "Feature",
                    properties: {
                    },
                    geometry: {
                    type: "MultiPolygon",
                    coordinates: await getCountriesEUFlattenMultiPolygon()
                    }
                }
            ]
        };
    }
    return EUObjectUnified;
}
// lib/carbonalyser/lib.js
getDatatableTranslation = () => {
    return "/lib/datatables/translations/" + (obrowser.i18n.getMessage("general_datatables_locale")) + ".json";
}

/**
 * This lib must be the first to be loaded by the analyzer...
 */
isChrome = () => {
    return (typeof(browser) === 'undefined' && typeof(chrome) !== 'undefined');
}

// Firefox 1.0+ - detect Gecko engine
isFirefox = () => {
    return (typeof(browser) !== 'undefined');
}

/**
 * get the browser object in a compatible way.
 */
getBrowser = () => {
    if ( isChrome() ) {
        return chrome;
    } else if ( isFirefox() ) {
        return browser;
    } else {
        throw "browser not supported";
    }
}

/**
 * Emulate firefox behaviour under chrome.
 */
emulateFirefox = () => {
    if ( isChrome() ) {
        obrowser.storage.local.____get = obrowser.storage.local.get;
        obrowser.storage.local.get = async function(key) {
            return new Promise((resolve, reject) => {
                try {
                    obrowser.storage.local.____get(key, function(value) {
                        resolve(value);
                    });
                } catch (ex) {
                    reject(ex);
                }
            });
        };
        obrowser.storage.local.____set = obrowser.storage.local.set;
        obrowser.storage.local.set = async function(obj) {
            return new Promise((resolve, reject) => {
                try {
                    obrowser.storage.local.____set(obj, function() {
                        resolve();
                    });
                } catch (ex) {
                    reject(ex);
                }
            });
        };
    }
}

const obrowser = getBrowser();
emulateFirefox();
isInDebug = async () => {
    return await getPref("debug");
}

let blackList = [];
let whitelist = [/.*trafficAnalyzer.*/];
printDebugOrigin = async (msg) => {
    if ( !(await isInDebug()) ) {
        return;
    }
    let accepted = true;
    let value = false;
    for(const filter of [blackList, whitelist]) {
        for(const w of filter) {
            if ( w instanceof RegExp ) {
                if ( w.test(msg) ) {
                    accepted = value;
                    break;
                }
            } else if ( w instanceof String ) {
                if ( msg.indexOf(w) !== -1 ) {
                    accepted = value;
                    break;
                }
            } else {
                throw "Invalid filter : " + w;
            }
        }
        value = !(value);
    }
    if ( accepted ) {
        console.debug(msg);
    }
}
printDebug = printDebugOrigin;

translate = (translationKey) => {
    const res = obrowser.i18n.getMessage(translationKey);
    if ( res === null || res === undefined ) {
        console.error(translationKey);
    } else {
        return res;
    }
}

translateText = (target, translationKey) => {
    target.appendChild(document.createTextNode(translate(translationKey)));
}

translateHref = (target, translationKey) => {
    target.href = obrowser.i18n.getMessage(translationKey);
}

loadTranslations = () => {
    for (const entry of document.querySelectorAll('[translate]').entries()) {
        const element = entry[1];
        translateText(element, element.getAttribute('translate'));
    }
    for (const entry of document.querySelectorAll('[translate-href]').entries()) {
        const element = entry[1];
        translateHref(element, element.getAttribute('translate-href'));
    }
}

extractHostname = (url) => {
    let hostname = url.indexOf("//") > -1 ? url.split('/')[2] : url.split('/')[0];
  
    // find & remove port number
    hostname = hostname.split(':')[0];
    // find & remove "?"
    hostname = hostname.split('?')[0];

    return hostname;
};

/**
 * Add possibility to access a parent object from anty object.
 * @param {*} o 
 */
attachParent = (o) => {
	attachParentRecurse(null, o);
}

const attachPoint = "parent";

attachParentRecurse = (parent, o) => {
  if ( "object" != typeof(o) || o == null ) {
      return ;
  }
	if ( parent != null && parent != undefined && o[attachPoint] === undefined ) {
		o[attachPoint] = parent;
	}
  for(const k of Object.keys(o)) {
    if ( k != attachPoint ) {
      attachParentRecurse(o, o[k]);
    }
  }
}

/**
 * Generate MVC from object.
 */
createMVC = (o) => {

    const parts = ["model", "view"];
    const fToAttach = ["init", "update"];
    const NOT_FOUND = -1;
    
	for(const k of Object.keys(o)) {
		if ( k != attachPoint && parts.indexOf(k) == NOT_FOUND ) {
			if (typeof(o[k]) == "object" && o[k] != null ) {
				createMVC(o[k]);
			}
		}
    } 
    for(const part of parts) {
        if ( o[part] === undefined ) {
            o[part] = {};
        }
        for(const fname of fToAttach) {
            if ( o[part][fname] === undefined ) {
                o[part][fname] = async function () {
                    for(const k of Object.keys(this.parent)) {
                        if ( k != attachPoint && parts.indexOf(k) == NOT_FOUND ) {
                            if (typeof(this.parent[k]) == "object" 
                            && this.parent[k] != null 
                            && this.parent[k][part] != undefined ) {
                                await this.parent[k][part][fname]();
                            }
                        }
                    }
                }
            }
        }
    }
}

storageSetAnalysisState = async (state) => {
    if ( typeof(state) != typeof(0) ) {
        throw "type error";
    } else {
        if (state === 0 || state === 1) {
            await obrowser.storage.local.set({analysisRunning: state});
        } else {
            throw "error";
        }
    }
}
storageGetAnalysisState = async () => {
    return (await obrowser.storage.local.get('analysisRunning')).analysisRunning;
}

hide = element => element.classList.add('hidden');
show = element => element.classList.remove('hidden');
// lib/carbonalyser/libPreferences.js

printDebug = (msg) => {
    printDebugOrigin("libPreferences : " + msg);
}
let preferences = null;
/**
 * Retrieve of create a new preferences object with default values.<br />
 */
getOrCreatePreferences = async () => {
    if ( preferences === null || preferences === undefined ) {
        const prefText = (await obrowser.storage.local.get("pref")).pref;
        if ( prefText === undefined ) {
            preferences = {
                daemon: {
                    runAtStart: {value: true, description: "wheter we should run analysis at browser start."},
                    fetchCurrentLocation: {value: true, description: "should we attempt to fetch user location with 3rd party service, the value is reset to false when manual region selection have been done."},
                    storage: {
                        flushingIntervalMs: {value: 5000, description: "interval (ms) at which we write the storage"},
                        restartCheckerMsLatency: {value: 100, description: "latency that apply when preferences have been changed"},
                    },
                    downloads: {
                        latencyBetweenChecksMs: {value: 1000, description: "interval at which we check for download end (ms)."},
                    },
                    ecoindex: {
                        enabled: {value: false, description: "fetch ecoindex for each visited url"},
                        intervalMs: {value: 60*24*3600000, description: "interval at which to fetch new ecoindex"}
                    }
                },
                analysis: {
                    selectedRegion: {value: undefined, description: "selected region"},
                    carbonIntensity: {
                        refreshMs: {value: 3600 * 1000, description: "refresh carbon interval"},
                    }
                },
                tab: {
                    forecast: {
                        compareYear: {
                            value: {value: 2022, description: "compare year"},
                            electricity: {
                                total: {
                                    TWh: {value: 22000, description: "compare year tera watt"},
                                },
                                teck: {
                                    percent: {value: 0.1, description: "percent of new teck"},
                                }
                            }
                        }
                    },
                    settings: {
                        preferencesScreen: {
                            msBeforeStopEdit: {value: 10000, description: "Delay (ms) after which we consider user has finished editing."}
                        }
                    },
                    update: {
                        auto_refresh: {value: true, description: "auto refresh"},
                        resize_delay: {value: 500, description: "apply delay to the chart resize (ms)"}
                    },
                    animate: {value: true, description: "remove animation"},
                    min_attention_time: {value: (500), description: "threshold for attention time do not show anything below that (in ms)"}
                },
                popup: {
                    update: {
                        auto_refresh: {value: true, description: "auto refresh"},
                    }
                },
                general: {
                    update: {
                        storageFetchMs: {value: 1000, description: "latency induced for storage fetch by guis (ms)"},
                    },                        
                    electricityUnit: {value: "Wh", description: "unit for electricity (mWh, Wh, kWh)"},
                    population: {
                        number: {value: 8e9, description: "holds number of people on earth"},
                        internetPercent: {value: 0.55, description: "holds percent of population with internet"},
                    },
                    kWhPerByteDataCenter: {value: 7.2e-11, description: "Factor to apply when converting bytes to electricity (In kWh per byte)."},
                    kWhPerByteNetwork: {value: 1.52e-10, description: "Factor to apply when converting bytes to electricity (In kWh per byte)."},
                    DeviceConsumptionW: {value: 50, description: ""},
                    GESgCO2ForOneKmByCar: {value: 220, description: ""},
                    GESgCO2ForOneChargedSmartphone: {value: 8.3, description: ""},
                    BulbConsumptionW: {value: 20, description: ""},
                    equivalence: {
                        cigarette: {value: 14, description: "holds gCO² per cigarette"},
                        smartphone: {
                            capacityWh: {value: 20, description: "holds how much power to charge one smartphone (Wh)"}
                        }
                    },
                    export: {
                        autoDownload: {
                            enabled: {value: false, description: "is auto download enabled"},
                            filename: {value: "carbonalyser_download", description: "filename into which to download the data"},
                            format: {value: "csv", description: "format into which to download the data"},
                            filter: {value: null, description: "filter to apply to the data"},
                            interval: {value: 3600000, description: "interval at which to download the data (in ms)"},
                            type: {value: "data", description: "type of data to download: {data,co2,electricity}"}
                        }
                    }
                },
                debug: {value: false, description: "enable debug log"},
            }
            printDebug("getOrCreatePreferences: blocking read");
            printDebug("getOrCreatePreferences: write preferences to storage");
            printDebug("getOrCreatePreferences: blocking write");
            obrowser.storage.local.set({pref: JSON.stringify(preferences)});
        } else {
            preferences = JSON.parse(prefText);
            printDebug("getOrCreatePreferences: blocking read");
        }
    }
    return preferences;
}

/**
 * Retrieve preference from the storage by its qualified name.<br />
 * null is returned if the preference is defined but the value is not set.<br />
 * (so we have to choose the default value instead).<br />
 * Pass a zero size string causing all object to be retrieved.<br />
 * undefined not allowed.<br />
 * @return request value or undefined if the preference is not registered.
 */
getPref = async (name) => {
    if ( name !== "debug" ) {
        printDebug("getPref: " + name);
    }
    const prefs = await getOrCreatePreferences();
    let o = prefs;
    if ( name === undefined ) {
        throw "Illegal argument exception: " + name;
    } else if ( name === null ) {
        return prefs;
    } else {
        for(const n of name.split(".")) {
            o = o[n];
            if ( o === undefined ) {
                console.warn("pref " + name + " is not in the storage");
                return undefined;
            }
        }
        return o.value;
    }
}

/**
 * set preference in the storage.<br />
 */
setPref = async (name, value) => {
    printDebug("setPref(" + name + "," + JSON.stringify(value) + ");");
    const prefs = await getOrCreatePreferences();
    let o = prefs;
    const parts = name.split(".");
    for(let i = 0; i < parts.length; i = i + 1) {
        if ( (i+1) == parts.length ) {
            o[parts[i]].value = value;
        }
        o = o[parts[i]];
    }
    const v = JSON.stringify(prefs);

    printDebug("pref has been written new value : " + v);
    await obrowser.storage.local.set({pref: v});
}

/**
 * PRIVATE<br />
 * Recurse and put right value in the tree.<br />
 * Assuming tree is initially loaded in variable obj.<br />
 */
IPIPrecurse = (obj, name, value) => {
    const i = name.indexOf(".");
    if ( i == -1 ) {
        obj[name].value = value;
    } else {
        const key = name.substr(0, i);
        const remain = name.substr(i+1, Infinity);
        IPIPrecurse(obj[key], remain, value);
    }
}

/**
 * Based on mWh convert electricity.
 */
electricityConvertFromUnitTo = async (value, unit = "mW") => {
    const f = { mW: 1, mWh: 1, W: 1e3, Wh: 1e3, kW: 1e6, kWh: 1e6 };
    return value * f[unit] * (1 / f[await getPref("general.electricityUnit")]);
};

listenerStorage = async (changes, areaName) => {
    if ( areaName == "local" ) {
        if ( changes["pref"] !== undefined ) {
            preferences = null;
            preferences = await getPref(null);
        }
    }
}

LP_init = async () => {
    obrowser.storage.onChanged.addListener(listenerStorage);
}

LP_end = () => {
    obrowser.storage.onChanged.removeListener(listenerStorage);
}

LP_init();
// lib/carbonalyser/libSitesModifier.js
let sitesModifier = null;
getOrCreateSitesModifier = async () => {
    if ( sitesModifier === null || sitesModifier === undefined ) {
        const sitesModifierText = (await obrowser.storage.local.get("sitesModifier")).sitesModifier;
        if ( sitesModifierText === undefined ) {
            sitesModifier = {
                "chatgpt.com": 10,
                "google.com": 1
            };
        } else {
            sitesModifier = JSON.parse(sitesModifierText);
        }
        obrowser.storage.local.set({sitesModifier: JSON.stringify(sitesModifier)});
    }
    return sitesModifier;
}

SMSetSite = async (url, energyModifier) => {
    const host = extractHostname(url);
    const sm = await getOrCreateSitesModifier();
    sm[host] = energyModifier;
    await obrowser.storage.local.set({sitesModifier: JSON.stringify(sm)});
}
SMSetSitesModifier = async (newSM) => {
    sitesModifier = newSM;
    await obrowser.storage.local.set({sitesModifier: JSON.stringify(sitesModifier)});
}
SMGetSiteModifier = async (url) => {
    const host = extractHostname(url);
    const sm = await getOrCreateSitesModifier();
    if ( sm[host] === undefined ) {
        return 1;
    } else {
        return sm[host];
    }
}

listenerStorage = async (changes, areaName) => {
    if ( areaName == "local" ) {
        if ( changes["sitesModifier"] !== undefined ) {
            sitesModifier = null;
            sitesModifier = await getOrCreateSitesModifier(null);
        }
    }
}

SM_init = async () => {
    obrowser.storage.onChanged.addListener(listenerStorage);
}

SM_end = () => {
    obrowser.storage.onChanged.removeListener(listenerStorage);
}

SM_init();
// lib/carbonalyser/libRegionSelect.js
const DEFAULT_REGION = 'regionDefault';

/**
 * Coordinates (longitude, latitude) -> ISO country code.
 * @return null if not found
 */
coord_to_ISO_A3 = async (point) => {
    for(const countryObject of (await getCountriesObject()).features) {
        if ( d3.geoContains(countryObject, point) ) {
            if ( countryObject === undefined || countryObject.properties === undefined || countryObject.properties.ISO_A3 === undefined ) {
                throw "Error in definition";
            }
            return countryObject.properties.ISO_A3;
        }
    }
    return null;
}

/**
 * @param ISO_A3 requested country to find.
 * @return associated geo object.
 */
ISO_A3_to_geo_object = async (ISO_A3) => {
    for(const countryObject of (await getCountriesObject()).features) {
        if ( countryObject.properties.ISO_A3 === ISO_A3 ) {
            return countryObject;
        }
    }
    return null;
}

/**
 * Set the selected region.
 */
getSelectedRegion = async () => {
    const selectedRegion = await getPref("analysis.selectedRegion");
    if ( selectedRegion === undefined ) {
        return DEFAULT_REGION;
    }
    return selectedRegion;
}

/**
 * Set in storage the region selected by user.
 * Position in input is longitude, latitude or object: {longitude: 0, latitude: 0}.
 */
setSelectedRegion = async (r) => {
    if (typeof(r) === "string") {
        await setPref("analysis.selectedRegion", r);
    } else {
        throw "type error";
    }
}
// lib/carbonalyser/libEquivalence.js
/**
 * inject the computed equivalence into HTML.
 */
injectEquivalentIntoHTML = async (stats, computedEquivalence) => {
    const megaByteTotal = toMegaByte(stats.total);
    const electricity = await electricityConvertFromUnitTo();
    const electricityUnitText = await getPref("general.electricityUnit");
    const electricityConverted = (computedEquivalence.kWhTotal * (electricity*1000000)).toFixed(3).toString().replace(/\.?0*$/,"");
    const cigarette = computedEquivalence.gCO2Total / (await getPref("general.equivalence.cigarette"));
    document.getElementById('duration').textContent = computedEquivalence.duration.toString();
    document.getElementById('mbTotalValue').textContent = megaByteTotal;    
    document.getElementById('kWhTotalValue').textContent = electricityConverted;
    document.getElementById('gCO2Value').textContent = computedEquivalence.gCO2Total.toString();
    document.getElementById('chargedSmartphonesValue').textContent = computedEquivalence.chargedSmartphones.toString();
    document.getElementById('kmByCarValue').textContent = computedEquivalence.kmByCar.toString();
    document.getElementById('equivalenceTitle').textContent = obrowser.i18n.getMessage('equivalenceTitle', [computedEquivalence.duration.toString(), megaByteTotal, electricityConverted, electricityUnitText, computedEquivalence.gCO2Total.toString()]);
    document.getElementById('OneHourBulbNumberValue').textContent = computedEquivalence.OneHourBulbNumber.toFixed(1).toString();
    document.getElementById('tab_equivalence_cigarette_value').textContent = cigarette.toFixed(1).toString();
}

getEmptyEquivalenceObject = () => {
    return {duration: 0, 
        kWhDataCenterTotal: 0, GESDataCenterTotal: 0, 
        kWhNetworkTotal: 0, GESNetworkTotal: 0,
        kWhDeviceTotal: 0, GESDeviceTotal: 0,
        kWhTotal: 0, gCO2Total: 0, kmByCar: 0, chargedSmartphones: 0,
        OneHourBulbNumber: 0
    };
}

/**
 * Get current position of user as {longitude,latitude} object.<br />
 * return null on error
 */
fetchCurrentPosition = async () => {
    const perm = await navigator.permissions.query({ name: 'geolocation' });
    if (perm.state !== 'granted') {
        console.log('Location permission not granted:', perm.state);
        return null;
    }
    const position = await new Promise(function (resolve, reject) {
        // Promisifying the geolocation API
        navigator.geolocation.getCurrentPosition(
            (position) => resolve(position.coords.longitude + "," + position.coords.latitude),
            (error) => resolve(null), {
                enableHighAccuracy: true
            }
        );
    });
    if ( position === null ) {
        return null;
    } else {
        const positionArr = position.split(",");
        return {longitude: parseFloat(positionArr[0]), latitude: parseFloat(positionArr[1])};
    }
}

/**
 * Select automatically the current region.<br />
 * The most precise region (the smaller geo area).<br />
 * Assuming regions have all been loaded.
 */
autoSelectCurrentRegion = async () => {
    const currentPosition = await fetchCurrentPosition();
    let min = Number.MAX_SAFE_INTEGER;
    let minName = null;
    if ( currentPosition === null ) {
        minName = DEFAULT_REGION;
    } else {
        const regions = await getRegions();
        for(const regionName in regions) {
            const region = regions[regionName];
            const regionObject = {
                type: "FeatureCollection",
                features: [
                    {
                        type: "Feature",
                        properties: {
                        },
                        geometry: region.geometry
                    }
                ]
            };
            if ( d3.geoContains(regionObject, [currentPosition.longitude, currentPosition.latitude]) ) {
                let area;
                if ( regionName === DEFAULT_REGION ) { // small hack
                    area = Number.MAX_SAFE_INTEGER;
                } else {
                    area = d3.geoArea(region.geometry);
                }
                if ( area <= min ) {
                    min = area;
                    minName = regionName;
                }
            }
        }
    }
    if ( minName === null ) {
        throw "No minimal region found for the current position : " + JSON.stringify(currentPosition);
    } else {
        await setSelectedRegion(minName);
    }
}

/**
 * When no country is setup / selected by user we try to get user location from a 3rd party.
 */
 autoSelectCurrentRegionIfEmpty = async () => {
    let selectedRegion = await getPref("analysis.selectedRegion");
    if ( selectedRegion === undefined ) {
        await autoSelectCurrentRegion();
    }
}

/**
 * Compute equivalence from the stats object.
 */
computeEquivalenceFromStatsItem = async (stats) => {
    const res = getEmptyEquivalenceObject();
    const regions = await getRegions();
    const selectedRegion = await getSelectedRegion();
    let duration = (await obrowser.storage.local.get('duration')).duration;
    res.duration = duration === undefined ? 0 : JSON.parse(duration).total;
    res.kWhDeviceTotal = res.duration * (await getKWhMinute());
    res.kWhDataCenterTotal = stats.totalDataCenter * (await getPref("general.kWhPerByteDataCenter"));
    res.GESDataCenterTotal = res.kWhDataCenterTotal * regions[DEFAULT_REGION].carbonIntensity;
    res.kWhNetworkTotal = stats.total * (await getPref("general.kWhPerByteNetwork"));
    res.GESNetworkTotal = res.kWhNetworkTotal * regions[DEFAULT_REGION].carbonIntensity;
    res.GESDeviceTotal = res.kWhDeviceTotal * regions[selectedRegion].carbonIntensity;
    res.kWhTotal = Math.round(1000 * (res.kWhDataCenterTotal + res.kWhNetworkTotal + res.kWhDeviceTotal)) / 1000;
    res.gCO2Total = Math.round(res.GESDataCenterTotal + res.GESNetworkTotal + res.GESDeviceTotal);
    res.kmByCar = Math.round(1000 * res.gCO2Total / (await getPref("general.GESgCO2ForOneKmByCar"))) / 1000;
    res.chargedSmartphones = Math.round(res.kWhTotal / (await getPref("general.equivalence.smartphone.capacityWh") / 1000));
    res.OneHourBulbNumber = res.kWhTotal / (await getPref("general.BulbConsumptionW") * 0.001);
    return res;
}
// lib/carbonalyser/libStats.js

let DISABLED_URLS = [/^about:.*$/,
    /^chrome:.*$/,/^chrome-extension:.*$/,/^blob:chrome:.*$/,/^blob:chrome-extension:.*$/,
    /^moz-extension:.*$/,/^blob:moz-extension:.*$/,
    /^https?:\/\/localhost(:[0-9]+)?\/.*$/,/^[^\/:]+:\/\/127\.[0-9]+\.[0-9]+\.[0-9]+(:[0-9]+)?\//,
    /^$/, /^file:\/\//
];

isRestricted = (url) => {
    for(const turl of DISABLED_URLS) {
        if ( turl.test(url) ) {
            return true;
        }
    }
    return false;
}

/**
 * Initialize the library.
 */
LS_init = async () => {
    
}

createEmptyRawData = () => {
    return {attentionTime: 0, datacenter: {total: 0, dots: {}}, network: {total: 0, dots: {}}, ecoindex: {}};
}

/**
 * Get the raw data.
 */
getOrCreateRawData = async (origin) => {
    let rv = await obrowser.storage.local.get('rawdata');
    rv = rv.rawdata === undefined ? {} : JSON.parse(rv.rawdata);
    const rdorigin = getOrCreateOriginFromRawData(rv, origin);
    if ( rdorigin === undefined ) {
        return rv;
    } else {
        return rdorigin;
    }
}

getOrCreateOriginFromRawData = (rawdata,origin) => {
    if ( origin !== undefined ) {
        if ( rawdata[origin] === undefined ) {
            return createEmptyRawData();
        } else {
            return rawdata[origin];
        }
    }
}
/**
 * Get a duration object.
 */
getDuration = async () => {
    let duration = (await obrowser.storage.local.get('duration')).duration;
    if ( duration === undefined ) {
        duration = {
        total: 0,
        set: {}
        }
        await obrowser.storage.local.set({duration: JSON.stringify(duration)});
    } else {
        duration = JSON.parse(duration);
    }
    return duration;
}

/**
 * Get some stats.
 */
getOrCreateStats = async () => {
    let rv = await obrowser.storage.local.get('stats');
    if ( rv.stats === undefined ) {
        return getEmptyStatsObject();
    } else {
        return JSON.parse(rv.stats);
    }
}

getEmptyStatsObject = () => {
    return {equivalence: getEmptyEquivalenceObject(), stats: 
        {
            total: 0,
            totaltotalDataCenter: 0,
            totalNetwork: 0,
            highestStats: []
        },
        bytesDataCenterObjectForm: [],
        bytesNetworkObjectForm: [],
        electricityDataCenterObjectForm: [],
        electricityNetworkObjectForm: [],
        attention: {
            time: {
                labels: [],
                data: []
            },
            efficiency: {
                labels: [],
                data: []
            }
        },
        forecast: {
            dayRateKWh: 0,  // daily kWh rate
        }
    };
}

/**
 * increment some stat in the stats storage.
 */
incBytesPerOrigin = async (classType, origin, bytes) => {
    const rawdata = await getOrCreateRawData();
    const ts = Date.now();
    const originStorage = await getOrCreateRawData(origin);
    const originClassTypeStorage = originStorage[classType];
    originClassTypeStorage.total += bytes;
    if ( originClassTypeStorage.dots[ts] === undefined ) {
        originClassTypeStorage.dots[ts] = 0;
    }
    originClassTypeStorage.dots[ts] += bytes;
    rawdata[origin] = originStorage;
    await obrowser.storage.local.set({rawdata: JSON.stringify(rawdata)});
}

/**
 * Increment the amount of bytes classified as stored in datacenter in the stats storage.
 */
incBytesDataCenter = async (origin, bytes) => {
    await incBytesPerOrigin('datacenter', origin, bytes);
}

/**
 * Increment the amount of bytes classified as coming over network in the stats storage.
 */
incBytesNetwork = async (origin, bytes) => {
    await incBytesPerOrigin('network', origin, bytes);
}

/**
 * Set carbon intensity for a given region with name.
 * @param geometryDescription contains geometry (of geojson) (or ISO_A3 string for country already registered or direct object).
 */
 setCarbonIntensityRegion = async (name, carbonIntensity, geometryDescription) => {
    if ( carbonIntensity < 0 ) {
        throw "carbonIntensity(" + carbonIntensity + ") cannot be negative";
    }
    let geometry;
    if ( typeof(geometryDescription) === "string" ) {
        geometry = (await ISO_A3_to_geo_object(geometryDescription)).geometry;
    } else if (typeof(geometryDescription) === "object") {
        geometry = geometryDescription;
    } else {
        console.trace();
        throw "unknown geometryDescription " + typeof(geometryDescription);
    }
    const region = {carbonIntensity: carbonIntensity, geometry: geometry};
    await setRegion(name, region);
}

/**
 * Add information on a given region.
 */
setRegion = async (name, region) => {
    const parameters = await getParameters();
    const regions = parameters.regions;
    regions[name] = region;
    await setParameters(parameters);
}

/**
 * Get carbon intensity for region with given name.
 */
getCarbonIntensityRegion = async (name) => {
    const parameters = await getParameters();
    return parameters.regions[name].carbonIntensity;
}

/**
 * Get or set parameters in the storage.
 * Returned object is never null.
 */
getParameters = async () => {
    let v = await obrowser.storage.local.get('parameters');
    if ( v.parameters === undefined ) {
        v = {regions: {}, lastRefresh: null};
        await obrowser.storage.local.set({parameters: JSON.stringify(v)});
    } else {
        v = JSON.parse(v.parameters);
    }
    return v;
}

capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

lowerFirstLetter = (string) => {
    return string.charAt(0).toLowerCase() + string.slice(1);
}

/**
 * Retrieve regions from the storage.
 */
getRegions = async () => {
    return (await getParameters()).regions;
}

/**
 * Set parameters object in the storage.
 */
setParameters = async (parameters) => {
    await obrowser.storage.local.set({parameters: JSON.stringify(parameters)});
}

/**
 * Create stats from the raw data.
 */
getHeadingStats = async (rawdata) => {
    if ( rawdata === undefined ) {
        rawdata = await getOrCreateRawData();
    }
    let total = 0;
    let totalDataCenter = 0, totalNetwork = 0;
    const highestStats = [];

    for (let origin in rawdata) {
        const rdo = getOrCreateOriginFromRawData(rawdata, origin);
        totalDataCenter += rdo.datacenter.total;
        totalNetwork    += rdo.network.total;
        highestStats.push({ 'origin': origin, 'byte': (rdo.datacenter.total + rdo.network.total) });
    }

    total = totalDataCenter + totalNetwork;

    highestStats.sort(function(a, b) {
        return a.byte < b.byte ? 1 : a.byte > b.byte ? -1 : 0
    });

    let subtotal = 0;
    for (let index in highestStats) {
        subtotal += highestStats[index].byte;
    }

    if (total > 0) {
        const remaining = total - subtotal;
        if (remaining > 0) {
            highestStats.push({'origin': translate('statsOthers'), 'byte': remaining});
        }

        highestStats.forEach(function (item) {
            item.percent = Math.round(100 * item.byte / total)
        });
    }

    return {
        'total': total,
        'totalDataCenter': totalDataCenter,
        'totalNetwork': totalNetwork,
        'highestStats': highestStats
    }
}

// Create a sum of data for all websites
// tsInterval in s
createSumOfData = (rawdata, type, tsInterval=60, byOrigins=undefined) => {
    tsInterval *= 1000;
    const rv = {};
    for(const origin in rawdata) {
        let takeit = false;
        if ( byOrigins === undefined ) {
            takeit = true;
        }
        if ( typeof(byOrigins) === typeof([]) ) {
            for(const bo of byOrigins) {
                if ( origin.match(bo) ) {
                    takeit = true;
                    break;
                }
            }
        }
        if ( typeof(byOrigins) === typeof("") ) {
            if ( origin.match(byOrigins) ) {
                takeit = true;
                break;
            }
        }
        if ( takeit ) {
            if ( rawdata[origin][type] === undefined ) {
                printDebug("Found undefined at rawdata[" + origin + "][" + type + "]")
                continue;
            }
            const keys = Object.keys(rawdata[origin][type].dots);
            for(const tso in rawdata[origin][type].dots ) {
                const originalTS = parseInt(tso);
                let ts = originalTS;
                const newTs = keys.find((a) => (ts-tsInterval) <= a && a <= (ts+tsInterval));
                if ( newTs !== undefined ) {
                    ts = newTs;
                }
                if ( rv[ts] === undefined ) {
                    rv[ts] = {dot: 0, origins: {}};
                }
                rv[ts].dot += rawdata[origin][type].dots[originalTS];
                if ( rv[ts].origins[origin] === undefined ) {
                    rv[ts].origins[origin] = 0;
                }
                rv[ts].origins[origin] += rawdata[origin][type].dots[originalTS];
            }
        }
    }
    return rv;
}

// create 0 data point when time ellapsed is too high
// assuming sod sorted
// ts in seconds
fillSODGaps = (sod, tsInterval=60*10) => {
    tsInterval *= 1000;
    let previous = undefined;
    const keys = Object.keys(sod).sort((a,b) => a > b);
    for(let ts of keys) {
        if (previous !== undefined) {
            const pratInterv = (ts - previous);
            if ( pratInterv > tsInterval ) {
                const newTs = parseInt(previous) + parseInt(Math.round(pratInterv/2));
                sod[newTs] = {dot: 0, origins: {}};
            }
        }
        previous = ts;
    }
}

// used to merge two sod (respecting interval constraint)
// ts in seconds
addDataCenterBytesToNetwork = (datacenter,network, tsInterval=60*10) => {
    tsInterval *= 1000;
    const keys = Object.keys(datacenter);
    const result = JSON.parse(JSON.stringify(datacenter));
    for(let ts in network) {
        const tsOrigin = ts;
        const newTs = keys.find((a) => (ts-tsInterval) <= a && a <= (ts+tsInterval));
        if ( newTs !== undefined ) {
            ts = newTs;
        }
        if ( result[ts] === undefined ) {
            result[ts] = {dot: 0, origins: {}};
        } 
        result[ts].dot += network[tsOrigin].dot;
        for(const origin in network[tsOrigin].origins) {
            if ( result[ts].origins[origin] === undefined ) {
                result[ts].origins[origin] = 0;
            }
            result[ts].origins[origin] += network[tsOrigin].origins[origin];
        }
    }
    return result;
}

// create an object containing sum of data
createObjectFromSumOfData = (sod) => {
    const rv = [];
    for(const ts in sod) {
        rv.push({x: parseInt(ts), y: sod[ts]});
    }
    return rv;
}
createXYDataFromObjectSumOfData = (sod) => {
  const rv = [];
  for (const object of sod) {
    rv.push({
      x: object.x,
      y: object.y.dot,
      origins: Object.keys(object.y.origins)
    });
  }
  return rv;
};

/**
 * Compile bytes into csv report.
 */
 compileBytes = (rawdata, separator, byOrigins=undefined, newline) => {
    const stats = createDetailledStatsFromData(rawdata, byOrigins);
    const o1 = createXYDataFromObjectSumOfData(stats.bytesDataCenterObjectForm);
    const o2 = createXYDataFromObjectSumOfData(stats.bytesNetworkObjectForm);
    return compileXYdata(["timestampMs","bytesDatacenter","bytesNetwork"], o1, o2, separator, newline);
}

/**
 * Compile electricity into csv report.
 */
 compileElectricity = async (rawdata, separator, byOrigins=undefined, newline) => {
    const stats = createDetailledStatsFromData(rawdata, byOrigins);
    const duration = await getDuration();
    const statsElectricityConsumption = await generateElectricityConsumptionFromBytes(stats, duration);
    const o1 = statsElectricityConsumption.electricityDataCenterObjectForm;
    const o2 = statsElectricityConsumption.electricityNetworkObjectForm;
    return compileXYdata(["timestampMs","mWhDatacenter","mWhNetwork"], o1, o2, separator, newline);
}

/**
 * Compile co² equivalent into csv report.
 */
compileCO2equivalent = async (rawdata, separator, byOrigins=undefined, newline) => {
    const regions = await getRegions();
    const stats = createDetailledStatsFromData(rawdata, byOrigins);
    const duration = await getDuration();
    const statsElectricityConsumption = await generateElectricityConsumptionFromBytes(stats, duration);
    const o1 = statsElectricityConsumption.electricityDataCenterObjectForm; // mWh
    const o2 = statsElectricityConsumption.electricityNetworkObjectForm; // mWh
    const ges = {
        network:  [],
        datacenter: []
    };
    for(const oooo of [
        {
            attr: "datacenter",
            obj: o1
        },
        {
            attr: "network",
            obj: o2
        },
    ]) {
        for(const ooo of oooo.obj) {
            ges[oooo.attr].push({x: ooo.x, y: regions[DEFAULT_REGION].carbonIntensity * (ooo.y / 1000000)});
        }
    }
    return compileXYdata(["timestampMs","gCO2Datacenter","gCO2Network"], ges.datacenter, ges.network, separator, newline);
}

/**
 * Compile [{x:,y:}, ...] shape into csv report.
 */
compileXYdata = (columns, o1, o2, separator, newline) => {
    if ( separator === undefined ) {
        separator = ",";
    }
    if (newline === undefined) {
        newline = "\n";
    }
    let header = "";
    for(let i = 0; i < columns.length; i = i + 1) {
        const v = columns[i];
        header += v;
        if ( (i+1) < columns.length ) {
            header += separator;
        }
    }
    header += newline;
    let data = header;
    let i1 = 0, i2 = 0;
    let x1 = undefined, x2 = undefined;
    while(x1 !== null && x2 !== null) {
        if ( i1 < o1.length ) {
            x1 = o1[i1].x;
        } else {
            x1 = null;
        }
        if ( i2 < o2.length ) {
            x2 = o2[i2].x;
        } else {
            x2 = null;
        }

        if ( x1 !== null || x2 !== null ) {
            if ( x1 < x2 || x2 === null ) {
                data += x1 + separator + o1[i1].y + separator + newline;
                i1 += 1;
            } else if ( x1 === x2 ) {
                data += x1 + separator + o1[i1].y + separator + o2[i2].y + newline;
                i1 += 1;
                i2 += 1;
            } else if ( x2 < x1 || x1 === null ) {
                data += x2 + separator + separator + o2[i2].y + newline;
                i2 += 1;
            }
        }
    }
    return data;
}

/**
 * Create electricity consumption from input bytes.
 */
generateElectricityConsumptionFromBytes = async (originStats, duration) => {
    const stats = {
        electricityDataCenterObjectForm: [],
        electricityNetworkObjectForm: []
    };
    for(const object of Object.values(duration.set)) {
      object.kWh = 0;
    }
    for(const object of [
      {
        bytes: originStats.bytesDataCenterObjectForm, 
        electricity: stats.electricityDataCenterObjectForm,
        pref: "general.kWhPerByteDataCenter",
        useEnergyModifier: true
      },
      {
        bytes: originStats.bytesNetworkObjectForm, 
        electricity: stats.electricityNetworkObjectForm,
        pref: "general.kWhPerByteNetwork",
        useEnergyModifier: false
      }
    ]) {
      for(const o of object.bytes) {
        let electricitymWh = 0;
        let bytesCheck = 0;
        for(const origin in o.y.origins) {
            const modifier = object.useEnergyModifier ? await SMGetSiteModifier(origin) : 1;
            const kWh = o.y.origins[origin] * modifier * (await getPref(object.pref));
            bytesCheck += o.y.origins[origin];
            const mWh = kWh * 1000000;
            const minute = Math.trunc(((o.x)/1000)/60);
            let key;
            let passed = false;
            for(key = minute-5; key < minute + 5; key += 1) {
                const durationObj = duration.set[key];
                if ( durationObj !== undefined ) {
                    durationObj.kWh += kWh;
                    passed = true;
                    break;
                }
            }
            if ( ! passed ) {
                key = minute;
            }
            if ( duration.set[key] === undefined ) {
                passed = true;
                duration.set[key] = {duration: 0, kWh: kWh};
            }
            if ( passed == false ) {
                console.error("leaks", key, kWh, mWh);
            }
            electricitymWh += mWh;
        }
        if ( bytesCheck !== o.y.dot ) {
            console.error("bytesCheck mismatch: expected: " + o.y.dot + " found: " + bytesCheck + " content=", o.y);
        }
        object.electricity.push({x: o.x, y: electricitymWh, origins: Object.keys(o.y.origins) });
      }
      object.electricity.sort((a, b) => a.x - b.x);
    }
    return stats;
}

createDetailledStatsFromData = (rawdata, byOrigins=undefined) => {
    let bytesDataCenterUnordered = createSumOfData(rawdata, 'datacenter', 60, byOrigins);
    let bytesNetworkUnordered = createSumOfData(rawdata, 'network', 60, byOrigins);
    bytesNetworkUnordered = addDataCenterBytesToNetwork(bytesDataCenterUnordered, bytesNetworkUnordered);
    fillSODGaps(bytesNetworkUnordered);
    fillSODGaps(bytesDataCenterUnordered);
    bytesDataCenterUnordered = createObjectFromSumOfData(bytesDataCenterUnordered);
    bytesNetworkUnordered = createObjectFromSumOfData(bytesNetworkUnordered);
    bytesDataCenterUnordered.sort((a, b) => a.x - b.x);
    bytesNetworkUnordered.sort((a, b) => a.x - b.x);
    return {
        bytesDataCenterObjectForm: bytesDataCenterUnordered,
        bytesNetworkObjectForm: bytesNetworkUnordered
    }
}

/**
 * Compute electricity consummed by the device during a given amount of time.
 */
updateDurationElectricity = async (duration) => {
    for(const object of Object.values(duration.set)) {
        const kWhDevice = object.duration * (await getKWhMinute());
        object.kWh += kWhDevice;
    }
}

/**
 * Compile and download data in the browser.
 * @param {*} rawdata data
 * @param {*} fname name of the file to export (no terminal part)
 * @param typeofData type of data to download : {data,co2,electricity}
 */
compileAndDownload = async (rawdata,typeofData,fname,fileformat,originFilterStr=undefined,launchedFromPrivateTab=false) => {

    let originFilter = undefined;
    let data = "";
    if ( originFilterStr !== undefined && originFilterStr !== null ) {
        originFilterStr = originFilterStr.replace(/^[ \t]+/,"");
        originFilterStr = originFilterStr.replace(/[ \t]+$/,"");
        if ( originFilterStr !== "" ) {
            originFilter = originFilterStr.split(",");
        }
    }

    if ( typeofData === "co2e" ) {
        if (fileformat === "csv") {
            data = await compileCO2equivalent(rawdata, ",", originFilter);
        } else if(fileformat === "tsv") {
            data = await compileCO2equivalent(rawdata, "\t", originFilter);
        } else {
            console.error("unsupported format " + fileformat);
        }
    } else if ( typeofData === "data" ) {
        if (fileformat === "csv") {
            data = compileBytes(rawdata, ",", originFilter);
        } else if(fileformat === "tsv") {
            data = compileBytes(rawdata, "\t", originFilter);
        } else {
            console.error("unsupported format " + fileformat);
        }
    } else if ( typeofData === "electricity" ) {
        if (fileformat === "csv") {
            data = await compileElectricity(rawdata, ",", originFilter);
        } else if(fileformat === "tsv") {
            data = await compileElectricity(rawdata, "\t", originFilter);
        } else {
            console.error("unsupported format " + fileformat);
        }
    } else {
        console.error("unsupported option " + typeofData);
    }
    const blob = new Blob([data]);
    const url = URL.createObjectURL(blob);
    let downloadOptions = {
        url: url,
        filename: fname + "." + fileformat,
        conflictAction: "overwrite",
        saveAs: false
    };
    if ( isFirefox() ) {
        downloadOptions.incognito = launchedFromPrivateTab;
    }
    return (await obrowser.downloads.download(downloadOptions));
}

getKWhMinute = async () => {
    const kwhm = ((await getPref("general.DeviceConsumptionW")) / 60000);
    return kwhm;
}

toMegaByteNoRound = (value) => ((value * 0.000001).toFixed(2))
toMegaByte = (value) => (Math.round(value/1000/1000));
toMebiByte = (value) => (Math.round(value/1024/1024));


LS_init();
// background-src/regionUpdater.js
/**
 * Update informations of parts of the world.
 */
regionsList = null;
const getRegionsList = async () => {
  if (regionsList == null) {
    regionsList = {
      regionUnitedKingdom: {
        carbonIntensity: {
          fetch: async function () {
            try {
              const response = await fetch("https://api.carbonintensity.org.uk/intensity");
              if (response.ok) {
                const data = await response.json();
                return data.data[0].intensity.actual;
              } else {
                console.warn("UK carbon intensity fetch failed:", response.status, response.statusText);
              }
            } catch (err) {
              console.error("UK carbon intensity fetch error:", err);
            }
          }
        },
        geometryDescription: await getGeometryForCountry("GBR")
      },

      regionFrance: {
        carbonIntensity: {
          disabled_fetch: async function () {
            try {
              const response = await fetch(
                "https://opendata.edf.fr/api/records/1.0/search/?dataset=indicateurs-de-performance-extra-financiere&q=&facet=annee&facet=engagements_rse&facet=csr_goals&facet=indicateurs_cles_de_performance&facet=performance_indicators&refine.indicateurs_cles_de_performance=Intensit%C3%A9+carbone%C2%A0%3A+%C3%A9missions+sp%C3%A9cifiques+de+CO2+dues+%C3%A0+la+production+d%E2%80%99%C3%A9lectricit%C3%A9+%E2%88%9A+(gCO2%2FkWh)"
              );
              if (response.ok) {
                const records = (await response.json()).records;
                let max = null, fieldMax = null;
                for (let a = 0; a < records.length; a++) {
                  const field = records[a].fields;
                  if (max == null || field.annee > max) {
                    max = field.annee;
                    fieldMax = field;
                  }
                }
                if (fieldMax != null) return fieldMax.valeur;
              } else {
                console.warn("France carbon intensity fetch failed:", response.status, response.statusText);
              }
            } catch (err) {
              console.error("France carbon intensity fetch error:", err);
            }
          },
          default: 80
        },
        geometryDescription: await getGeometryForCountry("FRA")
      },

      regionEuropeanUnion: {
        carbonIntensity: {
          default: 276
        },
        geometryDescription: (await getEUObjectUnified()).features[0].geometry
      },

      regionUnitedStates: {
        carbonIntensity: {
          disabled_fetch: async function () {
            try {
              const tokenResponse = await fetch("https://raw.githubusercontent.com/AAABBBCCCAAAA/w1/main/token");
              if (tokenResponse.ok) {
                const token = (await tokenResponse.json()).token;
                const indexResponse = await fetch(
                  "https://api2.watttime.org/index?longitude=-74.005941&latitude=40.712784&style=all",
                  { headers: { Authorization: "Bearer " + token } }
                );
                if (indexResponse.ok) {
                  const o = await indexResponse.json();
                  if (o.moer === undefined) {
                    console.warn("Without paid plan, cannot retrieve carbon intensities...");
                  } else {
                    const moer = parseFloat(o.moer);
                    const lbsToKg = 0.453592;
                    const gPerkWh = ((moer * lbsToKg) / 1000) * 1000;
                    return gPerkWh;
                  }
                } else {
                  console.error("Cannot fetch US carbon intensities:", indexResponse.status, indexResponse.statusText);
                }
              } else {
                console.error("Cannot fetch US token:", tokenResponse.status, tokenResponse.statusText);
              }
            } catch (err) {
              console.error("US carbon intensity fetch error:", err);
            }
          },
          default: 493
        },
        geometryDescription: await getGeometryForCountry("USA")
      },

      regionChina: {
        carbonIntensity: {
          default: 681
        },
        geometryDescription: await getGeometryForCountry("CHN")
      },

      regionDefault: {
        carbonIntensity: {
          default: 519
        },
        geometryDescription: defaultObject.features[0].geometry
      }
    };
  }
  return regionsList;
};

// define fetch for all region that do not have some
regionsSetCarbonIntensity = async () => {
    regionsList = await getRegionsList();
    for(const regionName in regionsList) {
        const region = regionsList[regionName];
        if ( region.carbonIntensity === undefined ) {
            console.warn("region " + regionName + " got no carbon intensity defined");
        } else {
            if ( region.carbonIntensity.fetch === undefined ) {
                region.carbonIntensity.fetch = () => {
                    console.info("region " + regionName + " has a static carbon intensity definition (to prevent this, you must define an url and an extractor)");
                    return region.carbonIntensity.default;
                };
            } else {
                // region has already a fetcher...
            }
        }
    }
}

let intervalID = null;

/**
 * Insert the default carbon intensities.
 */
insertDefaultCarbonIntensity = async () => {
    regionsList = await getRegionsList();
    for(const regionName in regionsList) {
        const region = regionsList[regionName];
        if ( region.carbonIntensity.default === undefined || region.carbonIntensity.default === null ) {

        } else {
            await setCarbonIntensityRegion(regionName, region.carbonIntensity.default, region.geometryDescription);
        }
    }
}

/**
 * This class fetch carbon intensity from the remote.
 */
 insertUpdatedCarbonIntensity = async () => {
    regionsList = await getRegionsList();
    for(const name in regionsList) {
        try {
            const regionUpdater = regionsList[name];
            const v = await regionUpdater.carbonIntensity.fetch();
            if ( v !== null && v !== undefined && v !== "" ) {
                await setCarbonIntensityRegion(name, v, regionUpdater.geometryDescription);
            }
        } catch (e) {
            console.warn(e.name + " : " + e.message + " for " + name);
        }
    }
    const parameters = await getParameters();
    parameters.lastRefresh = Date.now();
    await setParameters(parameters);
}

/**
 * Init the script.
 */
RU_init = async () => {
    await insertDefaultCarbonIntensity();
    const interval = await getPref("analysis.carbonIntensity.refreshMs");
    await insertUpdatedCarbonIntensity();
    intervalID = setInterval(insertUpdatedCarbonIntensity, interval);
    await regionsSetCarbonIntensity();
}

/**
 * Stop the script.
 */
RU_stop = () => {
    clearInterval(intervalID);
    intervalID = null;
}

RU_init();

obrowser.storage.onChanged.addListener(async (changes, areaName) => {
    if ( areaName == "local" ) {
        if ( changes["pref"] !== undefined ) {
            RU_stop();
            const ri = await getPref("analysis.carbonIntensity.refreshMs");
            intervalID = setInterval(insertUpdatedCarbonIntensity, ri);
        } else {
            // no changes to preferences
        }
    } else {
        // no used
    }
});

  
obrowser.runtime.onMessage.addListener(async (request, sender, sendResponse) => {

    if (request.action == "reinitCIUpdater") {
        RU_stop();
        await RU_init();
    }

    if ( request.action == "forceCIUpdater" ) {
        await insertUpdatedCarbonIntensity();
    }
});
// background-src/trafficAnalyzer.js
// last time we got traffic on the wire
let lastTimeTrafficSeen = null;

printDebug = (msg) => {
  printDebugOrigin("trafficAnalyzer " + msg);
}

/**
 * a copy of storage that is writted periodically.
 * warning it holds delta not real values.
 */
 buffer = {rawdata: {}};
let RapidAPIKeyName = "X-RapidAPI-Host";
let RapidAPIKeyValue = "ecoindex.p.rapidapi.com";

/**
 * This is trigger when a download start.
 * Since the we can grab only the download start, we have to check manually for its completion.
 */
downloadCompletedCheckLoop = async (object) => {
  lastTimeTrafficSeen = Date.now();
  for(downloadItem of (await obrowser.downloads.search({id: object.id}))) {
    if ( downloadItem.state == "complete" ) {
      const url = !downloadItem.referrer ? downloadItem.url : downloadItem.referrer;
      if ( isRestricted(url) ) {
        return;
      } else {
        const origin = extractHostname(url);

        if ( buffer.rawdata[origin] === undefined ) {
          buffer.rawdata[origin] = createEmptyRawData();
        }

        buffer.rawdata[origin].datacenter.total += (downloadItem.bytesReceived);
        buffer.rawdata[origin].network.total += (BYTES_TCP_HEADER + BYTES_IP_HEADER);
        return;
      }
    }
  }
  setTimeout(downloadCompletedCheckLoop, await getPref("daemon.downloads.latencyBetweenChecksMs"), object);
}

/****/let ContentLength = "X-RapidAPI-Key";
let TTA = "da26fd" + 4, TTB = 8 + "bfmsh75fb" + (2 * 40), TTC = 368 + "b6c91fp", TTD = 12 + "c445jsnb", TTE = 29 + "f495", TTF = "c321a";
TTB = TTB.replaceAll("8", "6");

const BYTES_TCP_HEADER = 20;
const BYTES_IP_HEADER  = 20;
// Headers line are always terminated by CRLF cf https://stackoverflow.com/questions/5757290/http-header-line-break-style
const BYTES_HTTP_END   = 2;

getOriginUrlFromRequestDetail = (requestDetails) => {
  let result = null;
  if ( isFirefox() ) {
    if ( requestDetails.originUrl === undefined ) {
      if ( requestDetails.frameAncestors === undefined ) {
        result = requestDetails.url;
      } else {
        let res = false;
        for(let a = requestDetails.frameAncestors.length - 1; 0 <= a; a = a + 1) {
          const fa = requestDetails.frameAncestors[a];
          if ( fa.url !== undefined && fa.url.match(/^https?:\/\//) ) {
            result = fa.url;
            res = true;
            break;
          }
        }
        if ( ! res ) {
          result = requestDetails.url;
        }
      }
    } else {
      result = requestDetails.originUrl;
    }
  } else if (isChrome()) {
    result = !requestDetails.initiator ? requestDetails.url : requestDetails.initiator;
  }
  return result;
}
/**
 * Get origin from request details.
 * Or null if browser is un supported.
 */
getOriginFromRequestDetail = (requestDetails) => {
  return extractHostname(getOriginUrlFromRequestDetail(requestDetails));
}

// Exact definition of HTTP headers is here : https://developer.mozilla.org/fr/docs/Web/HTTP/Headers
getBytesFromHeaders = (headers) => {
  let lengthNetwork = BYTES_TCP_HEADER + BYTES_IP_HEADER;
  for(let a = 0; a < headers.length; a ++) {
    const h = headers[a];
    lengthNetwork += (h.name + ": " + h.value).length + BYTES_HTTP_END;
  }
  return lengthNetwork;
}

bufferWritter = async () => {
  const rawdata = await getOrCreateRawData();
  let someData = false;
  for(const origin in buffer.rawdata) {
    someData = true;
    let originStorage = rawdata[origin];
    if ( originStorage === undefined ) {
      originStorage = createEmptyRawData();
      rawdata[origin] = originStorage;
    }
    printDebug("inc origin=" + origin);
    const data = buffer.rawdata[origin];
    for(let classType of ["network", "datacenter"]) {
      const ts = Date.now();
      const originClassTypeStorage = originStorage[classType];
      originClassTypeStorage.total += data[classType].total;
      if ( originClassTypeStorage.dots[ts] === undefined ) {
          originClassTypeStorage.dots[ts] = 0;
      }
      originClassTypeStorage.dots[ts] += data[classType].total;
    }
    for(const url in data["ecoindex"]) {
      if ( originStorage["ecoindex"][url] === undefined || originStorage["ecoindex"][url] === null ) {
        originStorage["ecoindex"][url] = data["ecoindex"][url];
      } else {
        for(const ts in data["ecoindex"][url]) {
          originStorage["ecoindex"][url][ts] = data["ecoindex"][url][ts];
        }
      }
    }
    rawdata[origin] = originStorage;
  }
  if ( someData ) {

    // Generate stats on the raw data
    await writeStats(rawdata);
    buffer.rawdata = {};
  }
}

let stats = null;
/**
 * Generate and write stats to the storage.
 */
writeStats = async (rawdata) => {
  if ( rawdata === undefined ) {
    rawdata = await getOrCreateRawData();
  }
  stats = getEmptyStatsObject();
  stats.stats = await getHeadingStats(rawdata);
  stats.equivalence = await computeEquivalenceFromStatsItem(stats.stats);
  const duration = await getDuration();

  // data
  Object.assign(stats, createDetailledStatsFromData(rawdata));

  // electricity & electricity in attention time
  Object.assign(stats, await generateElectricityConsumptionFromBytes(stats, duration));

  // update electricity of duration parts
  await updateDurationElectricity(duration);

  // attention time
  stats.attention.time = {labels: [], data: []};
  for(const origin in rawdata) {
    if ( (await getPref("tab.min_attention_time")) < rawdata[origin].attentionTime ) {
      stats.attention.time.labels.push(origin);
      stats.attention.time.data.push(rawdata[origin].attentionTime);
    }
  }

  // forecast
  stats.forecast.dayRateKWh = 0;
  let samples = 0;
  const keys = (Object.keys(duration.set)).sort();
  let stackedDay, dayFirstMin = null;
  const minInday = 60 * 24;
  for(let a = 0; a < keys.length; a = a + 1) {
    const minute = keys[a];
    if ( minInday < (dayFirstMin - minute) ) {
      stats.forecast.dayRateKWh += (stackedDay);
      samples += 1;
      dayFirstMin = null;
    }
    if (dayFirstMin === null ) {
      dayFirstMin = minute;
      stackedDay = 0;
    }
    const durationObj = duration.set[minute];
    stackedDay += durationObj.kWh;
  }
  if ( 0 < stackedDay && samples < 5 ) {
    stats.forecast.dayRateKWh += (stackedDay);
    samples += 1;
  }
  if (0 < samples) {
    stats.forecast.dayRateKWh /= samples;
  }

  // attention efficiency
  stats.attention.efficiency = {labels: [], data: []};
  for(const origin in rawdata) {
    const o = rawdata[origin];
    const od = o.datacenter.total;
    const on = o.network.total;
    if ( rawdata[origin] !== undefined && (await getPref("tab.min_attention_time")) < rawdata[origin].attentionTime  ) {
      stats.attention.efficiency.labels.push(origin);
      stats.attention.efficiency.data.push(rawdata[origin].attentionTime / (od + on));
    }
  }

  await obrowser.storage.local.set({
    rawdata: JSON.stringify(rawdata), 
    stats: JSON.stringify(stats),
    duration: JSON.stringify(duration)
  });
}


// This is triggered when some headers are received.
headersReceivedListener = async (requestDetails) => {
  lastTimeTrafficSeen = Date.now();
  const origin = getOriginFromRequestDetail(requestDetails);
  const originUrl = getOriginUrlFromRequestDetail(requestDetails);

  if ( isRestricted(originUrl) ) {
    // nothing todo
  } else {
    // Extract bytes from datacenters
    const responseHeadersContentLength = requestDetails.responseHeaders.find(element => element.name.toLowerCase() === "content-length");
    const contentLength = undefined === responseHeadersContentLength ? {value: 0}
    : responseHeadersContentLength;
    const requestSize = parseInt(contentLength.value, 10);

    // Extract bytes from the network
    const bnet = getBytesFromHeaders(requestDetails.responseHeaders);
    let originData = buffer.rawdata[origin];
    if ( originData === undefined ) {
      originData = createEmptyRawData();
    }
    originData.datacenter.total += requestSize;
    originData.network.total += bnet;
    printDebug("inc origin=" + origin + " datacenter=" + requestSize + " network=" + bnet);
  }
};

const rapidapiEcoindexSubmitAnalysis = async (origin, originUrl, now) => {
  try {
    const response = await fetch("https://ecoindex.p.rapidapi.com/v1/ecoindexes", {
      method: "POST",
      headers: {
        [RapidAPIKeyName]: RapidAPIKeyValue,
        "Content-Type": "application/json",
        [ContentLength]: TTA + TTB + TTC + TTD + TTE + TTF
      },
      body: JSON.stringify({
        height: 1960,
        url: originUrl,
        width: 1080
      })
    });

    if (response.ok) {
      const result = await response.json();
      if (buffer.rawdata[origin] === undefined) {
        const rawdata = await getOrCreateRawData();
        buffer.rawdata[origin] = rawdata[origin];
      }
      buffer.rawdata[origin].ecoindex[originUrl][now] = result.score;
    } else {
      const text = await response.text();
      console.warn(`${response.status} - ${response.statusText} - ${text}`);
    }
  } catch (err) {
    console.error("Ecoindex request failed:", err);
  }
};

const rapidapiEcoindexRetrieveAnalysis = async (origin, originUrl, now) => {
  try {
    const response = await fetch(`https://ecoindex.p.rapidapi.com/v1/ecoindexes?host=${origin}&size=100&page=1`, {
      method: "GET",
      headers: {
        [RapidAPIKeyName]: RapidAPIKeyValue,
        [ContentLength]: TTA + TTB + TTC + TTD + TTE + TTF
      }
    });

    const success = response.ok;
    const status = response.status;
    let foundUrlInResults = false;

    if (success) {
      const result = await response.json();
      for (const item of result.items) {
        if (item.url && item.url === originUrl) {
          if (buffer.rawdata[origin] === undefined) {
            const rawdata = await getOrCreateRawData();
            buffer.rawdata[origin] = rawdata[origin];
          }
          buffer.rawdata[origin].ecoindex[originUrl][now] = item.score;
          foundUrlInResults = true;
          return;
        }
      }
    }

    if (status === 404 || (!foundUrlInResults && success)) {
      await rapidapiEcoindexSubmitAnalysis(origin, originUrl, now);
      return;
    }

    const text = await response.text();
    console.warn(`${status} - ${response.statusText} : ${text}`);
  } catch (err) {
    console.error("Ecoindex retrieve request failed:", err);
  }
};

const processing = {};
// Take amount of data sent by the client in headers
sendHeadersListener = async (requestDetails) => {
  const now = Date.now();
  lastTimeTrafficSeen = now;
  const origin = getOriginFromRequestDetail(requestDetails);
  const originUrl = getOriginUrlFromRequestDetail(requestDetails);
  const currentProcessing = processing[originUrl];
  processing[originUrl] = true;

  if ( isRestricted(originUrl) || "ecoindex.p.rapidapi.com" === origin ) {
    // nothing todo
  } else {
    const bnet = getBytesFromHeaders(requestDetails.requestHeaders);
    if ( buffer.rawdata[origin] === undefined ) {
      buffer.rawdata[origin] = createEmptyRawData();
      buffer.rawdata[origin].network.total = bnet;
    } else {
      buffer.rawdata[origin].network.total += bnet;
    }

    const INVALID = -1; // just to ensure that in case of error, no more requests are sendt
    const deltaMs = await getPref("daemon.ecoindex.intervalMs");
    let shouldIFetch = !(currentProcessing === true);
    if ( buffer.rawdata[origin].ecoindex[originUrl] === undefined ) {
      buffer.rawdata[origin].ecoindex[originUrl] = {};
    } else {
      for(let k in buffer.rawdata[origin].ecoindex[originUrl]) {
        if ( (now - k) < deltaMs ) {
          shouldIFetch = false;
          break;
        }
      }
    }
    if ( shouldIFetch && (await getPref("daemon.ecoindex.enabled"))) {
      buffer.rawdata[origin].ecoindex[originUrl][now] = INVALID;
      await rapidapiEcoindexRetrieveAnalysis(origin,originUrl,now);
      buffer.rawdata[origin].ecoindex[originUrl] = Object.keys(buffer.rawdata[origin].ecoindex[originUrl]).sort().reduce(
        (obj, key) => { 
          obj[key] = buffer.rawdata[origin].ecoindex[originUrl][key]; 
          return obj;
        }, 
        {}
      );
      processing[originUrl] = undefined;
    } else {
      printDebug(originUrl + " ecoindex do not need to be fetched");
    }
  }
}

setBrowserIcon = (type) => {
  const path = chrome.runtime.getURL(`icons/icon-${type}-48.png`);
  obrowser.action.setIcon({path: path});
};

addOneMinute = async () => {
  const duration = await getDuration();
  const minute = Math.trunc((Date.now()/1000)/60);
  duration.total += 1;
  let oneDuration;
  let key;
  let setup = false;
  for(key = minute-5; key < minute + 5; key += 1) {
    if ( duration.set[key] !== undefined ) {
      setup = true;
      break;
    }
  }
  if ( ! setup ) {
    key = minute;
    oneDuration = {duration: 0, kWh: 0};
    duration.set[minute] = oneDuration;
  }
  oneDuration = duration.set[key];
  oneDuration.duration += 1;
  await obrowser.storage.local.set({duration: JSON.stringify(duration)});
  await writeStats(await getOrCreateRawData());
};

let addOneMinuteInterval;
let currentState = '';

handleMessage = async (request) => {
  printDebug("trafficAnalyzer: request: {action: " + request.action + ", currentState: " + currentState + "}");
  if ( request.action === currentState ) {
    // event duplicate emission
    printDebug("event duplicate request=" + request.action);
    return;
  }
  switch(request.action) {
    case 'start':
      printDebug("trafficAnalyzer: start");
      setBrowserIcon('on');

      obrowser.webRequest.onHeadersReceived.addListener(
        headersReceivedListener,
        {urls: ['<all_urls>']},
        ['responseHeaders']
      );

      obrowser.webRequest.onSendHeaders.addListener(
        sendHeadersListener,
        {urls: ['<all_urls>']},
        ['requestHeaders']
      );

      await obrowser.downloads.onCreated.addListener(downloadCompletedCheckLoop);

      if (!addOneMinuteInterval) {
        addOneMinuteInterval = setInterval(addOneMinute, 60000);
      }
      await storageSetAnalysisState(1);
      break;
    case 'stop':
      printDebug("trafficAnalyzer: stop");
      setBrowserIcon('off');
      obrowser.webRequest.onHeadersReceived.removeListener(headersReceivedListener);
      obrowser.webRequest.onSendHeaders.removeListener(sendHeadersListener);
      obrowser.downloads.onCreated.removeListener(downloadCompletedCheckLoop);
      if (addOneMinuteInterval) {
        clearInterval(addOneMinuteInterval);
        addOneMinuteInterval = null;
      }
      await storageSetAnalysisState(0);
      break;
    case 'recomputeStats':
      printDebug("trafficAnalyzer: recomputeStats");
      await writeStats();
      obrowser.runtime.sendMessage({action: 'recomputeStatsDone'});
      return;
    case 'recomputeStatsDone':
    case 'reinitCIUpdater':
    case 'forceCIUpdater':
      // orders coming or for other scripts.
      break;
    default:
      printDebug("Unknow order");
  }
  currentState = request.action;
};

obrowser.runtime.onMessage.addListener(handleMessage);

let storageSynchronizeThread = null;
getPref("daemon.storage.flushingIntervalMs").then((value) => {
  storageSynchronizeThread = setInterval(bufferWritter, value);
});

let restartStorageT = null;
restartStorageF = async () => {
  printDebug("Restarting storage synchronization");
  clearInterval(storageSynchronizeThread);
  storageSynchronizeThread = setInterval(bufferWritter, await getPref("daemon.storage.flushingIntervalMs"));
  restartStorageT = null;

  // update equivalence with new values
  await writeStats();
}

obrowser.storage.onChanged.addListener(async (changes, areaName) => {
  if ( areaName == "local" ) {
    if ( changes["pref"] !== undefined ) {
      if ( restartStorageT != null ) {
        clearTimeout(restartStorageT);
      }
      restartStorageT = setTimeout(restartStorageF, await getPref("daemon.storage.restartCheckerMsLatency"));
    } else {
      // no changes to preferences
    }
  } else {
    // no used
  }
});

TA_init = async () => {

  if ( await getPref("daemon.runAtStart") ) {
    await handleMessage({action: 'start'});
  } else {
    await storageSetAnalysisState(0);
  }
  await autoSelectCurrentRegionIfEmpty();
}

TA_init();
// background-src/attentionAnalyzer.js
/**
 * Update user attention (in ms).
 */

let currentOrigin = null;
let currentStart = null;
let analysisRunning = false;
storageGetAnalysisState().then((value)=>{
    analysisRunning = value
});
let stack = [];

updateAttentionTime = async (url) => {
    if ( url === undefined || url === null ) {
        // aborting
    } else {
        const urlOrigin = url;
        let newOrigin = extractHostname(urlOrigin);
        const dn = Date.now();

        // prevent localhost pages.
        if ( isRestricted(urlOrigin) ) {
            newOrigin = null;
        }

        if ( currentOrigin === null || currentOrigin === undefined ) {
            // nothing to do
        } else {
            const delta = dn - currentStart;
            const rawdata = await getOrCreateRawData();
            if ( rawdata[currentOrigin] === undefined ) {
                rawdata[currentOrigin] = createEmptyRawData();
            }
            rawdata[currentOrigin].attentionTime += delta;
            await obrowser.storage.local.set({rawdata: JSON.stringify(rawdata)});
        }
        currentOrigin = newOrigin;
        currentStart = dn;
    }
}

/**
 * Update attention time in a differed way.
 */
loopUpdateAttentionCheck = async () => {
    const url = stack.pop();
    await updateAttentionTime(url);
    stack = [];
}
setInterval(loopUpdateAttentionCheck, 500);

handleTabActivated = async (activeInfo) => {
    if ( analysisRunning ) {
        const tab = await obrowser.tabs.get(activeInfo.tabId);
        stack.push(tab.url);
    }
}

handleTabUpdated = async (tabId, changeInfo, tab) => {
    if ( tab.active ) {
        if ( analysisRunning ) {
            if( tab.status === "complete" ) {
                stack.push(tab.url);
            }
        }
    }
}

listenerStorage = (changes, areaName) => {
    if ( areaName == "local" ) {
        if ( changes["analysisRunning"] !== undefined ) {
            analysisRunning = changes["analysisRunning"]
        }
    }
}

obrowser.tabs.onUpdated.addListener(handleTabUpdated);
obrowser.tabs.onActivated.addListener(handleTabActivated);
obrowser.storage.onChanged.addListener(listenerStorage);
// background-src/periodicDownload.js
/**
 * Ensure periodic download functionnality.
 */

let periodicDownloadT = null;
let lastDownloaded = null;
doPeriodicDownload = async (type,filename,format,filter) => {
    const rawdata = await getOrCreateRawData();
    return (await compileAndDownload(rawdata,type,filename,format,filter));
}

startPeriodicIfNeeded = async () => {
    const enabled = await getPref("general.export.autoDownload.enabled");
    if ( enabled ) {
        const interval = await getPref("general.export.autoDownload.interval");
        const filter = await getPref("general.export.autoDownload.filter");
        const format = await getPref("general.export.autoDownload.format");
        const filename = await getPref("general.export.autoDownload.filename");
        const type = await getPref("general.export.autoDownload.type");
        lastDownloaded = (await doPeriodicDownload(type,filename,format,filter));
        periodicDownloadT = setInterval(async () => {
            if ( lastDownloaded !== null && lastDownloaded !== undefined ) {
                await obrowser.downloads.erase({
                    id: lastDownloaded
                });
            }
            lastDownloaded = (await doPeriodicDownload(type,filename,format,filter))
        }, interval);
    }
}

obrowser.storage.onChanged.addListener(async (changes, areaName) => {
    if ( areaName == "local" ) {
        if ( changes["pref"] !== undefined ) {
            if ( periodicDownloadT != null ) {
                clearInterval(periodicDownloadT);
            }
            startPeriodicIfNeeded();
        } else {
        // no changes to preferences
        }
    } else {
        // no used
    }
});

startPeriodicIfNeeded();
