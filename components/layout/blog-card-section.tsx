import Link from "next/link";
import React from "react";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import { Post } from "@/types/post";

const BlogCardSection = ({ post }: { post: Post }) => {
  return (
    <div className="w-full">
      <Card className="hover:shadow-lg transition-shadow overflow-hidden rounded-lg p-0 ">
        <Link href={`/blog/${post.id}`} className="block">
          <Image
            src={post.image ?? "/placeholder.jpg"}
            alt={post.title}
            width={600}
            height={300}
            className="w-full h-64 object-cover"
            priority
          />
        </Link>
        <CardContent className="p-4">
          <h3 className="text-lg font-semibold mb-2 line-clamp-1">
            {post.title}
          </h3>
          <Link
            href={`/blog/${post.id}`}
            className="text-sm font-semibold text-red-600 hover:underline">
            READ MORE →
          </Link>
        </CardContent>
      </Card>
    </div>
  );
};

export default BlogCardSection;
