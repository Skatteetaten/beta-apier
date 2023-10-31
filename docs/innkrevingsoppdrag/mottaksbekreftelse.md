# Mottaksbekreftelse

For å bekrefte at et innkrevingsoppdrag har blitt reskontroført hos Skatteetaten, og at Skatteetaten nå er ansvarlig for
videre oppfølging, må man hente mottaksstatus for hvert innkrevingsoppdrag som blir opprettet.

Flyt for mottaksbekreftelse:

1. Opprett nytt innkrevingsoppdrag med POST-kall til `/api/innkreving/innkrevingsoppdrag/v1/innkrevingsoppdrag`
   [(Swagger-lenke)](https://app.swaggerhub.com/apis-docs/skatteetaten/oppdragsinnkreving-api/1.1.35#/Innkrevingsoppdrag/opprettInnkrevingsoppdrag).
2. Etter noen sekunder, hent mottaksstatus med kravidentifikatoren til innkrevingsoppdraget som ble opprettet ved å
   gjøre GET-kall til `/api/innkreving/innkrevingsoppdrag/v1/innkrevingsoppdrag/{kravidentifikator}/mottaksstatus`
   [(Swagger-lenke)](https://app.swaggerhub.com/apis-docs/skatteetaten/oppdragsinnkreving-api/1.1.35#/Mottaksstatus/getMottaksstatus).
3.
    * Hvis mottaksstatus er "MOTTATT_UNDER_BEHANDLING", behandler Skatteetaten det fortsatt
        * Ansvaret for oppfølging ligger hos Skatteetaten
    * Hvis mottaksstatus er "VALIDERINGSFEIL", må valideringsfeil hentes ved GET-kall til
      `/api/innkreving/innkrevingsoppdrag/v1/innkrevingsoppdrag/{kravidentifikator}/valideringsfeil`
      [(Swagger-lenke)](https://app.swaggerhub.com/apis-docs/skatteetaten/oppdragsinnkreving-api/1.1.35#/Valideringsfeil/getValideringsfeil).
      Deretter må feilene rettes, og oppdatert innkrevingsoppdrag må sendes inn på nytt
        * Ansvaret for oppfølging ligger hos oppdragsgiver
    * Når mottaksstatus er "RESKONTROFOERT" er mottakket vellykket.