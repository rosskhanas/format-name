const assert = require("assert");
const formatName = require("../src");

const { isCJKFullName } = formatName;

describe("formatName", () => {
  describe("full names", () => {
    it("english, no sorting", () => assert.equal(formatName("Ross", "Khanas"), "Ross Khanas"));
    it("english, first name, no trim", () => assert.equal(formatName(" Ross ", undefined), "Ross"));
    it("english, first name and undefined", () => assert.equal(formatName("Ross", undefined), "Ross"));
    it("english, first name and empty", () => assert.equal(formatName("Ross", ""), "Ross"));
    it("english, first name and object", () => assert.equal(formatName("Ross", {}), "Ross"));
    it("english, last name and undefined", () => assert.equal(formatName(undefined, "Khanas"), "Khanas"));
    it("english, last name and empty", () => assert.equal(formatName("", "Khanas"), "Khanas"));
    it("english, last name and object", () => assert.equal(formatName({}, "Khanas"), "Khanas"));
    it("chinese, no sorting", () => assert.equal(formatName("台綸", "曾"), "曾台綸"));
    it("chinese, first name, last name", () => assert.equal(formatName("台綸", undefined), "台綸"));
    it("chinese, last name, first name", () => assert.equal(formatName(undefined, "曾"), "曾"));
    it("hiragana, no sorting", () => assert.equal(formatName("そうすけ", "さがら"), "さがらそうすけ"));
    it("hiragana, first name, last name", () => assert.equal(formatName("そうすけ", undefined), "そうすけ"));
    it("hiragana, last name, first name", () => assert.equal(formatName(undefined, "さがら"), "さがら"));
    it("invalid, object and object", () => assert.equal(formatName({}, {}), ""));
    it("invalid, object and empty", () => assert.equal(formatName({}, ""), ""));
    it("invalid, empty and object", () => assert.equal(formatName("", {}), ""));
    it("invalid, empty and empty", () => assert.equal(formatName("", ""), ""));
    it("invalid, undefined and undefined", () => assert.equal(formatName(undefined,undefined), ''));
  });
});

describe("isCJKFullName", () => {
  it("english", () => assert.equal(isCJKFullName("Ross", "Khanas"), false));
  it("english, first name, no trim", () => assert.equal(isCJKFullName(" Ross ", undefined), false));
  it("chinese", () => assert.equal(isCJKFullName("台綸", "曾"), true));
  it("hiragana", () => assert.equal(isCJKFullName("そうすけ", "さがら"), true));
});
