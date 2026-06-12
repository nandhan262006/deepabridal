export default {
  name: 'bridalPackage',
  title: 'Bridal Package',
  type: 'document',
  fields: [
    {
      name: 'order',
      title: 'Package',
      type: 'number',
      description: '1 = Basic Makeup, 2 = HD Makeup, 3 = Airbrush Makeup',
      options: {
        list: [
          {title: '1 - Basic Makeup', value: 1},
          {title: '2 - HD Makeup', value: 2},
          {title: '3 - Airbrush Makeup', value: 3},
        ],
      },
      readOnly: true,
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      readOnly: true,
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      readOnly: true,
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      readOnly: true,
    },
    {
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [{type: 'string'}],
      readOnly: true,
    },
    {
      name: 'image',
      title: 'Photo (click to replace)',
      type: 'image',
      options: {hotspot: true},
    },
  ],
  orderings: [
    {
      title: 'Order',
      name: 'order',
      by: [{field: 'order', direction: 'asc'}],
    },
  ],
  preview: {
    select: {
      order: 'order',
      title: 'title',
      media: 'image',
    },
    prepare({order, title, media}) {
      const labels = {1: 'Basic Makeup', 2: 'HD Makeup', 3: 'Airbrush Makeup'};
      return {
        title: labels[order] || `Package ${order}`,
        subtitle: title,
        media,
      };
    },
  },
}
