"use strict";(self.webpackChunkdesmjs_documentation=self.webpackChunkdesmjs_documentation||[]).push([[9514,3045],{9544:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Te});var r=n(7378),a=n(7140),o=n(4093),l=n(9741),c=n(9794),i=n(1637),s=n(5389),d=n(1773),u=n(442),m=n(3640),b=n(724),p=n(3786);const f="backToTopButton_iEvu",h="backToTopButtonShow_DO8w";function g(){const{shown:e,scrollToTop:t}=function({threshold:e}){const[t,n]=(0,r.useState)(!1),a=(0,r.useRef)(!1),{startScroll:o,cancelScroll:l}=(0,b.Ct)();return(0,b.RF)((({scrollY:t},r)=>{const o=null==r?void 0:r.scrollY;o&&(a.current?a.current=!1:t>=o?(l(),n(!1)):t<e?n(!1):t+window.innerHeight<document.documentElement.scrollHeight&&n(!0))})),(0,p.S)((e=>{e.location.hash&&(a.current=!0,n(!1))})),{shown:t,scrollToTop:()=>o(0)}}({threshold:300});return r.createElement("button",{"aria-label":(0,m.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,a.Z)("clean-btn",l.k.common.backToTopButton,f,e&&h),type:"button",onClick:t})}var E=n(9781),v=n(3620),y=n(4976),O=n(4144),k=n(3186);function S(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function C(e){return r.createElement("svg",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){S(e,t,n[t])}))}return e}({width:"20",height:"20","aria-hidden":"true"},e),r.createElement("g",{fill:"#7a7a7a"},r.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),r.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}const _="collapseSidebarButton_oTwn",w="collapseSidebarButtonIcon_pMEX";function I({onClick:e}){return r.createElement("button",{type:"button",title:(0,m.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,m.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,a.Z)("button button--secondary button--outline",_),onClick:e},r.createElement(C,{className:w}))}var j=n(8195),P=n(3077);const N=Symbol("EmptyContext"),x=r.createContext(N);function T({children:e}){const[t,n]=(0,r.useState)(null),a=(0,r.useMemo)((()=>({expandedItem:t,setExpandedItem:n})),[t]);return r.createElement(x.Provider,{value:a},e)}var Z=n(6151),L=n(7305),A=n(4530),M=n(101);function B(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function F(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function H({categoryLabel:e,onClick:t}){return r.createElement("button",{"aria-label":(0,m.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:e}),type:"button",className:"clean-btn menu__caret",onClick:t})}function D(e){var{item:t,onItemClick:n,activePath:o,level:c,index:s}=e,d=F(e,["item","onItemClick","activePath","level","index"]);const{items:u,label:m,collapsible:b,className:p,href:f}=t,{docs:{sidebar:{autoCollapseCategories:h}}}=(0,O.L)(),g=function(e){const t=(0,M.Z)();return(0,r.useMemo)((()=>e.href?e.href:!t&&e.collapsible?(0,i.Wl)(e):void 0),[e,t])}(t),E=(0,i._F)(t,o),v=(0,L.Mg)(f,o),{collapsed:y,setCollapsed:k}=(0,Z.u)({initialState:()=>!!b&&(!E&&t.collapsed)}),{expandedItem:S,setExpandedItem:C}=function(){const e=(0,r.useContext)(x);if(e===N)throw new P.i6("DocSidebarItemsExpandedStateProvider");return e}(),_=(e=!y)=>{C(e?null:s),k(e)};return function({isActive:e,collapsed:t,updateCollapsed:n}){const a=(0,P.D9)(e);(0,r.useEffect)((()=>{e&&!a&&t&&n(!1)}),[e,a,t,n])}({isActive:E,collapsed:y,updateCollapsed:_}),(0,r.useEffect)((()=>{b&&null!=S&&S!==s&&h&&k(!0)}),[b,S,s,k,h]),r.createElement("li",{className:(0,a.Z)(l.k.docs.docSidebarItemCategory,l.k.docs.docSidebarItemCategoryLevel(c),"menu__list-item",{"menu__list-item--collapsed":y},p)},r.createElement("div",{className:(0,a.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":v})},r.createElement(A.Z,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){B(e,t,n[t])}))}return e}({className:(0,a.Z)("menu__link",{"menu__link--sublist":b,"menu__link--sublist-caret":!f&&b,"menu__link--active":E}),onClick:b?e=>{null==n||n(t),f?_(!1):(e.preventDefault(),_())}:()=>{null==n||n(t)},"aria-current":v?"page":void 0,"aria-expanded":b?!y:void 0,href:b?null!=g?g:"#":g},d),m),f&&b&&r.createElement(H,{categoryLabel:m,onClick:e=>{e.preventDefault(),_()}})),r.createElement(Z.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:y},r.createElement(ne,{items:u,tabIndex:y?-1:0,onItemClick:n,activePath:o,level:c+1})))}var R=n(1062),V=n(9593);const W="menuExternalLink_BiEj";function Y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function z(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function U(e){var{item:t,onItemClick:n,activePath:o,level:c,index:s}=e,d=z(e,["item","onItemClick","activePath","level","index"]);const{href:u,label:m,className:b,autoAddBaseUrl:p}=t,f=(0,i._F)(t,o),h=(0,R.Z)(u);return r.createElement("li",{className:(0,a.Z)(l.k.docs.docSidebarItemLink,l.k.docs.docSidebarItemLinkLevel(c),"menu__list-item",b),key:m},r.createElement(A.Z,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){Y(e,t,n[t])}))}return e}({className:(0,a.Z)("menu__link",!h&&W,{"menu__link--active":f}),autoAddBaseUrl:p,"aria-current":f?"page":void 0,to:u},h&&{onClick:n?()=>n(t):void 0},d),m,!h&&r.createElement(V.Z,null)))}const G="menuHtmlItem_OniL";function K({item:e,level:t,index:n}){const{value:o,defaultStyle:c,className:i}=e;return r.createElement("li",{className:(0,a.Z)(l.k.docs.docSidebarItemLink,l.k.docs.docSidebarItemLinkLevel(t),c&&[G,"menu__list-item"],i),key:n,dangerouslySetInnerHTML:{__html:o}})}function q(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function J(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){q(e,t,n[t])}))}return e}function Q(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function X(e){var{item:t}=e,n=Q(e,["item"]);switch(t.type){case"category":return r.createElement(D,J({item:t},n));case"html":return r.createElement(K,J({item:t},n));default:return r.createElement(U,J({item:t},n))}}function $(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ee(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function te(e){var{items:t}=e,n=ee(e,["items"]);return r.createElement(T,null,t.map(((e,t)=>r.createElement(X,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){$(e,t,n[t])}))}return e}({key:t,item:e,index:t},n)))))}const ne=(0,r.memo)(te),re="menu_jmj1",ae="menuWithAnnouncementBar_YufC";function oe({path:e,sidebar:t,className:n}){const o=function(){const{isActive:e}=(0,j.nT)(),[t,n]=(0,r.useState)(e);return(0,b.RF)((({scrollY:t})=>{e&&n(0===t)}),[e]),e&&t}();return r.createElement("nav",{"aria-label":(0,m.I)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,a.Z)("menu thin-scrollbar",re,o&&ae,n)},r.createElement("ul",{className:(0,a.Z)(l.k.docs.docSidebarMenu,"menu__list")},r.createElement(ne,{items:t,activePath:e,level:1})))}const le="sidebar_CUen",ce="sidebarWithHideableNavbar_w4KB",ie="sidebarHidden_k6VE",se="sidebarLogo_CYvI";function de({path:e,sidebar:t,onCollapse:n,isHidden:o}){const{navbar:{hideOnScroll:l},docs:{sidebar:{hideable:c}}}=(0,O.L)();return r.createElement("div",{className:(0,a.Z)(le,l&&ce,o&&ie)},l&&r.createElement(k.Z,{tabIndex:-1,className:se}),r.createElement(oe,{path:e,sidebar:t}),c&&r.createElement(I,{onClick:n}))}const ue=r.memo(de);var me=n(9905),be=n(1195);const pe=({sidebar:e,path:t})=>{const n=(0,be.e)();return r.createElement("ul",{className:(0,a.Z)(l.k.docs.docSidebarMenu,"menu__list")},r.createElement(ne,{items:e,activePath:t,onItemClick:e=>{"category"===e.type&&e.href&&n.toggle(),"link"===e.type&&n.toggle()},level:1}))};function fe(e){return r.createElement(me.Zo,{component:pe,props:e})}const he=r.memo(fe);function ge(e){const t=(0,y.i)(),n="desktop"===t||"ssr"===t,a="mobile"===t;return r.createElement(r.Fragment,null,n&&r.createElement(ue,e),a&&r.createElement(he,e))}const Ee="expandButton_YOoA",ve="expandButtonIcon_GZLG";function ye({toggleSidebar:e}){return r.createElement("div",{className:Ee,title:(0,m.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,m.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:e,onClick:e},r.createElement(C,{className:ve}))}const Oe={docSidebarContainer:"docSidebarContainer_y0RQ",docSidebarContainerHidden:"docSidebarContainerHidden_uArb",sidebarViewport:"sidebarViewport_EJ1r"};function ke({children:e}){const t=(0,d.V)();var n;return r.createElement(r.Fragment,{key:null!==(n=null==t?void 0:t.name)&&void 0!==n?n:"noSidebar"},e)}function Se({sidebar:e,hiddenSidebarContainer:t,setHiddenSidebarContainer:n}){const{pathname:o}=(0,v.TH)(),[c,i]=(0,r.useState)(!1),s=(0,r.useCallback)((()=>{c&&i(!1),!c&&(0,E.n)()&&i(!0),n((e=>!e))}),[n,c]);return r.createElement("aside",{className:(0,a.Z)(l.k.docs.docSidebarContainer,Oe.docSidebarContainer,t&&Oe.docSidebarContainerHidden),onTransitionEnd:e=>{e.currentTarget.classList.contains(Oe.docSidebarContainer)&&t&&i(!0)}},r.createElement(ke,null,r.createElement("div",{className:(0,a.Z)(Oe.sidebarViewport,c&&Oe.sidebarViewportHidden)},r.createElement(ge,{sidebar:e,path:o,onCollapse:s,isHidden:c}),c&&r.createElement(ye,{toggleSidebar:s}))))}const Ce={docMainContainer:"docMainContainer_sTIZ",docMainContainerEnhanced:"docMainContainerEnhanced_iSjt",docItemWrapperEnhanced:"docItemWrapperEnhanced_PxMR"};function _e({hiddenSidebarContainer:e,children:t}){const n=(0,d.V)();return r.createElement("main",{className:(0,a.Z)(Ce.docMainContainer,(e||!n)&&Ce.docMainContainerEnhanced)},r.createElement("div",{className:(0,a.Z)("container padding-top--md padding-bottom--lg",Ce.docItemWrapper,e&&Ce.docItemWrapperEnhanced)},t))}const we="docPage_KLoz",Ie="docsWrapper_ct1J";function je({children:e}){const t=(0,d.V)(),[n,a]=(0,r.useState)(!1);return r.createElement(u.Z,{wrapperClassName:Ie},r.createElement(g,null),r.createElement("div",{className:we},t&&r.createElement(Se,{sidebar:t.items,hiddenSidebarContainer:n,setHiddenSidebarContainer:a}),r.createElement(_e,{hiddenSidebarContainer:n},e)))}var Pe=n(3045),Ne=n(8050);function xe(e){const{versionMetadata:t}=e;return r.createElement(r.Fragment,null,r.createElement(Ne.Z,{version:t.version,tag:(0,c.os)(t.pluginId,t.version)}),r.createElement(o.d,null,t.noIndex&&r.createElement("meta",{name:"robots",content:"noindex, nofollow"})))}function Te(e){const{versionMetadata:t}=e,n=(0,i.hI)(e);if(!n)return r.createElement(Pe.default,null);const{docElement:c,sidebarName:u,sidebarItems:m}=n;return r.createElement(r.Fragment,null,r.createElement(xe,e),r.createElement(o.FG,{className:(0,a.Z)(l.k.wrapper.docsPages,l.k.page.docsDocPage,e.versionMetadata.className)},r.createElement(s.q,{version:t},r.createElement(d.b,{name:u,items:m},r.createElement(je,null,c)))))}},3045:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var r=n(7378),a=n(3640),o=n(4093),l=n(442);function c(){return r.createElement(r.Fragment,null,r.createElement(o.d,{title:(0,a.I)({id:"theme.NotFound.title",message:"Page Not Found"})}),r.createElement(l.Z,null,r.createElement("main",{className:"container margin-vert--xl"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col col--6 col--offset-3"},r.createElement("h1",{className:"hero__title"},r.createElement(a.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),r.createElement("p",null,r.createElement(a.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),r.createElement("p",null,r.createElement(a.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))))}},5389:(e,t,n)=>{n.d(t,{E:()=>c,q:()=>l});var r=n(7378),a=n(3077);const o=r.createContext(null);function l({children:e,version:t}){return r.createElement(o.Provider,{value:t},e)}function c(){const e=(0,r.useContext)(o);if(null===e)throw new a.i6("DocsVersionProvider");return e}}}]);