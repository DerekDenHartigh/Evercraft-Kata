describe("name", function() {
    var hero = require('../hero.js');
  
    it("hero should have a name", function() {
        expect(hero.name).toBe("Bob");
    });
  
  });
  