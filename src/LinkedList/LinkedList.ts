class Node<T> {
  public next: Node<T> | null = null;
  public prev: Node<T> | null = null;
  constructor(public data: T) {}
}

export interface ILinkedList<T> extends Iterable<T> {
  head(): Node<T>;
  tail(): Node<T>;
  addFirst(data: T): void;
  addLast(data: T): void;
  addAt(data: T, index: number): void;
  removeFirst(): T;
  removeLast(): T;
  removeItemAt(index: number): T;
  peekFirst(): T;
  peekLast(): T;
  size(): number;
}

export class LinkedList<T> implements ILinkedList<T> {
  private _head: Node<T> | null = null;
  private _tail: Node<T> | null = null;

  head(): Node<T> {
    if (!this._head) throw new Error("Empty");
    return this._head;
  }

  tail(): Node<T> {
    if (!this._tail) throw new Error("Empty");
    return this._tail;
  }

  addFirst(data: T): void {
    const node = new Node(data);
    if (!this._head) {
      this._head = this._tail = node;
    } else {
      node.next = this._head;
      this._head.prev = node;
      this._head = node;
    }
  }

  addLast(data: T): void {
    const node = new Node(data);
    if (!this._tail) {
      this._head = this._tail = node;
    } else {
      this._tail.next = node;
      node.prev = this._tail;
      this._tail = node;
    }
  }

  addAt(data: T, index: number): void {
    let currentIndex = 0;
    let iterator = this._head;

    while (iterator) {
      if (currentIndex === index) break;
      iterator = iterator.next;
      currentIndex++;
    }

    if (!iterator) throw new Error("Out of bounds");

    if (!iterator.next) {
    } else if (!iterator.prev) {
      this.addFirst(data);
    } else {
      const newNode = new Node(data);
      newNode.next = iterator;
      newNode.prev = iterator.prev;

      iterator.prev.next = newNode;
      iterator.prev = newNode;
    }
  }

  removeFirst(): T {
    if (!this._head) throw new Error("Empty");
    const node = this._head;
    this._head = this._head.next;
    if (this._head) {
      this._head.prev = null;
    }
    return node.data;
  }

  removeLast(): T {
    if (!this._tail) throw new Error("Empty");
    const node = this._tail;
    this._tail = this._tail.prev;
    if (this._tail) {
      this._tail.next = null;
    }
    return node.data;
  }

  removeItemAt(index: number): T {
    let currentIndex = 0;
    let iterator = this._head;

    while (iterator) {
      if (currentIndex === index) break;
      iterator = iterator.next;
      currentIndex++;
    }

    if (!iterator) throw new Error("Out of bounds");

    if (!iterator.next) {
      this.removeFirst();
    } else if (!iterator.prev) {
      this.removeLast();
    } else {
      iterator.prev.next = iterator.next;
      iterator.next.prev = iterator.prev;
    }

    return iterator.data;
  }

  peekFirst(): T {
    return this.head().data;
  }
  peekLast(): T {
    return this.tail().data;
  }

  size(): number {
    let size = 0;
    let iterator = this._head;
    while (iterator) {
      size++;
      iterator = iterator.next;
    }
    return size;
  }

  [Symbol.iterator](): Iterator<T, any, undefined> {
    throw new Error("Method not implemented.");
  }
}
