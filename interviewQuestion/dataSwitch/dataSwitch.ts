/**
 * 题目描述：
 * 
 * // {"a": {"n1": 1, "n2": 3 }, "b": {"n1": 2, "n2": 4}, "c": { "n1": 3,"n2": 5}}
 * 
 * // 转换成{"n1": {"a": 1, "b": 2, "c": 3 }, "n2": { "a": 3, "b": 4, "c": 5}}
 * 
 */
const test = { "a": { "n1": 1, "n2": 3 }, "b": { "n1": 2, "n2": 4 }, "c": { "n1": 3, "n2": 5 } }

function dataSwitch(data: any) {
  const obj = {};
  Object.keys(data).forEach((item: string) => {
    const sonItem = data[item]
    Object.keys(sonItem).forEach((item2: string) => {
      if (!obj[item2]) {
        obj[item2] = {}
      }
      obj[item2][item] = sonItem[item2]
    })
  })
  return obj

}
console.log(dataSwitch(test));
