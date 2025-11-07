/* 🍕 Instructions:
========== --------------- ---------------
* Given a field represented as an array of 0s and 1s,
* where 1 means that position needs protection,
* you can place a scarecrow at any index,
* and each scarecrow protects up to k consecutive positions centered around itself
* (for example, for k = 3, a scarecrow at i protects i-1, i, and i+1).
* Return the minimum set of indices where scarecrows should be placed
* so that all the positions with 1 are protected.
* You can assume k is an odd number (or make up what happens if it's even).
========== --------------- --------------- */

import { compareArrays } from "../../utils.ts"

function placeScarecrows(
  area: Array<0 | 1>,
  width: number
): number[] {
  let indices: number[] = []

  let n = 0
  let ones: number[] = []

  function update() {
    let i = Math.floor(ones.length / 2)
    indices.push(ones[i])
    ones.splice(0)
  }

  while (n < area.length) {
    if (area[n] === 1) ones.push(n)

    if (
      ones.length === width ||
      area[n] == 0 ||
      n === area.length - 1
    ) {
      update()
    }

    n++
  }

  return indices
}

console.log(
  compareArrays(
    placeScarecrows([1, 1, 1, 1, 1, 0, 1, 1], 3),
    [1, 4, 7]
  )
) // [2, 4, 6]

console.log(
  compareArrays(
    placeScarecrows([1, 1, 0, 1, 1, 0, 1], 3),
    [1, 4, 6]
  )
) // [1, 4, 6]

console.log(
  compareArrays(
    placeScarecrows([1, 0, 1, 1, 0, 1], 3),
    [0, 3, 5]
  )
) // [0, 3,4]

console.log(
  compareArrays(
    placeScarecrows([1, 1, 1, 1, 1], 1),
    [0, 1, 2, 3, 4]
  )
) // [0, 1, 2, 3, 4]

console.log(
  compareArrays(placeScarecrows([1, 1, 1, 1, 1], 19), [2])
) // [4]
