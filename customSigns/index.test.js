const moment = require("moment");

const { buildSign, buildBirthdaySign } = require("./index");

describe("Custom Signs", () => {
  describe("Task 1 - Build an occasion sign", () => {
    it("should return the correct message", () => {
      expect(buildSign("birthday", "Bob")).toBe("Happy Birthday, Bob!");
    });
    ["BIRTHDAY", "Birthday", "BirthDay"].map((occasion) => {
      it(`should correctly handle birthday with varying capitalization ${occasion}`, () => {
        expect(buildSign(occasion, "Bob")).toBe("Happy Birthday, Bob!");
      });
    });
    it("should handle an unknown occasion", () => {
      expect(buildSign("other", "Bob")).toBe(
        "Sorry, not sure what to do with this, Bob"
      );
    });
  });
  describe("Task 2 - Build a birthday sign", () => {
    const lt50Message = "Happy Birthday! What a young fellow you are.";
    const gte50Message = "Happy Birthday! What a mature fellow you are.";
    const invalidAgeMessage = "No birthday message for you...";

    it("should return correct message if user is < 50", () => {
      expect(buildBirthdaySign(49)).toBe(lt50Message);
    });
    it("should return correct message if user is 50", () => {
      expect(buildBirthdaySign(50)).toBe(gte50Message);
    });
    it("should return correct message if user is > 50", () => {
      expect(buildBirthdaySign(51)).toBe(gte50Message);
    });
    it("should handle if the age is < 0", () => {
      expect(buildBirthdaySign(-5)).toBe(invalidAgeMessage);
    });
    it("should handle if the age isn't a number", () => {
      expect(buildBirthdaySign("one")).toBe(invalidAgeMessage);
    });
  });
  // describe("Graduation", () => {
  //   const currentYear = moment().format("YYYY");

  //   it("should correctly handle a graduation message", () => {
  //     expect(customMessage("graduation", "Bob")).toBe(
  //       `Congratulations Bob! Class of ${currentYear}`
  //     );
  //   });
  //   ["GRADUATION", "Graduation", "gRaduAtIon"].map((occasion) => {
  //     it(`should correctly handle graduation with varying capitalization ${occasion}`, () => {
  //       expect(customMessage(occasion, "Bob")).toBe(
  //         `Congratulations Bob! Class of ${currentYear}`
  //       );
  //     });
  //   });
  // });
});
