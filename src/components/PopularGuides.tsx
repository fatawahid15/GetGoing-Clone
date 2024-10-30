const guides = [
  {
    id: 1,
    name: 'Nuel',
    location: 'Paris, Prancis',
    image: 'https://images.unsplash.com/photo-1548535537-3cfaf1fc327c?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 2,
    name: 'Agus',
    location: 'Roma, Italia',
    image: 'https://images.unsplash.com/photo-1552072092-7f9b8d63efcb?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 3,
    name: 'Stella',
    location: 'Zurich, Swiss',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 4,
    name: 'Januar',
    location: 'Munich, Jerman',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 5,
    name: 'Gio',
    location: 'Amsterdam, Belanda',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80'
  }
];

const PopularGuides = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Sedang <span className="text-red-600">Populer</span></h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {guides.map((guide) => (
            <div key={guide.id} className="group cursor-pointer">
              <div className="relative aspect-square rounded-lg overflow-hidden mb-3">
                <img 
                  src={guide.image} 
                  alt={guide.name}
                  className="w-full h-full object-cover transition group-hover:scale-110"
                />
              </div>
              <h3 className="font-semibold">{guide.name}</h3>
              <p className="text-sm text-gray-600">{guide.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularGuides;