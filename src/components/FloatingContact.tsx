import { useState } from 'react';
import { X } from 'lucide-react';

const FloatingContact = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="bg-white rounded-lg shadow-lg p-4">
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute -top-2 -right-2 w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center"
        >
          <X className="w-4 h-4" />
        </button>
        
        <div className="flex items-center space-x-4">
          <div>
            <h6 className="text-red-600 font-bold">Hubungi kami</h6>
            <p className="text-sm">melalui IG atau WA</p>
          </div>
          
          <div className="flex space-x-2">
            <a 
              href="https://www.instagram.com/getgoing.co.id" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#E1306C] flex items-center justify-center"
            >
              <img src="https://www.svgrepo.com/show/303145/instagram-2-1-logo.svg" alt="Instagram" className="w-6 h-6" />
            </a>
            
            <a 
              href="https://wa.me/6281119190601" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center"
            >
              <img src="https://www.svgrepo.com/show/452133/whatsapp.svg" alt="WhatsApp" className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingContact;