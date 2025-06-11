import { Phone, Mail, Facebook, Twitter, Instagram, Youtube,User,
    Search,
    Heart,
    ShoppingCart,
    ChevronDown } from 'lucide-react';

export default function Header() {
  return (
    <div className='w-screen'>
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
              <Facebook size={16} fill='white'/>
              <Twitter size={16} fill='white'/>
            </div>
          </div>
        </div>
      </div>

      <nav className="bg-white shadow-md py-4 px-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <h1 className="text-2xl font-bold mb-4 md:mb-0">Bandage</h1>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-[#737373]">
            <a href="#" className="font-medium">Home</a>
            <a href="#" className="font-medium flex items-center gap-1 ">Shop <ChevronDown size={16} /> </a>
            <a href="#" className="font-medium">About</a>
            <a href="#" className="font-medium">Blog</a>
            <a href="#" className="font-medium">Contact</a>
            <a href="#" className="font-medium">Pages</a>
          </div>
          
          <div className="hidden md:flex items-center gap-4 mt-4 md:mt-0 text-[#23A6F0]">
            <button className="flex items-center gap-1">
              <User size={18} />
              <span>Login / Register</span>
            </button>
            <button className="relative">
              <Search size={18} />
            </button>
            <button className="relative flex justify-between items-center gap-1">
              <ShoppingCart size={18} />
              <span>2</span>
            </button>
            <button className="relative flex justify-between items-center gap-1">
              <Heart size={18} />
              <span>1</span>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
  