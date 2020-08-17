// Unit tests for the helloWorld function
describe('helloWorld', function () {
  it('should be a defined function', function () {
    expect(typeof helloWorld).toBe('function');
  });
  it('should return a string when called', function () {
    expect(typeof helloWorld()).toBe("string");
  });
  it('should return the string "Hello, World!" when executed', function () {
    expect(helloWorld()).toBe("Hello, World!");
  });
  it("should never return 'undefined' when called", function () {
    expect(helloWorld()).not.toBe(undefined);
  });
  it('should return the string "Hello, Jane!" when passed "Jane"', function () {
    expect(helloWorld("Jane")).toBe(("Hello, Jane!"));
  });
  it('should return the string "Hello, Alex!" when passed "Alex"', function () {
    expect(sayHello("Alex").toBe("Hello, Alex!"))
  })
});

