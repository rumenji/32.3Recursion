/** product: calculate the product of an array of numbers. */

function product(nums, i=0) {
  if(nums.length === i) return 1;
  
  return nums[i] * product(nums, i+1);

}

/** longest: return the length of the longest word in an array of words. */

function longest(words, out=0, i=0) {
  if(words.length === i) return out;

  if(words[i].length > out) out = words[i].length

  return longest(words, out, i+1)

}

/** everyOther: return a string with every other letter. */

function everyOther(str, out=[], i=0) {
  if(str.length <= i) return out.join('');
  out.push(str.charAt(i));

  return everyOther(str, out, i+2)

}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, out=[], i=str.length-1) {
  if(i === -1) return out.join('') === str;
  out.push(str.charAt(i))
  return isPalindrome(str, out, i-1)
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i=0) {
  if(arr.length === i) return -1;
  if(arr[i] === val) return i;
  return findIndex(arr, val, i+1)
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, out=[], i=str.length-1) {
  if(i === -1) return out.join('');
  out.push(str.charAt(i))
  return revString(str, out, i-1)

}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj, out=[]) {
  for (key in obj) {
    if (typeof obj[key] === 'object') gatherStrings(obj[key], out);
    if (typeof obj[key] === 'string') out.push(obj[key])
  }
  return out
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, start=0, end = arr.length) {
    if(start > end) return -1;
    let i=Math.floor((start + end) / 2);
    if(arr[i] === val) return i;
    if(arr[i] > val) {
      return binarySearch(arr, val, start, i-1)
  } else {
      return binarySearch(arr, val, i+1, end)
  }
  }

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
