interface List<T> {
  items: T[];
  getItem: (index: number) => T;
}

const numberList: List<number> = {
  items: [1, 2, 3],
  getItem(index) {
    return this.items[index];
  },
};

const stringList: List<string> = {
  items: ['Alice', 'Bob'],
  getItem(index) {
    return this.items[index];
  },
};

console.log(numberList.getItem(2));
console.log(stringList.getItem(2));
