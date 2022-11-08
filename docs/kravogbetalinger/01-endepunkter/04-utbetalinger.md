# Utbetalinger

Denne tjenesten er ikke tilgjengelig for bruk og vil komme senere. Detaljer rundt implementasjonen kan endre.

Gjør oppslag mot reskontrosystemene på alle utbetalinger innen et gitt tidsrom på maks ett år.

## Format på request

```json
{
  "partIdentifikator": "string",
  "periode": {
    "start": "2022-11-02T09:50:38.412Z",
    "slutt": "2022-11-02T09:50:38.412Z"
  }
}
```

## Format på respons

```json
{
  "partIdentifikator": "string",
  "periode": {
    "start": "2022-11-02T09:50:38.414Z",
    "slutt": "2022-11-02T09:50:38.414Z"
  },
  "utbetaling": [
    {
      "partIdentifikator": "string",
      "utbetalingsbeskrivelse": "string",
      "utbetaltdato": "2022-11-02T09:50:38.414Z",
      "utbetaltBeloep": 0,
      "betaltTil": {
        "kidnummer": "string",
        "konto": {
          "bankinformasjon": "string",
          "kontoeiersNavn": "string",
          "kontonummer": "string",
          "iban": "string",
          "swiftBIC": "string"
        }
      },
      "utbetalingIdentifikator": "string",
      "grunnlagForUtbetaling": [
        {
          "dekketKrav": "string",
          "kravIdentifikator": "string",
          "kravtype": "string",
          "kravperiode": {
            "start": "2022-11-02T09:50:38.414Z",
            "slutt": "2022-11-02T09:50:38.414Z"
          },
          "opprinneligBeloep": 0,
          "gjenstaaendeBeloep": 0
        }
      ]
    }
  ]
}
```
