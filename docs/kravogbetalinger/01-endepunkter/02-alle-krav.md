# Alle krav

Hent alle krav innen et gitt tidsrom.

Gjør oppslag mot reskontrosystemene på alle krav innen et gitt tidsrom på maks ett år.

## Format på request

```json
{
  "partIdentifikator": "string",
  "periode": {
    "start": "2022-11-02T09:49:08.429Z",
    "slutt": "2022-11-02T09:49:08.429Z"
  }
}
```

## Format på respons

```json
{
  "partIdentifikator": "string",
  "periode": {
    "start": "2022-11-02T09:49:08.430Z",
    "slutt": "2022-11-02T09:49:08.430Z"
  },
  "krav": [
    {
      "partIdentifikator": "string",
      "kravidentifikator": "string",
      "kravbeskrivelse": "string",
      "opprettelsesdatoForKrav": "2022-11-02T09:49:08.430Z",
      "kravperiode": "string",
      "opprinneligBeloep": 0,
      "kravforfall": [
        {
          "forfallsdato": "2022-11-02T09:49:08.430Z",
          "opprinneligBeloep": 0,
          "gjenstaaendeBeloep": 0,
          "plassertInnbetaling": [
            {
              "innbetalingsdato": "2022-11-02T09:49:08.430Z",
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
              "plasseringsdato": "2022-11-02T09:49:08.430Z",
              "innbetalingsIdentifikator": "string",
              "innbetalingstype": "string"
            }
          ],
          "plassertMotkrav": [
            {
              "motkravBeskrivelse": "string",
              "motkravForfallsIdentifikator": "string",
              "motkravForfallsdato": "2022-11-02T09:49:08.430Z",
              "plassertBeloep": 0,
              "plasseringsdato": "2022-11-02T09:49:08.430Z"
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
  ]
}
```
