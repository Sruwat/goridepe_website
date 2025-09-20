import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
export function Footer({ onNavigate }) {
    const currentYear = new Date().getFullYear();
    const footerLinks = {
        company: [
            { name: 'About Us', page: 'about' },
            { name: 'Why Go Ride Pe', page: 'why-go-ride-pe' },
            { name: 'Careers', page: 'careers' },
            { name: 'Blog', page: 'blog' },
            { name: 'Contact', page: 'contact' }
        ],
        services: [
            { name: 'Vehicle Rental', page: 'vehicles' },
            { name: 'Pricing Plans', page: 'pricing' },
            { name: 'KYC Verification', page: 'kyc' },
            { name: 'Payment', page: 'payment' },
            { name: 'Safety Guidelines', page: 'safety' }
        ],
        support: [
            { name: 'Help Center', page: 'help-center' },
            { name: 'Customer Support', page: 'help' },
            { name: 'Privacy Policy', page: 'privacy' },
            { name: 'Terms of Service', page: 'terms' }
        ]
    };
    return (<footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h3 className="text-2xl font-bold text-green-400 mb-4">Go Ride Pe</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Empowering Drivers, Building Dreams, Driving India Green. 
                Your trusted partner for sustainable electric vehicle rentals 
                in NCR region.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-green-400 flex-shrink-0"/>
                  <span className="text-gray-300">SK 67, Sector :- 112 , Noida  , Uttar Pradesh , 201310, India</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-green-400 flex-shrink-0"/>
                  <span className="text-gray-300">+91-7276872285</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-green-400 flex-shrink-0"/>
                  <span className="text-gray-300">support@gorideper.com</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Company Links */}
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
              <h4 className="text-lg font-semibold mb-4 text-green-400">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (<li key={link.name}>
                    <button onClick={() => onNavigate(link.page)} className="text-gray-300 hover:text-green-400 transition-colors flex items-center group">
                      <ChevronRight className="w-4 h-4 mr-1 group-hover:translate-x-1 transition-transform"/>
                      {link.name}
                    </button>
                  </li>))}
              </ul>
            </motion.div>
          </div>

          {/* Services Links */}
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
              <h4 className="text-lg font-semibold mb-4 text-green-400">Services</h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (<li key={link.name}>
                    <button onClick={() => onNavigate(link.page)} className="text-gray-300 hover:text-green-400 transition-colors flex items-center group">
                      <ChevronRight className="w-4 h-4 mr-1 group-hover:translate-x-1 transition-transform"/>
                      {link.name}
                    </button>
                  </li>))}
              </ul>
            </motion.div>
          </div>

          {/* Support Links */}
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}>
              <h4 className="text-lg font-semibold mb-4 text-green-400">Support</h4>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (<li key={link.name}>
                    <button onClick={() => onNavigate(link.page)} className="text-gray-300 hover:text-green-400 transition-colors flex items-center group">
                      <ChevronRight className="w-4 h-4 mr-1 group-hover:translate-x-1 transition-transform"/>
                      {link.name}
                    </button>
                  </li>))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }} className="mt-12 pt-8 border-t border-gray-700">
          <div className="text-center">
            <h4 className="text-xl font-semibold mb-4 text-green-400">Stay Updated</h4>
            <p className="text-gray-300 mb-6 max-w-md mx-auto">
              Subscribe to our newsletter for the latest updates on electric mobility and special offers
            </p>
            <div className="max-w-md mx-auto flex gap-3">
              <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"/>
              <Button className="bg-green-600 hover:bg-green-700">Subscribe</Button>
            </div>
          </div>
        </motion.div>

        {/* Social Media & Bottom */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.5 }} className="mt-8 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-gray-400 text-sm">
              © {currentYear} Go Ride Pe. All rights reserved. | Launching October 10th, 2025
            </div>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Facebook className="w-5 h-5"/>
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Twitter className="w-5 h-5"/>
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Instagram className="w-5 h-5"/>
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Linkedin className="w-5 h-5"/>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Launch Banner */}
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.6 }} className="mt-8 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg p-6 text-center">
          <h5 className="text-xl font-bold mb-2">🚀 Coming Soon!</h5>
          <p className="text-green-100">
            Go Ride Pe officially launches on October 10th, 2025. Be ready for the future of green mobility!
          </p>
        </motion.div>
      </div>
    </footer>);
}
