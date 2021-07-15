module.exports = function (config) {
  config.setBrowserSyncConfig({
    https: true
  });

  config.addPassthroughCopy("src/js");
  return {
    dir: {
      input: "src",
      output: "dist",
      data: "_data"
    }
  };
};
