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
  const alienAttack = document.createElement('p')
  alienAttack.innerHTML = `${name} attacking...`
  document.querySelector('.log').append(alienAttack)
  console.log(accuracy)
  if (Math.random() <= accuracy) {
    const precise = document.createElement('p')
    precise.innerHTML = `${name} accuracy high, fire!`
    document.querySelector('.log').append(precise)
    enterprise.hull -= firepower
    const success = document.createElement('p')
    success.innerHTML = `After a successful attack by the ${name}, Enterprise's hull strength is at ${enterprise.hull} units.`
    document.querySelector('.log').append(success)
  } else {
    const miss = document.createElement('p')
    miss.innerHTML = `${name} miss attack!`
    document.querySelector('.log').append(miss)
  }
}

const aliens = [
  (ship1 = {
    name: 'Romulans',
    hull: randomGenerator(5, 10),
    firepower: randomGenerator(2, 4),
    accuracy: randomAccuracy(.6, .8),
    attack: function () {
      alienAttack(this.name, this.accuracy, this.firepower)
    },
  }),
  (ship2 = {
    name: 'Cardasians',
    hull: randomGenerator(3, 6),
    firepower: randomGenerator(2, 4),
    accuracy: randomAccuracy(.6, .8),
    attack: function () {
      alienAttack(this.name, this.accuracy, this.firepower)
    },
  }),
  (ship3 = {
    name: 'Borg',
    hull: randomGenerator(6, 15),
    firepower: randomGenerator(2, 4),
    accuracy: randomAccuracy(.6, .8),
    attack: function () {
      alienAttack(this.name, this.accuracy, this.firepower)
    },
  }),
  (ship4 = {
    name: 'Klingons',
    hull: randomGenerator(3, 11),
    firepower: randomGenerator(2, 4),
    accuracy: randomAccuracy(.6, .8),
    attack: function () {
      alienAttack(this.name, this.accuracy, this.firepower)
    },
  }),
  (ship5 = {
    name: 'Tholians',
    hull: randomGenerator(4, 8),
    firepower: randomGenerator(2, 4),
    accuracy: randomAccuracy(.6, .8),
    attack: function () {
      alienAttack(this.name, this.accuracy, this.firepower)
    },
  }),
  (ship6 = {
    name: 'Breen',
    hull: randomGenerator(3, 6),
    firepower: randomGenerator(2, 4),
    accuracy: randomAccuracy(.6, .8),
    attack: function () {
      alienAttack(this.name, this.accuracy, this.firepower)
    },
  }),
]
const enterprise = {
    hull: 20,
    firepower: 5,
    accuracy: 7,
  attack: function (alien) {
    const message = document.createElement('p')
    message.innerHTML = `Enterprise attacking the ${alien.name} with ${this.firepower} phasers and the ${alien.name} ship has a hull strength of ${alien.hull}.`
    document.querySelector('.log').append(message)
    alien.hull -= this.firepower
    if (alien.hull <= 0) {
      const destroyed = document.createElement('p')
      destroyed.innerHTML = `The ${alien.name} have been destroyed. Their hull strength is ${alien.hull} units.`
      document.querySelector('.log').append(destroyed)
    } else {
      const survived = document.createElement('p')
      survived.innerHTML = `After Enterprise attacked, the ${alien.name} hull strength levels are now at ${alien.hull} units.`
      document.querySelector('.log').append(survived)
    }
  },
};
const showImg = (src) => {
  const enterpriseImg = document.createElement('img')
  enterpriseImg.src = src
  document.querySelector('.enterprise-img').innerHTML = ''
  document.querySelector('.enterprise-img').append(enterpriseImg)
}
const playGame = () => {
  showImg("https://dwgyu36up6iuz.cloudfront.net/heru80fdn/image/upload/c_fill,d_placeholder_wired.png,fl_progressive,g_face,h_1080,q_80,w_1920/v1469050573/wired_nasa-fact-checks-star-trek-s-starship-enterprise.jpg")
  while (enterprise.hull > 0) {
    aliens.forEach((alien, idx) => {
      while (alien.hull > 0 && enterprise.hull >0) {
        enterprise.attack(alien)
        if (alien.hull > 0) {
          alien.attack()
        }
        if (alien.hull <= 0 && idx === 5) {
          document.querySelector('.winner').innerHTML = `All enemy ships destroyed, Enterprise is victorious!!`
          break
        }
        if (enterprise.hull <= 0) {
          const message = document.querySelector('.winner')
          message.innerHTML = `Enterprise detroyed!`
          message.style.color = '#ff0a0a'
          break
        }
      }
    })
    if (aliens[5].hull <= 0) break
  }
}
const quitGame = () => {
  document.querySelector('.message').innerHTML = `All hands, RETREAT! Engage warp 7`
  showImg('https://qph.cf2.quoracdn.net/main-qimg-fe15e77a9dea4f2973f6f5bb533e81f3-lq')
  document.querySelector('.log').innerHTML = ''
  setTimeout(() => {
    location.reload()
  }, 2000)
}

document.querySelector('.attacker').addEventListener('click', playGame)
document.querySelector('.retreat').addEventListener('click', quitGame)


