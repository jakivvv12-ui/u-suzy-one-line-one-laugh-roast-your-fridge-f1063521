import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry = "My fridge's crisper drawer is where spinach becomes evidence, while the butter somehow survives every investigation.";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), `${entry}\n`, "utf8");
