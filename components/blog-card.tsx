import Link from "next/link";
import { cn } from "@/lib/utils";
import { PrismicNextImage } from "@prismicio/next";
import { Content } from "@prismicio/client";

interface BlogCardProps {
  className?: string;
  blog: Content.BlogDocument;
}

export default function BlogCard({ className, blog }: BlogCardProps) {
  return (
    <Link
      href={`/blogs/${blog.uid}`}
      className={cn(
        "block bg-white rounded-lg border border-gray-200 hover:border-gray-300 transition-all",
        className
      )}
    >
      <div className="relative h-48 w-full">
        <PrismicNextImage
          field={blog.data.featured_image}
          fill
          className="object-cover rounded-t-lg"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div className="p-4">
        <div className="flex items-center gap-2">
          {blog.tags &&
            blog.tags.map((tag, index) => {
              return (
                <div key={index}>
                  <span className="inline-block px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded mb-2">
                    {tag}
                  </span>
                </div>
              );
            })}
        </div>

        <h3 className="text-gray-900 mb-2">{blog.data.title}</h3>

        <span className="text-xs text-gray-600 line-clamp-3">
          {blog.data.excerpt}
        </span>
      </div>
    </Link>
  );
}
