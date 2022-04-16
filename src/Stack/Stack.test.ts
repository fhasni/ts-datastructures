import { Stack } from "./Stack";
describe("Node", () => {
  it("Initialize stack", () => {
    const stack = new Stack();
    expect(stack.isEmpty()).toBeTruthy();
  });

  it("Should be able to push to stack", () => {
    const stack = new Stack();
    stack.push("a");
    stack.push("b");
    expect(stack.peek()).toBe("b");
    expect(stack.isEmpty()).toBeFalsy();
  });

  it("Should be able to pop from stack", () => {
    const stack = new Stack();
    stack.push("a");
    stack.push("b");
    stack.push("c");
    const last = stack.pop();
    expect(last).toBe("c");
    expect(stack.peek()).toBe("b");
  });
});
