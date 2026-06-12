export default {
  name: 'bridalPackage',
  title: 'Bridal Package',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Package name (e.g. "Timeless Elegance")',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      description: 'Short tagline (e.g. "Basic Makeup", "HD Makeup")',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Detailed description of what the package includes',
      rows: 4,
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'features',
      title: 'Features',
      type: 'array',
      description: 'List of key features included in this package',
      of: [{type: 'string'}],
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      description: 'Upload a photo showcasing this package',
      options: {hotspot: true},
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Display order (lower numbers appear first)',
      initialValue: 0,
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
      title: 'title',
      subtitle: 'subtitle',
      media: 'image',
    },
  },
}
