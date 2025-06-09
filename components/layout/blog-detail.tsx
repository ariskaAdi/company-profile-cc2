import { getPostDetailsById } from "@/lib/data";
import { formatDate } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import React from "react";

const BlogDetail = async ({ postId }: { postId: string }) => {
  const post = await getPostDetailsById(postId);
  if (!post || !post.id) return notFound();

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Image */}
      <div className="mb-12">
        <Image
          src={post.image ?? ""}
          alt={post.title}
          width={800}
          height={400}
          className="w-full h-[400px] object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Article Content */}
      <article className="prose prose-lg max-w-none">
        {/* Category */}
        <div className="mb-4">
          <span className="text-sm font-medium text-gray-600 tracking-wider uppercase">
            NEWS
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
          {post.title}
        </h1>

        {/* Metadata: Date & Author */}
        <div className="flex justify-between text-sm text-gray-500 mb-8">
          <p>{formatDate(post.createdAt.toString())}</p>
        </div>

        {/* Markdown Content */}
        <div className="prose prose-lg text-gray-700">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>

        {/* Back to News Link */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link
            href="/blog"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to all News
          </Link>
        </div>
      </article>
    </main>
  );
};

export default BlogDetail;
