/*
* Given a positive integer n,
* write a function that returns an array containing all integers from 1 to n,
* where each integer i appears exactly i times in the result.
* For example, 3 should appear 3 times, 5 should appear 5 times, and so on.
* The order of the integers in the output array does not matter.
*
* Example Output:
* > repeatedIntegers(4)
> [1, 2, 2, 3, 3, 3, 4, 4, 4, 4]
*/

function repeatedIntegers(x: number) {
	let arry: number[] = []
	let i = 1
	while (i <= x) {
		let p = 1
		while (p <= i) {
			arry.push(i)
			p++
		}
		i++
	}
	return arry
}

console.log(repeatedIntegers(0))
