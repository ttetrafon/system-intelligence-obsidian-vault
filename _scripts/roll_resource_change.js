const cleaner = require("/_scripts/clean_rolls_from_character_sheet.js");

console.log(`roll resource.js: ${context.file.path}; ${JSON.stringify(context.args)}!`);
cleaner();

let resourceLadder = [
  "0",
  "d4",
  "d6",
  "d8",
  "d10",
  "d12",
  "d20",
  "d20+d4",
  "d20+d6",
  "d20+d8",
  "d20+d10",
  "d20+d12",
  "2d20"
];
let resourceChecks = {
  "0": [],
  "d4": [4],
  "d6": [6],
  "d8": [8],
  "d10": [10],
  "d12": [12],
  "d20": [20],
  "d20+d4": [20, 4],
  "d20+d6": [20, 6],
  "d20+d8": [20, 8],
  "d20+d10": [20, 10],
  "d20+d12": [20, 12],
  "2d20": [20, 20]
};

const currentFile = app.workspace.getActiveFile();
app.fileManager.processFrontMatter(currentFile, (fm) => {
  let resourceToChange = context.args.resource;
  let resource = fm[resourceToChange];
  let target = fm[resourceToChange.toLowerCase() + "Target"];
  let direction = context.args.direction;

  let initial = resourceLadder.indexOf(resource);
  let final = -1;
  let check = -1;
  if ((initial == 0) && (direction > 0)) {
    final = 1;
  }
  else if ((initial == resourceLadder.length - 1) && (direction > 0)) {
    final = initial;
  }
  else if (initial > 0) {
    let dice = resourceChecks[resource];
    let max = dice.reduce((a, b) => a + b, 0);
    // TODO: check for target ve max

    check = dice.reduce((a, b) => {
      let r = Math.floor(1 + Math.random() * b);
      console.log(a, "<>", b, ":=", r);
      return a + r;
    }, 0);

    if (check <= target) {
      final = initial + direction;
    }
  }

  let res = resource;
  if (final >= 0) {
    res = resourceLadder[final];
    fm[resourceToChange] = res;
  }
  let trace = `${resourceToChange}=${resource} -> target ${target} towards ${direction > 0 ? "gain" : "spend"} -> roll ${check} -> result ${res}`;
  fm[resourceToChange.toLowerCase() + "Result"] = trace;
  console.log(trace);
});
