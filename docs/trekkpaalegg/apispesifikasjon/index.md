# API Spesifikasjon

Skatteetaten tilbyr API for å hente trekkpålegg.

Open API spesifikasjonen er tilgjengelig her :

* [swaggerhub](https://app.swaggerhub.com/apis/skatteetaten/trekkpaalegg-app)

# Trekkpålegg API

Alle URIer er relative til *http://localhost:8080*

| Metode                                             | HTTP request                                                                | Beskrivelse                                              |
|----------------------------------------------------|-----------------------------------------------------------------------------|----------------------------------------------------------|
| [**hent alle gjeldende**](#hentAlleGjeldende)      | **GET** /external/v0/trekkpaalegg/{trekkpliktig}                            | Hent alle gjeldende trekkmeldinger for den trekkpliktige |
| [**hent versjon**](#hentVersjon)                   | **GET** /external/v0/trekkpaalegg/{trekkpliktig}/{trekkid}/{trekkversjon}   | Hent en spesifikk versjon av en trekkmeldingen.          |
<a name="hentAlleGjeldende"></a>

# **Hent alle gjeldende**

>  **GET** /external/v0/trekkpaalegg/{trekkpliktig}

Henter alle gjeldende trekkpålegg for angitt trekkpliktig. 
Benytt queryParam 'fraSekvensnummer' for å unngå trekkpålegg som er hentet fra før (relevant for arbeidsgivere med svært mange utleggstrekk)

### Parametre

| Navn                 | Type       | Beskrivelse                                                                   | Notater            |
|----------------------|------------|-------------------------------------------------------------------------------|--------------------|
| **trekkpliktig**     | **String** | Orgnummeret til den trekkpliktige arbeidsgiver/ytelsesutbetaler               | [default til null] |
| **fraSekvensnummer** | **String** | Angir at man kun ønsker trekkpålegg som er oppdateret siden forrige uthenting | [default til null] |
| **KlientId**         | **String** | Klientens unike id                                                            | [default til null] |
| **Korrelasjonsid**   | **String** | Id for å spore kall på tvers av systemer                                      | [default til null] |
| **Meldingsid**       | **String** | Meldingsid mellom systemer                                                    | [default til null] |


### Retur type

Liste av [**Trekkpaalegg**](../feltbeskrivelser/Models/Trekkpaalegg.md)

### Autorisasjon

Se [Tilgang](../tilgang.md)

### HTTP request headere

- **Content-Type**: Ikke definert
- **Accept**: application/json, \*/\*

<a name="hentVersjon"></a>

# **Hent versjon**

> **GET** /external/v0/trekkpaalegg/{trekkpliktig}/{trekkid}/{trekkversjon}

Henter angitt versjon av et trekkpålegg.

### Parametre

| Navn               | Type       | Beskrivelse                                                  | Notater            |
|--------------------|------------|--------------------------------------------------------------|--------------------|
| **trekkpliktig**   | **String** | Org-/fnr til den trekkpliktige arbeidsgiver/ytelsesutbetaler | [default til null] |
| **trekkid**        | **String** | Id til trekkpålegget                                         | [default til null] |
| **trekkversjon**   | **String** | Versjonen til det angitte utleggstrekket                     | [default til null] |
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