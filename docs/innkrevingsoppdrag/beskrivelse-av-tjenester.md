# Beskrivelse av tjenester

Lenke til API-dokumentasjonen finnes i menyen til venstre. Under følger en beskrivelse av hvordan de ulike tjenestene
brukes, og eventuelle hensyn som må tas.

*Seksjonen vil utvides etter hvert som flere oppdragsgivere og typer krav støttes.*

## Innholdsfortegnelse

<!-- TOC -->

* [Beskrivelse av tjenester](#beskrivelse-av-tjenester)
    * [Innholdsfortegnelse](#innholdsfortegnelse)
    * [Opprett et innkrevingsoppdrag](#opprett-et-innkrevingsoppdrag)
        * [Synkron validering ved mottak](#synkron-validering-ved-mottak)
        * [Asynkron validering](#asynkron-validering)
        * [Hent mottaksbekreftelse](#hent-mottaksbekreftelse)
        * [Hent valideringsfeil](#hent-valideringsfeil)
        * [Feilhåndtering](#feilhåndtering)
    * [Endre et innkrevingsoppdrag](#endre-et-innkrevingsoppdrag)
        * [Synkron validering ved mottak](#synkron-validering-ved-mottak-1)
        * [Asynkron validering](#asynkron-validering-1)
        * [Feilhåndtering](#feilhåndtering-1)
    * [Avskriv et innkrevingsoppdrag](#avskriv-et-innkrevingsoppdrag)
        * [Synkron validering ved mottak](#synkron-validering-ved-mottak-2)
        * [Asynkron validering](#asynkron-validering-2)
        * [Feilhåndtering](#feilhåndtering-2)
    * [Avstemming av et innkrevingsoppdrag](#avstemming-av-et-innkrevingsoppdrag)

<!-- TOC -->

## Opprett et innkrevingsoppdrag

Et innkrevingsoppdrag opprettes i Skatteetatens innkrevingssystemer ved et POST-kall
til  `/api/innkreving/innkrevingsoppdrag/v1/innkrevingsoppdrag`. Før innkrevingsoppdraget blir reskontroført og
Skatteetaten overtar ansvaret for innkrevingen gjøres det en validering. Valideringen skjer i to omganger; synkront og
asynkront, beskrevet under.

### Synkron validering ved mottak

Tjenesten gjør validering av `OpprettInnkrevingsoppdragRequest`-objektet som er meldingskroppen i POST-kallet. Denne
valideringen sikrer at alle nødvendige felter er korrekt utfylt og at dataene stemmer overens med tjenestens
API-spesifikasjon.

Et vellykket kall returnerer kvittering med en 201-statuskode sammen med en _kravidentifikator_, som er Skatteetatens
referanse til innkrevingsoppdraget. Denne _kravidentifikatoren_ bør oppdragsgiver ta vare på for sporbarhet, og for
senere å kunne referere til kravet.

**HTTP statuskode 201 bekrefter at Skatteetaten har *mottatt* innkrevingsoppdraget. Skatteetaten har enda ikke tatt over
ansvaret for innkrevingen - Se [asynkron validering](#asynkron-validering).**

Ved valideringsfeil returneres HTTP statuskode 422 samt informasjon om valideringsfeilen. Oppdragsgiver må deretter
korrigere innkrevingsoppdraget og sende det inn på nytt. *Merk: Etter korreksjon kan det oppstå ytterligere
valideringsfeil fra påfølgende valideringsregler ettersom valideringsreglene utføres sekvensielt.*

### Asynkron validering

Etter vellykket synkron validering (HTTP statuskode 201), foretas en *ekstra* asynkron validering. Her gjøres det en mer
funksjonell sjekk på at innholdet i innkrevingsoppdraget er mulig for Skatteetaten å kreve inn. Se [hent
mottaksbekreftelse](#hent-mottaksbekreftelse).

**Når mottaksstatus er `RESKONTROFOERT` er mottaket vellykket, og ansvaret for videre oppfølging (innkreving) ligger hos
Skatteetaten.**

Ved valideringsfeil vil mottaksstatus settes til `VALIDERINGSFEIL`. Da må feilene rettes av oppdragsgiver, og oppdatert
innkrevingsoppdrag må sendes inn på nytt. Ansvaret for oppfølging ligger da hos oppdragsgiver.
Se [hent valideringsfeil](#hent-valideringsfeil).

*Seksjonen vil utvides med dokumentasjon som beskriver valideringsreglene pr kravtype.*

### Hent mottaksbekreftelse

1. Opprett nytt innkrevingsoppdrag med POST-kall til `/api/innkreving/innkrevingsoppdrag/v1/innkrevingsoppdrag` (Se
   "Opprett et innkrevingsoppdrag"
   i [SwaggerHub](https://app.swaggerhub.com/apis-docs/skatteetaten/oppdragsinnkreving-api/)).
    * Kallet er vellykket og får en kvittering (201-statuskode) med en kravidentifikator.

2. Etter noen sekunder kan mottaksstatus hentes ved å gjøre GET-kall med kravidentifikatoren
   til `/api/innkreving/innkrevingsoppdrag/v1/innkrevingsoppdrag/{kravidentifikator}/mottaksstatus` (se
   "Hent mottaksstatus for et innkrevingsoppdrag"
   i [SwaggerHub](https://app.swaggerhub.com/apis-docs/skatteetaten/oppdragsinnkreving-api/)).

    * Hvis mottaksstatus er `MOTTATT_UNDER_BEHANDLING`, behandler Skatteetaten det fortsatt.
        * Ansvaret for oppfølging ligger hos Skatteetaten.
    * Hvis mottaksstatus er `VALIDERINGSFEIL`, må valideringsfeil hentes ved GET-kall
      til `/api/innkreving/innkrevingsoppdrag/v1/innkrevingsoppdrag/{kravidentifikator}/valideringsfeil` (se
      "Hent valideringsfeil for et innkrevingsoppdrag"
      i [SwaggerHub](https://app.swaggerhub.com/apis-docs/skatteetaten/oppdragsinnkreving-api/)). Deretter må
      feilene rettes, og oppdatert innkrevingsoppdrag må sendes inn på nytt.
        * NB! Ansvaret for oppfølging ligger hos oppdragsgiver.

    * Hvis mottaksstatus er `RESKONTROFOERT` er mottaket vellykket.
        * Ansvaret for oppfølging ligger hos Skatteetaten.

### Hent valideringsfeil

Eventuelle valideringsfeil
fra [den asynkrone valideringen ved opprettelse av et innkrevingsoppdrag](#asynkron-validering) kan hentes ut ved et
GET-kall til endepunktet `/api/innkreving/innkrevingsoppdrag/v1/innkrevingsoppdrag/{kravidentifikator}/valideringsfeil`.

Dersom den asynkrone valideringen ikke har resultert i noen valideringsfeil, returneres en tom liste.

### Feilhåndtering

Tjenesten for opprettelse av nye krav sikrer unikhet på `oppdragsgiversKravidentifikator`. Dersom man følger
[anbefalinger for bruk av tjenestene våre](anbefalinger-for-bruk.md#fyll-ut-feltet-oppdragsgiverskravidentifikator-i-opprettinnkrevingsoppdragrequest)
og fyller ut dette feltet, kan man sende oppdraget på nytt hvis man av ulike grunner er usikker på om kravet faktisk har
blitt opprettet hos Skatteetaten. Dersom kravet allerede finnes i vårt system, vil det returneres
en HTTP 422-statuskode med en beskrivende feilmelding. Hvis det ikke finnes, vil innkrevingsoppdraget bli opprettet og
prosessert. *Dette mønsteret for feilhåndtering kan kun benyttes om `oppdragsgiversKravidentifikator` er utfylt.*

## Endre et innkrevingsoppdrag

Innkrevingsoppdrag kan endres ved et PUT-kall til følgende endepunkter:

* `/api/innkreving/innkrevingsoppdrag/v1/innkrevingsoppdrag/{kravidentifikator}/hovedstol`
* `/api/innkreving/innkrevingsoppdrag/v1/innkrevingsoppdrag/{kravidentifikator}/renter`
* `/api/innkreving/innkrevingsoppdrag/v1/innkrevingsoppdrag/{kravidentifikator}/oppdragsgiversreferanse`

Endrings-tjenestene brukes til å gjøre korreksjoner på et innkrevingsoppdrag, f.eks. der skyldner har betalt deler av
beløpet til oppdragsgiver og det er behov for å nedjustere hovedstolen.

Merk at et innkrevingsoppdrag ikke kan endres umiddelbart etter opprettelse; det kan først endres etter at
Skatteetaten har reskontroført det. Ved normal drift vil dette skje tilnærmet øyeblikkelig.

### Synkron validering ved mottak

Tjenesten foretar en synkron validering av at det innkommende forespørsels-objektet for endring er iht.
OpenAPI-spesifikasjonen.

Et vellykket kall returnerer kvittering med en 200-statuskode sammen med en _transaksjonsid_ som er Skatteetatens
referanse til endringen. Denne _transaksjonsiden_ bør oppdragsgiver ta vare på for sporbarhet, og for senere å kunne
referere til endringen.

**HTTP 200-statuskode bekrefter at Skatteetaten har mottatt og tatt ansvaret for at endringen blir utført.**

Ved valideringsfeil vil endepunktet returnere en HTTP 422-statuskode med en beskrivende feilmelding.

### Asynkron validering

Det gjøres per nå ingen asynkron validering på noen av endepunktene for endring.

Det gis per nå ingen mottaksstatus på endringer, f.eks. om en endring er reskontroført. Dersom det oppstår feil utover
synkron validering, og oppdragsgiver må foreta seg noe, vil varsling skje manuelt. Automatisk varsling vil kunne
etableres sammen med nye innkrevingsløsninger.

### Feilhåndtering

I tilfeller hvor klienten opplever nettverksfeil eller andre usikkerheter ved endring av et innkrevingsoppdrag, og er
usikker på om kravet faktisk ble endret hos Skatteetaten, anbefales det å sende forespørselen på nytt. Den samme
endringen kan sendes inn et vilkårlig antall ganger med samme resultat. Dersom en allerede eksisterende gyldig endring
sendes inn på nytt, vil det fremdeles returneres en HTTP 200-statuskode.

## Avskriv et innkrevingsoppdrag

Innkrevingsoppdrag kan avskrives ved et POST-kall til
endepunktet `/api/innkreving/innkrevingsoppdrag/v1/innkrevingsoppdrag/avskriving`. Endepunktet benyttes når
oppdragsgiver mener at kravet ikke lenger skal kreves inn, eksempelvis fordi oppdragsgiver har frafalt kravet.

Merk at et innkrevingsoppdrag ikke kan avskrives umiddelbart etter opprettelse; det kan først avskrives etter at
Skatteetaten har reskontroført det. Ved normal drift vil dette skje tilnærmet øyeblikkelig.

### Synkron validering ved mottak

Tjenesten foretar en synkron validering av at det innkommende `AvskrivingRequest`-objektet er iht.
OpenAPI-spesifikasjonen.

Et vellykket kall returnerer kvittering med en 200-statuskode sammen med en _transaksjonsid_ som er Skatteetatens
referanse til avskrivingen. Denne _transaksjonsiden_ bør oppdragsgiver ta vare på for sporbarhet, og for senere å kunne
referere til avskrivingen.

**HTTP 200-statuskode bekrefter at Skatteetaten har mottatt og tatt ansvaret for at avskrivingen blir utført.**

Ved valideringsfeil vil endepunktet returnere en HTTP 422-statuskode med en beskrivende feilmelding.

### Asynkron validering

Det gjøres per nå ingen asynkron validering ved avskriving.

Det gis per nå ingen mottaksstatus på avskrivinger. F.eks. om avskrivningen er reskontroført. Dersom det oppstår feil
utover synkron validering, og oppdragsgiver må foreta seg noe, vil varsling skje manuelt. Automatisk varsling vil kunne
etableres sammen med nye innkrevingsløsninger.

### Feilhåndtering

I tilfeller hvor klienten opplever nettverksfeil eller andre usikkerheter ved avskriving av innkrevingsoppdrag, og er
usikker på om kravet faktisk ble avskrevet hos Skatteetaten, anbefales det å sende forespørselen på nytt.
Et innkrevingsoppdrag som allerede er avskrevet, kan ikke avskrives på nytt. I slike tilfeller returneres en HTTP
409-statuskode med en feilmelding.

## Avstemming av et innkrevingsoppdrag

Tjenesten gjør det mulig for oppdragsgiver å avstemme at krav, endringer på krav og avskrivinger er registrert korrekt i
Skatteetatens kravmottak. Et innkrevingsoppdrag kan avstemmes ved et GET-kall til endepunktet
`/api/innkreving/innkrevingsoppdrag/v1/innkrevingsoppdrag/{kravidentifikator}/avstemming`.

Tjenesten returnerer for en gitt kravidentifikator:

- Skatteetatens kravidentifikator for oppdraget
- Oppdragsgivers kravidentifikator (dersom den ble oversendt i det opprinnelige innkrevingsoppdraget)
- De forespørslene som oppdragsgiver har sendt, i samme format som de ble sendt, med tidspunkt for mottak:
    - Det opprinnelige kravet
    - Eventuelle endringer på kravet, med transaksjonsid
    - Eventuell avskriving av kravet, med transaksjonsid
 