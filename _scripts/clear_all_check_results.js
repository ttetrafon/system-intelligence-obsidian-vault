const cleaner = require("/_scripts/clean_rolls_from_character_sheet.js");

console.log(`clear_all_check_results.js: ${context.file.path}; ${JSON.stringify(context.args)}!`);
cleaner();
