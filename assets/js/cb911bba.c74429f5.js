"use strict";(self.webpackChunkbeta_apier=self.webpackChunkbeta_apier||[]).push([[5874],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>c});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=s(r),k=a,c=u["".concat(p,".").concat(k)]||u[k]||g[k]||l;return r?n.createElement(c,o(o({ref:t},m),{},{components:r})):n.createElement(c,o({ref:t},m))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=k;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},3994:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const l={},o="Betalingsinformasjon",i={unversionedId:"trekkpaalegg/feltbeskrivelser/Models/Betalingsinformasjon",id:"trekkpaalegg/feltbeskrivelser/Models/Betalingsinformasjon",title:"Betalingsinformasjon",description:"Egenskaper",source:"@site/docs/trekkpaalegg/feltbeskrivelser/Models/Betalingsinformasjon.md",sourceDirName:"trekkpaalegg/feltbeskrivelser/Models",slug:"/trekkpaalegg/feltbeskrivelser/Models/Betalingsinformasjon",permalink:"/beta-apier/trekkpaalegg/feltbeskrivelser/Models/Betalingsinformasjon",draft:!1,tags:[],version:"current",lastUpdatedAt:1736529230,formattedLastUpdatedAt:"10. jan. 2025",frontMatter:{}},p={},s=[{value:"Egenskaper",id:"egenskaper",level:2}],m={toc:s};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"betalingsinformasjon"},"Betalingsinformasjon"),(0,a.kt)("h2",{id:"egenskaper"},"Egenskaper"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Navn"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Beskrivelse"),(0,a.kt)("th",{parentName:"tr",align:null},"Notater"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"betalingsmottaker")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:null},"Organisasjonsnummer til mottaker av betaling"),(0,a.kt)("td",{parentName:"tr",align:null},"[default til null]")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"kidnummer")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:null},"Kidnummer for trekkp\xe5legget"),(0,a.kt)("td",{parentName:"tr",align:null},"[default til null]")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"kontonummer")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:null},"Kontonummer til mottaker av betaling"),(0,a.kt)("td",{parentName:"tr",align:null},"[default til null]")))),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/beta-apier/trekkpaalegg/feltbeskrivelser/"},"[Tilbake til modell liste]")))}u.isMDXComponent=!0}}]);