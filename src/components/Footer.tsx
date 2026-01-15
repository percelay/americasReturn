import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/what-we-do", label: "What We Do" },
  { href: "/how-you-gain", label: "How You Gain" },
  { href: "/who-agrees", label: "Who Agrees" },
  { href: "/about", label: "About" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold">America&apos;s Return</h3>
            <p className="mt-2 text-sm text-gray-300">
              Consulting and training for solution selling excellence.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gold">
              Navigation
            </h4>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gold">
              Contact
            </h4>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-2 text-sm text-gray-300">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0" />
                <span>
                  1600 Shattuck Avenue, Suite 214
                  <br />
                  Berkeley, CA 94709
                </span>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-300">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a href="tel:800-472-5373" className="hover:text-white">
                  800.472.5373
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-300">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a
                  href="mailto:info@americasreturn.com"
                  className="hover:text-white"
                >
                  info@americasreturn.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-navy-light pt-8 text-center text-sm text-gray-400">
          © 2025 America&apos;s Return Inc.
        </div>
      </div>
    </footer>
  );
}
