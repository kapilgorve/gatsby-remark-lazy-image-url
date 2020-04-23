## gatsby-remark-lazy-image-url

Support native lazy loading of external images inside markdown.

## Install

`npm install --save gatsby-remark-lazy-image-url`

## How to Use

```json
// In your gatsby-config.js
plugins: [
  {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-lazy-image-url`]
      }
  }
]
```

### Problem

The official Gatsby image plugin doesn't add lazy loading to external images referenced inside markdown.

This plugin will add `loading="lazy"` attribute to your images inside the markdown. This plugin is intended to work with external image URLs.
