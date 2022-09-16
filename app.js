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
const alienAttack = (name, accuracy, firepower) => {
  console.log(`${name} attacking...`)
  if (Math.random() < accuracy) {
    console.log(`${name} accuracy high, attack!`)
    enterprise.hull -= firepower
    console.log(`After successful ${name}, Enterprise is at ${enterprise.hull} strength.`)
  } else {
    console.log(`${name} miss attack!`)
  }
}

const aliens = [
  (ship1 = {
    name: 'Romulans',
    hull: randomGenerator(5, 10),
    firepower: randomGenerator(2, 4),
    accuracy: randomAccuracy(0.6, 0.8),
    attack: function () {
      alienAttack(this.name, this.accuracy, this.firepower)
    },
  }),
  (ship2 = {
    name: 'Cardasians',
    hull: randomGenerator(3, 6),
    firepower: randomGenerator(2, 4),
    accuracy: randomAccuracy(0.6, 0.8),
    attack: function () {
      alienAttack(this.name)
    },
  }),
  (ship3 = {
    name: 'Borg',
    hull: randomGenerator(6, 15),
    firepower: randomGenerator(2, 4),
    accuracy: randomAccuracy(0.6, 0.8),
    attack: function () {
      alienAttack(this.name)
    },
  }),
  (ship4 = {
    name: 'Klingons',
    hull: randomGenerator(3, 11),
    firepower: randomGenerator(2, 4),
    accuracy: randomAccuracy(.6, .8),
    attack: function () {
      alienAttack(this.name)
    },
  }),
  (ship5 = {
    name: 'Tholians',
    hull: randomGenerator(4, 8),
    firepower: randomGenerator(2, 4),
    accuracy: randomAccuracy(.6, .8),
    attack: function () {
      alienAttack(this.name)
    },
  }),
  (ship6 = {
    name: 'Breen',
    hull: randomGenerator(3, 6),
    firepower: randomGenerator(2, 4),
    accuracy: randomAccuracy(.6, .8),
    attack: function () {
      alienAttack(this.name)
    },
  }),
]
const enterprise = {
    hull: 20,
    firepower: 5,
    accuracy: 7,
    attack: function (alien) {
        console.log(`Enterprise attacking the ${alien.name} with ${this.firepower} phasers and the ${alien.name} ship as a hull strength of ${alien.hull}`)
        alien.hull -= this.firepower
        if (alien.hull <= 0) {
          console.log(`The ${alien.name} are destroyed. Their hull strength is ${alien.hull}`)
        } else {
          console.log(`Enterprise attacked with ${this.firepower} phasers. The ${alien.name} shield levels are now at ${alien.hull} strength.`)
        }
    },
};
const playGame = () => {
  while (enterprise.hull > 0) {
    aliens.forEach((alien, idx) => {
      while (alien.hull > 0) {
        enterprise.attack(alien)
        if (alien.hull > 0) {
          alien.attack()
        }
        if (alien.hull <= 0 && idx === 5) {
          console.log(`All alien ships destroyed, Enterprise is victorious!!`)
          break
        }
      }
    })
    if(aliens[5].hull <= 0)break
  }
}
playGame()


