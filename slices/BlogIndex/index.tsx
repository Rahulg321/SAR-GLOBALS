import { FC, Suspense } from "react";
import { Content, isFilled } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { createClient } from "@/prismicio";
import BlogCardSkeleton from "@/components/skeletons/blog-card-skeleton";
import BlogCard from "@/components/blog-card";
import AnimatedHeading from "@/components/animated-heading";

export type BlogIndexProps = SliceComponentProps<Content.BlogIndexSlice>;

const BlogIndex: FC<BlogIndexProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="block-space big-container"
    >
      <div>
        {isFilled.keyText(slice.primary.heading) && (
          <h2>{slice.primary.heading}</h2>
        )}
      </div>
      <div className="mt-10">
        <Suspense
          fallback={
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              <BlogCardSkeleton />
              <BlogCardSkeleton />
              <BlogCardSkeleton />
              <BlogCardSkeleton />
            </div>
          }
        >
          <GetBlogs />
        </Suspense>
      </div>
    </section>
  );
};

export default BlogIndex;

async function GetBlogs() {
  const client = createClient();
  const blogs = await client.getAllByType("blog");
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {blogs.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  );
}
