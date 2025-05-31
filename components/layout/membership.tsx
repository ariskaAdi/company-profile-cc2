import React from "react";

const Membership = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <p className="text-red-600 font-semibold mb-2">CERTIFICATIONS</p>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Proud member
          </h2>
          <p className="text-gray-600">
            We are proud members of fire safety organizations that help maintain
            our licensing and training. Committed to delivering excellence.
          </p>
        </div>

        <div className="flex justify-center items-center space-x-8 md:space-x-12">
          <div className="w-20 h-20 bg-gray-200 rounded-lg flex items-center justify-center">
            <span className="text-xs font-bold">NFPA</span>
          </div>
          <div className="w-20 h-20 bg-gray-200 rounded-lg flex items-center justify-center">
            <span className="text-xs font-bold">NAFED</span>
          </div>
          <div className="w-20 h-20 bg-gray-200 rounded-lg flex items-center justify-center">
            <span className="text-xs font-bold">IKECA</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Membership;
