# Brønnøysundregistrene

### Synkrone valideringsregler

#### Opprett innkrevingsoppdrag

| Title i feilobjekt                                              | Siste del av type-felt i feilobjekt                             | Http-status | Merknad                                                                           |
|-----------------------------------------------------------------|-----------------------------------------------------------------|-------------|-----------------------------------------------------------------------------------|
| Kravtype gjelder kun for organisasjon                           | kravtype-gjelder-kun-for-organisasjon                           | 422         |                                                                                   | 
| Ugyldig periode                                                 | ugyldig-periode                                                 | 422         | `tom` kan ikke være i fremtiden. `fom` kan ikke være etter `tom`.                 |
| Ugyldig stoppdato for løpende mulkt                             | ugyldig-stoppdato-for-løpende-mulkt                             | 422         | `stoppdatoForLøpendeMulkt` kan ikke være i fremtiden.                             |
| Foreldelsesfristens utgangspunkt eldre enn 2 aar og 10 maaneder | foreldelsesfristens-utgangspunkt-eldre-enn-2-aar-og-10-maaneder | 422         |                                                                                   |
| Rentebeloep er ikke tillatt for kravtype                        | rentebeloep-er-ikke-tillatt-for-kravtype                        | 422         | Rentebeloep er ikke tillatt for kravtype=TVANGSMULKT_RETTIGHETSHAVERREGISTERLOVEN |

#### Endring av hovedstol, endring av renter og ny oppdragsgivers referanse

| Title i feilobjekt        | Siste del av type-felt i feilobjekt | Http-status |
|---------------------------|-------------------------------------|-------------|
| Kravtypen kan ikke endres | kravtypen-kan-ikke-endres           | 422         |

#### Avskriving

| Title i feilobjekt           | Siste del av type-felt i feilobjekt | Http-status |
|------------------------------|-------------------------------------|-------------|
| Kravtypen kan ikke avskrives | kravtypen-kan-ikke-avskrives        | 422         |

### Asynkrone valideringsregler

#### Opprett innkrevingsoppdrag

| Regel                           | Eksempel på respons                                                                                                                                               | Merknad                                                                                                                                                              |
|---------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Organisasjonsnummer finnes ikke | <pre><code>{<br/>  "error": "ORGANISASJONSNUMMER_FINNES_IKKE",<br/>  "message": "Organisasjon med organisasjonsnummer=xxxxxxxxx finnes ikke. "<br/>}</code></pre> | Kan komme tilleggsinformasjon om at virksomheten er slettet, eller slettet som følge av dublett med nytt organisasjonsnummer om denne informasjonen er tilgjengelig. |
| Organisasjon er opphørt         | <pre><code>{<br/>  "error": "ORGANISASJON_ER_OPPHOERT",<br/>  "message": "Organisasjon med organisasjonsnummer=xxxxxxxxx er opphørt. "<br/>}</code></pre>         |                                                                                                                                                                      |
| Organisasjon er slettet         | <pre><code>{<br/>  "error": "ORGANISASJON_ER_SLETTET",<br/>  "message": "Organisasjon med organisasjonsnummer=xxxxxxxxx er slettet"<br/>}</code></pre>            | Organisasjon er slettet på grunn av feil i enhetsregisteret.                                                                                                         |