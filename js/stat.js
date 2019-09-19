var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var TEXT_HEIGHT = 20;
var BAR_WIDTH = 40;
var BETWEEN_BAR = 50;
var barHeight = CLOUD_HEIGHT - GAP - (TEXT_HEIGHT + GAP) * 3;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function(arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono'
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP * 2, CLOUD_Y + GAP + TEXT_HEIGHT);
  ctx.fillText('Список результатов:', CLOUD_X + GAP * 2, CLOUD_Y + GAP + TEXT_HEIGHT * 2);

  var players = ['Вы', 'Кекс', 'Катя', 'Игорь'];

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++)
  {
    ctx.fillStyle = '#000';
    ctx.fillText(players[i], CLOUD_X + BAR_WIDTH + (BAR_WIDTH + BETWEEN_BAR) * i, CLOUD_HEIGHT - GAP);
    ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    ctx.fillRect(CLOUD_X + BAR_WIDTH + (BAR_WIDTH + BETWEEN_BAR) * i, CLOUD_HEIGHT - GAP - TEXT_HEIGHT - barHeight * times[i] / maxTime, BAR_WIDTH, barHeight * times[i] / maxTime);

  };

};
