
import RecentPost from "./recent-posts";
import BlogArticles from "./blog-articles";
import SocialMedia from "./social-media";

export default function BlogsPage() {
    return (
        <div className="max-w-300 mx-auto">
            <div className="flex justify-between flex-wrap md:flex-nowrap gap-10 p-5">
                <div className=" md:w-[75%] w-full">
                    <BlogArticles />
                </div>
                <div className="space-y-4 md:w-[25%] w-full">
                    <RecentPost />
                    <SocialMedia/>
                </div>
            </div>
        </div>
    );
}