
import { convertTempAndHumidToAttire } from "../convertTempAndHumidToAttire.js";


describe("test convertTempAndHumidToAttire", function() {
    it("tests 44 degrees", function() {
        let degrees = 44;
        let humidity = 80
        let suggestion = convertTempAndHumidToAttire (degrees,humidity);
      expect(suggestion).toBe("Its dry out.");
    });
   
  });
