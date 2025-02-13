import React from "react";

const NanoStripsIntro = () => {
  return (
    <section className="py-2 md:py-3 px-4">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl md:rounded-3xl shadow-xl">
            {/* Background Image with Blur Overlay */}
            <div
              className="absolute inset-0 z-0"
              style={{
                backgroundImage:
                  "url('/images/nanostrips-intro/bg-nanostrips-intro.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div className="absolute inset-0 z-0 backdrop-blur-[2px] bg-black/10" />

            {/* Content Container */}
            <div className="relative z-10 p-6 md:p-12">
              {/* Title with gradient underline */}
              <div className="mb-6">
                <h2 className="text-5xl font-bold text-white mb-2">
                  Introducing Nano Strips:
                  <br />
                  Wellness Beyond Supplements
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-cyan-200" />
              </div>

              {/* Subtitle */}
              <h3 className="text-3xl text-white mb-12 max-w-3xl">
                Revolutionizing nutrition with advanced buccal
                <br />
                delivery for optimal absorption.
              </h3>

              {/* Content with bolt icons */}
              <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-4xl">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-cyan-400 flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-black"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                  </div>
                  <p className="text-white text-lg">
                    Unlike traditional supplements that degrade in digestion,
                    Nano Strips use nano-encapsulation to deliver nutrients
                    directly into the bloodstream for immediate effects.
                  </p>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-cyan-400 flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-black"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                  </div>
                  <p className="text-white text-lg">
                    Experience over 90% absorption rate with our advanced
                    sublingual delivery system, dissolving in under 60 seconds
                    for rapid and precise dosing without water.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NanoStripsIntro;
