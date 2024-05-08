# Utleggstrekk

## Felter

| Navn                 | Type                             | Beskrivelse                                                                         | Notater |
|----------------------|----------------------------------|-------------------------------------------------------------------------------------|---------|
| **trekkid**          | **String**                       | Unik identifikator for utleggstrekket                                               |         |
| **trekkversjon**     | **Integer**                      | Versjon av trekket                                                                  |         |
| **opprettet**        | **Date**                         | Dato for opprettelse av utleggstrekket                                              |         |
| **trekkpliktig**     | **String**                       | Organisasjonsnummer - 9 sifret nummer gitt de som er registrert i Enhetsregisteret. |         |
| **skyldner**         | **String**                       |                                                                                     |         |
| **trekkstatus**      | [**Trekkstatus**](Trekkstatus)   | Trekkets status                                                                     |         |
| **startPeriode**     | **String**                       | Periode på format "yyyy-mm"                                                         |         |
| **sluttPeriode**     | **String**                       | Periode på format "yyyy-mm"                                                         |         |
| **midlertidigStans** | [**List**](MidlertidigStans.md)  |                                                                                     |         |
| **trekkbeloep**      | [**Trekkbeloep**](Trekkbeloep)   | trekkbeløp eller trekkprosent må fylles ut                                          |         |
| **trekkprosent**     | [**Trekkprosent**](Trekkprosent) | trekkbeløp eller trekkprosent må fylles ut                                          |         |
| **kidnummer**        | **String**                       |                                                                                     |         |
| **kontonummer**      | **String**                       |                                                                                     |         |

[[Tilbake til modell liste]](../index.md)

