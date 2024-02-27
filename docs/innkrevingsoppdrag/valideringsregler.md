# Valideringsregler

## Synkrone valideringsregler for NAV

### Opprett innkrevingsoppdrag

| Feilmeldingstittel                                              | Siste del av typefelt                                           | Http-status | Kravtyper regelen gjelder for                                                                   | Merknad                                                                                                                    |
|-----------------------------------------------------------------|-----------------------------------------------------------------|-------------|-------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------|
| Kravtype eksisterer ikke                                        | kravtype-eksisterer-ikke                                        | 422         | Alle                                                                                            | Verifiserer at kravtypen ligger i Kodelistekatalogen (intern Skatteetaten-modul)                                           |
| Kravtype er inaktiv                                             | kravtype-er-inaktiv                                             | 422         | Alle                                                                                            | Verifiserer at kravtypen er aktiv i Kodelistekatalogen                                                                     | 
| Beloep er ikke over null                                        | beloep-er-ikke-over-null                                        | 422         | Alle                                                                                            |                                                                                                                            | 
| Tom oppdragsgivers referanse                                    | tom-oppdragsgivers-referanse                                    | 422         | Alle                                                                                            |                                                                                                                            | 
| Ugyldig oppdragsgivers referanse                                | ugyldig-oppdragsgivers-referanse                                | 400         | Alle                                                                                            | Må være mellom 1 og 40 tegn, og kun inneholde bokstaver (a-å, A-Å), tall og spesialtegnene - og /                          | 
| Ugyldig oppdragsgivers kravidentifikator                        | ugyldig-oppdragsgivers-kravidentifikator                        | 400         | Alle                                                                                            | Dersom denne eksisterer: må være mellom 1 og 40 tegn, og kun inneholde bokstaver (a-å, A-Å), tall og spesialtegnene - og / | 
| Oppdragsgivers kravidentifikator eksisterer allerede            | oppdragsgivers-kravidentifikator-eksisterer-allerede            | 422         | Alle                                                                                            |                                                                                                                            | 
| Ugyldig fastsettelsesdato                                       | ugyldig-fastsettelsesdato                                       | 422         | Alle                                                                                            | Kan ikke være i fremtiden                                                                                                  | 
| Ugyldig foreldelsesfristens utgangspunkt                        | ugyldig-foreldelsesfristens-utgangspunkt                        | 422         | Alle                                                                                            | Må være tidligere enn fastsettelsesdato                                                                                    | 
| Foreldelsesfristens utgangspunkt eldre enn 2 aar og 10 maaneder | foreldelsesfristens-utgangspunkt-eldre-enn-2-aar-og-10-maaneder | 422         | Alle                                                                                            |                                                                                                                            | 
| Ugyldig tilleggsfrist etter foreldelsesloven                    | ugyldig-tilleggsfrist-etter-foreldelsesloven                    | 422         | Alle                                                                                            | Kan ikke være angitt når foreldelsesfristensUtgangspunkt er angitt                                                         | 
| Tilleggsfrist etter foreldelsesloven eldre enn 10 maaneder      | tilleggsfrist-etter-foreldelsesloven-eldre-enn-10-maaneder      | 422         | Alle                                                                                            | tilleggsfristEtterForeldelsesloven kan ikke være mer enn 10 måneder tilbake i tid                                          | 
| Ugyldig skyldners identifikator                                 | ugyldig-skyldners-identifikator                                 | 422         | Alle                                                                                            | Må være et gyldig fødsels- eller personnummer                                                                              | 
| Ugyldig tilleggsinformasjon                                     | ugyldig-tilleggsinformasjon                                     | 400         | Alle                                                                                            | Må være oppgitt om påkrevd for oppdragsgiver og være på rett format                                                        | 
| Ugyldig kravtype                                                | ugyldig-kravtype                                                | 422         | Alle                                                                                            | Kravtypen må tilhøre oppdragsgiveren                                                                                       | 
| Rentebeloep er ikke over null                                   | rentebeloep-er-ikke-over-null                                   | 422         | Alle                                                                                            |                                                                                                                            | 
| Ugyldig renterilagtdato                                         | ugyldig-renterilagtdato                                         | 422         | Alle                                                                                            | Kan ikke være i fremtiden                                                                                                  | 
| Ytelser for avregning er ikke over null                         | ytelser-for-avregning-er-ikke-over-null                         | 422         | Alle                                                                                            |                                                                                                                            | 
| Ugyldig tilbakekrevingsperiode                                  | ugyldig-tilbakekrevingsperiode                                  | 422         | Alle                                                                                            | Fom og tom må være i fortiden. Fom må være før tom.                                                                        | 
|                                                                 |                                                                 |             |                                                                                                 |                                                                                                                            | 
| Kravtype gjelder kun for person                                 | kravtype-gjelder-kun-for-person                                 | 422         | Alle bortsett fra TILBAKEKREVING\_<br/>OMSORGSPENGER og TILBAKEKREVING\_<br/>LOENNSKOMPENSASJON |                                                                                                                            |  
| Kravtype gjelder kun for organisasjon                           | kravtype-gjelder-kun-for-organisasjon                           | 422         | TILBAKEKREVING\_<br/>LOENNSKOMPENSASJON                                                         |                                                                                                                            | 
| Foreldelsesfristens utgangspunkt eldre enn 2 aar og 11 maaneder | foreldelsesfristens-utgangspunkt-eldre-enn-2-aar-og-11-maaneder | 422         | TILBAKEKREVING\_<br/>FORSKUTTERTE\_<br/>DAGPENGER                                               |                                                                                                                            | 
| Tilleggsfrist etter foreldelsesloven eldre enn 11 maaneder      | tilleggsfrist-etter-foreldelsesloven-eldre-enn-11-maaneder      | 422         | TILBAKEKREVING\_<br/>FORSKUTTERTE\_<br/>DAGPENGER                                               |                                                                                                                            | 

### Endring av hovedstol

| Feilmeldingstittel                        | Siste del av typefelt                     | Http-status | Merknad                                          |
|-------------------------------------------|-------------------------------------------|-------------|--------------------------------------------------|
| Hovedstol er ikke over null               | hovedstol-er-ikke-over-null               | 422         |                                                  |
| Innkrevingsoppdrag har ugyldig tilstand   | innkrevingsoppdrag-har-ugyldig-tilstand   | 403         | Innkrevingsoppdraget tilhører ikke oppdragsgiver |
| Innkrevingsoppdrag er ikke reskontrofoert | innkrevingsoppdrag-er-ikke-reskontrofoert | 409         | Må være reskontroført for å kunne endres         |
| Innkrevingsoppdrag er avskrevet           | innkrevingsoppdrag-er-avskrevet           | 409         |                                                  |

### Endring av renter

| Feilmeldingstittel                        | Siste del av typefelt                     | Http-status | Merknad                                          |
|-------------------------------------------|-------------------------------------------|-------------|--------------------------------------------------|
| Rentebeloep er under 0                    | rentebeloep-er-under-0                    | 422         |                                                  |
| Innkrevingsoppdrag har ugyldig tilstand   | innkrevingsoppdrag-har-ugyldig-tilstand   | 403         | Innkrevingsoppdraget tilhører ikke oppdragsgiver |                                       
| Innkrevingsoppdrag er ikke reskontrofoert | innkrevingsoppdrag-er-ikke-reskontrofoert | 409         | Må være reskontroført for å kunne endres         |
| Innkrevingsoppdrag er avskrevet           | innkrevingsoppdrag-er-avskrevet           | 409         |                                                  |

### Endring av oppdragsgivers referanse

| Feilmeldingstittel                        | Siste del av typefelt                     | Http-status | Merknad                                          |
|-------------------------------------------|-------------------------------------------|-------------|--------------------------------------------------|
| Innkrevingsoppdrag har ugyldig tilstand   | innkrevingsoppdrag-har-ugyldig-tilstand   | 403         | Innkrevingsoppdraget tilhører ikke oppdragsgiver |                                   
| Innkrevingsoppdrag er ikke reskontrofoert | innkrevingsoppdrag-er-ikke-reskontrofoert | 409         | Må være reskontroført for å kunne endres         |
| Innkrevingsoppdrag er avskrevet           | innkrevingsoppdrag-er-avskrevet           | 409         |                                                  |

### Avskriving

| Feilmeldingstittel                        | Siste del av typefelt                     | Http-status | Merknad                                          |
|-------------------------------------------|-------------------------------------------|-------------|--------------------------------------------------|
| Innkrevingsoppdrag har ugyldig tilstand   | innkrevingsoppdrag-har-ugyldig-tilstand   | 403         | Innkrevingsoppdraget tilhører ikke oppdragsgiver |
| Innkrevingsoppdrag er ikke reskontrofoert | innkrevingsoppdrag-er-ikke-reskontrofoert | 409         |                                                  |
| Innkrevingsoppdrag er allerede avskrevet  | innkrevingsoppdrag-er-allerede-avskrevet  | 409         | Må være reskontroført for å kunne avskrives      |

## Asynkrone valideringsregler for NAV

### Opprett innkrevingsoppdrag

Som beskrevet under [asynkron-validering](beskrivelse-av-tjenester.md#asynkron-validering) hentes valideringsfeil når
mottaksstatus er `VALIDERINGSFEIL`.

| Regel                           | Eksempel på respons                                                                                                                                               | Kravtyper regelen gjelder for                     | Merknad                                                                                                                                                              |
|---------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Person eksisterer ikke          | <pre><code>{<br/>  "error": "PERSON_EKSISTERER_IKKE",<br/>  "message": "Person med fødselsnummer=xxxxxx eksisterer ikke"<br/>}</code></pre>                       | Alle                                              |                                                                                                                                                                      |
| Person er død                   | <pre><code>{<br/>  "error": "PERSON_ER_DOED",<br/>  "message": "Person med fødselsnummer=xxxxxx er død"<br/>}</code></pre>                                        | TILBAKEKREVING\_<br/>FORSKUTTERTE\_<br/>DAGPENGER |                                                                                                                                                                      |
| Organisasjonsnummer finnes ikke | <pre><code>{<br/>  "error": "ORGANISASJONSNUMMER_FINNES_IKKE",<br/>  "message": "Organisasjon med organisasjonsnummer=xxxxxxxxx finnes ikke. "<br/>}</code></pre> | Alle                                              | Kan komme tilleggsinformasjon om at virksomheten er slettet, eller slettet som følge av dublett med nytt organisasjonsnummer om denne informasjonen er tilgjengelig. |
| Organisasjon er opphørt         | <pre><code>{<br/>  "error": "ORGANISASJON_ER_OPPHOERT",<br/>  "message": "Organisasjon med organisasjonsnummer=xxxxxxxxx er opphørt. "<br/>}</code></pre>         | Alle                                              |                                                                                                                                                                      |








