class Ninja{
    constructor(name, health = 100, speed = 3, strength = 4){
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
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


class Sensei extends Ninja{
    constructor(name){
        super(name, 200, 10, 10);
        this.wisdom = 10;
    }
    speakWisdom(){
        console.log("What one programmer can do in one month, two programmers can do in two months.")
    }
}


// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.drinkSake();
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"
