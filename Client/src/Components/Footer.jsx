import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import { FiPhone } from 'react-icons/fi';
const Footer = () => {
  return (
    <footer className="bg-blue-500 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Features</h3>
            <p className="mb-4">Free Delivery all over Nepal</p>
            <p className='mb-4'>Cash on Delivery</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-red-300"><FaFacebook size={20} /></a>
              <a href="#" className="hover:text-red-300"><FaInstagram size={20} /></a>
              <a href="#" className="hover:text-red-300"><FaYoutube size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">QUICK LINKS</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-red-500">About Us</a></li>
              <li><a href="#" className="hover:text-red-500">Our Products</a></li>
              <li><a href="#" className="hover:text-red-500">Contact Us</a></li>
            </ul>
          </div>

          {/* Help & Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">HELP & INFORMATION</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-red-300">FAQ</a></li>
              <li><a href="#" className="hover:text-red-300">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-red-300">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">CONTACT US</h4>
            <div className="flex items-center mb-2">
              <IoMdMail className="mr-2" />
              <span>computerPasal@.com</span>
            </div>
            <div className="flex items-center">
              <FiPhone className="mr-2" />
              <span>+977- 9812345678</span>
            </div>

          </div>
        </div>


      </div>
    </footer>
  );
};

export default Footer;