# Felles valideringsregler

Valideringsreglene på denne siden er felles for alle oppdragsgivere.

## Synkrone valideringsregler

Ved feil i synkrone valideringer returneres et responsobjekt som
følger [RFC 7807-formatet](https://datatracker.ietf.org/doc/html/rfc7807). Et eksempel på en valideringsfeil for
"Ugyldig fastsettelsesdato" vises nedenfor:

```json
{
  "type": "tag:skatteetaten.no,2024:innkreving:innkrevingsoppdrag:ugyldig-fastsettelsesdato",
  "title": "Ugyldig fastsettelsesdato",
  "status": 422,
  "detail": "Ugyldig fastsettelsesdato=2024-04-20. Fastsettelsesdatoen kan ikke være i fremtiden",
  "instance": "/api/innkreving/innkrevingsoppdrag/v1/innkrevingsoppdrag"
}
```

Tabellene nedenfor beskriver verdiene til de ulike delene av responsobjektet. Kolonnen **"Title i feilobjekt"** viser
verdien satt i `title`-feltet; i dette tilfellet `Ugyldig fastsettelsesdato`. **"Siste del av type-felt i feilobjekt"**
viser hva som settes etter det siste kolonet i `type`-feltet; i dette tilfellet `ugyldig-fastsettelsesdato`.
HTTP-statuskoden i `status`-feltet er oppført i kolonnen **"Http-status"**. Disse tre verdiene er konstante og kan
benyttes til å utvikle feilhåndteringslogikk. Feltet `detail` gir ytterligere detaljer om feilen og vil variere avhengig
av feilens årsak. Feltet `instance` viser hvilket endepunkt som er kalt.

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