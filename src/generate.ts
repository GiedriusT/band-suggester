import * as fs from 'fs';

// Get the parent folder path from the command line arguments
const [,, parentFolder] = process.argv;

fs.readdir(parentFolder, (err, files) => {
  if (err) {
    console.error(`Error reading directory: ${err}`);
    return;
  }

  const filteredFolders = files
    .filter(file => fs.statSync(`${parentFolder}/${file}`).isDirectory())
    .filter(folder => folder.includes(' - '))
    .map(folder => folder.split(' - ')[0])
    .filter((folder, index, self) => self.indexOf(folder) === index);

  const data = JSON.stringify(filteredFolders);

  fs.writeFile('./assets/artistsFromSorted.json', data, (err) => {
    if (err) {
      console.error(`Error writing to file: ${err}`);
      return;
    }
    console.log('Filtered folders saved to artistsFromSorted.json');
  });
});
