import CreateBlog from "@/components/admin/create-blog";
import { Metadata } from "next";
import React, { Suspense } from "react";

export const metadata: Metadata = {
  title: "Dashboard ",
};
const page = () => {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <div
        className="relative h-[250px] bg-cover bg-center"
        style={{
          backgroundImage: "url(/empty-seat.jpg)",
        }}>
        <div className="absolute inset-0 bg-black/50"></div>
        {/* <Header /> */}
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center z-10">
          <div className="flex items-center text-white/80 text-sm">
            <p className="hover:text-white">Admin</p>
            <span className="mx-2">/</span>
            <span>Create Blog</span>
          </div>
        </div>
      </div>
      {/* dashboard admin */}
      <Suspense
        fallback={
          <div className="flex justify-center items-center py-10 text-gray-500 text-md animate-pulse">
            Loading Data...
          </div>
        }>
        <div className="md:p-12 p-6 bg-gray-50">
          <CreateBlog />
        </div>
      </Suspense>
    </main>
  );
};

export default page;
