import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import _ from "lodash";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const translationsDirectory = fs.readdirSync(`${__dirname}/translations`);

for (let index = 0; index < translationsDirectory.length; index++) {
  const fileName = translationsDirectory[index];

  const jsonData = fs.readFileSync(
    `${__dirname}/translations/${fileName}`,
    "utf8"
  );

  const parsedData = JSON.parse(jsonData);

  let sortedData = {};

  _(parsedData)
    .keys()
    .sort()
    .each((key) => {
      sortedData[key] = parsedData[key];
    });

  try {
    fs.writeFileSync(
      `${__dirname}/translations/${fileName}`,
      JSON.stringify(sortedData, null, "\t")
    );
  } catch (error) {
    console.error("Error writing the json file", error);
  }
}