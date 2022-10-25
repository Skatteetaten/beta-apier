# Bidra med dokumentasjon

Nettsiden lages basert på strukturen under `docs/` mappen. For å legge inn informasjon om en ny tjeneste:

1. Lag en ny mappe med et hensiktsmessig navn under `/docs` for den nye tjenesten.
2. Lag en `index.md` fil under den nye mappen. Dette blir landingssiden for det nye området.
3. Legg til flere markdown filer for hver separat side dere ønsker å vise.
4. Oppdater GitHub siden med filendringene.

Automatisk oppdatering av github-siden er ikke implementert ennå; kontakt Martin Jonassen for at endringene skal kunne vises i nettsiden.

Titlene i navigasjonsmenyen er basert på overskriften til de respektive markdown filene. Det er mulighet for å bruke metadata for å overstyre denne om dere ønsker at de skal være forskjellige; se `kravogbetalinger/index.md` for et eksempel.

# Development

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ npm install
```

### Local Development

```
$ npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Not using SSH:

```
$ GIT_USER=<Your GitHub username> npm run deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
