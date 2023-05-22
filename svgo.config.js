module.exports = {
  datauri: 'enc',
  plugins: [
    {
      name: "preset-default",
    },
    "convertStyleToAttrs",
    "removeDimensions",
    "removeScriptElement",
    "removeStyleElement",
    "sortAttrs",
  ],
};
