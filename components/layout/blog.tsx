import React, { Suspense } from "react";
import GetBlogCard from "./get-blog-card";

const Blog = () => {
  return (
    <section className="py-16 ">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-red-600 font-semibold mb-2">OUR BLOG</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            News & Tips
          </h2>
        </div>
        <Suspense
          fallback={
            <div className="flex justify-center items-center py-10 text-gray-500 text-md animate-pulse">
              Loading Data...
            </div>
          }>
          <GetBlogCard />
        </Suspense>
      </div>
    </section>
  );
};

export default Blog;
