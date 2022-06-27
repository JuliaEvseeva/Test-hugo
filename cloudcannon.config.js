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
  },
  data_config: {
    careers: {
      path: 'data/authors.yml'
    }
  },
  _inputs: {
    tags: {
      type: "select",
      options: {
        values: ["Bolt", "Nut", "Gear"]
      }
    },
    direction: {
      type: "multiselect",
      options: {
        values: ["Bolt", "Nut", "Gear"]
      }
    }
  }
}
