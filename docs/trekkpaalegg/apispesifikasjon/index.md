# API Spesifikasjon

Skatteetaten tilbyr API for å hente trekkpålegg.

Open API spesifikasjonen er tilgjengelig her :

* [swaggerhub](https://app.swaggerhub.com/apis/skatteetaten/trekkpaalegg-app)

# Trekkpålegg API

Alle URIer er relative til *http://localhost:8080*

| Metode                                             | HTTP request                                                              | Beskrivelse                                           |
|----------------------------------------------------|---------------------------------------------------------------------------|-------------------------------------------------------|
| [**hent alle gjeldende**](#hentAlleGjeldende)      | **GET** /external/v1/trekkpaalegg/{trekkpliktig}                          | Hent alle gjeldende trekkpålegg for den trekkpliktige |
| [**hent versjon**](#hentVersjon)                   | **GET** /external/v1/trekkpaalegg/{trekkpliktig}/{trekkid}/{trekkversjon} | Hent en spesifikk versjon av et trekkpålegg.          |
<a name="hentAlleGjeldende"></a>

# **Hent alle gjeldende**

>  **GET** /external/v1/trekkpaalegg/{trekkpliktig}

Henter alle gjeldende trekkpålegg for den trekkpliktige. 

### Parametre

| Navn                 | Type       | Beskrivelse                                                                                                                                           | Notater            |
|----------------------|------------|-------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------|
| **trekkpliktig**     | **String** | Orgnummeret til den trekkpliktige arbeidsgiver/ytelsesutbetaler                                                                                       | [default til null] |
| **fraSekvensnummer** | **String** | QueryParam. Angir at man kun ønsker trekkpålegg som er oppdateret etter forrige uthenting. Mest relevant for arbeidgivere med svært mange trekkpålegg | [default til null] |
| **KlientId**         | **String** | Klientens unike id                                                                                                                                    | [default til null] |
| **Korrelasjonsid**   | **String** | Id for å spore kall på tvers av systemer                                                                                                              | [default til null] |
| **Meldingsid**       | **String** | Meldingsid mellom systemer                                                                                                                            | [default til null] |


### Retur type

Liste av [**Trekkpaalegg**](../feltbeskrivelser/Models/Trekkpaalegg.md)

### Autorisasjon

Se [Tilgang](../tilgang.md)

### HTTP request headere

- **Content-Type**: Ikke definert
- **Accept**: application/json, \*/\*

<a name="hentVersjon"></a>

# **Hent versjon**

> **GET** /external/v1/trekkpaalegg/{trekkpliktig}/{trekkid}/{trekkversjon}

Henter angitt versjon av et trekkpålegg for den trekkpliktige.

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