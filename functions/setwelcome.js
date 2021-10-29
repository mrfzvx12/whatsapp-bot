const fs = require("fs");
const Wel = JSON.parse(fs.readFileSync('./database/welcome.json'));

const welAwal = `*Selamat Datang* @tag di @group

*Nama* : @nama
*Bio* : @about 
*Tanggal* : @tanggal 

Jangan lupa baca deskripsi group ya`;

const byeAwal = `Selamat tinggal @tag`;
/**
 * Add welcome text to db
 * @param {string} chatId
 * @param {string} text
 * @param {object} Wel
 * @returns {boolean}
 */
const addCustomWelcome = (chatId) => {
  let position = false;
  Object.keys(Wel).forEach((i) => {
    if (Wel[i].from === chatId) {
      position = true;
    }
  });
  if (position === false) {
    const obj = { 
      from: chatId, 
      textwelcome: welAwal
    };
    Wel.push(obj);
    fs.writeFileSync('./database/welcome.json', JSON.stringify(Wel, null, "\t"));
    return false;
  }
};

/**
 * Get Custom Welcome Text
 * @param {string} chatId
 * @param {object} Wel
 * @returns {Number}
 */
const getCustomWelcome = (chatId) => {
  let position = false;
  Object.keys(Wel).forEach((i) => {
    if (Wel[i].from === chatId) {
      position = i;
    }
  });
  if (position !== false) {
    return Wel[position].textwelcome;
  }
};

/**
 * Set Custom Welcome
 * @param {string} chatId
 * @param {string} text
 * @param {object} Wel
 */
const setCustomWelcome = (chatId, value) => {
  let position = false;
  Object.keys(Wel).forEach((i) => {
    if (Wel[i].from === chatId) {
      position = i;
    }
  });
  if (position !== false) {
    Wel[position].textwelcome = value;
  }
};

/**
 * Reset Custom Welcome
 * @param {string} chatId
 * @param {object} Wel
 */
const delCustomWelcome = (chatId) => {
  let position = false;
  Object.keys(Wel).forEach((i) => {
    if (Wel[i].from === chatId) {
      position = i;
    }
  });
  if (position !== false) {
    Wel[position].textwelcome = welAwal;
  }
};

module.exports = {
  Wel,
  addCustomWelcome,
  getCustomWelcome,
  setCustomWelcome,
  delCustomWelcome
};
