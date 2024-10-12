const cleanAllRolls = () => {

  const currentFile = app.workspace.getActiveFile();
  app.fileManager.processFrontMatter(currentFile, (fm) => {
    fm["appResult"] = "";
    fm["dexResult"] = "";
    fm["endResult"] = "";
    fm["migResult"] = "";
    fm["tecResult"] = "";
    fm["imaResult"] = "";
    fm["memResult"] = "";
    fm["perResult"] = "";
    fm["reaResult"] = "";
    fm["wilResult"] = "";
    fm["conResult"] = "";
    fm["empResult"] = "";
    fm["preResult"] = "";
    fm["resResult"] = "";
    fm["wisResult"] = "";
    fm["luckResult"] = "";
  });
}

module.exports = cleanAllRolls;