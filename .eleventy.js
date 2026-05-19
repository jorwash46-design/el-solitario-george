module.exports = function(eleventyConfig) {

  // Copiar assets
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/admin");
  eleventyConfig.addPassthroughCopy("src/_redirects");
  // Colección de ensayos
  eleventyConfig.addCollection("ensayos", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/ensayos/*.md").reverse();
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts"
    },
    templateFormats: ["md", "html", "liquid"],
    markdownTemplateEngine: "liquid",
    htmlTemplateEngine: "liquid"
  };
};