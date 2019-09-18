var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var TEXT_HEIGHT = 20;
var BAR_WIDTH = 40;
var BETWEEN_BAR = 50;
var barHeight = CLOUD_HEIGHT - (CLOUD_Y + GAP + (TEXT_HEIGHT + GAP) * 3);

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono'
  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

  ctx.fillStyle = '#000';
  ctx.fillText('Вы', CLOUD_X + BAR_WIDTH, CLOUD_HEIGHT - GAP);
  ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  ctx.fillRect(CLOUD_X + BAR_WIDTH, 140, BAR_WIDTH, 100);

  ctx.fillStyle = '#000';
  ctx.fillText('Кекс', CLOUD_X + BAR_WIDTH + (BAR_WIDTH + BETWEEN_BAR) * 1, CLOUD_HEIGHT - GAP);
  ctx.fillStyle = 'hsl(240,100%,25%)';
  ctx.fillRect(CLOUD_X + BAR_WIDTH + (BAR_WIDTH + BETWEEN_BAR) * 1, 90, BAR_WIDTH, 150);

  ctx.fillStyle = '#000';
  ctx.fillText('Катя', CLOUD_X + BAR_WIDTH + (BAR_WIDTH + BETWEEN_BAR) * 2, CLOUD_HEIGHT - GAP);
  ctx.fillStyle = 'hsl(240,100%,90%)';
  ctx.fillRect(CLOUD_X + BAR_WIDTH + (BAR_WIDTH + BETWEEN_BAR) * 2, 195, BAR_WIDTH, 45);

  ctx.fillStyle = '#000';
  ctx.fillText('Игорь', CLOUD_X + BAR_WIDTH + (BAR_WIDTH + BETWEEN_BAR) * 3, CLOUD_HEIGHT - GAP);
  ctx.fillStyle = 'hsl(240,100%,10%)';
  ctx.fillRect(CLOUD_X + BAR_WIDTH + (BAR_WIDTH + BETWEEN_BAR) * 3, 190, BAR_WIDTH, 50);
};
