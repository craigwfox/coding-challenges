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
 * > {
 *   count: 3,
 *   chosen: ["Make Gravy", "Mash Potatoes", "Prep Salad"]
 * }
 */

const tasks2: (string | number)[][] = [
	["Make Gravy", 10, 11],
	["Mash Potatoes", 11, 12],
	["Bake Rolls", 11, 13],
	["Prep Salad", 12, 13],
]

function maxMealPrepTasks2(_tasks: (string | number)[][]) {
	let out: (string | number)[][] = []
	_tasks.map(x => {
		let add = true
		out.forEach(y => {
			if (
				Math.max(x[2], y[2]) - Math.min(x[1], y[1]) <
				x[2] - x[1] + (y[2] - y[1])
			)
				add = false
		})
		if (add) out.push(x)
	})
	return {
		count: out.length,
		chosen: out.map(x => x[0]?.toString()),
	}
}

console.log(maxMealPrepTasks2(tasks2))
