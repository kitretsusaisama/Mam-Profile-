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
  { label: "Blog", href: "/blogs" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact Us", href: "/contact-us" },
];

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
export default function Footer() {
  return (
    <footer className="bg-[#244444] text-white py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-sm">
        {/* Left Info */}
        <div>
          <div className="text-2xl font-serif font-medium mb-4">Dr <span className="text-[#e7b680]">Upinder Kaur</span></div>
          <p className="mb-2 leading-relaxed">
            WS Clinic, I-102, Kirti Nagar,<br /> Delhi, 110015
          </p>
          <p className="text-[#e7b680] text-lg mt-6 font-medium">(+91) 88000-07740</p>
          <p className="mt-1 text-white/90">upinder@wsclinic.org</p>
        </div>

        {/* Pages */}
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {quicklink.map((item, idx) => (
              <li key={idx}>
                <Link href={item.href} className="text-gray-300 hover:text-[#47a8a8] transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <address className="not-italic text-sm space-y-5">
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <div className="flex items-start gap-4 max-w-[240px]">
              <div className="p-2 rounded-md bg-white text-[#244444] transition-colors duration-300 shrink-0">
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
              <div className="p-2 rounded-md bg-white text-[#244444] transition-colors duration-300 shrink-0">
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
              <div className="p-2 rounded-md bg-white text-[#244444] transition-colors duration-300 shrink-0">
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

        {/* Newsletter & Socials */}
        <div>
          <h4 className="text-white font-semibold mb-4">Subscribe to Our Newsletter</h4>
          <div className="flex mb-6">
            <input
              type="email"
              placeholder="Your email...*"
              className="w-full px-4 py-2 rounded-l-md bg-[#244444] border border-white/30 text-white placeholder-white/70 focus:outline-none"
            />
            <button className="bg-[#e7b680] text-[#244444] px-4 py-2 rounded-r-md font-semibold">
              Subscribe
            </button>
          </div>
          <h4 className="text-white font-semibold mb-2">Follow Us</h4>
          <div className="flex items-center gap-3">
            {socialLink.map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white text-[#244444] flex items-center justify-center"
              >
                <item.icon />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <p className="text-center text-white/70 text-sm mt-5 border-t border-white/10 pt-10">
        © 2025 Dr. Upinder Kaur. Professional Mental Health Services.
      </p>
    </footer>
  );
}