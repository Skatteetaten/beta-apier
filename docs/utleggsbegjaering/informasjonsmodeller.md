# Informasjonsmodeller

# Informasjonsmodell for utleggsbegjæring versjon 1.

[![Informasjonsmodell for Utleggsbegjæring](bilder/informasjonsmodell-utleggsbegjæring-v1.png)](bilder/informasjonsmodell-utleggsbegjæring-v1.png)

# Eksempel på utleggsbegjæring

Eksempelet nedenfor bruker testparter fra Tenor. De syntetiske dataene i dokumentet byttes ut med deres egne syntetiske data. Dette inkluderer opplastede vedlegg, samt valgte aktører (innsender, saksøkte, saksøkere og prosessfullmektig) fra Tenor.

```json title="Eksempel på utleggsbegjæring"
{
  "saksoeker": [
    {
      "adresse": [
        {
          "adressetype": "bopelsadresse",
          "adresseInnland": {
            "adresseFrittFormatInnland": {
              "kommunenummer": "3405",
              "postnummer": "2608",
              "adressetekst": "Vingarvegen 58B"
            }
          }
        }
      ],
      "aktørType": "Saksoeker",
      "virksomhet": {
        "navn": "Skjønn ARITMETISK TIGER AS",
        "identifikator": {
          "identifikatortype": "taxIdentificationNumber",
          "verdi": "313791513",
          "landkode": "NO"
        },
        "virksomhetstype": "inkassovirksomhet"
      }
    }
  ],
  "saksoekt": [
    {
      "adresse": [
        {
          "adressetype": "bopelsadresse",
          "adresseInnland": {
            "adresseFrittFormatInnland": {
              "kommunenummer": "3103",
              "postnummer": "1512",
              "adressetekst": "Varden"
            }
          }
        }
      ],
      "aktørType": "Saksoekt",
      "person": {
        "etternavn": "KLINKEKULE",
        "foedselsdato": "2006-09-16",
        "fornavn": "KOSTBAR",
        "identifikator": {
          "identifikatortype": "taxIdentificationNumber",
          "verdi": "30906197746",
          "landkode": "NO"
        }
      }
    }
  ],
  "underskrift": "string",
  "tvangsfullbyrdelsestype": "utleggOgForlliksklageKombinert",
  "begjaeringsdato": "2023-02-15",
  "mottaksdato": "2023-06-03",
  "begjaeringensTvangsgrunnlag": [
    {
      "innsendersKravreferanse": [
        "KravReferanse1",
        "KravReferanse2",
        "KravReferanse3"
      ],
      "skriftligMeddelelse": {
        "krevesFravaersdom": true,
        "faktiskeForholdForKravet": "faktiskeForholdForKravet",
        "tvangsgrunnlag": {
          "type": "tvangsgrunnlag",
          "filnavn": "tvangsgrunnlag8",
          "uuid": "77ebc92e-b777-496e-9f24-84c78afcbf46"
        },
        "varsel": [
          {
            "dato": "2023-06-13",
            "type": "varselTvfbl418",
            "tvangskraftgrunnlag": {
              "type": "tvangskraftgrunnlag",
              "filnavn": "tvangskraftgrunnlag",
              "uuid": "c4e28845-31f6-4e8c-baf7-5936ec24d9e0"
            }
          }
        ],
        "rente": {
          "rentefot": {
            "rentesats": 24
          },
          "forsinkelsesrente": {
            "forsinkelsesrente": true
          }
        },
        "dato": "2023-05-04",
        "betegnelseAvTvangsgrunnlag": "string",
        "tvangsgrunnlagType": "SkriftligMeddelelse",
        "paalydendeBeloep": 0,
        "skyldner": {
          "identifikatortype": "taxIdentificationNumber",
          "verdi": "string",
          "landkode": "NO"
        },
        "kravetsGrunnlag": "string",
        "forsendelsesmaate": "string",
        "paastand": "string",
        "kanBehandlesIForliksraadet": false,
        "eksterntSaksnummer": "string",
        "begjaeringOmFritakFraVarsling": "string",
        "begrunnelseUnnlatVarsel": "ukjentOppholdsstedSakssøkt",
        "saerligtvangsgrunnlagtype": "SkriftligMeddelelse",
        "referanseSak": "string"
      }
    }
  ],
  "kreverRettsgebyrErstattet": true,
  "kravTilInnkreving": [
    {
      "rentebaerendeKrav": {
        "kravforfall": {
          "betalingsfrist": "2024-02-10",
          "kidnummer": "4009897929"
        },
        "kravreferanse": "KravReferanse1",
        "opprettelsesdatoForKrav": "2023-04-01",
        "opprinneligBeloep": {
          "beloep": 13641.86,
          "valuta": "nok"
        },
        "gjenstaaendeBeloep": {
          "beloep": 13641.86,
          "valuta": "nok"
        },
        "kravdetaljer": "KRV",
        "typeKrav": "RentebaerendeKrav",
        "rente": {
          "rentefot": {
            "rentesats": 24
          },
          "forsinkelsesrente": {
            "forsinkelsesrente": true
          }
        },
        "betalingsoppfordring": [
          {
            "forfallsdato": "2024-11-25",
            "betalingsoppfordring": {
              "type": "betalingsoppfordring",
              "filnavn": "betalingsoppfordring.pdf",
              "uuid": "c4e28845-31f6-4e8c-baf7-5936ec24d9e0"
            }
          }
        ],
        "transporterklaering": [
          {
            "dato": "2024-09-25",
            "transporterklaering": {
              "type": "transporterklæring",
              "filnavn": "transporterklaering.pdf",
              "uuid": "c4e28845-31f6-4e8c-baf7-5936ec24d9e0"
            }
          }
        ],
        "innbetaling": [
          {
            "dato": "2023-05-04",
            "beloep": {
              "beloep": 100,
              "valuta": "nok"
            }
          }
        ]
      }
    },
    {
      "ikkeRentebaerendeKrav": {
        "kravforfall": {
          "betalingsfrist": "2023-05-18",
          "kidnummer": "4009897929"
        },
        "kravreferanse": "KravReferanse2",
        "opprettelsesdatoForKrav": "2023-04-01",
        "opprinneligBeloep": {
          "beloep": 1687.02,
          "valuta": "nok"
        },
        "gjenstaaendeBeloep": {
          "beloep": 1687.03,
          "valuta": "nok"
        },
        "kravdetaljer": "REN",
        "typeKrav": "IkkeRentebaerendeKrav",
        "innbetaling": [
          {
            "dato": "2023-05-04",
            "beloep": {
              "beloep": 100,
              "valuta": "nok"
            }
          }
        ]
      }
    },
    {
      "rentebaerendeKrav": {
        "kravforfall": {
          "betalingsfrist": "2023-05-18",
          "kidnummer": "4009897929"
        },
        "kravreferanse": "KravReferanse3",
        "opprettelsesdatoForKrav": "2023-04-01",
        "opprinneligBeloep": {
          "beloep": 2800,
          "valuta": "nok"
        },
        "gjenstaaendeBeloep": {
          "beloep": 2800,
          "valuta": "nok"
        },
        "kravdetaljer": "UIK",
        "typeKrav": "RentebaerendeKrav",
        "innbetaling": [
          {
            "dato": "2023-05-04",
            "beloep": {
              "beloep": 100,
              "valuta": "nok"
            }
          }
        ]
      }
    }
  ],
  "berOmInnkallingTilMoete": false,
  "innsenderReferanse": "InnsendersUnikeReferanse",
  "besluttetNamsmannsdistrikt": {
    "namsmannsdistrikt": "SØR-ØST POLITIDISTRIKT",
    "begrunnelse": "Utledet namsmannsdistrikt"
  },
  "innsender": {
    "adresse": [
      {
        "adressetype": "bopelsadresse",
        "adresseInnland": {
          "adresseFrittFormatInnland": {
            "kommunenummer": "0301",
            "postnummer": "1333",
            "adressetekst": "string",
            "poststedsnavn": "Bergen"
          }
        }
      }
    ],
    "aktørType": "Innsender",
    "virksomhet": {
      "navn": "UTROLIG ESTETISK TIGER AS",
      "identifikator": {
        "identifikatortype": "taxIdentificationNumber",
        "verdi": "312597772",
        "landkode": "NO"
      },
      "virksomhetstype": "inkassovirksomhet"
    }
  }
}
```