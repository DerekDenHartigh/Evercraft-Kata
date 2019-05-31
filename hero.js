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
    }

    get name (){
        return this._name;
    }

    set name(newName){
        this._name = newName;
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

    get armor(){
        return this._armor = 10;
    }

    set armor(newArmorRating){
        return this._armor = newArmorRating;
    }

    get hp(){
        return this._hp = 5;
    }

    set hp(newHpRating){
        return this._hp = newHpRating;
    }
}

module.exports= Hero;