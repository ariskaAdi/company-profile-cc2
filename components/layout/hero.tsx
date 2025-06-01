import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const Hero = () => {
  return (
    <section
      className="relative w-full h-[700px] bg-cover bg-center pt-16 "
      style={{ backgroundImage: 'url("/empty-seat.jpg")' }}>
      <div className="container mx-auto px-12 md:py-28 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center ">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6 mt-4">
              <h1 className="text-3xl md:text-3xl lg:text-6xl font-sans text-shadow-neutral-950  text-white leading-tight">
                Travel Smarter,
                <br />
                Ride with <span className="text-orange-500">Confidence</span>
                ,
                <br />
                Choose Bagong
              </h1>
              <p className="text-md text-gray-400 max-w-md">
                Reliable and comfortable intercity transport, designed for your
                convenience. Book tickets in minutes and enjoy the journey.
              </p>
            </div>

            {/* Email Signup */}
            <div className="flex flex-col sm:flex-row gap-3 max-w-md">
              <Input
                type="text"
                placeholder="Search..."
                className="flex-1 h-12 px-4 border-gray-300 focus:border-teal-500 focus:ring-teal-500 bg-orange-50 rounded-4xl"
              />
              <Button className="h-12 px-8 bg-orange-500 hover:bg-teal-700 text-white whitespace-nowrap rounded-4xl">
                Get Started
              </Button>
            </div>

            {/* Decorative Pattern */}
            <div className="hidden md:block">
              <div className="w-16 h-16 opacity-20">
                <div className="grid grid-cols-4 gap-1">
                  {Array.from({ length: 16 }).map((_, i) => (
                    <div
                      key={i}
                      className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative mt-20">
            <div className="relative z-10"></div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-amber-500 rounded-full opacity-80 z-20"></div>
            <div className="absolute top-1/4 -left-8 w-12 h-12 bg-red-400 rounded-full opacity-70"></div>
            <div className="absolute bottom-1/4 -right-8 w-20 h-20 bg-pink-400 rounded-full opacity-60"></div>

            {/* Floating Image Cards */}
            <div className="absolute top-8 right-8 w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-4 border-white shadow-lg z-20">
              <Image
                src="/hero-bagong.jpg"
                alt="bagong"
                width={64}
                height={64}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute bottom-16 left-4 w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-white shadow-lg z-20">
              <Image
                src="/hero-bagong.jpg"
                alt="bagong"
                width={80}
                height={80}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
