"use strict";
// let hero = {};

class Hero {
    constructor(){
        // const hero = this;
        this._name = "Bob";
        this._alignment = "neutral";
        this._armor = 10;
        this._hp = 5;
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

        this.armor = (newArmorRating)=>{ // gives armor of 10 if string or empty, otherwise assigns new armor rating
                if(!newArmorRating){
                    return this._armor = 10;
                } else {
                    if(isNaN(newArmorRating) === false){
                    return this._armor = newArmorRating;
                    }
                    else{
                        return this._armor=10;
                    }
                }
        };

        this.hp = (newHpRating)=>{ // gives hp of 10 if string or empty, otherwise assigns new hp rating
            if(newHpRating===0){
                console.log("U R Ded!")
                return 0;
            } else if(!newHpRating) {
                return this._hp = 5;
            }  
            else {
                if(isNaN(newHpRating) === false){
                return this._hp = newHpRating;
                }
                else{
                    return this._hp=5;
                }
            }
    };

        this.attack = (attackDamage)=>{
            
        }


    }

    get name (){
        return this._name;
    }

    set name(newName){
        return this._name = newName;
    }

    get alignment (){
        return this._alignment;
    }

    set alignment(newAlignment){
        if(newAlignment==="neutral" || newAlignment==="evil" || newAlignment==="good")
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

module.exports= Hero;