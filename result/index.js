const fs = require('fs');
// new function
function readfile(file) {
  return JSON.parse(fs.readFileSync(file));
}

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

// -- file from result json
const _truth = readfile('./result/random/truth.json');
const _dare = readfile('./result/random/dare.json');
const _dilan = readfile('./result/random/dilan.json');
const _fakta = readfile('./result/random/fakta.json');
const _gombal = readfile('./result/random/gombal.json');
const _hacker = readfile('./result/random/hacker.json');
const _ilham = readfile('./result/random/hacker.json');

// -- get results
const truth = () => {
 return pickRandom(_truth);
};

const dare = () => {
 return pickRandom(_dare);
};

const dilan = () => {
 return pickRandom(_dilan);
};

const ilham = () => {
 return pickRandom(_ilham);
};

const fakta = () => {
 return pickRandom(_fakta);
};

const gombal = () => {
 return pickRandom(_gombal);
};

const hacker = () => {
 return pickRandom(_hacker);
};


// -- result download
const { pinterest } = require('./download/pinterest_img');
const { igDl } = require('./download/instagramPost_dl');
const { Ttdl } = require('./download/tiktokPost_dl');
const { joox } = require('./download/jooxDl');
const { yta, ytv } = require('./download/yt_download');
// -- result search
const { playstore } = require('./search/playstore');
const { RandomCerpen } = require('./search/cerpen');

// information
const { covid  } = require('./informasi/corona');
const { namaninja, purba, blackpill, typewriter, sans, castle } =  require('./informasi/text_generator');
const { ArtiMimpi, ArtiNama, zodiakHari, zodiakMinggu } = require('./informasi/primbon');

module.exports = {
  truth,
  dare,
  dilan,
  ilham,
  fakta,
  gombal,
  hacker,
  covid,
  namaninja,
  purba,
  blackpill, 
  typewriter, 
  sans, 
  castle,
  pinterest,
  playstore,
  RandomCerpen,
  igDl,
  Ttdl,
  joox,
  yta,
  ytv,
  ArtiMimpi,
  ArtiNama,
  zodiakHari,
  zodiakMinggu
};