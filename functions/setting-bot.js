const fs = require('fs');

const st = JSON.parse(fs.readFileSync('./database/setting-bot.json'));

/**
 * add new name bot to database 
 * @param { Object } value
*/
const addName = (value) => {
st.nama = value;
fs.writeFileSync('./database/setting-bot.json', JSON.stringify(st, null, "\t"));
};

/**
 * add new author bot to database 
 * @param { Object } value
*/
const addAuthor = (value) => {
st.author = value;
fs.writeFileSync('./database/setting-bot.json', JSON.stringify(st, null, "\t"));
};

/**
 * add new packname bot to database 
 * @param { Object } value
*/
const addPackname = (value) => {
st.packname = value;
fs.writeFileSync('./database/setting-bot.json', JSON.stringify(st, null, "\t"));
};

/**
 * add new wm bot to database 
 * @param { Object } value
*/
const addWm = (value) => {
st.wm = value;
fs.writeFileSync('./database/setting-bot.json', JSON.stringify(st, null, "\t"));
};

/**
 * add new poin game bot to database 
 * @param { Number } value
*/
const addPoingame = (value) => {
st.poinGame = value;
fs.writeFileSync('./database/setting-bot.json', JSON.stringify(st, null, "\t"));
};

/**
 * add new game waktu bot to database 
 * @param { Number } value
*/
const addGamewaktu = (value) => {
st.gameWaktu = value;
fs.writeFileSync('./database/setting-bot.json', JSON.stringify(st, null, "\t"));
};

/**
 * add status public bot to database 
 * @param {Boolean } true
*/
const addCmd = () => {
st.totalcommand += 1;
fs.writeFileSync('./database/setting-bot.json', JSON.stringify(st, null, "\t"));
};


module.exports = {
  st,
  addName,
  addAuthor,
  addPackname,
  addWm,
  addGamewaktu,
  addPoingame,
  addCmd
};