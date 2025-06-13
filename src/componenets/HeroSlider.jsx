
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from 'lucide-react';


const NextArrow = ({ onClick }) => (
    <div
      onClick={onClick}
      className="absolute right-4 top-1/2 transform -translate-y-1/2 rounded-full cursor-pointer z-10"
    >
      <ChevronRight size={60} className="text-white" />
    </div>
  );
  
  const PrevArrow = ({ onClick }) => (
    <div
      onClick={onClick}
      className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full cursor-pointer z-10"
    >
      <ChevronLeft size={60} className="text-white" />
    </div>
  );
  

export default function HeroSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: true,
        adaptiveHeight: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
            },
          },
        ],
      };

  const slides = [
    {
      id: 1,
      title: "New Collection",
      subtitle: "Summer 2020",
      description: "We know how large objects will act, but things on a small scale.",
      cta: "Shop Now",
      bgImage: "/hero.jpg",
      textColor: "text-white"
    },
    {
      id: 2,
      title: "Winter Collection",
      subtitle: "Winter 2023",
      description: "Discover our cozy winter essentials for the cold season.",
      cta: "Explore",
      bgImage: "/hero.jpg",
      textColor: "text-white"
    }
  ];

  return (
    <div className="relative">
      <Slider {...settings} className="overflow-hidden">
        {slides.map((slide) => (
          <div key={slide.id}>
            <div 
              className="w-full h-[400px] md:h-[720px] bg-cover bg-center flex items-center"
              style={{ backgroundImage: `url(${slide.bgImage})` }}
              aria-label={`Slide ${slide.id}: ${slide.title}`}
            >
              <div className="absolute inset-0"></div>
              <div className="container mx-auto px-6 relative z-10">
                <div className={`max-w-xl ${slide.textColor} space-y-4`}>
                  <p className="uppercase font-bold text-sm tracking-wider">
                    {slide.subtitle}
                  </p>
                  <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    {slide.title}
                  </h2>
                  <p className="text-base md:text-lg">
                    {slide.description}
                  </p>
                  <button 
                    className="mt-4 bg-[#2DC071] hover:bg-[#25A35A] text-white font-bold py-3 px-8 rounded-md flex items-center gap-2 transition-colors"
                    aria-label={slide.cta}
                  >
                    {slide.cta}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}