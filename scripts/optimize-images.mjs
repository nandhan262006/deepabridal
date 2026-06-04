import sharp from 'sharp';
import { readdir, stat, mkdir } from 'fs/promises';
import { join, parse } from 'path';

const PUBLIC_DIR = new URL('../public', import.meta.url).pathname;
const MAX_WIDTH = 800;
const QUALITY = 82;

const imageExtensions = new Set(['.jpeg', '.jpg', '.png']);

async function* walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isFile()) yield full;
    else if (entry.isDirectory() && entry.name !== 'node_modules') yield* walk(full);
  }
}

async function optimize() {
  let totalSaved = 0;
  let totalOriginal = 0;
  let count = 0;

  for await (const filePath of walk(PUBLIC_DIR)) {
    const ext = parse(filePath).ext.toLowerCase();
    if (!imageExtensions.has(ext)) continue;

    const outPath = filePath.replace(/\.(jpe?g|png)$/i, '.webp');
    // skip if already exists and is newer than source
    try {
      const outStat = await stat(outPath);
      const srcStat = await stat(filePath);
      if (outStat.mtimeMs >= srcStat.mtimeMs) {
        const origSize = srcStat.size;
        const newSize = outStat.size;
        totalOriginal += origSize;
        totalSaved += newSize;
        count++;
        continue;
      }
    } catch {}

    const img = sharp(filePath);
    const meta = await img.metadata();
    let pipeline = img;

    if (meta.width > MAX_WIDTH) {
      pipeline = pipeline.resize({ width: MAX_WIDTH, withoutEnlargement: true });
    }

    const { size: origSize } = await stat(filePath);
    await pipeline.webp({ quality: QUALITY }).toFile(outPath);
    const { size: newSize } = await stat(outPath);

    totalOriginal += origSize;
    totalSaved += newSize;
    count++;

    const pct = ((1 - newSize / origSize) * 100).toFixed(1);
    console.log(`${'✔'.padEnd(2)} ${parse(filePath).base} (${(origSize / 1024).toFixed(0)}KB → ${(newSize / 1024).toFixed(0)}KB, -${pct}%)`);
  }

  const savedMb = ((totalOriginal - totalSaved) / (1024 * 1024)).toFixed(1);
  console.log(`\n✅ Optimized ${count} images. Total reduction: ${savedMb}MB (${(totalOriginal / (1024 * 1024)).toFixed(1)}MB → ${(totalSaved / (1024 * 1024)).toFixed(1)}MB)`);
}

optimize().catch(err => { console.error(err); process.exit(1); });
