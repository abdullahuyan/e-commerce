import {
    Phone,
    Mail,
    Facebook,
    Twitter,
    Instagram,
    Youtube,
    User,
    Search,
    Heart,
    ShoppingCart,
    ChevronDown,
  } from "lucide-react";
  import { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
  
  export default function Header() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
    return (
      <div className="w-full relative">
        {/* Üst Bilgi */}
        <div className="bg-[#252B42] h-[58px] text-white text-sm font-bold py-4 px-4 hidden sm:block">
          <div className="container mx-auto flex flex-row justify-between items-center ">
            <div className="flex items-center gap-4 md:mb-0">
              <div className="flex items-center gap-1">
                <Phone size={16} />
                <span>(225) 555-0118</span>
              </div>
              <div className="flex items-center gap-1">
                <Mail size={16} />
                <span>michelle.rivera@example.com</span>
              </div>
            </div>
            <span>Follow Us and get a chance to win 80% off</span>
            <div className="flex items-center gap-2">
              <div className="flex gap-2">
                <span>Follow Us : </span>
                <Instagram size={16} />
                <Youtube size={16} />
                <Facebook size={16} />
                <Twitter size={16} />
              </div>
            </div>
          </div>
        </div>
  
        {/* Navigasyon */}
        <nav className="bg-white shadow-md py-4 px-6 relative z-50">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
            <h1 className="text-2xl font-bold mb-4 md:mb-0">Bandage</h1>
  
            {/* Menü */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-[#737373] relative">
              <Link to="/" className="font-medium">Home</Link>
  
              {/* Shop Dropdown */}
              <div
                className="relative group"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <Link to="/shop" className="font-medium flex items-center gap-1">
                  Shop <ChevronDown size={16} />
                </Link>
  
                {isDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 bg-white shadow-lg p-6 grid grid-cols-2 gap-8 w-[400px] text-[#737373]">
                    <div>
                      <h4 className="font-bold text-[#252B42] mb-2">Kadın</h4>
                      <ul className="space-y-1 text-sm">
                        <li>Bags</li>
                        <li>Belts</li>
                        <li>Cosmetics</li>
                        <li>Bags</li>
                        <li>Hats</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#252B42] mb-2">Erkek</h4>
                      <ul className="space-y-1 text-sm">
                        <li>Bags</li>
                        <li>Belts</li>
                        <li>Cosmetics</li>
                        <li>Bags</li>
                        <li>Hats</li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
  
              <Link to="/about" className="font-medium">About</Link>
              <a href="#" className="font-medium">Blog</a>
              <Link to="/contact" className="font-medium">Contact</Link>
              <Link to="/team" className="font-medium">Our Team</Link>
              <a href="#" className="font-medium">Pages</a>
            </div>
  
            {/* Sağ İkonlar */}
            <div className="hidden md:flex items-center gap-4 mt-4 md:mt-0 text-[#23A6F0]">
              <button className="flex items-center gap-1">
                <User size={18} />
                <span>Login / Register</span>
              </button>
              <button className="relative">
                <Search size={18} />
              </button>
              <button className="relative flex items-center gap-1">
                <ShoppingCart size={18} />
                <span>2</span>
              </button>
              <button className="relative flex items-center gap-1">
                <Heart size={18} />
                <span>1</span>
              </button>
            </div>
          </div>
        </nav>
      </div>
    );
  }
  