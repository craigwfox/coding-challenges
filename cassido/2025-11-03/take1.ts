type Move = [number, number];

const min = 0;
const max = 8;

function limiter(x: number, y: number) {
	return x >= min && x <= max && y >= min && y <= max;
}

function knightMoves(position: Move) {
	const movement: Move[] = [
		[1, 2],
		[2, 1],
	];
	let moves: Move[] = [];

	movement.forEach((x) => {
		moves.push([position[0] + x[0], position[1] + x[1]]);
		moves.push([position[0] + x[0], position[1] - x[1]]);
		moves.push([position[0] - x[0], position[1] - x[1]]);
		moves.push([position[0] - x[0], position[1] + x[1]]);
	});

	// log it out
	return moves.filter((x) => limiter(x[0], x[1])).sort();
}

console.log(knightMoves([6, 7]));
