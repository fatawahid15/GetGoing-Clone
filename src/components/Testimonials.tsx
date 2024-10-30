import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "Keluar negeri pertama kali tanpa rasa khawatir",
    description: "GetGoing bikin liburan keluar negeri tanpa rasa khawatir dan bener-bener kerasa kayak cuma punya kami berdua. Apalagi ada aplikasinya juga yang bisa dipakai untuk mengeksplor kota dengan informasinya yang cukup lengkap. Bintang 5 pokoknya",
    author: "Herlika & Johan",
    role: "ENTREPRENEUR",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    quote: "Pengalaman traveling yang tak terlupakan",
    description: "Perjalanan pertama ke Eropa jadi sangat berkesan berkat panduan dari GetGoing. Tour guide lokal yang ramah dan professional membuat kami merasa aman dan nyaman selama perjalanan.",
    author: "Amanda & Kevin",
    role: "HONEYMOON TRAVELER",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
  }
];

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-4xl font-bold mb-2">
          Kata <span className="text-red-600">Mereka</span>
        </h2>
        <p className="text-center text-gray-600 mb-16">
          Cerita dari mereka yang telah menjelajahi Eropa bersama kami
        </p>

        <div className="max-w-7xl mx-auto relative">
          <div className="overflow-hidden">
            <div 
              className="transition-transform duration-500 flex"
              style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                      <div className="text-8xl text-gray-200 font-serif leading-none">"</div>
                      <h3 className="text-3xl font-bold mb-6">{testimonial.quote}</h3>
                      <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                        {testimonial.description}
                      </p>
                      <div>
                        <h4 className="font-bold text-xl">{testimonial.author}</h4>
                        <p className="text-gray-500">{testimonial.role}</p>
                      </div>
                    </div>
                    <div className="relative">
                      <img 
                        src={testimonial.image}
                        alt={testimonial.author}
                        className="w-full rounded-lg shadow-xl"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center mt-12 space-x-4">
            <button 
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:bg-gray-100 transition"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:bg-gray-100 transition"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;