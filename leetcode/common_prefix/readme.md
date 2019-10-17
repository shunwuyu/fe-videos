- leetcode 是大厂算法题的来源
- minLen   0-minLen 皆有可能
  老实取出部分， str[0]  str[01] str[02]....str[0minLen]
  for (let i = 0; i < strs[i].length; i++) {
    strs[i].startsWith(str[02])
  }
  从后面开始 [0minLen] [0minLen-1]
  概率是一样的, 中间  二分查找 

  5    0000  0101
  0000 0010   2    除2  取余 

  flower 

  low   middle      high
  0        2         4
  3       3          4
  3        3         3
  3                  2  退出了循环
         2
         fl

- 二分查找
  每次从中间查找， 符合概率 每次都可以排除一半的元素
  low  high  middle  重复的去做计算， 并相应的调整

  位移运算  >> 2 除2 取整
  算法 时间复杂度 O(n) log2N