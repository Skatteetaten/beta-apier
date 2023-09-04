# Mottaksavstemming

For å bekrefte at et innkrevingsoppdrag har blitt reskontroført hos Skatteetaten, må man hente mottaksstatus for hvert
innkrevingsoppdrag som blir opprettet.

Flyt for mottaksavstemming:
1. Opprett nytt innkrevingsoppdrag med POST-kall til `/api/v1/innkrevingsoppdrag` 
[(Swagger-lenke)](https://app.swaggerhub.com/apis/JAKOBLADEKIRBYSTENVA/Innkreving_av_krav_for_offentlige_oppdragsgivere/1.1.21#/Innkrevingsoppdrag/opprettInnkrevingsoppdrag).
2. Etter noen sekunder, hent mottaksstatus med kravidentifikatoren til innkrevingsoppdraget som ble opprettet ved å 
gjøre GET-kall til `/api/v1/innkrevingsoppdrag/{kravidentifikator}/mottaksstatus`
   [(Swagger-lenke)](https://app.swaggerhub.com/apis/JAKOBLADEKIRBYSTENVA/Innkreving_av_krav_for_offentlige_oppdragsgivere/1.1.21#/Mottaksstatus/getMottaksstatus).
   * Hvis mottaksstatus er "UNDER_BEHANDLING", har ikke all valideringen blitt gjennomført enda.
   * Hvis mottaksstatus er "VALIDERINGSFEIL", må valideringsfeil hentes ved GET-kall til 
   `/api/v1/innkrevingsoppdrag/{kravidentifikator}/valideringsfeil`
     [(Swagger-lenke)](https://app.swaggerhub.com/apis/JAKOBLADEKIRBYSTENVA/Innkreving_av_krav_for_offentlige_oppdragsgivere/1.1.21#/Valideringsfeil/getValideringsfeil).
   Deretter må feilene rettes, og oppdatert innkrevingsoppdrag må sendes inn på nytt med POST-kall til
   `/api/v1/innkrevingsoppdrag` [(Swagger-lenke)](https://app.swaggerhub.com/apis/JAKOBLADEKIRBYSTENVA/Innkreving_av_krav_for_offentlige_oppdragsgivere/1.1.21#/Innkrevingsoppdrag/opprettInnkrevingsoppdrag).
   * Når mottaksstatus er "RESKONTROFOERT" er mottakket vellykket.