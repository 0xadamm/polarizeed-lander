import Image from "next/image";
import { Star } from "lucide-react";

export default function ProductDisplay() {
  return (
    <section className="py-2 md:py-3 px-4">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-6xl font-bold mb-4 md:mb-6 text-purple-800 tracking-tight">
            Explore the Benefits of Calm
            <br className="hidden md:block" />
            and Energy
          </h2>
          <div className="h-1 w-24 md:w-32 bg-gradient-to-r from-purple-600 to-yellow-400 mb-8 md:mb-12" />
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6 max-w-6xl mx-auto">
            {/* Left Column - 60% */}
            <div className="col-span-1 lg:col-span-7 space-y-4 md:space-y-6">
              {/* Fuel Your Day - Large Card */}
              <div
                className="relative overflow-hidden rounded-2xl md:rounded-3xl bg-gradient-to-br from-orange-400 to-orange-500 shadow-xl"
                style={{ height: "400px", minHeight: "400px" }}
              >
                <div className="absolute inset-0 bg-black/10" />
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bg-bento-01-yK2Fgh3SjNQVcrXtEM9HZEh8Xco9z6.png"
                  alt="Energy background"
                  fill
                  className="object-cover"
                />
                <div className="relative h-full p-6 md:p-12 flex items-center">
                  <div className="grid grid-cols-[1fr,120px] md:grid-cols-[1fr,200px] gap-4 md:gap-8 items-center">
                    <div className="space-y-8 md:space-y-16">
                      <h3 className="text-3xl md:text-5xl text-white font-bold tracking-tight">
                        Fuel Your Day
                        <div className="h-0.5 w-12 bg-white mt-3" />
                      </h3>
                      <div className="space-y-3 md:space-y-4">
                        <Star className="text-white w-6 h-6 md:w-8 md:h-8" />
                        <p className="text-white text-base md:text-lg leading-relaxed">
                          Boosts energy, enhances focus, and keeps you active
                          throughout the day.
                        </p>
                      </div>
                    </div>
                    <div className="w-[120px] h-[200px] md:w-[200px] md:h-[300px] bg-white/10 backdrop-blur rounded-2xl shadow-lg transform transition-transform hover:scale-105" />
                  </div>
                </div>
              </div>

              {/* Elevate Your Energy - Small Card */}
              <div
                className="relative overflow-hidden rounded-2xl md:rounded-3xl bg-gradient-to-br from-indigo-500 to-indigo-600 shadow-xl"
                style={{ height: "280px", minHeight: "280px" }}
              >
                <div className="absolute inset-0 bg-black/10" />
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bg-bento-03-IP0o3HMYdzZNvkBoiEzOcOxDbueFEQ.png"
                  alt="Elevate background"
                  fill
                  className="object-cover"
                />
                <div className="relative h-full p-6 md:p-12 flex items-center">
                  <div className="grid grid-cols-[1fr,100px] md:grid-cols-[1fr,160px] gap-4 md:gap-8 items-center">
                    <div className="space-y-4 md:space-y-6">
                      <h3 className="text-2xl md:text-4xl text-white font-bold tracking-tight">
                        Elevate Your Energy
                        <div className="h-0.5 w-12 bg-white mt-3" />
                      </h3>
                      <div className="space-y-3 md:space-y-4">
                        <Star className="text-white w-6 h-6 md:w-8 md:h-8" />
                        <p className="text-white text-sm md:text-base leading-relaxed">
                          Enhances alertness and focus with a fast-acting Delta
                          8 experience
                        </p>
                      </div>
                    </div>
                    <div className="w-[100px] h-[160px] md:w-[160px] md:h-[240px] bg-white/10 backdrop-blur rounded-2xl shadow-lg transform transition-transform hover:scale-105" />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - 40% */}
            <div className="col-span-1 lg:col-span-5 space-y-4 md:space-y-6">
              {/* Instant Relaxation - Small Card */}
              <div
                className="relative overflow-hidden rounded-2xl md:rounded-3xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-xl"
                style={{ height: "280px", minHeight: "280px" }}
              >
                <div className="absolute inset-0 bg-black/10" />
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bg-bento-02-0G8owuxHUVZID7IqN3mZQpDXMVDCHt.png"
                  alt="Relaxation background"
                  fill
                  className="object-cover"
                />
                {/* Mobile Layout */}
                <div className="relative h-full p-6 flex items-center md:hidden">
                  <div className="grid grid-cols-[1fr,100px] gap-4 items-center">
                    <div className="space-y-4">
                      <h3 className="text-2xl text-white font-bold tracking-tight">
                        Instant Relaxation
                        <div className="h-0.5 w-12 bg-white mt-3" />
                      </h3>
                      <div className="space-y-3">
                        <Star className="text-white w-6 h-6" />
                        <p className="text-white text-sm leading-relaxed">
                          Provides a quick, smooth, and effective way to
                          experience Delta 8 relaxation.
                        </p>
                      </div>
                    </div>
                    <div className="w-[100px] h-[140px] bg-white/10 backdrop-blur rounded-2xl shadow-lg transform transition-transform hover:scale-105" />
                  </div>
                </div>

                {/* Desktop Layout */}
                <div className="relative h-full p-10 flex-col justify-between hidden md:flex">
                  <h3 className="text-4xl text-white font-bold tracking-tight">
                    Instant Relaxation
                    <div className="h-0.5 w-12 bg-white mt-3" />
                  </h3>
                  <div className="grid grid-cols-[1fr,120px] gap-8 items-center">
                    <div className="space-y-4">
                      <Star className="text-white w-8 h-8" />
                      <p className="text-white text-base leading-relaxed">
                        Provides a quick, smooth, and effective way to
                        experience Delta 8 relaxation.
                      </p>
                    </div>
                    <div className="w-[120px] h-[160px] bg-white/10 backdrop-blur rounded-2xl shadow-lg transform transition-transform hover:scale-105" />
                  </div>
                </div>
              </div>

              {/* Unwind and Relax - Large Card */}
              <div className="relative overflow-hidden rounded-2xl md:rounded-3xl bg-gradient-to-br from-purple-500 to-purple-600 shadow-xl h-[280px] md:h-[400px]">
                <div className="absolute inset-0 bg-black/10" />
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bg-bento-04-kaHNWnimuCsPWFzQ6uZmFUyh7XQmTG.png"
                  alt="Unwind background"
                  fill
                  className="object-cover"
                />
                {/* Mobile Layout */}
                <div className="relative h-full p-6 flex items-center md:hidden">
                  <div className="grid grid-cols-[1fr,100px] gap-4 items-center">
                    <div className="space-y-4">
                      <h3 className="text-2xl text-white font-bold tracking-tight">
                        Unwind and Relax
                        <div className="h-0.5 w-12 bg-white mt-3" />
                      </h3>
                      <div className="space-y-3">
                        <Star className="text-white w-6 h-6" />
                        <p className="text-white text-sm leading-relaxed">
                          Promotes relaxation, reduces stress, and encourages a
                          peaceful state of mind.
                        </p>
                      </div>
                    </div>
                    <div className="w-[100px] h-[140px] bg-white/10 backdrop-blur rounded-2xl shadow-lg transform transition-transform hover:scale-105" />
                  </div>
                </div>

                {/* Desktop Layout */}
                <div className="relative h-full p-10 flex-col justify-between hidden md:flex">
                  <div className="mb-8">
                    <h3 className="text-4xl text-white font-bold tracking-tight">
                      Unwind and Relax
                      <div className="h-0.5 w-12 bg-white mt-3" />
                    </h3>
                  </div>

                  <div className="grid grid-cols-[1fr,140px] gap-8">
                    <div className="space-y-6">
                      <Star className="text-white w-8 h-8" />
                      <p className="text-white text-base leading-relaxed">
                        Promotes relaxation, reduces stress, and encourages a
                        peaceful state of mind.
                      </p>
                    </div>
                    <div className="w-[140px] h-[200px] bg-white/10 backdrop-blur rounded-2xl shadow-lg transform transition-transform hover:scale-105" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
