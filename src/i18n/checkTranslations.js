import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import _ from "lodash";
import chalk from "chalk";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const translationsDirectory = fs.readdirSync(`${__dirname}/translations`);

let prevKeys = 0;

for (let index = 0; index < translationsDirectory.length; index++) {
  const fileName = translationsDirectory[index];

  const jsonData = fs.readFileSync(
    `${__dirname}/translations/${fileName}`,
    "utf8"
  );

  const parsedData = JSON.parse(jsonData);

  if (index === 0) {
    const keys = Object.keys(parsedData).length;
    prevKeys = keys;
  }

  if (index > 0) {
    const keys = Object.keys(parsedData).length;
    if (keys !== prevKeys) {
      console.log(chalk.red("ERROR:"));
      console.log(
        chalk.red(
          "The translation files are not equal, please review them"
        )
      );
      process.exit(1);
    }
    prevKeys = keys;
  }
}

console.log(chalk.green("All translation files are OK"));