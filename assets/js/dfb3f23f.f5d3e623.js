"use strict";(self.webpackChunkbeta_apier=self.webpackChunkbeta_apier||[]).push([[4251],{3905:(e,t,r)=>{r.d(t,{Zo:()=>k,kt:()=>c});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var o=n.createContext({}),p=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},k=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,k=s(e,["components","mdxType","originalType","parentName"]),g=p(r),m=i,c=g["".concat(o,".").concat(m)]||g[m]||u[m]||a;return r?n.createElement(c,l(l({ref:t},k),{},{components:r})):n.createElement(c,l({ref:t},k))}));function c(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,l=new Array(a);l[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[g]="string"==typeof e?e:i,l[1]=s;for(var p=2;p<a;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3353:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>g,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=r(7462),i=(r(7294),r(3905));const a={},l="Trekkp\xe5legg",s={unversionedId:"trekkpaalegg/index",id:"trekkpaalegg/index",title:"Trekkp\xe5legg",description:"Om tjenesten",source:"@site/docs/trekkpaalegg/index.md",sourceDirName:"trekkpaalegg",slug:"/trekkpaalegg/",permalink:"/beta-apier/trekkpaalegg/",draft:!1,tags:[],version:"current",lastUpdatedAt:1727087785,formattedLastUpdatedAt:"23. sep. 2024",frontMatter:{},sidebar:"docs",previous:{title:"Skisser",permalink:"/beta-apier/utleggsbegjaering/skisser"},next:{title:"API Spesifikasjon",permalink:"/beta-apier/trekkpaalegg/apispesifikasjon/"}},o={},p=[{value:"Om tjenesten",id:"om-tjenesten",level:2},{value:"Arkitekturen",id:"arkitekturen",level:2}],k={toc:p};function g(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},k,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"trekkp\xe5legg"},"Trekkp\xe5legg"),(0,i.kt)("h2",{id:"om-tjenesten"},"Om tjenesten"),(0,i.kt)("p",null,"Denne siden beskriver et nytt grensesnitt mellom IT-systemene til Skatteetaten og trekkpliktige/arbeidsgivere."),(0,i.kt)("p",null,"M\xe5lgruppen for siden er utviklere og IT-arkitekter hos systemleverand\xf8rer som leverer l\xf8nns- og personalsystemer (eller sluttbrukersystemer) til arbeidsgivere. Slike systemer kalles i det videre sluttbrukersystemer og forkortes SBS."),(0,i.kt)("h2",{id:"arkitekturen"},"Arkitekturen"),(0,i.kt)("p",null,"Det skal etableres et nytt grensesnitt for \xe5 formidle trekkp\xe5legg fra Skatteetaten til arbeidsgivere med ansatte som skal ha utleggstrekk i l\xf8nn."),(0,i.kt)("p",null,"Grensesnittet vil p\xe5 sikt erstatte det eksisterende grensesnittet for trekkformidling, men i f\xf8rste omgang vil det nye grensesnittet komme i tillegg til det eksisterende grensesnittet.\nGrensesnittet vil f\xf8rst tilbys i et testmilj\xf8, deretter i piloter og til slutt i full produksjon."),(0,i.kt)("p",null,"Hovedtrekkene i det nye grensesnittet er:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Grensesnittet er et maskin-maskin-grensesnitt som overf\xf8rer trekkp\xe5legg fra Skatteetaten til arbeidsgivere med SBS-systemer."),(0,i.kt)("li",{parentName:"ul"},"Grensesnittet er basert p\xe5 en RESTful-stil som tilbyr et API."),(0,i.kt)("li",{parentName:"ul"},"SBS m\xe5 sp\xf8rre (poll) mot grensesnittet for \xe5 sjekke om det er nye trekkp\xe5legg."),(0,i.kt)("li",{parentName:"ul"},"Det vil etter hvert komme et grensesnitt der SBS kan motta notifikasjon (event) om at Skatteetaten har et nytt trekkp\xe5legg til arbeidsgiver."),(0,i.kt)("li",{parentName:"ul"},"I grensesnittet m\xe5 SBS presentere et token som inneholder organisasjonsnummeret til trekkpliktig arbeidsgiver."),(0,i.kt)("li",{parentName:"ul"},'Tokenet f\xe5r SBS ved \xe5 koble seg opp mot Maskinporten med et gitt "scope".'),(0,i.kt)("li",{parentName:"ul"},"Trekkp\xe5legget leveres i formatet JSON.")))}g.isMDXComponent=!0}}]);