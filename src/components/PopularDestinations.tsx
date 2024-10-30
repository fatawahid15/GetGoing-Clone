const destinations = [
  {
    id: 1,
    name: 'Paris, France',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80',
    description: 'Kota romansa dengan Menara Eiffel yang ikonik',
    price: 'Mulai dari Rp 15.000.000'
  },
  {
    id: 2,
    name: 'Amsterdam, Netherlands',
    image: 'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?auto=format&fit=crop&w=600&q=80',
    description: 'Kota kanal dengan arsitektur klasik Eropa',
    price: 'Mulai dari Rp 14.500.000'
  },
  {
    id: 3,
    name: 'Rome, Italy',
    image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=600&q=80',
    description: 'Kota eternal dengan sejarah yang megah',
    price: 'Mulai dari Rp 16.000.000'
  },
  {
    id: 4,
    name: 'Barcelona, Spain',
    image: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=600&q=80',
    description: 'Kota seni dengan arsitektur Gaudi yang unik',
    price: 'Mulai dari Rp 15.500.000'
  }
];

const PopularDestinations = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Destinasi Populer</h2>
          <p className="text-gray-600">Temukan tempat-tempat menakjubkan untuk perjalanan Anda berikutnya</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((destination) => (
            <div key={destination.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative h-48">
                <img 
                  src={destination.image} 
                  alt={destination.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{destination.name}</h3>
                <p className="text-gray-600 mb-4">{destination.description}</p>
                <p className="text-red-600 font-semibold">{destination.price}</p>
                <button className="mt-4 w-full px-4 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition">
                  Lihat Detail
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="/destinations" 
            className="inline-block px-8 py-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition"
          >
            Lihat Semua Destinasi
          </a>
        </div>
      </div>
    </section>
  );
}

export default PopularDestinations;