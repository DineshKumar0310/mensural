import React from 'react';

const ShoppingPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Online Shopping Platforms</h1>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        <a href="https://www.swiggy.com/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center bg-gray-200 p-4 rounded-md">
          <img src="https://tse1.mm.bing.net/th?id=OIP.Qw11nbTP2pBb08x-H2WDSAHaE8&pid=Api&P=0&h=180" alt="Swiggy" className="w-24 h-24 mb-4" />
          <span>Swiggy</span>
        </a>
        <a href="https://www.amazon.in/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center bg-gray-200 p-4 rounded-md">
          <img src="https://tse4.mm.bing.net/th?id=OIP.WGxtnw81X7exO2PxiVlL9QHaEK&pid=Api&P=0&h=180" alt="Amazon" className="w-24 h-24 mb-4" />
          <span>Amazon</span>
        </a>
        <a href="https://www.medplusmart.com/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center bg-gray-200 p-4 rounded-md">
          <img src="https://www.paubox.com/hubfs/Imported_Blog_Media/34.png" alt="MedPlus" className="w-24 h-24 mb-4" />
          <span>MedPlus</span>
        </a>
        <a href="https://www.zomato.com/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center bg-gray-200 p-4 rounded-md">
          <img src="https://tse2.mm.bing.net/th?id=OIP.XV8GTolcOQ15kl4IhPd8TwHaEK&pid=Api&P=0&h=180" alt="Zomato" className="w-24 h-24 mb-4" />
          <span>Zomato</span>
        </a>
        <a href="https://www.flipkart.com/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center bg-gray-200 p-4 rounded-md">
          <img src="https://tse4.mm.bing.net/th?id=OIP.WGxtnw81X7exO2PxiVlL9QHaEK&pid=Api&P=0&h=180" alt="Flipkart" className="w-24 h-24 mb-4" />
          <span>Flipkart</span>
        </a>
        <a href="https://www.blinkit.com/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center bg-gray-200 p-4 rounded-md">
          <img src="https://tse2.mm.bing.net/th?id=OIP.eyux7K0cVNHAA-dXKOYKJQHaEK&pid=Api&P=0&h=180" alt="Blinkit" className="w-24 h-24 mb-4" />
          <span>Blinkit</span>
        </a>
      </div>
    </div>
  );
};

export default ShoppingPage;
