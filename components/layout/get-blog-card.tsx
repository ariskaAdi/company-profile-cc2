import { getPosts } from "@/lib/data";
import React from "react";
import BlogCardSection from "./blog-card-section";

const GetBlogCard = async () => {
  const blog = await getPosts();
  if (!blog || blog.length === 0) return <p></p>;
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {blog.map((post) => (
        <BlogCardSection key={post.id} post={post} />
      ))}
    </div>
  );
};

export default GetBlogCard;
