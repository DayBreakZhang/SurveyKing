(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[8313],{11965:function(Te,G,k){"use strict";k.d(G,{Z:function(){return H}});var v=k(82961);function H(p,E){var l=typeof Symbol!="undefined"&&p[Symbol.iterator]||p["@@iterator"];if(!l){if(Array.isArray(p)||(l=(0,v.Z)(p))||E&&p&&typeof p.length=="number"){l&&(p=l);var U=0,w=function(){};return{s:w,n:function(){return U>=p.length?{done:!0}:{done:!1,value:p[U++]}},e:function(N){throw N},f:w}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var T=!0,_=!1,$;return{s:function(){l=l.call(p)},n:function(){var N=l.next();return T=N.done,N},e:function(N){_=!0,$=N},f:function(){try{!T&&l.return!=null&&l.return()}finally{if(_)throw $}}}}},97435:function(Te,G){"use strict";function k(v,H){for(var p=Object.assign({},v),E=0;E<H.length;E+=1){var l=H[E];delete p[l]}return p}G.Z=k},29405:function(Te,G,k){"use strict";k.d(G,{J$:function(){return lt},ZP:function(){return vt},kY:function(){return Pe}});var v=k(67294);/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function H(e,i,t,a){function n(r){return r instanceof t?r:new t(function(f){f(r)})}return new(t||(t=Promise))(function(r,f){function c(s){try{u(a.next(s))}catch(h){f(h)}}function m(s){try{u(a.throw(s))}catch(h){f(h)}}function u(s){s.done?r(s.value):n(s.value).then(c,m)}u((a=a.apply(e,i||[])).next())})}function p(e,i){var t={label:0,sent:function(){if(r[0]&1)throw r[1];return r[1]},trys:[],ops:[]},a,n,r,f;return f={next:c(0),throw:c(1),return:c(2)},typeof Symbol=="function"&&(f[Symbol.iterator]=function(){return this}),f;function c(u){return function(s){return m([u,s])}}function m(u){if(a)throw new TypeError("Generator is already executing.");for(;t;)try{if(a=1,n&&(r=u[0]&2?n.return:u[0]?n.throw||((r=n.return)&&r.call(n),0):n.next)&&!(r=r.call(n,u[1])).done)return r;switch(n=0,r&&(u=[u[0]&2,r.value]),u[0]){case 0:case 1:r=u;break;case 4:return t.label++,{value:u[1],done:!1};case 5:t.label++,n=u[1],u=[0];continue;case 7:u=t.ops.pop(),t.trys.pop();continue;default:if(r=t.trys,!(r=r.length>0&&r[r.length-1])&&(u[0]===6||u[0]===2)){t=0;continue}if(u[0]===3&&(!r||u[1]>r[0]&&u[1]<r[3])){t.label=u[1];break}if(u[0]===6&&t.label<r[1]){t.label=r[1],r=u;break}if(r&&t.label<r[2]){t.label=r[2],t.ops.push(u);break}r[2]&&t.ops.pop(),t.trys.pop();continue}u=i.call(e,t)}catch(s){u=[6,s],n=0}finally{a=r=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}}var E=function(){},l=E(),U=Object,w=function(e){return e===l},T=function(e){return typeof e=="function"},_=function(e,i){return U.assign({},e,i)},$="undefined",I=function(){return typeof window!=$},N=function(){return typeof document!=$},Ze=function(){return I()&&typeof window.requestAnimationFrame!=$},ue=new WeakMap,$e=0,Y=function(e){var i=typeof e,t=e&&e.constructor,a=t==Date,n,r;if(U(e)===e&&!a&&t!=RegExp){if(n=ue.get(e),n)return n;if(n=++$e+"~",ue.set(e,n),t==Array){for(n="@",r=0;r<e.length;r++)n+=Y(e[r])+",";ue.set(e,n)}if(t==U){n="#";for(var f=U.keys(e).sort();!w(r=f.pop());)w(e[r])||(n+=r+":"+Y(e[r])+",");ue.set(e,n)}}else n=a?e.toJSON():i=="symbol"?e.toString():i=="string"?JSON.stringify(e):""+e;return n},le=!0,ze=function(){return le},Oe=I(),ve=N(),de=Oe&&window.addEventListener?window.addEventListener.bind(window):E,Be=ve?document.addEventListener.bind(document):E,he=Oe&&window.removeEventListener?window.removeEventListener.bind(window):E,Ge=ve?document.removeEventListener.bind(document):E,Ye=function(){var e=ve&&document.visibilityState;return w(e)||e!=="hidden"},Qe=function(e){return Be("visibilitychange",e),de("focus",e),function(){Ge("visibilitychange",e),he("focus",e)}},Xe=function(e){var i=function(){le=!0,e()},t=function(){le=!1};return de("online",i),de("offline",t),function(){he("online",i),he("offline",t)}},et={isOnline:ze,isVisible:Ye},tt={initFocus:Qe,initReconnect:Xe},oe=!I()||"Deno"in window,rt=function(e){return Ze()?window.requestAnimationFrame(e):setTimeout(e,1)},Q=oe?v.useEffect:v.useLayoutEffect,me=typeof navigator!="undefined"&&navigator.connection,De=!oe&&me&&(["slow-2g","2g"].includes(me.effectiveType)||me.saveData),be=function(e){if(T(e))try{e=e()}catch(a){e=""}var i=[].concat(e);e=typeof e=="string"?e:(Array.isArray(e)?e.length:e)?Y(e):"";var t=e?"$swr$"+e:"";return[e,i,t]},j=new WeakMap,Ie=0,Ae=1,Ve=2,X=function(e,i,t,a,n,r,f){f===void 0&&(f=!0);var c=j.get(e),m=c[0],u=c[1],s=c[3],h=m[i],d=u[i];if(f&&d)for(var x=0;x<d.length;++x)d[x](t,a,n);return r&&(delete s[i],h&&h[0])?h[0](Ve).then(function(){return e.get(i)}):e.get(i)},nt=0,we=function(){return++nt},We=function(){for(var e=[],i=0;i<arguments.length;i++)e[i]=arguments[i];return H(void 0,void 0,void 0,function(){var t,a,n,r,f,c,m,u,s,h,d,x,fe,g,b,o,ee,K,M,A,q;return p(this,function(L){switch(L.label){case 0:if(t=e[0],a=e[1],n=e[2],r=e[3],f=typeof r=="boolean"?{revalidate:r}:r||{},c=w(f.populateCache)?!0:f.populateCache,m=f.revalidate!==!1,u=f.rollbackOnError!==!1,s=f.optimisticData,h=be(a),d=h[0],x=h[2],!d)return[2];if(fe=j.get(t),g=fe[2],e.length<3)return[2,X(t,d,t.get(d),l,l,m,!0)];if(b=n,ee=we(),g[d]=[ee,0],K=!w(s),M=t.get(d),K&&(A=T(s)?s(M):s,t.set(d,A),X(t,d,A)),T(b))try{b=b(t.get(d))}catch(J){o=J}return b&&T(b.then)?[4,b.catch(function(J){o=J})]:[3,2];case 1:if(b=L.sent(),ee!==g[d][0]){if(o)throw o;return[2,b]}else o&&K&&u&&(c=!0,b=M,t.set(d,M));L.label=2;case 2:return c&&(o||(T(c)&&(b=c(b,M)),t.set(d,b)),t.set(x,_(t.get(x),{error:o}))),g[d][1]=we(),[4,X(t,d,b,o,l,m,!!c)];case 3:if(q=L.sent(),o)throw o;return[2,c?q:b]}})})},xe=function(e,i){for(var t in e)e[t][0]&&e[t][0](i)},Me=function(e,i){if(!j.has(e)){var t=_(tt,i),a={},n=We.bind(l,e),r=E;if(j.set(e,[a,{},{},{},n]),!oe){var f=t.initFocus(setTimeout.bind(l,xe.bind(l,a,Ie))),c=t.initReconnect(setTimeout.bind(l,xe.bind(l,a,Ae)));r=function(){f&&f(),c&&c(),j.delete(e)}}return[e,n,r]}return[e,j.get(e)[4]]},at=function(e,i,t,a,n){var r=t.errorRetryCount,f=n.retryCount,c=~~((Math.random()+.5)*(1<<(f<8?f:8)))*t.errorRetryInterval;!w(r)&&f>r||setTimeout(a,c,n)},Fe=Me(new Map),Ue=Fe[0],it=Fe[1],Ne=_({onLoadingSlow:E,onSuccess:E,onError:E,onErrorRetry:at,onDiscarded:E,revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:De?1e4:5e3,focusThrottleInterval:5*1e3,dedupingInterval:2*1e3,loadingTimeout:De?5e3:3e3,compare:function(e,i){return Y(e)==Y(i)},isPaused:function(){return!1},cache:Ue,mutate:it,fallback:{}},et),Le=function(e,i){var t=_(e,i);if(i){var a=e.use,n=e.fallback,r=i.use,f=i.fallback;a&&r&&(t.use=a.concat(r)),n&&f&&(t.fallback=_(n,f))}return t},pe=(0,v.createContext)({}),ut=function(e){var i=e.value,t=Le((0,v.useContext)(pe),i),a=i&&i.provider,n=(0,v.useState)(function(){return a?Me(a(t.cache||Ue),i):l})[0];return n&&(t.cache=n[0],t.mutate=n[1]),Q(function(){return n?n[2]:l},[]),(0,v.createElement)(pe.Provider,_(e,{value:t}))},ot=function(e,i){var t=(0,v.useState)({})[1],a=(0,v.useRef)(e),n=(0,v.useRef)({data:!1,error:!1,isValidating:!1}),r=(0,v.useCallback)(function(f){var c=!1,m=a.current;for(var u in f){var s=u;m[s]!==f[s]&&(m[s]=f[s],n.current[s]&&(c=!0))}c&&!i.current&&t({})},[]);return Q(function(){a.current=e}),[a,n.current,r]},ft=function(e){return T(e[1])?[e[0],e[1],e[2]||{}]:[e[0],null,(e[1]===null?e[2]:e[1])||{}]},Pe=function(){return _(Ne,(0,v.useContext)(pe))},st=function(e){return function(){for(var t=[],a=0;a<arguments.length;a++)t[a]=arguments[a];var n=Pe(),r=ft(t),f=r[0],c=r[1],m=r[2],u=Le(n,m),s=e,h=u.use;if(h)for(var d=h.length;d-- >0;)s=h[d](s);return s(f,c||u.fetcher,u)}},ke=function(e,i,t){var a=i[e]||(i[e]=[]);return a.push(t),function(){var n=a.indexOf(t);n>=0&&(a[n]=a[a.length-1],a.pop())}},Ee={dedupe:!0},ct=function(e,i,t){var a=t.cache,n=t.compare,r=t.fallbackData,f=t.suspense,c=t.revalidateOnMount,m=t.refreshInterval,u=t.refreshWhenHidden,s=t.refreshWhenOffline,h=j.get(a),d=h[0],x=h[1],fe=h[2],g=h[3],b=be(e),o=b[0],ee=b[1],K=b[2],M=(0,v.useRef)(!1),A=(0,v.useRef)(!1),q=(0,v.useRef)(o),L=(0,v.useRef)(i),J=(0,v.useRef)(t),y=function(){return J.current},ye=function(){return y().isVisible()&&y().isOnline()},se=function(O){return a.set(K,_(a.get(K),O))},He=a.get(o),dt=w(r)?t.fallback[o]:r,F=w(He)?dt:He,je=a.get(K)||{},te=je.error,Ke=!M.current,qe=function(){return Ke&&!w(c)?c:y().isPaused()?!1:f?w(F)?!1:t.revalidateIfStale:w(F)||t.revalidateIfStale},ht=function(){return!o||!i?!1:je.isValidating?!0:Ke&&qe()},Re=ht(),_e=ot({data:F,error:te,isValidating:Re},A),z=_e[0],ge=_e[1],ce=_e[2],Z=(0,v.useCallback)(function(O){return H(void 0,void 0,void 0,function(){var C,S,D,re,ne,V,R,P,W,Ce,ae,B,Se;return p(this,function(ie){switch(ie.label){case 0:if(C=L.current,!o||!C||A.current||y().isPaused())return[2,!1];re=!0,ne=O||{},V=!g[o]||!ne.dedupe,R=function(){return!A.current&&o===q.current&&M.current},P=function(){var Je=g[o];Je&&Je[1]===D&&delete g[o]},W={isValidating:!1},Ce=function(){se({isValidating:!1}),R()&&ce(W)},se({isValidating:!0}),ce({isValidating:!0}),ie.label=1;case 1:return ie.trys.push([1,3,,4]),V&&(X(a,o,z.current.data,z.current.error,!0),t.loadingTimeout&&!a.get(o)&&setTimeout(function(){re&&R()&&y().onLoadingSlow(o,t)},t.loadingTimeout),g[o]=[C.apply(void 0,ee),we()]),Se=g[o],S=Se[0],D=Se[1],[4,S];case 2:return S=ie.sent(),V&&setTimeout(P,t.dedupingInterval),!g[o]||g[o][1]!==D?(V&&R()&&y().onDiscarded(o),[2,!1]):(se({error:l}),W.error=l,ae=fe[o],!w(ae)&&(D<=ae[0]||D<=ae[1]||ae[1]===0)?(Ce(),V&&R()&&y().onDiscarded(o),[2,!1]):(n(z.current.data,S)?W.data=z.current.data:W.data=S,n(a.get(o),S)||a.set(o,S),V&&R()&&y().onSuccess(S,o,t),[3,4]));case 3:return B=ie.sent(),P(),y().isPaused()||(se({error:B}),W.error=B,V&&R()&&(y().onError(B,o,t),(typeof t.shouldRetryOnError=="boolean"&&t.shouldRetryOnError||T(t.shouldRetryOnError)&&t.shouldRetryOnError(B))&&ye()&&y().onErrorRetry(B,o,t,Z,{retryCount:(ne.retryCount||0)+1,dedupe:!0}))),[3,4];case 4:return re=!1,Ce(),R()&&V&&X(a,o,W.data,W.error,!1),[2,!0]}})})},[o]),mt=(0,v.useCallback)(We.bind(l,a,function(){return q.current}),[]);if(Q(function(){L.current=i,J.current=t}),Q(function(){if(!!o){var O=o!==q.current,C=Z.bind(l,Ee),S=function(R,P,W){ce(_({error:P,isValidating:W},n(z.current.data,R)?l:{data:R}))},D=0,re=function(R){if(R==Ie){var P=Date.now();y().revalidateOnFocus&&P>D&&ye()&&(D=P+y().focusThrottleInterval,C())}else if(R==Ae)y().revalidateOnReconnect&&ye()&&C();else if(R==Ve)return Z()},ne=ke(o,x,S),V=ke(o,d,re);return A.current=!1,q.current=o,M.current=!0,O&&ce({data:F,error:te,isValidating:Re}),qe()&&(w(F)||oe?C():rt(C)),function(){A.current=!0,ne(),V()}}},[o,Z]),Q(function(){var O;function C(){var D=T(m)?m(F):m;D&&O!==-1&&(O=setTimeout(S,D))}function S(){!z.current.error&&(u||y().isVisible())&&(s||y().isOnline())?Z(Ee).then(C):C()}return C(),function(){O&&(clearTimeout(O),O=-1)}},[m,u,s,Z]),(0,v.useDebugValue)(F),f&&w(F)&&o)throw L.current=i,J.current=t,A.current=!1,w(te)?Z(Ee):te;return{mutate:mt,get data(){return ge.data=!0,F},get error(){return ge.error=!0,te},get isValidating(){return ge.isValidating=!0,Re}}},lt=U.defineProperty(ut,"default",{value:Ne}),bt=function(e){return be(e)[0]},vt=st(ct)}}]);