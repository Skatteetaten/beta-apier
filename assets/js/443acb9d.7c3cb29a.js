"use strict";(self.webpackChunkbeta_apier=self.webpackChunkbeta_apier||[]).push([[765],{3905:(e,t,r)=>{r.d(t,{Zo:()=>g,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},g=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},k="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},v=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,g=p(e,["components","mdxType","originalType","parentName"]),k=l(r),v=a,m=k["".concat(s,".").concat(v)]||k[v]||f[v]||i;return r?n.createElement(m,o(o({ref:t},g),{},{components:r})):n.createElement(m,o({ref:t},g))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=v;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[k]="string"==typeof e?e:a,o[1]=p;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}v.displayName="MDXCreateElement"},7252:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>k,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const i={},o="Mottaksbekreftelse",p={unversionedId:"innkrevingsoppdrag/mottaksbekreftelse",id:"innkrevingsoppdrag/mottaksbekreftelse",title:"Mottaksbekreftelse",description:"For \xe5 bekrefte at et innkrevingsoppdrag har blitt reskontrof\xf8rt hos Skatteetaten, og at Skatteetaten n\xe5 er ansvarlig for",source:"@site/docs/innkrevingsoppdrag/mottaksbekreftelse.md",sourceDirName:"innkrevingsoppdrag",slug:"/innkrevingsoppdrag/mottaksbekreftelse",permalink:"/beta-apier/innkrevingsoppdrag/mottaksbekreftelse",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Beskrivelse av tjenester",permalink:"/beta-apier/innkrevingsoppdrag/beskrivelse-av-tjenester"},next:{title:"Utleggsbegj\xe6ring og pr\xf8ving",permalink:"/beta-apier/utleggsbegjaering/"}},s={},l=[],g={toc:l};function k(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"mottaksbekreftelse"},"Mottaksbekreftelse"),(0,a.kt)("p",null,"For \xe5 bekrefte at et innkrevingsoppdrag har blitt reskontrof\xf8rt hos Skatteetaten, og at Skatteetaten n\xe5 er ansvarlig for\nvidere oppf\xf8lging, m\xe5 man hente mottaksstatus for hvert innkrevingsoppdrag som blir opprettet."),(0,a.kt)("p",null,"Flyt for mottaksbekreftelse:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Opprett nytt innkrevingsoppdrag med POST-kall til ",(0,a.kt)("inlineCode",{parentName:"li"},"/api/innkreving/innkrevingsoppdrag/v1/innkrevingsoppdrag"),(0,a.kt)("a",{parentName:"li",href:"https://app.swaggerhub.com/apis/JAKOBLADEKIRBYSTENVA/Innkreving_av_krav_for_offentlige_oppdragsgivere/1.1.28#/Innkrevingsoppdrag/opprettInnkrevingsoppdrag"},"(Swagger-lenke)"),"."),(0,a.kt)("li",{parentName:"ol"},"Etter noen sekunder, hent mottaksstatus med kravidentifikatoren til innkrevingsoppdraget som ble opprettet ved \xe5\ngj\xf8re GET-kall til ",(0,a.kt)("inlineCode",{parentName:"li"},"/api/innkreving/innkrevingsoppdrag/v1/innkrevingsoppdrag/{kravidentifikator}/mottaksstatus"),(0,a.kt)("a",{parentName:"li",href:"https://app.swaggerhub.com/apis/JAKOBLADEKIRBYSTENVA/Innkreving_av_krav_for_offentlige_oppdragsgivere/1.1.28#/Mottaksstatus/getMottaksstatus"},"(Swagger-lenke)"),"."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},'Hvis mottaksstatus er "MOTTATT_UNDER_BEHANDLING", behandler Skatteetaten det fortsatt',(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Ansvaret for oppf\xf8lging ligger hos Skatteetaten"))),(0,a.kt)("li",{parentName:"ul"},'Hvis mottaksstatus er "VALIDERINGSFEIL", m\xe5 valideringsfeil hentes ved GET-kall til\n',(0,a.kt)("inlineCode",{parentName:"li"},"/api/innkreving/innkrevingsoppdrag/v1/innkrevingsoppdrag/{kravidentifikator}/valideringsfeil"),(0,a.kt)("a",{parentName:"li",href:"https://app.swaggerhub.com/apis/JAKOBLADEKIRBYSTENVA/Innkreving_av_krav_for_offentlige_oppdragsgivere/1.1.28#/Valideringsfeil/getValideringsfeil"},"(Swagger-lenke)"),".\nDeretter m\xe5 feilene rettes, og oppdatert innkrevingsoppdrag m\xe5 sendes inn p\xe5 nytt",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Ansvaret for oppf\xf8lging ligger hos oppdragsgiver"))),(0,a.kt)("li",{parentName:"ul"},'N\xe5r mottaksstatus er "RESKONTROFOERT" er mottakket vellykket.')))))}k.isMDXComponent=!0}}]);