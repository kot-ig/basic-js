/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles( names ) {
  const namesMap = {};
  let i = 0;
  let fileName;
  const fileNames = [];

  while (fileName = names[i++]) {
    namesMap[fileName] = namesMap[fileName] + 1 || 0;

    if(namesMap[fileName]) {
      const newName = namesMap[fileName] ? `${fileName}(${namesMap[fileName]})` : fileName;
      namesMap[newName] = namesMap[newName] + 1 || 0;
      fileNames.push(newName);

    } else {
      fileNames.push(fileName);
    }
  }
  return fileNames;
}

module.exports = {
  renameFiles
};
