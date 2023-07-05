# Teknisk dokumentasjon

## Tilgang til tjenestene
All bruk av tjenestene krever at oppdragsgiver er autentisert via maskinporten, og har scope:

_skatteetaten:innkrevingsopdrag_

## OpenAPI-spesifikasjon
OpenAPI/Swagger-dokumentasjon er under utarbeidelse sammen med tjenestene. Men en foreløpig versjon kan sees her:
https://app.swaggerhub.com/apis/JAKOBLADEKIRBYSTENVA/Innkreving_av_krav_for_offentlige_oppdragsgivere/local-SNAPSHOT

## Testmiljø
Tjenestene ligger i Skatteetatens testmiljø for ekstern testing: https://api-test.sits.no/

Helt konkret under denne baseurlen: https://api-test.sits.no/api/innkreving/innkrevingsoppdrag/v1/

Dvs. at en POST mot https://api-test.sits.no/api/innkreving/innkrevingsoppdrag/v1/innkrevingsoppdrag med tilhørende token fra maskinporten vil opprette et nytt innkrevingsoppdrag.
