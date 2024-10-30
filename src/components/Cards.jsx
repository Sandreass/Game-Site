import React from 'react';
import brookImage from '/public/brook.png';
import zorro from '/public/zorro.jpg';
import robin from '/public/robin.jpg';
import ruffy from '/public/ruffy.jpg';
import sanji from '/public/sanji.jpg';
import nami from '/public/nami.jpg';
import franky from '/public/franky.jpg';
import chopper from '/public/chopper.jpg';
import lysop from '/public/lysop.jpg';

const Card = ({ title, description, image }) => (
  <div className="border p-4 rounded shadow-lg">
    <img src={image} alt={title} className="w-full h-64 object-cover mb-4 rounded" />
    <h2 className="text-xl font-bold mb-4">{title}</h2>
    <p>{description}</p>
  </div>
);

const Cards = () => {
  const items = [
    { title: 'Franky', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', image: franky },
    { title: 'Zorro', description: 'Curabitur ac leo nunc. Vestibulum et mauris vel ante.', image: zorro },
    { title: 'Robin', description: 'Praesent vel libero faucibus, viverra urna sit amet, tincidunt velit.', image: robin },
    { title: 'Brook', description: 'Nulla facilisi. Ut fringilla tristique neque, eget.', image: brookImage },
    { title: 'Lysop', description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem.', image: lysop },
    { title: 'Chopper', description: 'At vero eos et accusamus et iusto odio dignissimos ducimus.', image: chopper },
    { title: 'Nami', description: 'Nam libero tempore, cum soluta nobis est eligendi optio.', image: nami },
    { title: 'Sanji', description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse.', image: sanji },
    { title: 'Ruffy', description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa.', image: ruffy },
  ];
  
  return (
    <div className="grid grid-cols-3 gap-4 p-8">
      {items.map((item, index) => (
        <Card key={index} {...item} />
      ))}
    </div>
  );
};

export default Cards;