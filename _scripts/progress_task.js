const cleaner = require("/_scripts/clean_rolls_from_character_sheet.js");

console.log(`task progress.js: ${context.file.path}; ${JSON.stringify(context.args)}!`);
cleaner();

const currentFile = app.workspace.getActiveFile();
app.fileManager.processFrontMatter(currentFile, (fm) => {
  let taskToProgress = context.args.task;
  let taskResult = context.args.result;
  let task = fm[taskToProgress];

  let roll = Math.floor(1 + Math.random() * 100);
  let result = task;
  if (roll > task) {
    result = task + (roll % 10);
  }
  fm[taskToProgress] = result;
  fm[taskResult] = `task ${taskToProgress} (roll ${roll}): ${task} -> ${result}`;
});
