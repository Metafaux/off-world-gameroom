import * as PIXI from 'pixi.js';

const KlondikeApp = () => {
  const container = new PIXI.Container();
  const sprite = new PIXI.Sprite();
  container.addChild(sprite);
  return container;
}

export default KlondikeApp;