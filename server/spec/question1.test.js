const { sum } = require("../utils/question1");

describe("function sum", () => {
    it("12 + 2", () => {
        let result = sum("12", "2");
        expect(typeof result).toBe("string");
        expect(result).toBe("14");
    });
    it("5 + 6", () => {
        let result = sum("5", "6");
        expect(typeof result).toBe("string");
        expect(result).toBe("11");
    });
    it("77 + 23", () => {
        let result = sum("77", "23");
        expect(typeof result).toBe("string");
        expect(result).toBe("100");
    });
    it("50 + 16", () => {
        let result = sum("50", "16");
        expect(typeof result).toBe("string");
        expect(result).toBe("66");
    });
    it("abc + 5", () => {
        let result = sum("acb", "5");
        expect(typeof result).toBe("string");
        expect(result).toBe("invalid a");
    });
    it("12 + true", () => {
        let result = sum("12", true);
        expect(typeof result).toBe("string");
        expect(result).toBe("invalid b");
    });
});