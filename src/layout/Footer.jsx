import { Facebook, Twitter, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
export default function Footer() {
    return (
      <footer >
        <div className="bg-gray-50 py-4">
         <div className='container mx-auto flex justify-between items-center'>
              <h3 className="text-xl font-bold mb-4">Bandage</h3>
              <div className="flex gap-4 mb-4 text-[#23A6F0]">
                <Facebook size={20} />
                <Instagram size={20} />
                <Twitter size={20} />
              </div>
            </div>
          
        </div>
        <div className='bg-white py-6'>
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
            <div>
              <h4 className="font-bold mb-4">Company Info</h4>
              <ul className="space-y-2">
                <li><Link to="/contact" className="hover:text-blue-400">About Us</Link></li>
                <li><a href="#" className="hover:text-blue-400">Carrier</a></li>
                <li><a href="#" className="hover:text-blue-400">We are hiring</a></li>
                <li><a href="#" className="hover:text-blue-400">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-400">About Us</a></li>
                <li><a href="#" className="hover:text-blue-400">Carrier</a></li>
                <li><a href="#" className="hover:text-blue-400">We are hiring</a></li>
                <li><a href="#" className="hover:text-blue-400">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Features</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-400">Business Marketing</a></li>
                <li><a href="#" className="hover:text-blue-400">User Analytic</a></li>
                <li><a href="#" className="hover:text-blue-400">Live Chat</a></li>
                <li><a href="#" className="hover:text-blue-400">Unlimited Support</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-400">IOS & Android</a></li>
                <li><a href="#" className="hover:text-blue-400">Watch a Demo</a></li>
                <li><a href="#" className="hover:text-blue-400">Customers</a></li>
                <li><a href="#" className="hover:text-blue-400">API</a></li>
              </ul>
            </div>
            <div className="mb-12">
          <h3 className="font-bold mb-4">Get In Touch</h3>
          
          <div className="flex flex-col sm:flex-row  max-w-md">
            <input
              type="email"
              placeholder="Your Email"
              className="flex-grow px-4 py-2  text-gray-900 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Email address for newsletter"
            />
            <button
              className="bg-[#23A6F0] text-white px-4 py-2 flex items-center justify-center gap-2 transition-colors"
            >
              <span>Subscribe</span>
            </button>
          </div>
          
          <p className="text-gray-400 text-sm mt-2">
            Lorem ipsum dolor sit amet
          </p>
        </div>
          </div>
          </div>
        
        <div className="bg-gray-50 py-6">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
            <p>Made With Love By Finland All Right Reserved</p>
          </div>
        </div>
      </footer>
    );
  }