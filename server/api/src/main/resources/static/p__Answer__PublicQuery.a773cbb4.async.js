(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[250],{13277:function(){},84625:function(A,C,e){"use strict";e.r(C),e.d(C,{default:function(){return T}});var v=e(80937),m=e(67294),O=e(51615),y=e(34792),B=e(48086),x=e(3182),u=e(69610),b=e(54941),Z=e(94043),j=e.n(Z),R=e(36602),h=e(54531),s=function(){function d(l){(0,u.Z)(this,d),this.id=void 0,this.resultId=void 0,this.queryForm=void 0,this.queryResult=void 0,this.queryFormValue={},this.id=l.id,this.resultId=l.resultId,this.makeObservable()}return(0,b.Z)(d,[{key:"makeObservable",value:function(){(0,h.Ou)(this,{id:h.LO.ref,resultId:h.LO.ref,queryForm:h.LO.ref,queryResult:h.LO.ref,queryFormValue:h.LO.ref,loadQuery:h.aD,getQueryResult:h.aD})}},{key:"loadQuery",value:function(){var l=(0,x.Z)(j().mark(function f(){var a;return j().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return D.next=2,R.hi.loadQuery({id:this.id,resultId:this.resultId});case 2:a=D.sent,a.success&&(this.queryForm=a.data.schema);case 4:case"end":return D.stop()}},f,this)}));function o(){return l.apply(this,arguments)}return o}()},{key:"getQueryResult",value:function(){var l=(0,x.Z)(j().mark(function f(a){var I;return j().wrap(function(F){for(;;)switch(F.prev=F.next){case 0:return F.next=2,R.hi.getQueryResult({id:this.id,resultId:this.resultId,answer:a});case 2:I=F.sent,this.queryFormValue=a,I.code!==200?B.default.error(I.message):this.queryResult=I.data;case 5:case"end":return F.stop()}},f,this)}));function o(f){return l.apply(this,arguments)}return o}()}]),d}(),N=m.createContext(new s({id:"123456",resultId:"123456"}));function k(){return(0,m.useContext)(N)}var p=e(19357),S=e(80893),r=e(85893),L=(0,v.Pi)(function(){var d=k(),l=d.queryForm,o=d.queryResult;return(0,m.useEffect)(function(){d.loadQuery()},[]),o?(0,r.jsx)(r.Fragment,{}):l?(0,r.jsx)("div",{className:"public-query",children:(0,r.jsx)("div",{className:"query-form",children:!o&&(0,r.jsx)(p.Z,{theme:"antdForm",schema:l,questionNumber:!1,onSubmit:function(a){d.getQueryResult(a)}})})}):(0,r.jsx)(S.gb,{})}),$=e(57663),c=e(71577),n=e(49111),g=e(19650),t=e(71153),i=e(60331),M=e(83279),U=e(18106),E=e(51752),V=E.Z.TabPane,P=(0,v.Pi)(function(){var d=k(),l=d.queryForm,o=d.queryResult,f=d.queryFormValue;return(0,m.useEffect)(function(){},[]),o?(0,r.jsxs)("div",{className:"query-result",children:[(0,r.jsxs)("div",{className:"query-result-criteria",children:[(0,r.jsx)("h3",{children:"\u67E5\u8BE2\u6761\u4EF6"}),(0,r.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",margin:"12px 0"},children:[(0,r.jsxs)("div",{children:["\u67E5\u8BE2\u6761\u4EF6\uFF1A",(0,r.jsx)(g.Z,{children:Object.values(f).reduce(function(a,I){return a.push.apply(a,(0,M.Z)(Object.values(I))),a},[]).map(function(a){return(0,r.jsx)(i.Z,{color:"blue",children:a},a)})})]}),(0,r.jsx)(c.Z,{type:"primary",onClick:function(){d.queryResult=void 0},children:"\u91CD\u65B0\u67E5\u8BE2"})]})]}),(0,r.jsx)("div",{className:"query-result-container",children:(0,r.jsxs)("div",{className:"query-result-data",children:[(0,r.jsxs)("div",{className:"query-result-data-total",children:["\u67E5\u8BE2\u5230 ",o.answers.length," \u6761\u7B26\u5408\u6761\u4EF6\u7684\u6570\u636E"]}),(0,r.jsx)("div",{className:"query-result-data-content",children:(0,r.jsx)(E.Z,{type:"card",children:o.answers.map(function(a){return(0,r.jsx)(V,{tab:a.createAt,children:(0,r.jsx)(p.Z,{schema:o==null?void 0:o.schema,initialValues:a.answer,headerVisible:!1,footerVisible:!1,paginationVisible:!1,fieldPermission:o.fieldPermission})},a.answerId)})})})]})})]}):(0,r.jsx)(r.Fragment,{})}),T=(0,v.Pi)(function(){var l=(0,O.UO)(),o=l.id,f=l.resultId,a=(0,m.useMemo)(function(){return new s({id:o,resultId:f})},[o,f]);return(0,r.jsxs)(N.Provider,{value:a,children:[(0,r.jsx)(L,{}),(0,r.jsx)(P,{})]})})},60331:function(A,C,e){"use strict";e.d(C,{Z:function(){return $}});var v=e(96156),m=e(22122),O=e(28481),y=e(67294),B=e(94184),x=e.n(B),u=e(98423),b=e(54549),Z=e(65632),j=function(c,n){var g={};for(var t in c)Object.prototype.hasOwnProperty.call(c,t)&&n.indexOf(t)<0&&(g[t]=c[t]);if(c!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,t=Object.getOwnPropertySymbols(c);i<t.length;i++)n.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(c,t[i])&&(g[t[i]]=c[t[i]]);return g},R=function(n){var g,t=n.prefixCls,i=n.className,M=n.checked,U=n.onChange,E=n.onClick,V=j(n,["prefixCls","className","checked","onChange","onClick"]),P=y.useContext(Z.E_),T=P.getPrefixCls,d=function(a){U==null||U(!M),E==null||E(a)},l=T("tag",t),o=x()(l,(g={},(0,v.Z)(g,"".concat(l,"-checkable"),!0),(0,v.Z)(g,"".concat(l,"-checkable-checked"),M),g),i);return y.createElement("span",(0,m.Z)({},V,{className:o,onClick:d}))},h=R,s=e(98787),N=e(21790),k=function(c,n){var g={};for(var t in c)Object.prototype.hasOwnProperty.call(c,t)&&n.indexOf(t)<0&&(g[t]=c[t]);if(c!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,t=Object.getOwnPropertySymbols(c);i<t.length;i++)n.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(c,t[i])&&(g[t[i]]=c[t[i]]);return g},p=new RegExp("^(".concat(s.Y.join("|"),")(-inverse)?$")),S=new RegExp("^(".concat(s.E.join("|"),")$")),r=function(n,g){var t,i=n.prefixCls,M=n.className,U=n.style,E=n.children,V=n.icon,P=n.color,T=n.onClose,d=n.closeIcon,l=n.closable,o=l===void 0?!1:l,f=k(n,["prefixCls","className","style","children","icon","color","onClose","closeIcon","closable"]),a=y.useContext(Z.E_),I=a.getPrefixCls,D=a.direction,F=y.useState(!0),K=(0,O.Z)(F,2),q=K[0],W=K[1];y.useEffect(function(){"visible"in f&&W(f.visible)},[f.visible]);var z=function(){return P?p.test(P)||S.test(P):!1},_=(0,m.Z)({backgroundColor:P&&!z()?P:void 0},U),G=z(),Q=I("tag",i),ee=x()(Q,(t={},(0,v.Z)(t,"".concat(Q,"-").concat(P),G),(0,v.Z)(t,"".concat(Q,"-has-color"),P&&!G),(0,v.Z)(t,"".concat(Q,"-hidden"),!q),(0,v.Z)(t,"".concat(Q,"-rtl"),D==="rtl"),t),M),X=function(w){w.stopPropagation(),T==null||T(w),!w.defaultPrevented&&("visible"in f||W(!1))},te=function(){return o?d?y.createElement("span",{className:"".concat(Q,"-close-icon"),onClick:X},d):y.createElement(b.Z,{className:"".concat(Q,"-close-icon"),onClick:X}):null},re="onClick"in f||E&&E.type==="a",ae=(0,u.Z)(f,["visible"]),Y=V||null,ne=Y?y.createElement(y.Fragment,null,Y,y.createElement("span",null,E)):E,H=y.createElement("span",(0,m.Z)({},ae,{ref:g,className:ee,style:_}),ne,te());return re?y.createElement(N.Z,null,H):H},L=y.forwardRef(r);L.displayName="Tag",L.CheckableTag=h;var $=L},71153:function(A,C,e){"use strict";var v=e(38663),m=e.n(v),O=e(13277),y=e.n(O)},20640:function(A,C,e){"use strict";var v=e(11742),m={"text/plain":"Text","text/html":"Url",default:"Text"},O="Copy to clipboard: #{key}, Enter";function y(x){var u=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return x.replace(/#{\s*key\s*}/g,u)}function B(x,u){var b,Z,j,R,h,s,N=!1;u||(u={}),b=u.debug||!1;try{j=v(),R=document.createRange(),h=document.getSelection(),s=document.createElement("span"),s.textContent=x,s.style.all="unset",s.style.position="fixed",s.style.top=0,s.style.clip="rect(0, 0, 0, 0)",s.style.whiteSpace="pre",s.style.webkitUserSelect="text",s.style.MozUserSelect="text",s.style.msUserSelect="text",s.style.userSelect="text",s.addEventListener("copy",function(p){if(p.stopPropagation(),u.format)if(p.preventDefault(),typeof p.clipboardData=="undefined"){b&&console.warn("unable to use e.clipboardData"),b&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var S=m[u.format]||m.default;window.clipboardData.setData(S,x)}else p.clipboardData.clearData(),p.clipboardData.setData(u.format,x);u.onCopy&&(p.preventDefault(),u.onCopy(p.clipboardData))}),document.body.appendChild(s),R.selectNodeContents(s),h.addRange(R);var k=document.execCommand("copy");if(!k)throw new Error("copy command was unsuccessful");N=!0}catch(p){b&&console.error("unable to copy using execCommand: ",p),b&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(u.format||"text",x),u.onCopy&&u.onCopy(window.clipboardData),N=!0}catch(S){b&&console.error("unable to copy using clipboardData: ",S),b&&console.error("falling back to prompt"),Z=y("message"in u?u.message:O),window.prompt(Z,x)}}finally{h&&(typeof h.removeRange=="function"?h.removeRange(R):h.removeAllRanges()),s&&document.body.removeChild(s),j()}return N}A.exports=B},11742:function(A){A.exports=function(){var C=document.getSelection();if(!C.rangeCount)return function(){};for(var e=document.activeElement,v=[],m=0;m<C.rangeCount;m++)v.push(C.getRangeAt(m));switch(e.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":e.blur();break;default:e=null;break}return C.removeAllRanges(),function(){C.type==="Caret"&&C.removeAllRanges(),C.rangeCount||v.forEach(function(O){C.addRange(O)}),e&&e.focus()}}}}]);