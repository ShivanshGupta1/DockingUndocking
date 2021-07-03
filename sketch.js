var iss, bg, spCraft, spCraftR, spCraftL, spCraftB;
var issSprite, spacecraftSprite;
var hasDocked = false;
function preload() {
  iss = loadImage("Docking-undocking/iss.png");
  bg = loadImage("Docking-undocking/spacebg.jpg");
  spCraft = loadImage("Docking-undocking/spacecraft1.png");
  spCraftR = loadImage("Docking-undocking/spacecraft4.png");
  spCraftL = loadImage("Docking-undocking/spacecraft3.png");
  spCraftB = loadImage("Docking-undocking/spacecraft2.png");
}
function setup() {
  createCanvas(800, 400);

  issSprite = createSprite(400, 200, 50, 50);
  issSprite.addImage(iss);
  issSprite.scale = 0.75;
  spacecraftSprite = createSprite(400, 300, 50, 50);
  spacecraftSprite.addImage(spCraft);
  spacecraftSprite.scale = 0.25;
  spacecraftSprite.x = Math.round(random(100, 700));
}

function draw() {
  background(bg);
  drawSprites();
  textSize(20);

  if (!hasDocked) {
    if (keyIsDown(LEFT_ARROW)) {
      spacecraftSprite.addImage(spCraftL);
      spacecraftSprite.x -= 2;
    } else if (keyIsDown(RIGHT_ARROW)) {
      spacecraftSprite.addImage(spCraftR);
      spacecraftSprite.x += 2;
    } else if (keyIsDown(DOWN_ARROW)) {
      spacecraftSprite.addImage(spCraftB);
    } else if (keyIsDown(UP_ARROW)) {
      spacecraftSprite.addImage(spCraftB);
      spacecraftSprite.y -= 2;
    } else {
      spacecraftSprite.addImage(spCraft);
    }
    if (spacecraftSprite.x >= 347 && spacecraftSprite.y <= 280) {
      hasDocked = true;
    }
  } else {
    spacecraftSprite.addImage(spCraft)
    fill("white");
    text("Docking Successfull", 380, 380);
  }
}
