# Google Clone

## Live
The web is live [here]()

## Comands
To run the application:
```console
npm run dev
```

To run tests:
```console
npm run test
```

To run the lintern:
```console
npm run lint:fix
```

To generate a build:
```console
npm run build
```

## Technologies
- React: Library used for the whole application
- SCSS: For styling
- Vitest: For testing
- Eslint & prettier: Format and linter

## Architecture
<pre>
├───src
|   main.jsx: the root app
|   App.css: general styles
|   App.jsx: file responsible for rendering pages
│   ├───assets: static images and CSS variables
│   ├───components: React components used in pages
│   │   ├───Button
│   │   ├───Card
│   │   ├───Footer
│   │   ├───Form
│   │   ├───Header
│   │   ├───Input
│   │   ├───Layout
│   │   ├───NoResults
│   │   ├───Selected
│   │   └───Skeleton
│   ├───hooks: fake.js data generator
│   └───pages: Pages made with React used for the routes
│       ├───Home
│       └───Results
</pre>
