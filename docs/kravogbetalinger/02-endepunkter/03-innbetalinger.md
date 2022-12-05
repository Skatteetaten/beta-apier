# Innbetalinger

Hent alle innbetalinger innen et gitt tidsrom.

Gjør oppslag mot reskontrosystemene på alle innbetalinger innen et gitt tidsrom på maks ett år.

**Request URL - eksempel**
```
GET https://{env}/api/innkreving/kravogbetalinger/v1/finans/12345678901/innbetalinger?fraOgMed=2020-01-01&tilOgMed=2021-12-01
```
env: [Miljø-spesifikk adresse](https://skatteetaten.github.io/datasamarbeid-api-dokumentasjon/about_miljoer)

**Eksempel på respons**

```json
{
    "partIdentifikator": "313367002",
    "periode": {
        "fraOgMed": "2022-01-01",
        "tilOgMed": "2023-01-01"
    },
    "innbetaling": [
        {
            "partIdentifikator": "313367002",
            "innbetalingsidentifikator": "inn-12345",
            "innbetalingsdato": "2022-09-28",
            "innbetaltBeloep": 1000,
            "plassertInnbetalingMotKrav": [],
            "betaltTilKonto": {
                "kontonummer": "98766543211"
            },
            "betaltFra": {
                "konto": {
                    "kontoeiersNavn": "HEVNGJERRIG EKTE KATT KRYDDER",
                    "kontonummer": "98766543211"
                }
            },
            "innbetalingstype": "bankoverføring"
        }
    ]
}
```
