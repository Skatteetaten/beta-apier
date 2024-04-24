"use strict";(self.webpackChunkbeta_apier=self.webpackChunkbeta_apier||[]).push([[5633],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>m});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function g(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),s=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):g(g({},e),t)),a},d=function(t){var e=s(t.components);return n.createElement(p.Provider,{value:e},t.children)},o="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),o=s(a),u=r,m=o["".concat(p,".").concat(u)]||o[u]||k[u]||l;return a?n.createElement(m,g(g({ref:e},d),{},{components:a})):n.createElement(m,g({ref:e},d))}));function m(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,g=new Array(l);g[0]=u;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i[o]="string"==typeof t?t:r,g[1]=i;for(var s=2;s<l;s++)g[s]=a[s];return n.createElement.apply(null,g)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},4715:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>g,default:()=>o,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const l={},g="ElektroniskGjeldserklaering",i={unversionedId:"utleggsbegjaering/feltbeskrivelser/Models/ElektroniskGjeldserklaering",id:"utleggsbegjaering/feltbeskrivelser/Models/ElektroniskGjeldserklaering",title:"ElektroniskGjeldserklaering",description:"Properties",source:"@site/docs/utleggsbegjaering/feltbeskrivelser/Models/ElektroniskGjeldserklaering.md",sourceDirName:"utleggsbegjaering/feltbeskrivelser/Models",slug:"/utleggsbegjaering/feltbeskrivelser/Models/ElektroniskGjeldserklaering",permalink:"/beta-apier/utleggsbegjaering/feltbeskrivelser/Models/ElektroniskGjeldserklaering",draft:!1,tags:[],version:"current",frontMatter:{}},p={},s=[{value:"Properties",id:"properties",level:2}],d={toc:s};function o(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"elektroniskgjeldserklaering"},"ElektroniskGjeldserklaering"),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Navn"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Beskrivelse"),(0,r.kt)("th",{parentName:"tr",align:null},"Notater"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"eksterntSaksnummer")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"Referanse til underlaget for tvangsgrunnlaget"),(0,r.kt)("td",{parentName:"tr",align:null},"[optional][default to null]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"tvangsgrunnlag")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/beta-apier/utleggsbegjaering/feltbeskrivelser/Models/Vedlegg"},(0,r.kt)("strong",{parentName:"a"},"Vedlegg"))),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"[optional][default to null]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"dato")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"date")),(0,r.kt)("td",{parentName:"tr",align:null},"Gir verdier for \xe5r, m\xe5ned og dag. Kodes som en tekststreng etter datoformatering spesifisert i  ISO 8601 (ISO 8601:2004 Data elements and interchange formats -- Information interchange -- Representation of dates and times). Eksempel : 1998-12-21 eller 19981221. (",(0,r.kt)("a",{parentName:"td",href:"https://data.skatteetaten.no/begrep/20b52aed-9fe1-11e5-a9f8-e4115b280940"},"Begrepsreferanse"),")"),(0,r.kt)("td",{parentName:"tr",align:null},"[default to null]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"varsel")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/beta-apier/utleggsbegjaering/feltbeskrivelser/Models/Tvangskraftgrunnlag"},(0,r.kt)("strong",{parentName:"a"},"Tvangskraftgrunnlag"))),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"[optional][default to null]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"betegnelseAvTvangsgrunnlag")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"Vilk\xe5rlig lang sekvens av tegn inkludert aksenter og spesielle tegn fra standardiserte tegnsett (",(0,r.kt)("a",{parentName:"td",href:"https://data.skatteetaten.no/begrep/20b52af3-9fe1-11e5-a9f8-e4115b280940"},"Begrepsreferanse"),")"),(0,r.kt)("td",{parentName:"tr",align:null},"[default to null]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"begjaeringOmFritakFraVarsling")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"Vilk\xe5rlig lang sekvens av tegn inkludert aksenter og spesielle tegn fra standardiserte tegnsett (",(0,r.kt)("a",{parentName:"td",href:"https://data.skatteetaten.no/begrep/20b52af3-9fe1-11e5-a9f8-e4115b280940"},"Begrepsreferanse"),")"),(0,r.kt)("td",{parentName:"tr",align:null},"[optional][default to null]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"begrunnelseUnnlatVarsel")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/beta-apier/utleggsbegjaering/feltbeskrivelser/Models/BegrunnelseUnnlatVarselType"},(0,r.kt)("strong",{parentName:"a"},"BegrunnelseUnnlatVarselType"))),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"[optional][default to null]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"tvangsgrunnlagType")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"[default to null]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"saerligtvangsgrunnlagtype")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"[optional][default to null]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"referanseSak")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"Vilk\xe5rlig lang sekvens av tegn inkludert aksenter og spesielle tegn fra standardiserte tegnsett (",(0,r.kt)("a",{parentName:"td",href:"https://data.skatteetaten.no/begrep/20b52af3-9fe1-11e5-a9f8-e4115b280940"},"Begrepsreferanse"),")"),(0,r.kt)("td",{parentName:"tr",align:null},"[optional][default to null]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"paalydendeBeloep")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Double")),(0,r.kt)("td",{parentName:"tr",align:null},"Bel\xf8pet skyldner erkjenner \xe5 skylde"),(0,r.kt)("td",{parentName:"tr",align:null},"[default to null]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"rentestol")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Double")),(0,r.kt)("td",{parentName:"tr",align:null},"tall som er satt sammen av en heltallsdel og en fraksjondel ","[wikipedia]"," (",(0,r.kt)("a",{parentName:"td",href:"https://data.skatteetaten.no/begrep/20b52aef-9fe1-11e5-a9f8-e4115b280940"},"Begrepsreferanse"),")"),(0,r.kt)("td",{parentName:"tr",align:null},"[optional][default to null]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"rentefot")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Double")),(0,r.kt)("td",{parentName:"tr",align:null},"tall som er satt sammen av en heltallsdel og en fraksjondel ","[wikipedia]"," (",(0,r.kt)("a",{parentName:"td",href:"https://data.skatteetaten.no/begrep/20b52aef-9fe1-11e5-a9f8-e4115b280940"},"Begrepsreferanse"),")"),(0,r.kt)("td",{parentName:"tr",align:null},"[optional][default to null]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"kreditor")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/beta-apier/utleggsbegjaering/feltbeskrivelser/Models/Identifikator"},(0,r.kt)("strong",{parentName:"a"},"Identifikator"))),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"[optional][default to null]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"skyldner")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/beta-apier/utleggsbegjaering/feltbeskrivelser/Models/Identifikator"},(0,r.kt)("strong",{parentName:"a"},"Identifikator"))),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"[default to null]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"skyldererklaering")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Boolean")),(0,r.kt)("td",{parentName:"tr",align:null},"Erkl\xe6ring om \xe5 skylde en gitt sum penger"),(0,r.kt)("td",{parentName:"tr",align:null},"[default to null]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"inndrivelsesklausul")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Boolean")),(0,r.kt)("td",{parentName:"tr",align:null},"Vedtakelse av at gjelden kan drives inn uten s\xf8ksm\xe5l."),(0,r.kt)("td",{parentName:"tr",align:null},"[default to null]")))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/beta-apier/utleggsbegjaering/feltbeskrivelser/"},"[Tilbake til modell liste]")))}o.isMDXComponent=!0}}]);