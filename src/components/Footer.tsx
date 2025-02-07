import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full py-8 bg-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <Image
            src="/images/logo.png"
            alt="Polarizeed Logo"
            width={194}
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
          1 (800) 567 4569
        </div>
      </div>

      <div className="container mx-auto px-4 mt-6">
        <p className="text-gray-500 text-sm text-center">
          Legal Disclaimer: by submitting this form, you&apos;ll be the first to
          know about our launch and exclusive offers.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
