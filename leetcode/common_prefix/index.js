function isCommonPrefix(strs, middle) {
  const prefix = strs[0].substring(0, middle);
  for (let i = 1; i < strs.length; i++) {
    if (!strs[i].startsWith(prefix)) return false;
  }
  
  return true;
}
/**
 * @author ysw
 * @func 返回最长公共子串
 * @param  strs 字符串数组
 * @return 字符中 
 */
const longestCommonPrefix = (strs) => {
  // 最长公众子窜， 绝对不可能比最短的一个字符串长
  if (strs.length === 0) return '';
  if (strs.length === 1) return strs[0];

  let minLen = Number.MAX_VALUE;
  for (let i = 0; i < strs.length; i++) {
    minLen = Math.min(minLen, strs[i].length);
  }
  // console.log(minLen);

  let low = 0, //动态的 左侧
    high = minLen; 

  while(low <= high) {
    const middle = (low + high) >> 1; //中间
    // 功能独力, 公共子串
    if (isCommonPrefix(strs, middle)) {
      low = middle + 1;
    } else {
      high = middle - 1;
    }
  }

  // low > high 
  return strs[0].substring(0, (low + high) >> 1);
}
const strs = ['flower', 'flow', 'flight'];
console.log(longestCommonPrefix(strs));