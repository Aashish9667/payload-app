import type { CollectionConfig } from 'payload'
export const Blog: CollectionConfig = {
  slug: 'blog',
  access: {
    read: () => true,
  },
  fields: [
      {
      name: 'image',
      type: 'upload',
      required: true,
      relationTo: 'media',
    },
{
      name: 'futuredate',
      type: 'date',
      required: true,
    },

    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        position: 'sidebar',
      },
    },
      {
      name: 'subtitle',
      type: 'text',
      required: true,
    },
    
  ],
  
}
