// First rotate method
class Rotate {
  constructor(nums, k) {
    this.nums = nums;
    this.k = k;
  }
  rotation() {
    for (let i = 0; i < this.k; i++) {
      let itemOne = this.nums.pop();
      this.nums.splice(0, 0, itemOne);
    }
    return this.nums;
  }
}

// Second rotate method
class RotateTwo extends Rotate {
  constructor(nums, k) {
    super(nums, k);
  }
  rotation() {
    const numsLength = this.nums.length;
    const rotateItem = this.nums.splice(numsLength - this.k);
    this.nums.unshift(...rotateItem);
    console.log({ rotateTwo: this.nums });
  }
}

const firstRotate = new RotateTwo([1, 2, 3, 4, 5, 6, 7], 3);
const secondRotate = new Rotate([-1, -100, 3, 99], 2);
const thirdRotate = new Rotate([100, 25, -10, 250, 999], 4);

const resultOne = firstRotate.rotation();
const resultTwo = secondRotate.rotation();
const resultThree = thirdRotate.rotation();

console.log({
  firstRightRotation: resultOne,
  secondRightRotation: resultTwo,
  threeRightRotation: resultThree,
});
