/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  let result = []
  for (let i = 0; i < nums.length; i++) {
    let nums2 = [...nums]
    nums2.splice(i, 1)
    for (let j = 0; j < nums2.length; j++) {
      let nums3 = [...nums2]
      nums3.splice(j, 1)
      for (let k = 0; k < nums3.length; k++) {
        if (nums[i] + nums2[j] + nums3[k] === 0) {
          result.push([nums[i], nums2[j], nums3[k]])
        }
      }
    }
  }
  result.forEach(item => {
    item.sort((a, b) => a - b)
  })
  return result
    .map(item => item.join(','))
    .filter((value, index, array) => array.indexOf(value) === index)
    .map(item => item.split(','))
}

// 超出时间限制