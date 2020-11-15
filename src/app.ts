import * as PIXI from 'pixi.js';
import Card from './games/klondike/components/card';
import { BLANK_CARD_ID } from './const';

const app = new PIXI.Application({
  width: window.innerWidth,
  height: window.innerHeight,
  resolution: window.devicePixelRatio,
});
// Create canvas tag in the body
document.body.appendChild(app.view);

app.loader.add(BLANK_CARD_ID, './assets/card_blank.png');

app.loader.add('logo', './assets/ez_logo.png');
app.loader.load(() => {
  const sprite = PIXI.Sprite.from('logo');
  const card_0 = Card();
  sprite.anchor.set(0.5);
  app.stage.addChild(sprite);

  app.stage.addChild(card_0);

  card_0.x = app.screen.width * 0.25;
  card_0.y = app.screen.width * 0.25;

  sprite.x = app.screen.width * 0.5;
  sprite.y = app.screen.height * 0.5;
  sprite.height = sprite.height * 0.2;
  sprite.width = sprite.width * 0.2;

  app.ticker.add((delta) => {
    sprite.rotation -= 0.02 * delta;
  });
});
