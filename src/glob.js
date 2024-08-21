import { createReadStream } from "node:fs";
import { glob } from "node:fs/promises";
import { styleText } from "node:util";

for await (const file of glob(`${import.meta.dirname}/**/*`)) {
	console.log(styleText(["green", "underline"], file));

	if (file.endsWith(".js")) {
		const stream = createReadStream(file);

		for await (const chunk of stream) {
			process.stdout.write(chunk);
		}
	}
}
