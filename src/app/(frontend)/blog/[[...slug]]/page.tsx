import configPromise from '@payload-config';
import { getPayload } from 'payload';
import { notFound } from 'next/navigation';

import { getSingleBlog } from '@/services/blog/get-blog-single';

import BlogArticles from './blog-articles';
import SingleBlog from './single-blog';
import RecentPost from './recent-posts';
import SocialMedia from './social-media';

type Props = {
  params: {
    slug?: string[];
  };
};

export default async function BlogPage({ params }: Props) {
  const payload = await getPayload({ config: configPromise });

  if (params.slug?.length === 1) {
    const blog = await getSingleBlog({
      payload,
      slug: params.slug[0],
    });

    if (!blog) notFound();

    return (
      <Layout>
        <SingleBlog blog={blog} />
      </Layout>
    );
  }

  return (
    <Layout>
      <BlogArticles />
    </Layout>
  );
}

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-6xl mx-auto p-5">
      <div className="flex justify-between flex-wrap md:flex-nowrap gap-10">
        <div className=" md:w-[75%] w-full">{children}</div>
        <div className="md:w-[25%] w-full space-y-4">
          <RecentPost />
          <SocialMedia />
        </div>
      </div>
    </div>
  );
}
