export const aboutQuery = `*[_type == "about"][0]{
  title,
  subtitle,
  paragraphs,
  mission,
  image,
  stats
}`

export const bridalPackagesQuery = `*[_type == "bridalPackage"] | order(order asc){
  title,
  subtitle,
  description,
  features,
  image,
  order
}`

export const servicesQuery = `*[_type == "service"] | order(order asc){
  title,
  subtitle,
  icon
}`

export const testimonialsQuery = `*[_type == "testimonial"] | order(order asc){
  name,
  occasion,
  text,
  stars
}`

export const galleryQuery = `*[_type == "galleryImage"] | order(order asc){
  title,
  image,
  category
}`

export const brandsQuery = `*[_type == "brand"] | order(order asc){
  name,
  logo
}`

export const faqsQuery = `*[_type == "faq"] | order(order asc){
  question,
  answer
}`

export const siteSettingsQuery = `*[_type == "siteSettings"][0]{
  title,
  heroHeading,
  heroSubheading,
  heroDescription,
  heroImage,
  bridalSectionHeading,
  bridalSectionTagline,
  bridalSectionIntro,
  aboutSectionTitle
}`
