
import { getBlog } from "@/services/food/get-food";
import configPromise from '@payload-config';
import { getPayload } from 'payload';



export default async function  RecentPost() {
    const payload = await getPayload({ config: configPromise });
  const posts = await getBlog({ limit: 5, page: 1,payload });
  

  if (!posts.docs.length) {
    return <p>No RecentPost found</p>;
  }

  return (
    <div className="bg-[#1e40af] px-6 py-6 rounded-md">
 <h1 className="pb-3  text-white">Recent Post</h1>
      {posts.docs.map((post) => (
        <div key={post.id}>
          <p className="text-white text-left font-semibold pb-3">{post.title}</p>
        </div>
      ))}
    </div>
  );
}