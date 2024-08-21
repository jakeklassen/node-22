import { watch } from "node:fs/promises";
import { styleText } from "node:util";

for await (const event of watch(import.meta.dirname)) {
	if (event.filename?.endsWith(".js")) {
		console.log(styleText("green", `${event.filename} ${event.eventType}`));
	}
}
