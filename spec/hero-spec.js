describe("Hero", () => {
    var Hero = require('../hero.js');
    beforeEach(() => {
      this.hero = new Hero();
      this.opponent = new Hero();
    });
    describe("hero's name", () => {
      it("hero should have a name", () => {
        expect(this.hero.name).toBe("Bob");
      });
      it("SHOULD HAVE a mutatable name", () => {
        this.hero.name = "somethingElse";
        expect(this.hero.name).toBe("somethingElse");
      });
    })
    describe("hero's alignment", () => {
      it("alignment should be neutral", () => {
        expect(this.hero.alignment).toBe("neutral");
      });
      it("allows for alignment to mutate", () => {
        this.hero.alignment = "evil";
        // this.hero.alignment("evil");
        expect(this.hero.alignment).toBe("evil");
      });
      it("rejects unaccaptable alignments", () => {
        this.hero.alignment = "dumb";
        // expect(this.hero.alignment).toThrowError();
        expect(() => {
          this.alignment("evil");
        }).toThrowError(`alignment cannot be dumb!`);
      });
    });
    describe("hero's armor", () => {
      it("default armor = 10", () => {
        expect(this.hero.armor()).toEqual(10);
      });
      it("armor updates to 30", () => {
        expect(this.hero.armor(30)).toEqual(30);
      });
      it("armor shouldn't update to zebra", () => {
        expect(this.hero.armor("zebra")).toBe(10);
      });
    });
    describe("hero's hp", () => {
      it("default hp = 5", () => {
        expect(this.hero.hp()).toEqual(5);
      });
      it("hp updates to 30", () => {
        expect(this.hero.hp(30)).toEqual(30);
      });
      it("hp shouldn't update to zebra", () => {
        expect(this.hero.hp("zebra")).toBe(5);
      });
      it("hp should return 0 w/ U R ded message if your hp = 0", () => {
        expect(this.hero.hp(0)).toBe(0);
      })
    });
    describe("combat time", () => {
      it("hero attcking unarmored opponent, reduces their hp if attack meets/beats opponent armor class", () => {
        this.opponent.hp = 10;
        this.opponent.armor = 0;
        this.hero.attack(5, this.opponent);
        expect(this.opponent.hp).toBe(9);
      })
      it("hero attacking armored opponent, reduces their hp if attack meets/beats opponent armor class", () => {
        this.opponent.hp = 10;
        this.opponent.armor = 5;
        this.hero.attack(5, this.opponent);
        expect(this.opponent.hp).toBe(9);
      })
      it("hero attacking heavily armored opponent, nothing happens cuz attack deflected", () => {
        this.opponent.hp = 10;
        this.opponent.armor = 20;
        this.hero.attack(5, this.opponent);
        expect(this.opponent.hp).toBe(10);
      })
      it("if hero attacking at 20, deals double damage", () => {
        this.opponent.hp = 10;
        this.opponent.armor = 20;
        this.hero.attack(20, this.opponent);
        expect(this.opponent.hp).toBe(8);
      })
      it("if hero has 0 hp, they are dead", () => {
        this.opponent.hp = 0;
        this.hero.isDead(this.opponent);
        expect(this.opponent.isDead(this.opponent)).toBe('you are dead');
      })
      it("if hero has 9 hp, they are not dead", () => {
        this.opponent.hp = 9;
        this.hero.isDead(this.opponent);
        expect(this.opponent.isDead(this.opponent)).toBe(9);
      })
    })
    describe("character ability scores", () => {
      it("roll die, and modify character ability value accordingly", () => {
        //this.hero.charisma = 10;
        this.hero.abilityModifier(5, 'charisma', this.hero);
        expect(this.hero.charisma).toBe(7);
      })
      it("check for non-existent ability", () => {
        expect(this.hero.abilityModifier(5, 'acrobatic', this.hero)).toBe('banana');
      })
    
    })
    // Feature: Character Ability Modifiers Modify Attributes -- TO BE CONTINUED
    describe("character ability scores", () => {
      it("roll die, and modify character ability value accordingly", () => {
        //this.hero.charisma = 10;
        this.hero.abilityModifier(5, 'charisma', this.hero);
        expect(this.hero.charisma).toBe(7);
      })  
    })
    describe("character experience", () => {
      it("A Character can gain experience when attacking", () => {
        this.hero.attack(20, this.opponent);
        expect(this.hero.exp).toBe(10);
      })
    
    });
    describe("character levels", () => {
      it("A character can level up to level 2", () => {
        this.hero.exp = 990;
        this.hero.attack(20, this.opponent);
        expect(this.hero.level).toBe(2);
      })
    
      it("When leveling up, 1 is added to attack roll if level is even", () => {
        this.hero.exp = 1990;
        this.hero.attack(20, this.opponent);
        expect(this.hero.attack_modifier).toBe(1);
      })
    });
  });