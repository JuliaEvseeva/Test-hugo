module.exports = {
  collections_config: {
    ru: {
      path: 'content/posts',
      output: true,
      parser: 'yaml',
      url: '/posts/{category|slugify}/[slug].html'
    }
  }
};