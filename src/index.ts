import * as PIXI from 'pixi.js';

const app = new PIXI.Application({
    width: window.innerWidth,
    height: window.innerHeight,
    resolution: window.devicePixelRatio,
  });
  // Create canvas tag in the body
  document.body.appendChild(app.view);
  
  app.loader.add('logo', './assets/ez_logo.png');
  app.loader.load(() => {
    const sprite = PIXI.Sprite.from('logo');
    sprite.anchor.set(0.5);
    app.stage.addChild(sprite);
  
    sprite.x = app.screen.width * 0.5;
    sprite.y = app.screen.height * 0.5;
    sprite.height = sprite.height * 0.5;
    sprite.width = sprite.width * 0.5;
  
    app.ticker.add((delta) => {
      sprite.rotation -= 0.02 * delta;
    });
  });