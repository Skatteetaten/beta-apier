# Alle krav

Hent alle krav innen et gitt tidsrom.

Gjør oppslag mot reskontrosystemene på alle krav innen et gitt tidsrom på maks ett år.

**Request URL - eksempel**

```
https://{env}/api/innkreving/kravogbetalinger/v1/finans/12345678901/krav?fraOgMed=2020-01-01&tilOgMed=2021-01-01
```

env: [Miljø-spesifikk adresse](https://skatteetaten.github.io/datasamarbeid-api-dokumentasjon/about_miljoer)

**Eksempel på respons**

```json
{
  "partIdentifikator": "310478717",
  "periode": {
    "fraOgMed": "2022-01-01",
    "tilOgMed": "2023-01-01"
  },
  "krav": [
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
              "innbetalingsIdentifikator": "inn-123456"
            }
          ],
          "plassertMotkrav": [],
          "kravforfallsIdentifikator": "7d82a522-dd9c-423a-bf14-913fe4511248",
          "betalingsinformasjon": {
            "konto": {
              "kontonummer": "82561901224"
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
  ]
}
```
