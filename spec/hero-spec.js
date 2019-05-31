describe("Hero", ()=> {
    var Hero = require('../hero.js');
  
    beforeEach(()=>{
        this.hero = new Hero();
        this.opponent = new Hero();
    });

    describe("hero's name", ()=>{

        it("hero should have a name", ()=>{
            expect(this.hero.name).toBe("Bob");
        });
    
        it("SHOULD HAVE a mutatable name", ()=>{
            this.hero.name = "somethingElse";
            expect(this.hero.name).toBe("somethingElse");
        });
    })

    describe("hero's alignment", ()=>{

        it("alignment should be neutral", ()=>{
            expect(this.hero.alignment).toBe("neutral");
        });

        it("allows for alignment to mutate", ()=>{
            this.hero.alignment = "evil";
            // this.hero.alignment("evil");
            expect(this.hero.alignment).toBe("evil");
        });

        it("rejects unaccaptable alignments", ()=>{
            this.hero.alignment = "dumb";
            // expect(this.hero.alignment).toThrowError();
            expect(()=>{
                this.alignment("evil");
            }).toThrowError(`alignment cannot be dumb!`);
        });
    });

    describe("hero's armor", ()=>{
        it("default armor = 10", ()=>{
            expect(this.hero.armor()).toEqual(10);
        });

        it("armor updates to 30", ()=>{
            expect(this.hero.armor(30)).toEqual(30);
        });
        it("armor shouldn't update to zebra", ()=>{
            expect(this.hero.armor("zebra")).toBe(10);
        });
    });
 
    describe("hero's hp", ()=>{
        it("default hp = 5", ()=>{
            expect(this.hero.hp()).toEqual(5);
        });

        it("hp updates to 30", ()=>{
            expect(this.hero.hp(30)).toEqual(30);
        });
        it("hp shouldn't update to zebra", ()=>{
            expect(this.hero.hp("zebra")).toBe(5);
        });
        it("hp should return 0 w/ U R ded message if your hp = 0", ()=>{
            expect(this.hero.hp(0)).toBe(0);
        })
    });

    describe("combat time", ()=>{
        it("hero attcking unarmored opponent, reduces their hp if attack meets/beats opponent armor class", ()=>{
            this.hero.attack(5);
            this.opponent.hp = 10;
            this.opponent.armor = 5;
            expect(this.opponent.hp).toBe(5);
        })
    })
  
  });
  