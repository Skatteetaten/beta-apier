"use strict";(self.webpackChunkbeta_apier=self.webpackChunkbeta_apier||[]).push([[9604],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function g(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),d=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):g(g({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},o=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=d(a),o=r,m=s["".concat(p,".").concat(o)]||s[o]||k[o]||l;return a?n.createElement(m,g(g({ref:t},u),{},{components:a})):n.createElement(m,g({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,g=new Array(l);g[0]=o;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[s]="string"==typeof e?e:r,g[1]=i;for(var d=2;d<l;d++)g[d]=a[d];return n.createElement.apply(null,g)}return n.createElement.apply(null,a)}o.displayName="MDXCreateElement"},3014:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>g,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const l={},g="Endepunkter",i={unversionedId:"utleggsbegjaering/endepunkter/index",id:"utleggsbegjaering/endepunkter/index",title:"Endepunkter",description:"Skatteetaten tilbyr muligheten for \xe5 sende inn en utleggsbegj\xe6ring ved bruk av JSON.",source:"@site/docs/utleggsbegjaering/endepunkter/index.md",sourceDirName:"utleggsbegjaering/endepunkter",slug:"/utleggsbegjaering/endepunkter/",permalink:"/beta-apier/utleggsbegjaering/endepunkter/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Utleggsbegj\xe6ring og pr\xf8ving",permalink:"/beta-apier/utleggsbegjaering/"},next:{title:"Dokumentasjon for Utleggsbegj\xe6ring",permalink:"/beta-apier/utleggsbegjaering/feltbeskrivelser/"}},p={},d=[{value:"Parametre",id:"parametre",level:3},{value:"Retur type",id:"retur-type",level:3},{value:"Autorisasjon",id:"autorisasjon",level:3},{value:"HTTP request headers",id:"http-request-headers",level:3},{value:"Parametre",id:"parametre-1",level:3},{value:"Retur type",id:"retur-type-1",level:3},{value:"Autorisasjon",id:"autorisasjon-1",level:3},{value:"HTTP request headers",id:"http-request-headers-1",level:3},{value:"Parametre",id:"parametre-2",level:3},{value:"Retur type",id:"retur-type-2",level:3},{value:"Autorisasjon",id:"autorisasjon-2",level:3},{value:"HTTP request headers",id:"http-request-headers-2",level:3},{value:"Parametre",id:"parametre-3",level:3},{value:"Retur type",id:"retur-type-3",level:3},{value:"Autorisasjon",id:"autorisasjon-3",level:3},{value:"HTTP request headers",id:"http-request-headers-3",level:3}],u={toc:d};function s(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"endepunkter"},"Endepunkter"),(0,r.kt)("p",null,"Skatteetaten tilbyr muligheten for \xe5 sende inn en utleggsbegj\xe6ring ved bruk av JSON."),(0,r.kt)("p",null,"Open API spesifikasjonen for utleggsbegj\xe6ring og pr\xf8ving er tilgjengelig her :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{target:"_blank",href:a(7662).Z},"JSON-schema"))),(0,r.kt)("h1",{id:"mottakapi"},"MottakApi"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Method"),(0,r.kt)("th",{parentName:"tr",align:null},"HTTP request"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#endreBegjaering"},(0,r.kt)("strong",{parentName:"a"},"endreBegjaering"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"PUT")," /external/v0/utleggsbegjaering/{eksternSaksreferanse}"),(0,r.kt)("td",{parentName:"tr",align:null},"Endre allerede innsendt utleggsbegj\xe6ring")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#opprettBegjaering"},(0,r.kt)("strong",{parentName:"a"},"opprettBegjaering"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"POST")," /external/v0/utleggsbegjaering"),(0,r.kt)("td",{parentName:"tr",align:null},"Oppretter utleggsbegj\xe6ring")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#validerEndretBegjaering"},(0,r.kt)("strong",{parentName:"a"},"validerEndretBegjaering"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"PUT")," /external/v0/utleggsbegjaering/valider/{eksternSaksreferanse}"),(0,r.kt)("td",{parentName:"tr",align:null},"Validerer endret utleggsbegj\xe6ring")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#validerNyBegjaering"},(0,r.kt)("strong",{parentName:"a"},"validerNyBegjaering"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"POST")," /external/v0/utleggsbegjaering/valider"),(0,r.kt)("td",{parentName:"tr",align:null},"Validerer ny utleggsbegj\xe6ring")))),(0,r.kt)("a",{name:"endreBegjaering"}),(0,r.kt)("h1",{id:"endrebegjaering"},(0,r.kt)("strong",{parentName:"h1"},"endreBegjaering")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"endreBegjaering(eksternSaksreferanse, Klientid, Korrelasjonsid, Meldingsid, Utleggsbegjaering)")),(0,r.kt)("p",null,"Endre allerede innsendt utleggsbegj\xe6ring"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Validerer endring av utleggsbegj\xe6ring og oppretter ny versjon om dette er ok\n")),(0,r.kt)("h3",{id:"parametre"},"Parametre"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"eksternSaksreferanse")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"[default to null]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Klientid")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"Klientens unike id"),(0,r.kt)("td",{parentName:"tr",align:null},"[default to null]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Korrelasjonsid")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"Id for \xe5 spore kall p\xe5 tvers av systemer"),(0,r.kt)("td",{parentName:"tr",align:null},"[default to null]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Meldingsid")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"Meldingsid mellom systemer"),(0,r.kt)("td",{parentName:"tr",align:null},"[default to null]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Utleggsbegjaering")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/beta-apier/utleggsbegjaering/feltbeskrivelser/Models/Utleggsbegjaering"},(0,r.kt)("strong",{parentName:"a"},"Utleggsbegjaering"))),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"retur-type"},"Retur type"),(0,r.kt)("p",null,"null (empty response body)"),(0,r.kt)("h3",{id:"autorisasjon"},"Autorisasjon"),(0,r.kt)("p",null,"Se ",(0,r.kt)("a",{parentName:"p",href:"/beta-apier/utleggsbegjaering/tilgang"},"Tilgang")),(0,r.kt)("h3",{id:"http-request-headers"},"HTTP request headers"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Content-Type"),": application/json"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Accept"),": application/json, ","*","/","*")),(0,r.kt)("a",{name:"opprettBegjaering"}),(0,r.kt)("h1",{id:"opprettbegjaering"},(0,r.kt)("strong",{parentName:"h1"},"opprettBegjaering")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"SendInnUtleggsbegjaeringResponse opprettBegjaering(KlientId, Korrelasjonsid, Meldingsid, Utleggsbegjaering)")),(0,r.kt)("p",null,"Oppretter utleggsbegj\xe6ring"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Validerer og oppretter ny utleggsbegj\xe6ring i databasen. Returnerer identifikator til utleggsbegj\xe6ringen\n")),(0,r.kt)("h3",{id:"parametre-1"},"Parametre"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Navn"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Beskrivelse"),(0,r.kt)("th",{parentName:"tr",align:null},"Notater"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"KlientId")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"Klientens unike id"),(0,r.kt)("td",{parentName:"tr",align:null},"[default to null]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Korrelasjonsid")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"Id for \xe5 spore kall p\xe5 tvers av systemer"),(0,r.kt)("td",{parentName:"tr",align:null},"[default to null]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Meldingsid")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"Meldingsid mellom systemer"),(0,r.kt)("td",{parentName:"tr",align:null},"[default to null]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Utleggsbegjaering")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/beta-apier/utleggsbegjaering/feltbeskrivelser/Models/Utleggsbegjaering"},(0,r.kt)("strong",{parentName:"a"},"Utleggsbegjaering"))),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"retur-type-1"},"Retur type"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/beta-apier/utleggsbegjaering/feltbeskrivelser/Models/SendInnUtleggsbegjaeringResponse"},(0,r.kt)("strong",{parentName:"a"},"SendInnUtleggsbegjaeringResponse"))),(0,r.kt)("h3",{id:"autorisasjon-1"},"Autorisasjon"),(0,r.kt)("p",null,"Se ",(0,r.kt)("a",{parentName:"p",href:"/beta-apier/utleggsbegjaering/tilgang"},"Tilgang")),(0,r.kt)("h3",{id:"http-request-headers-1"},"HTTP request headers"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Content-Type"),": application/json"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Accept"),": application/json, ","*","/","*")),(0,r.kt)("a",{name:"validerEndretBegjaering"}),(0,r.kt)("h1",{id:"validerendretbegjaering"},(0,r.kt)("strong",{parentName:"h1"},"validerEndretBegjaering")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"validerEndretBegjaering(eksternSaksreferanse, Klientid, Korrelasjonsid, Meldingsid, Utleggsbegjaering)")),(0,r.kt)("p",null,"Validerer endret utleggsbegj\xe6ring"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Validerer endret utleggsbegj\xe6ring, uten \xe5 lagre noe.\n")),(0,r.kt)("h3",{id:"parametre-2"},"Parametre"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Navn"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Beskrivelse"),(0,r.kt)("th",{parentName:"tr",align:null},"Notater"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"eksternSaksreferanse")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"[default to null]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Klientid")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"Klientens unike id"),(0,r.kt)("td",{parentName:"tr",align:null},"[default to null]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Korrelasjonsid")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"Id for \xe5 spore kall p\xe5 tvers av systemer"),(0,r.kt)("td",{parentName:"tr",align:null},"[default to null]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Meldingsid")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"Meldingsid mellom systemer"),(0,r.kt)("td",{parentName:"tr",align:null},"[default to null]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Utleggsbegjaering")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/beta-apier/utleggsbegjaering/feltbeskrivelser/Models/Utleggsbegjaering"},(0,r.kt)("strong",{parentName:"a"},"Utleggsbegjaering"))),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"retur-type-2"},"Retur type"),(0,r.kt)("p",null,"null (empty response body)"),(0,r.kt)("h3",{id:"autorisasjon-2"},"Autorisasjon"),(0,r.kt)("p",null,"Se ",(0,r.kt)("a",{parentName:"p",href:"/beta-apier/utleggsbegjaering/tilgang"},"Tilgang")),(0,r.kt)("h3",{id:"http-request-headers-2"},"HTTP request headers"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Content-Type"),": application/json"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Accept"),": application/json, ","*","/","*")),(0,r.kt)("a",{name:"validerNyBegjaering"}),(0,r.kt)("h1",{id:"validernybegjaering"},(0,r.kt)("strong",{parentName:"h1"},"validerNyBegjaering")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"validerNyBegjaering(Klientid, Korrelasjonsid, Meldingsid, Utleggsbegjaering)")),(0,r.kt)("p",null,"Validerer ny utleggsbegj\xe6ring"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Validerer ny utleggsbegj\xe6ring, uten \xe5 lagre noe.\n")),(0,r.kt)("h3",{id:"parametre-3"},"Parametre"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Navn"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Beskrivelse"),(0,r.kt)("th",{parentName:"tr",align:null},"Notater"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Klientid")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"Klientens unike id"),(0,r.kt)("td",{parentName:"tr",align:null},"[default to null]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Korrelasjonsid")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"Id for \xe5 spore kall p\xe5 tvers av systemer"),(0,r.kt)("td",{parentName:"tr",align:null},"[default to null]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Meldingsid")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"Meldingsid mellom systemer"),(0,r.kt)("td",{parentName:"tr",align:null},"[default to null]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Utleggsbegjaering")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/beta-apier/utleggsbegjaering/feltbeskrivelser/Models/Utleggsbegjaering"},(0,r.kt)("strong",{parentName:"a"},"Utleggsbegjaering"))),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"retur-type-3"},"Retur type"),(0,r.kt)("p",null,"null (empty response body)"),(0,r.kt)("h3",{id:"autorisasjon-3"},"Autorisasjon"),(0,r.kt)("p",null,"Se ",(0,r.kt)("a",{parentName:"p",href:"/beta-apier/utleggsbegjaering/tilgang"},"Tilgang")),(0,r.kt)("h3",{id:"http-request-headers-3"},"HTTP request headers"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Content-Type"),": application/json"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Accept"),": application/json, ","*","/","*")))}s.isMDXComponent=!0},7662:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/files/utleggsbegjaering-openapi-v1-e603e9046e5964ba8c1ad53750dbf99a.json"}}]);