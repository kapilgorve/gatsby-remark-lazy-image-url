const visit = require("unist-util-visit")

module.exports = ({ markdownAST }, pluginOptions) => {
  visit(markdownAST, 'image', node => {
    if (node.url.includes('www') || node.url.includes('http')) {
      const html = `
        <img src="${node.url}" alt="${node.alt}" loading="lazy">`
      node.type = "html"
      node.value = html
    }
  })
  return markdownAST
}