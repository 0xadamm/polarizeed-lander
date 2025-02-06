import React from "react";

const PolarizationService = () => {
  return (
    <section className="py-6 md:py-12 px-4">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl md:rounded-3xl shadow-xl">
            {/* Background Image */}
            <div
              className="absolute inset-0 z-0"
              style={{
                backgroundImage:
                  "url('/images/polarization-service/bg-polarization-service.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />

            {/* Content Container */}
            <div className="relative z-10 p-6 md:p-12">
              {/* Title with gradient underline */}
              <div className="mb-6">
                <h2 className="text-5xl font-bold text-white mb-2">
                  Polarization: More Than a Product
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-yellow-400" />
              </div>

              {/* Subtitle */}
              <h3 className="text-3xl text-white mb-12 max-w-3xl">
                Providing Revolutionary Delivery Solutions for Your Needs.
              </h3>

              {/* Content with checkmark */}
              <div className="flex items-start space-x-4 mb-12 max-w-3xl">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-black"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
                <p className="text-white text-lg">
                  We offer our advanced polarization technology as a service,
                  enabling businesses to enhance the bioavailability and
                  efficacy of their products. Partner with us to revolutionize
                  delivery mechanisms and create unparalleled user experiences.
                </p>
              </div>

              {/* CTA Button */}
              <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-colors duration-200">
                LEARN MORE ABOUT OUR SERVICES
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PolarizationService;
