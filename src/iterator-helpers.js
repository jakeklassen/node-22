function* naturals() {
	let i = 0;
	while (true) {
		yield i++;
	}
}

console.log(
	naturals()
		.take(5)
		.flatMap((i) => [i, i * 2])
		.toArray(),
);
