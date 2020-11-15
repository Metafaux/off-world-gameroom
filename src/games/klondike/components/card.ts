import * as PIXI from 'pixi.js';
import { BLANK_CARD_ID } from '../../../const';

const Card = () => {
  const sprite = PIXI.Sprite.from(BLANK_CARD_ID);
  return sprite;
};

export default Card;
