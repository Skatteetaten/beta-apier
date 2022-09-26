# Beta-APIer

Applikasjon for å publisere spesifikasjoner til partnere/leverandører av sluttbrukersystemleverandører/banker og andre.

## Bidra med dokumentasjon

Legg til en mappe i /docs/documentation. Mappenavnet vil gjenspeiles i nettverksadressen.

Lag en index.md fil i mappen. I starten på filen, skriv:

    ---
    icon: ""
    title: ""
    description: ""
    ---

Disse verdiene brukes på oversikten over dokumentasjonene. Resten av filen kan brukes til detaljert informasjon.

Oversikt over ikoner: https://skatteetaten.github.io/frontend-components/#icon

## How to build locally

The project is built using npm from the current Node LTS. Install with [nvm](https://github.com/nvm-sh/nvm);

    nvm install --lts

Then run

    npm install

to install the dependencies.

    npm start

will start a local web server and continuously build the documentation as you make changes.
The documentation will be available at http://localhost:8000/documentation

## Publishing the github pages

- **Make sure you have a branch called gh-pages in your project, this branch will publish the GitHub pages**
- **Go to repository settings and select gh-pages as source for GitHub pages and click save**

To build the documentation pages with gatsby

    npm run build

Then use the following command to publish to GitHub pages

    npm run deploy
