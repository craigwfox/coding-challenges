type CompareArry = number | string
export function compareArrays(
  a: CompareArry[],
  b: CompareArry[]
) {
  if (a.length != b.length) return false
  return a.every((x, i) => x === b[i])
}
