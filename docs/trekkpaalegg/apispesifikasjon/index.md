# API Spesifikasjon

Skatteetaten tilbyr API for å hente trekkpålegg.

Open API spesifikasjonen er tilgjengelig her :

* [swaggerhub](https://app.swaggerhub.com/apis/skatteetaten/trekkpaalegg-app)

# Trekkpålegg API

Alle URIer er relative til 
* https://api-test.sits.no (test)
* ---                      (prod)


| Metode                                        | HTTP request                                                         | Beskrivelse                                           |
|-----------------------------------------------|----------------------------------------------------------------------|-------------------------------------------------------|
| [**hent alle gjeldende**](#hentAlleGjeldende) | **GET** /api/trekkpaalegg/v1/{trekkpliktig}                          | Hent alle gjeldende trekkpålegg for den trekkpliktige |
| [**hent versjon**](#hentVersjon)              | **GET** /api/trekkpaalegg/v1/{trekkpliktig}/{trekkid}/{trekkversjon} | Hent en spesifikk versjon av et trekkpålegg.          |

<a name="hentAlleGjeldende"></a>

### Hent alle gjeldende

>  **GET** /api/trekkpaalegg/v1/{trekkpliktig}

Returnerer siste versjon av samtlige trekkpålegg for en trekkpliktig. Dersom en trekkpliktig har svært mange trekkpålegg (flere tusen) så bør man benytte fraSekvensnummer og maksAntall for begrense returen til kun å inneholde trekkpålegg som er endret siden forrige spørring. Dersom antall returnerte trekkpålegg er lik maksAntall så må det gjøres en ny spørring med fraSekvensnummer lik det største sekvensnummeret i siste retur inntil man har fått returnert samtlige endrede trekkpålegg.

### Parametre

| Navn                 | Type       | Beskrivelse                                                                                                                                                                                               | Notater            |
|----------------------|------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------|
| **trekkpliktig**     | **String** | Orgnummeret til den trekkpliktige arbeidsgiver/ytelsesutbetaler                                                                                                                                           | [default til null] || **trekkpliktig**     | **String** | Orgnummeret til den trekkpliktige arbeidsgiver/ytelsesutbetaler                                                                                                                                          | [default til null] |
| **fraSekvensnummer** | **String** | QueryParam. Begrenser returnerte trekkpålegg til bare inneholde nyere enn angitt sekvensnummer. 0 eller større. Oppgis sammen med maksAntall. Mest relevant for trekkpliktige med svært mange trekkpålegg | [default til null] |
| **maksAntall**       | **String** | QueryParam. Angir maks antall trekkpålegg som skal returneres. 1 eller større. Skal bare brukes sammen med fraSekvensnummer. Mest relevant for trekkpliktige med svært mange trekkpålegg                  | [default til null] |
| **KlientId**         | **String** | Klientens unike id                                                                                                                                                                                        | [default til null] |
| **Korrelasjonsid**   | **String** | Id for å spore kall på tvers av systemer                                                                                                                                                                  | [default til null] |
| **Meldingsid**       | **String** | Meldingsid mellom systemer                                                                                                                                                                                | [default til null] |


### Retur type

Liste av [**Trekkpaalegg**](../feltbeskrivelser/Models/Trekkpaalegg.md)

### Autorisasjon

Se [Tilgang](../tilgang.md)

### HTTP request headere

- **Content-Type**: Ikke definert
- **Accept**: application/json, \*/\*

<a name="hentVersjon"></a>

### Hent versjon

> **GET** /api/trekkpaalegg/v1/{trekkpliktig}/{trekkid}/{trekkversjon}

Returnerer den angitte versjonen av et trekkpålegg

### Parametre

| Navn               | Type       | Beskrivelse                                                  | Notater            |
|--------------------|------------|--------------------------------------------------------------|--------------------|
| **trekkpliktig**   | **String** | Org-/fnr til den trekkpliktige arbeidsgiver/ytelsesutbetaler | [default til null] |
| **trekkid**        | **String** | Id til trekkpålegget                                         | [default til null] |
| **trekkversjon**   | **String** | Versjonen til det angitte trekkpålegg                     | [default til null] |
| **KlientId**       | **String** | Klientens unike id                                           | [default til null] |
| **Korrelasjonsid** | **String** | Id for å spore kall på tvers av systemer                     | [default til null] |
| **Meldingsid**     | **String** | Meldingsid mellom systemer                                   | [default til null] |


### Retur type

[**Trekkpaalegg**](../feltbeskrivelser/Models/Trekkpaalegg.md)

### Autorisasjon

Se [Tilgang](../tilgang.md)

### HTTP request headere

- **Content-Type**: Ikke definert
- **Accept**: application/json, \*/\*