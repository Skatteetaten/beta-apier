# Skisser

Figuren under viser arkitekturen:

![Oversikt](bilder/oversikt.png)

## Beskrivelse:
Skatteetaten etablerer en ny utleggstrekksak og oppretter en JSON-melding om dette i utleggstrekk-API
1. Send informasjon om nytt trekkpålegg til arbeidsgiver via Dialogporten
2. Arbeidsgiver henter trekkpålegg fra Skatteetaten. 
   - 2a SBS henter et systembrukertoken fra Maskinporten 
   - 2b SBS utfører kall (get) mot trekkpålegg-API for å hente trekkpålegg

Trekkpliktig arbeidsgiver kan også hente de samme trekkpåleggene fra Altinn-innboksen i Digdirs Felles arbeidsflate. En slik løsning vil videreføres også i fremtiden.