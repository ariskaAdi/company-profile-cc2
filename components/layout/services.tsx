import React from "react";
import { Card, CardContent } from "../ui/card";
import { Bell, GraduationCap, Lightbulb, Shield, Wrench } from "lucide-react";

const Services = () => {
  return (
    <section className="py-16 ">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <Shield className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Fire Extinguishers</h3>
              <p className="text-gray-600 text-sm">LEARN MORE →</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-gray-800 rounded mx-auto mb-4 flex items-center justify-center">
                <div className="w-8 h-6 bg-gray-600 rounded"></div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Commercial Systems</h3>
              <p className="text-gray-600 text-sm">LEARN MORE →</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <Bell className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Fire Alarm Systems</h3>
              <p className="text-gray-600 text-sm">LEARN MORE →</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <Wrench className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Hood Cleaning Service
              </h3>
              <p className="text-gray-600 text-sm">LEARN MORE →</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <Lightbulb className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Exit Lighting</h3>
              <p className="text-gray-600 text-sm">LEARN MORE →</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <GraduationCap className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Fire Extinguisher Training
              </h3>
              <p className="text-gray-600 text-sm">LEARN MORE →</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;
