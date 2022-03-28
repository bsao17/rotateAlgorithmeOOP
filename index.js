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

const firstRotate = new Rotate([1, 2, 3, 4, 5, 6, 7], 3);
const secondRotate = new Rotate([-1, -100, 3, 99], 2);
const thirdRotate = new Rotate([100, 25, -10, 250, 999], 4);

const resultOne = firstRotate.rotation();
const resultTwo = secondRotate.rotation();
const resultThree = thirdRotate.rotation();

console.log({
firstRightRotation: resultOne,
secondRightRotation: resultTwo,
threeRightRotation: resultThree
});

