const Players = require('./players')


class Magician extends Player {
    constructor(name, hp, mp, strength) {
        super(name)

        this.hp = hp
        this.mp = mp
        this.strength = strength
        this.role = 'magician';


        // need to eventually add functions that will hold the moves for each subclass


    }
}

module.export = Magician;