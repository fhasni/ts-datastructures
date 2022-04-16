import { ILinkedList, LinkedList } from "../LinkedList/LinkedList";

export interface IQueue<T> {
  enqueue(elem: T): void;
  dequeue(): T;
  peek(): T;
  isEmpty(): boolean;
}

export class Queue<T> implements IQueue<T> {
  private _linkedList: ILinkedList<T> = new LinkedList<T>();

  enqueue(elem: T): void {
    this._linkedList.addLast(elem);
  }

  dequeue(): T {
    if (this.isEmpty()) throw new Error("Empty Stack");
    return this._linkedList.removeFirst();
  }

  peek(): T {
    if (this.isEmpty()) throw new Error("Empty Stack");
    return this._linkedList.peekFirst();
  }

  isEmpty(): boolean {
    return this._linkedList.size() === 0;
  }
}
