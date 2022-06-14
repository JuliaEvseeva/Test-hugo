module.exports = {
  collections_config: {
    careers: {
      url: `/careers/[slug].en.md`,
      output: true,
      add_options: [
        {
          name: 'Add Post',
        },
        {
          name: 'Add Draft',
          schema: 'draft'
        },
      ],
      schemas: {
        draft: {
          path: 'schemas/test.md',
        }
      }
    }
  }
}