const cities = [
  {
    id: 1,
    name: 'Zurich',
    country: 'Swiss',
    image: 'https://images.unsplash.com/photo-1515488764276-beab7607c1e6?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    name: 'Praha',
    country: 'Ceko',
    image: 'https://images.unsplash.com/photo-1541849546-216549ae216d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    name: 'Berlin',
    country: 'Jerman',
    image: 'https://images.unsplash.com/photo-1560969184-10fe8719e047?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 4,
    name: 'Liverpool',
    country: 'Inggris',
    image: 'https://th.bing.com/th/id/OIP.MXT4gvs7fSjbz8OCw8fTDQHaEm?rs=1&pid=ImgDetMain'
  },
  {
    id: 5,
    name: 'Istanbul',
    country: 'Turki',
    image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=800&q=80'
  }
];

const PopularCities = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Kota <span className="text-red-600">Populer</span></h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {cities.map((city) => (
            <div key={city.id} className="relative group cursor-pointer rounded-xl overflow-hidden">
              <div className="aspect-[4/5]">
                <img 
                  src={city.image} 
                  alt={city.name}
                  className="w-full h-full object-cover transition group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">{city.name}</h3>
                  <p className="text-sm">{city.country}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCities;