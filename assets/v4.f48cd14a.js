function P(){return{getClosest:(e,o)=>{for(Element.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.webkitMatchesSelector||function(r){for(var a=(this.document||this.ownerDocument).querySelectorAll(r),s=a.length;--s>=0&&a.item(s)!==this;);return s>-1});e&&e!==document;e=e.parentNode)if(e.matches(o))return e;return null},getAnimationString:e=>{let o="",r,a={animation:"animationend",OAnimation:"oAnimationEnd",MozAnimation:"animationend",WebkitAnimation:"webkitAnimationEnd"};for(r in a)typeof e.style[r]<"u"&&(o=a[r]);return o},hasClass:(e,o)=>(" "+e.className+" ").indexOf(" "+o+" ")>-1,removeDuplicates:(e,o)=>[...new Map(e.map(r=>[r[o],r])).values()],getPropertyFromId:(e,o,r)=>r.find(s=>s.id==e)[o],setPropertyFromId:(e,o,r,a)=>{a.forEach(s=>{s.id==e&&(s[o]=r)})},setPropertyFromProperty:(e,o,r,a,s)=>{let p=s.find(y=>y[o]==e);p[r]=a},getFormatedDate:(e,o)=>{let r=new Date(o),a="";switch(e){case"mm/dd/yyyy":a=r.toLocaleDateString("en-US",{day:"2-digit",month:"2-digit",year:"numeric"});break;case"mm/dd/yy":a=r.toLocaleDateString("en-US",{day:"2-digit",month:"2-digit",year:"2-digit"});break}return a},getDollarsDisplay:e=>parseFloat(e).toLocaleString("en-US",{style:"currency",currency:"USD",maximumSignificantDigits:4}),checkOnProd:()=>!(window.location.href.indexOf("localhost:")>-1||window.location.href.indexOf("127.0.0.1:")>-1)}}var u,f=new Uint8Array(16);function g(){if(!u&&(u=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto<"u"&&typeof msCrypto.getRandomValues=="function"&&msCrypto.getRandomValues.bind(msCrypto),!u))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return u(f)}const h=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function S(t){return typeof t=="string"&&h.test(t)}var i=[];for(var l=0;l<256;++l)i.push((l+256).toString(16).substr(1));function v(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,c=(i[t[n+0]]+i[t[n+1]]+i[t[n+2]]+i[t[n+3]]+"-"+i[t[n+4]]+i[t[n+5]]+"-"+i[t[n+6]]+i[t[n+7]]+"-"+i[t[n+8]]+i[t[n+9]]+"-"+i[t[n+10]]+i[t[n+11]]+i[t[n+12]]+i[t[n+13]]+i[t[n+14]]+i[t[n+15]]).toLowerCase();if(!S(c))throw TypeError("Stringified UUID is invalid");return c}function A(t,n,c){t=t||{};var d=t.random||(t.rng||g)();if(d[6]=d[6]&15|64,d[8]=d[8]&63|128,n){c=c||0;for(var m=0;m<16;++m)n[c+m]=d[m];return n}return v(d)}export{P as u,A as v};