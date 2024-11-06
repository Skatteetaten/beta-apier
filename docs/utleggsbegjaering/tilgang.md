# Tilgang til tjenesten

For å få tilgang til tjenesten må leverandøren ha underskrevet en pilotavtale med Skatteetaten.

Oppkobling mot testmiljøet i Skatteetaten skjer via Maskinporten og ny funksjonalitet i Altinn for ‘systembruker’. Mer informasjon om dette finnes i [Altinn Systembruker for SBS](https://docs.altinn.studio/authentication/guides/systemauthentication-for-systemproviders/) og
[Systembruker roadmap](https://github.com/orgs/digdir/projects/8/views/5?pane=issue&itemId=41197982).

# Tilgang via maskinporten
For å få utstedt token av Maskinporten, må inkasso-systemet gjennom sitt virksomhetssertifikat angi hvilket organisasjonsnummer de representerer. Dette organisasjonsnummeret må være godkjent av Skatteetaten.

For å benytte tjenestene for innsending av begjæring skal følgende scope angis ved autentisering i maskinporten:
```    skatteetaten:utleggsbegjaering ```

Systemleverandør må for å kunne teste APIet også registrere seg i [Altinn test environment](https://docs.altinn.studio/authentication/guides/systemauthentication-for-systemproviders/).

# Testoppsett - inkassovirksomhet
Bruk valgfrie testbrukere/organisasjoner fra Tenor som inkassovirksomhet/innsender.

Inkassovirksomhet i TT02 må godkjenne at deres fagsystem kan benytte ressursen/tjenesten «Innsending og oppfølging av utleggsbegjæring» på vegne av virksomheten. Det opprettes da en «systembruker» som er koblingen mellom bruker, system, leverandør og API.
