'use strict';

// Шаблон #similar-wizard-template //
var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
.content.querySelector('.setup-similar-item');
var WIZARD_NAMES = ['Иван да Марья', 'Мария Мирабелла', 'Кристов Вальц', 'Юлия Топольская'];

var wizards = [
  {
    name: WIZARD_NAMES[0],
    coatColor: 'rgb(101, 137, 164)',
    eyesColor: 'black'
  },
  {
    name: WIZARD_NAMES[1],
    coatColor: 'rgb(241, 43, 107)',
    eyesColor: 'red'
  },
  {
    name: WIZARD_NAMES[2],
    coatColor: 'rgb(146, 100, 161)',
    eyesColor: 'blue'
  },
  {
    name: WIZARD_NAMES[3],
    coatColor: 'rgb(56, 159, 117)',
    eyesColor: 'green'
  }
];
for (var i = 0; i < WIZARD_NAMES.length; i++) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = WIZARD_NAMES[i];
  wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;
  similarListElement.appendChild(wizardElement);
}

// Создание нового DOM элемента //
// var user = document.querySelector('.setup-similar-list');
//
// var firstElementHTML = '<div class="setup-similar-item">Иван да Марья</div>';
// var secondElementHTML = '<div class="setup-similar-item">Мария Мирабелла</div>';
// var thirdElementHTML = '<div class="setup-similar-item">Кристов Вальц</div>';
// var lastElementHTML = '<div class="setup-similar-item">Юлия Топольская</div>';
//
// user.insertAdjacentHTML('beforeend', firstElementHTML);
// user.insertAdjacentHTML('beforeend', secondElementHTML);
// user.insertAdjacentHTML('beforeend', thirdElementHTML);
// user.insertAdjacentHTML('beforeend', lastElementHTML);
