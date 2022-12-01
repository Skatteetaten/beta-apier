# Åpne krav

Hent oversikt over åpne krav og uplasserte innbetalinger.

Gjør oppslag mot reskontrosystemene på åpne krav og uplasserte innbetalinger og oppgir de samlet med en summert oversikt.

**Request URL**
```
https://api-test.sits.no/api/innkreving/kravogbetalinger/v1/finans/12345678901/oversikt
```


**Eksempel på request**

```json
{"partIdentifikator":"310478717","periode":{"start":"2022-10-10","slutt":"2022-11-10"}}
```

**Eksempel på respons**

```json
{
    "partIdentifikator": "310478717",
    "aapentKravMedGjenstaaendeBeloep": [
        {
            "kravidentifikator": "2fe27d1b-f297-438b-af89-96d017924c0d",
            "kravbeskrivelse": "Sjokoladeavgift",
            "opprettelsesdatoForKrav": "2017-08-06T00:00:00.000+02:00",
            "kravperiode": "2017/8",
            "opprinneligBeloep": -4595711.75,
            "kravforfall": [
                {
                    "forfallsdato": "2017-08-20T00:00:00.000+02:00",
                    "opprinneligBeloep": -4595711.75,
                    "gjenstaaendeBeloep": -4595711.75,
                    "plassertInnbetaling": [],
                    "plassertMotkrav": [],
                    "kravforfallsIdentifikator": "6f2f924f-c831-49f2-a695-6a680b2a864c",
                    "betalingsinformasjon": {
                        "kidnummer": "90066670000011"
                    },
                    "utsattIverksettelse": false
                }
            ],
            "gjenstaaendeBeloep": -4595711.75,
            "stipulerteRenter": -3753517.47,
            "kravtype": "SJOK40",
            "kravgruppe": "Særavgift"
        },
        {
            "kravidentifikator": "b1e403d0-c465-4738-8336-a43bbf00f376",
            "kravbeskrivelse": "Sjokoladeavgift",
            "opprettelsesdatoForKrav": "2016-02-02T00:00:00.000+01:00",
            "kravperiode": "2016/2",
            "opprinneligBeloep": -1353432.47,
            "kravforfall": [
                {
                    "forfallsdato": "2016-02-16T00:00:00.000+01:00",
                    "opprinneligBeloep": -1353432.47,
                    "gjenstaaendeBeloep": -1353432.47,
                    "plassertInnbetaling": [],
                    "plassertMotkrav": [],
                    "kravforfallsIdentifikator": "00f863e8-55a1-43ad-b737-1615323e2375",
                    "betalingsinformasjon": {
                        "kidnummer": "90066670000011"
                    },
                    "utsattIverksettelse": false
                }
            ],
            "gjenstaaendeBeloep": -1353432.47,
            "stipulerteRenter": -1800297.98,
            "kravtype": "SJOK40",
            "kravgruppe": "Særavgift"
        },
        {
            "kravidentifikator": "5948815d-117f-425e-b775-a8b053568c25",
            "kravbeskrivelse": "Sjokoladeavgift",
            "opprettelsesdatoForKrav": "2009-03-17T00:00:00.000+01:00",
            "kravperiode": "2009/3",
            "opprinneligBeloep": 5674621.12,
            "kravforfall": [
                {
                    "forfallsdato": "2009-03-31T00:00:00.000+02:00",
                    "opprinneligBeloep": 2837310.56,
                    "gjenstaaendeBeloep": 336842.72,
                    "plassertInnbetaling": [
                        {
                            "betaltFra": {
                                "konto": {}
                            },
                            "plassertBeloep": -2500467.84,
                            "plasseringsdato": "2012-05-08T00:00:00.000+02:00",
                            "innbetalingsIdentifikator": "1e6937f4-3872-4a05-8b1c-a7911e376ca0",
                            "innbetalingstype": "Innbetaling"
                        }
                    ],
                    "plassertMotkrav": [],
                    "kravforfallsIdentifikator": "c458e595-a4c9-4393-9771-91c7769e36bc",
                    "betalingsinformasjon": {
                        "kidnummer": "90066670000011",
                        "konto": {
                            "kontonummer": "97443329655"
                        }
                    },
                    "utsattIverksettelse": false
                },
                {
                    "opprinneligBeloep": 2837310.56,
                    "gjenstaaendeBeloep": 885052.26,
                    "plassertInnbetaling": [
                        {
                            "betaltFra": {
                                "konto": {}
                            },
                            "plassertBeloep": -1952258.30,
                            "plasseringsdato": "2014-12-13T00:00:00.000+01:00",
                            "innbetalingsIdentifikator": "f2cd51af-b733-4fa2-a1c3-97652745310f",
                            "innbetalingstype": "Innbetaling"
                        }
                    ],
                    "plassertMotkrav": [],
                    "kravforfallsIdentifikator": "52b2bebf-a607-4eb9-a37b-a339f410a4c3",
                    "betalingsinformasjon": {
                        "kidnummer": "90066670000011",
                        "konto": {
                            "kontonummer": "97443329655"
                        }
                    },
                    "utsattIverksettelse": true
                }
            ],
            "gjenstaaendeBeloep": 1221894.98,
            "stipulerteRenter": 1394603.46,
            "kravtype": "SJOK40",
            "kravgruppe": "Særavgift"
        },
        {
            "kravidentifikator": "43039af8-7108-432f-8e2b-646845980d9c",
            "kravbeskrivelse": "Sjokoladeavgift",
            "opprettelsesdatoForKrav": "2008-03-23T00:00:00.000+01:00",
            "kravperiode": "2008/3",
            "opprinneligBeloep": -6838193.32,
            "kravforfall": [
                {
                    "forfallsdato": "2008-04-06T00:00:00.000+02:00",
                    "opprinneligBeloep": -6838193.32,
                    "gjenstaaendeBeloep": -6838193.32,
                    "plassertInnbetaling": [],
                    "plassertMotkrav": [],
                    "kravforfallsIdentifikator": "a0c5e22e-0340-4557-be8a-e1b63baea133",
                    "betalingsinformasjon": {
                        "kidnummer": "90066670000011"
                    },
                    "utsattIverksettelse": false
                }
            ],
            "gjenstaaendeBeloep": -6838193.32,
            "stipulerteRenter": -834615.47,
            "kravtype": "SJOK40",
            "kravgruppe": "Særavgift"
        },
        {
            "kravidentifikator": "5321f253-c4f3-41be-b9ce-539e869984d6",
            "kravbeskrivelse": "Sjokoladeavgift",
            "opprettelsesdatoForKrav": "2003-07-16T00:00:00.000+02:00",
            "kravperiode": "2003/7",
            "opprinneligBeloep": -8432146.47,
            "kravforfall": [
                {
                    "forfallsdato": "2003-07-30T00:00:00.000+02:00",
                    "opprinneligBeloep": -8432146.47,
                    "gjenstaaendeBeloep": -7207708.26,
                    "plassertInnbetaling": [],
                    "plassertMotkrav": [
                        {
                            "motkravBeskrivelse": "Sjokoladeavgift",
                            "motkravForfallsIdentifikator": "26595e93-63e3-4921-b5d5-98d3210692bc",
                            "motkravForfallsdato": "2003-07-30T00:00:00.000+02:00",
                            "plassertBeloep": 289929.15,
                            "plasseringsdato": "2003-08-01T00:00:00.000+02:00"
                        },
                        {
                            "motkravBeskrivelse": "Sjokoladeavgift",
                            "motkravForfallsIdentifikator": "c3eb26c7-5543-4e1c-9bd0-bbbf18bcd89a",
                            "motkravForfallsdato": "2003-07-30T00:00:00.000+02:00",
                            "plassertBeloep": 483567.97,
                            "plasseringsdato": "2003-08-01T00:00:00.000+02:00"
                        },
                        {
                            "motkravBeskrivelse": "Sjokoladeavgift",
                            "motkravForfallsIdentifikator": "0f5c7d17-7e09-4b5d-87f9-61bfcec6ea97",
                            "motkravForfallsdato": "2003-07-30T00:00:00.000+02:00",
                            "plassertBeloep": 450941.09,
                            "plasseringsdato": "2018-03-09T00:00:00.000+01:00"
                        }
                    ],
                    "kravforfallsIdentifikator": "f72433a7-455b-49d1-ac9f-847370a245de",
                    "betalingsinformasjon": {
                        "kidnummer": "90066670000011"
                    },
                    "utsattIverksettelse": false
                }
            ],
            "gjenstaaendeBeloep": -7207708.26,
            "stipulerteRenter": -44902.79,
            "kravtype": "SJOK40",
            "kravgruppe": "Særavgift"
        },
        {
            "kravidentifikator": "758d529a-25ac-4048-bfbc-79608c88d06a",
            "kravbeskrivelse": "Sjokoladeavgift",
            "opprettelsesdatoForKrav": "2001-01-24T00:00:00.000+01:00",
            "kravperiode": "2001/1",
            "opprinneligBeloep": 967135.94,
            "kravforfall": [
                {
                    "forfallsdato": "2001-02-07T00:00:00.000+01:00",
                    "opprinneligBeloep": 483567.97,
                    "gjenstaaendeBeloep": 184914.50,
                    "plassertInnbetaling": [
                        {
                            "betaltFra": {
                                "konto": {}
                            },
                            "plassertBeloep": -298653.47,
                            "plasseringsdato": "2010-12-08T00:00:00.000+01:00",
                            "innbetalingsIdentifikator": "8e0da0e3-6ae4-48ff-b614-984d20b5be8a",
                            "innbetalingstype": "Innbetaling"
                        }
                    ],
                    "plassertMotkrav": [],
                    "kravforfallsIdentifikator": "5ea5b2ab-60bc-4780-b33b-f6addc64062d",
                    "betalingsinformasjon": {
                        "kidnummer": "90066670000011",
                        "konto": {
                            "kontonummer": "97443329655"
                        }
                    },
                    "utsattIverksettelse": false
                },
                {
                    "opprinneligBeloep": 483567.97,
                    "gjenstaaendeBeloep": 0,
                    "plassertInnbetaling": [],
                    "plassertMotkrav": [
                        {
                            "motkravBeskrivelse": "Sjokoladeavgift",
                            "motkravForfallsIdentifikator": "f72433a7-455b-49d1-ac9f-847370a245de",
                            "motkravForfallsdato": "2001-03-07T00:00:00.000+01:00",
                            "plassertBeloep": -483567.97,
                            "plasseringsdato": "2003-08-01T00:00:00.000+02:00"
                        }
                    ],
                    "kravforfallsIdentifikator": "c3eb26c7-5543-4e1c-9bd0-bbbf18bcd89a",
                    "betalingsinformasjon": {
                        "kidnummer": "90066670000011",
                        "konto": {
                            "kontonummer": "97443329655"
                        }
                    },
                    "utsattIverksettelse": true
                }
            ],
            "gjenstaaendeBeloep": 184914.50,
            "stipulerteRenter": 7495396.93,
            "kravtype": "SJOK40",
            "kravgruppe": "Særavgift"
        },
        {
            "kravidentifikator": "3852f833-47a3-4dc8-b6ef-50ca8c0cc78b",
            "kravbeskrivelse": "Sjokoladeavgift",
            "opprettelsesdatoForKrav": "2014-01-31T00:00:00.000+01:00",
            "kravperiode": "2014/1",
            "opprinneligBeloep": 6255126.33,
            "kravforfall": [
                {
                    "forfallsdato": "2014-02-14T00:00:00.000+01:00",
                    "opprinneligBeloep": 6255126.33,
                    "gjenstaaendeBeloep": 945816.46,
                    "plassertInnbetaling": [
                        {
                            "betaltFra": {
                                "konto": {}
                            },
                            "plassertBeloep": -186633.83,
                            "plasseringsdato": "2014-02-16T00:00:00.000+01:00",
                            "innbetalingsIdentifikator": "60bc3780-b33b-46ad-9c64-062dc3eb26c7",
                            "innbetalingstype": "Innbetaling"
                        },
                        {
                            "betaltFra": {
                                "konto": {}
                            },
                            "plassertBeloep": -5122676.04,
                            "plasseringsdato": "2016-11-18T00:00:00.000+01:00",
                            "innbetalingsIdentifikator": "e65a90b8-2559-4d0a-b89b-b6cad116e6b0",
                            "innbetalingstype": "Innbetaling"
                        }
                    ],
                    "plassertMotkrav": [],
                    "kravforfallsIdentifikator": "7e252bc9-5cec-44d8-a9e5-9087845e3dc3",
                    "betalingsinformasjon": {
                        "kidnummer": "90066670000011",
                        "konto": {
                            "kontonummer": "97443329655"
                        }
                    },
                    "utsattIverksettelse": false
                }
            ],
            "gjenstaaendeBeloep": 945816.46,
            "stipulerteRenter": 2246814.37,
            "kravtype": "SJOK40",
            "kravgruppe": "Merverdiavgift"
        },
        {
            "kravidentifikator": "17924c0d-3732-4a18-b60c-f7b4b47529ce",
            "kravbeskrivelse": "Sjokoladeavgift",
            "opprettelsesdatoForKrav": "2013-08-26T00:00:00.000+02:00",
            "kravperiode": "2013/8",
            "opprinneligBeloep": 3753517.47,
            "kravforfall": [
                {
                    "forfallsdato": "2013-09-09T00:00:00.000+02:00",
                    "opprinneligBeloep": 1876758.74,
                    "gjenstaaendeBeloep": 1876758.74,
                    "plassertInnbetaling": [],
                    "plassertMotkrav": [],
                    "kravforfallsIdentifikator": "bd8471bb-d636-4530-88fa-4d57fff76c43",
                    "betalingsinformasjon": {
                        "kidnummer": "90066670000011",
                        "konto": {
                            "kontonummer": "97443329655"
                        }
                    },
                    "utsattIverksettelse": false
                },
                {
                    "forfallsdato": "2013-10-09T00:00:00.000+02:00",
                    "opprinneligBeloep": 1876758.73,
                    "gjenstaaendeBeloep": 1876758.73,
                    "plassertInnbetaling": [],
                    "plassertMotkrav": [],
                    "kravforfallsIdentifikator": "8b3154cf-6f2f-424f-8831-99f2a6956a68",
                    "betalingsinformasjon": {
                        "kidnummer": "90066670000011",
                        "konto": {
                            "kontonummer": "97443329655"
                        }
                    },
                    "utsattIverksettelse": false
                }
            ],
            "gjenstaaendeBeloep": 3753517.47,
            "stipulerteRenter": 1785916.25,
            "kravtype": "SJOK40",
            "kravgruppe": "Merverdiavgift"
        },
        {
            "kravidentifikator": "0b2a864c-4303-4af8-b108-c32f4e2b6468",
            "kravbeskrivelse": "Sjokoladeavgift",
            "opprettelsesdatoForKrav": "2004-05-08T00:00:00.000+02:00",
            "kravperiode": "2004/5",
            "opprinneligBeloep": 1337486.78,
            "kravforfall": [
                {
                    "forfallsdato": "2004-05-22T00:00:00.000+02:00",
                    "opprinneligBeloep": 1337486.78,
                    "gjenstaaendeBeloep": 113082.80,
                    "plassertInnbetaling": [
                        {
                            "betaltFra": {
                                "konto": {}
                            },
                            "plassertBeloep": -1051426.39,
                            "plasseringsdato": "2006-08-13T00:00:00.000+02:00",
                            "innbetalingsIdentifikator": "4631f6b4-f93e-409d-b5ab-fb8389ab2987",
                            "innbetalingstype": "Innbetaling"
                        }
                    ],
                    "plassertMotkrav": [
                        {
                            "motkravBeskrivelse": "Sjokoladeavgift",
                            "motkravForfallsIdentifikator": "f13da866-9a7f-458d-bb44-b416fc914caf",
                            "motkravForfallsdato": "2004-05-22T00:00:00.000+02:00",
                            "plassertBeloep": -172977.59,
                            "plasseringsdato": "2016-02-18T00:00:00.000+01:00"
                        }
                    ],
                    "kravforfallsIdentifikator": "56fec3dd-d2a3-4f1a-84c4-577734bd9c84",
                    "betalingsinformasjon": {
                        "kidnummer": "90066670000011",
                        "konto": {
                            "kontonummer": "97443329655"
                        }
                    },
                    "utsattIverksettelse": false
                }
            ],
            "gjenstaaendeBeloep": 113082.80,
            "stipulerteRenter": 7029180.13,
            "kravtype": "SJOK40",
            "kravgruppe": "Merverdiavgift"
        },
        {
            "kravidentifikator": "66c634c4-2dc9-4853-a969-485017209566",
            "kravbeskrivelse": "Sjokoladeavgift",
            "opprettelsesdatoForKrav": "2003-12-07T00:00:00.000+01:00",
            "kravperiode": "2003/12",
            "opprinneligBeloep": 571848.66,
            "kravforfall": [
                {
                    "forfallsdato": "2003-12-21T00:00:00.000+01:00",
                    "opprinneligBeloep": 285924.33,
                    "gjenstaaendeBeloep": 0,
                    "plassertInnbetaling": [
                        {
                            "betaltFra": {
                                "konto": {}
                            },
                            "plassertBeloep": -285924.33,
                            "plasseringsdato": "2019-08-07T00:00:00.000+02:00",
                            "innbetalingsIdentifikator": "81251dbf-f996-4fdb-88bb-376f504910e3",
                            "innbetalingstype": "Innbetaling"
                        }
                    ],
                    "plassertMotkrav": [],
                    "kravforfallsIdentifikator": "634e4973-000f-4f6b-bc5f-9e2130acaf04",
                    "betalingsinformasjon": {
                        "kidnummer": "90066670000011",
                        "konto": {
                            "kontonummer": "97443329655"
                        }
                    },
                    "utsattIverksettelse": false
                },
                {
                    "forfallsdato": "2004-01-21T00:00:00.000+01:00",
                    "opprinneligBeloep": 285924.33,
                    "gjenstaaendeBeloep": 27604.87,
                    "plassertInnbetaling": [
                        {
                            "betaltFra": {
                                "konto": {}
                            },
                            "plassertBeloep": -258319.46,
                            "plasseringsdato": "2005-09-27T00:00:00.000+02:00",
                            "innbetalingsIdentifikator": "2ef01f18-e7f1-4ce9-b94d-0ef1dd0364cb",
                            "innbetalingstype": "Innbetaling"
                        }
                    ],
                    "plassertMotkrav": [],
                    "kravforfallsIdentifikator": "d0aa1952-c0e5-40e3-9047-8f6a6ea875ed",
                    "betalingsinformasjon": {
                        "kidnummer": "90066670000011",
                        "konto": {
                            "kontonummer": "97443329655"
                        }
                    },
                    "utsattIverksettelse": false
                }
            ],
            "gjenstaaendeBeloep": 27604.87,
            "stipulerteRenter": 1647906.23,
            "kravtype": "SJOK40",
            "kravgruppe": "Merverdiavgift"
        },
        {
            "kravidentifikator": "84b50364-60cf-43b9-aa1a-d99c386e6d37",
            "kravbeskrivelse": "Sjokoladeavgift",
            "opprettelsesdatoForKrav": "2002-05-02T00:00:00.000+02:00",
            "kravperiode": "2002/5",
            "opprinneligBeloep": 2786482.90,
            "kravforfall": [
                {
                    "forfallsdato": "2002-05-16T00:00:00.000+02:00",
                    "opprinneligBeloep": 1393241.45,
                    "gjenstaaendeBeloep": 0,
                    "plassertInnbetaling": [
                        {
                            "betaltFra": {
                                "konto": {}
                            },
                            "plassertBeloep": -1393241.45,
                            "plasseringsdato": "2003-01-22T00:00:00.000+01:00",
                            "innbetalingsIdentifikator": "60bc3780-b33b-46ad-9c64-062dc3eb26c7",
                            "innbetalingstype": "Innbetaling"
                        }
                    ],
                    "plassertMotkrav": [],
                    "kravforfallsIdentifikator": "2ac1a23e-0f5c-4d17-be09-0b5d47f961bf",
                    "betalingsinformasjon": {
                        "kidnummer": "90066670000011",
                        "konto": {
                            "kontonummer": "97443329655"
                        }
                    },
                    "utsattIverksettelse": false
                },
                {
                    "forfallsdato": "2002-06-16T00:00:00.000+02:00",
                    "opprinneligBeloep": 1393241.45,
                    "gjenstaaendeBeloep": 454559.11,
                    "plassertInnbetaling": [
                        {
                            "betaltFra": {
                                "konto": {}
                            },
                            "plassertBeloep": -938682.34,
                            "plasseringsdato": "2007-04-15T00:00:00.000+02:00",
                            "innbetalingsIdentifikator": "a30fcaee-58ea-40ab-a066-3927f61a3f08",
                            "innbetalingstype": "Innbetaling"
                        }
                    ],
                    "plassertMotkrav": [],
                    "kravforfallsIdentifikator": "cec6ea97-2fe2-4d1b-b297-138b6f8996d0",
                    "betalingsinformasjon": {
                        "kidnummer": "90066670000011",
                        "konto": {
                            "kontonummer": "97443329655"
                        }
                    },
                    "utsattIverksettelse": false
                }
            ],
            "gjenstaaendeBeloep": 454559.11,
            "stipulerteRenter": 25259.71,
            "kravtype": "SJOK40",
            "kravgruppe": "Merverdiavgift"
        },
        {
            "kravidentifikator": "0d06e66d-e899-44c6-a371-8a187136e866",
            "kravbeskrivelse": "Sjokoladeavgift",
            "opprettelsesdatoForKrav": "2000-12-28T00:00:00.000+01:00",
            "kravperiode": "2000/12",
            "opprinneligBeloep": 3016910.17,
            "kravforfall": [
                {
                    "forfallsdato": "2001-01-11T00:00:00.000+01:00",
                    "opprinneligBeloep": 1508455.09,
                    "gjenstaaendeBeloep": 681196.16,
                    "plassertInnbetaling": [
                        {
                            "betaltFra": {
                                "konto": {}
                            },
                            "plassertBeloep": -827258.93,
                            "plasseringsdato": "2006-04-24T00:00:00.000+02:00",
                            "innbetalingsIdentifikator": "455b69d1-ec9f-4473-b0a2-45de758d529a",
                            "innbetalingstype": "Innbetaling"
                        }
                    ],
                    "plassertMotkrav": [],
                    "kravforfallsIdentifikator": "4d2fe45a-25ae-4332-80ba-2736b106bb93",
                    "betalingsinformasjon": {
                        "kidnummer": "90066670000011",
                        "konto": {
                            "kontonummer": "97443329655"
                        }
                    },
                    "utsattIverksettelse": false
                },
                {
                    "forfallsdato": "2001-02-11T00:00:00.000+01:00",
                    "opprinneligBeloep": 1508455.08,
                    "gjenstaaendeBeloep": 1508455.08,
                    "plassertInnbetaling": [],
                    "plassertMotkrav": [],
                    "kravforfallsIdentifikator": "16e881a0-f646-44e6-a472-0d5d36032534",
                    "betalingsinformasjon": {
                        "kidnummer": "90066670000011",
                        "konto": {
                            "kontonummer": "97443329655"
                        }
                    },
                    "utsattIverksettelse": false
                }
            ],
            "gjenstaaendeBeloep": 2189651.24,
            "stipulerteRenter": 919269.10,
            "kravtype": "SJOK40",
            "kravgruppe": "Merverdiavgift"
        },
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
        },
        {
            "kravidentifikator": "2fe27d1b-f297-438b-af89-96d017924c0d",
            "kravbeskrivelse": "Sjokoladeavgift",
            "opprettelsesdatoForKrav": "2017-08-06T00:00:00.000+02:00",
            "kravperiode": "2017/8",
            "opprinneligBeloep": -4595711.75,
            "kravforfall": [
                {
                    "forfallsdato": "2017-08-20T00:00:00.000+02:00",
                    "opprinneligBeloep": -4595711.75,
                    "gjenstaaendeBeloep": -4595711.75,
                    "plassertInnbetaling": [],
                    "plassertMotkrav": [],
                    "kravforfallsIdentifikator": "6f2f924f-c831-49f2-a695-6a680b2a864c",
                    "betalingsinformasjon": {
                        "kidnummer": "90066670000011"
                    },
                    "utsattIverksettelse": false
                }
            ],
            "gjenstaaendeBeloep": -4595711.75,
            "stipulerteRenter": -3753517.47,
            "kravtype": "SJOK40",
            "kravgruppe": "Øvrige offentlige krav"
        },
        {
            "kravidentifikator": "b1e403d0-c465-4738-8336-a43bbf00f376",
            "kravbeskrivelse": "Sjokoladeavgift",
            "opprettelsesdatoForKrav": "2016-02-02T00:00:00.000+01:00",
            "kravperiode": "2016/2",
            "opprinneligBeloep": -1353432.47,
            "kravforfall": [
                {
                    "forfallsdato": "2016-02-16T00:00:00.000+01:00",
                    "opprinneligBeloep": -1353432.47,
                    "gjenstaaendeBeloep": -1353432.47,
                    "plassertInnbetaling": [],
                    "plassertMotkrav": [],
                    "kravforfallsIdentifikator": "00f863e8-55a1-43ad-b737-1615323e2375",
                    "betalingsinformasjon": {
                        "kidnummer": "90066670000011"
                    },
                    "utsattIverksettelse": false
                }
            ],
            "gjenstaaendeBeloep": -1353432.47,
            "stipulerteRenter": -1800297.98,
            "kravtype": "SJOK40",
            "kravgruppe": "Øvrige offentlige krav"
        },
        {
            "kravidentifikator": "5948815d-117f-425e-b775-a8b053568c25",
            "kravbeskrivelse": "Sjokoladeavgift",
            "opprettelsesdatoForKrav": "2009-03-17T00:00:00.000+01:00",
            "kravperiode": "2009/3",
            "opprinneligBeloep": 5674621.12,
            "kravforfall": [
                {
                    "forfallsdato": "2009-03-31T00:00:00.000+02:00",
                    "opprinneligBeloep": 2837310.56,
                    "gjenstaaendeBeloep": 336842.72,
                    "plassertInnbetaling": [
                        {
                            "betaltFra": {
                                "konto": {}
                            },
                            "plassertBeloep": -2500467.84,
                            "plasseringsdato": "2012-05-08T00:00:00.000+02:00",
                            "innbetalingsIdentifikator": "1e6937f4-3872-4a05-8b1c-a7911e376ca0",
                            "innbetalingstype": "Innbetaling"
                        }
                    ],
                    "plassertMotkrav": [],
                    "kravforfallsIdentifikator": "c458e595-a4c9-4393-9771-91c7769e36bc",
                    "betalingsinformasjon": {
                        "kidnummer": "90066670000011",
                        "konto": {
                            "kontonummer": "97443329655"
                        }
                    },
                    "utsattIverksettelse": false
                },
                {
                    "opprinneligBeloep": 2837310.56,
                    "gjenstaaendeBeloep": 885052.26,
                    "plassertInnbetaling": [
                        {
                            "betaltFra": {
                                "konto": {}
                            },
                            "plassertBeloep": -1952258.30,
                            "plasseringsdato": "2014-12-13T00:00:00.000+01:00",
                            "innbetalingsIdentifikator": "f2cd51af-b733-4fa2-a1c3-97652745310f",
                            "innbetalingstype": "Innbetaling"
                        }
                    ],
                    "plassertMotkrav": [],
                    "kravforfallsIdentifikator": "52b2bebf-a607-4eb9-a37b-a339f410a4c3",
                    "betalingsinformasjon": {
                        "kidnummer": "90066670000011",
                        "konto": {
                            "kontonummer": "97443329655"
                        }
                    },
                    "utsattIverksettelse": true
                }
            ],
            "gjenstaaendeBeloep": 1221894.98,
            "stipulerteRenter": 1394603.46,
            "kravtype": "SJOK40",
            "kravgruppe": "Øvrige offentlige krav"
        },
        {
            "kravidentifikator": "43039af8-7108-432f-8e2b-646845980d9c",
            "kravbeskrivelse": "Sjokoladeavgift",
            "opprettelsesdatoForKrav": "2008-03-23T00:00:00.000+01:00",
            "kravperiode": "2008/3",
            "opprinneligBeloep": -6838193.32,
            "kravforfall": [
                {
                    "forfallsdato": "2008-04-06T00:00:00.000+02:00",
                    "opprinneligBeloep": -6838193.32,
                    "gjenstaaendeBeloep": -6838193.32,
                    "plassertInnbetaling": [],
                    "plassertMotkrav": [],
                    "kravforfallsIdentifikator": "a0c5e22e-0340-4557-be8a-e1b63baea133",
                    "betalingsinformasjon": {
                        "kidnummer": "90066670000011"
                    },
                    "utsattIverksettelse": false
                }
            ],
            "gjenstaaendeBeloep": -6838193.32,
            "stipulerteRenter": -834615.47,
            "kravtype": "SJOK40",
            "kravgruppe": "Øvrige offentlige krav"
        },
        {
            "kravidentifikator": "5321f253-c4f3-41be-b9ce-539e869984d6",
            "kravbeskrivelse": "Sjokoladeavgift",
            "opprettelsesdatoForKrav": "2003-07-16T00:00:00.000+02:00",
            "kravperiode": "2003/7",
            "opprinneligBeloep": -8432146.47,
            "kravforfall": [
                {
                    "forfallsdato": "2003-07-30T00:00:00.000+02:00",
                    "opprinneligBeloep": -8432146.47,
                    "gjenstaaendeBeloep": -7207708.26,
                    "plassertInnbetaling": [],
                    "plassertMotkrav": [
                        {
                            "motkravBeskrivelse": "Sjokoladeavgift",
                            "motkravForfallsIdentifikator": "26595e93-63e3-4921-b5d5-98d3210692bc",
                            "motkravForfallsdato": "2003-07-30T00:00:00.000+02:00",
                            "plassertBeloep": 289929.15,
                            "plasseringsdato": "2003-08-01T00:00:00.000+02:00"
                        },
                        {
                            "motkravBeskrivelse": "Sjokoladeavgift",
                            "motkravForfallsIdentifikator": "c3eb26c7-5543-4e1c-9bd0-bbbf18bcd89a",
                            "motkravForfallsdato": "2003-07-30T00:00:00.000+02:00",
                            "plassertBeloep": 483567.97,
                            "plasseringsdato": "2003-08-01T00:00:00.000+02:00"
                        },
                        {
                            "motkravBeskrivelse": "Sjokoladeavgift",
                            "motkravForfallsIdentifikator": "0f5c7d17-7e09-4b5d-87f9-61bfcec6ea97",
                            "motkravForfallsdato": "2003-07-30T00:00:00.000+02:00",
                            "plassertBeloep": 450941.09,
                            "plasseringsdato": "2018-03-09T00:00:00.000+01:00"
                        }
                    ],
                    "kravforfallsIdentifikator": "f72433a7-455b-49d1-ac9f-847370a245de",
                    "betalingsinformasjon": {
                        "kidnummer": "90066670000011"
                    },
                    "utsattIverksettelse": false
                }
            ],
            "gjenstaaendeBeloep": -7207708.26,
            "stipulerteRenter": -44902.79,
            "kravtype": "SJOK40",
            "kravgruppe": "Øvrige offentlige krav"
        },
        {
            "kravidentifikator": "758d529a-25ac-4048-bfbc-79608c88d06a",
            "kravbeskrivelse": "Sjokoladeavgift",
            "opprettelsesdatoForKrav": "2001-01-24T00:00:00.000+01:00",
            "kravperiode": "2001/1",
            "opprinneligBeloep": 967135.94,
            "kravforfall": [
                {
                    "forfallsdato": "2001-02-07T00:00:00.000+01:00",
                    "opprinneligBeloep": 483567.97,
                    "gjenstaaendeBeloep": 184914.50,
                    "plassertInnbetaling": [
                        {
                            "betaltFra": {
                                "konto": {}
                            },
                            "plassertBeloep": -298653.47,
                            "plasseringsdato": "2010-12-08T00:00:00.000+01:00",
                            "innbetalingsIdentifikator": "8e0da0e3-6ae4-48ff-b614-984d20b5be8a",
                            "innbetalingstype": "Innbetaling"
                        }
                    ],
                    "plassertMotkrav": [],
                    "kravforfallsIdentifikator": "5ea5b2ab-60bc-4780-b33b-f6addc64062d",
                    "betalingsinformasjon": {
                        "kidnummer": "90066670000011",
                        "konto": {
                            "kontonummer": "97443329655"
                        }
                    },
                    "utsattIverksettelse": false
                },
                {
                    "opprinneligBeloep": 483567.97,
                    "gjenstaaendeBeloep": 0,
                    "plassertInnbetaling": [],
                    "plassertMotkrav": [
                        {
                            "motkravBeskrivelse": "Sjokoladeavgift",
                            "motkravForfallsIdentifikator": "f72433a7-455b-49d1-ac9f-847370a245de",
                            "motkravForfallsdato": "2001-03-07T00:00:00.000+01:00",
                            "plassertBeloep": -483567.97,
                            "plasseringsdato": "2003-08-01T00:00:00.000+02:00"
                        }
                    ],
                    "kravforfallsIdentifikator": "c3eb26c7-5543-4e1c-9bd0-bbbf18bcd89a",
                    "betalingsinformasjon": {
                        "kidnummer": "90066670000011",
                        "konto": {
                            "kontonummer": "97443329655"
                        }
                    },
                    "utsattIverksettelse": true
                }
            ],
            "gjenstaaendeBeloep": 184914.50,
            "stipulerteRenter": 7495396.93,
            "kravtype": "SJOK40",
            "kravgruppe": "Øvrige offentlige krav"
        }
    ],
    "innbetalingMedUplassertBeloep": [
        {
            "partIdentifikator": "310478717",
            "innbetalingsidentifikator": "3455822e-8a42-4d9a-bc30-960e5c5f7875",
            "innbetalingsdato": "2015-11-28T00:00:00.000+01:00",
            "innbetaltBeloep": -305358.85,
            "plassertInnbetalingMotKrav": [],
            "uplassertBeloep": -305358.85,
            "betaltTilKonto": {
                "kontonummer": "97443329655"
            },
            "betaltFra": {
                "konto": {
                    "kontoeiersNavn": "Bergliot Jørgensen",
                    "kontonummer": "65336676689"
                }
            },
            "innbetalingstype": "Innbetaling"
        },
        {
            "partIdentifikator": "310478717",
            "innbetalingsidentifikator": "c7111c9a-0025-4690-9654-9775161e64ed",
            "innbetalingsdato": "2014-11-04T00:00:00.000+01:00",
            "innbetaltBeloep": -1570652.26,
            "plassertInnbetalingMotKrav": [],
            "uplassertBeloep": -1570652.26,
            "betaltTilKonto": {
                "kontonummer": "97443329655"
            },
            "betaltFra": {
                "konto": {
                    "kontoeiersNavn": "Bergliot Jørgensen",
                    "kontonummer": "65336676689"
                }
            },
            "innbetalingstype": "Innbetaling"
        },
        {
            "partIdentifikator": "310478717",
            "innbetalingsidentifikator": "5ae3089e-48b7-4aa6-9f4b-021840f74780",
            "innbetalingsdato": "2011-11-20T00:00:00.000+01:00",
            "innbetaltBeloep": -292495.82,
            "plassertInnbetalingMotKrav": [],
            "uplassertBeloep": -292495.82,
            "betaltTilKonto": {
                "kontonummer": "97443329655"
            },
            "betaltFra": {
                "konto": {
                    "kontoeiersNavn": "Bergliot Jørgensen",
                    "kontonummer": "65336676689"
                }
            },
            "innbetalingstype": "Innbetaling"
        },
        {
            "partIdentifikator": "310478717",
            "innbetalingsidentifikator": "2fa5e646-41fb-488e-937a-6f2f1c7b803d",
            "innbetalingsdato": "2010-09-08T00:00:00.000+02:00",
            "innbetaltBeloep": -4764004.62,
            "plassertInnbetalingMotKrav": [
                {
                    "dekketKrav": "Sjokoladeavgift",
                    "kravforfallIdentifikator": "e89934c6-e371-4a18-b136-e86619b5f328",
                    "kravforfallsdato": "2003-12-21T00:00:00.000+01:00",
                    "plasseringsdato": "2010-09-10T00:00:00.000+02:00",
                    "plassertBeloep": 571848.66,
                    "opprinneligKravforfallsbeloep": 571848.66,
                    "gjenstaaendeKravforfallsbeloep": 0
                },
                {
                    "dekketKrav": "Sjokoladeavgift",
                    "kravforfallIdentifikator": "a041ff12-b9e4-45c1-a774-7ead2ac1a23e",
                    "kravforfallsdato": "2018-02-07T00:00:00.000+01:00",
                    "plasseringsdato": "2018-02-09T00:00:00.000+01:00",
                    "plassertBeloep": 450941.09,
                    "opprinneligKravforfallsbeloep": 450941.09,
                    "gjenstaaendeKravforfallsbeloep": 0
                }
            ],
            "uplassertBeloep": -3741214.87,
            "betaltTilKonto": {
                "kontonummer": "97443329655"
            },
            "betaltFra": {
                "konto": {
                    "kontoeiersNavn": "Bergliot Jørgensen",
                    "kontonummer": "65336676689"
                }
            },
            "innbetalingstype": "Innbetaling"
        },
        {
            "partIdentifikator": "310478717",
            "innbetalingsidentifikator": "d243abfc-318c-4c90-b686-ded5b4921223",
            "innbetalingsdato": "2006-02-03T00:00:00.000+01:00",
            "innbetaltBeloep": -320881.79,
            "plassertInnbetalingMotKrav": [],
            "uplassertBeloep": -320881.79,
            "betaltTilKonto": {
                "kontonummer": "97443329655"
            },
            "betaltFra": {
                "konto": {
                    "kontoeiersNavn": "Bergliot Jørgensen",
                    "kontonummer": "65336676689"
                }
            },
            "innbetalingstype": "Innbetaling"
        },
        {
            "partIdentifikator": "310478717",
            "innbetalingsidentifikator": "7e7bda92-3056-458d-943f-ac3554f46263",
            "innbetalingsdato": "2002-12-07T00:00:00.000+01:00",
            "innbetaltBeloep": -2798818.01,
            "plassertInnbetalingMotKrav": [],
            "uplassertBeloep": -2798818.01,
            "betaltTilKonto": {
                "kontonummer": "97443329655"
            },
            "betaltFra": {
                "konto": {
                    "kontoeiersNavn": "Bergliot Jørgensen",
                    "kontonummer": "65336676689"
                }
            },
            "innbetalingstype": "Innbetaling"
        },
        {
            "partIdentifikator": "310478717",
            "innbetalingsidentifikator": "aef92902-9851-4533-8800-1d06649945e4",
            "innbetalingsdato": "2001-12-25T00:00:00.000+01:00",
            "innbetaltBeloep": -6716108.25,
            "plassertInnbetalingMotKrav": [
                {
                    "dekketKrav": "Sjokoladeavgift",
                    "kravforfallIdentifikator": "44c2da6e-e0dd-4a2a-95e2-6da504a220fd",
                    "kravforfallsdato": "2004-12-28T00:00:00.000+01:00",
                    "plasseringsdato": "2004-12-30T00:00:00.000+01:00",
                    "plassertBeloep": 1611550.01,
                    "opprinneligKravforfallsbeloep": 1611550.01,
                    "gjenstaaendeKravforfallsbeloep": 0
                }
            ],
            "uplassertBeloep": -5104558.24,
            "betaltTilKonto": {
                "kontonummer": "97443329655"
            },
            "betaltFra": {
                "konto": {
                    "kontoeiersNavn": "Bergliot Jørgensen",
                    "kontonummer": "65336676689"
                }
            },
            "innbetalingstype": "Innbetaling"
        },
        {
            "partIdentifikator": "310478717",
            "innbetalingsidentifikator": "81251dbf-f996-4fdb-88bb-376f504910e3",
            "innbetalingsdato": "2019-08-05T00:00:00.000+02:00",
            "innbetaltBeloep": -807619.74,
            "plassertInnbetalingMotKrav": [
                {
                    "dekketKrav": "Sjokoladeavgift",
                    "kravforfallIdentifikator": "634e4973-000f-4f6b-bc5f-9e2130acaf04",
                    "kravforfallsdato": "2003-12-21T00:00:00.000+01:00",
                    "plasseringsdato": "2019-08-07T00:00:00.000+02:00",
                    "plassertBeloep": 285924.33,
                    "opprinneligKravforfallsbeloep": 285924.33,
                    "gjenstaaendeKravforfallsbeloep": 0
                }
            ],
            "uplassertBeloep": -521695.41,
            "betaltTilKonto": {
                "kontonummer": "97443329655"
            },
            "betaltFra": {
                "konto": {
                    "kontoeiersNavn": "Bergliot Jørgensen",
                    "kontonummer": "65336676689"
                }
            },
            "innbetalingstype": "Innbetaling"
        },
        {
            "partIdentifikator": "310478717",
            "innbetalingsidentifikator": "4afe23c7-4e4b-4ff4-a9f6-ddf81b971229",
            "innbetalingsdato": "2018-12-08T00:00:00.000+01:00",
            "innbetaltBeloep": -2857189.02,
            "plassertInnbetalingMotKrav": [
                {
                    "dekketKrav": "Sjokoladeavgift",
                    "kravforfallIdentifikator": "803e5d09-99ea-4405-a3ae-dbfe4cabfba3",
                    "kravforfallsdato": "2014-09-02T00:00:00.000+02:00",
                    "plasseringsdato": "2018-12-10T00:00:00.000+01:00",
                    "plassertBeloep": 756851.17,
                    "opprinneligKravforfallsbeloep": 756851.17,
                    "gjenstaaendeKravforfallsbeloep": 0
                },
                {
                    "dekketKrav": "Sjokoladeavgift",
                    "kravforfallIdentifikator": "3c72bf81-3d41-46f9-8c06-5ac5ecf34f96",
                    "kravforfallsdato": "2018-08-02T00:00:00.000+02:00",
                    "plasseringsdato": "2018-12-10T00:00:00.000+01:00",
                    "plassertBeloep": 201120.00,
                    "opprinneligKravforfallsbeloep": 201120.00,
                    "gjenstaaendeKravforfallsbeloep": 0
                }
            ],
            "uplassertBeloep": -1899217.85,
            "betaltTilKonto": {
                "kontonummer": "97443329655"
            },
            "betaltFra": {
                "konto": {
                    "kontoeiersNavn": "Bergliot Jørgensen",
                    "kontonummer": "65336676689"
                }
            },
            "innbetalingstype": "Innbetaling"
        },
        {
            "partIdentifikator": "310478717",
            "innbetalingsidentifikator": "52b2bebf-a607-4eb9-a37b-a339f410a4c3",
            "innbetalingsdato": "2007-03-05T00:00:00.000+01:00",
            "innbetaltBeloep": -5472156.43,
            "plassertInnbetalingMotKrav": [
                {
                    "dekketKrav": "Sjokoladeavgift",
                    "kravforfallIdentifikator": "5006598e-93e3-42d4-9c51-beb297b10de6",
                    "kravforfallsdato": "2018-09-02T00:00:00.000+02:00",
                    "plasseringsdato": "2018-09-04T00:00:00.000+02:00",
                    "plassertBeloep": 201119.99,
                    "opprinneligKravforfallsbeloep": 201119.99,
                    "gjenstaaendeKravforfallsbeloep": 0
                }
            ],
            "uplassertBeloep": -5271036.44,
            "betaltTilKonto": {
                "kontonummer": "97443329655"
            },
            "betaltFra": {
                "konto": {
                    "kontoeiersNavn": "Bergliot Jørgensen",
                    "kontonummer": "65336676689"
                }
            },
            "innbetalingstype": "Innbetaling"
        },
        {
            "partIdentifikator": "310478717",
            "innbetalingsidentifikator": "21c39765-2745-410f-b9d7-2ebc96405a69",
            "innbetalingsdato": "2005-03-08T00:00:00.000+01:00",
            "innbetaltBeloep": -3116756.11,
            "plassertInnbetalingMotKrav": [],
            "uplassertBeloep": -3116756.11,
            "betaltTilKonto": {
                "kontonummer": "97443329655"
            },
            "betaltFra": {
                "konto": {
                    "kontoeiersNavn": "Bergliot Jørgensen",
                    "kontonummer": "65336676689"
                }
            },
            "innbetalingstype": "Innbetaling"
        },
        {
            "partIdentifikator": "310478717",
            "innbetalingsidentifikator": "inn-123456",
            "innbetalingsdato": "2022-10-31T00:00:00.000+01:00",
            "innbetaltBeloep": 1000,
            "plassertInnbetalingMotKrav": [],
            "betaltTilKonto": {
                "kontonummer": "98766543212"
            },
            "betaltFra": {
                "konto": {
                    "kontoeiersNavn": "BERIKENDE EVIG KATT HANKATT",
                    "kontonummer": "98766543212"
                }
            },
            "innbetalingstype": "bankoverføring"
        },
        {
            "partIdentifikator": "310478717",
            "innbetalingsidentifikator": "3455822e-8a42-4d9a-bc30-960e5c5f7875",
            "innbetalingsdato": "2015-11-28T00:00:00.000+01:00",
            "innbetaltBeloep": -305358.85,
            "plassertInnbetalingMotKrav": [],
            "uplassertBeloep": -305358.85,
            "betaltTilKonto": {
                "kontonummer": "97443329655"
            },
            "betaltFra": {
                "konto": {
                    "kontoeiersNavn": "Bergliot Jørgensen",
                    "kontonummer": "65336676689"
                }
            },
            "innbetalingstype": "Innbetaling"
        },
        {
            "partIdentifikator": "310478717",
            "innbetalingsidentifikator": "c7111c9a-0025-4690-9654-9775161e64ed",
            "innbetalingsdato": "2014-11-04T00:00:00.000+01:00",
            "innbetaltBeloep": -1570652.26,
            "plassertInnbetalingMotKrav": [],
            "uplassertBeloep": -1570652.26,
            "betaltTilKonto": {
                "kontonummer": "97443329655"
            },
            "betaltFra": {
                "konto": {
                    "kontoeiersNavn": "Bergliot Jørgensen",
                    "kontonummer": "65336676689"
                }
            },
            "innbetalingstype": "Innbetaling"
        },
        {
            "partIdentifikator": "310478717",
            "innbetalingsidentifikator": "5ae3089e-48b7-4aa6-9f4b-021840f74780",
            "innbetalingsdato": "2011-11-20T00:00:00.000+01:00",
            "innbetaltBeloep": -292495.82,
            "plassertInnbetalingMotKrav": [],
            "uplassertBeloep": -292495.82,
            "betaltTilKonto": {
                "kontonummer": "97443329655"
            },
            "betaltFra": {
                "konto": {
                    "kontoeiersNavn": "Bergliot Jørgensen",
                    "kontonummer": "65336676689"
                }
            },
            "innbetalingstype": "Innbetaling"
        },
        {
            "partIdentifikator": "310478717",
            "innbetalingsidentifikator": "2fa5e646-41fb-488e-937a-6f2f1c7b803d",
            "innbetalingsdato": "2010-09-08T00:00:00.000+02:00",
            "innbetaltBeloep": -4764004.62,
            "plassertInnbetalingMotKrav": [
                {
                    "dekketKrav": "Sjokoladeavgift",
                    "kravforfallIdentifikator": "e89934c6-e371-4a18-b136-e86619b5f328",
                    "kravforfallsdato": "2003-12-21T00:00:00.000+01:00",
                    "plasseringsdato": "2010-09-10T00:00:00.000+02:00",
                    "plassertBeloep": 571848.66,
                    "opprinneligKravforfallsbeloep": 571848.66,
                    "gjenstaaendeKravforfallsbeloep": 0
                },
                {
                    "dekketKrav": "Sjokoladeavgift",
                    "kravforfallIdentifikator": "a041ff12-b9e4-45c1-a774-7ead2ac1a23e",
                    "kravforfallsdato": "2018-02-07T00:00:00.000+01:00",
                    "plasseringsdato": "2018-02-09T00:00:00.000+01:00",
                    "plassertBeloep": 450941.09,
                    "opprinneligKravforfallsbeloep": 450941.09,
                    "gjenstaaendeKravforfallsbeloep": 0
                }
            ],
            "uplassertBeloep": -3741214.87,
            "betaltTilKonto": {
                "kontonummer": "97443329655"
            },
            "betaltFra": {
                "konto": {
                    "kontoeiersNavn": "Bergliot Jørgensen",
                    "kontonummer": "65336676689"
                }
            },
            "innbetalingstype": "Innbetaling"
        },
        {
            "partIdentifikator": "310478717",
            "innbetalingsidentifikator": "d243abfc-318c-4c90-b686-ded5b4921223",
            "innbetalingsdato": "2006-02-03T00:00:00.000+01:00",
            "innbetaltBeloep": -320881.79,
            "plassertInnbetalingMotKrav": [],
            "uplassertBeloep": -320881.79,
            "betaltTilKonto": {
                "kontonummer": "97443329655"
            },
            "betaltFra": {
                "konto": {
                    "kontoeiersNavn": "Bergliot Jørgensen",
                    "kontonummer": "65336676689"
                }
            },
            "innbetalingstype": "Innbetaling"
        },
        {
            "partIdentifikator": "310478717",
            "innbetalingsidentifikator": "7e7bda92-3056-458d-943f-ac3554f46263",
            "innbetalingsdato": "2002-12-07T00:00:00.000+01:00",
            "innbetaltBeloep": -2798818.01,
            "plassertInnbetalingMotKrav": [],
            "uplassertBeloep": -2798818.01,
            "betaltTilKonto": {
                "kontonummer": "97443329655"
            },
            "betaltFra": {
                "konto": {
                    "kontoeiersNavn": "Bergliot Jørgensen",
                    "kontonummer": "65336676689"
                }
            },
            "innbetalingstype": "Innbetaling"
        },
        {
            "partIdentifikator": "310478717",
            "innbetalingsidentifikator": "aef92902-9851-4533-8800-1d06649945e4",
            "innbetalingsdato": "2001-12-25T00:00:00.000+01:00",
            "innbetaltBeloep": -6716108.25,
            "plassertInnbetalingMotKrav": [
                {
                    "dekketKrav": "Sjokoladeavgift",
                    "kravforfallIdentifikator": "44c2da6e-e0dd-4a2a-95e2-6da504a220fd",
                    "kravforfallsdato": "2004-12-28T00:00:00.000+01:00",
                    "plasseringsdato": "2004-12-30T00:00:00.000+01:00",
                    "plassertBeloep": 1611550.01,
                    "opprinneligKravforfallsbeloep": 1611550.01,
                    "gjenstaaendeKravforfallsbeloep": 0
                }
            ],
            "uplassertBeloep": -5104558.24,
            "betaltTilKonto": {
                "kontonummer": "97443329655"
            },
            "betaltFra": {
                "konto": {
                    "kontoeiersNavn": "Bergliot Jørgensen",
                    "kontonummer": "65336676689"
                }
            },
            "innbetalingstype": "Innbetaling"
        }
    ],
    "totalOversikt": {
        "sumStipulerteRenter": 18567700,
        "sumForfalteKrav": -31461348,
        "sumIkkeForfalteKrav": 0,
        "sumUplasserteInnbetalinger": -39076665.49,
        "saldo": -51970313
    },
    "oversiktPerKravgruppe": [
        {
            "kravgruppe": "Særavgift",
            "sumStipulerteRenter": 2456668,
            "sumForfalteKrav": -19473288,
            "sumIkkeForfalteKrav": 0,
            "saldo": -17016620
        },
        {
            "kravgruppe": "Merverdiavgift",
            "sumStipulerteRenter": 13654344,
            "sumForfalteKrav": 7484228,
            "sumIkkeForfalteKrav": 0,
            "saldo": 21138572
        },
        {
            "kravgruppe": "Skatt",
            "sumStipulerteRenter": 20,
            "sumForfalteKrav": 1000,
            "sumIkkeForfalteKrav": 0,
            "saldo": 1020
        },
        {
            "kravgruppe": "Øvrige offentlige krav",
            "sumStipulerteRenter": 2456668,
            "sumForfalteKrav": -19473288,
            "sumIkkeForfalteKrav": 0,
            "saldo": -17016620
        }
    ]
}
```
