import { getPosts } from "@/lib/data";
import { formatDate } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { DeleteButton, EditButton } from "./button";

const BlogTable = async () => {
  const blog = await getPosts();
  if (!blog || blog.length === 0)
    return <p className="text-center mt-6 text-gray-500 text-sm">No Data</p>;

  return (
    <div className="p-4 w-full overflow-x-auto">
      {/* Table for Desktop */}
      <div className="hidden md:table w-full table-fixed border border-gray-200">
        {/* Table Head */}
        <div className="table-header-group bg-gray-100">
          <div className="table-row">
            <div className="table-cell px-4 py-3 font-bold text-gray-700 uppercase w-32">
              Image
            </div>
            <div className="table-cell px-4 py-3 font-bold text-gray-700 uppercase  md:text-center">
              Title
            </div>

            <div className="table-cell px-4 py-3 font-bold text-gray-700 uppercase md:text-center">
              Created At
            </div>
            <div className="table-cell px-4 py-3 font-bold text-gray-700 uppercase text-center">
              Action
            </div>
          </div>
        </div>

        {/* Table Body */}
        <div className="table-row-group">
          {blog.map((post) => (
            <div key={post.id} className="table-row hover:bg-gray-50">
              {/* Image */}
              <div className="table-cell px-4 py-3">
                <div className="h-20 w-32 relative">
                  <Image
                    src={post.image ?? ""}
                    alt={post.title}
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
              </div>

              {/* Title */}
              <div className="table-cell px-4 py-3 align-top break-words whitespace-normal md:pl-16 line-clamp-3">
                {post.title}
              </div>

              {/* Created At */}
              <div className="table-cell px-4 py-3 align-top md:text-center">
                {formatDate(post.createdAt.toString())}
              </div>

              {/* Action */}
              <div className="table-cell px-4 py-3 align-top text-center  gap-2">
                <div className="flex justify-center gap-4">
                  <EditButton id={post.id} />
                  <DeleteButton id={post.id} image={post.image ?? ""} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Grid for Mobile */}
      <div className="md:hidden grid gap-4">
        {blog.map((post) => (
          <div
            key={post.id}
            className="bg-white shadow rounded-md p-4 space-y-4">
            {/* Image */}
            <div className="relative h-48 w-full">
              <Image
                src={post.image ?? ""}
                alt={post.title}
                fill
                className="object-cover rounded-md"
              />
            </div>

            {/* Title */}
            <div>
              <p className="text-sm text-gray-500 font-medium">Title:</p>
              <p className="font-semibold break-words">{post.title}</p>
            </div>

            {/* Created At */}
            <div>
              <p className="text-sm text-gray-500 font-medium">Created At:</p>
              <p>{formatDate(post.createdAt.toString())}</p>
            </div>

            {/* Actions */}
            <div className="text-center flex gap-4">
              <EditButton id={post.id} />
              <DeleteButton id={post.id} image={post.image ?? ""} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogTable;
