# Beskrivelse av tjenester

Det er lenket til API-dokumentasjonen til tjenestene i menyen til venstre.
Under følger en beskrivelse av hvordan de ulike tjenestene brukes, og eventuelle hensyn som må tas.

# Opprett et innkrevingsoppdrag

Et innkrevingsoppdrag kan opprettes i Skatteetatens innkrevingssystemer ved et POST-kall til endepunktet
`/api/v1/innkrevingsoppdrag`. Et vellykket kall returnerer en 201-statuskode sammen
med en *kravidentifikator*, som er Skatteetatens referanse til innkrevingsoppdraget.

### Validering

Tjenesten foretar en synkron validering av det innkommende `OpprettInnkrevingsoppdragRequest`-objektet som utgjør
meldingskroppen i POST-forespørselen. Denne valideringen sikrer at alle nødvendige felter er korrekt utfylt og at dataen
stemmer overens med tjenestens API-spesifikasjon. Ved valideringsfeil vil endepunktet returnere en HTTP
422-statuskode med informasjon om valideringsfeilen. Klienten må deretter korrigere innkrevingsoppdraget og sende det
inn på nytt. *Merk: Etter korreksjon kan det oppstå ytterligere valideringsfeil fra påfølgende valideringsrgeler
ettersom valideringsreglene utføres sekvensielt.*

Når tjenestekallet har blitt prosessert, foretas en ekstra asynkron validering. Det gjøres et oppslag mot
Folkeregisteret for å sikre at skyldneren ikke bare er en reell person, men også at vedkommende fortsatt er i live.
**Det betyr at en HTTP 201-statuskode fra `/api/v1/innkrevingsoppdrag` bekrefter mottak av et innkrevingsoppdrag, men
gir ikke bekreftelse på at det har blitt videresendt til korrekt innkrevingssystem.** Det forventes at konsumenten gjør
et kall til [hent valideringsfeil-endepunktet](#hent-valideringsfeil-for-et-innkrevingsoppdrag) for å verifisere at det
ikke har oppstått valideringsfeil i den asynkrone valideringen. Asynkrone valideringsfeil kan hentes i
GET-endepunktet`/api/v1/innkrevingsoppdrag/{kravidentifikator}/valideringsfeil`.

### Håndtering av nettverksfeil og usikkerhet rundt opprettelse av krav

I tilfeller hvor klienten opplever nettverksfeil eller andre usikkerheter ved opprettelse av nye innkrevingsoppdrag, og
er usikker på om kravet faktisk har blitt opprettet hos Skatteetaten, anbefales det å sende kravet på nytt. Tjenesten
vår sikrer unikhet på `oppdragsgiversKravidentifikator`. Dersom kravet allerede finnes i vårt system, vil det returneres
en HTTP 422-statuskode med en beskrivende feilmelding. Hvis det ikke finnes, vil innkrevingsoppdraget bli opprettet og
prosessert.

# Endre et innkrevingsoppdrag

Innkrevingsoppdrag kan endres ved et PUT-kall til endepunktet `/api/v1/innkrevingsoppdrag/endring`. Endrings-endepunktet
brukes til å gjøre korreksjoner på et innkrevingsoppdrag. Hvis et nytt vedtak fattes hos oppdragsgiver, bør det
opprinnelige innkrevingsoppdraget antageligvis [avskrives](#avskriv-et-innkrevingsoppdrag), før
det [opprettes et nytt](#opprett-et-innkrevingsoppdrag).

Et vellykket kall returnerer en HTTP 200-statuskode. Et innkrevingsoppdrag kan ikke endres umiddelbart etter at det er
opprettet. Etter den asynkrone valideringen beskrevet
under [validering ved oppretting av et innkrevingsoppdrag](#validering), sendes innkrevingsoppdraget, dersom
valideringen gikk i orden, videre til korrekt innkrevingssystem. Først når innkrevingsoppdraget er reskontroført i
innkrevingssystemet er det mulig å benytte dette endepunktet. Hele prosessen kan ta fra noen sekunder opptil et minutt,
avhengig av belastningen på tjenesten.

### Validering

Tjenesten foretar en synkron validering av det innkommende `EndringRequest`-objektet som utgjør meldingskroppen i
PUT-forespørselen. Det valideres at endringen som forespørres er gyldig. Ved valideringsfeil vil endepunktet returnere
en HTTP 422-statuskode med en beskrivende feilmelding.

### Håndtering av nettverksfeil og usikkerhet rundt endring av krav

I tilfeller hvor klienten opplever nettverksfeil eller andre usikkerheter ved endring av et innkrevingsoppdrag, og
er usikker på om kravet faktisk ble endret hos Skatteetaten, anbefales det å sende forespørselen på nytt. Den samme
endringen kan sendes inn et vilkårlig antall ganger med samme resultat. Dersom en allerede eksisterende gyldig endring
sendes inn på nytt, vil det fremdeles returneres en HTTP 200-statuskode.

# Avskriv et innkrevingsoppdrag

Innkrevingsoppdrag kan avskrives ved et POST-kall til endepunktet `/api/v1/innkrevingsoppdrag/avskriving`. Endepunktet
benyttes når oppdragsgiver mener at kravet ikke lenger skal innkreves. En vellykket avskriving returnerer en HTTP
200-statuskode. Tilsvarende som ved endring, kan ikke et innkrevingsoppdrag avskrives umiddelbart etter opprettelse;
den asynkrone valideringen og reskontroføringen av innkrevingsoppdraget må utføres først.

### Validering

Tjenesten foretar en synkron validering av det innkommende `AvskrivingRequest`-objektet som utgjør meldingskroppen i
POST-forespørselen. Det valideres at avskrivingen er gyldig.

### Håndtering av nettverksfeil og usikkerhet rundt avskriving av krav

I tilfeller hvor klienten opplever nettverksfeil eller andre usikkerheter ved avskriving av innkrevingsoppdrag, og
er usikker på om kravet faktisk ble avskrevet hos Skatteetaten, anbefales det å sende forespørselen på nytt. *Et
allerede avskrevet innkrevingsoppdrag kan ikke avskrives på nytt.* Da vil det returneres en HTTP 409-statuskode med en
feilmelding.

# Hent valideringsfeil for et innkrevingsoppdrag

Eventuelle valideringsfeil fra [den asynkrone valideringen ved opprettelse av et innkrevingsoppdrag](#validering) kan
hentes ut ved et GET-kall til endepunktet `/api/v1/innkrevingsoppdrag/{kravidentifikator}/valideringsfeil`,
hvor `kravidentifikator` er Skatteetatens referanse til innkrevingsoppdraget. Et vellykket kall returnerer en HTTP
200-statuskode. Dersom den asynkrone valideringen ikke resulterte i noen valideringsfeil, returneres en tom liste. *Dette
er en bekreftelse på at innkrevingsoppdraget har blitt oversendt til korrekt innkrevingssystem*. Ved valideringsfeil vil
en liste av valideringsfeil returneres. Da har ikke innkrevingsoppdraget blitt overført til korrekt innkrevingssystem. 