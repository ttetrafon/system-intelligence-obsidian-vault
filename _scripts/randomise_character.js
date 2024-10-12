const cleaner = require("/_scripts/clean_rolls_from_character_sheet.js");

console.log(`randomise-character.js: ${context.file.path}; ${JSON.stringify(context.args)}!`);
cleaner();

const currentFile = app.workspace.getActiveFile();
app.fileManager.processFrontMatter(currentFile, (fm) => {
  fm["APP"] = 15 + Math.floor(Math.random() * 60);
  fm["DEX"] = 15 + Math.floor(Math.random() * 60);
  fm["END"] = 15 + Math.floor(Math.random() * 60);
  fm["MIG"] = 15 + Math.floor(Math.random() * 60);
  fm["TEC"] = 15 + Math.floor(Math.random() * 60);
  fm["IMA"] = 15 + Math.floor(Math.random() * 60);
  fm["MEM"] = 15 + Math.floor(Math.random() * 60);
  fm["PER"] = 15 + Math.floor(Math.random() * 60);
  fm["REA"] = 15 + Math.floor(Math.random() * 60);
  fm["WIL"] = 15 + Math.floor(Math.random() * 60);
  fm["CON"] = 15 + Math.floor(Math.random() * 60);
  fm["EMP"] = 15 + Math.floor(Math.random() * 60);
  fm["PRE"] = 15 + Math.floor(Math.random() * 60);
  fm["RES"] = 15 + Math.floor(Math.random() * 60);
  fm["WIS"] = 15 + Math.floor(Math.random() * 60);
});
