# Åpne krav

Hent oversikt over åpne krav og uplasserte innbetalinger.

Gjør oppslag mot reskontrosystemene på åpne krav og uplasserte innbetalinger og oppgir de samlet med en summert oversikt.

**Request URL - eksempel**

```
https://{env}/api/innkreving/kravogbetalinger/v1/finans/12345678901/oversikt
```

env: [Miljø-spesifikk adresse](https://skatteetaten.github.io/datasamarbeid-api-dokumentasjon/about_miljoer)

**Eksempel på respons**

```json
{
  "partIdentifikator": "310478717",
  "aapentKravMedGjenstaaendeBeloep": [
    {
      "kravidentifikator": "krav-1234",
      "kravbeskrivelse": "Restskatt",
      "opprettelsesdatoForKrav": "2022-08-28",
      "kravperiode": "2022/09",
      "opprinneligBeloep": 1000,
      "kravforfall": [
        {
          "forfallsdato": "2022-09-28",
          "opprinneligBeloep": 1000.0,
          "gjenstaaendeBeloep": 1000.0,
          "plassertInnbetaling": [
            {
              "betaltFra": {
                "konto": {}
              },
              "plassertBeloep": -1000,
              "plasseringsdato": "2022-09-28",
              "innbetalingsIdentifikator": "inn-1234"
            }
          ],
          "plassertMotkrav": [],
          "kravforfallsIdentifikator": "6bf527ce-432d-48fe-aba1-cfc2c2d266e5",
          "betalingsinformasjon": {
            "konto": {
              "kontonummer": "27623808268"
            }
          },
          "utsattIverksettelse": false
        }
      ],
      "gjenstaaendeBeloep": 1000,
      "stipulerteRenter": 20.0,
      "kravtype": "RESTSKATT",
      "kravgruppe": "Skatt"
    }
  ],
  "innbetalingMedUplassertBeloep": [
    {
      "partIdentifikator": "310478717",
      "innbetalingsidentifikator": "inn-1234",
      "innbetalingsdato": "2022-09-28",
      "innbetaltBeloep": 1000,
      "plassertInnbetalingMotKrav": [],
      "betaltTilKonto": {
        "kontonummer": "98766543210"
      },
      "betaltFra": {
        "konto": {
          "kontoeiersNavn": "BERIKENDE EVIG KATT HANKATT",
          "kontonummer": "98766543210"
        }
      },
      "innbetalingstype": "bankoverføring"
    }
  ],
  "totalOversikt": {
    "sumStipulerteRenter": 20,
    "sumForfalteKrav": 1000,
    "sumIkkeForfalteKrav": 0,
    "sumUplasserteInnbetalinger": 0,
    "saldo": 1020
  },
  "oversiktPerKravgruppe": [
    {
      "kravgruppe": "Skatt",
      "sumStipulerteRenter": 20,
      "sumForfalteKrav": 1000,
      "sumIkkeForfalteKrav": 0,
      "saldo": 1020
    }
  ]
}
```
