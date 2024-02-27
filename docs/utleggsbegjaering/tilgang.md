# Tilgang til tjenesten

For å få tilgang til tjenesten må leverandøren ha underskrevet en pilotavtale med Skatteetaten.

Det vil tilbys ulike former for tilgang til tjensten:
1. Maskinporten. Dette er en påloggingsmekanisme for inkassobyrå med konsesjon. Før et inkassobyrå-system kan benytte vår nye innsendingstjeneste for begjæringer, må inkasso-systemet logge på Maskinporten for å få et token til å benytte tjenesten. 
2. ID-porten. Brukeren av et inkassosystem benytter personlig pålogging på ID-porten, og inkassosystem benytter tokenet fra ID-porten til å kalle utleggsbegjærings api-et.
3. Altinn samtykke. En sluttbruker i et sluttbrukersystem kan benytte Skatteetatens innsendingstjenester gjennom Altinns samtykkeløsning kombinert med sluttbrukerystemets maskinportenautentisering.

Kun tilgangsmekanisme 1 (maskinporten) er støttet i første versjon av tjenesten

# Tilgang via maskinporten
For å få utstedt token av Maskinporten, må inkasso-systemet gjennom sitt virksomhetssertifikat angi hvilket organisasjonsnummer de representerer. Dette organisasjonsnummeret må være godkjent av Skatteetaten.

For å benytte tjenestene for innsending av begjæring skal følgende scope angis ved autentisering i maskinporten:
```    skatteetaten:utleggsbegjaering ```

Mer informasjon om Maskinporten finnes her: [Maskinporten](https://skatteetaten.github.io/api-dokumentasjon/om/sikkerhet).
