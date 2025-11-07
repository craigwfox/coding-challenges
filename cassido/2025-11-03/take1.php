<?php declare(strict_types=1);

function knightMoves(array $pos): array | string {
	$movement = [
		[1, 2],
		[1, -2],
		[-1, 2],
		[-1, -2],
		[2, 1],
		[2, -1],
		[-2, 1],
		[-2, -1],
	];

	[$x, $y] = $pos;

	if($x < 0 || $x >8 || $y < 0 || $y >8) return "⚠️ Out of bounds";

	$moves = [];

	foreach ($movement as [$dx,$dy]) {
		[$a, $b] =[$dx + $x, $dy + $y];

		if($a >= 0 && $a <= 8 & $b >= 0 & $b <= 8)
			$moves[] = [$a, $b];
	}

	return $moves;
}

print_r(knightMoves([8,8]));