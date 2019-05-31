"use strict";
// let hero = {};

class Hero {
  constructor() {
    // const hero = this;
    this._name = "Bob";
    this._alignment = "neutral";
    this._armor = 10;
    this._hp = 5;
    this.exp = 0;
    this.level = 0; 
    this.strength = 10;
    this.dexterity = 10;
    this.constitution = 10;
    this.wisdom = 10;
    this.intelligence = 10;
    this.charisma = 10;

    this.abilities = ['strength', 'dexterity', 'constitution', 'wisdom', 'intelligence', 'charisma'];

    // this._reName = (newName)=>{
    //     if (newName != "" && newName != null){
    //         hero.name = newName;
    //     } else {
    //         console.log("invalid name entry")
    //     };
    // this._reAlign = (newAlignment)=>{
    //     if (newAlignment==="neutral" || newAlignment==="evil" || newAlignment==="good") {
    //         this._alignment = newAlignment;
    //     }
    //     else {
    //     console.error(`${newAlignment} is invalid - good, neutral, or evil are acceptable`);
    //     let error = new Error("invalid value entered");
    //     throw error;
    //     };
    // }

    this.armor = (newArmorRating) => { // gives armor of 10 if string or empty, otherwise assigns new armor rating
      if (!newArmorRating) {
        return this._armor = 10;
      } else {
        if (isNaN(newArmorRating) === false) {
          return this._armor = newArmorRating;
        }
        else {
          return this._armor = 10;
        }
      }
    };

    this.hp = (newHpRating) => { // gives hp of 10 if string or empty, otherwise assigns new hp rating
      if (newHpRating === 0) {
        console.log("U R Ded!")
        return 0;
      } else if (!newHpRating) {
        return this._hp = 5;
      }
      else {
        if (isNaN(newHpRating) === false) {
          return this._hp = newHpRating;
        }
        else {
          return this._hp = 5;
        }
      }
    };

    this.attack = (attackDamage, opponent) => {
      if (attackDamage === 20) {
        opponent.hp -= 2;
        this.gainExp();
        return opponent.hp;
      } else if (attackDamage >= opponent.armor) {
        this.gainExp();
        opponent.hp -= 1;
      } else {
        return opponent.hp;
      }
    }

    this.gainExp = () => {
      this.exp += 10;
      if (!(this.exp % 1000)) {
        this.level += 1;
        this.checkLevel();
      }

    }

    this.checkLevel = () => {
      if ( (this.level % 2) === 0) {
        this.attack_modifer += 1;
      }
    }



    this.isDead = (opponent) => {
      if (opponent.hp <= 0) {
        return 'you are dead';
      } else {
        return opponent.hp;
      }
    }

    this.abilityModifier = (score, ability, name) => {
      let modifiers = [null, -5, -4, -4, -3, -3, -2, -2, -1, -1, 0, 0, 1, 1, 2, 2,  3, 3, 4, 4, 5];
      // use index position to correspond to die roll
            
      if ( name.abilities.includes(ability)) {
        name[ability] += modifiers[score];    
      } else {
        return 'banana';
      }

    }



  }

  get name() {
    return this._name;
  }

  set name(newName) {
    return this._name = newName;
  }

  get alignment() {
    return this._alignment;
  }

  set alignment(newAlignment) {
    if (newAlignment === "neutral" || newAlignment === "evil" || newAlignment === "good")
      this._alignment = newAlignment;
    else {
      // console.error(`${newAlignment} is invalid - good, neutral, or evil are acceptable`);
      // let error = new Error("invalid value entered");
      throw `alignment cannot be ${newAlignment}!`;
    }
  }

  // get armor(){
  //     return this._armor = 10;
  // }

  // set armor(newArmorRating){
  //     return this._armor = newArmorRating;
  // }

  // get hp(){
  //     return this._hp = 5;
  // }

  // set hp(newHpRating){
  //     return this._hp = newHpRating;
  // }
}

module.exports = Hero;