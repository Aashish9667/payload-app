import { getBlog } from "@/services/blog/get-blog";
import configPromise from '@payload-config';
import { getPayload } from 'payload';
import Link from "next/link";

export default async function BLogArticles() {
  const payload = await getPayload({ config: configPromise });
  const blog = await getBlog({ limit: 10, page: 1, payload });
  if (!blog.docs.length) {
    return <p>No blog found</p>;
  }

  return (
    <div>
      <div>
        {blog.docs.map((item) => (
          <div key={item.id}>


            <div className="">
              <h5 className="font-bold">{item.futuredate}</h5>
              <h2 className="font-bold text-lg">{item.title}</h2>
              {typeof item.image === "object" && item.image?.url && (
                <img
                  className="rounded-t-md w-full"
                  src={item.image.url}
                  alt={item.title ?? ""}
                />
              )}
              <p className="text-gray-600 pb-5">{item.subtitle}
                <Link
                  href={`/blog/${item.slug}`}
                  className="text-blue-600 font-semibold hover:underline"
                >
                  Read More →
                </Link>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}