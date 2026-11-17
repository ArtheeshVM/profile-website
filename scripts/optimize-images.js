
const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const imageTasks = [
  {
    folder: "images/hobbies",
    output: "optimized-images/hobbies",
    width: 900,
    height: 900,
    quality: 80,
  },
  {
    folder: "images/family",
    output: "optimized-images/family",
    width: 600,
    height: 600,
    quality: 80,
  },
  {
    folder: "images/hero",
    output: "optimized-images/hero",
    width: 800,
    height: 800,
    quality: 82,
  },
];

async function optimizeImages() {
  for (const task of imageTasks) {
    const inputFolder = path.resolve(task.folder);
    const outputFolder = path.resolve(task.output);

    if (!fs.existsSync(inputFolder)) {
      console.log(`Folder not found: ${task.folder}`);
      continue;
    }

    fs.mkdirSync(outputFolder, { recursive: true });

    const supportedExtensions = [".jpg", ".jpeg", ".png", ".webp"];

    const files = fs.readdirSync(inputFolder).filter((file) =>
    supportedExtensions.includes(path.extname(file).toLowerCase())
    );

    for (const file of files) {
      const inputPath = path.join(inputFolder, file);

      if (!fs.statSync(inputPath).isFile()) {
        continue;
      }

      const outputName = `${path.parse(file).name}.webp`;
      const outputPath = path.join(outputFolder, outputName);

      try {
        const originalSize = fs.statSync(inputPath).size;

        await sharp(inputPath)
          .rotate()
          .resize(task.width, task.height, {
            fit: "inside",
            withoutEnlargement: true,
          })
          .webp({
            quality: task.quality,
            effort: 6,
          })
          .toFile(outputPath);

        const optimizedSize = fs.statSync(outputPath).size;
        const savings = (
          (1 - optimizedSize / originalSize) *
          100
        ).toFixed(1);

        console.log(`\nImage: ${file}`);
        console.log(
          `Original: ${(originalSize / 1024).toFixed(1)} KB`
        );
        console.log(
          `Optimized: ${(optimizedSize / 1024).toFixed(1)} KB`
        );
        console.log(`Size change: ${savings}%`);
      } catch (error) {
        console.error(`Failed to optimize ${file}:`, error.message);
      }
    }
  }

  console.log("\nImage optimization completed.");
}

optimizeImages();
