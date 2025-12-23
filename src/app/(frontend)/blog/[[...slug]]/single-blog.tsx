import Image from 'next/image';

type Props = {
  blog: any;
};

export default function SingleBlog({ blog }: Props) {
  return (
    <article>
      <h1 className="text-3xl font-bold mb-2">{blog.title}</h1>

      <p className="text-gray-500 mb-4">
        {new Date(blog.futuredate).toDateString()}
      </p>

      {typeof blog.image === 'object' && blog.image?.url && (
        <Image
          src={blog.image.url}
          alt={blog.title}
          width={800}
          height={400}
          className="rounded-md mb-4"
        />
      )}

      <p className="text-lg text-gray-700">{blog.subtitle}</p>
    </article>
  );
}
