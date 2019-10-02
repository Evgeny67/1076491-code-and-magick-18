'use strict';

// Шаблон #similar-wizard-template //
var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var WIZARD_NAMES = ['Иван да Марья', 'Хуан Себастьян Верон', 'Мария Мирабелла', 'Кристов Вальц', 'Виктор Онопко', 'Юлия Топольская', 'Люпита Нионго', 'Вашингтон Ирвинг'];

function getRandomNames() {
  var name = Math.round(Math.random() * WIZARD_NAMES.length);

  return name;
}

function getRandomColor() {
  var color = 'rgb(' + Math.round(Math.random() * 255) + ', ' + Math.round(Math.random() * 255) + ', ' + Math.round(Math.random() * 255) + ')';

  return color;
}

var wizards = [
  {
    coatColor: getRandomColor(),
    eyesColor: getRandomColor()
  },
  {
    coatColor: getRandomColor(),
    eyesColor: getRandomColor()
  },
  {
    coatColor: getRandomColor(),
    eyesColor: getRandomColor()
  },
  {
    coatColor: getRandomColor(),
    eyesColor: getRandomColor()
  }
];

for (var i = 0; i < WIZARD_NAMES.length; i++) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = WIZARD_NAMES[getRandomNames()];
  wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;
  similarListElement.appendChild(wizardElement);
}
