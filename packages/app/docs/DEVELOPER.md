# Building ChronoScio Frontend

Note: this document is still in a draft state, and ideas are for now just
thrown out one after the other. As the project grows, the organization of this
document should be perfected as well.

## Next.js

This project uses [Next.js](https://github.com/zeit/next.js/), please refer to
their doc to learn on how it works roughly.

### Application Structure

All routes in Next.js are defined in the `pages/` folder, each file is a route.

All React components are in the `components/` folder. They follow a tree
structure organized by feature. Please note: **all React components are
Stateless Functional Components (SFC)**! This makes a nice separation, as
components are now only responsible for presentation. It also makes testing
much easier.

Concerning the logic, the frontend uses the
[`recompose`](https://github.com/acdlite/recompose/) library to handle
components' logic. Each recompose HOC should be small, and does only one thing
well. The whole application is then built by combining these small pieces
together with their appropriate React presentational components.

The folder structure follows this pattern: each component folder has a
`decorator/` folder, where all logical HOCs reside. A component can have
sub-components, each of them will then have its own `decorators/` folder,
following a fractal pattern.

### Client-only parts

Next.js easily allows server-side rendering. However, some parts of the app do
not or cannot require SSR, for example:

- the map: it takes time to load the whole map, it wouldn't make sense for the
  server to load part of the map, transfer it to the frontend, and let the
  frontend load the rest. The whole map is loaded on the frontend.
- the login logic: the login auth tokens are stored in the browser (using
  [`localForage`](https://github.com/localForage/localForage) package). The
  backend doesn't have any login logic.

The parts that do not use SSR are loaded like this:

```javascript
// Load Login React component only on the client
const Login = dynamic(import('../components/Login'), { ssr: false });

export default () => <Login />;
```

Also, everything inside the `componentDidMount()` lifecycle will only be
executed on the client.
