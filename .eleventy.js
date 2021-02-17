module.exports = function(eleventyConfig){
    eleventyConfig.addPassthroughCopy("src/photos");
    eleventyConfig.addPassthroughCopy("src/company");
    return {
        dir: {
            input: "src",
            output: "docs"
        }
    };
};