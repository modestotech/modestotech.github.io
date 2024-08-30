module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/images");
  eleventyConfig.addPassthroughCopy("./src/js");
  eleventyConfig.addPassthroughCopy({
    "node_modules/vanilla-cookieconsent/dist/cookieconsent.css" : "css/cookieconsent.css",
    "node_modules/vanilla-cookieconsent/dist/cookieconsent.umd.js" : "js/cookieconsent.umd.js"
  });
  eleventyConfig.addPassthroughCopy({ "./src/favicons" : "/"});
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  return {
    dir: {
      input: "src",
      output: "_site",
    },
  };
};
