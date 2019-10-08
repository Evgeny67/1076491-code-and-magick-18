'use strict';

// Шаблон #similar-wizard-template //
var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристов', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольская', 'Нионго', 'Ирвинг'];
var coatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];

var WIZARD_NAMES = [];

for (var i = 0; i < 4; i++) {
  var value = generateWizard();
  WIZARD_NAMES[i] = value;
}

WIZARD_NAMES.forEach(function() {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = WIZARD_NAMES;
  wizardElement.querySelector('.wizard-coat').style.fill = coatColor[getRandomCoat()];
  wizardElement.querySelector('.wizard-eyes').style.fill = eyesColor[getRandomEyes()];
  similarListElement.appendChild(wizardElement);
});
