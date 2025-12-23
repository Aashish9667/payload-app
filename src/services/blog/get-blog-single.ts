    import type { Payload } from 'payload';

export async function getSingleBlog({payload,slug,}:{payload: Payload; slug: string;}) {
    return (
    await payload.find({
      collection: 'blog',
      limit: 1,
      where: {
        slug: { equals: slug },
      },
    })
  ).docs[0] || null;
}
