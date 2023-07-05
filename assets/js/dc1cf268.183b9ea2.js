"use strict";(self.webpackChunkbeta_apier=self.webpackChunkbeta_apier||[]).push([[1466],{3905:(e,t,r)=>{r.d(t,{Zo:()=>g,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},g=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,g=i(e,["components","mdxType","originalType","parentName"]),d=s(r),k=n,m=d["".concat(p,".").concat(k)]||d[k]||u[k]||l;return r?a.createElement(m,o(o({ref:t},g),{},{components:r})):a.createElement(m,o({ref:t},g))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=k;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:n,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}k.displayName="MDXCreateElement"},1395:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var a=r(7462),n=(r(7294),r(3905));const l={},o="Transporterklaering",i={unversionedId:"utleggsbegjaering/feltbeskrivelser/Models/Transporterklaering",id:"utleggsbegjaering/feltbeskrivelser/Models/Transporterklaering",title:"Transporterklaering",description:"Properties",source:"@site/docs/utleggsbegjaering/feltbeskrivelser/Models/Transporterklaering.md",sourceDirName:"utleggsbegjaering/feltbeskrivelser/Models",slug:"/utleggsbegjaering/feltbeskrivelser/Models/Transporterklaering",permalink:"/beta-apier/utleggsbegjaering/feltbeskrivelser/Models/Transporterklaering",draft:!1,tags:[],version:"current",frontMatter:{}},p={},s=[{value:"Properties",id:"properties",level:2}],g={toc:s};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"transporterklaering"},"Transporterklaering"),(0,n.kt)("h2",{id:"properties"},"Properties"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Navn"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Beskrivelse"),(0,n.kt)("th",{parentName:"tr",align:null},"Notater"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"dato")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"date")),(0,n.kt)("td",{parentName:"tr",align:null},"Gir verdier for \xe5r, m\xe5ned og dag. Kodes som en tekststreng etter datoformatering spesifisert i  ISO 8601 (ISO 8601:2004 Data elements and interchange formats -- Information interchange -- Representation of dates and times). Eksempel : 1998-12-21 eller 19981221.   (",(0,n.kt)("a",{parentName:"td",href:"https://data.skatteetaten.no/begrep/20b52aed-9fe1-11e5-a9f8-e4115b280940"},"Begrepsreferanse"),")"),(0,n.kt)("td",{parentName:"tr",align:null},"[default to null]")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"transportertFra")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/beta-apier/utleggsbegjaering/feltbeskrivelser/Models/Identifikator"},(0,n.kt)("strong",{parentName:"a"},"Identifikator"))),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"[optional][default to null]")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"beloep")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/beta-apier/utleggsbegjaering/feltbeskrivelser/Models/BeloepValuta"},(0,n.kt)("strong",{parentName:"a"},"BeloepValuta"))),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"[optional][default to null]")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"transporterklaering")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/beta-apier/utleggsbegjaering/feltbeskrivelser/Models/Vedlegg"},(0,n.kt)("strong",{parentName:"a"},"Vedlegg"))),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"[optional][default to null]")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"transportertTil")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/beta-apier/utleggsbegjaering/feltbeskrivelser/Models/Identifikator"},(0,n.kt)("strong",{parentName:"a"},"Identifikator"))),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"[optional][default to null]")))),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/beta-apier/utleggsbegjaering/feltbeskrivelser/"},"[Tilbake til modell liste]")))}d.isMDXComponent=!0}}]);