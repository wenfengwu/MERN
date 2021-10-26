class Card{
    constructor(name, cost){
        this.name = name;
        this.const = cost;
    }
}

class Unit extends Card{
    constructor(name, cost, power, resilience){
        super(name, cost);
        this.power = power;
        this.resilience = resilience;
    }
    
    attack(target){
        if(target instanceof Unit){
            target.resilience -= this.power
        }
        else{
            throw new Error("Target must be a unit!")
        }
    }
}

class Effects extends Card{
    constructor(name, cost, text, stat, magnitude){
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }
    play(target){
        if(target instanceof Unit){
            target.cost -= this.cost;
            if(this.stat == 'power'){
                target.power += this.magnitude;
            }
            else if(this.stat == 'resilience'){
                target.resilience += this.magnitude;
            }
        }
        else{
            throw new Error("Target must be a unit!")
        }
    }
}


// 1.
const RedBeltNinja = new Unit('Red Belt Ninja', 3, 3, 4);

const hardAlgo = new Effects('Hard Algorithm', 2, 'increase target\'s resilience by 3', 'resilience', 3);
hardAlgo.play(RedBeltNinja);
// 2.
const BalckBeltNinja = new Unit('Black Belt Ninja', 4,5,4);
const Unhandled = new Effects('Unhandled Promise Rejection', 1, 'reduce target\'s resilience by 2', 'resilience', -2);
Unhandled.play(RedBeltNinja);
// 3.
const pairProgramming = new Effects('Unhandled Promise Rejection', 3, 'increase target\'s power by 2', 'power', +2);
RedBeltNinja.attack(BalckBeltNinja);







