module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/images");
  eleventyConfig.addPassthroughCopy("./src/js");
  eleventyConfig.addPassthroughCopy("./src/css/print.css", "css/print.css");
  eleventyConfig.addPassthroughCopy("./src/css/recaptcha.css", "css/recaptcha.css");
  eleventyConfig.addPassthroughCopy({
    "node_modules/vanilla-cookieconsent/dist/cookieconsent.css" : "css/cookieconsent.css",
    "node_modules/vanilla-cookieconsent/dist/cookieconsent.umd.js" : "js/cookieconsent.umd.js",
    "node_modules/boxicons/css/boxicons.min.css" : "css/boxicons.min.css",
    "node_modules/boxicons/fonts/" : "fonts/"
  });
  eleventyConfig.addPassthroughCopy({ "./src/favicons" : "/"});
  eleventyConfig.addPassthroughCopy({ "./src/favicons/modesto_software_favicon_for_light_mode.ico" : "/favicon.ico"});
  eleventyConfig.addPassthroughCopy({ "./src/robots.txt" : "/robots.txt"});

  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  return {
    dir: {
      input: "src",
      output: "_site",
    },
  };
};
