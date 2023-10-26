# Endepunkter

Skatteetaten tilbyr muligheten for å sende inn en utleggsbegjæring ved bruk av JSON.


Open API spesifikasjonen for utleggsbegjæring og prøving er tilgjengelig her :
* [JSON-schema](utleggsbegjaering-openapi-v1.json)

# MottakApi

| Method                              | HTTP request                               | Description                |
|-------------------------------------|--------------------------------------------|----------------------------|
| [**sendInn**](#sendInn) | **POST** /external/v0/utleggsbegjaering    | Oppretter utleggsbegjæring |
| [**valider**](#valider) | **POST** /api/v0/utleggsbegjaering/valider | Validerer utleggsbegjæring |

<a name="sendInn"></a>

# **sendInn**

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

**Long**

### Autorisasjon

Se [Tilgang](../tilgang.md)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, */*

<a name="valider"></a>

# **valider**

Validerer utleggsbegjæring

    Validerer ny utleggsbegjæring, uten å lagre noe.

### Parametre

| Navn                  | Type                                                                     | Beskrivelse                              | Notater           |
|-----------------------|--------------------------------------------------------------------------|------------------------------------------|-------------------|
| **KlientId**          | **String**                                                               | Klientens unike id                       | [default to null] |
| **Korrelasjonsid**    | **String**                                                               | Id for å spore kall på tvers av systemer | [default to null] |
| **Meldingsid**        | **String**                                                               | Meldingsid mellom systemer               | [default to null] |
| **Utleggsbegjaering** | [**Utleggsbegjaering**](../feltbeskrivelser/Models/Utleggsbegjaering.md) |                                          |                   |

### Retur type

null (empty response body)

### Autorisasjon

Se [Tilgang](../tilgang.md)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*, application/json

