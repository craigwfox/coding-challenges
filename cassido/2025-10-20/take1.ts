/*
 * Given a string str and an array of positive integers widths,
 * write a function that splits the string into lines,
 * each with the exact number of characters as specified by the corresponding width.
 * Return an array of the substrings.
 * Use the last width for any remaining characters if the array is shorter than needed.
 * const str = "Supercalifragilisticexpialidocious";
 * const widths = [5, 9, 4];
 * > splitByWidths(str, widths);
 * > ['Super', 'califragi', 'list', 'icex', 'pial', 'idoc', 'ious']
 */

import { compareArrays } from "../../utils.ts"

const str = "Supercalifragilisticexpialidocious"
const expectedOne = [
  "Super",
  "califragi",
  "list",
  "icex",
  "pial",
  "idoc",
  "ious",
]
const widths = [5, 9, 4]

function splitByWidths(
  str: string,
  widths: number[]
): string[] {
  let i = 0
  let x = 0
  const strArr = [...str]
  const output: string[] = []

  while (x < strArr.length) {
    const start = x
    const width =
      i < widths.length
        ? widths[i]
        : widths[widths.length - 1]
    output.push(str.slice(start, width + start))
    x = width + x
    i++
  }

  return output
}

console.log(
  compareArrays(splitByWidths(str, widths), expectedOne),
  splitByWidths(str, widths)
)
