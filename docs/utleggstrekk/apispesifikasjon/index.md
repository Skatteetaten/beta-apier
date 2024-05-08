# API Spesifikasjon

Skatteetaten tilbyr API for å hente utleggstrekk.

Open API spesifikasjonen er tilgjengelig her :

* [swaggerhub](https://app.swaggerhub.com/apis/skatteetaten/utleggstrekk-app)

# UtleggstrekkApi

Alle URIer er relative til *http://localhost:8080*

| Metode                                                      | HTTP request                                                     | Beskrivelse                                                         |
|-------------------------------------------------------------|------------------------------------------------------------------|---------------------------------------------------------------------|
| [**hentUtleggstrekk**](#hentUtleggstrekk)                   | **GET** /utleggstrekk/v0/{trekkpliktig}/{trekkid}/{trekkversjon} | Hent versjon av utleggstrekk                                        |
| [**hentListeOverUtleggstrekk**](#hentListeOverUtleggstrekk) | **GET** /utleggstrekk/v0/{trekkpliktig}                          | Hent liste over utleggstrekk som tilhører trekkpliktig organisasjon |
| [**kvitterUtUtleggstrekk**](#kvitterUtUtleggstrekk)         | **PATCH** /utleggstrekk/v0                                       | Kvittér ut at ett eller flere utleggstrekk er lest                  |

<a name="hentUtleggstrekk"></a>

# **hentUtleggstrekk**

> Utleggstrekk hent(trekkpliktig, trekkid, trekkversjon)

Hent utleggstrekk

    Henter et utleggstrekk

### Parametre

| Navn             | Type        | Beskrivelse         | Notater |
|------------------|-------------|---------------------|---------|
| **trekkpliktig** | **String**  | Organisasjonsnummer |         |
| **trekkid**      | **String**  |                     |         |
| **trekkversjon** | **Integer** |                     |         |

### Retur type

[**Utleggstrekk**](../feltbeskrivelser/Models/Utleggstrekk.md)

### Autorisasjon

Se [Tilgang](../tilgang.md)

### HTTP request headere

- **Korrelasjonsid**: Id for å spore kall på tvers av systemer
- **Content-Type**: Ikke definert
- **Accept**: application/json, \*/\*

<a name="hentListeOverUtleggstrekk"></a>

# **hentListeOverUtleggstrekk**

> List hent(trekkpliktig)

Hent liste med over utleggstrekk som tilhører trekkpliktig organisasjon

    Henter utleggstrekk

### Parametre

| Navn             | Type       | Beskrivelse         | Notater |
|------------------|------------|---------------------|---------|
| **trekkpliktig** | **String** | Organisasjonsnummer |         |

### Retur type

[**List**](../feltbeskrivelser/Models/Utleggstrekk.md)

### Autorisasjon

Se [Tilgang](../tilgang.md)

### HTTP request headere

- **Korrelasjonsid**: Id for å spore kall på tvers av systemer
- **Content-Type**: Ikke definert
- **Accept**: application/json, \*/\*

<a name="kvitterUtUtleggstrekk"></a>

# **kvitterUtUtleggstrekk**

> kvitterUtUtleggstrekk(trekkpliktig, Korrelasjonsid, request\_body)

Kvittér ut at ett eller flere utleggstrekk er lest

    Oppgi en liste med trekkIder som det skal kvitteres ut for.

### Parametre

| Navn             | Type                                                           | Beskrivelse | Notater |
|------------------|----------------------------------------------------------------|-------------|---------|
| **PatchRequest** | [**PatchRequest**](../feltbeskrivelser/Models/PatchRequest.md) |             |         |

### Retur type

null (tom response body)

### Autorisasjon

Se [Tilgang](../tilgang.md)

### HTTP request headere

- **Korrelasjonsid**: Id for å spore kall på tvers av systemer
- **Content-Type**: application/json
- **Accept**:  \*/\*

