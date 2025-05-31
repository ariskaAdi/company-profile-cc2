import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

const Systems = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-orange-600 font-semibold mb-2">OUR FOCUS</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Fire <span className="text-orange-600">Systems</span> &<br />
              Kitchen <span className="text-orange-600">Exhausts</span>
            </h2>
            <p className="text-gray-600 mb-6">
              Fire Protection Equipment Co. provides fire safety services and
              equipment for commercial businesses including retail stores,
              restaurants, and warehouses across the metro Minneapolis, St.
              Paul, and surrounding areas. We provide fire extinguisher sales,
              service, inspection and training. Our technicians are licensed and
              certified to service all types of fire safety equipment. We also
              provide commercial kitchen exhaust cleaning services.
            </p>
            <p className="text-gray-600 mb-8">
              From fire safety office and protection services.
            </p>
            <div className="flex space-x-4">
              <Button className="bg-red-600 hover:bg-red-700 text-white">
                REQUEST SERVICE
              </Button>
              <Button variant="outline" className="border-gray-300">
                LEARN MORE
              </Button>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/hero-bagong.jpg"
              alt="Technician working on fire equipment"
              width={500}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Systems;
