type Move = [number, number];

function knightMoves(pos: Move) {
	const movement: Move[] = [
		[1, 2],
		[1, -2],
		[-1, 2],
		[-1, -2],
		[2, 1],
		[2, -1],
		[-2, 1],
		[-2, -1],
	];

	const [x, y] = pos;

	if (x < 0 || x > 8 || y < 0 || y > 8) return "⚠️ Out of bounds";

	return movement
		.map(([dx, dy]) => [dx + x, dy + y])
		.filter((a) => a.filter((b) => b >= 0 && b <= 8).length === 2)
		.sort();
}

console.log("🐎 =>", knightMoves([0, 0]));

function castleMoves(pos: Move) {
	const [x, y] = pos;

	if (x < 0 || x > 8 || y < 0 || y > 8) return "⚠️ Out of bounds";

	const moves: Move[] = [];
	const movement: Move = [-8, 8];

	// moves.forEach
	return "";
}
console.log("🏰 =>", castleMoves([0, 0]));
