# InteractiveMap Frontend

[![Travis (.org)](https://img.shields.io/travis/interactivemap/frontend.svg)](https://travis-ci.org/interactivemap/frontend)
[![David](https://img.shields.io/david/chronoscio/frontend.svg?path=packages%2Fapp)](https://david-dm.org/chronoscio/frontend?path=packages/app)
[![Coveralls github](https://img.shields.io/coveralls/github/chronoscio/frontend.svg)](https://coveralls.io/github/chronoscio/frontend)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/7106e9407f3843ee93e204d65229fff9)](https://www.codacy.com/app/amaurymartiny/frontend?utm_source=github.com&utm_medium=referral&utm_content=chronoscio/frontend&utm_campaign=Badge_Grade)

## Getting Started

```bash
git clone https://github.com/interactivemap/frontend
yarn install

# Add secrets
cp packages/app/now-secrets.example.json packages/app/now-secrets.json
# Edit now-secrets.json to add your own secrets

yarn start # The app will live-reload on save
```

The app will spawn on `localhost:3000`.

## Contributing

Please refer to the [developer guide](./docs/DEVELOPER.md) to learn how the app
is structured.
