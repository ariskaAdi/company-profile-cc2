import { notFound } from "next/navigation";
import React from "react";
import EditForm from "./edit-form";
import { getPostsById } from "@/lib/data";

const EditPost = async ({ postId }: { postId: string }) => {
  const post = await getPostsById(postId);
  if (!post || !post.id) return notFound(); // or return a default value
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Edit Blog</h1>
      <EditForm post={post} />
    </div>
  );
};

export default EditPost;
