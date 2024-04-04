# Oppdragsgiverspesifikke valideringsregler

## NAV

### Synkrone valideringsregler

#### Opprett innkrevingsoppdrag

| Title i feilobjekt                                              | Siste del av type-felt i feilobjekt                             | Http-status | Kravtyper regelen gjelder for                                                                   | Merknad                                                                                                                                   |
|-----------------------------------------------------------------|-----------------------------------------------------------------|-------------|-------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------|
| Kravtype gjelder kun for person                                 | kravtype-gjelder-kun-for-person                                 | 422         | Alle bortsett fra TILBAKEKREVING\_<br/>OMSORGSPENGER og TILBAKEKREVING\_<br/>LOENNSKOMPENSASJON | Alle kravtyper kan *kun* rettes mot personer, med unntak av TILBAKEKREVING\_<br/>OMSORGSPENGER og TILBAKEKREVING\_<br/>LOENNSKOMPENSASJON |  
| Kravtype gjelder kun for organisasjon                           | kravtype-gjelder-kun-for-organisasjon                           | 422         | TILBAKEKREVING\_<br/>LOENNSKOMPENSASJON                                                         | Det er kun kravtypen TILBAKEKREVING\_<br/>LOENNSKOMPENSASJON som *kun* kan rettes mot organisasjoner.                                     | 
| Foreldelsesfristens utgangspunkt eldre enn 2 aar og 11 maaneder | foreldelsesfristens-utgangspunkt-eldre-enn-2-aar-og-11-maaneder | 422         | TILBAKEKREVING\_<br/>FORSKUTTERTE\_<br/>DAGPENGER                                               |                                                                                                                                           | 
| Tilleggsfrist etter foreldelsesloven eldre enn 11 maaneder      | tilleggsfrist-etter-foreldelsesloven-eldre-enn-11-maaneder      | 422         | TILBAKEKREVING\_<br/>FORSKUTTERTE\_<br/>DAGPENGER                                               |                                                                                                                                           | 

### Asynkrone valideringsregler

#### Opprett innkrevingsoppdrag

| Regel                           | Eksempel på respons                                                                                                                                               | Kravtyper regelen gjelder for                     | Merknad                                                                                                                                                              |
|---------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Person eksisterer ikke          | <pre><code>{<br/>  "error": "PERSON_EKSISTERER_IKKE",<br/>  "message": "Person med fødselsnummer=xxxxxx eksisterer ikke"<br/>}</code></pre>                       | Alle                                              |                                                                                                                                                                      |
| Person er død                   | <pre><code>{<br/>  "error": "PERSON_ER_DOED",<br/>  "message": "Person med fødselsnummer=xxxxxx er død"<br/>}</code></pre>                                        | TILBAKEKREVING\_<br/>FORSKUTTERTE\_<br/>DAGPENGER | Det kan ikke rettes krav mot døde personer for kravtyper som er listet opp i kolonnen til venstre.                                                                   |
| Organisasjonsnummer finnes ikke | <pre><code>{<br/>  "error": "ORGANISASJONSNUMMER_FINNES_IKKE",<br/>  "message": "Organisasjon med organisasjonsnummer=xxxxxxxxx finnes ikke. "<br/>}</code></pre> | Alle                                              | Kan komme tilleggsinformasjon om at virksomheten er slettet, eller slettet som følge av dublett med nytt organisasjonsnummer om denne informasjonen er tilgjengelig. |
| Organisasjon er opphørt         | <pre><code>{<br/>  "error": "ORGANISASJON_ER_OPPHOERT",<br/>  "message": "Organisasjon med organisasjonsnummer=xxxxxxxxx er opphørt. "<br/>}</code></pre>         | Alle                                              |                                                                                                                                                                      |



## Brønnøysundregistrene

### Synkrone valideringsregler

#### Opprett innkrevingsoppdrag

| Title i feilobjekt                                              | Siste del av type-felt i feilobjekt                             | Http-status |
|-----------------------------------------------------------------|-----------------------------------------------------------------|-------------|
| Kravtype gjelder kun for organisasjon                           | kravtype-gjelder-kun-for-organisasjon                           | 422         |


#### Endring av hovedstol

| Title i feilobjekt                                  | Siste del av type-felt i feilobjekt                 | Http-status | Merknad                                                                    |
|-----------------------------------------------------|-----------------------------------------------------|-------------|----------------------------------------------------------------------------|
| Ny hovedstol er ikke lavere enn gjeldende hovedstol | ny-hovedstol-er-ikke-lavere-enn-gjeldende-hovedstol | 422         | Beløpet for ny hovedstol må være lavere enn eller likt gjeldende hovedstol |

### Asynkrone valideringsregler

#### Opprett innkrevingsoppdrag

| Regel                           | Eksempel på respons                                                                                                                                               | Merknad                                                                                                                                                              |
|---------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Organisasjonsnummer finnes ikke | <pre><code>{<br/>  "error": "ORGANISASJONSNUMMER_FINNES_IKKE",<br/>  "message": "Organisasjon med organisasjonsnummer=xxxxxxxxx finnes ikke. "<br/>}</code></pre> | Kan komme tilleggsinformasjon om at virksomheten er slettet, eller slettet som følge av dublett med nytt organisasjonsnummer om denne informasjonen er tilgjengelig. |
| Organisasjon er opphørt         | <pre><code>{<br/>  "error": "ORGANISASJON_ER_OPPHOERT",<br/>  "message": "Organisasjon med organisasjonsnummer=xxxxxxxxx er opphørt. "<br/>}</code></pre>         |                                                                                                                                                                      |
