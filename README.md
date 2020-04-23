## gatsby-remark-lazy-image-url
Support native lazy loading of images inside markdown.
### Problem
The official Gatsby image plugin doesn't add lazy loading to external images referenced inside markdown.

This plugin will add `loading="lazy"` attribute to your images inside the markdown. This plugin is intended to work with external image URLs.