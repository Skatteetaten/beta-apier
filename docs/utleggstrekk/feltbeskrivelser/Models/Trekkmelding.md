# Trekkmelding

## Egenskaper

| Navn                                | Type                                | Beskrivelse                                                                                                                                                                                                                                                                                                                                                              | Notater                       |
|-------------------------------------|-------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------|
| **meldingsid**                      | **String**                          |                                                                                                                                                                                                                                                                                                                                                                          | [default til null]            |
| **meldingstidspunkt**               | **Date**                            | en kombinasjon av typene Dato og Klokkeslett. Kodes som en tekststreng etter datoformatering spesifisert i ISO 8601 (ISO 8601:2004 Data elements and interchange formats -- Information interchange -- Representation of dates and times). ([Begrapsreferanse](https://data.skatteetaten.no/begrep/20b52aee-9fe1-11e5-a9f8-e4115b280940&#39))                            | [default til null]            |
| **meldingstype**                    | [**Meldingstype**](Meldingstype.md) |                                                                                                                                                                                                                                                                                                                                                                          | [default til null]            |
| **trekkidentifikator**              | **String**                          |                                                                                                                                                                                                                                                                                                                                                                          | [default til null]            |
| **skyldner**                        | **String**                          |                                                                                                                                                                                                                                                                                                                                                                          | [default til null]            |
| **kidnummer**                       | **String**                          |                                                                                                                                                                                                                                                                                                                                                                          | [optional] [default til null] |
| **kontonummer**                     | **String**                          | ([Begrapsreferanse](https://data.skatteetaten.no/begrep/20b2e328-9fe1-11e5-a9f8-e4115b280940&#39)                                                                                                                                                                                                                                                                        | [optional] [default til null] |
| **startDato**                       | **date**                            | gir verdier for år, måned og dag. Kodes som en tekststreng etter datoformatering spesifisert i  ISO 8601 (ISO 8601:2004 Data elements and interchange formats -- Information interchange -- Representation of dates and times). Eksempel : 1998-12-21 eller 19981221. ([Begrapsreferanse](https://data.skatteetaten.no/begrep/20b52aed-9fe1-11e5-a9f8-e4115b280940&#39)) | [optional] [default til null] |
| **sluttDato**                       | **date**                            | gir verdier for år, måned og dag. Kodes som en tekststreng etter datoformatering spesifisert i  ISO 8601 (ISO 8601:2004 Data elements and interchange formats -- Information interchange -- Representation of dates and times). Eksempel : 1998-12-21 eller 19981221. ([Begrapsreferanse](https://data.skatteetaten.no/begrep/20b52aed-9fe1-11e5-a9f8-e4115b280940&#39)) | [optional] [default til null] |
| **midlertidigStans**                | [**List**](MidlertidigStans.md)     |                                                                                                                                                                                                                                                                                                                                                                          | [optional] [default til null] |
| **trekkBeløp**                      | [**TrekkBeloep**](TrekkBeloep.md)   |                                                                                                                                                                                                                                                                                                                                                                          | [optional] [default til null] |
| **trekkProsent**                    | [**TrekkProsent**](TrekkProsent.md) |                                                                                                                                                                                                                                                                                                                                                                          | [optional] [default til null] |
| **trekkpliktigOrganisasjonsnummer** | **String**                          | 9 sifret nummer gitt de som er registrert i Enhetsregisteret. ([Begrapsreferanse](https://data.skatteetaten.no/begrep/20b2e1a8-9fe1-11e5-a9f8-e4115b280940&#39)                                                                                                                                                                                                          | [default til null]            |

[[Tilbake til modell liste]](../index.md)
