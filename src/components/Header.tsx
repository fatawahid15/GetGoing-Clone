import { Search } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed w-full z-50 bg-white/80 backdrop-blur-sm">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <a href="/" className="flex-shrink-0">
            <img src="https://getgoing.co.id/_next/static/images/LogoGetGoing-1b06f75eefdc319bb98ba925a24ee023.png" alt="GetGoing" className="h-8" />
          </a>

          <div className="flex-1 max-w-xl mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Cari negara, kota atau guide"
                className="w-full px-4 py-2 rounded-full bg-gray-100/80 border-0 focus:ring-2 focus:ring-red-600"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2">
                <Search className="w-5 h-5 text-red-600" />
              </button>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <a href="/beranda" className="text-black hover:text-red-600">Beranda</a>
            <a href="/servis-kami" className="text-black hover:text-red-600">Servis Kami</a>
            <a href="/blog" className="text-black hover:text-red-600">Blog</a>
            <a href="/login" className="px-6 py-2 bg-red-600 text-white rounded-full hover:bg-red-700">
              LOGIN
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;