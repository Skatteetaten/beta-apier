# Trekkpålegg

## Om tjenesten

Denne siden beskriver et nytt grensesnitt mellom IT-systemene til Skatteetaten og trekkpliktige/arbeidsgivere.

Målgruppen for siden er utviklere og IT-arkitekter hos systemleverandører som leverer lønns- og personalsystemer (eller sluttbrukersystemer) til arbeidsgivere. Slike systemer kalles i det videre sluttbrukersystemer og forkortes SBS.

## Arkitekturen

Det skal etableres et nytt grensesnitt for å formidle trekkpålegg fra Skatteetaten til arbeidsgivere med ansatte som skal ha utleggstrekk i lønn.

Grensesnittet vil på sikt erstatte det eksisterende grensesnittet for trekkformidling, men i første omgang vil det nye grensesnittet komme i tillegg til det eksisterende grensesnittet.
Grensesnittet vil først tilbys i et testmiljø, deretter i piloter og til slutt i full produksjon.

Hovedtrekkene i det nye grensesnittet er:

* Grensesnittet er et maskin-maskin-grensesnitt som overfører trekkpålegg fra Skatteetaten til arbeidsgivere med SBS-systemer.
* Grensesnittet er basert på en RESTful-stil som tilbyr et API.
* SBS må spørre (poll) mot grensesnittet for å sjekke om det er nye trekkpålegg.
* Det vil etterhvert komme et grensesnitt der SBS kan motta notifikasjon (event) om at Skatteetaten har et nytt trekkpålegg til arbeidsgiver.
* I grensesnittet må SBS presentere et token som inneholder organisasjonsnummeret til trekkpliktig arbeidsgiver.
* Tokenet får SBS ved å koble seg opp mot Maskinporten med et gitt "scope".
* Trekkpålegget leveres i formatet JSON.