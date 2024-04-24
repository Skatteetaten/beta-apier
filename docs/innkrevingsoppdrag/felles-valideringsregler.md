# Felles valideringsregler

Valideringsreglene på denne siden er felles for alle oppdragsgivere.

## Synkrone valideringsregler

### Valideringsregler for opprett innkrevingsoppdrag

| Title i feilobjekt                                              | Siste del av type-felt i feilobjekt                             | Http-status | Merknad                                                                                                                               |
|-----------------------------------------------------------------|-----------------------------------------------------------------|-------------|---------------------------------------------------------------------------------------------------------------------------------------|
| Kravtype eksisterer ikke                                        | kravtype-eksisterer-ikke                                        | 422         | Verifiserer at kravtypen ligger i Kodelistekatalogen (intern Skatteetaten-modul)                                                      |
| Kravtype er inaktiv                                             | kravtype-er-inaktiv                                             | 422         | Verifiserer at kravtypen er aktiv i Kodelistekatalogen                                                                                | 
| Beloep er ikke over 0                                           | beloep-er-ikke-over-0                                           | 422         |                                                                                                                                       | 
| Tom oppdragsgivers referanse                                    | tom-oppdragsgivers-referanse                                    | 422         |                                                                                                                                       | 
| Ugyldig oppdragsgivers referanse                                | ugyldig-oppdragsgivers-referanse                                | 422         | Må være mellom 1 og 40 tegn, og kun inneholde bokstaver (a-å, A-Å), tall og spesialtegnene - og /                                     | 
| Ugyldig oppdragsgivers kravidentifikator                        | ugyldig-oppdragsgivers-kravidentifikator                        | 422         | Dersom denne eksisterer: må være mellom 1 og 40 tegn, og kun inneholde bokstaver (a-å, A-Å), tall og spesialtegnene - og /            | 
| Oppdragsgivers kravidentifikator eksisterer allerede            | oppdragsgivers-kravidentifikator-eksisterer-allerede            | 422         |                                                                                                                                       | 
| Ugyldig fastsettelsesdato                                       | ugyldig-fastsettelsesdato                                       | 422         | Kan ikke være i fremtiden                                                                                                             | 
| Ugyldig foreldelsesfristens utgangspunkt                        | ugyldig-foreldelsesfristens-utgangspunkt                        | 422         | Må være tidligere enn fastsettelsesdato                                                                                               | 
| Foreldelsesfristens utgangspunkt eldre enn 2 aar og 10 maaneder | foreldelsesfristens-utgangspunkt-eldre-enn-2-aar-og-10-maaneder | 422         |                                                                                                                                       | 
| Ugyldig tilleggsfrist etter foreldelsesloven                    | ugyldig-tilleggsfrist-etter-foreldelsesloven                    | 422         | Kan ikke være angitt når foreldelsesfristensUtgangspunkt er angitt                                                                    | 
| Tilleggsfrist etter foreldelsesloven eldre enn 10 maaneder      | tilleggsfrist-etter-foreldelsesloven-eldre-enn-10-maaneder      | 422         | tilleggsfristEtterForeldelsesloven kan ikke være mer enn 10 måneder tilbake i tid                                                     | 
| Ugyldig skyldners identifikator                                 | ugyldig-skyldners-identifikator                                 | 422         | Må være et gyldig personnummer dersom skyldneren er en person, og et gyldig organisasjonsnummer dersom skyldneren er en organisasjon. | 
| Ugyldig kravtype                                                | ugyldig-kravtype                                                | 422         | Kravtypen må tilhøre oppdragsgiveren                                                                                                  | 
| Rentebeloep er ikke over 0                                      | rentebeloep-er-ikke-over-0                                      | 422         |                                                                                                                                       | 
| Ugyldig renterilagtdato                                         | ugyldig-renterilagtdato                                         | 422         | Kan ikke være i fremtiden                                                                                                             | 
| Ytelser for avregning er ikke over 0                            | ytelser-for-avregning-er-ikke-over-0                            | 422         |                                                                                                                                       | 
| Ugyldig tilbakekrevingsperiode                                  | ugyldig-tilbakekrevingsperiode                                  | 422         | `fom` må være i fortiden. `tom` kan ikke være i fremtiden. `tom` må være etter `fom`.                                                 | 
| Ugyldig tilleggsinformasjon                                     | ugyldig-tilleggsinformasjon                                     | 400         | Må være oppgitt om påkrevd for oppdragsgiver og være på rett format                                                                   |  

### Felles valideringsregler for alle de øvrige endepunktene

Dette inkluderer endepunktene hent valideringsfeil og hent mottaksstatus.

| Title i feilobjekt                       | Siste del av type-felt i feilobjekt      | Http-status | Merknad                                                                                                                                                                                                         |
|------------------------------------------|------------------------------------------|-------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Ugyldig kravidentifikator                | ugyldig-kravidentifikator                | 422         | Dersom kravidentifikatortype settes til `SKATTEETATENS_KRAVIDENTIFIKATOR`, valideres det at kravidentifikatoren er en gyldig UUID.                                                                              |
| Ugyldig oppdragsgivers kravidentifikator | ugyldig-oppdragsgivers-kravidentifikator | 422         | Dersom kravidentifikatortype settes til `OPPDRAGSGIVERS_KRAVIDENTIFIKATOR`, valideres det at kravidentifikatoren er mellom 1 og 40 tegn, og kun inneholder bokstaver (a-å, A-Å), tall og spesialtegnene - og /. |
| Innkrevingsoppdrag eksisterer ikke       | innkrevingsoppdrag-eksisterer-ikke       | 404         |                                                                                                                                                                                                                 |

### Valideringsregler for endring av hovedstol

| Title i feilobjekt                           | Siste del av type-felt i feilobjekt          | Http-status | Merknad                                         |
|----------------------------------------------|----------------------------------------------|-------------|-------------------------------------------------|
| Hovedstol er ikke over 0                     | hovedstol-er-ikke-over-0                     | 422         |                                                 |
| Innkrevingsoppdrag er ikke reskontrofoert    | innkrevingsoppdrag-er-ikke-reskontrofoert    | 409         | Må være reskontroført for å kunne endres        |
| Avskrevet innkrevingsoppdrag kan ikke endres | avskrevet-innkrevingsoppdrag-kan-ikke-endres | 409         | Et avskrevet innkrevingsoppdrag kan ikke endres |

### Valideringsregler for endring av renter

| Title i feilobjekt                           | Siste del av type-felt i feilobjekt          | Http-status | Merknad                                         |
|----------------------------------------------|----------------------------------------------|-------------|-------------------------------------------------|
| Rentebeloep er under 0                       | rentebeloep-er-under-0                       | 422         |                                                 |
| Innkrevingsoppdrag er ikke reskontrofoert    | innkrevingsoppdrag-er-ikke-reskontrofoert    | 409         | Må være reskontroført for å kunne endres        |
| Avskrevet innkrevingsoppdrag kan ikke endres | avskrevet-innkrevingsoppdrag-kan-ikke-endres | 409         | Et avskrevet innkrevingsoppdrag kan ikke endres |

### Valideringsregler for ny oppdragsgivers referanse

| Title i feilobjekt                           | Siste del av type-felt i feilobjekt          | Http-status | Merknad                                         |
|----------------------------------------------|----------------------------------------------|-------------|-------------------------------------------------|
| Innkrevingsoppdrag er ikke reskontrofoert    | innkrevingsoppdrag-er-ikke-reskontrofoert    | 409         | Må være reskontroført for å kunne endres        |
| Avskrevet innkrevingsoppdrag kan ikke endres | avskrevet-innkrevingsoppdrag-kan-ikke-endres | 409         | Et avskrevet innkrevingsoppdrag kan ikke endres |

### Valideringsregler for avskriving

| Title i feilobjekt                              | Siste del av type-felt i feilobjekt             | Http-status | Merknad                                                    |
|-------------------------------------------------|-------------------------------------------------|-------------|------------------------------------------------------------|
| Innkrevingsoppdrag er ikke reskontrofoert       | innkrevingsoppdrag-er-ikke-reskontrofoert       | 409         | Må være reskontroført for å kunne avskrives                |
| Avskrevet innkrevingsoppdrag kan ikke avskrives | avskrevet-innkrevingsoppdrag-kan-ikke-avskrives | 409         | Et avskrevet innkrevingsoppdrag kan ikke avskrives på nytt |

### Valideringsregler for henting av grensesnittavstemming

| Title i feilobjekt                        | Siste del av type-felt i feilobjekt       | Http-status | 
|-------------------------------------------|-------------------------------------------|-------------|
| Innkrevingsoppdrag er ikke reskontrofoert | innkrevingsoppdrag-er-ikke-reskontrofoert | 404         |