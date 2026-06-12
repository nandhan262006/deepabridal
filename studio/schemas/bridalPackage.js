export default {
  name: 'bridalPackage',
  title: 'Bridal Package',
  type: 'document',
  fields: [
    {
      name: 'packageType',
      title: 'Package Type',
      type: 'string',
      description: 'Select which package this is',
      options: {
        list: [
          {title: 'Basic Makeup', value: 'basic'},
          {title: 'HD Makeup', value: 'hd'},
          {title: 'Airbrush Makeup', value: 'airbrush'},
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Package name (e.g. "Timeless Elegance")',
      hidden: ({document}) => !document?.packageType,
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Detailed description of what the package includes',
      rows: 4,
      hidden: ({document}) => !document?.packageType,
    },
    {
      name: 'features',
      title: 'Features',
      type: 'array',
      description: 'List of key features included in this package',
      of: [{type: 'string'}],
      hidden: ({document}) => !document?.packageType,
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      description: 'Upload a photo showcasing this package',
      options: {hotspot: true},
      hidden: ({document}) => !document?.packageType,
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
      title: 'packageType',
      subtitle: 'title',
      media: 'image',
    },
    prepare({title, subtitle, media}) {
      const labels = {basic: 'Basic Makeup', hd: 'HD Makeup', airbrush: 'Airbrush Makeup'};
      return {
        title: labels[title] || title,
        subtitle: subtitle || 'No title set',
        media,
      };
    },
  },
}
