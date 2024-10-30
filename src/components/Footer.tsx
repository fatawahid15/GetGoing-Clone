import { MapPin, Clock, Mail, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative z-10 print:hidden">
      <div className="pt-5 bg-red-600 text-gray-300">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold uppercase text-white mb-3">Informasi Kontak</h3>
              <ul className="space-y-4">
                <li className="flex items-center space-x-2">
                  <MapPin className="w-6 h-6 text-white" />
                  <span className="text-white">BSD Green Office Park 1, 6th Floor, BSD City, Tangerang, Banten 15345</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Clock className="w-6 h-6 text-white" />
                  <span className="text-white">24/7 - Online</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail className="w-6 h-6 text-white" />
                  <a href="mailto:lets@getgoing.co.id" className="text-white hover:text-red-200">lets@getgoing.co.id</a>
                </li>
                <li className="flex items-center space-x-2">
                  <Instagram className="w-6 h-6 text-white" />
                  <a href="https://www.instagram.com/getgoing.co.id" className="text-white hover:text-red-200">@getgoing.co.id</a>
                </li>
                <li className="flex items-center space-x-2">
                  <Facebook className="w-6 h-6 text-white" />
                  <a href="https://www.facebook.com/getgoing.co.id" className="text-white hover:text-red-200">@getgoing.co.id</a>
                </li>
              </ul>
            </div>

            <div className="flex justify-center">
              <img src="https://getgoing.co.id/content/img/MockupApp.png" 
                   alt="App Preview" 
                   className="h-[300px] object-contain" />
            </div>

            <div>
              <h3 className="font-bold uppercase text-white mb-3">DOWNLOAD DI</h3>
              <div className="flex space-x-4">
                <a href="https://apps.apple.com/us/app/getgoing/id1602015694" target="_blank" rel="noopener noreferrer">
                  <img src="https://getgoing.co.id/content/svg/AppStore.svg" alt="App Store" className="h-[70px]" />
                </a>
              </div>
              <div className="flex space-x-4">
                <a href="https://play.google.com/store/apps/details?id=com.getgoing.app" target="_blank" rel="noopener noreferrer">
                  <img src="https://getgoing.co.id/content/svg/GooglePlay.svg" alt="Google Play" className="h-[70px]" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-bold uppercase text-white mb-3">Lainnya</h3>
              <ul className="space-y-2">
                <li><a href="/syarat-ketentuan" className="text-white hover:text-red-200">Syarat dan Ketentuan</a></li>
                <li><a href="/kebijakan-privasi" className="text-white hover:text-red-200">Kebijakan Privasi</a></li>
                <li><a href="/dokumentasi" className="text-white hover:text-red-200">Dokumentasi</a></li>
                <li><a href="/penghargaan" className="text-white hover:text-red-200">Penghargaan</a></li>
                <li><a href="/login" className="text-white hover:text-red-200">Login</a></li>
                <li><a href="/press" className="text-white hover:text-red-200">Press</a></li>
                <li><a href="/faq" className="text-white hover:text-red-200">F.A.Q</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="py-4 bg-black text-gray-300">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm mb-4 md:mb-0">© 2024 - PT. Gue Eksplorasi Terus. All rights reserved.</p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/getgoing.co.id/" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-6 h-6 text-white hover:text-red-400" />
              </a>
              <a href="https://www.facebook.com/getgoing.co.id" target="_blank" rel="noopener noreferrer">
                <Facebook className="w-6 h-6 text-white hover:text-red-400" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;