// https://medium.com/factory-mind/regex-tutorial-a-simple-cheatsheet-by-examples-649dc1c3f285
const {
    startsWithHelloWorld,
    endsWithHelloWorld
  } = require("./index");

  test("text: 'test'", () => {
    const text = "test";
    const expected = false;
    const actual = startsWithHelloWorld(text);
    expect(actual).toEqual(expected);
  });

  test("text: 'Hello World-test'", () => {
    const text = "Hello World-test";
    const expected = true;
    const actual = startsWithHelloWorld(text);
    expect(actual).toEqual(expected);
  });

  test("text: 'test'", () => {
    const text = "test";
    const expected = false;
    const actual = endsWithHelloWorld(text);
    expect(actual).toEqual(expected);
  });

  test("text: 'test - Hello World'", () => {
    const text = "test - Hello World";
    const expected = true;
    const actual = endsWithHelloWorld(text);
    expect(actual).toEqual(expected);
  });