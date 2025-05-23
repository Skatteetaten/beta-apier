# Tilgang til tjenesten
Tilgang styres via [Maskinporten](https://skatteetaten.github.io/api-dokumentasjon/om/sikkerhet).

For å få utstedt token av Maskinporten må lønnssystemet gjennom sitt virksomhetssertifikat angi hvilket organisasjonsnummer de representerer. Dette organisasjonsnummeret må være godkjent av Skatteetaten.

For å benytte tjenestene for trekkpålegg skal følgende scope angis ved autentisering i Maskinporten:
```skatteetaten:trekkpaalegg```

API-et støtter to varianter av autentisering via Maskinporten. Disse er beskrevet under

## Alternativ 1 - Systemleverandør er trekkpliktig
Dersom systemleverandør kun skal motta trekkpålegg for sin egen organisasjon, kan man benytte klassisk autentisering via Maskinporten. Mer informasjon om dette finnes [her](https://skatteetaten.github.io/api-dokumentasjon/om/sikkerhet).

## Alternativ 2 - Systembruker
Dersom systemleverandør ønsker å tilby funksjonalitet der en annen organisasjon (kunde av systemleverandøren) skal benytte systemet til å motta trekkpålegg, skal Altinn sin nye funksjonalitet for ‘systembruker’ benyttes. Mer informasjon om dette finnes i [Altinn Systembruker for SBS](https://docs.altinn.studio/authentication/guides/systemauthentication-for-systemproviders/) og
[Systembruker roadmap](https://github.com/orgs/digdir/projects/8/views/5?pane=issue&itemId=41197982).

Systemleverandør må for å støtte systembruker registrere seg i [Maskinporten og Altinn test environment](https://docs.altinn.studio/authentication/guides/systemauthentication-for-systemproviders/).

# Testoppsett

## Test uten bruk av systembruker (alternativ 1)
Valgfrie organisasjoner fra Tenor kan benyttes som trekkpliktig.

## Test der systembruker benyttes (alternativ 2)
Valgfrie organisasjoner fra Tenor kan benyttes som trekkpliktig. Den valgte organisasjonen i Tenor (som representerer en trekkpliktig) må godkjenne at dens fagsystem kan benytte tilgangsressursen/tjenesten «Informasjon om trekkpålegg» på vegne av virksomheten. Det opprettes da en «systembruker» som er koblingen mellom bruker, system, leverandør og API.
