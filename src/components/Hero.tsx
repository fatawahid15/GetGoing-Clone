import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=2000&q=80',
    content: {
      title: 'EKSPLOR DAN NIKMATI MUDAH LIBURAN KE LUAR NEGERI DENGAN',
      subtitle: 'Aplikasi GetGoing',
      description: 'DAPAT DIDOWNLOAD DI:',
      appStoreLink: 'https://apps.apple.com/us/app/getgoing/id1602015694',
      playStoreLink: 'https://play.google.com/store/apps/details?id=com.getgoing.app',
    },
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=2000&q=80',
    content: {
      title: 'Jelajahi Dunia Bersama GetGoing',
      subtitle: 'Private Trip & Local Guide',
      description: 'Temukan pengalaman perjalanan terbaik dengan tour guide lokal Indonesia',
    },
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative flex items-center justify-center py-10 pt-32">
      <div className="relative flex items-center w-screen mx-9 h-[600px]">
        {/* Left Arrow Button */}
        <button onClick={prevSlide} className="absolute left-0 z-10 p-2 bg-white rounded-full shadow-lg hover:bg-gray-200 transition">
          <ChevronLeft className="w-6 h-6 text-red-500" />
        </button>

        {/* Card Carousel */}
        <div className="flex w-full h-full overflow-hidden rounded-lg shadow-lg">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`flex transition-opacity duration-500 ${index === currentSlide ? 'opacity-100' : 'opacity-0'} absolute inset-0`}
            >
              {/* Image Section */}
              <div className="w-1/2 h-full">
                <img src={slide.image} alt={slide.content.title} className="object-cover h-full w-full rounded-l-lg" />
              </div>
              
              {/* Content Section */}
              <div className="w-1/2 bg-white p-8 flex flex-col justify-center space-y-4">
                <p className="text-gray-500">{slide.content.title}</p>
                <h1 className="text-2xl font-bold text-black">{slide.content.subtitle}</h1>
                <p className="text-sm text-gray-600">{slide.content.description}</p>
                <div className="flex space-x-4">
                  {slide.content.appStoreLink && (
                    <a href={slide.content.appStoreLink} target="_blank" rel="noopener noreferrer">
                      <img src="https://getgoing.co.id/content/svg/AppStore.svg" alt="App Store" className="h-8" />
                    </a>
                  )}
                  {slide.content.playStoreLink && (
                    <a href={slide.content.playStoreLink} target="_blank" rel="noopener noreferrer">
                      <img src="https://getgoing.co.id/content/svg/GooglePlay.svg" alt="Google Play" className="h-8" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow Button */}
        <button onClick={nextSlide} className="absolute right-0 z-10 p-2 bg-white rounded-full shadow-lg hover:bg-gray-200 transition">
          <ChevronRight className="w-6 h-6 text-red-500" />
        </button>
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition ${index === currentSlide ? 'bg-red-500' : 'bg-gray-300'}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
