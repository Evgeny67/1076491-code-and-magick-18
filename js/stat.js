var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var TEXT_HEIGHT = 20;
var BAR_WIDTH = 40;
var BETWEEN_BAR = 50;
var barHeight = CLOUD_HEIGHT - GAP - (TEXT_HEIGHT + GAP) * 4;
var OFFSET_X = CLOUD_X + GAP * 2;
var OFFSET_Y = CLOUD_Y + GAP;
var offsetRight = CLOUD_X + BAR_WIDTH;
var indentWithColumn = BAR_WIDTH + BETWEEN_BAR;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);

};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  arr.forEach(function (item) {

    if (item > maxElement) {
      maxElement = item;
    };
  });

  return maxElement;

};

function getRandomColor() {
  var color = 'rgba(0, 0, ' + Math.round(Math.random() * 255) + ', 1)';

  return color;

};

var renderCloudHead = function (ctx) {
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'handing';
  ctx.fillText('Ура вы победили!', OFFSET_X, OFFSET_Y + TEXT_HEIGHT);
  ctx.fillText('Список результатов:', OFFSET_X, OFFSET_Y + TEXT_HEIGHT * 2);

};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  renderCloudHead(ctx);

  var players = ['Вы', 'Кекс', 'Катя', 'Игорь'];

  var maxTime = getMaxElement(times);

  players.forEach(function (players, i) {
    ctx.fillStyle = '#000';
    ctx.fillText(players, offsetRight + indentWithColumn * i, CLOUD_HEIGHT - GAP);
    ctx.fillText(Math.round(times[i]), offsetRight + indentWithColumn * i, CLOUD_HEIGHT - GAP * 2 - TEXT_HEIGHT - barHeight * times[i] / maxTime);

    if (players === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = getRandomColor();
    };

    ctx.fillRect(offsetRight + indentWithColumn * i, CLOUD_HEIGHT - GAP - TEXT_HEIGHT - barHeight * times[i] / maxTime, BAR_WIDTH, barHeight * times[i] / maxTime);

  });

};
