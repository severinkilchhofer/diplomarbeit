(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{R12Q:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/rating",function(){return r("v5yG")}])},YFqc:function(e,t,r){e.exports=r("cTJO")},cTJO:function(e,t,r){"use strict";var n=r("lwsE"),s=r("W8MJ"),c=r("7W2i"),a=r("a1gu"),i=r("Nsbk");function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=i(e);if(t){var s=i(this).constructor;r=Reflect.construct(n,arguments,s)}else r=n.apply(this,arguments);return a(this,r)}}var o=r("TqRt"),l=r("284h");t.__esModule=!0,t.default=void 0;var f,d=l(r("q1tI")),b=r("QmWs"),h=r("g/15"),p=o(r("nOHt")),m=r("elyg");function g(e){return e&&"object"===typeof e?(0,h.formatWithValidation)(e):e}var v=new Map,O=window.IntersectionObserver,y={};function j(){return f||(O?f=new O((function(e){e.forEach((function(e){if(v.has(e.target)){var t=v.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(f.unobserve(e.target),v.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0)}var w=function(e){c(r,e);var t=u(r);function r(e){var s;return n(this,r),(s=t.call(this,e)).p=void 0,s.cleanUpListeners=function(){},s.formatUrls=function(e){var t=null,r=null,n=null;return function(s,c){if(n&&s===t&&c===r)return n;var a=e(s,c);return t=s,r=c,n=a,a}}((function(e,t){return{href:(0,m.addBasePath)(g(e)),as:t?(0,m.addBasePath)(g(t)):t}})),s.linkClicked=function(e){var t=e.currentTarget,r=t.nodeName,n=t.target;if("A"!==r||!(n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var c=s.formatUrls(s.props.href,s.props.as),a=c.href,i=c.as;if(function(e){var t=(0,b.parse)(e,!1,!0),r=(0,b.parse)((0,h.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===r.protocol&&t.host===r.host}(a)){var u=window.location.pathname;a=(0,b.resolve)(u,a),i=i?(0,b.resolve)(u,i):a,e.preventDefault();var o=s.props.scroll;null==o&&(o=i.indexOf("#")<0),p.default[s.props.replace?"replace":"push"](a,i,{shallow:s.props.shallow}).then((function(e){e&&o&&(window.scrollTo(0,0),document.body.focus())}))}}},s.p=!1!==e.prefetch,s}return s(r,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as),r=t.href,n=t.as,s=(0,b.resolve)(e,r);return[s,n?(0,b.resolve)(e,n):s]}},{key:"handleRef",value:function(e){var t=this;this.p&&O&&e&&e.tagName&&(this.cleanUpListeners(),y[this.getPaths().join("%")]||(this.cleanUpListeners=function(e,t){var r=j();return r?(r.observe(e),v.set(e,t),function(){try{r.unobserve(e)}catch(t){console.error(t)}v.delete(e)}):function(){}}(e,(function(){t.prefetch()}))))}},{key:"prefetch",value:function(e){if(this.p){var t=this.getPaths();p.default.prefetch(t[0],t[1],e).catch((function(e){0})),y[t.join("%")]=!0}}},{key:"render",value:function(){var e=this,t=this.props.children,r=this.formatUrls(this.props.href,this.props.as),n=r.href,s=r.as;"string"===typeof t&&(t=d.default.createElement("a",null,t));var c=d.Children.only(t),a={ref:function(t){e.handleRef(t),c&&"object"===typeof c&&c.ref&&("function"===typeof c.ref?c.ref(t):"object"===typeof c.ref&&(c.ref.current=t))},onMouseEnter:function(t){c.props&&"function"===typeof c.props.onMouseEnter&&c.props.onMouseEnter(t),e.prefetch({priority:!0})},onClick:function(t){c.props&&"function"===typeof c.props.onClick&&c.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==c.type||"href"in c.props)||(a.href=s||n),d.default.cloneElement(c,a)}}]),r}(d.Component);t.default=w},"j/CZ":function(e,t,r){"use strict";var n=r("YFqc"),s=r.n(n),c=r("q1tI"),a=r.n(c).a.createElement;t.a=function(e){var t=Object(c.useState)(!1),r=t[0],n=t[1];return Object(c.useEffect)((function(){document.body.style.overflow=r?"hidden":"scroll"}),[r]),a("nav",{className:"bg-".concat(e.bgColor," h-24")},a("div",{className:"block z-50 relative float-right pt-4 pr-4"},a("button",{onClick:function(){return n(!r)},className:"px-3 py-2"},r?a("svg",{height:"20px",width:"20px",fill:"#FFFFFF",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",x:"0px",y:"0px"},a("g",null,a("path",{d:"M2 2l12 12"}),a("path",{d:"M14 15c-.256 0-.512-.098-.707-.293l-12-12c-.391-.391-.391-1.023 0-1.414s1.023-.391 1.414 0l12 12c.391.391.391 1.023 0 1.414-.195.195-.451.293-.707.293zM14 2l-12 12"}),a("path",{d:"M2 15c-.256 0-.512-.098-.707-.293-.391-.391-.391-1.023 0-1.414l12-12c.391-.391 1.023-.391 1.414 0s.391 1.023 0 1.414l-12 12c-.195.195-.451.293-.707.293z"}))):a("svg",{height:"20px",width:"20px",fill:"#000000",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",x:"0px",y:"0px"},a("g",null,a("path",{d:"M0 2h16v2h-16zM0 7h16v2h-16zM0 12h16v2h-16z"}))))),a("div",{className:"".concat(r?"block":"hidden"," ")},a("div",{className:"h-screen w-screen z-10 top-0 left-0 bg-blue overflow-x-hidden fixed"},a("ul",{className:"table m-10 sm:m-auto text-white font-bold text-lg sm:text-xl pt-10 sm:pt-32"},a("li",{className:"".concat("intro"===e.currentOpen?"text-red":"text-white"," pb-4 hover:text-red")},a(s.a,{href:"/",as:"/diplomarbeit/"},a("a",null,"Intro"))),a("li",{className:"".concat("recherche"===e.currentOpen?"text-red":"text-white"," pb-4 hover:text-red")},a(s.a,{href:"/recherche",as:"/diplomarbeit/recherche"},a("a",null,"Recherche und Erkenntnisse"))),a("li",{className:"".concat("sff"===e.currentOpen?"text-red":"text-white"," pb-4 hover:text-red")},a(s.a,{href:"/sff",as:"/diplomarbeit/sff"},a("a",null,"Sustainable Fashion Foundation"))),a("li",{className:"".concat("rating"===e.currentOpen?"text-red":"text-white"," pb-4 hover:text-red")},a(s.a,{href:"/rating",as:"/diplomarbeit/rating"},a("a",null,"Eigenes Rating erstellen")))))))}},v5yG:function(e,t,r){"use strict";r.r(t);var n=r("j/CZ"),s=r("q1tI"),c=r.n(s),a=e=>null==e,i=e=>Array.isArray(e);const u=e=>"object"===typeof e;var o=e=>!a(e)&&!i(e)&&u(e),l=e=>o(e)&&e.nodeType===Node.ELEMENT_NODE;const f={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit"},d="undefined",b={BLUR:"blur",CHANGE:"change",INPUT:"input"},h="max",p="min",m="maxLength",g="minLength",v="pattern",O="required",y="validate",j=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,w=/^\w*$/,x=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,R=/\\(\\)?/g;var k=e=>!i(e)&&(w.test(e)||!j.test(e)),E=e=>{const t=[];return e.replace(x,(e,r,n,s)=>{t.push(n?s.replace(R,"$1"):r||e)}),t};function N(e,t,r){let n=-1;const s=k(t)?[t]:E(t),c=s.length,a=c-1;for(;++n<c;){const t=s[n];let c=r;if(n!==a){const r=e[t];c=o(r)||i(r)?r:isNaN(+s[n+1])?{}:[]}e[t]=c,e=e[t]}return e}var C=e=>Object.entries(e).reduce((e,[t,r])=>k(t)?Object.assign(Object.assign({},e),{[t]:r}):(N(e,t,r),e),{}),S=e=>void 0===e,V=(e,t,r)=>{const n=t.split(/[,[\].]+?/).filter(Boolean).reduce((e,t)=>a(e)?e:e[t],e);return S(n)||n===e?S(e[t])?r:e[t]:n},B=(e,t)=>{for(const r in e)if(V(t,r)){const t=e[r];if(t){if(t.ref.focus){t.ref.focus();break}if(t.options){t.options[0].ref.focus();break}}}},F=(e,t)=>{l(e)&&e.removeEventListener&&(e.removeEventListener(b.INPUT,t),e.removeEventListener(b.CHANGE,t),e.removeEventListener(b.BLUR,t))},M=e=>"radio"===e.type,L=e=>"checkbox"===e.type;function U(e){return!e||e instanceof HTMLElement&&e.nodeType!==Node.DOCUMENT_NODE&&U(e.parentNode)}var P=e=>o(e)&&!Object.keys(e).length;function T(e){return i(e)?e:E(e)}function W(e,t){return 1==t.length?e:function(e,t){const r=k(t)?[t]:T(t),n=t.length;let s=0;for(;s<n;)e=S(e)?s++:e[r[s++]];return s==n?e:void 0}(e,function(e,t,r){let n=-1,s=e.length;t<0&&(t=-t>s?0:s+t),(r=r>s?s:r)<0&&(r+=s),s=t>r?0:r-t;const c=Array(s);for(;++n<s;)c[n]=e[n+t];return c}(t,0,-1))}function D(e,t){return t.forEach(t=>{!function(e,t){const r=k(t)?[t]:T(t),n=W(e,r),s=r[r.length-1],c=!(null!=n)||delete n[s];let a=void 0;for(let u=0;u<r.slice(0,-1).length;u++){let t=-1,n=void 0;const s=r.slice(0,-(u+1)),c=s.length-1;for(u>0&&(a=e);++t<s.length;){const r=s[t];n=n?n[r]:e[r],c===t&&(o(n)&&P(n)||i(n)&&!n.filter(e=>o(e)&&!P(e)).length)&&(a?delete a[r]:delete e[r]),a=n}}}(e,t)}),e}const z=(e,t)=>e&&e.ref===t;const A={isValid:!1,value:""};var $=e=>i(e)?e.reduce((e,t)=>t&&t.ref.checked?{isValid:!0,value:t.ref.value}:e,A):A,I=e=>[...e].filter(({selected:e})=>e).map(({value:e})=>e),_=e=>"file"===e.type,q=e=>"select-multiple"===e.type,H=e=>""===e;const J={value:!1,isValid:!1},G={value:!0,isValid:!0};var K=e=>{if(i(e)){if(e.length>1){const t=e.filter(e=>e&&e.ref.checked).map(({ref:{value:e}})=>e);return{value:t,isValid:!!t.length}}const{checked:t,value:r,attributes:n}=e[0].ref;return t?n&&!S(n.value)?S(r)||H(r)?G:{value:r,isValid:!0}:G:J}return J};function Q(e,t){const{name:r,value:n}=t,s=e[r];return _(t)?t.files:M(t)?s?$(s.options).value:"":q(t)?I(t.options):L(t)?!!s&&K(s.options).value:n}var X=e=>"string"===typeof e,Y=(e,t)=>{const r={};for(const n in e)(S(t)||(X(t)?n.startsWith(t):i(t)?t.find(e=>n.startsWith(e)):t&&t.nest))&&(r[n]=Q(e,e[n].ref));return r},Z=(e,{type:t,types:r,message:n})=>o(e)&&e.type===t&&e.message===n&&((e={},t={})=>{const r=Object.keys(e),n=Object.keys(t);return r.length===n.length&&r.every(r=>t[r]&&t[r]===e[r])})(e.types,r);var ee=e=>e instanceof RegExp,te=e=>{return(e=>o(e)&&!ee(e))(e)?e:{value:e,message:""}},re=e=>"function"===typeof e,ne=e=>"boolean"===typeof e,se=e=>X(e)||o(e)&&Object(s.isValidElement)(e);function ce(e,t,r="validate"){if(se(e)||ne(e)&&!e)return{type:r,message:se(e)?e:"",ref:t}}var ae=(e,t,r,n,s)=>{if(t){const t=r[e];return Object.assign(Object.assign({},t),{types:Object.assign(Object.assign({},t&&t.types?t.types:{}),{[n]:s||!0})})}return{}},ie=async(e,t,{ref:r,ref:{type:n,value:s,name:c},options:i,required:u,maxLength:l,minLength:f,min:d,max:b,pattern:j,validate:w})=>{var x;const R=e.current,k={},E=M(r),N=L(r),C=E||N,S=H(s),V=ae.bind(null,c,t,k),B=(e,n,s,a=m,i=g)=>{const u=e?n:s;if(k[c]=Object.assign({type:e?a:i,message:u,ref:r},V(e?a:i,u)),!t)return k};if(u&&(!E&&!N&&(S||a(s))||ne(s)&&!s||N&&!K(i).isValid||E&&!$(i).isValid)){const{value:e,message:n}=se(u)?{value:!!u,message:u}:te(u);if(e&&(k[c]=Object.assign({type:O,message:n,ref:C?null===(x=R[c].options)||void 0===x?void 0:x[0].ref:r},V(O,n)),!t))return k}if(!a(d)||!a(b)){let e,c;const{value:i,message:u}=te(b),{value:o,message:l}=te(d);if("number"===n||!n&&!isNaN(s)){const t=r.valueAsNumber||parseFloat(s);a(i)||(e=t>i),a(o)||(c=t<o)}else{const t=r.valueAsDate||new Date(s);X(i)&&(e=t>new Date(i)),X(o)&&(c=t<new Date(o))}if((e||c)&&(B(!!e,u,l,h,p),!t))return k}if(X(s)&&!S&&(l||f)){const{value:e,message:r}=te(l),{value:n,message:c}=te(f),i=s.toString().length,u=!a(e)&&i>e,o=!a(n)&&i<n;if((u||o)&&(B(!!u,r,c),!t))return k}if(j&&!S){const{value:e,message:n}=te(j);if(ee(e)&&!e.test(s)&&(k[c]=Object.assign({type:v,message:n,ref:r},V(v,n)),!t))return k}if(w){const e=Q(R,r),n=C&&i?i[0].ref:r;if(re(w)){const r=ce(await w(e),n);if(r&&(k[c]=Object.assign(Object.assign({},r),V(y,r.message)),!t))return k}else if(o(w)){let r={};for(const[s,a]of Object.entries(w)){if(!P(r)&&!t)break;const i=ce(await a(e),n,s);i&&(r=Object.assign(Object.assign({},i),V(s,i.message)),t&&(k[c]=r))}if(!P(r)&&(k[c]=Object.assign({ref:n},r),!t))return k}}return k};const ue=(e,t)=>i(e.inner)?e.inner.reduce((e,{path:r,message:n,type:s})=>Object.assign(Object.assign({},e),r?e[r]&&t?{[r]:ae(r,t,e,s,n)}:{[r]:e[r]||Object.assign({message:n,type:s},t?{types:{[s]:n||!0}}:{})}:{}),{}):{[e.path]:{message:e.message,type:e.type}};async function oe(e,t,r,n,s){if(n)return n(r,s);try{return{values:await e.validate(r,{abortEarly:!1,context:s}),errors:{}}}catch(c){return{values:{},errors:C(ue(c,t))}}}var le=e=>a(e)||!u(e);const fe=(e,t)=>{const r=(t,r,n)=>{const s=n?`${e}.${r}`:`${e}[${r}]`;return le(t)?s:fe(s,t)};return i(t)?t.map((e,t)=>r(e,t)):Object.entries(t).map(([e,t])=>r(t,e,!0))};var de=(e,t,r,n,s)=>{let c;return r.add(t),P(e)?c=void 0:S(e[t])?(c=V(C(e),t),S(c)||((e,t)=>fe(e,t).flat(1/0))(t,c).forEach(e=>r.add(e))):(c=e[t],r.add(t)),S(c)?s?n:V(n,t):c},be=({isOnChange:e,hasError:t,isBlurEvent:r,isOnSubmit:n,isReValidateOnSubmit:s,isOnBlur:c,isReValidateOnBlur:a,isSubmitted:i})=>e&&r||n&&s||n&&!i||c&&!r&&!t||a&&!r&&t||s&&i,he=e=>e.substring(0,e.indexOf("[")),pe=(e,t)=>{const r=C(Y(e));return t?V(r,t,r):r};function me(e,t){let r=!1;if(!i(e)||!i(t)||e.length!==t.length)return!0;for(let n=0;n<e.length&&!r;n++){const s=e[n],c=t[n];if(S(c)||Object.keys(s).length!==Object.keys(c).length){r=!0;break}for(const e in s)if(s[e]!==c[e]){r=!0;break}}return r}const ge=(e,t)=>RegExp(`^${t}[\\d+]`.replace(/\[/g,"\\[").replace(/\]/g,"\\]")).test(e);var ve=(e,t)=>[...e].some(e=>ge(t,e)),Oe=e=>"select-one"===e.type;var ye=e=>({isOnSubmit:!e||e===f.onSubmit,isOnBlur:e===f.onBlur,isOnChange:e===f.onChange}),je=e=>M(e)||L(e);function we({mode:e=f.onSubmit,reValidateMode:t=f.onChange,validationSchema:r,validationResolver:n,validationContext:c,defaultValues:u={},submitFocusError:h=!0,validateCriteriaMode:p}={}){const m=Object(s.useRef)({}),g=Object(s.useRef)({}),v=Object(s.useRef)({}),O=Object(s.useRef)({}),y=Object(s.useRef)(new Set),j=Object(s.useRef)(new Set),w=Object(s.useRef)(new Set),x=Object(s.useRef)(new Set),R=Object(s.useRef)(!0),k=Object(s.useRef)(u),E=Object(s.useRef)({}),T=Object(s.useRef)(!1),W=Object(s.useRef)(!1),A=Object(s.useRef)(!1),$=Object(s.useRef)(!1),I=Object(s.useRef)(0),H=Object(s.useRef)(!1),J=Object(s.useRef)(),G=Object(s.useRef)({}),K=Object(s.useRef)(c),ee=Object(s.useRef)(new Set),[,te]=Object(s.useState)(),{isOnBlur:se,isOnSubmit:ce,isOnChange:ae}=Object(s.useRef)(ye(e)).current,ue="all"===p,fe=typeof window===d,ge=!(!r&&!n),we=typeof document!==d&&!fe&&!S(window.HTMLElement),xe=we?"Proxy"in window:typeof Proxy!==d,Re=Object(s.useRef)({dirty:!xe,dirtyFields:!xe,isSubmitted:ce,submitCount:!xe,touched:!xe,isSubmitting:!xe,isValid:!xe}),{isOnBlur:ke,isOnSubmit:Ee}=Object(s.useRef)(ye(t)).current;K.current=c;const Ne=Object(s.useCallback)(()=>{T.current||te({})},[]),Ce=Object(s.useCallback)((e,t,r=!1)=>{let n=r||function({errors:e,name:t,error:r,validFields:n,fieldsWithValidation:s}){const c=P(r),a=P(e),i=V(r,t),u=V(e,t);return!(c&&n.has(t)||u&&u.isManual)&&(!!(a!==c||!a&&!u||c&&s.has(t)&&!n.has(t))||i&&!Z(u,i))}({errors:g.current,error:t,name:e,validFields:x.current,fieldsWithValidation:w.current});if(P(t))(w.current.has(e)||ge)&&(x.current.add(e),n=n||V(g.current,e)),g.current=D(g.current,[e]);else{const r=V(g.current,e);x.current.delete(e),n=n||!r||!Z(r,t[e]),N(g.current,e,t[e])}if(n&&!a(r))return Ne(),!0},[Ne,ge]),Se=Object(s.useCallback)((e,t)=>{const{ref:r,options:n}=e,s=we&&l(r)&&a(t)?"":t;M(r)&&n?n.forEach(({ref:e})=>e.checked=e.value===s):_(r)?X(s)?r.value=s:r.files=s:q(r)?[...r.options].forEach(e=>e.selected=s.includes(e.value)):L(r)&&n?n.length>1?n.forEach(({ref:e})=>e.checked=s.includes(e.value)):n[0].ref.checked=!!s:r.value=s},[we]),Ve=Object(s.useCallback)(e=>{if(!m.current[e]||!Re.current.dirty&&!Re.current.dirtyFields)return!1;let t=E.current[e]!==Q(m.current,m.current[e].ref);const r=ve(ee.current,e),n=j.current.size;if(r){const r=he(e);t=me(pe(m.current,r),V(k.current,r))}const s=(r?$.current:j.current.has(e))!==t;return t?j.current.add(e):j.current.delete(e),$.current=r?t:!!j.current.size,Re.current.dirty?s:n!==j.current.size},[]),Be=Object(s.useCallback)((e,t,r)=>{const n=i(t);for(const s in t){const c=`${r||e}${n?`[${s}]`:`.${s}`}`,a=m.current[c];o(t[s])&&Be(e,t[s],c),a&&(Se(a,t[s]),Ve(c))}},[Se,Ve]),Fe=Object(s.useCallback)((e,t)=>{const r=m.current[e];if(r){Se(r,t);const n=Ve(e);if(ne(n))return n}else le(t)||Be(e,t)},[Ve,Se,Be]),Me=Object(s.useCallback)(async(e,t)=>{const r=m.current[e];if(r){const n=await ie(m,ue,r);return Ce(e,n,!!t&&null),P(n)}return!1},[Ce,ue]),Le=Object(s.useCallback)(async e=>{const{errors:t}=await oe(r,ue,pe(m.current),n,K.current),s=R.current;if(R.current=P(t),i(e))e.forEach(e=>{const r=V(t,e);r?N(g.current,e,r):D(g.current,[e])}),Ne();else{const r=V(t,e);Ce(e,r?{[e]:r}:{},s!==R.current)}return P(g.current)},[Ne,Ce,ue,n,r]),Ue=Object(s.useCallback)(async e=>{const t=e||Object.keys(m.current);if(ge)return Le(t);if(i(t)){const e=await Promise.all(t.map(async e=>await Me(e,!0)));return Ne(),e.every(Boolean)}return await Me(t)},[Le,Me,Ne,ge]),Pe=e=>W.current||y.current.has(e)||y.current.has((e.match(/\w+/)||[])[0]);J.current=J.current?J.current:async({type:e,target:t})=>{const s=t?t.name:"",c=m.current,a=g.current,i=c[s],u=V(a,s);let o;if(!i)return;const l=e===b.BLUR,f=be({hasError:!!u,isOnChange:ae,isBlurEvent:l,isOnSubmit:ce,isReValidateOnSubmit:Ee,isOnBlur:se,isReValidateOnBlur:ke,isSubmitted:A.current}),d=Ve(s);let h=Pe(s)||d;if(l&&!V(v.current,s)&&Re.current.touched&&(N(v.current,s,!0),h=!0),f)return h&&Ne();if(ge){const{errors:e}=await oe(r,ue,pe(c),n,K.current),t=R.current;R.current=P(e),o=V(e,s)?{[s]:V(e,s)}:{},t!==R.current&&(h=!0)}else o=await ie(m,ue,i);!Ce(s,o)&&h&&Ne()};const Te=Object(s.useCallback)((e={})=>{const t=P(k.current)?Y(m.current):k.current;oe(r,ue,C(Object.assign(Object.assign({},t),e)),n,K.current).then(({errors:e})=>{const t=R.current;R.current=P(e),t!==R.current&&Ne()})},[Ne,ue,n]),We=Object(s.useCallback)((e,t)=>{J.current&&e&&function(e,t,r,n){const{ref:s,ref:{name:c,type:a},mutationWatcher:u}=r,o=e[c];if(a)if((M(s)||L(s))&&o){const{options:r}=o;i(r)&&r.length?(r.filter(Boolean).forEach((e,s)=>{const{ref:c,mutationWatcher:a}=e;(c&&U(c)&&z(e,c)||n)&&(F(c,t),a&&a.disconnect(),D(r,[`[${s}]`]))}),r&&!r.filter(Boolean).length&&delete e[c]):delete e[c]}else(U(s)&&z(o,s)||n)&&(F(s,t),u&&u.disconnect(),delete e[c]);else delete e[c]}(m.current,J.current,e,t)},[]),De=Object(s.useCallback)((e,t)=>{if(!e||e&&ve(ee.current,e.ref.name)&&!t)return;We(e,t);const{name:r}=e.ref;g.current=D(g.current,[r]),v.current=D(v.current,[r]),E.current=D(E.current,[r]),[j,w,x,y].forEach(e=>e.current.delete(r)),(Re.current.isValid||Re.current.touched)&&(Ne(),ge&&Te())},[Ne,ge,Te,We]);const ze=({name:e,type:t,types:r,message:n,shouldRender:s})=>{const c=m.current[e];Z(V(g.current,e),{type:t,message:n,types:r})||(N(g.current,e,{type:t,types:r,message:n,ref:c?c.ref:{},isManual:!0}),s&&Ne())};function Ae(e,t={}){if(!e.name)return console.warn("Missing name @",e);const{name:r,type:n,value:s}=e,c=Object.assign({ref:e},t),a=m.current,u=je(e);let o,f,d=a[r],h=!0;if(u?d&&i(d.options)&&d.options.filter(Boolean).find(t=>s===t.ref.value&&t.ref===e):d&&e===d.ref)a[r]=Object.assign(Object.assign({},d),t);else{if(n){const s=function(e,t){const r=new MutationObserver(()=>{U(e)&&(r.disconnect(),t())});return r.observe(window.document,{childList:!0,subtree:!0}),r}(e,()=>De(d));d=u?Object.assign({options:[...d&&d.options||[],{ref:e,mutationWatcher:s}],ref:{type:n,name:r}},t):Object.assign(Object.assign({},c),{mutationWatcher:s})}else d=c;a[r]=d,P(k.current)||(f=V(k.current,r),h=S(f),o=ve(ee.current,r),h||o||Se(d,f)),ge&&!o&&Re.current.isValid?Te():P(t)||(w.current.add(r),!ce&&Re.current.isValid&&ie(m,ue,d).then(e=>{const t=R.current;P(e)?x.current.add(r):R.current=!1,t!==R.current&&Ne()})),E.current[r]||o&&h||(E.current[r]=h?Q(a,d.ref):f),n&&function({field:{ref:e},handleChange:t,isRadioOrCheckbox:r}){l(e)&&t&&(e.addEventListener(r?b.CHANGE:b.INPUT,t),e.addEventListener(b.BLUR,t))}({field:u&&d.options?d.options[d.options.length-1]:d,isRadioOrCheckbox:u||Oe(e),handleChange:J.current})}}const $e=Object(s.useCallback)(e=>async t=>{t&&(t.preventDefault(),t.persist());let s={};const c=m.current;let a=Y(c);Re.current.isSubmitting&&(H.current=!0,Ne());try{if(ge){const{errors:e,values:t}=await oe(r,ue,C(a),n,K.current);g.current=e,s=e,a=t}else for(const e of Object.values(c))if(e){const{ref:{name:t}}=e,r=await ie(m,ue,e);r[t]?(N(s,t,r[t]),x.current.delete(t)):w.current.has(t)&&x.current.add(t)}P(s)?(g.current={},Ne(),await e(C(a),t)):(g.current=s,h&&we&&B(c,s))}finally{A.current=!0,H.current=!1,I.current=I.current+1,Ne()}},[we,Ne,ge,h,ue,n,r]);Object(s.useEffect)(()=>()=>{T.current=!0,m.current&&Object.values(m.current).forEach(e=>De(e,!0))},[De]),ge||(R.current=x.current.size>=w.current.size&&P(g.current));const Ie={dirty:$.current,dirtyFields:j.current,isSubmitted:A.current,submitCount:I.current,touched:v.current,isSubmitting:H.current,isValid:ce?A.current&&P(g.current):R.current},_e={triggerValidation:Ue,setValue:Object(s.useCallback)((function(e,t,r){let n=!1;const s=i(e);(s?e:[e]).forEach(e=>{const r=X(e);n=!(!Fe(r?e:Object.keys(e)[0],r?t:Object.values(e)[0])&&!s)||Pe(e)}),(n||s)&&Ne(),(r||s&&t)&&Ue(s?void 0:e)}),[Ne,Fe,Ue]),register:Object(s.useCallback)((function(e,t){if(!fe)if(X(e))Ae({name:e},t);else{if(!(o(e)&&"name"in e))return t=>t&&Ae(t,e);Ae(e,t)}}),[k.current,E.current]),unregister:Object(s.useCallback)((function(e){m.current&&(i(e)?e:[e]).forEach(e=>De(m.current[e],!0))}),[]),getValues:Object(s.useCallback)((function(e){if(X(e))return m.current[e]?Q(m.current,m.current[e].ref):V(k.current,e);const t=Y(m.current),r=P(t)?k.current:t;return e&&e.nest?C(r):r}),[]),formState:xe?new Proxy(Ie,{get:(e,t)=>{if(t in e)return Re.current[t]=!0,e[t]}}):Ie},qe=Object.assign(Object.assign(Object.assign({removeFieldEventListener:We,reRender:Ne},ge?{validateSchemaIsValid:Te}:{}),{mode:{isOnBlur:se,isOnSubmit:ce,isOnChange:ae},reValidateMode:{isReValidateOnBlur:ke,isReValidateOnSubmit:Ee},errorsRef:g,touchedFieldsRef:v,fieldsRef:m,isWatchAllRef:W,watchFieldsRef:y,resetFieldArrayFunctionRef:G,fieldArrayDefaultValues:O,validFieldsRef:x,dirtyFieldsRef:j,fieldsWithValidationRef:w,fieldArrayNamesRef:ee,isDirtyRef:$,readFormStateRef:Re,defaultValuesRef:k}),_e);return Object.assign({watch:function(e,t){const r=y.current,n=S(t),s=n?k.current:t,c=Y(m.current,e);if(X(e))return de(c,e,r,n?V(s,e):t,!0);if(i(e))return e.reduce((e,t)=>Object.assign(Object.assign({},e),{[t]:de(c,t,r,s)}),{});W.current=!0;const a=!P(c)&&c||s;return e&&e.nest?C(a):a},control:qe,handleSubmit:$e,reset:Object(s.useCallback)((e,t={})=>{if(we)for(const n of Object.values(m.current))if(n){const{ref:e,options:t}=n,s=je(e)&&i(t)?t[0].ref:e;if(l(s))try{s.closest("form").reset();break}catch(r){}}e&&(k.current=e),Object.values(G.current).forEach(e=>re(e)&&e()),(({errors:e,dirty:t,isSubmitted:r,touched:n,isValid:s,submitCount:c,dirtyFields:a})=>{m.current={},e||(g.current={}),n||(v.current={}),s||(x.current=new Set,w.current=new Set,R.current=!0),t||($.current=!1),a||(j.current=new Set),r||(A.current=!1),c||(I.current=0),E.current={},O.current={},y.current=new Set,W.current=!1})(t),Ne()},[]),clearError:Object(s.useCallback)((function(e){e?D(g.current,i(e)?e:[e]):g.current={},Ne()}),[]),setError:Object(s.useCallback)((function(e,t="",r){X(e)?ze(Object.assign(Object.assign({name:e},o(t)?{types:t,type:""}:{type:t,message:r}),{shouldRender:!0})):i(e)&&(e.forEach(e=>ze(Object.assign({},e))),Ne())}),[]),errors:g.current},_e)}Object(s.createContext)(null);var xe=c.a.createElement,Re=function(){var e=Object(s.useState)((function(){var e=localStorage.getItem("ratingData");return null!==e?JSON.parse(e):"nada"})),t=e[0],r=e[1];Object(s.useEffect)((function(){localStorage.setItem("ratingData",JSON.stringify(t))}),[t]);var n=we(),a=n.register,i=n.handleSubmit;n.watch,n.errors;return xe(c.a.Fragment,null,xe("div",{className:"container"},xe("div",{className:"w-full max-w-xs"},xe("form",{className:"bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4",onSubmit:i((function(e){return r(e)}))},xe("div",{className:"mb-4"},xe("label",{className:"block text-black text-sm font-bold mb-2"},"Name"),xe("input",{defaultValue:t?t.name:"",name:"name",ref:a,className:"shadow appearance-none border-2 border-blue rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",type:"text",placeholder:"Username"})),xe("div",{className:"mb-4"},xe("label",{className:"block text-black text-sm font-bold mb-2"},"Beschreibung"),xe("input",{defaultValue:t?t.beschreibung:"",name:"beschreibung",ref:a,className:"shadow appearance-none border-2 border-blue rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",type:"text",placeholder:"Beschreibung"})),xe("div",{className:"flex items-center justify-between"},xe("input",{className:"bg-blue hover:bg-blue text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",type:"submit"}),xe("a",{className:"inline-block align-baseline font-bold text-sm text-blue hover:text-blue",href:"#"},"Forgot Password?")))),xe("div",{className:"container pt-64"})))},ke=c.a.createElement;t.default=function(){return ke(c.a.Fragment,null,ke(n.a,{currentOpen:"rating",bgColor:"blue"}),ke("div",{className:"w-screen h-screen bg-blue"},ke("div",{className:"container pt-32"},ke("div",{className:"row flex"},ke("div",{className:"lg:col-6"},ke("h1",{className:"text-white font-black"},"Eigenes Rating erstellen"),ke("p",{className:"text-white pb-16"},"Um zu erleben, wie ein Hersteller sein Rating erlangen kann, habe ich einen vereinfachten Workflow erstellt, den es erlaubt sein eigenes Rating zu berechnen.")),ke("div",{className:"lg:col-6 flex justify-center items-center"},ke("img",{className:"h-full",src:"eigenes_rating.svg",alt:""}))),ke("div",{className:"row pt-24"},ke("div",{className:"lg:col-6"},ke("button",{className:"p-6 bg-white text-blue font-bold rounded"},"Eigenes Product erfassen"))))),ke(Re,null))}}},[["R12Q",0,2,1]]]);