import React from 'react';

const Card = ({ title, description }) => (
  <div className="border p-4 rounded shadow-lg">
    <h2 className="text-xl font-bold mb-2">{title}</h2>
    <p>{description}</p>
  </div>
);

const Cards = () => {
  const items = [
    { title: 'Card 1', description: 'Description 1' },
    { title: 'Card 2', description: 'Description 2' },
    { title: 'Card 3', description: 'Description 3' },
    { title: 'Card 4', description: 'Description 4' },
    { title: 'Card 5', description: 'Description 5' },
    { title: 'Card 6', description: 'Description 6' },
    { title: 'Card 6', description: 'Description 6' },
    { title: 'Card 6', description: 'Description 6' },
    { title: 'Card 6', description: 'Description 6' },


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