# Informasjonsmodeller

# Informasjonsmodell for utleggsbegjæring versjon 1.

[![Informasjonsmodell for Utleggsbegjæring](bilder/informasjonsmodell-utleggsbegjæring-v1.png)](bilder/informasjonsmodell-utleggsbegjæring-v1.png)

# Eksempel på utleggsbegjæring

Eksempelet nedenfor bruker testparter fra Tenor. De syntetiske dataene i dokumentet byttes ut med deres egne syntetiske data. Dette inkluderer opplastede vedlegg, samt valgte aktører (innsender, saksøkte, saksøkere og prosessfullmektig) fra Tenor.

```json title="Enkelt eksempel på utleggsbegjæring"
{
  "saksoeker": [
    {
      "saksoeker": {
        "adresse": [
          {
            "adressetype": "bopelsadresse",
            "adresseInnland": {
              "adresseFrittFormatInnland": {
                "kommunenummer": "4601",
                "postnummer": "5231",
                "adressetekst": "Nattlandsåsen 2"
              }
            }
          }
        ],
        "virksomhet": {
          "navn": "UPERSONLIG FRISK TIGER AS",
          "identifikator": {
            "identifikatortype": "taxIdentificationNumber",
            "verdi": "311758489",
            "landkode": "NO"
          },
          "virksomhetstype": "inkassovirksomhet"
        }
      },
      "saksoekerReferanse": "saksoekerReferanse"
    }
  ],
  "saksoekt": [
    {
      "saksoekt": {
        "adresse": [
          {
            "adressetype": "bopelsadresse",
            "adresseInnland": {
              "adresseFrittFormatInnland": {
                "kommunenummer": "0301",
                "postnummer": "0351",
                "adressetekst": "Josefines gate 3D"
              }
            }
          }
        ],
        "person": {
          "personnavn": {
            "fornavn": "LYSEGUL",
            "etternavn": "HENSIKT"
          },
          "foedselsdato": "2006-09-16",
          "identifikator": {
            "identifikatortype": "taxIdentificationNumber",
            "verdi": "44926701751",
            "landkode": "NO"
          }
        }
      }
    }
  ],
  "underskrift": "bevilgningsNavn_ikke finnes i PDF",
  "tvangsfullbyrdelsestype": "utlegg",
  "begjaeringsdato": "2025-01-10",
  "begjaeringensTvangsgrunnlag": [
    {
      "innsendersKravreferanse": [
        "00890772001",
        "RentekravPåHovedkrav_00890772001_1",
        "UtenrettsligKostnaderPåHovedkrav_00890772001"
      ],
      "eksternSaksreferanse": "Saksnr: 106109935",
      "tvangsgrunnlagsdato": "2024-07-02",
      "tvangsgrunnlag": {
        "type": "tvangsgrunnlag",
        "filnavn": "tvangsgrunnlag",
        "uuid": "1a107a2d-6398-4675-944c-59f44fbeee82"
      },
      "betegnelseAvTvangsgrunnlag": "Kredittkort",
      "varsel": [
        {
          "dato": "2022-04-21",
          "type": "varselTvfbl418",
          "tvangskraftgrunnlag": {
            "type": "tvangskraftgrunnlag",
            "filnavn": "tvangskraftgrunnlag",
            "uuid": "1a107a2d-6398-4675-944c-59f44fbeee82"
          }
        }
      ],
      "begrunnelseUnnlatVarsel": "ukjentOppholdsstedSakssøkt",
      "saerligTvangsgrunnlag": {
        "paalydendeBeloep": 14101.38,
        "skyldner": [
          {
            "identifikatortype": "taxIdentificationNumber",
            "verdi": "44926701751",
            "landkode": "NO"
          }
        ],

        "referanseSak": "IKKE I BRUK FØR 2030",
        "kreditor": [
          {
            "identifikatortype": "taxIdentificationNumber",
            "verdi": "311758489",
            "landkode": "NO"
          }
        ],

        "skriftligMeddelelse": {
          "kravetsGrunnlag": "Kredittkort",
          "krevesFravaersdom": true,
          "forsendelsesmaate": {
            "forsendelsesmaate": "altinn",
            "AlternativElektroniskKanalForMeddelelse": {
              "kanalForMeddelelse": "kanalForMeddelelse",
              "akseptKanalvalg": {
                "type": "annet",
                "filnavn": "akseptKanalvalg",
                "uuid": "1a107a2d-6398-4675-944c-59f44fbeee82"
              }
            }
          },
          "faktiskeForholdForKravet": "Kredittkort",
          "paastand": "ikke pdf",
          "kanBehandlesIForliksraadet": false
        }
      }
    }

  ],
  "kreverRettsgebyrErstattet": true,
  "kravTilInnkreving": [
    {
      "kravforfall": {
        "forfallsdato": "2024-06-15"
      },
      "kravreferanse": "00890772001",
      "opprinneligBeloep": {
        "beloep": 12469.14,
        "valuta": "NOK"
      },
      "gjenstaaendeBeloep": {
        "beloep": 12469.14,
        "valuta": "NOK"
      },
      "prioritetDekningsloven": "b",
      "kravdetaljer": "Hovedkrav",
      "kravbeskrivelse": "kravbeskrivelse",
      "betalingsoppfordring": [
        {
          "betalingsfrist": "2024-07-16",
          "betalingsoppfordring": {
            "type": "betalingsoppfordring",
            "filnavn": "betalingsoppfordring.pdf",
            "uuid": "1a107a2d-6398-4675-944c-59f44fbeee82"
          },
          "brevdato": "2024-07-02"
        }
      ],
      "renteOpplysning": {
        "avtaltRentesats": 21.99
      }
    },
    {
      "kravforfall": {
        "forfallsdato": "2024-06-15"
      },
      "kravreferanse": "RentekravPåHovedkrav_00890772001_1",
      "opprinneligBeloep": {
        "beloep": 232.24,
        "valuta": "NOK"
      },
      "gjenstaaendeBeloep": {
        "beloep": 232.24,
        "valuta": "NOK"
      },
      "prioritetDekningsloven": "b",
      "kravdetaljer": "Rentekrav",
      "kravbeskrivelse": "Renter på hovedkrav",
      "betalingsoppfordring": [
        {
          "betalingsfrist": "2024-07-16",
          "betalingsoppfordring": {
            "type": "betalingsoppfordring",
            "filnavn": "betalingsoppfordring.pdf",
            "uuid": "1a107a2d-6398-4675-944c-59f44fbeee82"
          },
          "brevdato": "2024-07-02"
        }
      ],
      "relatertKrav": [
        "00890772001"
      ],
      "erRentekrav": {
        "rentePeriode": {
          "startdato": "2024-06-02",
          "sluttdato": "2024-07-02"
        }
      }
    },
    {
      "kravforfall": {
        "forfallsdato": "2024-06-15"
      },
      "kravreferanse": "UtenrettsligKostnaderPåHovedkrav_00890772001",
      "opprinneligBeloep": {
        "beloep": 1400,
        "valuta": "NOK"
      },
      "gjenstaaendeBeloep": {
        "beloep": 1400,
        "valuta": "NOK"
      },
      "prioritetDekningsloven": "b",
      "kravdetaljer": "UtenrettsligeKostnader",
      "kravbeskrivelse": "UtenrettsligeKostnader på hovedkrav",
      "betalingsoppfordring": [
        {
          "betalingsfrist": "2024-07-16",
          "betalingsoppfordring": {
            "type": "betalingsoppfordring",
            "filnavn": "betalingsoppfordring.pdf",
            "uuid": "1a107a2d-6398-4675-944c-59f44fbeee82"
          },
          "brevdato": "2024-07-02"
        }
      ],
      "relatertKrav": [
        "00890772001"
      ],
      "renteOpplysning": {
        "avtaltRentesats": 21.99
      }
    }
  ],
  "betalingsinformasjon": {
    "norskKonto": {
      "kontonummer": "69930570044",
      "kidnummer": "2509937609"
    }
  },
  "vedlegg": null,
  "saksreferanse": "saksreferanse",
  "berOmInnkallingTilMoete": false,
  "innsenderReferanse": "InnsenderRef123",
  "valgtNamsmannsdistrikt": {
    "namsmannsdistrikt": "OSLO POLITIDISTRIKT",
    "begrunnelse": "begrunnelse"
  },
  "innsender": {
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
      "virksomhet": {
        "navn": "UTROLIG ESTETISK TIGER AS",
        "identifikator": {
          "identifikatortype": "taxIdentificationNumber",
          "verdi": "312597772",
          "landkode": "NO"
        },
        "virksomhetstype": "inkassovirksomhet"
      }
    },
    "prosessfullmektig": {
      "prosessfullmektig": {
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
        "virksomhet": {
          "navn": "UTROLIG ESTETISK TIGER AS",
          "identifikator": {
            "identifikatortype": "taxIdentificationNumber",
            "verdi": "312597772",
            "landkode": "NO"
          },
          "virksomhetstype": "inkassovirksomhet"
        }
      },
      "bevillingshaver": {
        "navn": {
          "fornavn": "Elisabeth",
          "etternavn": "Lippestad",
          "Xmellomnavn": ""
        },
        "inkassobevillingshaverNummer": "123212132"
      }
    }
  }
}
```

# Mer komplekst eksempel på utleggsbegjæring

Eksempelet nedenfor er noe mer komplisert, med flere tvangsgrunnlag.

```json title="Mer komplekst eksempel på utleggsbegjæring"
{
  "saksoeker":[
    {
      "saksoeker":{
        "adresse":[
          {
            "adressetype":"bopelsadresse",
            "adresseInnland":{
              "adresseFrittFormatInnland":{
                "kommunenummer":"4601",
                "postnummer":"5106",
                "adressetekst":"Våganeset 40C"
              }
            }
          }
        ],
        "virksomhet":{
          "navn":"SMUL FLAT TIGER AS",
          "identifikator":{
            "identifikatortype":"taxIdentificationNumber",
            "verdi":"313182495",
            "landkode":"NO"
          },
          "virksomhetstype":"inkassovirksomhet"
        }
      },
      "saksoekerReferanse":"saksoekerReferanse"
    }
  ],
  "saksoekt":[
    {
      "saksoekt":{
        "adresse":[
          {
            "adressetype":"bopelsadresse",
            "adresseInnland":{
              "adresseFrittFormatInnland":{
                "kommunenummer":"4008",
                "postnummer":"1103",
                "adressetekst":"Kannikgata 32"
              }
            }
          }
        ],
        "person":{
          "personnavn":{
            "fornavn":"Rimelig",
            "etternavn":"Merr"
          },
          "foedselsdato":"1978-08-29",
          "identifikator":{
            "identifikatortype":"taxIdentificationNumber",
            "verdi":"69887800189",
            "landkode":"NO"
          }
        }
      }
    }
  ],
  "underskrift":"bevilgningsNavn_ikke finnes i PDF",
  "tvangsfullbyrdelsestype":"utlegg",
  "begjaeringsdato":"2025-01-12",
  "begjaeringensTvangsgrunnlag":[
    {
      "innsendersKravreferanse":[
        "101461397",
        "RentekravPåHovedkrav_101461397_1",
        "RentekravPåHovedkrav_101461397_2",
        "UtenrettsligKostnaderPåHovedkrav_101461397",
        "RentekravPåUtenrettsligeKostnader"
      ],
      "eksternSaksreferanse":"Saksnr: 150023021",
      "tvangsgrunnlagsdato":"2022-04-21",
      "tvangsgrunnlag":{
        "type":"tvangsgrunnlag",
        "filnavn":"tvangsgrunnlag",
        "uuid":"61e17f8d-9f24-4bd0-ad8b-d7908a1acc18"
      },
      "betegnelseAvTvangsgrunnlag":"Vegfinans E134 Buskerud AS",
      "varsel":[
        {
          "dato":"2022-04-21",
          "type":"varselTvfbl418",
          "tvangskraftgrunnlag":{
            "type":"tvangskraftgrunnlag",
            "filnavn":"tvangskraftgrunnlag",
            "uuid":"61e17f8d-9f24-4bd0-ad8b-d7908a1acc18"
          }
        }
      ],
      "begrunnelseUnnlatVarsel":"ukjentOppholdsstedSakssøkt",
      "saerligTvangsgrunnlag":{
        "paalydendeBeloep":535.79,
        "skyldner":[
          {
            "identifikatortype":"taxIdentificationNumber",
            "verdi":"69887800189",
            "landkode":"NO"
          }
        ],
        "referanseSak":"IKKE I BRUK FØR 2030",
        "kreditor":[
          {
            "identifikatortype":"taxIdentificationNumber",
            "verdi":"313182495",
            "landkode":"NO"
          }
        ],
        "skriftligMeddelelse":{
          "kravetsGrunnlag":"Vegfinans E134 Buskerud AS",
          "krevesFravaersdom":true,
          "forsendelsesmaate":{
            "forsendelsesmaate":"altinn",
            "alternativElektroniskKanalForMeddelelse":{
              "kanalForMeddelelse":"kanalForMeddelelse",
              "akseptKanalvalg":{
                "type":"annet",
                "filnavn":"akseptKanalvalg",
                "uuid":"cbdf604f-03df-4327-8188-d8fcfe72d533"
              }
            }
          },
          "faktiskeForholdForKravet":"Vegfinans E134 Buskerud AS",
          "paastand":"ikke pdf",
          "kanBehandlesIForliksraadet":false
        }
      }
    },
    {
      "innsendersKravreferanse":[
        "102486836_1",
        "102486836_2",
        "RentekravPåHovedkrav_102486836_1",
        "RentekravPåHovedkrav_102486836_2",
        "RentekravPåHovedkrav_102486836_3",
        "UtenrettsligKostnaderPå_102486836",
        "RentekravPåUtenrettsligeKostnader_1"
      ],
      "eksternSaksreferanse":"Saksnr: 20889222",
      "tvangsgrunnlagsdato":"2022-08-18",
      "tvangsgrunnlag":{
        "type":"tvangsgrunnlag",
        "filnavn":"tvangsgrunnlag",
        "uuid":"61e17f8d-9f24-4bd0-ad8b-d7908a1acc18"
      },
      "betegnelseAvTvangsgrunnlag":"Vegfinans Hallingporten AS",
      "varsel":[
        {
          "dato":"2022-08-18",
          "type":"varselTvfbl418",
          "tvangskraftgrunnlag":{
            "type":"tvangskraftgrunnlag",
            "filnavn":"tvangskraftgrunnlag",
            "uuid":"61e17f8d-9f24-4bd0-ad8b-d7908a1acc18"
          }
        }
      ],
      "begrunnelseUnnlatVarsel":"ukjentOppholdsstedSakssøkt",
      "saerligTvangsgrunnlag":{
        "paalydendeBeloep":578.65,
        "skyldner":[
          {
            "identifikatortype":"taxIdentificationNumber",
            "verdi":"69887800189",
            "landkode":"NO"
          }
        ],
        "referanseSak":"IKKE I BRUK FØR 2030",
        "kreditor":[
          {
            "identifikatortype":"taxIdentificationNumber",
            "verdi":"313182495",
            "landkode":"NO"
          }
        ],
        "skriftligMeddelelse":{
          "kravetsGrunnlag":"Vegfinans E134 Buskerud AS",
          "krevesFravaersdom":true,
          "forsendelsesmaate":{
            "forsendelsesmaate":"altinn",
            "alternativElektroniskKanalForMeddelelse":{
              "kanalForMeddelelse":"kanalForMeddelelse",
              "akseptKanalvalg":{
                "type":"annet",
                "filnavn":"akseptKanalvalg",
                "uuid":"cbdf604f-03df-4327-8188-d8fcfe72d533"
              }
            }
          },
          "faktiskeForholdForKravet":"Vegfinans E134 Buskerud AS",
          "paastand":"ikke pdf",
          "kanBehandlesIForliksraadet":false
        }
      }
    }
  ],
  "kreverRettsgebyrErstattet":true,
  "kravTilInnkreving":[
    {
      "kravforfall":{
        "forfallsdato":"2021-07-08"
      },
      "kravreferanse":"101461397",
      "opprinneligBeloep":{
        "beloep":76.0,
        "valuta":"NOK"
      },
      "gjenstaaendeBeloep":{
        "beloep":76.0,
        "valuta":"NOK"
      },
      "prioritetDekningsloven":"e",
      "kravdetaljer":"Hovedkrav",
      "kravbeskrivelse":"kravbeskrivelse",
      "betalingsoppfordring":[
        {
          "betalingsfrist":"2022-05-05",
          "betalingsoppfordring":{
            "type":"betalingsoppfordring",
            "filnavn":"betalingsoppfordring.pdf",
            "uuid":"61e17f8d-9f24-4bd0-ad8b-d7908a1acc18"
          },
          "brevdato":"2022-04-21"
        }
      ],
      "renteOpplysning":{
        "forsinkelsesrente":true
      }
    },
    {
      "kravforfall":{
        "forfallsdato":"2021-07-08"
      },
      "kravreferanse":"RentekravPåHovedkrav_101461397_1",
      "opprinneligBeloep":{
        "beloep":2.93,
        "valuta":"NOK"
      },
      "gjenstaaendeBeloep":{
        "beloep":2.93,
        "valuta":"NOK"
      },
      "prioritetDekningsloven":"e",
      "kravdetaljer":"Rentekrav",
      "kravbeskrivelse":"Renter på hovedkrav",
      "betalingsoppfordring":[
        {
          "betalingsfrist":"2022-05-05",
          "betalingsoppfordring":{
            "type":"betalingsoppfordring",
            "filnavn":"betalingsoppfordring.pdf",
            "uuid":"61e17f8d-9f24-4bd0-ad8b-d7908a1acc18"
          },
          "brevdato":"2022-04-21"
        }
      ],
      "relatertKrav":[
        "101461397"
      ],
      "erRentekrav":{
        "rentePeriode":{
          "startdato":"2021-07-09",
          "sluttdato":"2021-12-31"
        }
      }
    },
    {
      "kravforfall":{
        "forfallsdato":"2021-07-08"
      },
      "kravreferanse":"RentekravPåHovedkrav_101461397_2",
      "opprinneligBeloep":{
        "beloep":1.96,
        "valuta":"NOK"
      },
      "gjenstaaendeBeloep":{
        "beloep":1.96,
        "valuta":"NOK"
      },
      "prioritetDekningsloven":"e",
      "kravdetaljer":"Rentekrav",
      "kravbeskrivelse":"Renter på hovedkrav",
      "betalingsoppfordring":[
        {
          "betalingsfrist":"2022-05-05",
          "betalingsoppfordring":{
            "type":"betalingsoppfordring",
            "filnavn":"betalingsoppfordring.pdf",
            "uuid":"61e17f8d-9f24-4bd0-ad8b-d7908a1acc18"
          },
          "brevdato":"2022-04-21"
        }
      ],
      "relatertKrav":[
        "101461397"
      ],
      "erRentekrav":{
        "rentePeriode":{
          "startdato":"2022-01-01",
          "sluttdato":"2022-04-21"
        }
      }
    },
    {
      "kravforfall":{
        "forfallsdato":"2021-07-08"
      },
      "kravreferanse":"UtenrettsligKostnaderPåHovedkrav_101461397",
      "opprinneligBeloep":{
        "beloep":437.5,
        "valuta":"NOK"
      },
      "gjenstaaendeBeloep":{
        "beloep":437.5,
        "valuta":"NOK"
      },
      "prioritetDekningsloven":"e",
      "kravdetaljer":"UtenrettsligeKostnader",
      "kravbeskrivelse":"UtenrettsligKostnaderPå_102486836",
      "betalingsoppfordring":[
        {
          "betalingsfrist":"2022-05-05",
          "betalingsoppfordring":{
            "type":"betalingsoppfordring",
            "filnavn":"betalingsoppfordring.pdf",
            "uuid":"61e17f8d-9f24-4bd0-ad8b-d7908a1acc18"
          },
          "brevdato":"2022-04-21"
        }
      ],
      "relatertKrav":[
        "101461397"
      ],
      "renteOpplysning":{
        "forsinkelsesrente":true
      }
    },
    {
      "kravforfall":{
        "forfallsdato":"2021-07-08"
      },
      "kravreferanse":"RentekravPåUtenrettsligeKostnader",
      "opprinneligBeloep":{
        "beloep":17.4,
        "valuta":"NOK"
      },
      "gjenstaaendeBeloep":{
        "beloep":17.4,
        "valuta":"NOK"
      },
      "prioritetDekningsloven":"e",
      "kravdetaljer":"Rentekrav",
      "kravbeskrivelse":"kravbeskrivelse??",
      "betalingsoppfordring":[
        {
          "betalingsfrist":"2022-05-05",
          "betalingsoppfordring":{
            "type":"betalingsoppfordring",
            "filnavn":"betalingsoppfordring.pdf",
            "uuid":"61e17f8d-9f24-4bd0-ad8b-d7908a1acc18"
          },
          "brevdato":"2022-04-21"
        }
      ],
      "relatertKrav":[
        "UtenrettsligKostnaderPåHovedkrav_101461397"
      ],
      "erRentekrav":{
        "rentePeriode":{
          "startdato":"2021-10-23",
          "sluttdato":"2022-04-21"
        }
      }
    },
    {
      "kravforfall":{
        "forfallsdato":"2021-12-07"
      },
      "kravreferanse":"102486836_1",
      "opprinneligBeloep":{
        "beloep":78.0,
        "valuta":"NOK"
      },
      "gjenstaaendeBeloep":{
        "beloep":78.0,
        "valuta":"NOK"
      },
      "prioritetDekningsloven":"e",
      "kravdetaljer":"Hovedkrav",
      "kravbeskrivelse":"Hovedkrav 1",
      "betalingsoppfordring":[
        {
          "betalingsfrist":"2022-09-01",
          "betalingsoppfordring":{
            "type":"betalingsoppfordring",
            "filnavn":"betalingsoppfordring.pdf",
            "uuid":"61e17f8d-9f24-4bd0-ad8b-d7908a1acc18"
          },
          "brevdato":"2022-08-18"
        }
      ],
      "renteOpplysning":{
        "forsinkelsesrente":true
      }
    },
    {
      "kravforfall":{
        "forfallsdato":"2021-12-07"
      },
      "kravreferanse":"102486836_2",
      "opprinneligBeloep":{
        "beloep":38.0,
        "valuta":"NOK"
      },
      "gjenstaaendeBeloep":{
        "beloep":38.0,
        "valuta":"NOK"
      },
      "prioritetDekningsloven":"e",
      "kravdetaljer":"Hovedkrav",
      "kravbeskrivelse":"Hovedkrav 1",
      "betalingsoppfordring":[
        {
          "betalingsfrist":"2022-09-01",
          "betalingsoppfordring":{
            "type":"betalingsoppfordring",
            "filnavn":"betalingsoppfordring.pdf",
            "uuid":"61e17f8d-9f24-4bd0-ad8b-d7908a1acc18"
          },
          "brevdato":"2022-08-18"
        }
      ],
      "renteOpplysning":{
        "forsinkelsesrente":true
      }
    },
    {
      "kravforfall":{
        "forfallsdato":"2021-12-07"
      },
      "kravreferanse":"RentekravPåHovedkrav_102486836_1",
      "opprinneligBeloep":{
        "beloep":0.61,
        "valuta":"NOK"
      },
      "gjenstaaendeBeloep":{
        "beloep":0.61,
        "valuta":"NOK"
      },
      "prioritetDekningsloven":"e",
      "kravdetaljer":"Rentekrav",
      "kravbeskrivelse":"Renter på hovedkrav",
      "betalingsoppfordring":[
        {
          "betalingsfrist":"2022-09-01",
          "betalingsoppfordring":{
            "type":"betalingsoppfordring",
            "filnavn":"betalingsoppfordring.pdf",
            "uuid":"61e17f8d-9f24-4bd0-ad8b-d7908a1acc18"
          },
          "brevdato":"2022-08-18"
        }
      ],
      "relatertKrav":[
        "102486836_1",
        "102486836_2"
      ],
      "erRentekrav":{
        "rentePeriode":{
          "startdato":"2021-12-18",
          "sluttdato":"2021-12-31"
        }
      }
    },
    {
      "kravforfall":{
        "forfallsdato":"2021-12-07"
      },
      "kravreferanse":"RentekravPåHovedkrav_102486836_2",
      "opprinneligBeloep":{
        "beloep":4.89,
        "valuta":"NOK"
      },
      "gjenstaaendeBeloep":{
        "beloep":4.89,
        "valuta":"NOK"
      },
      "prioritetDekningsloven":"e",
      "kravdetaljer":"Rentekrav",
      "kravbeskrivelse":"Renter på hovedkrav 2",
      "betalingsoppfordring":[
        {
          "betalingsfrist":"2022-09-01",
          "betalingsoppfordring":{
            "type":"betalingsoppfordring",
            "filnavn":"betalingsoppfordring.pdf",
            "uuid":"61e17f8d-9f24-4bd0-ad8b-d7908a1acc18"
          },
          "brevdato":"2022-08-18"
        }
      ],
      "relatertKrav":[
        "102486836_1",
        "102486836_2"
      ],
      "erRentekrav":{
        "rentePeriode":{
          "startdato":"2022-01-01",
          "sluttdato":"2022-06-30"
        }
      }
    },
    {
      "kravforfall":{
        "forfallsdato":"2021-12-07"
      },
      "kravreferanse":"RentekravPåHovedkrav_102486836_3",
      "opprinneligBeloep":{
        "beloep":1.44,
        "valuta":"NOK"
      },
      "gjenstaaendeBeloep":{
        "beloep":1.44,
        "valuta":"NOK"
      },
      "prioritetDekningsloven":"e",
      "kravdetaljer":"Rentekrav",
      "kravbeskrivelse":"Renter på hovedkrav 3",
      "betalingsoppfordring":[
        {
          "betalingsfrist":"2022-09-01",
          "betalingsoppfordring":{
            "type":"betalingsoppfordring",
            "filnavn":"betalingsoppfordring.pdf",
            "uuid":"61e17f8d-9f24-4bd0-ad8b-d7908a1acc18"
          },
          "brevdato":"2022-08-18"
        }
      ],
      "relatertKrav":[
        "102486836_1",
        "102486836_2"
      ],
      "erRentekrav":{
        "rentePeriode":{
          "startdato":"2022-07-01",
          "sluttdato":"2022-08-18"
        }
      }
    },
    {
      "kravforfall":{
        "forfallsdato":"2021-12-07"
      },
      "kravreferanse":"UtenrettsligKostnaderPå_102486836",
      "opprinneligBeloep":{
        "beloep":437.5,
        "valuta":"NOK"
      },
      "gjenstaaendeBeloep":{
        "beloep":437.5,
        "valuta":"NOK"
      },
      "prioritetDekningsloven":"e",
      "kravdetaljer":"UtenrettsligeKostnader",
      "kravbeskrivelse":"UtenrettsligeKostnader på hovedkrav",
      "betalingsoppfordring":[
        {
          "betalingsfrist":"2022-09-01",
          "betalingsoppfordring":{
            "type":"betalingsoppfordring",
            "filnavn":"betalingsoppfordring.pdf",
            "uuid":"61e17f8d-9f24-4bd0-ad8b-d7908a1acc18"
          },
          "brevdato":"2022-08-18"
        }
      ],
      "relatertKrav":[
        "102486836_1",
        "102486836_2"
      ],
      "renteOpplysning":{
        "forsinkelsesrente":true
      }
    },
    {
      "kravforfall":{
        "forfallsdato":"2021-12-07"
      },
      "kravreferanse":"RentekravPåUtenrettsligeKostnader_1",
      "opprinneligBeloep":{
        "beloep":18.21,
        "valuta":"NOK"
      },
      "gjenstaaendeBeloep":{
        "beloep":18.21,
        "valuta":"NOK"
      },
      "prioritetDekningsloven":"e",
      "kravdetaljer":"Rentekrav",
      "kravbeskrivelse":"Renter på uttenrettslige kostnader",
      "betalingsoppfordring":[
        {
          "betalingsfrist":"2022-09-01",
          "betalingsoppfordring":{
            "type":"betalingsoppfordring",
            "filnavn":"betalingsoppfordring.pdf",
            "uuid":"61e17f8d-9f24-4bd0-ad8b-d7908a1acc18"
          },
          "brevdato":"2022-08-18"
        }
      ],
      "relatertKrav":[
        "UtenrettsligKostnaderPå_102486836"
      ],
      "erRentekrav":{
        "rentePeriode":{
          "startdato":"2022-02-19",
          "sluttdato":"2022-08-18"
        }
      }
    }
  ],
  "betalingsinformasjon":{
    "norskKonto":{
      "kontonummer":"69930570044",
      "kidnummer":"2509937609"
    }
  },
  "vedlegg":[

  ],
  "saksreferanse":"saksreferanse",
  "berOmInnkallingTilMoeteMedBegrunnelse":"",
  "innsenderReferanse":"InnsenderRef123",
  "valgtNamsmannsdistrikt":{
    "namsmannsdistrikt":"OSLO POLITIDISTRIKT",
    "begrunnelse":"begrunnelse"
  },
  "innsender":{
    "innsender":{
      "adresse":[
        {
          "adressetype":"bopelsadresse",
          "adresseInnland":{
            "adresseFrittFormatInnland":{
              "kommunenummer":"0301",
              "postnummer":"1333",
              "adressetekst":"string",
              "poststedsnavn":"Bergen"
            }
          }
        }
      ],
      "virksomhet":{
        "navn":"UTROLIG ESTETISK TIGER AS",
        "identifikator":{
          "identifikatortype":"taxIdentificationNumber",
          "verdi":"312597772",
          "landkode":"NO"
        },
        "virksomhetstype":"inkassovirksomhet"
      }
    },
    "prosessfullmektig":{
      "prosessfullmektig":{
        "adresse":[
          {
            "adressetype":"bopelsadresse",
            "adresseInnland":{
              "adresseFrittFormatInnland":{
                "kommunenummer":"0301",
                "postnummer":"1333",
                "adressetekst":"string",
                "poststedsnavn":"Bergen"
              }
            }
          }
        ],
        "virksomhet":{
          "navn":"UTROLIG ESTETISK TIGER AS",
          "identifikator":{
            "identifikatortype":"taxIdentificationNumber",
            "verdi":"312597772",
            "landkode":"NO"
          },
          "virksomhetstype":"inkassovirksomhet"
        }
      },
      "bevillingshaver":{
        "navn":{
          "fornavn":"Elisabeth",
          "etternavn":"Lippestad",
          "mellomnavn":""
        },
        "inkassobevillingshaverNummer":"123212132"
      }
    }
  }
}
```
