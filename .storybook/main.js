const custom = require("./webpack.config.js");

module.exports = {
  stories: ["../stories/index.tsx"],
  webpackFinal: config => {
    return {
      ...config,
      module: {
        ...config.module,
        rules: [...config.module.rules, ...custom.module.rules]
      }
    };
  }
};
