const Players = require('./players');


class Rouge extends Player {
    constructor(name, hp, strength) {
        super(name)

        this.hp = hp
        this.strength = strength
        this.role = 'rouge';


        // need to eventually add functions that will hold the moves for each subclass


    }
}

module.exports = Rouge;