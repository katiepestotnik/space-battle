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
  alienAttack.style.color = '#ff0a0a'
  alienAttack.innerHTML = `${name} attacking...`
  document.querySelector('.log').append(alienAttack)
  if (Math.random() <= accuracy) {
    const precise = document.createElement('p')
    precise.style.color = '#ff0a0a'
    precise.innerHTML = `${name} accuracy high, fire!`
    document.querySelector('.log').append(precise)
    enterprise.hull -= firepower
    const success = document.createElement('p')
    success.innerHTML = `After a successful attack by the ${name}, Enterprise's hull strength is at ${enterprise.hull} units.`
    document.querySelector('.log').append(success)
  } else {
    const miss = document.createElement('p')
    miss.style.color = 'red'
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
    name: 'Cardassians',
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
    message.style.color = '#6aff22'
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
const enemyImg = (src) => {
  const enemyImg = document.createElement('img')
  enemyImg.src = src
  document.querySelector('.enterprise-img').append(enemyImg)
}
const enemyAttack = (img, alien) => {
  showImg("https://dwgyu36up6iuz.cloudfront.net/heru80fdn/image/upload/c_fill,d_placeholder_wired.png,fl_progressive,g_face,h_1080,q_80,w_1920/v1469050573/wired_nasa-fact-checks-star-trek-s-starship-enterprise.jpg")
  enemyImg(img)
  while (enterprise.hull > 0) {
      while (alien.hull > 0 && enterprise.hull >0) {
        enterprise.attack(alien)
        if (alien.hull > 0) {
          alien.attack()
        }
        if (alien.hull <= 0) {
          document.querySelector('.winner').innerHTML = `The ${alien.name} ship has been destroyed, Enterprise is victorious!!`
          if (alien.name === 'Romulans') {
            document.querySelector('.romulans').remove()
          }
          if (alien.name === 'Cardassians') {
            document.querySelector('.cardassians').remove()
          }
          if (alien.name === 'Borg') {
            document.querySelector('.borg').remove()
          }
          if (alien.name === 'Klingons') {
            document.querySelector('.klingons').remove()
          }
          if (alien.name === 'Tholians') {
            document.querySelector('.tholians').remove()
          }
          if (alien.name === 'Breen') {
            document.querySelector('.breen').remove()
          }
          break
        }
        if (enterprise.hull <= 0) {
          const message = document.querySelector('.winner')
          message.innerHTML = `Enterprise detroyed!`
          message.style.color = '#ff0a0a'
          break
        }
      }
    if (alien.hull <= 0) break
  }

}
const romulanAttack = () => {
  enemyAttack('https://external-preview.redd.it/uFRXjhr1EFHL3zKQc5flwaGOwqb9gQbrF6uKbH2NiLM.jpg?auto=webp&s=514aa5a9ea54a3a0130dd87dbb764339a97c6e7d', aliens[0])
}
const cardassiansAttack = () => {
  enemyAttack('https://www.st-minutiae.com/articles/dominionwar/image_5-2.jpg', aliens[1])
}
const borgAttack = () => {
  enemyAttack('https://res.cloudinary.com/jerrick/image/upload/f_jpg,fl_progressive,q_auto,w_1024/ypoe7zw5tdfteycpa2jw.jpg', aliens[2])
}
const klingonsAttack = () => {
  enemyAttack('http://www.ditl.org/Images/D/D7General3.jpg', aliens[3])
}
const tholiansAttack = () => {
  enemyAttack('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn5VuhVFpAG4S7cU8Z54UVa4OL13byEyXwEw&usqp=CAU', aliens[4])
}
const breenAttack = () => {
  enemyAttack('https://pwimages-a.akamaihd.net/arc/8c/86/8c865588eb409d2eb4dbf1ccefd5d5b61480433664.jpg', aliens[5])
}
const quitGame = () => {
  document.querySelector('.message').innerHTML = `All hands, RETREAT! Engage warp 7`
  showImg('https://qph.cf2.quoracdn.net/main-qimg-fe15e77a9dea4f2973f6f5bb533e81f3-lq')
  document.querySelector('.log').innerHTML = ''
  setTimeout(() => {
    location.reload()
  }, 1000)
}

document.querySelector('.retreat').addEventListener('click', quitGame)
document.querySelector('.romulans').addEventListener('click', romulanAttack)
document.querySelector('.cardassians').addEventListener('click', cardassiansAttack)
document.querySelector('.borg').addEventListener('click', borgAttack)
document.querySelector('.klingons').addEventListener('click', klingonsAttack)
document.querySelector('.tholians').addEventListener('click', tholiansAttack)
document.querySelector('.breen').addEventListener('click', breenAttack)


