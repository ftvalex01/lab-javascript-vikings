// Soldier
class Soldier {
  constructor(health,strength){
    this.health = health;
    this.strength = strength;
  }
  attack(){
    return this.strength
  }
  receiveDamage(damage){
  this.health = (this.health - damage)
  }
}

// Viking
class Viking extends Soldier {
  constructor(name,health,strength){
    super(health,strength);
    this.name = name;
    
  }
  receiveDamage(damage){
    super.receiveDamage(damage)
    if(this.health > 0){
      return (`${this.name} has received ${damage} points of damage`)
    }else if(this.health === 0){
      return (`${this.name} has died in act of combat`)
    }
  }
  battleCry(){
    return 'Odin Owns You All!'
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(health,strength){
    super(health,strength);
  }
  attack(){
    return this.strength
  }
  receiveDamage(damage){
    super.receiveDamage(damage)
    if(this.health > 0){
      return (`A Saxon has received ${damage} points of damage`)
    }else{
      return (`A Saxon has died in combat`)
    }
  }
}

// War
class War {
  constructor(){
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  addViking(Viking){
    this.vikingArmy.push(Viking);
  }
  addSaxon(Saxon){
    this.saxonArmy.push(Saxon);
  }
  vikingAttack(){
   const randomViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
   const randomSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
   const damageReceived = randomViking.strength; 
   const attackResult = randomSaxon.receiveDamage(damageReceived)
   if(randomSaxon.health <= 0){this.saxonArmy.splice(this.saxonArmy.indexOf(randomSaxon),1)};
   return attackResult
  }
  saxonAttack(){
    const randomViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
    const randomSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
    const damageReceived = randomSaxon.strength;
    const attackResult = randomViking.receiveDamage(damageReceived);
    if(randomViking.health <= 0){this.vikingArmy.splice(this.vikingArmy.indexOf(randomViking),1)};
    return attackResult
   }
   showStatus(){

   }
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
