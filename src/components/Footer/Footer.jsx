import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";
import { Button } from "../ui/button";
import { Phone } from "lucide-react";

export default function Footer() {
  const contacts = ["Kungsgatan 9, Stockholm", "Riverbank House, London"];

  const socialLinks = [
    { name: "Instagram", path: "/instagram" },
    { name: "Linkedin", path: "/linkedin" },
  ];

  return (
    <footer className="bg-[#232222] text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div>
            <h3 className="text-xl font-medium mb-6">Contact</h3>
            <div className="space-y-2 text-[#bdbdbd]">
              {contacts.map((address, index) => (
                <p key={index}>{address}</p>
              ))}
              <p className="mt-4">ai@valkiv.se</p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-6">Follow us</h3>
            <div className="space-y-3">
              {socialLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.path}
                  className="block text-[#bdbdbd] hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-6">
              Stay Updated with AI Insights
            </h3>
            <p className="text-[#bdbdbd] mb-6 leading-relaxed">
              Enter your email to receive the latest updates and insights on
              AI-powered solutions for your business.
            </p>
            <div className="flex items-center gap-4 max-w-md">
              <input
                type="email"
                placeholder="e-mail"
                className="flex-1 px-4 py-3 bg-[#fcfcfc] border border-[#bdbdbd] rounded-md placeholder-[#bdbdbd] text-[#222222] focus:outline-none focus:ring-2 focus:ring-[#222222] focus:border-transparent"
              />

              <Button
                variant="default"
                className="bg-transparent hover:bg-transparent active:bg-transparent focus:bg-transparent"
              >
                Send
              </Button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center pt-8 border-t border-[#333]">
          <div className="text-2xl font-light mb-4 md:mb-0">
            <Logo />
          </div>
          <div className="text-[#bdbdbd] text-sm">
            © 2025 Valkiv AI. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
