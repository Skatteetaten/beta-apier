"use strict";(self.webpackChunkbeta_apier=self.webpackChunkbeta_apier||[]).push([[5147],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>m});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function k(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var i=r.createContext({}),g=function(t){var e=r.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},d=function(t){var e=g(t.components);return r.createElement(i.Provider,{value:e},t.children)},o="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,i=t.parentName,d=k(t,["components","mdxType","originalType","parentName"]),o=g(a),u=n,m=o["".concat(i,".").concat(u)]||o[u]||s[u]||l;return a?r.createElement(m,p(p({ref:e},d),{},{components:a})):r.createElement(m,p({ref:e},d))}));function m(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,p=new Array(l);p[0]=u;var k={};for(var i in e)hasOwnProperty.call(e,i)&&(k[i]=e[i]);k.originalType=t,k[o]="string"==typeof t?t:n,p[1]=k;for(var g=2;g<l;g++)p[g]=a[g];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},6321:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>i,contentTitle:()=>p,default:()=>o,frontMatter:()=>l,metadata:()=>k,toc:()=>g});var r=a(7462),n=(a(7294),a(3905));const l={},p="API Spesifikasjon",k={unversionedId:"trekkpaalegg/apispesifikasjon/index",id:"trekkpaalegg/apispesifikasjon/index",title:"API Spesifikasjon",description:"Skatteetaten tilbyr API for \xe5 hente trekkp\xe5legg.",source:"@site/docs/trekkpaalegg/apispesifikasjon/index.md",sourceDirName:"trekkpaalegg/apispesifikasjon",slug:"/trekkpaalegg/apispesifikasjon/",permalink:"/beta-apier/trekkpaalegg/apispesifikasjon/",draft:!1,tags:[],version:"current",lastUpdatedAt:1727087785,formattedLastUpdatedAt:"23. sep. 2024",frontMatter:{},sidebar:"docs",previous:{title:"Trekkp\xe5legg",permalink:"/beta-apier/trekkpaalegg/"},next:{title:"Dokumentasjon for trekkp\xe5legg",permalink:"/beta-apier/trekkpaalegg/feltbeskrivelser/"}},i={},g=[{value:"Parametre",id:"parametre",level:3},{value:"Retur type",id:"retur-type",level:3},{value:"Autorisasjon",id:"autorisasjon",level:3},{value:"HTTP request headere",id:"http-request-headere",level:3},{value:"Parametre",id:"parametre-1",level:3},{value:"Retur type",id:"retur-type-1",level:3},{value:"Autorisasjon",id:"autorisasjon-1",level:3},{value:"HTTP request headere",id:"http-request-headere-1",level:3}],d={toc:g};function o(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"api-spesifikasjon"},"API Spesifikasjon"),(0,n.kt)("p",null,"Skatteetaten tilbyr API for \xe5 hente trekkp\xe5legg."),(0,n.kt)("p",null,"Open API spesifikasjonen er tilgjengelig her :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://app.swaggerhub.com/apis/skatteetaten/trekkpaalegg-app"},"swaggerhub"))),(0,n.kt)("h1",{id:"trekkp\xe5legg-api"},"Trekkp\xe5legg API"),(0,n.kt)("p",null,"Alle URIer er relative til ",(0,n.kt)("em",{parentName:"p"},"http://localhost:8080")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Metode"),(0,n.kt)("th",{parentName:"tr",align:null},"HTTP request"),(0,n.kt)("th",{parentName:"tr",align:null},"Beskrivelse"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#hentAlleGjeldende"},(0,n.kt)("strong",{parentName:"a"},"hent alle gjeldende"))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"GET")," /external/v1/trekkpaalegg/{trekkpliktig}"),(0,n.kt)("td",{parentName:"tr",align:null},"Hent alle gjeldende trekkp\xe5legg for den trekkpliktige")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#hentVersjon"},(0,n.kt)("strong",{parentName:"a"},"hent versjon"))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"GET")," /external/v1/trekkpaalegg/{trekkpliktig}/{trekkid}/{trekkversjon}"),(0,n.kt)("td",{parentName:"tr",align:null},"Hent en spesifikk versjon av et trekkp\xe5legg.")))),(0,n.kt)("a",{name:"hentAlleGjeldende"}),(0,n.kt)("h1",{id:"hent-alle-gjeldende"},(0,n.kt)("strong",{parentName:"h1"},"Hent alle gjeldende")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"}," ",(0,n.kt)("strong",{parentName:"p"},"GET")," /external/v1/trekkpaalegg/{trekkpliktig}")),(0,n.kt)("p",null,"Henter alle gjeldende trekkp\xe5legg for den trekkpliktige. "),(0,n.kt)("h3",{id:"parametre"},"Parametre"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Navn"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Beskrivelse"),(0,n.kt)("th",{parentName:"tr",align:null},"Notater"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"trekkpliktig")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"String")),(0,n.kt)("td",{parentName:"tr",align:null},"Orgnummeret til den trekkpliktige arbeidsgiver/ytelsesutbetaler"),(0,n.kt)("td",{parentName:"tr",align:null},"[default til null]")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"fraSekvensnummer")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"String")),(0,n.kt)("td",{parentName:"tr",align:null},"QueryParam. Angir at man kun \xf8nsker trekkp\xe5legg som er oppdateret etter forrige uthenting. Mest relevant for arbeidgivere med sv\xe6rt mange trekkp\xe5legg"),(0,n.kt)("td",{parentName:"tr",align:null},"[default til null]")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"KlientId")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"String")),(0,n.kt)("td",{parentName:"tr",align:null},"Klientens unike id"),(0,n.kt)("td",{parentName:"tr",align:null},"[default til null]")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Korrelasjonsid")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"String")),(0,n.kt)("td",{parentName:"tr",align:null},"Id for \xe5 spore kall p\xe5 tvers av systemer"),(0,n.kt)("td",{parentName:"tr",align:null},"[default til null]")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Meldingsid")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"String")),(0,n.kt)("td",{parentName:"tr",align:null},"Meldingsid mellom systemer"),(0,n.kt)("td",{parentName:"tr",align:null},"[default til null]")))),(0,n.kt)("h3",{id:"retur-type"},"Retur type"),(0,n.kt)("p",null,"Liste av ",(0,n.kt)("a",{parentName:"p",href:"/beta-apier/trekkpaalegg/feltbeskrivelser/Models/Trekkpaalegg"},(0,n.kt)("strong",{parentName:"a"},"Trekkpaalegg"))),(0,n.kt)("h3",{id:"autorisasjon"},"Autorisasjon"),(0,n.kt)("p",null,"Se ",(0,n.kt)("a",{parentName:"p",href:"/beta-apier/trekkpaalegg/tilgang"},"Tilgang")),(0,n.kt)("h3",{id:"http-request-headere"},"HTTP request headere"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Content-Type"),": Ikke definert"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Accept"),": application/json, ","*","/","*")),(0,n.kt)("a",{name:"hentVersjon"}),(0,n.kt)("h1",{id:"hent-versjon"},(0,n.kt)("strong",{parentName:"h1"},"Hent versjon")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"GET")," /external/v1/trekkpaalegg/{trekkpliktig}/{trekkid}/{trekkversjon}")),(0,n.kt)("p",null,"Henter angitt versjon av et trekkp\xe5legg for den trekkpliktige."),(0,n.kt)("h3",{id:"parametre-1"},"Parametre"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Navn"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Beskrivelse"),(0,n.kt)("th",{parentName:"tr",align:null},"Notater"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"trekkpliktig")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"String")),(0,n.kt)("td",{parentName:"tr",align:null},"Org-/fnr til den trekkpliktige arbeidsgiver/ytelsesutbetaler"),(0,n.kt)("td",{parentName:"tr",align:null},"[default til null]")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"trekkid")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"String")),(0,n.kt)("td",{parentName:"tr",align:null},"Id til trekkp\xe5legget"),(0,n.kt)("td",{parentName:"tr",align:null},"[default til null]")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"trekkversjon")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"String")),(0,n.kt)("td",{parentName:"tr",align:null},"Versjonen til det angitte trekkp\xe5legg"),(0,n.kt)("td",{parentName:"tr",align:null},"[default til null]")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"KlientId")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"String")),(0,n.kt)("td",{parentName:"tr",align:null},"Klientens unike id"),(0,n.kt)("td",{parentName:"tr",align:null},"[default til null]")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Korrelasjonsid")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"String")),(0,n.kt)("td",{parentName:"tr",align:null},"Id for \xe5 spore kall p\xe5 tvers av systemer"),(0,n.kt)("td",{parentName:"tr",align:null},"[default til null]")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Meldingsid")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"String")),(0,n.kt)("td",{parentName:"tr",align:null},"Meldingsid mellom systemer"),(0,n.kt)("td",{parentName:"tr",align:null},"[default til null]")))),(0,n.kt)("h3",{id:"retur-type-1"},"Retur type"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/beta-apier/trekkpaalegg/feltbeskrivelser/Models/Trekkpaalegg"},(0,n.kt)("strong",{parentName:"a"},"Trekkpaalegg"))),(0,n.kt)("h3",{id:"autorisasjon-1"},"Autorisasjon"),(0,n.kt)("p",null,"Se ",(0,n.kt)("a",{parentName:"p",href:"/beta-apier/trekkpaalegg/tilgang"},"Tilgang")),(0,n.kt)("h3",{id:"http-request-headere-1"},"HTTP request headere"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Content-Type"),": Ikke definert"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Accept"),": application/json, ","*","/","*")))}o.isMDXComponent=!0}}]);