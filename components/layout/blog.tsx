import React from "react";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import Link from "next/link";

const Blog = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-red-600 font-semibold mb-2">OUR BLOG</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            News & Tips
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="hover:shadow-lg transition-shadow">
            <Image
              src="/placeholder.svg?height=200&width=300"
              alt="Fire extinguisher maintenance"
              width={300}
              height={200}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                How Can I Tell if a Fire Extinguisher Needs to be Recharged?
              </h3>
              <p className="text-red-600 text-sm font-semibold">READ MORE →</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <Image
              src="/placeholder.svg?height=200&width=300"
              alt="Kitchen fire safety"
              width={300}
              height={200}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                How Can I Tell if a Fire Extinguisher Needs to be Recharged?
              </h3>
              <p className="text-red-600 text-sm font-semibold">READ MORE →</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <Image
              src="/placeholder.svg?height=200&width=300"
              alt="Fire safety training"
              width={300}
              height={200}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                How Can I Tell if a Fire Extinguisher Needs to be Recharged?
              </h3>
              <p className="text-red-600 text-sm font-semibold">READ MORE →</p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-8">
          <Link href="#" className="text-red-600 font-semibold hover:underline">
            ALL NEWS & TIPS
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;
