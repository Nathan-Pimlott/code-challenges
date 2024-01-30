const moment = require("moment");

const customMessage = require("./index");

describe("Custom Message", () => {
  describe("Birthday", () => {
    it("should correctly handle a birthday message", () => {
      expect(customMessage("birthday", "Bob")).toBe("Happy Birthday, Bob!");
    });
    ["BIRTHDAY", "Birthday", "BirthDay"].map((occasion) => {
      it(`should correctly handle birthday with varying capitalization ${occasion}`, () => {
        expect(customMessage(occasion, "Bob")).toBe("Happy Birthday, Bob!");
      });
    });
  });
  describe("Graduation", () => {
    const currentYear = moment().format("YYYY");

    it("should correctly handle a graduation message", () => {
      expect(customMessage("graduation", "Bob")).toBe(
        `Congratulations Bob! Class of ${currentYear}`
      );
    });
    ["GRADUATION", "Graduation", "gRaduAtIon"].map((occasion) => {
      it(`should correctly handle graduation with varying capitalization ${occasion}`, () => {
        expect(customMessage(occasion, "Bob")).toBe(
          `Congratulations Bob! Class of ${currentYear}`
        );
      });
    });
  });
});
