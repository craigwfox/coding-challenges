/*
 * You are given two sorted arrays,
 * a and b,
 * where a has a large enough size buffer at the end to hold b
 * (which can be spaces, zeroes, or nulls).
 * Write a function to merge b into a in sorted order.
 *
 * ===--- Example:
 * let a = [1, 3, 5, 0, 0, 0];
 * let b = [2, 4, 6];
 * > merge(a, b)
 * > [1, 2, 3, 4, 5, 6]
 *
 * ===--- Steps:
 * determine, in a, which 0s are buffer and the buffer size
 * determine if b fits within the buffer
 * merge b into a replacing the buffer items
 * sort and return a without creating a new instance (well return the a that is input)
 */

type Item = number | null | " "
type errorStates = "⚠️ Not enough buffer"

// ====---------------====
// The functions
// ====---------------====
function isBuffer(x: Item): boolean {
  return x === 0 || x === null || x === " "
}

function merge(a: Item[], b: Item[]): Item[] | errorStates {
  // determine buffer space (and not starting with 0)
  let stop = false
  const buffer = [...a].reverse().filter(x => {
    if (!isBuffer(x)) stop = true
    return isBuffer(x) && !stop ? true : false
  }).length

  if (buffer < b.length) return "⚠️ Not enough buffer"

  let i = 0
  while (i < b.length) {
    const bufferPos = a.length - buffer + i
    a.splice(bufferPos, 1, b[i])
    i++
  }

  return a.sort()
}

// ====---------------====
// Test data
// ====---------------====
let a: Item[] = [0, 1, 3, 5, 0, 0, 0]
let b: Item[] = [2, 4, 6]

let x: Item[] = [0, 0, 0, 0]
let y: Item[] = [1, 2, 3, 4]

// console.log(a, b)
console.log(merge(a, b)) // [1, 2, 3, 4, 5, 6]
console.log(merge(x, y)) // [1, 2, 3, 4]
