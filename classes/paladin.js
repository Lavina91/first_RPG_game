const Players = require('./players');
// need to add HP, strength, all moves that come with Paladin sub class 

class Paladin extends Player {
    constructor(name, hp, strength) {
        super(name)

        this.hp = hp
        this.strength = strength
        this.role = 'paladin';


        // need to eventually add functions that will hold the moves for each subclass


    }
}


module.exports = Paladin;