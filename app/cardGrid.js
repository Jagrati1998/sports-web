import React from 'react';
import Card from './card';

const CardSection = () => {
  const cards = [
    {
      title: 'Card 1',
      description: 'This is the description for card 1.',
      imageUrl: 'https://via.placeholder.com/800x400?text=Card+1',
    },
    {
      title: 'Card 2',
      description: 'This is the description for card 2.',
      imageUrl: 'https://via.placeholder.com/800x400?text=Card+2',
    },
    {
      title: 'Card 3',
      description: 'This is the description for card 3.',
      imageUrl: 'https://via.placeholder.com/800x400?text=Card+3',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {cards.map((card, index) => (
        <Card key={index} title={card.title} description={card.description} imageUrl={card.imageUrl} />
      ))}
    </div>
  );
};

export default CardSection;
