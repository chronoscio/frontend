# ChronoScio Frontend
[![Build Status](https://travis-ci.org/chronoscio/frontend.svg?branch=master)](https://travis-ci.org/chronoscio/frontend)
[![David](https://img.shields.io/david/chronoscio/frontend.svg?path=packages%2Fapp)](https://david-dm.org/chronoscio/frontend?path=packages/app)
[![Coveralls github](https://img.shields.io/coveralls/github/chronoscio/frontend.svg)](https://coveralls.io/github/chronoscio/frontend)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/7106e9407f3843ee93e204d65229fff9)](https://www.codacy.com/app/amaurymartiny/frontend?utm_source=github.com&utm_medium=referral&utm_content=chronoscio/frontend&utm_campaign=Badge_Grade)


## Getting Started
1) Make sure that you have installed [yarn](https://yarnpkg.com/lang/en/docs/install/#debian-stable) and Node.js PPA. Default Node.js does not work as its version is too low for yarn install to work properly.
2) Make a mapbox account and create a private [access token](https://www.mapbox.com/account/access-tokens). The name does not matter. You will need this in order to see the map.
3) Clone the repo, install, configure, and run.
```bash
# Clone the repo if you have not already.
git clone https://github.com/chronoscio/frontend

# Use yarn to install dependencies, AFTER being sure you have Node.js PPA.
yarn install

# Add secrets
cp packages/app/now-secrets.example.json packages/app/now-secrets.json
# Edit now-secrets.json to add the access token you got earlier, as a string.

# Run the ftont end.
yarn start # The app will live-reload on save
```

The app will spawn on `localhost:3000`. It should have a descriptive sidebar on the left and a login on the right.

## Contributing

Please refer to the [developer guide](./docs/DEVELOPER.md) to learn how we structure the app.
