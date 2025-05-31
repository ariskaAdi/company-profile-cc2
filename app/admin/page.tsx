import BlogTable from "@/components/admin/blog-table";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
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
            <span>Dashboard</span>
          </div>
        </div>
      </div>
      {/* dashboard admin */}
      {/* Main section */}
      <div className="md:p-12">
        {/* Header section: title + button */}
        <div className="mb-4 flex items-center justify-between p-4">
          <h1 className="text-2xl font-semibold">Blog List</h1>
          <Button className="w-40" asChild>
            <Link href="/admin/create">
              Create Blog
              <Plus className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>

        {/* Table section */}
        <Suspense
          fallback={
            <div className="flex justify-center items-center py-10 text-gray-500 text-md animate-pulse">
              Loading Data...
            </div>
          }>
          <BlogTable />
        </Suspense>
      </div>
    </main>
  );
};

export default page;
