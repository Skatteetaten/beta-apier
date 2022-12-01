# Alle krav

Hent alle krav innen et gitt tidsrom.

Gjør oppslag mot reskontrosystemene på alle krav innen et gitt tidsrom på maks ett år.

**Request URL - eksempel**
```
https://{env}/api/innkreving/kravogbetalinger/v1/finans/12345678901/krav?fraOgMed=2020-01-01&tilOgMed=2021-01-01
```
env: [Miljø-spesifikk adresse](https://skatteetaten.github.io/datasamarbeid-api-dokumentasjon/about_miljoer)

**Eksempel på request**

```json
{"partIdentifikator":"310478717","periode":{"start":"2022-01-01","slutt":"2023-01-01"}}
```

**Eksempel på respons**

```json
{
    "partIdentifikator": "310478717",
    "periode": {
        "start": "2022-01-01T00:00:00.000+01:00",
        "slutt": "2023-01-01T00:00:00.000+01:00"
    },
    "krav": [
        {
            "kravidentifikator": "krav-1234",
            "kravbeskrivelse": "Restskatt",
            "opprettelsesdatoForKrav": "2022-08-28T00:00:00.000+02:00",
            "kravperiode": "2022/09",
            "opprinneligBeloep": 1000,
            "kravforfall": [
                {
                    "forfallsdato": "2022-09-28T00:00:00.000+02:00",
                    "opprinneligBeloep": 1000.00,
                    "gjenstaaendeBeloep": 1000.00,
                    "plassertInnbetaling": [
                        {
                            "betaltFra": {
                                "konto": {}
                            },
                            "plassertBeloep": -1000,
                            "plasseringsdato": "2022-09-28T00:00:00.000+02:00",
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
            "stipulerteRenter": 20.00,
            "kravtype": "RESTSKATT",
            "kravgruppe": "Skatt"
        }
    ]
}
```
