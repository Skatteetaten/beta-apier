# Beskrivelse av tjenester

Lenke til API-dokumentasjonen finnes i menyen til venstre.
Under følger en beskrivelse av hvordan de ulike tjenestene brukes, og eventuelle hensyn som må tas.

## Opprett et innkrevingsoppdrag

Et innkrevingsoppdrag opprettes i Skatteetatens innkrevingssystemer ved et POST-kall
til `/api/innkreving/innkrevingsoppdrag/v1/innkrevingsoppdrag`. Et vellykket kall returnerer en 201-statuskode sammen
med en *kravidentifikator*, som er Skatteetatens referanse til innkrevingsoppdraget.

Denne kravidentifikatoren bør oppdragsgiver ta vare på for sporbarhet.

Se deretter [mottaksbekreftelse](./mottaksbekreftelse).

### Validering

Tjenesten gjør validering av `OpprettInnkrevingsoppdragRequest`-objektet som er meldingskroppen i POST-kallet. Denne
valideringen sikrer at alle nødvendige felter er korrekt utfylt og at dataene stemmer overens med tjenestens
API-spesifikasjon. Ved valideringsfeil returneres HTTP statuskode 422 samt informasjon om valideringsfeilen.
Oppdragsgiver må deretter korrigere innkrevingsoppdraget og sende det inn på nytt. *Merk: Etter korreksjon kan det
oppstå ytterligere valideringsfeil fra påfølgende valideringsregler ettersom valideringsreglene utføres sekvensielt.*

Etter at kallet er prosessert, foretas en ekstra asynkron validering. Her sjekkes det om innholdet i
innkrevingsoppdraget gjør det mulig for Skatteetaten å kreve inn. **Det betyr at en HTTP 201-statuskode fra
`/api/innkreving/innkrevingsoppdrag/v1/innkrevingsoppdrag` bekrefter mottak av et innkrevingsoppdrag, men gir ikke
bekreftelse på at Skatteetaten har tatt over ansvaret og kan kreve det inn.**

    Seksjonen vil utvides med anbefalt arbeidsflyt for å håndtere dette.

Per nå er eneste valideringsregel for NAVs tilbakekrevingskrav at det gjøres et oppslag mot Folkeregisteret for å
sikre at skyldneren både er en reell person og at vedkommende fortsatt er i live.

    Seksjonen vil utvides etterhvert som flere oppdragsgivere og typer krav støttes.

### Feilhåndtering

I tilfeller hvor klienten opplever nettverksfeil eller andre usikkerheter ved opprettelse av nye innkrevingsoppdrag, og
er usikker på om kravet faktisk har blitt opprettet hos Skatteetaten, anbefales det å sende kravet på nytt. Tjenesten
vår sikrer unikhet på `oppdragsgiversKravidentifikator`. Dersom kravet allerede finnes i vårt system, vil det returneres
en HTTP 422-statuskode med en beskrivende feilmelding. Hvis det ikke finnes, vil innkrevingsoppdraget bli opprettet og
prosessert.

## Endre et innkrevingsoppdrag

Innkrevingsoppdrag kan endres ved et PUT-kall til endepunktet
`/api/innkreving/innkrevingsoppdrag/v1/innkrevingsoppdrag/endring`. Endrings-tjenesten brukes til å gjøre korreksjoner
på et innkrevingsoppdrag, f.eks. der skyldner har betalt deler av beløpet til oppdragsgiver. Hvis et nytt vedtak fattes
hos oppdragsgiver, slik at det i praksis er snakk om et nytt krav, bør det opprinnelige innkrevingsoppdraget
antageligvis [avskrives](#avskriv-et-innkrevingsoppdrag), før det [opprettes et nytt](#opprett-et-innkrevingsoppdrag).

Merk at et innkrevingsoppdrag ikke kan endres umiddelbart etter opprettelse; det kan først endres etter at Skatteetaten
har reskontroført det. Ved normal oppførsel skjer dette tilnærmet øyeblikkelig.

### Validering

Tjenesten foretar en synkron validering av at det innkommende `EndringRequest`-objektet er iht. Openapi-spesifikasjonen.
Ved valideringsfeil vil endepunktet returnere en HTTP 422-statuskode med en beskrivende feilmelding.

### Feilhåndtering

I tilfeller hvor klienten opplever nettverksfeil eller andre usikkerheter ved endring av et innkrevingsoppdrag, og er
usikker på om kravet faktisk ble endret hos Skatteetaten, anbefales det å sende forespørselen på nytt. Den samme
endringen kan sendes inn et vilkårlig antall ganger med samme resultat. Dersom en allerede eksisterende gyldig endring
sendes inn på nytt, vil det fremdeles returneres en HTTP 200-statuskode.

## Avskriv et innkrevingsoppdrag

Innkrevingsoppdrag kan avskrives ved et POST-kall til endepunktet
`/api/innkreving/innkrevingsoppdrag/v1/innkrevingsoppdrag/avskriving`. Endepunktet benyttes når oppdragsgiver mener at
kravet ikke lenger skal innkreves.

### Validering

Tjenesten foretar en synkron validering av at det innkommende `AvskrivingRequest`-objektet er iht.
Openapi-spesifikasjonen. Ved valideringsfeil vil endepunktet returnere en HTTP 422-statuskode med en beskrivende
feilmelding.

### Feilhåndtering

I tilfeller hvor klienten opplever nettverksfeil eller andre usikkerheter ved avskriving av innkrevingsoppdrag, og
er usikker på om kravet faktisk ble avskrevet hos Skatteetaten, anbefales det å sende forespørselen på nytt.

Et innkrevingsoppdrag som allerede er avskrevet, kan ikke avskrives på nytt. I slike tilfeller returneres en HTTP
409-statuskode med en feilmelding.

# Hent valideringsfeil for et innkrevingsoppdrag

Eventuelle valideringsfeil fra [den asynkrone valideringen ved opprettelse av et innkrevingsoppdrag](#validering) kan
hentes ut ved et GET-kall til endepunktet
`/api/innkreving/innkrevingsoppdrag/v1/innkrevingsoppdrag/{kravidentifikator}/valideringsfeil`.

Dersom den asynkrone valideringen ikke resulterte i noen valideringsfeil, returneres en tom liste.