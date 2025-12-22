import type { Payload } from 'payload';

type GetBlogProps = {
  payload: Payload;
  limit?: number;
  page?: number;
};

export async function getBlog(props: GetBlogProps) {
  const { limit, page, payload} = props;
  const blog = await payload.find({
    collection: 'blog',
    limit,
    page,
    sort: '-createdAt',
    select: {
      futuredate: true,
      title: true,
      slug: true,
     subtitle: true,
      image: true,
    },
  });

  return blog;
}
