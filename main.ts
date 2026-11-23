// Revised after local test
import { writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
mkdirSync(outputDir, { recursive: true });
const entryPath = join(outputDir, 'entry.txt');
writeFileSync(entryPath, 'A');