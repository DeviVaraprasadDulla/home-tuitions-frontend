import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../assets/logos/homeTutionsLogo.png";

export default function Footer() {
  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 mt-24 relative overflow-hidden">
      {/* subtle gradient glow */}

      <div className="absolute inset-0 flex justify-center -z-10 opacity-20">
        <div className="w-[900px] h-[400px] bg-gradient-to-r from-blue-500 to-purple-500 blur-[160px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col items-start gap-3">
              <img
                src={logo}
                alt="Home Tuitions Logo"
                className="h-10 w-auto"
              />

              <h2 className="text-xl font-semibold text-white tracking-wide">
                Home Tuition
              </h2>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-slate-400 max-w-sm">
              Personalized home tuition designed to build confidence, clarity,
              and academic excellence for every child.
            </p>
          </motion.div>

          {/* Quick Links */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Quick Links
            </h3>

            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <Link
                  to="/"
                  onClick={handleScrollTop}
                  className="hover:text-amber-400 transition"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  onClick={handleScrollTop}
                  className="hover:text-amber-400 transition"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/"
                  onClick={handleScrollTop}
                  className="hover:text-amber-400 transition"
                >
                  Find a Tutor
                </Link>
              </li>

              <li>
                <Link
                  to="/"
                  onClick={handleScrollTop}
                  className="hover:text-amber-400 transition"
                >
                  Become a Tutor
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Contact Us
            </h3>

            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex items-center gap-3 hover:text-white transition">
                <Phone className="w-4 h-4 text-amber-400" />
                +91 82470 54254
              </li>

              <li className="flex items-center gap-3 hover:text-white transition">
                <Mail className="w-4 h-4 text-amber-400" />
                support@hometuitions.com
              </li>

              <li className="flex items-center gap-3 hover:text-white transition">
                <MapPin className="w-4 h-4 text-amber-400" />
                Hyderabad, Telangana
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}

        <div className="mt-14 border-t border-slate-700 pt-6 text-center text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} Home Tuitions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
