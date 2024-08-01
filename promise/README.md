# 手写Promise
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