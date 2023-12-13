"use strict";(self.webpackChunkbeta_apier=self.webpackChunkbeta_apier||[]).push([[3905],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>m});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function g(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),i=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):g(g({},e),t)),a},s=function(t){var e=i(t.components);return n.createElement(d.Provider,{value:e},t.children)},o="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,s=p(t,["components","mdxType","originalType","parentName"]),o=i(a),u=r,m=o["".concat(d,".").concat(u)]||o[u]||k[u]||l;return a?n.createElement(m,g(g({ref:e},s),{},{components:a})):n.createElement(m,g({ref:e},s))}));function m(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,g=new Array(l);g[0]=u;var p={};for(var d in e)hasOwnProperty.call(e,d)&&(p[d]=e[d]);p.originalType=t,p[o]="string"==typeof t?t:r,g[1]=p;for(var i=2;i<l;i++)g[i]=a[i];return n.createElement.apply(null,g)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},9772:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>g,default:()=>o,frontMatter:()=>l,metadata:()=>p,toc:()=>i});var n=a(7462),r=(a(7294),a(3905));const l={},g="Gjeldsbrev",p={unversionedId:"utleggsbegjaering/feltbeskrivelser/Models/Gjeldsbrev",id:"utleggsbegjaering/feltbeskrivelser/Models/Gjeldsbrev",title:"Gjeldsbrev",description:"Properties",source:"@site/docs/utleggsbegjaering/feltbeskrivelser/Models/Gjeldsbrev.md",sourceDirName:"utleggsbegjaering/feltbeskrivelser/Models",slug:"/utleggsbegjaering/feltbeskrivelser/Models/Gjeldsbrev",permalink:"/beta-apier/utleggsbegjaering/feltbeskrivelser/Models/Gjeldsbrev",draft:!1,tags:[],version:"current",frontMatter:{}},d={},i=[{value:"Properties",id:"properties",level:2}],s={toc:i};function o(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"gjeldsbrev"},"Gjeldsbrev"),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Navn"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Beskrivelse"),(0,r.kt)("th",{parentName:"tr",align:null},"Notater"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"eksterntSaksnummer")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"Referanse til underlaget for tvangsgrunnlaget"),(0,r.kt)("td",{parentName:"tr",align:null},"[optional][default to null]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"tvangsgrunnlag")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/beta-apier/utleggsbegjaering/feltbeskrivelser/Models/Vedlegg"},(0,r.kt)("strong",{parentName:"a"},"Vedlegg"))),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"[optional][default to null]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"dato")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"date")),(0,r.kt)("td",{parentName:"tr",align:null},"Gir verdier for \xe5r, m\xe5ned og dag. Kodes som en tekststreng etter datoformatering spesifisert i  ISO 8601 (ISO 8601:2004 Data elements and interchange formats -- Information interchange -- Representation of dates and times). Eksempel : 1998-12-21 eller 19981221. (",(0,r.kt)("a",{parentName:"td",href:"https://data.skatteetaten.no/begrep/20b52aed-9fe1-11e5-a9f8-e4115b280940"},"Begrepsreferanse"),")"),(0,r.kt)("td",{parentName:"tr",align:null},"[default to null]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"varsel")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/beta-apier/utleggsbegjaering/feltbeskrivelser/Models/Tvangskraftgrunnlag"},(0,r.kt)("strong",{parentName:"a"},"Tvangskraftgrunnlag"))),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"[optional][default to null]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"betegnelseAvTvangsgrunnlag")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"Vilk\xe5rlig lang sekvens av tegn inkludert aksenter og spesielle tegn fra standardiserte tegnsett (",(0,r.kt)("a",{parentName:"td",href:"https://data.skatteetaten.no/begrep/20b52af3-9fe1-11e5-a9f8-e4115b280940"},"Begrepsreferanse"),")"),(0,r.kt)("td",{parentName:"tr",align:null},"[default to null]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"begjaeringOmFritakFraVarsling")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"Vilk\xe5rlig lang sekvens av tegn inkludert aksenter og spesielle tegn fra standardiserte tegnsett (",(0,r.kt)("a",{parentName:"td",href:"https://data.skatteetaten.no/begrep/20b52af3-9fe1-11e5-a9f8-e4115b280940"},"Begrepsreferanse"),")"),(0,r.kt)("td",{parentName:"tr",align:null},"[optional][default to null]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"begrunnelseUnnlatVarsel")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/beta-apier/utleggsbegjaering/feltbeskrivelser/Models/BegrunnelseUnnlatVarselType"},(0,r.kt)("strong",{parentName:"a"},"BegrunnelseUnnlatVarselType"))),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"[optional][default to null]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"tvangsgrunnlagType")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"[default to null]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"saerligtvangsgrunnlagtype")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"[optional][default to null]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"referanseSak")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"Vilk\xe5rlig lang sekvens av tegn inkludert aksenter og spesielle tegn fra standardiserte tegnsett (",(0,r.kt)("a",{parentName:"td",href:"https://data.skatteetaten.no/begrep/20b52af3-9fe1-11e5-a9f8-e4115b280940"},"Begrepsreferanse"),")"),(0,r.kt)("td",{parentName:"tr",align:null},"[optional][default to null]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"paalydendeBeloep")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Double")),(0,r.kt)("td",{parentName:"tr",align:null},"Bel\xf8pet skyldner erkjenner \xe5 skylde"),(0,r.kt)("td",{parentName:"tr",align:null},"[default to null]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"rentestol")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Double")),(0,r.kt)("td",{parentName:"tr",align:null},"tall som er satt sammen av en heltallsdel og en fraksjondel ","[wikipedia]"," (",(0,r.kt)("a",{parentName:"td",href:"https://data.skatteetaten.no/begrep/20b52aef-9fe1-11e5-a9f8-e4115b280940"},"Begrepsreferanse"),")"),(0,r.kt)("td",{parentName:"tr",align:null},"[optional][default to null]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"rentefot")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Double")),(0,r.kt)("td",{parentName:"tr",align:null},"tall som er satt sammen av en heltallsdel og en fraksjondel ","[wikipedia]"," (",(0,r.kt)("a",{parentName:"td",href:"https://data.skatteetaten.no/begrep/20b52aef-9fe1-11e5-a9f8-e4115b280940"},"Begrepsreferanse"),")"),(0,r.kt)("td",{parentName:"tr",align:null},"[optional][default to null]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"kreditor")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/beta-apier/utleggsbegjaering/feltbeskrivelser/Models/Identifikator"},(0,r.kt)("strong",{parentName:"a"},"Identifikator"))),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"[optional][default to null]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"skyldner")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/beta-apier/utleggsbegjaering/feltbeskrivelser/Models/Identifikator"},(0,r.kt)("strong",{parentName:"a"},"Identifikator"))),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"[default to null]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"skylderklaering")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Boolean")),(0,r.kt)("td",{parentName:"tr",align:null},"Erkl\xe6ring om \xe5 skylde en gitt sum penger"),(0,r.kt)("td",{parentName:"tr",align:null},"[default to null]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"inndrivelsesklausul")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Boolean")),(0,r.kt)("td",{parentName:"tr",align:null},"Vedtakelse av at gjelden kan drives inn uten s\xf8ksm\xe5l."),(0,r.kt)("td",{parentName:"tr",align:null},"[default to null]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"vitne")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/beta-apier/utleggsbegjaering/feltbeskrivelser/Models/Identifikator"},(0,r.kt)("strong",{parentName:"a"},"List"))),(0,r.kt)("td",{parentName:"tr",align:null},"For en del gjeldsbrev er det krav om vitnep\xe5tegninger for at de skal v\xe6re gyldige. I s\xe5 fall er kravet to myndige vitner."),(0,r.kt)("td",{parentName:"tr",align:null},"[optional][default to null]")))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/beta-apier/utleggsbegjaering/feltbeskrivelser/"},"[Tilbake til modell liste]")))}o.isMDXComponent=!0}}]);