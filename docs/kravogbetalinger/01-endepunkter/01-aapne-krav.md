# Åpne krav

Hent oversikt over åpne krav og uplasserte innbetalinger.

Gjør oppslag mot reskontrosystemene på åpne krav og uplasserte innbetalinger og oppgir de samlet med en summert oversikt.

## Format på request

```json
{
  "partIdentifikator": "string"
}
```

## Format på respons

```json
{
  "partIdentifikator": "string",
  "aapentKravMedGjenstaaendeBeloep": [
    {
      "partIdentifikator": "string",
      "kravidentifikator": "string",
      "kravbeskrivelse": "string",
      "opprettelsesdatoForKrav": "2022-11-02T09:44:14.307Z",
      "kravperiode": "string",
      "opprinneligBeloep": 0,
      "kravforfall": [
        {
          "forfallsdato": "2022-11-02T09:44:14.307Z",
          "opprinneligBeloep": 0,
          "gjenstaaendeBeloep": 0,
          "plassertInnbetaling": [
            {
              "innbetalingsdato": "2022-11-02T09:44:14.307Z",
              "innbetaltBeloep": 0,
              "betaltFra": {
                "kidnummer": "string",
                "konto": {
                  "bankinformasjon": "string",
                  "kontoeiersNavn": "string",
                  "kontonummer": "string",
                  "iban": "string",
                  "swiftBIC": "string"
                }
              },
              "plassertBeloep": 0,
              "plasseringsdato": "2022-11-02T09:44:14.307Z",
              "innbetalingsIdentifikator": "string",
              "innbetalingstype": "string"
            }
          ],
          "plassertMotkrav": [
            {
              "motkravBeskrivelse": "string",
              "motkravForfallsIdentifikator": "string",
              "motkravForfallsdato": "2022-11-02T09:44:14.307Z",
              "plassertBeloep": 0,
              "plasseringsdato": "2022-11-02T09:44:14.307Z"
            }
          ],
          "kravforfallsIdentifikator": "string",
          "betalingsinformasjon": {
            "kidnummer": "string",
            "konto": {
              "bankinformasjon": "string",
              "kontoeiersNavn": "string",
              "kontonummer": "string",
              "iban": "string",
              "swiftBIC": "string"
            }
          },
          "utsattIverksettelse": true
        }
      ],
      "gjenstaaendeBeloep": 0,
      "stipulerteRenter": 0,
      "kravtype": "string",
      "kravgruppe": "string"
    }
  ],
  "innbetalingMedUplassertBeloep": [
    {
      "partIdentifikator": "string",
      "innbetalingsidentifikator": "string",
      "innbetalingsdato": "2022-11-02T09:44:14.307Z",
      "innbetaltBeloep": 0,
      "plassertInnbetalingMotKrav": [
        {
          "dekketKrav": "string",
          "kravforfallIdentifikator": "string",
          "kravforfallsdato": "2022-11-02T09:44:14.307Z",
          "plasseringsdato": "2022-11-02T09:44:14.307Z",
          "plassertBeloep": 0,
          "opprinneligKravforfallsbeloep": 0,
          "gjenstaaendeKravforfallsbeloep": 0
        }
      ],
      "uplassertBeloep": 0,
      "betaltTilKonto": {
        "bankinformasjon": "string",
        "kontoeiersNavn": "string",
        "kontonummer": "string",
        "iban": "string",
        "swiftBIC": "string"
      },
      "betaltFra": {
        "kidnummer": "string",
        "konto": {
          "bankinformasjon": "string",
          "kontoeiersNavn": "string",
          "kontonummer": "string",
          "iban": "string",
          "swiftBIC": "string"
        }
      },
      "innbetalingstype": "string"
    }
  ],
  "totalOversikt": {
    "sumStipulerteRenter": 0,
    "sumForfalteKrav": 0,
    "sumIkkeForfalteKrav": 0,
    "sumUplasserteInnbetalinger": 0,
    "saldo": 0
  },
  "oversiktPerKravgruppe": [
    {
      "kravgruppe": "string",
      "sumStipulerteRenter": 0,
      "sumForfalteKrav": 0,
      "sumIkkeForfalteKrav": 0,
      "saldo": 0
    }
  ]
}
```
