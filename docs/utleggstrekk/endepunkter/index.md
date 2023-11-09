# Endepunkter

Skatteetaten tilbyr API for å hente utleggstrekkmeldinger.

Open API spesifikasjonen er tilgjengelig her :

* [JSON-schema](utleggstrekk-openapi-v1.json)

# UtleggstrekkApi

Alle URIer er relative til *http://localhost:8080*

| Metode                                                  | HTTP request                                       | Beskrivelse                  |
|---------------------------------------------------------|----------------------------------------------------|------------------------------|
| [**hent**](#hent)                                       | **GET** /external/v0/utleggstrekk/{trekkMeldingId} | Hent trekkmelding            |
| [**hentfeed**](#hentfeed)                               | **GET** /external/v0/utleggstrekk/feed             | Hent feed med trekkmeldinger |
| [**kvitterUtTrekkmeldinger**](#kvitterUtTrekkmeldinger) | **PATCH** /external/v0/utleggstrekk                | Kvittér ut trekkmeldinger    |

<a name="hent"></a>

# **hent**

> Trekkmelding hent(trekkMeldingId, KlientId, Korrelasjonsid, Meldingsid)

Hent trekkmelding

    Henter en trekkmelding

### Parametre

| Navn               | Type       | Beskrivelse                              | Notater            |
|--------------------|------------|------------------------------------------|--------------------|
| **trekkMeldingId** | **String** |                                          | [default til null] |
| **KlientId**       | **String** | Klientens unike id                       | [default til null] |
| **Korrelasjonsid** | **String** | Id for å spore kall på tvers av systemer | [default til null] |
| **Meldingsid**     | **String** | Meldingsid mellom systemer               | [default til null] |

### Retur type

[**Trekkmelding**](../feltbeskrivelser/Models/Trekkmelding.md)

### Autorisasjon

Se [Tilgang](../tilgang.md)

### HTTP request headere

- **Content-Type**: Ikke definert
- **Accept**: application/json,  \*/\*

<a name="hentfeed"></a>

# **hentfeed**

> List hentfeed(sekvensnummer, KlientId, Korrelasjonsid, Meldingsid)

Hent feed med trekkmeldinger

    Returnerer en feed med løpende sekvensnummer og trekkmeldingId fra oppgitt sekvensnummer

### Parametre

| Navn               | Type       | Beskrivelse                              | Notater            |
|--------------------|------------|------------------------------------------|--------------------|
| **sekvensnummer**  | **Long**   | Sekvensnummer for start på feeden        | [default til null] |
| **KlientId**       | **String** | Klientens unike id                       | [default til null] |
| **Korrelasjonsid** | **String** | Id for å spore kall på tvers av systemer | [default til null] |
| **Meldingsid**     | **String** | Meldingsid mellom systemer               | [default til null] |

### Retur type

[**List**](../feltbeskrivelser/Models/UtleggstrekkFeedElement.md)

### Autorisasjon

Se [Tilgang](../tilgang.md)

### HTTP request headere

- **Content-Type**: Ikke definert
- **Accept**: application/json,  \*/\*

<a name="kvitterUtTrekkmeldinger"></a>

# **kvitterUtTrekkmeldinger**

> kvitterUtTrekkmeldinger(KlientId, Korrelasjonsid, Meldingsid, request\_body)

Kvittér ut trekkmeldinger

    Oppgi en liste med meldingsIder som det skal kvitteres ut for.

### Parametre

| Navn               | Type               | Beskrivelse                              | Notater            |
|--------------------|--------------------|------------------------------------------|--------------------|
| **KlientId**       | **String**         | Klientens unike id                       | [default til null] |
| **Korrelasjonsid** | **String**         | Id for å spore kall på tvers av systemer | [default til null] |
| **Meldingsid**     | **String**         | Meldingsid mellom systemer               | [default til null] |
| **request\_body**  | **List\<String\>** |                                          |                    |

### Retur type

null (tom response body)

### Autorisasjon

Se [Tilgang](../tilgang.md)

### HTTP request headere

- **Content-Type**: application/json
- **Accept**:  \*/\*

