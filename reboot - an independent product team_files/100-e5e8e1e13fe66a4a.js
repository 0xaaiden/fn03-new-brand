(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[100],{10227:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,o,n){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},31551:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(92648).Z,r=o(17273).Z,l=n(o(67294)),u=o(41003),a=o(67795),f=o(54465),c=o(72692),i=o(48245),s=o(69246),d=o(10227),p=o(33468);let h=new Set;function v(e,t,o,n){if(u.isLocalURL(t)){if(!n.bypassPrefetchedCheck){let r=void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0,l=t+"%"+o+"%"+r;if(h.has(l))return;h.add(l)}Promise.resolve(e.prefetch(t,o,n)).catch(e=>{})}}function y(e){return"string"==typeof e?e:a.formatUrl(e)}let b=l.default.forwardRef(function(e,t){let o,n;let{href:a,as:h,children:b,prefetch:g,passHref:m,replace:_,shallow:C,scroll:E,locale:k,onClick:M,onMouseEnter:j,onTouchStart:P,legacyBehavior:O=!1}=e,w=r(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);o=b,O&&("string"==typeof o||"number"==typeof o)&&(o=l.default.createElement("a",null,o));let x=!1!==g,L=l.default.useContext(c.RouterContext),S=l.default.useContext(i.AppRouterContext),R=null!=L?L:S,I=!L,{href:T,as:D}=l.default.useMemo(()=>{if(!L){let e=y(a);return{href:e,as:h?y(h):e}}let[e,t]=u.resolveHref(L,a,!0);return{href:e,as:h?u.resolveHref(L,h):t||e}},[L,a,h]),K=l.default.useRef(T),N=l.default.useRef(D);O&&(n=l.default.Children.only(o));let U=O?n&&"object"==typeof n&&n.ref:t,[B,H,A]=s.useIntersection({rootMargin:"200px"}),Z=l.default.useCallback(e=>{(N.current!==D||K.current!==T)&&(A(),N.current=D,K.current=T),B(e),U&&("function"==typeof U?U(e):"object"==typeof U&&(U.current=e))},[D,U,T,A,B]);l.default.useEffect(()=>{R&&H&&x&&v(R,T,D,{locale:k})},[D,T,H,k,x,null==L?void 0:L.locale,R]);let q={ref:Z,onClick(e){O||"function"!=typeof M||M(e),O&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),R&&!e.defaultPrevented&&function(e,t,o,n,r,a,f,c,i,s){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let{target:t}=e.currentTarget;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!u.isLocalURL(o)))return;e.preventDefault();let h=()=>{"beforePopState"in t?t[r?"replace":"push"](o,n,{shallow:a,locale:c,scroll:f}):t[r?"replace":"push"](n||o,{forceOptimisticNavigation:!s})};i?l.default.startTransition(h):h()}(e,R,T,D,_,C,E,k,I,x)},onMouseEnter(e){O||"function"!=typeof j||j(e),O&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),R&&(x||!I)&&v(R,T,D,{locale:k,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart(e){O||"function"!=typeof P||P(e),O&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),R&&(x||!I)&&v(R,T,D,{locale:k,priority:!0,bypassPrefetchedCheck:!0})}};if(!O||m||"a"===n.type&&!("href"in n.props)){let e=void 0!==k?k:null==L?void 0:L.locale,t=(null==L?void 0:L.isLocaleDomain)&&d.getDomainLocale(D,e,null==L?void 0:L.locales,null==L?void 0:L.domainLocales);q.href=t||p.addBasePath(f.addLocale(D,e,null==L?void 0:L.defaultLocale))}return O?l.default.cloneElement(n,q):l.default.createElement("a",Object.assign({},w,q),o)});t.default=b,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},69246:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:o,disabled:f}=e,c=f||!l,[i,s]=n.useState(!1),d=n.useRef(null),p=n.useCallback(e=>{d.current=e},[]);n.useEffect(()=>{if(l){if(c||i)return;let e=d.current;if(e&&e.tagName){let n=function(e,t,o){let{id:n,observer:r,elements:l}=function(e){let t;let o={root:e.root||null,margin:e.rootMargin||""},n=a.find(e=>e.root===o.root&&e.margin===o.margin);if(n&&(t=u.get(n)))return t;let r=new Map,l=new IntersectionObserver(e=>{e.forEach(e=>{let t=r.get(e.target),o=e.isIntersecting||e.intersectionRatio>0;t&&o&&t(o)})},e);return t={id:o,observer:l,elements:r},a.push(o),u.set(o,t),t}(o);return l.set(e,t),r.observe(e),function(){if(l.delete(e),r.unobserve(e),0===l.size){r.disconnect(),u.delete(n);let e=a.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&a.splice(e,1)}}}(e,e=>e&&s(e),{root:null==t?void 0:t.current,rootMargin:o});return n}}else if(!i){let e=r.requestIdleCallback(()=>s(!0));return()=>r.cancelIdleCallback(e)}},[c,o,t,i,d.current]);let h=n.useCallback(()=>{s(!1)},[]);return[p,i,h]};var n=o(67294),r=o(44686);let l="function"==typeof IntersectionObserver,u=new Map,a=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},41664:function(e,t,o){e.exports=o(31551)},25675:function(e,t,o){"use strict";o.d(t,{E:function(){return c}});var n=o(24394),r=o(51020),l=o(5759);function u(){let e=!1,t=new Set,o={subscribe:e=>(t.add(e),()=>void t.delete(e)),start(o,l){(0,n.k)(e,"controls.start() should only be called after a component has mounted. Consider calling within a useEffect hook.");let u=[];return t.forEach(e=>{u.push((0,r.d5)(e,o,{transitionOverride:l}))}),Promise.all(u)},set:o=>((0,n.k)(e,"controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook."),t.forEach(e=>{(0,l.gg)(e,o)})),stop(){t.forEach(e=>{(0,r.p_)(e)})},mount:()=>(e=!0,()=>{e=!1,o.stop()})};return o}var a=o(96681),f=o(58868);function c(){let e=(0,a.h)(u);return(0,f.L)(e.mount,[]),e}},4960:function(e,t,o){"use strict";o.d(t,{c:function(){return a}});var n=o(67294),r=o(33234),l=o(16014),u=o(96681);function a(e){let t=(0,u.h)(()=>(0,r.B)(e)),{isStatic:o}=(0,n.useContext)(l._);if(o){let[,o]=(0,n.useState)(e);(0,n.useEffect)(()=>t.on("change",o),[])}return t}}}]);