module.exports = function(api) {
    api.cache(true);
    const presets = [
      [
        "@babel/preset-env",
        {
          targets: {
            browsers: ["> 1%", "last 2 versions", "IE >= 10"]
          },
          useBuiltIns: "usage",
          corejs: 3,
          debug: true,
          shippedProposals: true
        }
      ]
    ];
    const plugins = [
      "@babel/plugin-syntax-dynamic-import",
      "@babel/plugin-transform-runtime"
    ];
  
    return {
      presets,
      plugins
    };
  };