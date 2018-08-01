module.exports = {
  plugins: [
    [
      'styled-components',
      {
        ssr: true,
        displayName: true,
        preprocess: false
      }
    ]
  ],
  presets: ['next/babel', '@zeit/next-typescript/babel']
};
