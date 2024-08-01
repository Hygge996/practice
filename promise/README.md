# 手写Promise
[原文地址](https://github.com/yuanyuanbyte/Blog/issues/125)🚀
<a href="https://github.com/yuanyuanbyte/Blog/issues/125" target="_blank" >原文地址</a>(打开新标签页)🚀
## 一、定义初始结构
创建一个`myPromise`类
```javascript
  class myPromise {}
```
在new一个promise实力的时候肯定是需要传入参数的
```javascript
  let promise = new Promise(() => {})
```
不然这个实例用处不大；而这个参数我们知道是一个函数，并且当我们传入这个函数参数的时候，这个函数参数会自动执行。

因此，我们需要在类的构造函数constructor里面添加一个参数，这里就用func来做形参，并且执行一下这个参数
```javascript
class myPromise {
  constructor(func) {
    func();
  }
}
```
## 二、实现 resolve 和 reject
接下来，大家都知道需要为这个函数参数传入它自己的函数，也就是`resolve()`和`reject()`
原生的promise里面可以传入 `resolve` 和 `reject` 两个参数
```javascript
let promise = new Promise((resolve, reject) => {})
```
那么我们也得允许手写这边可以接收两个参数：
```javascript
class myPromise {
  constructor(func) {
    func(resolve, reject);
  }
}
```
这里这样写明显有一个问题 🤨，那就是手写这边不知道哪里调用resolve()和reject()这两个参数，毕竟resolve()和reject()还没有定义

因此就需要创造出这两个对象 😀

有一点我们需要知道的是resolve()和reject()也是以函数的形式来执行的，我们在原生promise里也是在resolve和reject后面加括号()来执行的，因此我们可以用类方法的形式来创建这两个函数：
```javascript
class myPromise {
    constructor(func) {
        func(resolve, reject);
    }
    resolve() {}
    reject() {}
}
```