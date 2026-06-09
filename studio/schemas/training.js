export default {
  name: 'training',
  title: 'Training Gallery',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Training', value: 'training'},
          {title: 'Brand Association', value: 'brand'},
        ],
      },
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number',
    },
  ],
  orderings: [
    {
      title: 'Order',
      name: 'order',
      by: [{field: 'order', direction: 'asc'}],
    },
  ],
}
