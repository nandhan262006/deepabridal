export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Site Title',
      type: 'string',
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
      description: 'Main logo (used in Navbar, Hero, Footer)',
    },
    {
      name: 'instagramLogo',
      title: 'Instagram Logo',
      type: 'image',
    },
    {
      name: 'heroHeading',
      title: 'Hero Heading',
      type: 'string',
    },
    {
      name: 'heroSubheading',
      title: 'Hero Subheading',
      type: 'string',
    },
    {
      name: 'heroDescription',
      title: 'Hero Description',
      type: 'text',
    },
    {
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
    },
    {
      name: 'bridalSectionHeading',
      title: 'Bridal Section Heading',
      type: 'string',
      initialValue: 'Bespoke Bridal Makeup Packages',
    },
    {
      name: 'bridalSectionTagline',
      title: 'Bridal Section Tagline',
      type: 'string',
      initialValue: '"Transforming Dreams into Timeless Beauty"',
    },
    {
      name: 'bridalSectionIntro',
      title: 'Bridal Section Intro Paragraph',
      type: 'text',
    },
    {
      name: 'aboutSectionTitle',
      title: 'About Section Title',
      type: 'string',
      initialValue: 'Deepa Bridal Studio',
    },
  ],
}
