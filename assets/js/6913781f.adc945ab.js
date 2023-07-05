"use strict";(self.webpackChunkbeta_apier=self.webpackChunkbeta_apier||[]).push([[2905],{3905:(e,t,r)=>{r.d(t,{Zo:()=>g,kt:()=>c});var n=r(7294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},g=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),u=p(r),f=l,c=u["".concat(s,".").concat(f)]||u[f]||d[f]||a;return r?n.createElement(c,i(i({ref:t},g),{},{components:r})):n.createElement(c,i({ref:t},g))}));function c(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,i=new Array(a);i[0]=f;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:l,i[1]=o;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},9607:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var n=r(7462),l=(r(7294),r(3905));const a={},i="TilleggsfristForeldelse",o={unversionedId:"utleggsbegjaering/feltbeskrivelser/Models/TilleggsfristForeldelse",id:"utleggsbegjaering/feltbeskrivelser/Models/TilleggsfristForeldelse",title:"TilleggsfristForeldelse",description:"Properties",source:"@site/docs/utleggsbegjaering/feltbeskrivelser/Models/TilleggsfristForeldelse.md",sourceDirName:"utleggsbegjaering/feltbeskrivelser/Models",slug:"/utleggsbegjaering/feltbeskrivelser/Models/TilleggsfristForeldelse",permalink:"/beta-apier/utleggsbegjaering/feltbeskrivelser/Models/TilleggsfristForeldelse",draft:!1,tags:[],version:"current",frontMatter:{}},s={},p=[{value:"Properties",id:"properties",level:2}],g={toc:p};function u(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"tilleggsfristforeldelse"},"TilleggsfristForeldelse"),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Navn"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Beskrivelse"),(0,l.kt)("th",{parentName:"tr",align:null},"Notater"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"dato")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"date")),(0,l.kt)("td",{parentName:"tr",align:null},"Gir verdier for \xe5r, m\xe5ned og dag. Kodes som en tekststreng etter datoformatering spesifisert i  ISO 8601 (ISO 8601:2004 Data elements and interchange formats -- Information interchange -- Representation of dates and times). Eksempel : 1998-12-21 eller 19981221.   (",(0,l.kt)("a",{parentName:"td",href:"https://data.skatteetaten.no/begrep/20b52aed-9fe1-11e5-a9f8-e4115b280940"},"Begrepsreferanse"),")"),(0,l.kt)("td",{parentName:"tr",align:null},"[optional][default to null]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"grunnlag")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/beta-apier/utleggsbegjaering/feltbeskrivelser/Models/TilleggsfristForeldelseGrunnlag"},(0,l.kt)("strong",{parentName:"a"},"TilleggsfristForeldelseGrunnlag"))),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"[optional][default to null]")))),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/beta-apier/utleggsbegjaering/feltbeskrivelser/"},"[Tilbake til modell liste]")))}u.isMDXComponent=!0}}]);