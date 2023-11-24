# API Spesifikasjon

Skatteetaten tilbyr muligheten for å sende inn en utleggsbegjæring ved bruk av JSON.

Open API spesifikasjonen for utleggsbegjæring og prøving er tilgjengelig her :

* [JSON-schema](utleggsbegjaering-openapi-v1.json)

# MottakApi

| Method                                                  | HTTP request                                                          | Description                              |
|---------------------------------------------------------|-----------------------------------------------------------------------|------------------------------------------|
| [**endreBegjaering**](#endreBegjaering)                 | **PUT** /external/v0/utleggsbegjaering/{eksternSaksreferanse}         | Endre allerede innsendt utleggsbegjæring |
| [**opprettBegjaering**](#opprettBegjaering)             | **POST** /external/v0/utleggsbegjaering                               | Oppretter utleggsbegjæring               |
| [**validerEndretBegjaering**](#validerEndretBegjaering) | **PUT** /external/v0/utleggsbegjaering/valider/{eksternSaksreferanse} | Validerer endret utleggsbegjæring        |
| [**validerNyBegjaering**](#validerNyBegjaering)         | **POST** /external/v0/utleggsbegjaering/valider                       | Validerer ny utleggsbegjæring            |

<a name="endreBegjaering"></a>

# **endreBegjaering**

> endreBegjaering(eksternSaksreferanse, Klientid, Korrelasjonsid, Meldingsid, Utleggsbegjaering)

Endre allerede innsendt utleggsbegjæring

    Validerer endring av utleggsbegjæring og oppretter ny versjon om dette er ok

### Parametre

| Name                     | Type                                                                     | Description                              | Notes             |
|--------------------------|--------------------------------------------------------------------------|------------------------------------------|-------------------|
| **eksternSaksreferanse** | **String**                                                               |                                          | [default to null] |
| **Klientid**             | **String**                                                               | Klientens unike id                       | [default to null] |
| **Korrelasjonsid**       | **String**                                                               | Id for å spore kall på tvers av systemer | [default to null] |
| **Meldingsid**           | **String**                                                               | Meldingsid mellom systemer               | [default to null] |
| **Utleggsbegjaering**    | [**Utleggsbegjaering**](../feltbeskrivelser/Models/Utleggsbegjaering.md) |                                          |                   |

### Retur type

null (empty response body)

### Autorisasjon

Se [Tilgang](../tilgang.md)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, \*/\*

<a name="opprettBegjaering"></a>

# **opprettBegjaering**

> SendInnUtleggsbegjaeringResponse opprettBegjaering(KlientId, Korrelasjonsid, Meldingsid, Utleggsbegjaering)

Oppretter utleggsbegjæring

    Validerer og oppretter ny utleggsbegjæring i databasen. Returnerer identifikator til utleggsbegjæringen

### Parametre

| Navn                  | Type                                                                     | Beskrivelse                              | Notater           |
|-----------------------|--------------------------------------------------------------------------|------------------------------------------|-------------------|
| **KlientId**          | **String**                                                               | Klientens unike id                       | [default to null] |
| **Korrelasjonsid**    | **String**                                                               | Id for å spore kall på tvers av systemer | [default to null] |
| **Meldingsid**        | **String**                                                               | Meldingsid mellom systemer               | [default to null] |
| **Utleggsbegjaering** | [**Utleggsbegjaering**](../feltbeskrivelser/Models/Utleggsbegjaering.md) |                                          |                   |

### Retur type

[**SendInnUtleggsbegjaeringResponse**](../feltbeskrivelser/Models/SendInnUtleggsbegjaeringResponse.md)

### Autorisasjon

Se [Tilgang](../tilgang.md)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, \*/\*

<a name="validerEndretBegjaering"></a>

# **validerEndretBegjaering**

> validerEndretBegjaering(eksternSaksreferanse, Klientid, Korrelasjonsid, Meldingsid, Utleggsbegjaering)

Validerer endret utleggsbegjæring

    Validerer endret utleggsbegjæring, uten å lagre noe.

### Parametre

| Navn                     | Type                                                                     | Beskrivelse                              | Notater           |
|--------------------------|--------------------------------------------------------------------------|------------------------------------------|-------------------|
| **eksternSaksreferanse** | **String**                                                               |                                          | [default to null] |
| **Klientid**             | **String**                                                               | Klientens unike id                       | [default to null] |
| **Korrelasjonsid**       | **String**                                                               | Id for å spore kall på tvers av systemer | [default to null] |
| **Meldingsid**           | **String**                                                               | Meldingsid mellom systemer               | [default to null] |
| **Utleggsbegjaering**    | [**Utleggsbegjaering**](../feltbeskrivelser/Models/Utleggsbegjaering.md) |                                          |                   |

### Retur type

null (empty response body)

### Autorisasjon

Se [Tilgang](../tilgang.md)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, \*/\*

<a name="validerNyBegjaering"></a>

# **validerNyBegjaering**

> validerNyBegjaering(Klientid, Korrelasjonsid, Meldingsid, Utleggsbegjaering)

Validerer ny utleggsbegjæring

    Validerer ny utleggsbegjæring, uten å lagre noe.

### Parametre

| Navn                  | Type                                                                     | Beskrivelse                              | Notater           |
|-----------------------|--------------------------------------------------------------------------|------------------------------------------|-------------------|
| **Klientid**          | **String**                                                               | Klientens unike id                       | [default to null] |
| **Korrelasjonsid**    | **String**                                                               | Id for å spore kall på tvers av systemer | [default to null] |
| **Meldingsid**        | **String**                                                               | Meldingsid mellom systemer               | [default to null] |
| **Utleggsbegjaering** | [**Utleggsbegjaering**](../feltbeskrivelser/Models/Utleggsbegjaering.md) |                                          |                   |

### Retur type

null (empty response body)

### Autorisasjon

Se [Tilgang](../tilgang.md)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, \*/\*

