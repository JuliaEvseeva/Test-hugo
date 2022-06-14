module.exports = {
  collections_config: {
    careers: {
      url: (filePath, parsed, { filters }) => {
        const year = new Date(parsed.date).getFullYear();
        const slug = filters.slugify(parsed.title || '');
        return `/posts/${year}/${slug}/`;
      },
    }
  }
}