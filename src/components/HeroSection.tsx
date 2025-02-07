import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hero-bg-qbrB0BnpvwciHDPs6j1ApBZx8k6aEX.png"
          alt="Background"
          width={1920}
          height={900}
          className="object-cover w-full h-full"
          priority
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="container mx-auto px-4 py-6 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-AnxWribVe2cyTC9knLPcAhh8MB2CDv.png"
              alt="Polarizeed Logo"
              width={180}
              height={40}
              className="h-10 w-auto"
            />
          </div>
          <Link
            href="tel:18005674569"
            className="text-white text-lg hover:opacity-90 transition-opacity"
          >
            1 (800) 567 4569
          </Link>
        </nav>

        {/* Main Content */}
        <main className="container mx-auto px-4 pt-12 pb-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-6">
              <h1 className="text-white text-5xl md:text-7xl font-bold leading-tight">
                Experience
                <br />
                Perfect Balance
              </h1>
              <p className="text-white text-xl md:text-2xl leading-relaxed max-w-2xl">
                Discover our revolutionary Delta-8 oral strips—designed for
                fast-acting relief, mental clarity, and a smooth, uplifting
                experience to keep you focused and stress-free throughout your
                day.
              </p>
              <button className="bg-purple-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-purple-700 transition-colors">
                LEARN MORE
              </button>
            </div>

            {/* Right Column */}
            <div className="relative">
              {/* Blur effect background - now as a sibling */}
              <div className="hidden md:block absolute right-[-300px] top-1/2 -translate-y-1/2 w-[140%] h-[120%] bg-white/20 rounded-[40px] backdrop-blur-xl" />

              {/* Product Cards Container - separate from blur */}
              <div className="relative z-10 grid sm:grid-cols-2 gap-6">
                {/* Energy Variant */}
                <div className="relative transform transition-transform hover:scale-105">
                  <Image
                    src="/images/hero/hero-image-1.png"
                    alt="Energy Strip Product"
                    width={400}
                    height={500}
                    className="w-full h-auto rounded-2xl"
                  />
                </div>

                {/* Calm Variant */}
                <div className="relative transform transition-transform hover:scale-105">
                  <Image
                    src="/images/hero/hero-image-2.png"
                    alt="Calm Strip Product"
                    width={400}
                    height={500}
                    className="w-full h-auto rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
