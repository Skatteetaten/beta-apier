# Endepunkter

## Oversikt

Hent oversikt over åpne krav og uplasserte innbetalinger.

Gjør oppslag mot reskontrosystemene på åpne krav og uplasserte innbetalinger og oppgir de samlet med en summert oversikt.

### Format på respons

```json
{
  "forespurtPart": "string",
  "aapentKravMedGjenstaaendeBeloep": [
    {
      "part": "string",
      "kravidentifikator": "string",
      "kravbeskrivelse": "string",
      "opprettelsesdatoForKrav": "2022-10-05T07:10:26.492Z",
      "kravperiode": "string",
      "kravforfall": [
        {
          "kravforfallsIdentifikator": "string",
          "forfallsdato": "2022-10-05T07:10:26.492Z",
          "opprinneligBeloep": 0,
          "plassertInnbetaling": [
            {
              "innbetalingsidentifikator": "string",
              "innbetalingsdato": "2022-10-05T07:10:26.492Z",
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
              "plasseringsdato": "2022-10-05T07:10:26.492Z"
            }
          ],
          "plassertMotkrav": [
            {
              "motkravBeskrivelse": "string",
              "motkravForfallsIdentifikator": "string",
              "motkravForfallsdato": "2022-10-05T07:10:26.492Z",
              "plassertBeloep": 0,
              "plasseringsdato": "2022-10-05T07:10:26.492Z"
            }
          ],
          "gjenstaaendeBeloep": 0,
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
      "opprinneligBeloep": 0,
      "gjenstaaendeBeloep": 0,
      "stipulerteRenter": 0,
      "kravtype": "string",
      "kravgruppe": "string"
    }
  ],
  "innbetalingMedUplassertBeloep": [
    {
      "part": "string",
      "innbetalingsdato": "2022-10-05T07:10:26.492Z",
      "innbetaltBeloep": 0,
      "uplassertBeloep": 0,
      "plassertInnbetalingMotKrav": [
        {
          "dekketKrav": "string",
          "kravperiode": {
            "start": "2022-10-05T07:10:26.492Z",
            "slutt": "2022-10-05T07:10:26.492Z"
          },
          "kravforfallIdentifikator": "string",
          "plassertBeloep": 0,
          "plasseringsdato": "2022-10-05T07:10:26.492Z"
        }
      ],
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
      "betaltTilKonto": {
        "bankinformasjon": "string",
        "kontoeiersNavn": "string",
        "kontonummer": "string",
        "iban": "string",
        "swiftBIC": "string"
      },
      "innbetalingsIdentifikator": "string"
    }
  ],
  "totalOversikt": {
    "stipulerteRenter": 0,
    "forfalteKrav": 0,
    "ikkeForfalteKrav": 0,
    "uplasserteInnbetalinger": 0,
    "saldo": 0
  },
  "oversiktPerKravgruppe": [
    {
      "kravgruppe": "string",
      "stipulerteRenter": 0,
      "forfalteKrav": 0,
      "ikkeForfalteKrav": 0,
      "saldo": 0
    }
  ]
}
```

## Krav

Hent alle krav innen et gitt tidsrom.

Gjør oppslag mot reskontrosystemene på alle krav innen et gitt tidsrom på maks ett år.

### Format på respons

```json
{
  "forespurtPart": "string",
  "periode": {
    "start": "2022-10-05T07:12:13.589Z",
    "slutt": "2022-10-05T07:12:13.589Z"
  },
  "krav": [
    {
      "part": "string",
      "kravidentifikator": "string",
      "kravbeskrivelse": "string",
      "opprettelsesdatoForKrav": "2022-10-05T07:12:13.589Z",
      "kravperiode": "string",
      "kravforfall": [
        {
          "kravforfallsIdentifikator": "string",
          "forfallsdato": "2022-10-05T07:12:13.589Z",
          "opprinneligBeloep": 0,
          "plassertInnbetaling": [
            {
              "innbetalingsidentifikator": "string",
              "innbetalingsdato": "2022-10-05T07:12:13.589Z",
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
              "plasseringsdato": "2022-10-05T07:12:13.590Z"
            }
          ],
          "plassertMotkrav": [
            {
              "motkravBeskrivelse": "string",
              "motkravForfallsIdentifikator": "string",
              "motkravForfallsdato": "2022-10-05T07:12:13.590Z",
              "plassertBeloep": 0,
              "plasseringsdato": "2022-10-05T07:12:13.590Z"
            }
          ],
          "gjenstaaendeBeloep": 0,
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
      "opprinneligBeloep": 0,
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

### Format på respons

```json
{
  "forespurtPart": "string",
  "periode": {
    "start": "2022-10-05T07:13:41.744Z",
    "slutt": "2022-10-05T07:13:41.744Z"
  },
  "innbetaling": [
    {
      "part": "string",
      "innbetalingsdato": "2022-10-05T07:13:41.744Z",
      "innbetaltBeloep": 0,
      "uplassertBeloep": 0,
      "plassertInnbetalingMotKrav": [
        {
          "dekketKrav": "string",
          "kravperiode": {
            "start": "2022-10-05T07:13:41.744Z",
            "slutt": "2022-10-05T07:13:41.744Z"
          },
          "kravforfallIdentifikator": "string",
          "plassertBeloep": 0,
          "plasseringsdato": "2022-10-05T07:13:41.744Z"
        }
      ],
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
      "betaltTilKonto": {
        "bankinformasjon": "string",
        "kontoeiersNavn": "string",
        "kontonummer": "string",
        "iban": "string",
        "swiftBIC": "string"
      },
      "innbetalingsIdentifikator": "string"
    }
  ]
}
```

## Utbetalinger

Denne tjenesten er ennå ikke tilgjengelig for bruk.

Gjør oppslag mot reskontrosystemene på alle utbetalinger innen et gitt tidsrom på maks ett år.

### Foreløpig format på respons

```json
{
  "forespurtPart": "string",
  "periode": {
    "start": "2022-10-05T07:02:19.064Z",
    "slutt": "2022-10-05T07:02:19.064Z"
  },
  "utbetaling": [
    {
      "part": "string",
      "utbetalingsbeskrivelse": "string",
      "utbetaltdato": "2022-10-05T07:02:19.064Z",
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
            "start": "2022-10-05T07:02:19.064Z",
            "slutt": "2022-10-05T07:02:19.064Z"
          },
          "opprinneligBeloep": 0,
          "gjenstaaendeBeloep": 0
        }
      ]
    }
  ]
}
```
