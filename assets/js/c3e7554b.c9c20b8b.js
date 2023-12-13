"use strict";(self.webpackChunkbeta_apier=self.webpackChunkbeta_apier||[]).push([[6693],{3905:(e,t,r)=>{r.d(t,{Zo:()=>k,kt:()=>v});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},k=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},f="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,k=p(e,["components","mdxType","originalType","parentName"]),f=s(r),d=a,v=f["".concat(l,".").concat(d)]||f[d]||g[d]||i;return r?n.createElement(v,o(o({ref:t},k),{},{components:r})):n.createElement(v,o({ref:t},k))}));function v(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[f]="string"==typeof e?e:a,o[1]=p;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5238:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const i={},o="Anbefalinger for bruk",p={unversionedId:"innkrevingsoppdrag/anbefalinger-for-bruk",id:"innkrevingsoppdrag/anbefalinger-for-bruk",title:"Anbefalinger for bruk",description:"Denne siden gir anbefalinger for bruk av Skatteetatens (SKE) tjenester for oppdragsinnkreving.",source:"@site/docs/innkrevingsoppdrag/anbefalinger-for-bruk.md",sourceDirName:"innkrevingsoppdrag",slug:"/innkrevingsoppdrag/anbefalinger-for-bruk",permalink:"/beta-apier/innkrevingsoppdrag/anbefalinger-for-bruk",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Teknisk dokumentasjon",permalink:"/beta-apier/innkrevingsoppdrag/teknisk-dokumentasjon"},next:{title:"Beskrivelse av tjenester",permalink:"/beta-apier/innkrevingsoppdrag/beskrivelse-av-tjenester"}},l={},s=[{value:"Etablere datalager for data som overf\xf8res til Skatteetaten",id:"etablere-datalager-for-data-som-overf\xf8res-til-skatteetaten",level:2},{value:"Fyll ut feltet <code>oppdragsgiversKravidentifikator</code> i <code>OpprettInnkrevingsoppdragRequest</code>",id:"fyll-ut-feltet-oppdragsgiverskravidentifikator-i-opprettinnkrevingsoppdragrequest",level:2}],k={toc:s};function f(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},k,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"anbefalinger-for-bruk"},"Anbefalinger for bruk"),(0,a.kt)("p",null,"Denne siden gir anbefalinger for bruk av Skatteetatens (SKE) tjenester for oppdragsinnkreving."),(0,a.kt)("h2",{id:"etablere-datalager-for-data-som-overf\xf8res-til-skatteetaten"},"Etablere datalager for data som overf\xf8res til Skatteetaten"),(0,a.kt)("p",null,"For \xe5 sikre effektiv\nh\xe5ndtering og etterlevelse av Reglement for \xf8konomistyring i staten, anbefales det \xe5 etablere et datalager for alle data\nsom overf\xf8res til Skatteetaten. Dette datalageret b\xf8r inkludere:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Skatteetatens kravidentifikator, som mottas i retur\nved ",(0,a.kt)("a",{parentName:"li",href:"/beta-apier/innkrevingsoppdrag/beskrivelse-av-tjenester#opprett-et-innkrevingsoppdrag"},"opprettelse av et innkrevingsoppdrag")," hos SKE."),(0,a.kt)("li",{parentName:"ul"},"Mottaksstatus, i henhold til ",(0,a.kt)("a",{parentName:"li",href:"/beta-apier/innkrevingsoppdrag/beskrivelse-av-tjenester#hent-mottaksbekreftelse"},"flyt for mottaksbekreftelse"),"."),(0,a.kt)("li",{parentName:"ul"},"Kravgrunnlaget, eller en referanse til dette."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/beta-apier/innkrevingsoppdrag/beskrivelse-av-tjenester#avstemming-av-et-innkrevingsoppdrag"},"Avstemmingsinformasjon"),".")),(0,a.kt)("p",null,"I henhold til Reglement for \xf8konomistyring i staten, er det viktig at oppdragsgivere som sender innkrevingsoppdrag til\nSkatteetaten tar vare p\xe5 kravidentifikatoren de mottar i retur. Denne identifikatoren, som er en del av\ntransaksjonskontrollen, bidrar til \xe5 sikre sporbarheten til kravet. Ved \xe5 ta vare p\xe5 kravidentifikatoren, kan\noppdragsgiveren effektivt f\xf8lge opp og verifisere statusen p\xe5 det aktuelle kravet."),(0,a.kt)("h2",{id:"fyll-ut-feltet-oppdragsgiverskravidentifikator-i-opprettinnkrevingsoppdragrequest"},"Fyll ut feltet ",(0,a.kt)("inlineCode",{parentName:"h2"},"oppdragsgiversKravidentifikator")," i ",(0,a.kt)("inlineCode",{parentName:"h2"},"OpprettInnkrevingsoppdragRequest")),(0,a.kt)("p",null,"I tillegg vil vi anbefale \xe5 fylle ut feltet ",(0,a.kt)("inlineCode",{parentName:"p"},"oppdragsgiversKravidentifikator")," i ",(0,a.kt)("inlineCode",{parentName:"p"},"OpprettInnkrevingsoppdragRequest"),"\n-objektet ved ",(0,a.kt)("a",{parentName:"p",href:"/beta-apier/innkrevingsoppdrag/beskrivelse-av-tjenester#opprett-et-innkrevingsoppdrag"},"opprettelse av innkrevingsoppdrag")," med en unik\nidentifikator. Dette muliggj\xf8r \xe5 f\xf8lge m\xf8nsteret\nfor ",(0,a.kt)("a",{parentName:"p",href:"/beta-apier/innkrevingsoppdrag/beskrivelse-av-tjenester#feilh%C3%A5ndtering"},"feilh\xe5ndtering ved opprettelse av krav"),", ettersom l\xf8sningen sikrer\nunikhet p\xe5 feltet ",(0,a.kt)("inlineCode",{parentName:"p"},"oppdragsgiversKravidentifikator"),". Dersom man ikke har en unik identifikator her, kan man for eksempel\nbruke en identifikator fra overf\xf8ringstabellen sin."))}f.isMDXComponent=!0}}]);