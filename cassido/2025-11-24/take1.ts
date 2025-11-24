/*
 * Given an array of meal prep tasks for Thanksgiving,
 * where each task is represented as [taskName, startTime, endTime],
 * return the maximum number of non-overlapping tasks you can complete,
 * along with the names of the chosen tasks in the order they were selected.
 * Task times are inclusive of start but exclusive of end.
 * Example:
 *
 * const tasks = [
 *   ["Make Gravy", 10, 11],
 *   ["Mash Potatoes", 11, 12],
 *   ["Bake Rolls", 11, 13],
 *   ["Prep Salad", 12, 13]
 * ];
 *
 * maxMealPrepTasks(tasks)
 > {
 *   count: 3,
 *   chosen: ["Make Gravy", "Mash Potatoes", "Prep Salad"]
 * }
 */

interface Output {
	count: number
	chosen: string[]
}

const tasks: (string | number)[][] = [
	["Make Gravy", 10, 11],
	["Mash Potatoes", 11, 12],
	["Bake Rolls", 11, 13],
	["Prep Salad", 12, 13],
]

function checkOverlap(
	item: (string | number)[],
	arry: (string | number)[][],
): boolean {
	let hasOverlap = false
	arry.forEach(x => {
		// Do start times collide
		if (item[1] === x[1]) {
			hasOverlap = true
		}

		// Does start time fall within existing
		if (item[1] >= x[1] && item[1] < x[2]) {
			hasOverlap = true
		}

		// Does end time fall within existing
		if (item[2] >= x[1] && item[2] <= x[2]) {
			hasOverlap = true
		}

		// is the start before and end after
		if (item[1] < x[1] && item[2] > x[2]) {
			hasOverlap = true
		}
	})

	return hasOverlap
}

function maxMealPrepTasks(
	_tasks: (string | number)[][],
): Output {
	let output: (string | number)[][] = []

	_tasks.forEach(task => {
		if (output.length < 1) {
			output.push(task)
		} else if (!checkOverlap(task, output)) {
			output.push(task)
		}
	})

	return {
		count: output.length,
		chosen: output.map(x => x[0].toString()),
	}
}

console.log(maxMealPrepTasks(tasks))
