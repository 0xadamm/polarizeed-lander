import Image from "next/image";
import { Star } from "lucide-react";

export default function ProductDisplay() {
  return (
    <section className="py-12 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold mb-2 text-purple-800 tracking-tight">
          Explore the Benefits of Calm
          <br />
          and Energy
        </h2>
        <div className="h-1 w-32 bg-gradient-to-r from-purple-600 to-yellow-400 mb-12" />

        <div className="grid grid-cols-12 gap-6 max-w-6xl mx-auto">
          {/* Left Column - 60% */}
          <div className="col-span-12 lg:col-span-7 space-y-6">
            {/* Fuel Your Day - Large Card */}
            <div
              className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-orange-400 to-orange-500 shadow-xl"
              style={{ height: "460px" }}
            >
              <div className="absolute inset-0 bg-black/10" />
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bg-bento-01-yK2Fgh3SjNQVcrXtEM9HZEh8Xco9z6.png"
                alt="Energy background"
                fill
                className="object-cover"
              />
              <div className="relative h-full p-8 md:p-12">
                <div className="grid grid-cols-[1fr,160px] gap-8 items-start">
                  <div className="space-y-4">
                    <h3 className="text-white text-4xl md:text-5xl font-bold tracking-tight">
                      Fuel Your Day
                      <div className="h-0.5 w-12 bg-white mt-3" />
                    </h3>
                    <div className="flex items-center gap-2">
                      <Star className="text-white w-8 h-8" />
                      <p className="text-white text-lg leading-relaxed">
                        Boosts energy, enhances focus, and keeps you active
                        throughout the day.
                      </p>
                    </div>
                  </div>
                  <div className="w-[160px] h-[240px] bg-white/10 backdrop-blur rounded-2xl shadow-lg transform transition-transform hover:scale-105" />
                </div>
              </div>
            </div>

            {/* Elevate Your Energy - Small Card */}
            <div
              className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-500 to-indigo-600 shadow-xl"
              style={{ height: "300px" }}
            >
              <div className="absolute inset-0 bg-black/10" />
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bg-bento-03-IP0o3HMYdzZNvkBoiEzOcOxDbueFEQ.png"
                alt="Elevate background"
                fill
                className="object-cover"
              />
              <div className="relative h-full p-8 md:p-12">
                <div className="grid grid-cols-[1fr,160px] gap-8 h-full items-center">
                  <div className="space-y-6">
                    <h3 className="text-white text-3xl md:text-4xl font-bold tracking-tight">
                      Elevate Your Energy
                      <div className="h-0.5 w-12 bg-white mt-3" />
                    </h3>
                    <div className="space-y-4">
                      <Star className="text-white w-8 h-8" />
                      <p className="text-white leading-relaxed">
                        Enhances alertness and focus with a fast-acting Delta 8
                        experience
                      </p>
                    </div>
                  </div>
                  <div className="w-[160px] h-[240px] bg-white/10 backdrop-blur rounded-2xl shadow-lg transform transition-transform hover:scale-105" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - 40% */}
          <div className="col-span-12 lg:col-span-5 space-y-6">
            {/* Instant Relaxation - Small Card */}
            <div
              className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-xl"
              style={{ height: "300px" }}
            >
              <div className="absolute inset-0 bg-black/10" />
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bg-bento-02-0G8owuxHUVZID7IqN3mZQpDXMVDCHt.png"
                alt="Relaxation background"
                fill
                className="object-cover"
              />
              <div className="relative h-full p-8 md:p-12">
                <div className="grid grid-cols-[1fr,160px] gap-8 h-full items-center">
                  <div className="space-y-6">
                    <h3 className="text-white text-3xl md:text-4xl font-bold tracking-tight">
                      Instant Relaxation
                      <div className="h-0.5 w-12 bg-white mt-3" />
                    </h3>
                    <div className="space-y-4">
                      <Star className="text-white w-8 h-8" />
                      <p className="text-white leading-relaxed">
                        Provides a quick, smooth, and effective way to
                        experience Delta 8 relaxation.
                      </p>
                    </div>
                  </div>
                  <div className="w-[160px] h-[240px] bg-white/10 backdrop-blur rounded-2xl shadow-lg transform transition-transform hover:scale-105" />
                </div>
              </div>
            </div>

            {/* Unwind and Relax - Large Card */}
            <div
              className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-500 to-purple-600 shadow-xl"
              style={{ height: "460px" }}
            >
              <div className="absolute inset-0 bg-black/10" />
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bg-bento-04-kaHNWnimuCsPWFzQ6uZmFUyh7XQmTG.png"
                alt="Unwind background"
                fill
                className="object-cover"
              />
              <div className="relative h-full p-8 md:p-12">
                <div className="grid grid-cols-[1fr,160px] gap-8 h-full items-center">
                  <div className="space-y-6">
                    <h3 className="text-white text-3xl md:text-4xl font-bold tracking-tight">
                      Unwind and Relax
                      <div className="h-0.5 w-12 bg-white mt-3" />
                    </h3>
                    <div className="space-y-4">
                      <Star className="text-white w-8 h-8" />
                      <p className="text-white leading-relaxed">
                        Promotes relaxation, reduces stress, and encourages a
                        peaceful state of mind.
                      </p>
                    </div>
                  </div>
                  <div className="w-[160px] h-[240px] bg-white/10 backdrop-blur rounded-2xl shadow-lg transform transition-transform hover:scale-105" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
