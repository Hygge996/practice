class myPromise {
  static PENDING = 'pending';
  static FULFILLED = 'fulfilled';
  static REJECT = 'reject';

  constructor(func) {
    this.PromiseState = myPromise.PENDING;
    this.PromiseResult = null;
    func(this.resolve.bind(this), this.reject.bind(this));
  }
  resolve(result) {
    if (this.PromiseState === myPromise.PENDING) {
      this.PromiseState = myPromise.FULFILLED;
      this.PromiseResult = result;
    }
  }
  reject(reason) {
    if (this.PromiseState === myPromise.PENDING) {
      this.PromiseState = myPromise.REJECT;
      this.PromiseResult = reason;
    }
  }
  then(onFulfilled, onRejected) {
    if (this.PromiseState === myPromise.FULFILLED) {
      onFulfilled(this.PromiseResult);
    }
    if (this.PromiseState === myPromise.REJECTED) {
      onRejected(this.PromiseResult);
    }
  }
};

// 测试
let promise1 = new myPromise((resolve, reject) => {
  resolve('这是测试')
})