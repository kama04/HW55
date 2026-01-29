console.log('#54. JavaScript homework example file');

const fs = require('fs').promises;

async function writeFileAsync(filename, content) {
  try {
    await fs.writeFile(filename, content);
    console.log('Файл успішно записано');
  } catch (error) {
    console.error('Помилка при записі файлу:', error);
    throw error;
  }
}

async function readFileAsync(filename) {
  try {
    const content = await fs.readFile(filename, 'utf8');
    console.log('Файл успішно прочитано:', content);
    return content;
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.error('Файл не існує:', filename);
    } else {
      console.error('Помилка при читанні файлу:', error);
    }
    throw error;
  }
}

async function deleteFileAsync(filename) {
  try {
    await fs.unlink(filename);
    console.log('Файл успішно видалено');
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.error('Файл не існує:', filename);
    } else {
      console.error('Помилка при видаленні файлу:', error);
    }
    throw error;
  }
}

(async () => {
  await writeFileAsync('example.txt', 'Привіт, це тестовий файл!');
  const content = await readFileAsync('example.txt');
  console.log('Прочитаний вміст:', content);
  await deleteFileAsync('example.txt');
})();

module.exports = { writeFileAsync, readFileAsync, deleteFileAsync };
