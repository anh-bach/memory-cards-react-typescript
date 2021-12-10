import React, { FC } from 'react';
import { CardType } from '../App';
import './Card.css';

type CardProps = {
  card: CardType;
  flipped: boolean;
  disabled: boolean;
  handleChoice: (card: CardType) => void;
};

const Card: FC<CardProps> = ({ card, handleChoice, flipped, disabled }) => {
  const handleCardClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  return (
    <div className='card'>
      <div className={flipped ? 'flipped' : ''}>
        <img src={card.src} alt='card front' className='front' />
        <img
          src='/img/cover.png'
          alt='card back'
          className='back'
          onClick={handleCardClick}
        />
      </div>
    </div>
  );
};

export default Card;
