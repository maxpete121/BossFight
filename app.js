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

drawStats()

function attackHeros() {
    let damageDone = boss.damage
    console.log(damageDone)
    heroes.forEach(hero => {
        hero.health -= damageDone

    })
    drawStats()
}

function attackBoss() {
    let damage = heroes[0].damage + heroes[1].damage
    console.log(damage)
    boss.health -= damage
    console.log(boss.health)
}

function drawStats() {
    if(boss.health >= 0){
        
    }
    if(heroes[0].health >= 0) {
        let hpDraw = document.getElementById("playerHpOne")
        hpDraw.innerText = heroes[0].health
    }
    if(heroes[1].health >= 0) {
        let hpDrawTwo = document.getElementById("playerHpTwo")
        hpDrawTwo.innerText = heroes[1].health
    }

}