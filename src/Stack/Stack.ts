import { ILinkedList, LinkedList } from "../LinkedList/LinkedList";

export interface IStack<T> {
  push(elem: T): void;
  pop(): T;
  peek(): T;
  isEmpty(): boolean;
}

export class Stack<T> implements IStack<T> {
  private _linkedList: ILinkedList<T> = new LinkedList<T>();

  push(elem: T): void {
    this._linkedList.addFirst(elem);
  }

  pop(): T {
    if (this.isEmpty()) throw new Error("Empty Stack");
    return this._linkedList.removeFirst();
  }

  peek(): T {
    if (this.isEmpty()) throw new Error("Empty Stack");
    return this._linkedList.head().data;
  }

  isEmpty(): boolean {
    return this._linkedList.size() === 0;
  }
}
