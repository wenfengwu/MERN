class Ninja{
    constructor(name, health = 100){
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3
    }

    sayName(){
        console.log(`Ninja: ${this.name}`);
    }
    
    showStats() {
        console.log(`Ninja name: ${this.name}, strength: ${this.strength}, speed: ${this.speed}, health: ${this.health}`);
    }
    drinkSake() {
        this.health += 10;
    }

}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
