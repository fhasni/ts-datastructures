import { Queue } from "./Queue";
describe("Queue", () => {
  it("Initialize queue", () => {
    const queue = new Queue();
    expect(queue.isEmpty()).toBeTruthy();
    queue.enqueue("a");
    queue.dequeue();
    expect(queue.isEmpty()).toBeTruthy();
  });

  it("Should be able to enqueue the Queue", () => {
    const queue = new Queue();
    queue.enqueue("a");
    queue.enqueue("b");
    expect(queue.peek()).toBe("a");
    expect(queue.isEmpty()).toBeFalsy();
  });

  it("Should be able to dequeue the Queue", () => {
    const queue = new Queue();
    queue.enqueue("a");
    queue.enqueue("b");
    queue.enqueue("c");
    queue.enqueue("d");
    const last = queue.dequeue();
    expect(last).toBe("a");
    expect(queue.peek()).toBe("b");
  });
});
