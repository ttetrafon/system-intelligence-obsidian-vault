const cleaner = require("/_scripts/clean_rolls_from_character_sheet.js");

console.log(`roll check.js: ${context.file.path}; ${JSON.stringify(context.args)}!`);
cleaner();

const currentFile = app.workspace.getActiveFile();
app.fileManager.processFrontMatter(currentFile, (fm) => {
  let attributeToRoll = context.args.attribute;
  let score = fm[attributeToRoll];

  let roll = 1 + Math.floor(Math.random() * 100);
  let degreeOfSuccess;
  let successLevel;
  if (roll <= Math.floor(score / 50)) {
    degreeOfSuccess = 6;
    successLevel = "impossible";
  }
  else if (roll <= Math.floor(score / 10)) {
    degreeOfSuccess = 5;
    successLevel = "critical";
  }
  else if (roll <= Math.floor(score / 4)) {
    degreeOfSuccess = 4;
    successLevel = "extreme";
  }
  else if (roll <= Math.floor(score / 2)) {
    degreeOfSuccess = 3;
    successLevel = "hard";
  }
  else if (roll <= Math.floor(score * 3 / 4)) {
    degreeOfSuccess = 2;
    successLevel = "difficult";
  }
  else if (roll <= score) {
    degreeOfSuccess = 1;
    successLevel = "regular";
  }
  else if (roll == 100 || roll >= Math.floor(90 + score / 10)) {
    degreeOfSuccess = -3;
    successLevel = "fumble";
  }
  else {
    degreeOfSuccess = -1;
    successLevel = "failure";
  }

  let resultName = attributeToRoll.toLowerCase() + "Result";
  fm[resultName] = `${roll}/${score} (${successLevel}; ${degreeOfSuccess})`;
});
