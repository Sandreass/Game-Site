import React, { useState } from 'react';
import brookImage from '/public/brook.png';
import zorro from '/public/zorro.jpg';
import robin from '/public/robin.jpg';
import ruffy from '/public/ruffy.jpg';
import sanji from '/public/sanji.jpg';
import nami from '/public/nami.jpg';
import franky from '/public/franky.jpg';
import chopper from '/public/chopper.jpg';
import lysop from '/public/lysop.jpg';

const Card = ({ title, description, image, onClick }) => (
  <div 
    className="border p-4 rounded shadow-lg cursor-pointer hover:shadow-2xl transition duration-200"
    onClick={onClick}
  >
    <img src={image} alt={title} className="w-full h-64 object-cover mb-4 rounded" />
    <h2 className="text-xl font-bold mb-4">{title}</h2>
    <p>{description}</p>
  </div>
);

const Modal = ({ item, onClose }) => (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div className="bg-white p-8 rounded-lg max-w-md w-full relative">
      <button onClick={onClose} className="absolute top-2 right-2 text-red-700 hover:text-black">&times;</button>
      <img src={item.image} alt={item.title} className="w-full h-64 object-cover mb-2 rounded" />
      <h2 className="text-2xl font-bold mb-4 text-blue-700">{item.title}</h2>
      <p className="mt-4 text-red-700">{item.description}</p>
      <p className="mt-4 text-blue-700">{item.longDescription}</p>
    </div>
  </div>
);

const Cards = () => {
  const [activeItem, setActiveItem] = useState(null);

  const items = [
    { title: 'Franky', description: 'Killer -200$', image: franky, longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent egestas ligula id risus varius.' },
    { title: 'Zorro', description: 'Joker - 190$', image: zorro, longDescription: 'Curabitur ac leo nunc. Vestibulum et mauris vel ante finibus maximus nec ut leo.' },
    { title: 'Robin', description: 'Player - 55$', image: robin, longDescription: 'Praesent vel libero faucibus, viverra urna sit amet, tincidunt velit. Nulla eget semper ligula.' },
    { title: 'Brook', description: 'Death - 166$', image: brookImage, longDescription: 'Nulla facilisi. Ut fringilla tristique neque, eget scelerisque eros mollis ut.' },
    { title: 'Lysop', description: 'Player - 50$', image: lysop, longDescription: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.' },
    { title: 'Chopper', description: 'Citizen - 70$', image: chopper, longDescription: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.' },
    { title: 'Nami', description: 'Angel - 140$', image: nami, longDescription: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo.' },
    { title: 'Sanji', description: 'Mafia - 125$', image: sanji, longDescription: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.' },
    { title: 'Ruffy', description: 'Pharaoh - 135$', image: ruffy, longDescription: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.' },
  ];

  return (
    <div className="grid grid-cols-3 gap-4 p-8">
      {items.map((item, index) => (
        <Card 
          key={index} 
          {...item} 
          onClick={() => setActiveItem(item)} 
        />
      ))}
      {activeItem && <Modal item={activeItem} onClose={() => setActiveItem(null)} />}
    </div>
  );
};

export default Cards;