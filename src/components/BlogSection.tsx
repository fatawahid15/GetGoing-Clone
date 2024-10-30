const articles = [
  {
    id: 1,
    title: 'Siapa Kami? - Clarisa Sanjaya',
    date: '9 Jun 2021',
    image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    title: 'Seru-Seruan Jelajahi Kota di Eropa Eksplorasi City Tour yang Wajib Dicoba!',
    date: '2 Jun 2023',
    image: 'https://images.unsplash.com/photo-1579282240050-352db0a14c21?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    title: 'Mengungkap Sejarah dan Keajaiban Christmas Market di Seluruh Dunia',
    date: '18 Des 2023',
    image: 'https://goguides.azureedge.net/media/vp3hziva/4b588cb0-f585-11e8-b7e0-0242ac110002.jpg?anchor=center&mode=crop&width=1600&height=1066&quality=50'
  }
];

const BlogSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Baca juga</h2>
          <a href="/blog" className="text-red-600 hover:text-red-700">
            LIHAT SEMUA ARTIKEL »
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <div key={article.id} className="bg-white rounded-xl overflow-hidden shadow-sm">
              <div className="aspect-video relative">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-3">{article.title}</h3>
                <div className="flex items-center text-gray-500 mb-4">
                  <span>{article.date}</span>
                </div>
                <a href="#" className="text-red-600 hover:text-red-700">
                  LANJUTKAN MEMBACA →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;