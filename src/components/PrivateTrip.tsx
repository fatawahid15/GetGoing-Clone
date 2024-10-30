const features = [
  {
    icon: '🗓️',
    title: 'Konsultasi GRATIS',
    description: 'Curhatin aja semuanya!'
  },
  {
    icon: '👥',
    title: 'Local Guide',
    description: 'Biar ada teman!'
  },
  {
    icon: '🚗',
    title: 'Transportasi',
    description: 'Bebas pilih transportasi apa'
  },
  {
    icon: '⭐',
    title: 'Lengkap Pakeknya',
    description: 'Hotel, Asuransi, Visa, Wifi dll'
  }
];

const PrivateTrip = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-red-600 font-semibold mb-4">PRIVATE TRIP</h3>
            <h2 className="text-4xl font-bold mb-8">
              Berangkat <span className="text-red-600">Kapan Saja</span> Semaumu
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 mt-1 text-red-600">✓</div>
                <p>Tentukan tanggal keberangkatan sesukamu</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 mt-1 text-red-600">✓</div>
                <p>Tidak ada kuota minimum, jadi pasti berangkat</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 mt-1 text-red-600">✓</div>
                <p>Fleksibel, bebas tentukan destinasi dan aktivitas perjalanan</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 mt-1 text-red-600">✓</div>
                <p>Liburan jadi lebih exclusive untuk kamu dan keluarga</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-3xl mb-3">{feature.icon}</div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivateTrip;