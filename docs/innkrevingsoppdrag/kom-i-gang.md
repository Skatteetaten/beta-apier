# Kom i gang

## Tilgang til tjenestene

All bruk av tjenestene krever at oppdragsgiver er autentisert via Maskinporten, og har scope:
_skatteetaten:innkrevingsoppdrag_

Konsumenter som skal ha tilgang dette scopet blir tilordnet dette av Skatteetaten.

## OpenAPI-spesifikasjon

OpenAPI/Swagger-dokumentasjon er under utarbeidelse sammen med tjenestene. En foreløpig versjon kan sees her:
https://app.swaggerhub.com/apis-docs/skatteetaten/oppdragsinnkreving-api/

## Testmiljø

Tjenestene ligger i Skatteetatens testmiljø for ekstern testing: https://api-test.sits.no/

Helt konkret under denne baseurlen: https://api-test.sits.no/api/innkreving/innkrevingsoppdrag/v1/

Dvs. at en POST mot https://api-test.sits.no/api/innkreving/innkrevingsoppdrag/v1/innkrevingsoppdrag med tilhørende
token fra Maskinporten vil opprette et nytt innkrevingsoppdrag.

## Tjenester

![](../../static/download/innkrevingsoppdrag/tjenester_oppdragsinnkreving.png)

