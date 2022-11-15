# Hent frister

TODO: Litt tekst takk

## Format på request

JSON

```json


```

XML

```xml



```


## Format på respons

JSON

```json
{
    "kalender": {
        "hentetDato": "2001-12-17T09:30:47Z",
        "part": [
            {
                "part": {
                    "foedselsnummer": "14817499431"
                },
                "oppgave": [
                    {
                        "myndighet": "SI",
                        "produktomraade": "Saeravgift",
                        "oppgaveBeskrivelse": "819",
                        "krav": [
                            {
                                "kravBeskrivelse": "Tilleggskatt",
                                "overordnetKravType": "betalingskrav",
                                "kravtype": "String",
                                "kravPeriode": "2021",
                                "frist": [
                                    {
                                        "fristType": "forfall",
                                        "frist": "2023-06-12"
                                    }
                                ],
                                "kravstatus": "åpen"
                            }
                        ],
                        "oppgavestatus": "String"
                    }
                ]
            },
            {
                "part": {
                    "organisasjonsnummer": "313268489"
                },
                "oppgave": [
                    {
                        "myndighet": "SI",
                        "produktomraade": "Saeravgift",
                        "oppgaveBeskrivelse": "819",
                        "krav": [
                            {
                                "kravBeskrivelse": "Tilleggskatt",
                                "overordnetKravType": "betalingskrav",
                                "kravtype": "String",
                                "kravPeriode": "2022",
                                "frist": [
                                    {
                                        "fristType": "Forfall",
                                        "frist": "2023-08-13"
                                    }
                                ],
                                "kravstatus": "åpen"
                            }
                        ],
                        "oppgavestatus": "String"
                    }
                ]
            },
            {
                "part": {
                    "organisasjonsnummer": "313268489"
                },
                "oppgave": [
                    {
                        "myndighet": "SI",
                        "produktomraade": "Saeravgift",
                        "oppgaveBeskrivelse": "819",
                        "krav": [
                            {
                                "kravBeskrivelse": "Tilleggskatt",
                                "overordnetKravType": "betalingskrav",
                                "kravtype": "String",
                                "kravPeriode": "2021",
                                "frist": [
                                    {
                                        "fristType": "Forfall",
                                        "frist": "2023-06-13"
                                    }
                                ],
                                "kravstatus": "åpen"
                            }
                        ],
                        "oppgavestatus": "String"
                    }
                ]
            },
            {
                "part": {
                    "organisasjonsnummer": "312496771"
                },
                "oppgave": [
                    {
                        "myndighet": "SI",
                        "produktomraade": "Saeravgift",
                        "oppgaveBeskrivelse": "819",
                        "krav": [
                            {
                                "kravBeskrivelse": "Tilleggskatt",
                                "overordnetKravType": "betalingskrav",
                                "kravtype": "String",
                                "kravPeriode": "2022",
                                "frist": [
                                    {
                                        "fristType": "Forfall",
                                        "frist": "2023-08-13"
                                    }
                                ],
                                "kravstatus": "åpen"
                            }
                        ],
                        "oppgavestatus": "String"
                    }
                ]
            },
            {
                "part": {
                    "organisasjonsnummer": "310032964"
                },
                "oppgave": [
                    {
                        "myndighet": "SI",
                        "produktomraade": "Saeravgift",
                        "oppgaveBeskrivelse": "819",
                        "krav": [
                            {
                                "kravBeskrivelse": "Tilleggskatt",
                                "overordnetKravType": "betalingskrav",
                                "kravtype": "String",
                                "kravPeriode": "2022",
                                "frist": [
                                    {
                                        "fristType": "Forfall",
                                        "frist": "2023-08-13"
                                    }
                                ],
                                "kravstatus": "åpen"
                            }
                        ],
                        "oppgavestatus": "String"
                    }
                ]
            }
        ]
    }
}

```


XML

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!--Sample XML file generated by XMLSpy v2019 rel. 3 sp1 (x64) (http://www.altova.com)-->
<n1:kalender xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:n1="no:skatteetaten:innkreving:deling:kalendertjeneste:v1" xsi:schemaLocation="no:skatteetaten:innkreving:deling:kalendertjeneste:v1 no.skatteetaten.innkreving.deling.kalendertjeneste.v1.xsd">
    <n1:hentetDato>2001-12-17T09:30:47Z</n1:hentetDato>
    <n1:part>
        <n1:part>
            <n1:foedselsnummer>14817499431</n1:foedselsnummer>
        </n1:part>
        <n1:oppgave>
            <n1:myndighet>SI</n1:myndighet>
            <n1:produktomraade>Saeravgift</n1:produktomraade>
            <n1:oppgaveBeskrivelse>819</n1:oppgaveBeskrivelse>
            <n1:krav>
                <n1:kravBeskrivelse>Tilleggskatt</n1:kravBeskrivelse>
                <n1:overordnetKravType>betalingskrav</n1:overordnetKravType>
                <n1:kravtype>String</n1:kravtype>
                <n1:kravPeriode>2021</n1:kravPeriode>
                <n1:frist>
                    <n1:fristType>forfall</n1:fristType>
                    <n1:frist>2023-06-12</n1:frist>
                </n1:frist>
                <n1:kravstatus>åpen</n1:kravstatus>
            </n1:krav>
            <n1:oppgavestatus>String</n1:oppgavestatus>
        </n1:oppgave>
    </n1:part>
    <n1:part>
        <n1:part>
            <n1:organisasjonsnummer>313268489</n1:organisasjonsnummer>
        </n1:part>
        <n1:oppgave>
            <n1:myndighet>SI</n1:myndighet>
            <n1:produktomraade>Saeravgift</n1:produktomraade>
            <n1:oppgaveBeskrivelse>819</n1:oppgaveBeskrivelse>
            <n1:krav>
                <n1:kravBeskrivelse>Tilleggskatt</n1:kravBeskrivelse>
                <n1:overordnetKravType>betalingskrav</n1:overordnetKravType>
                <n1:kravtype>String</n1:kravtype>
                <n1:kravPeriode>2022</n1:kravPeriode>
                <n1:frist>
                    <n1:fristType>Forfall</n1:fristType>
                    <n1:frist>2023-08-13</n1:frist>
                </n1:frist>
                <n1:kravstatus>åpen</n1:kravstatus>
            </n1:krav>
            <n1:oppgavestatus>String</n1:oppgavestatus>
        </n1:oppgave>
    </n1:part>
    <n1:part>
        <n1:part>
            <n1:organisasjonsnummer>313268489</n1:organisasjonsnummer>
        </n1:part>
        <n1:oppgave>
            <n1:myndighet>SI</n1:myndighet>
            <n1:produktomraade>Saeravgift</n1:produktomraade>
            <n1:oppgaveBeskrivelse>819</n1:oppgaveBeskrivelse>
            <n1:krav>
                <n1:kravBeskrivelse>Tilleggskatt</n1:kravBeskrivelse>
                <n1:overordnetKravType>betalingskrav</n1:overordnetKravType>
                <n1:kravtype>String</n1:kravtype>
                <n1:kravPeriode>2021</n1:kravPeriode>
                <n1:frist>
                    <n1:fristType>Forfall</n1:fristType>
                    <n1:frist>2023-06-13</n1:frist>
                </n1:frist>
                <n1:kravstatus>åpen</n1:kravstatus>
            </n1:krav>
            <n1:oppgavestatus>String</n1:oppgavestatus>
        </n1:oppgave>
    </n1:part>
    <n1:part>
        <n1:part>
            <n1:organisasjonsnummer>312496771</n1:organisasjonsnummer>
        </n1:part>
        <n1:oppgave>
            <n1:myndighet>SI</n1:myndighet>
            <n1:produktomraade>Saeravgift</n1:produktomraade>
            <n1:oppgaveBeskrivelse>819</n1:oppgaveBeskrivelse>
            <n1:krav>
                <n1:kravBeskrivelse>Tilleggskatt</n1:kravBeskrivelse>
                <n1:overordnetKravType>betalingskrav</n1:overordnetKravType>
                <n1:kravtype>String</n1:kravtype>
                <n1:kravPeriode>2022</n1:kravPeriode>
                <n1:frist>
                    <n1:fristType>Forfall</n1:fristType>
                    <n1:frist>2023-08-13</n1:frist>
                </n1:frist>
                <n1:kravstatus>åpen</n1:kravstatus>
            </n1:krav>
            <n1:oppgavestatus>String</n1:oppgavestatus>
        </n1:oppgave>
    </n1:part>
    <n1:part>
        <n1:part>
            <n1:organisasjonsnummer>310032964</n1:organisasjonsnummer>
        </n1:part>
        <n1:oppgave>
            <n1:myndighet>SI</n1:myndighet>
            <n1:produktomraade>Saeravgift</n1:produktomraade>
            <n1:oppgaveBeskrivelse>819</n1:oppgaveBeskrivelse>
            <n1:krav>
                <n1:kravBeskrivelse>Tilleggskatt</n1:kravBeskrivelse>
                <n1:overordnetKravType>betalingskrav</n1:overordnetKravType>
                <n1:kravtype>String</n1:kravtype>
                <n1:kravPeriode>2022</n1:kravPeriode>
                <n1:frist>
                    <n1:fristType>Forfall</n1:fristType>
                    <n1:frist>2023-08-13</n1:frist>
                </n1:frist>
                <n1:kravstatus>åpen</n1:kravstatus>
            </n1:krav>
            <n1:oppgavestatus>String</n1:oppgavestatus>
        </n1:oppgave>
    </n1:part>

</n1:kalender>

```