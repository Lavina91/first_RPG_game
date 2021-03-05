const   Players = require('./players')



class Warrior extends Player {
    constructor(name, hp, strength) {
        super(name)

        this.hp = hp
        this.strength = strength
        this.role = 'warrior';


        // need to eventually add functions that will hold the moves for each subclass


    }
}

module.exports = Warrior;