import { convertMetersToYards } from "../convertMetersToYards.js";


describe("test convertMetersToYards", function() {
    it("tests 150 meters", function() {
        let meters = 50;
        let yards = convertMetersToYards (meters);
      expect(yards.toFixed(2)).toBe("54.65");
    });
    it("tests 20 meters", function() {
        let meters = 20;
        let yards = convertMetersToYards (meters);
      expect(yards.toFixed(2)).toBe("21.86");
    });
  });


