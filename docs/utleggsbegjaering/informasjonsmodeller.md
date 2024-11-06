# Informasjonsmodeller

# Informasjonsmodell for utleggsbegjæring versjon 1.

[![Informasjonsmodell for Utleggsbegjæring](bilder/informasjonsmodell-utleggsbegjæring-v1.png)](bilder/informasjonsmodell-utleggsbegjæring-v1.png)

# Eksempel på utleggsbegjæring

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
                            "kommunenummer": "3301",
                            "postnummer": "3023",
                            "adressetekst": "Rosenkrantzgata 187"
                        }
                    }
                }
            ],
            "aktørType": "Saksoekt",
            "person": {
                "etternavn": "HARMONI",
                "foedselsdato": "2006-09-16",
                "fornavn": "HARDHUDET",
                "identifikator": {
                    "identifikatortype": "taxIdentificationNumber",
                    "verdi": "07841949964",
                    "landkode": "NO"
                }
            }
        }
    ],
    "underskrift": "string",
    "tvangsfullbyrdelsestype": "utlegg",
    "begjaeringsdato": "2023-01-04",
    "mottaksdato": "2023-06-02",
    "begjaeringensTvangsgrunnlag": [
        {
            "innsendersKravreferanse": [
                "KravReferanse1",
                "KravReferanse2",
                "KravReferanse3",
                "KravReferanse4"
            ],
            "skriftligMeddelelse": {
                "krevesFravaersdom": true,
                "faktiskeForholdForKravet": "faktiskeForholdForKravet",
                "tvangsgrunnlag": {
                    "type": "tvangsgrunnlag",
                    "filnavn": "tvangsgrunnlag8",
                    "uuid": "c4e28845-31f6-4e8c-baf7-5936ec24d9e0"
                },
                "dato": "2023-05-04",
                "betegnelseAvTvangsgrunnlag": "string",
                "tvangsgrunnlagType": "SkriftligMeddelelse",
                "paalydendeBeloep": 0.0,
                "skyldner": {
                    "identifikatortype": "taxIdentificationNumber",
                    "verdi": "string",
                    "landkode": "NO"
                },
                "kravetsGrunnlag": "string",
                "forsendelsesmaate": "string",
                "avsender": {
                    "identifikatortype": "taxIdentificationNumber",
                    "verdi": "string",
                    "landkode": "NO"
                },
                "mottakeradresse": {
                    "adressetekst": [
                        "string"
                    ],
                    "poststedsnavn": "string",
                    "kommunenummer": "1223",
                    "postnummer": "1256"
                },
                "paastand": "string",
                "kanBehandlesIForliksraadet": false,
                "eksterntSaksnummer": "string",
                "begjaeringOmFritakFraVarsling": "string",
                "begrunnelseUnnlatVarsel": "ukjentOppholdsstedSakssøkt",
                "saerligtvangsgrunnlagtype": "SkriftligMeddelelse",
                "referanseSak": "string",
                "rentestol": 0.0,
                "rentefot": 0.0,
                "kreditor": {
                    "identifikatortype": "taxIdentificationNumber",
                    "verdi": "string",
                    "landkode": "NO"
                }
            }
        },
        {
            "innsendersKravreferanse": [
                "KravReferanse5",
                "KravReferanse6",
                "KravReferanse7"
            ],
            "skriftligMeddelelse": {
                "krevesFravaersdom": true,
                "faktiskeForholdForKravet": "faktiskeForholdForKravet",
                "tvangsgrunnlag": {
                    "type": "tvangsgrunnlag",
                    "filnavn": "tvangsgrunnlag7",
                    "uuid": "c4e28845-31f6-4e8c-baf7-5936ec24d9e0"
                },
                "dato": "2023-05-04",
                "betegnelseAvTvangsgrunnlag": "string",
                "tvangsgrunnlagType": "SkriftligMeddelelse",
                "paalydendeBeloep": 0.0,
                "skyldner": {
                    "identifikatortype": "taxIdentificationNumber",
                    "verdi": "string",
                    "landkode": "NO"
                },
                "kravetsGrunnlag": "string",
                "forsendelsesmaate": "string",
                "avsender": {
                    "identifikatortype": "taxIdentificationNumber",
                    "verdi": "string",
                    "landkode": "NO"
                },
                "mottakeradresse": {
                    "adressetekst": [
                        "string"
                    ],
                    "poststedsnavn": "string",
                    "kommunenummer": "1223",
                    "postnummer": "1256"
                },
                "paastand": "string",
                "kanBehandlesIForliksraadet": false,
                "eksterntSaksnummer": "string",
                "begjaeringOmFritakFraVarsling": "string",
                "begrunnelseUnnlatVarsel": "ukjentOppholdsstedSakssøkt",
                "saerligtvangsgrunnlagtype": "SkriftligMeddelelse",
                "referanseSak": "string",
                "rentestol": 0.0,
                "rentefot": 0.0,
                "kreditor": {
                    "identifikatortype": "taxIdentificationNumber",
                    "verdi": "string",
                    "landkode": "NO"
                }
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
                "transporterklaering": [
                    {
                        "dato": "2024-09-25",
                        "transporterklaering": {
                            "type": "transporterklæring",
                            "filnavn": "transporterklaering.pdf",
                            "uuid": "c4e28845-31f6-4e8c-baf7-5936ec24d9e0"
                        },
                        "beloep": {}
                    }
                ],
                "innbetaling": [
                    {
                        "dato": "2023-05-04",
                        "beloep": {
                            "beloep": 100.00,
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
                "kravreferanse":  "KravReferanse2",
               
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
                "transporterklaering": [
                    {
                        "dato": "2024-09-25",
                        "transporterklaering": {
                            "type": "transporterklæring",
                            "filnavn": "transporterklaering.pdf",
                            "uuid": "c4e28845-31f6-4e8c-baf7-5936ec24d9e0"
                        },
                        "beloep": {}
                    }
                ],
                "innbetaling": [
                    {
                        "dato": "2023-05-04",
                        "beloep": {
                            "beloep": 100.00,
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
                "kravreferanse":  "KravReferanse3",
               
                "opprettelsesdatoForKrav": "2023-04-01",
                "opprinneligBeloep": {
                    "beloep": 2800.0,
                    "valuta": "nok"
                },
                "gjenstaaendeBeloep": {
                    "beloep": 2800.0,
                    "valuta": "nok"
                },
                "kravdetaljer": "UIK",
                "typeKrav": "RentebaerendeKrav",
                "transporterklaering": [
                    {
                        "dato": "2024-09-25",
                        "transporterklaering": {
                            "type": "transporterklæring",
                            "filnavn": "transporterklaering.pdf",
                            "uuid": "c4e28845-31f6-4e8c-baf7-5936ec24d9e0"
                        },
                        "beloep": {}
                    }
                ],
                "innbetaling": [
                    {
                        "dato": "2023-05-04",
                        "beloep": {
                            "beloep": 100.00,
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
                "kravreferanse": "KravReferanse4",
               
                "opprettelsesdatoForKrav": "2023-04-01",
                "opprinneligBeloep": {
                    "beloep": 275.79,
                    "valuta": "nok"
                },
                "gjenstaaendeBeloep": {
                    "beloep": 275.79,
                    "valuta": "nok"
                },
                "kravdetaljer": "UIT",
                "typeKrav": "RentebaerendeKrav",
                "transporterklaering": [
                    {
                        "dato": "2024-09-25",
                        "transporterklaering": {
                            "type": "transporterklæring",
                            "filnavn": "transporterklaering.pdf",
                            "uuid": "c4e28845-31f6-4e8c-baf7-5936ec24d9e0"
                        },
                        "beloep": {}
                    }
                ],
                "innbetaling": [
                    {
                        "dato": "2023-05-04",
                        "beloep": {
                            "beloep": 100.00,
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
                "kravreferanse": "KravReferanse5",
               
                "opprettelsesdatoForKrav": "2023-04-01",
                "opprinneligBeloep": {
                    "beloep": 294.26,
                    "valuta": "nok"
                },
                "gjenstaaendeBeloep": {
                    "beloep": 294.26,
                    "valuta": "nok"
                },
                "kravdetaljer": "KRV",
                "typeKrav": "RentebaerendeKrav",
                "transporterklaering": [
                    {
                        "dato": "2024-09-25",
                        "transporterklaering": {
                            "type": "transporterklæring",
                            "filnavn": "transporterklaering.pdf",
                            "uuid": "c4e28845-31f6-4e8c-baf7-5936ec24d9e0"
                        },
                        "beloep": {}
                    }
                ],
                "innbetaling": [
                    {
                        "dato": "2023-05-04",
                        "beloep": {
                            "beloep": 100.00,
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
                "kravreferanse":  "KravReferanse6",
               
                "opprettelsesdatoForKrav": "2023-04-01",
                "opprinneligBeloep": {
                    "beloep": 1.35,
                    "valuta": "nok"
                },
                "gjenstaaendeBeloep": {
                    "beloep": 1.35,
                    "valuta": "nok"
                },
                "kravdetaljer": "REN",
                "typeKrav": "IkkeRentebaerendeKrav",
                "transporterklaering": [
                    {
                        "dato": "2024-09-25",
                        "transporterklaering": {
                            "type": "transporterklæring",
                            "filnavn": "transporterklaering.pdf",
                            "uuid": "c4e28845-31f6-4e8c-baf7-5936ec24d9e0"
                        },
                        "beloep": {}
                    }
                ],
                "innbetaling": [
                    {
                        "dato": "2023-05-04",
                        "beloep": {
                            "beloep": 100.00,
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
                "kravreferanse":  "KravReferanse7",
               
                "opprettelsesdatoForKrav": "2023-04-01",
                "opprinneligBeloep": {
                    "beloep": 175,
                    "valuta": "nok"
                },
                "gjenstaaendeBeloep": {
                    "beloep": 175,
                    "valuta": "nok"
                },
                "kravdetaljer": "SAL",
                "typeKrav": "IkkeRentebaerendeKrav",
                "transporterklaering": [
                    {
                        "dato": "2024-09-25",
                        "transporterklaering": {
                            "type": "transporterklæring",
                            "filnavn": "transporterklaering.pdf",
                            "uuid": "c4e28845-31f6-4e8c-baf7-5936ec24d9e0"
                        },
                        "beloep": {}
                    }
                ],
                "innbetaling": [
                    {
                        "dato": "2023-05-04",
                        "beloep": {
                            "beloep": 100.00,
                            "valuta": "nok"
                        }
                    }
                ]
            }
        }
    ],
    "berOmInnkallingTilMoete": false,
    "innsenderReferanse": "InnsenderRef123",
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
                "navn": "Skjønn ARITMETISK TIGER AS",
                "identifikator": {
                    "identifikatortype": "taxIdentificationNumber",
                    "verdi": "312864991",
                    "landkode": "NO"
                },
                "virksomhetstype": "inkassovirksomhet"
        }
    }
}
```