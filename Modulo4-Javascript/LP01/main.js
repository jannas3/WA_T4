const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

const storyText = 'Era um dia perfeito para uma aventura, então :insertx: ligou sua moto. Ao chegar em :inserty:, algo inesperado aconteceu — a moto de repente :insertz:. Bob viu tudo, mas não ficou surpreso. Foi uma viagem inesquecível.';

const insertX = ['uma Ducati', 'uma Harley-Davidson', 'uma Yamaha'];
const insertY = ['a serra', 'a rodovia', 'as ruas da cidade'];
const insertZ = ['empinou', 'derrapou numa curva', 'acelerou por um túnel'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText; 
  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);
  newStory = newStory.replace(':insertx:', xItem);
  newStory = newStory.replace(':inserty:', yItem);
  newStory = newStory.replace(':insertz:', zItem);
  if (customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Bob', name);
  }

  if (document.getElementById("uk").checked) {
    const weight = Math.round(300 * 0.0714286) + ' stone';
    const temperature = Math.round((94 - 32) * 5 / 9) + ' centigrade';
    newStory = newStory.replace('300 libras', weight);
    newStory = newStory.replace('94 fahrenheit', temperature);
  }
  story.textContent = newStory;
  story.style.visibility = 'visible';
}
