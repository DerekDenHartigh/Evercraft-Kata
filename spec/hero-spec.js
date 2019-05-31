describe("Hero", ()=> {
    var Hero = require('../hero.js');
  
    beforeEach(()=>{
        this.hero = new Hero();
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
            expect(this.hero.armor).toBe(10);
        })
    });
 
    describe("hero's hp", ()=>{
        it("default hp = 5", ()=>{
            expect(this.hero.hp).toBe(5);
        })
    });
  
  });
  