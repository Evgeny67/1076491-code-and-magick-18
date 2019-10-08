function getRandomCoat() {
  var coat = Math.round(Math.random() * coatColor.length);

  return coat;
}

function getRandomEyes() {
  var eyes = Math.round(Math.random() * eyesColor.length);

  return eyes;
}

function getRandomName() {
  var name = names[Math.round(Math.random() * names.length)];

  return name;
}

function getRandomSurname() {
  var surname = surnames[Math.round(Math.random() * surnames.length)];

  return surname;
}

function generateWizard() {
  var player = getRandomName() + ' ' + getRandomSurname();

  return player;
}
