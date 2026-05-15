import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1e3a8a] text-white py-16" role="contentinfo">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div className="col-span-1">
            <Link to="/" aria-label="Return to homepage">
              <img src="/images/sl-logolong.svg" alt="StartupLabs Logo" className="h-12 w-auto mb-4" />
            </Link>
            <p className="text-lg text-white/90">startups reimagined</p>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold mb-6">contact</h3>
            <p className="mb-2">929-216-4866</p>
            <p className="mb-2">www.startuplabs.agency</p>
            <p className="mb-4">info@startuplabs.com</p>
            <div className="mt-4">
              <p className="font-medium">Address:</p>
              <p>5179 Mountain Shadow Ln.</p>
              <p>Smoke Rise, GA 30087</p>
            </div>
          </div>

          {/* Information Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">information</h3>
            <ul className="space-y-3">
              <li><Link to="/ideation" className="hover:text-gray-300 transition-colors">ideate</Link></li>
              <li><Link to="/planning" className="hover:text-gray-300 transition-colors">plan</Link></li>
              <li><Link to="/funding" className="hover:text-gray-300 transition-colors">fund</Link></li>
              <li><Link to="/development" className="hover:text-gray-300 transition-colors">build</Link></li>
              <li><Link to="/launch" className="hover:text-gray-300 transition-colors">launch</Link></li>
              <li><Link to="/growth" className="hover:text-gray-300 transition-colors">grow</Link></li>
              <li><Link to="/slingshots" className="hover:text-gray-300 transition-colors">slingshots</Link></li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">follow</h3>
            <div className="space-y-3">
              <a href="#" className="flex items-center gap-2 hover:text-gray-300 transition-colors">
                <Facebook size={20} /> Facebook
              </a>
              <a href="#" className="flex items-center gap-2 hover:text-gray-300 transition-colors">
                <Instagram size={20} /> Instagram
              </a>
              <a href="#" className="flex items-center gap-2 hover:text-gray-300 transition-colors">
                <Twitter size={20} /> Twitter
              </a>
              <a href="#" className="flex items-center gap-2 hover:text-gray-300 transition-colors">
                <Linkedin size={20} /> Linkedin
              </a>
              <a href="#" className="flex items-center gap-2 hover:text-gray-300 transition-colors">
                <Youtube size={20} /> Youtube
              </a>
            </div>
          </div>
        </div>

        {/* Copyright and Terms */}
        <div className="mt-16 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-white/80">© 2023 StartupLabs All Rights Reserved</p>
            <a href="#" className="text-sm text-white/80 hover:text-white transition-colors mt-4 md:mt-0">
              Privacy & Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;