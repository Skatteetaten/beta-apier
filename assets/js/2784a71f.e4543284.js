"use strict";(self.webpackChunkbeta_apier=self.webpackChunkbeta_apier||[]).push([[1903],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var o=n.createContext({}),k=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=k(e.components);return n.createElement(o.Provider,{value:t},e.children)},g="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,s=e.originalType,o=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),g=k(r),p=i,d=g["".concat(o,".").concat(p)]||g[p]||m[p]||s;return r?n.createElement(d,l(l({ref:t},u),{},{components:r})):n.createElement(d,l({ref:t},u))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=r.length,l=new Array(s);l[0]=p;var a={};for(var o in t)hasOwnProperty.call(t,o)&&(a[o]=t[o]);a.originalType=e,a[g]="string"==typeof e?e:i,l[1]=a;for(var k=2;k<s;k++)l[k]=r[k];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},195:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>g,frontMatter:()=>s,metadata:()=>a,toc:()=>k});var n=r(7462),i=(r(7294),r(3905));const s={},l="Utleggstrekk",a={unversionedId:"utleggstrekk/index",id:"utleggstrekk/index",title:"Utleggstrekk",description:"Om tjenesten",source:"@site/docs/utleggstrekk/index.md",sourceDirName:"utleggstrekk",slug:"/utleggstrekk/",permalink:"/beta-apier/utleggstrekk/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Skisser",permalink:"/beta-apier/utleggsbegjaering/skisser"},next:{title:"API Spesifikasjon",permalink:"/beta-apier/utleggstrekk/apispesifikasjon/"}},o={},k=[{value:"Om tjenesten",id:"om-tjenesten",level:2},{value:"Arkitekturen",id:"arkitekturen",level:2}],u={toc:k};function g(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"utleggstrekk"},"Utleggstrekk"),(0,i.kt)("h2",{id:"om-tjenesten"},"Om tjenesten"),(0,i.kt)("p",null,"Denne siden beskriver et nytt grensesnitt mellom IT-systemene til Skatteetaten og trekkpliktige/arbeidsgivere."),(0,i.kt)("p",null,"M\xe5lgruppen for siden er utviklere og IT-arkitekter hos systemleverand\xf8rer som leverer l\xf8nns- og personalsystemer (eller sluttbrukersystemer) til arbeidsgivere. Slike systemer kalles i det videre sluttbrukersystemer og forkortes SBS."),(0,i.kt)("h2",{id:"arkitekturen"},"Arkitekturen"),(0,i.kt)("p",null,"Det skal etableres et nytt grensesnitt for \xe5 formidle meldinger om utleggstrekk fra Skatteetaten til arbeidsgivere som har ansatte som skal ha utleggstrekk i l\xf8nn."),(0,i.kt)("p",null,"Dette nye grensesnittet vil p\xe5 sikt erstatte det eksisterende grensesnittet for trekkformidling, men i f\xf8rste omgang vil det nye grensesnittet komme i tillegg til det eksisterende grensesnittet.\nGrensesnittet vil f\xf8rst tilbys i et testmil\xf8j\xf8, deretter i piloter og til slutt i full produksjon."),(0,i.kt)("p",null,"Hovedtrekkene i det nye grensesnittet er:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Grensesnittet er et maskin-maskin-grensesnitt som overf\xf8rer trekkinformasjon fra Skatteetaten til arbeidsgivere med SBS-systemer."),(0,i.kt)("li",{parentName:"ul"},"Grensesnittet er basert p\xe5 en RESTful-stil som tilbyr et API."),(0,i.kt)("li",{parentName:"ul"},"SBS m\xe5 sp\xf8rre (poll) mot grensesnittet for \xe5 sjekke om det er nye trekkmeldinger."),(0,i.kt)("li",{parentName:"ul"},"Det vil etterhvert komme et grensesnitt der SBS kan motta notifikasjon (event) om at Skatteetaten har en ny trekkmelding til arbeidsgiver."),(0,i.kt)("li",{parentName:"ul"},"I grensesnittet m\xe5 SBS presentere et token som inneholder organisasjonsnummeret til trekkpliktig arbeidsgiver."),(0,i.kt)("li",{parentName:"ul"},'Tokenet f\xe5r SBS ved \xe5 koble seg opp mot Maskinporten med et gitt "scope".'),(0,i.kt)("li",{parentName:"ul"},"Grensesnittet inneholder b\xe5de informasjon om nye utleggstrekk og endringer i utleggstrekk."),(0,i.kt)("li",{parentName:"ul"},"Grensesnittet er egentlig en feed som viser nye trekkmeldinger siden en inngitt forrige meldingsId."),(0,i.kt)("li",{parentName:"ul"},"Informasjonen i trekkmeldingen er i formatet JSON.")))}g.isMDXComponent=!0}}]);