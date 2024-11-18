# Tilgang til tjenesten

For å få tilgang til tjenesten må leverandøren ha underskrevet en pilotavtale med Skatteetaten.

Oppkobling mot testmiljøet i Skatteetaten skjer via Maskinporten. For å få utstedt token av Maskinporten må inkasso-systemet gjennom sitt virksomhetssertifikat angi hvilket organisasjonsnummer de representerer. Dette organisasjonsnummeret må være godkjent av Skatteetaten.

For å benytte tjenestene for innsending av begjæring skal følgende scope angis ved autentisering i Maskinporten:
```    skatteetaten:utleggsbegjaering ```

API-et støtter to varianter av autentisering via Maskinporten. Disse er beskrevet under

## Alternativ 1 - Systemleverandør er innsender
Dersom systemleverandør kun skal sende inn utleggsbegjæringer på vegne av sin egen organisasjon, kan man benytte klassisk autentisering via Maskinporten. Mer informasjon om dette finnes [her](https://skatteetaten.github.io/api-dokumentasjon/om/sikkerhet).

## Alternativ 2 - Systembruker
Dersom systemleverandør ønsker å tilby funksjonalitet der en annen organisasjon (kunde av systemleverandøren) skal benytte systemet til å sende inn utleggsbegjæringer, skal Altinn sin nye funksjonalitet for ‘systembruker’ benyttes. Mer informasjon om dette finnes i [Altinn Systembruker for SBS](https://docs.altinn.studio/authentication/guides/systemauthentication-for-systemproviders/) og
[Systembruker roadmap](https://github.com/orgs/digdir/projects/8/views/5?pane=issue&itemId=41197982).

Systemleverandør må for å støtte systembruker registrere seg i [Maskinporten og Altinn test environment](https://docs.altinn.studio/authentication/guides/systemauthentication-for-systemproviders/).

# Testoppsett
Bruk valgfrie organisasjoner fra Tenor som innsender av utleggsbegjæring.

## Test der systemleverandør er innsender (alternativ 1)
Når systemleverandør er innsender kan vilkårlige organisasjoner i Tenor benyttes som innsender.

## Test der systembruker benyttes (alternativ 2)

Den valgte organisasjonen i Tenor (som representerer en test-inkassovirksomhet) må godkjenne at dens fagsystem kan benytte tilgangsressursen/tjenesten «Innsending og oppfølging av utleggsbegjæring» på vegne av virksomheten. Det opprettes da en «systembruker» som er koblingen mellom bruker, system, leverandør og API.
