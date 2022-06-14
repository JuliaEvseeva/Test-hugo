module.exports = {
  collections_config: {
    careers: {
      url: (filePath, parsed, { filters }) => {
        const year = new Date(parsed.date).getFullYear();
        const slug = filters.slugify(parsed.title || '');
        return `/careers/${year}/${slug}/`;
      },
      output: true
    }
  }
}