# Endepunkter

Utfyllende beskrivelse av endepunkter kommer i løpet av november

## Oversikt

Hent oversikt over åpne krav og uplasserte innbetalinger.

Gjør oppslag mot reskontrosystemene på åpne krav og uplasserte innbetalinger og oppgir de samlet med en summert oversikt.

### Format på request

```json
{
  "partIdentifikator": "string"
}
```

### Format på respons

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

## Krav

Hent alle krav innen et gitt tidsrom.

Gjør oppslag mot reskontrosystemene på alle krav innen et gitt tidsrom på maks ett år.

### Format på request

```json
{
  "partIdentifikator": "string",
  "periode": {
    "start": "2022-11-02T09:49:08.429Z",
    "slutt": "2022-11-02T09:49:08.429Z"
  }
}
```

### Format på respons

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

## Innbetalinger

Hent alle innbetalinger innen et gitt tidsrom.

Gjør oppslag mot reskontrosystemene på alle innbetalinger innen et gitt tidsrom på maks ett år.

### Format på request

```json
{
  "partIdentifikator": "string",
  "periode": {
    "start": "2022-11-02T09:50:00.387Z",
    "slutt": "2022-11-02T09:50:00.387Z"
  }
}
```

### Format på respons

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

## Utbetalinger

Denne tjenesten er ennå ikke tilgjengelig for bruk.

Gjør oppslag mot reskontrosystemene på alle utbetalinger innen et gitt tidsrom på maks ett år.

### Format på request

```json
{
  "partIdentifikator": "string",
  "periode": {
    "start": "2022-11-02T09:50:38.412Z",
    "slutt": "2022-11-02T09:50:38.412Z"
  }
}
```

### Foreløpig format på respons

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
