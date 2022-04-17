import { ILinkedList, LinkedList } from "../LinkedList/LinkedList";

export interface IBinaryHeap<T extends number> {
  isEmpty(): boolean;
  clear(): void;
  size(): number;
  peek(): T | null;
  poll(): T | null;
  contains(elem: T): boolean;
  add(elem: T): void;
  remove(elem: T): boolean;
  isMinHeap(): boolean;
}

export class BinaryHeap<T extends number> implements IBinaryHeap<T> {
  private _heap: Array<T> = [];
  private _size = 0;

  constructor(elements: Array<T> = []) {
    elements.forEach((elem) => this.add(elem));
  }

  isEmpty(): boolean {
    return this._size === 0;
  }

  clear(): void {
    this._heap = [];
    this._size = 0;
  }

  size(): number {
    return this._size;
  }

  peek(): T {
    if (this.isEmpty()) throw new Error("Empty");
    return this._heap[0];
  }

  poll(): T | null {
    if (this.isEmpty()) return null;
    const root = this._heap[0];
    this._swap(0, this._size - 1);
    this._heap.pop();
    this._sink(0);
    this._size--;
    return root;
  }

  contains(elem: T): boolean {
    return this._heap.includes(elem);
  }

  add(elem: T): void {
    this._heap.push(elem);
    this._swim(this._size);
    this._size++;
  }

  remove(elem: T): boolean {
    throw new Error("Method not implemented.");
  }

  isMinHeap(): boolean {
    for (let i = 0; 2 * i + 2 <= this._size; i++) {
      if (this._heap[i] > this._heap[2 * i + 1]) return false;
      if (this._heap[i] > this._heap[2 * i + 2]) return false;
    }

    return true;
  }

  private _swap(i: number, j: number) {
    [this._heap[i], this._heap[j]] = [this._heap[j], this._heap[i]];
  }

  private _sink(i: number) {
    while (this._less(this._minChild(i), i)) {
      const minChild = this._minChild(i);
      this._swap(i, minChild);
      i = minChild;
    }
  }

  private _swim(i: number) {
    while (this._less(i, this._parent(i))) {
      const parent = this._parent(i);
      this._swap(i, parent);
      i = parent;
    }
  }

  private _less(i: number, j: number): boolean {
    return this._heap[i] < this._heap[j];
  }

  private _parent(i: number): number {
    return Math.floor((i - 1) / 2);
  }

  private _minChild(i: number): number {
    const left = 2 * i + 1;
    const right = 2 * i + 2;
    if (!this._heap[right] && this._heap[left]) return left;
    return this._heap[left] <= this._heap[right] ? left : right;
  }
}
