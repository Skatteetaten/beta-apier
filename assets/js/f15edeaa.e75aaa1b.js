"use strict";(self.webpackChunkbeta_apier=self.webpackChunkbeta_apier||[]).push([[147],{3905:(e,t,r)=>{r.d(t,{Zo:()=>g,kt:()=>d});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function k(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),s=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):k(k({},t),e)),r},g=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},o="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,g=p(e,["components","mdxType","originalType","parentName"]),o=s(r),m=n,d=o["".concat(i,".").concat(m)]||o[m]||u[m]||l;return r?a.createElement(d,k(k({ref:t},g),{},{components:r})):a.createElement(d,k({ref:t},g))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,k=new Array(l);k[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[o]="string"==typeof e?e:n,k[1]=p;for(var s=2;s<l;s++)k[s]=r[s];return a.createElement.apply(null,k)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6321:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>k,default:()=>o,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var a=r(7462),n=(r(7294),r(3905));const l={},k="API Spesifikasjon",p={unversionedId:"trekkpaalegg/apispesifikasjon/index",id:"trekkpaalegg/apispesifikasjon/index",title:"API Spesifikasjon",description:"Skatteetaten tilbyr API for \xe5 hente trekkp\xe5legg.",source:"@site/docs/trekkpaalegg/apispesifikasjon/index.md",sourceDirName:"trekkpaalegg/apispesifikasjon",slug:"/trekkpaalegg/apispesifikasjon/",permalink:"/beta-apier/trekkpaalegg/apispesifikasjon/",draft:!1,tags:[],version:"current",lastUpdatedAt:1736529230,formattedLastUpdatedAt:"10. jan. 2025",frontMatter:{},sidebar:"docs",previous:{title:"Trekkp\xe5legg",permalink:"/beta-apier/trekkpaalegg/"},next:{title:"Dokumentasjon for trekkp\xe5legg",permalink:"/beta-apier/trekkpaalegg/feltbeskrivelser/"}},i={},s=[{value:"Hent alle gjeldende",id:"hent-alle-gjeldende",level:3},{value:"Parametre",id:"parametre",level:3},{value:"Retur type",id:"retur-type",level:3},{value:"Autorisasjon",id:"autorisasjon",level:3},{value:"HTTP request headere",id:"http-request-headere",level:3},{value:"Hent versjon",id:"hent-versjon",level:3},{value:"Parametre",id:"parametre-1",level:3},{value:"Retur type",id:"retur-type-1",level:3},{value:"Autorisasjon",id:"autorisasjon-1",level:3},{value:"HTTP request headere",id:"http-request-headere-1",level:3}],g={toc:s};function o(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"api-spesifikasjon"},"API Spesifikasjon"),(0,n.kt)("p",null,"Skatteetaten tilbyr API for \xe5 hente trekkp\xe5legg."),(0,n.kt)("p",null,"Open API spesifikasjonen er tilgjengelig her :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://app.swaggerhub.com/apis/skatteetaten/trekkpaalegg-app"},"swaggerhub"))),(0,n.kt)("h1",{id:"trekkp\xe5legg-api"},"Trekkp\xe5legg API"),(0,n.kt)("p",null,"Alle URIer er relative til "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://api-test.sits.no"},"https://api-test.sits.no")," (test)"),(0,n.kt)("li",{parentName:"ul"},"---                      (prod)")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Metode"),(0,n.kt)("th",{parentName:"tr",align:null},"HTTP request"),(0,n.kt)("th",{parentName:"tr",align:null},"Beskrivelse"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#hentAlleGjeldende"},(0,n.kt)("strong",{parentName:"a"},"hent alle gjeldende"))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"GET")," /api/trekkpaalegg/v1"),(0,n.kt)("td",{parentName:"tr",align:null},"Hent alle gjeldende trekkp\xe5legg for den trekkpliktige")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#hentVersjon"},(0,n.kt)("strong",{parentName:"a"},"hent versjon"))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"GET")," /api/trekkpaalegg/v1/{trekkid}/{trekkversjon}"),(0,n.kt)("td",{parentName:"tr",align:null},"Hent en spesifikk versjon av et trekkp\xe5legg.")))),(0,n.kt)("a",{name:"hentAlleGjeldende"}),(0,n.kt)("h3",{id:"hent-alle-gjeldende"},"Hent alle gjeldende"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"}," ",(0,n.kt)("strong",{parentName:"p"},"GET")," /api/trekkpaalegg/v1")),(0,n.kt)("p",null,"Returnerer siste versjon av samtlige trekkp\xe5legg for en trekkpliktig. Dersom en trekkpliktig har sv\xe6rt mange trekkp\xe5legg (flere tusen) s\xe5 b\xf8r man benytte fraSekvensnummer og maksAntall for begrense returen til kun \xe5 inneholde trekkp\xe5legg som er endret siden forrige sp\xf8rring. Dersom antall returnerte trekkp\xe5legg er lik maksAntall s\xe5 m\xe5 det gj\xf8res en ny sp\xf8rring med fraSekvensnummer lik det st\xf8rste sekvensnummeret i siste retur inntil man har f\xe5tt returnert samtlige endrede trekkp\xe5legg."),(0,n.kt)("h3",{id:"parametre"},"Parametre"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Navn"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Beskrivelse"),(0,n.kt)("th",{parentName:"tr",align:null},"Notater"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"fraSekvensnummer")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"String")),(0,n.kt)("td",{parentName:"tr",align:null},"Begrenser returnerte trekkp\xe5legg til bare inneholde nyere enn angitt sekvensnummer. 0 eller st\xf8rre. Oppgis sammen med maksAntall. Mest relevant for trekkpliktige med sv\xe6rt mange trekkp\xe5legg"),(0,n.kt)("td",{parentName:"tr",align:null},"[default til null]")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"maksAntall")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"String")),(0,n.kt)("td",{parentName:"tr",align:null},"Angir maks antall trekkp\xe5legg som skal returneres. 1 eller st\xf8rre. Skal bare brukes sammen med fraSekvensnummer. Mest relevant for trekkpliktige med sv\xe6rt mange trekkp\xe5legg"),(0,n.kt)("td",{parentName:"tr",align:null},"[default til null]")))),(0,n.kt)("h3",{id:"retur-type"},"Retur type"),(0,n.kt)("p",null,"Liste av ",(0,n.kt)("a",{parentName:"p",href:"/beta-apier/trekkpaalegg/feltbeskrivelser/Models/Trekkpaalegg"},(0,n.kt)("strong",{parentName:"a"},"Trekkpaalegg"))),(0,n.kt)("h3",{id:"autorisasjon"},"Autorisasjon"),(0,n.kt)("p",null,"Se ",(0,n.kt)("a",{parentName:"p",href:"/beta-apier/trekkpaalegg/tilgang"},"Tilgang")),(0,n.kt)("h3",{id:"http-request-headere"},"HTTP request headere"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Content-Type"),": Ikke definert"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Accept"),": application/json, ","*","/","*")),(0,n.kt)("a",{name:"hentVersjon"}),(0,n.kt)("h3",{id:"hent-versjon"},"Hent versjon"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"GET")," /api/trekkpaalegg/v1/{trekkid}/{trekkversjon}")),(0,n.kt)("p",null,"Returnerer den angitte versjonen av et trekkp\xe5legg"),(0,n.kt)("h3",{id:"parametre-1"},"Parametre"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Navn"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Beskrivelse"),(0,n.kt)("th",{parentName:"tr",align:null},"Notater"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"trekkid")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"String")),(0,n.kt)("td",{parentName:"tr",align:null},"Id til trekkp\xe5legget"),(0,n.kt)("td",{parentName:"tr",align:null},"[default til null]")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"trekkversjon")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"String")),(0,n.kt)("td",{parentName:"tr",align:null},"Versjonen til det angitte trekkp\xe5legg"),(0,n.kt)("td",{parentName:"tr",align:null},"[default til null]")))),(0,n.kt)("h3",{id:"retur-type-1"},"Retur type"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/beta-apier/trekkpaalegg/feltbeskrivelser/Models/Trekkpaalegg"},(0,n.kt)("strong",{parentName:"a"},"Trekkpaalegg"))),(0,n.kt)("h3",{id:"autorisasjon-1"},"Autorisasjon"),(0,n.kt)("p",null,"Se ",(0,n.kt)("a",{parentName:"p",href:"/beta-apier/trekkpaalegg/tilgang"},"Tilgang")),(0,n.kt)("h3",{id:"http-request-headere-1"},"HTTP request headere"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Content-Type"),": Ikke definert"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Accept"),": application/json, ","*","/","*")))}o.isMDXComponent=!0}}]);