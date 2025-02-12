import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <section className="py-2 md:py-3 px-4 bg-black">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-AnxWribVe2cyTC9knLPcAhh8MB2CDv.png"
                alt="Polarizeed Logo"
                width={180}
                height={40}
                className="h-10 w-auto"
              />
            </div>

            <div className="flex items-center gap-6">
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/images/fb.png"
                  alt="Facebook"
                  width={40}
                  height={40}
                  className="h-10 w-10"
                />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/images/ig.png"
                  alt="Instagram"
                  width={40}
                  height={40}
                  className="h-10 w-10"
                />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/images/x.png"
                  alt="Twitter"
                  width={40}
                  height={40}
                  className="h-10 w-10"
                />
              </Link>
            </div>

            <div className="text-[#E91E63] text-xl font-medium mt-4 md:mt-0">
              1 (888) 585 NANO
            </div>
          </div>

          <div className="mt-6">
            <p className="text-gray-400 text-sm text-center">
              Legal Disclaimer: by submitting this form, you&apos;ll be the
              first to know about our launch and exclusive offers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
