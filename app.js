const heroes = [
    {
        name: 'Slate Slabrock',
        type: 'dwarf',
        damage: 5,
        health: 100
    },
    {
        name: 'Flint Ironstag',
        type: 'elf',
        damage: 10,
        health: 50
    }
]

const boss = {
    health: 100,
    maxHealth: 100,
    damage: 5,
    level: 1
}

let currentGold = 0
let reward = 20

drawStats()


setInterval(attackHeros, 5000)

function attackHeros() {
    if(boss.health > 0){
        let damageDone = boss.damage
        console.log(damageDone)
        heroes.forEach(hero => {
            hero.health -= damageDone
        })
    }

    drawStats()
}

function attackBoss() {
    let damage = heroes[0].damage + heroes[1].damage
    console.log(damage)
    boss.health -= damage
    console.log(boss.health)
    if(boss.health <= 0){
        boss.health = 0
    }
    drawStats()
}


function drawStats() {

let bossHealth = document.getElementById("bossHP")
console.log(bossHealth)
bossHealth.innerText = boss.health

let bossLevel = document.getElementById("boss-level")
bossLevel.innerText = boss.level

    if(heroes[0].health >= 0) {
        let hpDraw = document.getElementById("playerHpOne")
        hpDraw.innerText = heroes[0].health
    }
    if(heroes[1].health >= 0) {
        let hpDrawTwo = document.getElementById("playerHpTwo")
        hpDrawTwo.innerText = heroes[1].health
    }
    if(boss.health == 0){
        document.getElementById("next-level").style.display = 'flex'
        document.getElementById("boss-man").style.display = 'none'

    }
}



function levelUpBoss(){
    if(boss.health == 0){
        boss.health = 150
        boss.damage = 10
        boss.level = 2
        currentGold = 20
    }
    document.getElementById("boss-man").style.display = 'flex'
    document.getElementById("next-level").style.display = 'none'
    drawStats()
}