/**
 * 
 * 以下是一些关于 `replace()` 函数的练习题：
1. 给定字符串 `'Hello, World! How are you?'`，将所有的 `o` 替换为 `*` 。
2. 给定字符串 `'The quick brown fox jumps over the lazy dog'`，将所有的单词 `the` （不区分大小写）替换为 `THE` 。
3. 给定字符串 `'123,456,789'`，将所有的逗号 `,` 替换为 `-` 。
4. 给定字符串 `'JavaScript is awesome!'`，将 `awesome` 替换为 `fantastic` 。
5. 给定字符串 `'apple, banana, cherry'`，将第一个逗号 `,` 替换为 `:` 。
6. 给定字符串 `'This is a test. This is another test.'`，将所有的 `.` 替换为 `!` 。
7. 给定字符串 `'I love programming in Python and JavaScript'`，将 `Python` 替换为 `Java` 。
8. 给定字符串 `'red, green, blue, yellow'`，将最后一个逗号 `,` 替换为 `and` 。
9. 给定字符串 `'The price is $100. It's too expensive.'`，将 `$100` 替换为 `$200` 。
10. 给定字符串 `'Today is Monday. Tomorrow is Tuesday.'`，将所有的 `Monday` 替换为 `Sunday` 。
希望这些练习题能帮助您熟悉 `replace()` 函数！
 */

/**
 * 1. 给定字符串 `'Hello, World! How are you?'`，将所有的 `o` 替换为 `*` 。
 * @param {string} value - 待处理的字符串
 * @returns {string} 返回处理后的字符串，其中所有的 `o` 被替换为 `*`
 * @note 笔记： 正则表达式 /g 的意思是 全局匹配（global）。具体来说就是当使用这个正则表达式进行匹配操作的时候，如果没有 `/g`，那么只会找到第一个匹配 `o` 的地方就停止搜索了。
 */
const case1 = 'Hello, World! How are you?'
function replace_first(value) {
  const formatVal = value.replace(/o/g, '*')
  return formatVal
}
console.log(replace_first(case1));
