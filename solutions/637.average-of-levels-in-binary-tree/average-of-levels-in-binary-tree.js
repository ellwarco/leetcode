/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const averageOfLevels = root => {
  if (!root) return []

  let res = []

  let queue = [root]

  while (queue.length) {
    let curLevel = []
    let len = queue.length

    for (let i = 0; i < len; i++) {
      let node = queue.shift()
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
      curLevel.push(node.val)
    }

    res.push(calc(curLevel))
  }

  return res
}

const calc = nums => nums.reduce((acc,e)=> acc+e,0) / nums.length