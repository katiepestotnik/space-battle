//alien ship randoms
//hull between 3 and 6
//firepower between 2 and 4
// accuracy between .6 and .8
const randomGenerator = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1) + min)
};
const randomAccuracy = (min, max) => {
  return parseFloat((Math.random() * (max - min) + min).toFixed(1))
};
const enterprise = {
  hull: 20,
  firepower: 5,
  accuracy: 7,
  attack: function () {},
};

const aliens = [
  (ship1 = {
    hull: randomGenerator(3, 6),
    firepower: randomGenerator(2, 4),
    accuracy: randomAccuracy(0.6, 0.8),
    attack: function () {},
  }),
  (ship2 = {
    hull: randomGenerator(3, 6),
    firepower: randomGenerator(2, 4),
    accuracy: randomAccuracy(0.6, 0.8),
    attack: function () {},
  }),
  (ship3 = {
    hull: randomGenerator(3, 6),
    firepower: randomGenerator(2, 4),
    accuracy: randomAccuracy(0.6, 0.8),
    attack: function () {},
  }),
  (ship4 = {
    hull: randomGenerator(3, 6),
    firepower: randomGenerator(2, 4),
    accuracy: randomAccuracy(.6, .8),
    attack: function () {},
  }),
  (ship5 = {
    hull: randomGenerator(3, 6),
    firepower: randomGenerator(2, 4),
    accuracy: randomAccuracy(.6, .8),
    attack: function () {},
  }),
  (ship6 = {
    hull: randomGenerator(3, 6),
    firepower: randomGenerator(2, 4),
    accuracy: randomAccuracy(.6, .8),
    attack: function () {},
  }),
]

const playGame = () => {}

aliens.forEach((ship) => {

})
