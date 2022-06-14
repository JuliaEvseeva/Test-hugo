module.exports = {
  collections_config: {
    careers: {
      parser: (filePath, raw, { parsers, filters }) => {
        const parsed = parsers['front-matter'].parse(raw);
        const slug = filters.slugify(parsed.title || '');
        return { ...data, slug };
      }
    }
  }
}