"use strict";(self.webpackChunkbeta_apier=self.webpackChunkbeta_apier||[]).push([[7663],{3905:(t,e,a)=>{a.d(e,{Zo:()=>o,kt:()=>u});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function g(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=r.createContext({}),s=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):g(g({},e),t)),a},o=function(t){var e=s(t.components);return r.createElement(p.Provider,{value:e},t.children)},d="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,p=t.parentName,o=i(t,["components","mdxType","originalType","parentName"]),d=s(a),m=n,u=d["".concat(p,".").concat(m)]||d[m]||k[m]||l;return a?r.createElement(u,g(g({ref:e},o),{},{components:a})):r.createElement(u,g({ref:e},o))}));function u(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,g=new Array(l);g[0]=m;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i[d]="string"==typeof t?t:n,g[1]=i;for(var s=2;s<l;s++)g[s]=a[s];return r.createElement.apply(null,g)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3883:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>g,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=a(7462),n=(a(7294),a(3905));const l={},g="Tilleggskrav",i={unversionedId:"utleggsbegjaering/feltbeskrivelser/Models/Tilleggskrav",id:"utleggsbegjaering/feltbeskrivelser/Models/Tilleggskrav",title:"Tilleggskrav",description:"Properties",source:"@site/docs/utleggsbegjaering/feltbeskrivelser/Models/Tilleggskrav.md",sourceDirName:"utleggsbegjaering/feltbeskrivelser/Models",slug:"/utleggsbegjaering/feltbeskrivelser/Models/Tilleggskrav",permalink:"/beta-apier/utleggsbegjaering/feltbeskrivelser/Models/Tilleggskrav",draft:!1,tags:[],version:"current",frontMatter:{}},p={},s=[{value:"Properties",id:"properties",level:2}],o={toc:s};function d(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},o,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"tilleggskrav"},"Tilleggskrav"),(0,n.kt)("h2",{id:"properties"},"Properties"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Navn"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Beskrivelse"),(0,n.kt)("th",{parentName:"tr",align:null},"Notater"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"kravtype")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"String")),(0,n.kt)("td",{parentName:"tr",align:null},"Discriminator"),(0,n.kt)("td",{parentName:"tr",align:null},"[optional][default to null]")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"transporterklaering")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/beta-apier/utleggsbegjaering/feltbeskrivelser/Models/Transporterklaering"},(0,n.kt)("strong",{parentName:"a"},"List[Transporterklaering]"))),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"[optional][default to null]")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"kravforfall")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/beta-apier/utleggsbegjaering/feltbeskrivelser/Models/Kravforfall"},(0,n.kt)("strong",{parentName:"a"},"Kravforfall"))),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"[default to null]")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"innbetaling")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/beta-apier/utleggsbegjaering/feltbeskrivelser/Models/Innbetaling"},(0,n.kt)("strong",{parentName:"a"},"List[Innbetaling]"))),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"[optional][default to null]")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"tvangsgrunnlag")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/beta-apier/utleggsbegjaering/feltbeskrivelser/Models/Tvangsgrunnlag"},(0,n.kt)("strong",{parentName:"a"},"Tvangsgrunnlag"))),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"[optional][default to null]")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"kravreferanse")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"String")),(0,n.kt)("td",{parentName:"tr",align:null},"Vilk\xe5rlig lang sekvens av tegn inkludert aksenter og spesielle tegn fra standardiserte tegnsett   (",(0,n.kt)("a",{parentName:"td",href:"https://data.skatteetaten.no/begrep/20b52af3-9fe1-11e5-a9f8-e4115b280940"},"Begrepsreferanse"),")"),(0,n.kt)("td",{parentName:"tr",align:null},"[optional][default to null]")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"kravbeskrivelse")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"String")),(0,n.kt)("td",{parentName:"tr",align:null},"Vilk\xe5rlig lang sekvens av tegn inkludert aksenter og spesielle tegn fra standardiserte tegnsett   (",(0,n.kt)("a",{parentName:"td",href:"https://data.skatteetaten.no/begrep/20b52af3-9fe1-11e5-a9f8-e4115b280940"},"Begrepsreferanse"),")"),(0,n.kt)("td",{parentName:"tr",align:null},"[optional][default to null]")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"tilleggsfristForeldelse")),(0,n.kt)("td",{parentName:"tr",align:null},"[",(0,n.kt)("strong",{parentName:"td"},"Lis","[TilleggsfristForeldelse]","]"),"](/beta-apier/utleggsbegjaering/feltbeskrivelser/Models/TilleggsfristForeldelse)"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"[optional][default to null]")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"opprettelsesdatoForKrav")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"date")),(0,n.kt)("td",{parentName:"tr",align:null},"Gir verdier for \xe5r, m\xe5ned og dag. Kodes som en tekststreng etter datoformatering spesifisert i  ISO 8601 (ISO 8601:2004 Data elements and interchange formats -- Information interchange -- Representation of dates and times). Eksempel : 1998-12-21 eller 19981221.   (",(0,n.kt)("a",{parentName:"td",href:"https://data.skatteetaten.no/begrep/20b52aed-9fe1-11e5-a9f8-e4115b280940"},"Begrepsreferanse"),")"),(0,n.kt)("td",{parentName:"tr",align:null},"[default to null]")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"opprinneligBeloep")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/beta-apier/utleggsbegjaering/feltbeskrivelser/Models/BeloepValuta"},(0,n.kt)("strong",{parentName:"a"},"BeloepValuta"))),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"[default to null]")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"gjenstaaendeBeloep")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/beta-apier/utleggsbegjaering/feltbeskrivelser/Models/BeloepValuta"},(0,n.kt)("strong",{parentName:"a"},"BeloepValuta"))),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"[default to null]")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"betalingsoppforing")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/beta-apier/utleggsbegjaering/feltbeskrivelser/Models/Betalingsoppfordring"},(0,n.kt)("strong",{parentName:"a"},"List[Betalingsoppfordring]"))),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"[optional][default to null]")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"mottakersKontonummer")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"String")),(0,n.kt)("td",{parentName:"tr",align:null},"(",(0,n.kt)("a",{parentName:"td",href:"https://data.skatteetaten.no/begrep/20b2e328-9fe1-11e5-a9f8-e4115b280940"},"Begrepsreferanse"),")"),(0,n.kt)("td",{parentName:"tr",align:null},"[optional][default to null]")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"sisteFristavbrytendeTiltak")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"String")),(0,n.kt)("td",{parentName:"tr",align:null},"Vilk\xe5rlig lang sekvens av tegn inkludert aksenter og spesielle tegn fra standardiserte tegnsett   (",(0,n.kt)("a",{parentName:"td",href:"https://data.skatteetaten.no/begrep/20b52af3-9fe1-11e5-a9f8-e4115b280940"},"Begrepsreferanse"),")"),(0,n.kt)("td",{parentName:"tr",align:null},"[optional][default to null]")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"domsslutningInformasjon")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/beta-apier/utleggsbegjaering/feltbeskrivelser/Models/DomsslutningInformasjon"},(0,n.kt)("strong",{parentName:"a"},"DomsslutningInformasjon"))),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"[optional][default to null]")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"forsinkelsesrente")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/beta-apier/utleggsbegjaering/feltbeskrivelser/Models/Forsinkelsesrente"},(0,n.kt)("strong",{parentName:"a"},"Forsinkelsesrente"))),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"[optional][default to null]")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"rentefot")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/beta-apier/utleggsbegjaering/feltbeskrivelser/Models/Rentefot"},(0,n.kt)("strong",{parentName:"a"},"Rentefot"))),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"[optional][default to null]")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"rettsgebyr")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/beta-apier/utleggsbegjaering/feltbeskrivelser/Models/Rettsgebyr"},(0,n.kt)("strong",{parentName:"a"},"Rettsgebyr"))),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"[optional][default to null]")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"begrunnelse")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"String")),(0,n.kt)("td",{parentName:"tr",align:null},"Vilk\xe5rlig lang sekvens av tegn inkludert aksenter og spesielle tegn fra standardiserte tegnsett   (",(0,n.kt)("a",{parentName:"td",href:"https://data.skatteetaten.no/begrep/20b52af3-9fe1-11e5-a9f8-e4115b280940"},"Begrepsreferanse"),")"),(0,n.kt)("td",{parentName:"tr",align:null},"[optional][default to null]")))),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/beta-apier/utleggsbegjaering/feltbeskrivelser/"},"[Tilbake til modell liste]")))}d.isMDXComponent=!0}}]);