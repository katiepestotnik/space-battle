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
const aliens = [
  (ship1 = {
    hull: randomGenerator(3, 6),
    firepower: randomGenerator(2, 4),
    accuracy: randomAccuracy(0.6, 0.8),
    attack: function () {
      console.log('Alien ship attacking...')
      if (Math.random() < this.accuracy) {
        console.log(`Alien ship accuracy high, attack!`)
        enterprise.hull -= this.firepower
        console.log(`After successful alien attack, Enterprise is at ${enterprise.hull} strength.`)
      } else {
        console.log('Alien ship misses attack!')
      }
    },
  }),
  (ship2 = {
    hull: randomGenerator(3, 6),
    firepower: randomGenerator(2, 4),
    accuracy: randomAccuracy(0.6, 0.8),
    attack: function () {
      console.log('Alien ship attacking...')
      if (Math.random() < this.accuracy) {
        console.log(`Alien ship accuracy high, attack!`)
        enterprise.hull -= this.firepower
        console.log(`After successful alien attack, Enterprise is at ${enterprise.hull} strength.`)
      } else {
        console.log('Alien ship misses attack!')
      }
    },
  }),
  (ship3 = {
    hull: randomGenerator(3, 6),
    firepower: randomGenerator(2, 4),
    accuracy: randomAccuracy(0.6, 0.8),
    attack: function () {
      console.log('Alien ship attacking...')
      if (Math.random() < this.accuracy) {
        console.log(`Alien ship accuracy high, attack!`)
        enterprise.hull -= this.firepower
        console.log(`After successful alien attack, Enterprise is at ${enterprise.hull} strength.`)
      } else {
        console.log('Alien ship misses attack!')
      }
    },
  }),
  (ship4 = {
    hull: randomGenerator(3, 6),
    firepower: randomGenerator(2, 4),
    accuracy: randomAccuracy(.6, .8),
    attack: function () {
      console.log('Alien ship attacking...')
      if (Math.random() < this.accuracy) {
        console.log(`Alien ship accuracy high, attack!`)
        enterprise.hull -= this.firepower
        console.log(`After successful alien attack, Enterprise is at ${enterprise.hull} strength.`)
      } else {
        console.log('Alien ship misses attack!')
      }
    },
  }),
  (ship5 = {
    hull: randomGenerator(3, 6),
    firepower: randomGenerator(2, 4),
    accuracy: randomAccuracy(.6, .8),
    attack: function () {
      console.log('Alien ship attacking...')
      if (Math.random() < this.accuracy) {
        console.log(`Alien ship accuracy high, attack!`)
        enterprise.hull -= this.firepower
        console.log(`After successful alien attack, Enterprise is at ${enterprise.hull} strength.`)
      } else {
        console.log('Alien ship misses attack!')
      }
    },
  }),
  (ship6 = {
    hull: randomGenerator(3, 6),
    firepower: randomGenerator(2, 4),
    accuracy: randomAccuracy(.6, .8),
    attack: function () {
      console.log('Alien ship attacking...')
      if (Math.random() < this.accuracy) {
        console.log(`Alien ship accuracy high, attack!`)
        enterprise.hull -= this.firepower
        console.log(`After successful alien attack, Enterprise is at ${enterprise.hull} strength.`)
      } else {
        console.log('Alien ship misses attack!')
      }
    },
  }),
]
const enterprise = {
    hull: 20,
    firepower: 5,
    accuracy: 7,
    attack: function (alien) {
        console.log('Enterprise attacking...')
        alien.hull -= this.firepower
        if (alien.hull <= 0) {
          console.log('Alien ship destroyed!')
        } else {
          console.log(`Enterprise attacked with ${this.firepower} phasers. The alien's shield levels are now at ${alien.hull} strength.`)
        }
    },
};

const playGame = () => {
  while (enterprise.hull > 0) {
    aliens.forEach((alien) => {
      while (alien.hull > 0) {
        enterprise.attack(alien)
        alien.attack()
        if (enterprise.hull <= 0) {
          console.log('Enterprise destroyed')
          break
         } 
      }

    })
  }
}
playGame()


