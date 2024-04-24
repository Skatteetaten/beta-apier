# Anbefalinger for bruk

Denne siden gir anbefalinger for bruk av Skatteetatens (SKE) tjenester for oppdragsinnkreving.

### Varsling av skyldner før innkreving

Før kravet overføres til innkreving må oppdragsgiver sørge for at informasjon om kravet er sendt ut til skyldner.
Oppdragsgiver må sørge for dette slik at vi unngår situasjoner hvor vi kan risikere at skylder får faktura på betaling
av kravet før vedkommende har fått informasjon om kravet.

### Etablering av datalager for dataoverførsel til Skatteetaten

For å sikre effektiv
håndtering og etterlevelse av Reglement for økonomistyring i staten, anbefales det å etablere et datalager for alle data
som overføres til Skatteetaten. Dette datalageret bør inkludere:

- Skatteetatens kravidentifikator, som mottas i retur
  ved [opprettelse av et innkrevingsoppdrag](beskrivelse-av-tjenester.md#opprett-et-innkrevingsoppdrag) hos SKE.
- Mottaksstatus, i henhold til [flyt for mottaksbekreftelse](beskrivelse-av-tjenester.md#hent-mottaksbekreftelse).
- Kravgrunnlaget, eller en referanse til dette.
- Transaksjonsid, som mottas i retur ved [endringer](beskrivelse-av-tjenester.md#endre-et-innkrevingsoppdrag).
- [Grensesnittavstemming](beskrivelse-av-tjenester.md#grensesnittavstemming-av-et-innkrevingsoppdrag).

I henhold til Reglement for økonomistyring i staten, er det viktig at oppdragsgivere som sender innkrevingsoppdrag til
Skatteetaten tar vare på kravidentifikatoren de mottar i retur. Denne identifikatoren, som er en del av
transaksjonskontrollen, bidrar til å sikre sporbarheten til kravet. Ved å ta vare på kravidentifikatoren, kan
oppdragsgiveren effektivt følge opp og verifisere statusen på det aktuelle kravet.

### Utfylling av feltet `oppdragsgiversKravidentifikator` i `OpprettInnkrevingsoppdragRequest`

I tillegg vil vi anbefale å fylle ut feltet `oppdragsgiversKravidentifikator` i `OpprettInnkrevingsoppdragRequest`
-objektet ved [opprettelse av innkrevingsoppdrag](beskrivelse-av-tjenester.md#opprett-et-innkrevingsoppdrag) med en unik
identifikator. Dette muliggjør å følge mønsteret
for [feilhåndtering ved opprettelse av krav](beskrivelse-av-tjenester.md#feilhåndtering), ettersom løsningen sikrer
unikhet på feltet `oppdragsgiversKravidentifikator`. Dersom man ikke har en unik identifikator her, kan man for eksempel
bruke en identifikator fra overføringstabellen sin.


