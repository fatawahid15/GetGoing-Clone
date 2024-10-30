import  { useState } from 'react';
import { X } from 'lucide-react';

const FloatingActionButton = () => {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-white rounded-lg shadow-lg p-4">
      <div className="flex items-center space-x-4">
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute -top-2 -right-2 w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center"
        >
          <X className="w-4 h-4" />
        </button>
        
        <div>
          <h6 className="font-bold text-red-600">Hubungi kami</h6>
          <p className="text-sm">melalui IG atau WA</p>
        </div>
        
        <a href="https://www.instagram.com/getgoing.co.id/" 
           target="_blank" 
           rel="noopener noreferrer"
           className="w-12 h-12 rounded-full bg-cover"
           style={{ backgroundImage: 'url(/images/instagram-button.png)' }}
        />
        
        <a href="https://wa.me/6281119190601?text=Hallo,%20Saya%20mau%20berlibur%20ke%20Eropa%20dengan%20Private%20Trip.%20Apakah%20bisa%20dibantu%20?" 
           target="_blank" 
           rel="noopener noreferrer"
           className="w-12 h-12 rounded-full bg-cover"
           style={{ backgroundImage: 'url(/images/whatsapp-button.png)' }}
        />
      </div>
    </div>
  );
};

export default FloatingActionButton;