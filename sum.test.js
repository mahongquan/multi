const sum = require("./sum.js");
describe("sum test suit", () => {
    test("test sum result", () => {
        expect(sum(1, 3)).toBe(4);
    })
    test("appdemo", () => {
        expect(sum(1, 4)).toBeGreaterThan(2);
    })
});