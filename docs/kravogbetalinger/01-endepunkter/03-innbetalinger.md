# Innbetalinger

Hent alle innbetalinger innen et gitt tidsrom.

Gjør oppslag mot reskontrosystemene på alle innbetalinger innen et gitt tidsrom på maks ett år.

## Format på request

```json
{
  "partIdentifikator": "string",
  "periode": {
    "start": "2022-11-02T09:50:00.387Z",
    "slutt": "2022-11-02T09:50:00.387Z"
  }
}
```

## Format på respons

```json
{
  "partIdentifikator": "string",
  "periode": {
    "start": "2022-11-02T09:50:00.388Z",
    "slutt": "2022-11-02T09:50:00.388Z"
  },
  "innbetaling": [
    {
      "partIdentifikator": "string",
      "innbetalingsidentifikator": "string",
      "innbetalingsdato": "2022-11-02T09:50:00.388Z",
      "innbetaltBeloep": 0,
      "plassertInnbetalingMotKrav": [
        {
          "dekketKrav": "string",
          "kravforfallIdentifikator": "string",
          "kravforfallsdato": "2022-11-02T09:50:00.388Z",
          "plasseringsdato": "2022-11-02T09:50:00.388Z",
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
  ]
}
```
