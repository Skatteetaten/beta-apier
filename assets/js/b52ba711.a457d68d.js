"use strict";(self.webpackChunkbeta_apier=self.webpackChunkbeta_apier||[]).push([[1234],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),g=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=g(e.components);return r.createElement(o.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=g(n),m=a,k=d["".concat(o,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(k,l(l({ref:t},p),{},{components:n})):r.createElement(k,l({ref:t},p))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[d]="string"==typeof e?e:a,l[1]=s;for(var g=2;g<i;g++)l[g]=n[g];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5083:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>g});var r=n(7462),a=(n(7294),n(3905));const i={},l="Testing",s={unversionedId:"utleggsbegjaering/testing",id:"utleggsbegjaering/testing",title:"Testing",description:"Krav til testgjennomf\xf8ring",source:"@site/docs/utleggsbegjaering/testing.md",sourceDirName:"utleggsbegjaering",slug:"/utleggsbegjaering/testing",permalink:"/beta-apier/utleggsbegjaering/testing",draft:!1,tags:[],version:"current",lastUpdatedAt:1730903313,formattedLastUpdatedAt:"6. nov. 2024",frontMatter:{},sidebar:"docs",previous:{title:"Skisser",permalink:"/beta-apier/utleggsbegjaering/skisser"},next:{title:"Endringslogg",permalink:"/beta-apier/utleggsbegjaering/endringslogg"}},o={},g=[{value:"Krav til testgjennomf\xf8ring",id:"krav-til-testgjennomf\xf8ring",level:2},{value:"Testmilj\xf8 og testdata",id:"testmilj\xf8-og-testdata",level:2},{value:"Testplan",id:"testplan",level:2}],p={toc:g};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"testing"},"Testing"),(0,a.kt)("h2",{id:"krav-til-testgjennomf\xf8ring"},"Krav til testgjennomf\xf8ring"),(0,a.kt)("p",null,"Systemleverand\xf8rene har ansvar for egen testgjennomf\xf8ring. Det m\xe5 fokuseres p\xe5 at validerings- og innsendingstjenestene\nfungerer som forventet.\nProsjektet bist\xe5r med feils\xf8k, evt. Feilretting og ved behov oppf\xf8lging av saker som er sendt inn i testmilj\xf8et."),(0,a.kt)("h2",{id:"testmilj\xf8-og-testdata"},"Testmilj\xf8 og testdata"),(0,a.kt)("p",null,"Systemleverand\xf8rene m\xe5 ha testmilj\xf8er som kun best\xe5r av syntetiske data\nDet skal brukes testdata fra \u2018Syntetisk Norge\u2019 og disse hentes ut med Tenor Testdatas\xf8k i de meldingene som sendes inn.\nVedlegg skal ogs\xe5 kun inneholde syntetiske testdata.\nHer finnes en bruksveiledning for Tenor Testdatas\xf8k.\nOppkobling mot testmilj\xf8et i Skatteetaten skjer via ",(0,a.kt)("a",{parentName:"p",href:"/beta-apier/utleggsbegjaering/tilgang"},"Maskinporten"),"."),(0,a.kt)("p",null,"Eksempel p\xe5 en utleggsbegj\xe6ring som f\xf8lger informasjonsmodellen er gitt p\xe5 ",(0,a.kt)("a",{parentName:"p",href:"/beta-apier/utleggsbegjaering/informasjonsmodeller"},"Informasjonsmodeller"),"."),(0,a.kt)("p",null,"Testmilj\xf8et til Skatteetaten vil i utgangspunktet v\xe6re tilgjengelig 24/7, men det kan ikke forventes teknisk support\neller restart av milj\xf8et hvis det g\xe5r ned utenfor ordin\xe6r arbeidstid (kl. 8 \u2013 15:45 alle ukedager). Milj\xf8 kan ogs\xe5 v\xe6re\nnede p\xe5 kveldstid og i helger p\xe5 grunn av vedlikehold."),(0,a.kt)("p",null,"URL til testmilj\xf8et er\n",(0,a.kt)("inlineCode",{parentName:"p"},"   https://api-test.sits.no/api/utleggsbegjaering/v0")),(0,a.kt)("h2",{id:"testplan"},"Testplan"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null}),(0,a.kt)("th",{parentName:"tr",align:null},"Forventet oppstart"),(0,a.kt)("th",{parentName:"tr",align:null},"Innhold"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Test 1"),(0,a.kt)("td",{parentName:"tr",align:null},"I l\xf8pet av oktober 2024"),(0,a.kt)("td",{parentName:"tr",align:null},"Innsending med tilbakemelding om at melding er mottatt (201 med saksref eller 4xx) ",(0,a.kt)("br",null),"Tilgang til valideringstjenesten f\xf8r innsending (logisk kontroll og format)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Test 2"),(0,a.kt)("td",{parentName:"tr",align:null},"Desember 2024"),(0,a.kt)("td",{parentName:"tr",align:null},"Hent status p\xe5 sak")))))}d.isMDXComponent=!0}}]);