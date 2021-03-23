import { expect } from "chai";
import formatName, { isCJKFullName } from "../src";

describe("formatName", () => {
  describe("full names", () => {
    it("english, no sorting", () => expect(formatName("Ross", "Khanas")).to.be.equal("Ross Khanas"));
    it("english, first name, no trim", () => expect(formatName(" Ross ", undefined)).to.be.equal("Ross"));
    it("english, first name and undefined", () => expect(formatName("Ross", undefined)).to.be.equal("Ross"));
    it("english, first name and empty", () => expect(formatName("Ross", "")).to.be.equal("Ross"));
    it("english, first name and object", () => expect(formatName("Ross", {})).to.be.equal("Ross"));
    it("english, last name and undefined", () => expect(formatName(undefined, "Khanas")).to.be.equal("Khanas"));
    it("english, last name and empty", () => expect(formatName("", "Khanas")).to.be.equal("Khanas"));
    it("english, last name and object", () => expect(formatName({}, "Khanas")).to.be.equal("Khanas"));
    it("chinese, no sorting", () => expect(formatName("台綸", "曾")).to.be.equal("曾台綸"));
    it("chinese, first name, last name", () => expect(formatName("台綸", undefined)).to.be.equal("台綸"));
    it("chinese, last name, first name", () => expect(formatName(undefined, "曾")).to.be.equal("曾"));
    it("hiragana, no sorting", () => expect(formatName("そうすけ", "さがら")).to.be.equal("さがらそうすけ"));
    it("hiragana, first name, last name", () => expect(formatName("そうすけ", undefined)).to.be.equal("そうすけ"));
    it("hiragana, last name, first name", () => expect(formatName(undefined, "さがら")).to.be.equal("さがら"));
    it("invalid, object and object", () => expect(formatName({}, {})).to.be.equal(""));
    it("invalid, object and empty", () => expect(formatName({}, "")).to.be.equal(""));
    it("invalid, empty and object", () => expect(formatName("", {})).to.be.equal(""));
    it("invalid, empty and empty", () => expect(formatName("", "")).to.be.equal(""));
  });
});

describe("isCJKFullName", () => {
  it("english", () => expect(isCJKFullName("Ross", "Khanas")).to.be.false);
  it("english, first name, no trim", () => expect(isCJKFullName(" Ross ", undefined)).to.be.false);
  it("chinese", () => expect(isCJKFullName("台綸", "曾")).to.be.true);
  it("hiragana", () => expect(isCJKFullName("そうすけ", "さがら")).to.be.true);
});
