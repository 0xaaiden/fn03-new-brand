"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[706],{94706:function(e,t,n){n.r(t),n.d(t,{Navigator:function(){return A}});var r=n(85893),l=n(89439),a=n(91296),u=n.n(a),s=n(67294),o=n(90210),i=n(21942);function c(e){let{isTipping:t,hidden:n}=e;return(0,r.jsx)(l.E.div,{className:"flex h-9 w-[0.2rem] bg-[#37C6E5]",animate:n?{opacity:0}:t?{opacity:1}:{opacity:[0,1,.05]},transition:t||n?{ease:"easeInOut"}:{duration:1,ease:"easeInOut",times:[0,.5,1],repeat:1/0}})}var d=n(65820),p=n(73935),m=n(11163);let y={home:{path:"/"},manifest:{path:"/manifest"},radio:{path:"/radio"}},f="an independent product team",h=["Control","Alt","Shift","Meta","Dead"],k=[" ","Tab","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],w=e=>k.includes(e),x=e=>h.includes(e),b=e=>"Escape"===e,v=e=>"Enter"===e,g=e=>"Backspace"===e||"ArrowLeft"===e,N=e=>"abcdefghijklmn\xf1opqrstuvwxyz ".includes(e.toLowerCase()),C=(0,s.memo)(e=>{let{initialState:t,externalCommands:n,withoutSound:a=!1}=e,{state:u,handleEscape:o,handleEnter:i,handleTyping:c,handleDelete:h,handleManageIndex:k,manageSuggestion:C,manageArrowRight:A,handleResetIndex:j,manageSearchText:E}=function(e){let{initialState:t,externalCommands:n,withoutSound:r}=e,l=(0,m.useRouter)(),[a,u]=(0,s.useState)(null),o=(0,s.useMemo)(()=>Object.keys(y),[]),i=(0,s.useMemo)(()=>n?Object.keys(n):[],[n]),c=(0,s.useMemo)(()=>null!==a?o[a]:null,[a,o]),[d,h]=(0,s.useState)(null!=t?t:f),[k,w]=(0,s.useState)(""),[x,b]=(0,s.useState)("up"),v=(0,s.useRef)(""),{errorSound:g,successSound:N,typingSound:C,deleteOneSound:A,deleteSound:j,commandSound:E}=function(){let e=(0,s.useMemo)(()=>new Audio("/sounds/enter.mp3"),[]),t=(0,s.useMemo)(()=>new Audio("/sounds/error.mp3"),[]),n=(0,s.useMemo)(()=>new Audio("/sounds/pop.mp3"),[]),r=(0,s.useMemo)(()=>new Audio("/sounds/pop.mp3"),[]),l=(0,s.useMemo)(()=>new Audio("/sounds/type.mp3"),[]),a=(0,s.useMemo)(()=>new Audio("/sounds/command.mp3"),[]);return{commandSound:a,deleteOneSound:n,deleteSound:r,errorSound:t,successSound:e,typingSound:l}}(),L=(0,s.useCallback)(()=>{l.back()},[l]),M=(0,s.useCallback)(()=>{v.current="",(0,p.flushSync)(()=>{u(null)}),w(""),h(null!=t?t:f)},[t]),S=(0,s.useMemo)(()=>({back:{callback:L}}),[L]),T=(0,s.useCallback)(()=>{var e,t;if(k&&((0,p.flushSync)(()=>{w("")}),v.current+=k,setTimeout(()=>{h(v.current)},100)),S[v.current]){let e=S[v.current];if(!e.callback)return;return r||null==N||N.cloneNode().play(),e.callback()}if(null==n?void 0:n[v.current]){let e=n[v.current];if(!e.callback)return;return r||null==N||N.cloneNode().play(),M(),e.callback()}let a=null===(e=y[null===(t=v.current)||void 0===t?void 0:t.toLocaleLowerCase()])||void 0===e?void 0:e.path;if(!a){r||null==g||g.cloneNode().play();return}null==N||N.cloneNode().play(),a&&l.push(a)},[g,n,M,S,l,N,k,r]),I=(0,s.useCallback)(e=>{!(" "===e.key&&v.current.endsWith(" "))&&(r||null==C||C.cloneNode().play(),v.current.length<f.length&&(v.current+=e.key))},[C,r]),R=(0,s.useCallback)(e=>{!v.current||(e.metaKey&&(r||null==j||j.cloneNode().play(),v.current="",u(null)),e.altKey?(v.current=v.current.slice(0,-1),v.current=v.current.slice(0,v.current.lastIndexOf(" ")+1),v.current||u(null)):(r||null==A||A.cloneNode().play(),v.current=v.current.slice(0,-1),v.current||u(null)))},[A,j,r]),D=(0,s.useCallback)(e=>{"ArrowUp"===e.key&&(r||null==E||E.cloneNode().play(),(0,p.flushSync)(()=>{b("up")}),h(""),v.current="",u(e=>null===e||e+1===o.length?0:e+1)),"ArrowDown"===e.key&&(r||null==E||E.cloneNode().play(),(0,p.flushSync)(()=>{b("down")}),h(""),v.current="",u(e=>null===e?0:0===e?o.length-1:e-1))},[E,o.length,r]),_=(0,s.useCallback)(e=>{if("ArrowUp"===e.key||"ArrowDown"===e.key)return;let t=i.find(e=>e.startsWith(v.current.toLocaleLowerCase()));if(t)return w(t.slice(v.current.length));let n=v.current&&o.find(e=>e.toLocaleLowerCase().startsWith(v.current.toLocaleLowerCase()));n?w(n.slice(v.current.length)):w("")},[i,o]),U=(0,s.useCallback)(e=>{"ArrowRight"===e.key&&(h(k),w(""),v.current+=k),"Tab"===e.key&&(h(k),w(""),v.current+=k)},[k]),O=(0,s.useCallback)(e=>{"ArrowUp"!==e.key&&"ArrowDown"!==e.key&&u(null)},[u]),W=(0,s.useCallback)(()=>{h(v.current)},[]);return(0,s.useEffect)(()=>{null!==a?w(o[a]):w("")},[a,o]),(0,s.useEffect)(()=>{setTimeout(()=>{M()},200)},[M,l.pathname]),{handleBack:L,handleEscape:M,handleEnter:T,handleTyping:I,handleDelete:R,handleManageIndex:D,manageSuggestion:_,manageArrowRight:U,handleResetIndex:O,manageSearchText:W,state:{searchText:d,suggestion:k,index:a,direction:x,arrowSuggestion:c}}}({initialState:t,externalCommands:n,withoutSound:a}),{initial:L,animate:M,exit:S}=function(e){let{index:t,direction:n}=e,r=(0,s.useMemo)(()=>{if(null!==t)return"up"===n?{opacity:0,y:30}:{opacity:0,y:-30}},[n,t]),l=(0,s.useMemo)(()=>{if(null!==t)return{opacity:.2,y:0}},[t]),a=(0,s.useMemo)(()=>{if(null!==t)return"up"===n?{opacity:0,y:-30,transition:{opacity:{duration:.1}}}:{opacity:0,y:30,transition:{opacity:{duration:.1}}}},[n,t]);return{initial:r,animate:l,exit:a}}({direction:u.direction,index:u.index}),T=(0,s.useCallback)(e=>{if(w(e.key)&&e.preventDefault(),!x(e.key)){if(b(e.key)){o();return}if(v(e.key)){i();return}k(e),j(e),N(e.key)&&c(e),g(e.key)&&h(e),A(e),(0,p.flushSync)(()=>{C(e)}),E()}},[h,i,o,k,j,c,A,E,C]);return(0,s.useEffect)(()=>(document.addEventListener("keydown",T),()=>{document.removeEventListener("keydown",T)}),[T]),(0,r.jsx)("div",{className:"py-3 text-black transition-colors duration-500 dark:text-white",children:(0,r.jsxs)("h1",{className:"relative flex h-11 text-[28px] font-bold lg:text-[32px]",children:[u.searchText," "===u.searchText[u.searchText.length-1]&&(0,r.jsx)("span",{className:"w-2"}),(0,r.jsx)("span",{className:"absolute top-0 left-0 w-full flex-1",children:(0,r.jsx)(d.M,{mode:"popLayout",children:null!==u.index&&(0,r.jsx)(l.E.span,{className:"absolute top-0 left-0 w-full select-none opacity-20",initial:L,animate:M,exit:S,children:u.arrowSuggestion},u.index)})}),null===u.index&&(0,r.jsxs)("span",{className:"absolute left-0 w-full opacity-20","aria-hidden":!0,children:[(0,r.jsx)("span",{"aria-hidden":!0,className:"opacity-0",children:u.searchText}),(0,r.jsx)("span",{className:"select-none",children:u.suggestion})]})]})})});function A(e){let{initialState:t,externalCommands:n,withoutSound:l}=e,[a,d]=(0,s.useState)(!1),[p,m]=(0,s.useState)(!1),y=(0,o.M)(e=>e.homeInitialRender),f=(0,o.M)(e=>e.setHomeInitialRender);(0,s.useEffect)(()=>{let e=e=>{if("ArrowDown"===e.key||"ArrowUp"===e.key){m(!0);return}m(!1),d(!0)},t=u()(e=>{if("ArrowDown"===e.key||"ArrowUp"===e.key){m(!1);return}d(!1)},1e3);return document.addEventListener("keydown",e),document.addEventListener("keyup",t),()=>{document.removeEventListener("keydown",e),document.removeEventListener("keyup",t),t.cancel()}},[]);let h=(0,s.useCallback)(async()=>{await (0,i._)(1e3),d(!0),await (0,i._)(3e3),d(!1),await (0,i._)(1e3),f()},[]);return((0,s.useEffect)(()=>{y&&h()},[]),y)?(0,r.jsxs)("div",{className:"pointer-events-auto mb-6 hidden items-center md:flex",children:[(0,r.jsx)(j,{input:t||""}),(0,r.jsx)(c,{isTipping:a,hidden:p})]}):(0,r.jsxs)("div",{className:"pointer-events-auto mb-6 hidden items-center md:flex",children:[(0,r.jsx)(C,{withoutSound:l,initialState:t,externalCommands:n}),(0,r.jsx)(c,{isTipping:a,hidden:p})]})}function j(e){let{input:t}=e,[n,a]=(0,s.useState)(""),u=(0,s.useRef)(null),o=(0,s.useRef)(null),i=(0,s.useRef)(!0);return i.current&&(i.current=!1,o.current=setTimeout(()=>void(clearInterval(u.current),u.current=setInterval(()=>{a(e=>t.substring(0,e.length+1))},40)),2e3)),n===t&&(clearInterval(u.current),clearTimeout(o.current)),(0,r.jsx)("div",{className:"py-3 transition-colors duration-500",children:(0,r.jsx)(l.E.h1,{className:"relative flex h-11 bg-clip-text text-[28px] font-bold lg:text-[32px]",style:{WebkitTextFillColor:"transparent"},initial:{backgroundImage:"linear-gradient(90deg, #000000 0%, #37C6E5 100%)"},animate:{backgroundImage:"linear-gradient(90deg, #000000 100%, #37C6E5 100%)"},transition:{duration:3,delay:1.8},children:n})})}C.displayName="Input"}}]);