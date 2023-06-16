// Soldier
class Soldier {
    constructor(health, strength) {

        this.health = health;
        this.strength = strength;

    }
    attack() {
        return this.strength;
    }

    receiveDamage(theDamage) {

        this.health -= theDamage;

    }

}

// Viking
class Viking extends Soldier {

    constructor(name, health, strength) {

        super(health, strength);
        this.name = name;
    }

    receiveDamage(theDamage) {

        this.health -= theDamage;

        if (this.health > 0) {
            return `${this.name} has received ${theDamage} points of damage`;
        }
        else {
            return `${this.name} has died in act of combat`;
        }

    }

    battleCry() {
        return `Odin Owns You All!`
    }
}

// Saxon

class Saxon extends Soldier {

    receiveDamage(theDamage) {
        this.health -= theDamage;

        if (this.health > 0) {
            return `A Saxon has received ${theDamage} points of damage`;
        }

        else {
            return `A Saxon has died in combat`;
        }
    }
}

// War
class War {

    vikingArmy = [];
    saxonArmy = [];


    addViking(vicking) {
        this.vikingArmy.push(vicking);
    }

    addSaxon(saxon) {
        this.saxonArmy.push(saxon);
    }

    vikingAttack() {
        return this.genericAttack(this.vikingArmy, this.saxonArmy);

        // const saxon = this.selectRandomFromArray(this.saxonArmy);
        // const viking = this.selectRandomFromArray(this.vikingArmy);

        // const result = saxon.receiveDamage(viking.strength);

        // if (saxon.health <= 0) {
        //     const indexToRemove = this.saxonArmy.indexOf(saxon);
        //     this.saxonArmy.splice(indexToRemove, 1);
        // }

        // return result;
    }
    saxonAttack() {
        return this.genericAttack(this.saxonArmy, this.vikingArmy);

        // const saxon = this.selectRandomFromArray(this.saxonArmy);
        // const viking = this.selectRandomFromArray(this.vikingArmy);

        // const result = viking.receiveDamage(saxon.strength);

        // if (viking.health <= 0) {
        //     const indexToRemove = this.vikingArmy.indexOf(viking);
        //     this.vikingArmy.splice(indexToRemove, 1);
        // }

        // return result;
    }

    genericAttack(attackerArmy, defenderArmy) {
        const attacker = this.selectRandomFromArray(attackerArmy);
        const defender = this.selectRandomFromArray(defenderArmy);

        const result = defender.receiveDamage(attacker.strength);

        if (defender.health <= 0) {
            const indexToRemove = defenderArmy.indexOf(defender);
            defenderArmy.splice(indexToRemove, 1);
        }

        return result;
    }

    showStatus() {

        if (this.saxonArmy.length == 0) {
            return "Vikings have won the war of the century!"
        }
        else if (this.vikingArmy.length == 0) {
            return "Saxons have fought for their lives and survived another day..."
        }
        else {
            return "Vikings and Saxons are still in the thick of battle."
        }
    }

    selectRandomFromArray(array) {
        const randomIndex = Math.floor(Math.random() * array.length);
        return array[randomIndex];
    }
}