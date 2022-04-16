import { LinkedList } from "./LinkedList";

describe("LinkedList Tests", () => {
  it("Initialize LinkedList", () => {
    const linkedList = new LinkedList();

    expect(linkedList.size()).toEqual(0);
  });

  it("Should be able insert in begining of an empty LinkedList", () => {
    const linkedList = new LinkedList();
    linkedList.addFirst("a");

    expect(linkedList.size()).toEqual(1);
    expect(linkedList.head().data).toBe("a");
    expect(linkedList.tail().data).toBe("a");
  });

  it("Should be able insert in begining of a non empty LinkedList", () => {
    const linkedList = new LinkedList();
    linkedList.addFirst("a");
    linkedList.addFirst("b");
    linkedList.addFirst("c");

    expect(linkedList.size()).toBe(3);
    expect(linkedList.head().data).toBe("c");
    expect(linkedList.head().next?.data).toBe("b");
    expect(linkedList.head().next?.next?.data).toBe("a");
    expect(linkedList.tail().data).toBe("a");
    expect(linkedList.tail().prev?.data).toBe("b");
    expect(linkedList.tail().prev?.prev?.data).toBe("c");
  });

  it("Should be able insert at the end of an empty LinkedList", () => {
    const linkedList = new LinkedList();
    linkedList.addLast("a");

    expect(linkedList.size()).toBe(1);
    expect(linkedList.head().data).toBe("a");
    expect(linkedList.tail().data).toBe("a");
  });

  it("Should be able insert at the end of a non empty LinkedList", () => {
    const linkedList = new LinkedList();
    linkedList.addLast("a");
    linkedList.addLast("b");
    linkedList.addLast("c");

    expect(linkedList.size()).toBe(3);
    expect(linkedList.head().data).toBe("a");
    expect(linkedList.head().next?.data).toBe("b");
    expect(linkedList.head().next?.next?.data).toBe("c");
    expect(linkedList.tail().data).toBe("c");
    expect(linkedList.tail().prev?.data).toBe("b");
    expect(linkedList.tail().prev?.prev?.data).toBe("a");
  });

  it("Should be able to remove first value from a LinkedList", () => {
    const linkedList = new LinkedList<string>();
    linkedList.addFirst("a");
    linkedList.addFirst("b");
    linkedList.addFirst("c");
    const removedValue = linkedList.removeFirst();

    expect(removedValue).toBe("c");
    expect(linkedList.head().data).toBe("b");
    expect(linkedList.size()).toBe(2);
  });

  it("Should be able to remove last value from a LinkedList", () => {
    const linkedList = new LinkedList<string>();
    linkedList.addFirst("a");
    linkedList.addFirst("b");
    linkedList.addFirst("c");
    const removedValue = linkedList.removeLast();

    expect(removedValue).toBe("a");
    expect(linkedList.tail().data).toBe("b");
    expect(linkedList.size()).toBe(2);
  });

  it("Should be able to insert value at index in LinkedList", () => {
    const linkedList = new LinkedList<string>();
    linkedList.addFirst("a"); //2
    linkedList.addFirst("b"); //1
    linkedList.addFirst("c"); //0
    linkedList.addAt("e", 1);

    expect(linkedList.head().next?.data).toBe("e");
  });

  it("Should be able to remove value at index from LinkedList", () => {
    const linkedList = new LinkedList<string>();
    linkedList.addFirst("a"); //2
    linkedList.addFirst("b"); //1
    linkedList.addFirst("c"); //0
    linkedList.removeItemAt(2);

    expect(linkedList.head().next?.data).toBe("a");
  });
});
