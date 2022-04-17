import { BinaryHeap } from "./BinaryHeap";
describe("BinaryHeap", () => {
  const values: number[] = [3, 7, 1, 8, 6, 2, 4, 5];
  it("Initialize BinaryHeap", () => {
    const emptyHeap = new BinaryHeap();
    const nonEmptyHeap = new BinaryHeap(values);

    expect(emptyHeap.isEmpty()).toBeTruthy();
    expect(nonEmptyHeap.isEmpty()).toBeFalsy();
    expect(nonEmptyHeap.size()).toBe(values.length);
    expect(nonEmptyHeap.isMinHeap()).toBeTruthy();
  });

  it("Should be able to add element to the Heap", () => {
    const heap = new BinaryHeap<number>([]);
    values.forEach((value) => heap.add(value));

    expect(heap.isEmpty()).toBeFalsy();
    expect(heap.size()).toBe(values.length);
    expect(heap.isMinHeap()).toBeTruthy();
  });

  it("Should be able to poll element from the Heap", () => {
    const heap = new BinaryHeap<number>(values);
    const result = Array<number | null>();
    values.forEach(() => result.push(heap.poll()));

    expect(result).toEqual(values.sort());
    expect(heap.isEmpty()).toBeTruthy();
    expect(heap.size()).toBe(0);
    expect(heap.isMinHeap()).toBeTruthy();
  });
});
