# Testing

## Krav til testgjennomføring

Systemleverandørene har ansvar for egen testgjennomføring. Det må fokuseres på at validerings- og innsendingstjenestene
fungerer som forventet.
Prosjektet bistår med feilsøk, evt. Feilretting og ved behov oppfølging av saker som er sendt inn i testmiljøet.

## Testmiljø og testdata

Systemleverandørene må ha testmiljøer som kun består av syntetiske data
Det skal brukes testdata fra ‘Syntetisk Norge’ og disse hentes ut med Tenor Testdatasøk i de meldingene som sendes inn.
Vedlegg skal også kun inneholde syntetiske testdata.
Her finnes en bruksveiledning for Tenor Testdatasøk.
Oppkobling mot testmiljøet i Skatteetaten skjer via Maskinporten, se egen underside.

Testmiljøet til Skatteetaten vil i utgangspunktet være tilgjengelig 24/7, men det kan ikke forventes teknisk support
eller restart av miljøet hvis det går ned utenfor ordinær arbeidstid (kl. 8 – 15:45 alle ukedager). Miljø kan også være
nede på kveldstid og i helger på grunn av vedlikehold.

URL til testmiljøet er
```    https://api-test.sits.no/api/utleggsbegjaering/v0 ```

## Testplan

|        | Forventet oppstart      | Innhold                                                                                                                                                             |
|--------|-------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Test 1 | I løpet av oktober 2024 | Innsending med tilbakemelding om at melding er mottatt (201 med saksref eller 4xx) <br/>Tilgang til valideringstjenesten før innsending (logisk kontroll og format) |
| Test 2 | Desember 2024           | Hent status på sak                                                                                                                                                  | 