"use client";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaYoutube,
} from "react-icons/fa";

interface QuickLinkItem {
  label: string;
  href: string;
}

const quicklink: QuickLinkItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Expertise", href: "/expertise" },
  { label: "Contact Us", href: "/contact-us" },
];
// const resources: QuickLinkItem[] = [
//   { label: "Media & Blogs", href: "/media-and-blogs" },
//   { label: "FAQ", href: "/faq" },
//   { label: "Privacy Policy", href: "/privacy" },
// ];

const socialLink = [
  {
    icon: FaFacebookF,
    href: "https://www.facebook.com/wsclinicindia/",
  },
  {
    icon: FaYoutube,
    href: "https://www.youtube.com/@WsClinic",
  },
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/wsclinic/",
  },
  {
    icon: FaLinkedinIn,
    href: "https://www.linkedin.com/company/ws-clinic/",
  },
];

const Footer = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // logic
  };

  return (
    <footer
      className="w-full bg-gray-900 text-gray-200 border-t border-gray-800 shadow-2xl"
      aria-label="Site Footer"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-0 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12">
        {/* Newsletter */}
        <div className="lg:col-span-2 max-w-md">
          <h4 className="text-xl font-bold uppercase tracking-wide mb-6">
            Health Insights
          </h4>
          <p className="text-sm mt-3 text-gray-400 leading-relaxed">
            Subscribe to our newsletter for exclusive health tips, wellness
            trends, and special offers.
          </p>
          <form
            onSubmit={handleSubmit}
            className="mt-6 w-full flex flex-col md:flex-row items-stretch gap-4"
          >
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="flex-1 px-2.5 py-2 lg:px-5 lg:py-3.5 rounded-lg border border-[#47a8a8] bg-gray-800 text-white placeholder-[#47a8a8]/50 focus:outline-none focus:ring-2 focus:ring-[#47a8a8]/60 focus:border-transparent transition-all"
            />
            <button
              type="submit"
              className="whitespace-nowrap px-2.5 py-2 lg:px-5 lg:py-3.5 rounded-lg bg-[#47a8a8] text-white text-sm lg:text-base font-semibold shadow-md hover:shadow-xl transition-all duration-300"
            >
              Subscribe Now
            </button>
          </form>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold uppercase tracking-wide mb-6">
            Quick Links
          </h4>

          <ul className="space-y-4">
            {quicklink.map((item, i) => (
              <li key={i}>
                <Link
                  href={item.href}
                  className="group flex items-center gap-3 hover:text-[#47a8a8] transition-colors"
                >
                  <span className="text-gray-300 group-hover:text-[#47a8a8] text-sm font-medium">
                    {item.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources */}
        {/* <div>
          <h4 className="text-lg font-semibold uppercase tracking-wide mb-6">
            Resources
          </h4>
          <ul className="space-y-4">
            {resources.map((item, i) => (
              <li key={i}>
                <Link
                  href={item.href}
                  className="group flex items-center gap-3 hover:text-[#47a8a8] transition-colors"
                >
                  <span className="text-gray-300 group-hover:text-[#47a8a8] text-sm font-medium">
                    {item.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div> */}

        {/* Contact */}
        <address className="not-italic text-sm space-y-5">
          <h4 className="text-lg font-semibold uppercase tracking-wide mb-6">
            Contact
          </h4>
          <div className="flex items-start gap-4">
            <div className="p-2 rounded-md bg-[#47a8a8] hover:bg-[#47a8a8]/80 text-white transition-colors duration-300 shrink-0">
              <FaMapMarkerAlt size={14} />
            </div>
            <Link
              href="https://maps.app.goo.gl/example"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-[#47a8a8] transition-colors"
            >
              WS Clinic, I-102, Kirti Nagar, Delhi, 110015
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <div className="p-2 rounded-md bg-[#47a8a8] hover:bg-[#47a8a8]/80 text-white transition-colors duration-300 shrink-0">
              <FaPhoneAlt size={14} />
            </div>
            <Link
              href="tel:+91 88000-07740"
              className="text-gray-300 hover:text-[#47a8a8] transition-colors"
            >
              (+91) 88000-07740
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <div className="p-2 rounded-md bg-[#47a8a8] hover:bg-[#47a8a8]/80 text-white transition-colors duration-300 shrink-0">
              <FaEnvelope size={14} />
            </div>
            <Link
              href="mailto:info@wsclinic.org"
              className="text-gray-300 hover:text-[#47a8a8] transition-colors"
            >
              info@wsclinic.org
            </Link>
          </div>
        </address>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#47a8a8]/50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-0 py-6 flex flex-col sm:flex-row justify-between items-center text-sm">
          <p className="text-gray-400">
            © 2025 Dr. Upinder Kaur. Professional Mental Health Services.
          </p>
          <div className="flex gap-4 mt-4 sm:mt-0">
            {socialLink.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Social Link"
                className="p-1.5 rounded-md bg-[#47a8a8] hover:bg-[#47a8a8]/80 text-white transition-colors duration-300"
              >
                <item.icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
