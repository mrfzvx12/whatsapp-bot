const cfonts = require('cfonts');
const spin = require('spinnies');
const Crypto = require('crypto');
const moment = require("moment-timezone");
const fs = require('fs');
const { spawn } = require("child_process");

/** -- function
* detected link
*/
const isUrl = (url) => {
       return url.match(
        new RegExp(
          /https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/,
          "gi"
        )
      );
    };

const isLinkyt = (url) => {
       return url.match(
        new RegExp(
          /(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/,
          "gi"
        )
      );
    };

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

/**
 * format jam
*/
const kyun = (s) =>{
    function pad(s) {
        return (s < 10 ? '0' : '') + s;
    }
    var hours = Math.floor(s / (60 * 60));
    var minutes = Math.floor(s % (60 * 60) / 60);
    var seconds = Math.floor(s % 60);
    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
};


/**
 * Penyebutan hari dan tanggal 
 */
     let d = new Date();
     let locale = "id";
     let gmt = new Date(0).getTime() - new Date("1 January 1970").getTime();
     let weton = ["Pahing", "Pon", "Wage", "Kliwon", "Legi"][
      Math.floor((d * 1 + gmt) / 84600000) % 5
    ];
     let week = d.toLocaleDateString(locale, { weekday: "long" });
     let date = d.toLocaleDateString(locale, {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
     let waktu = d.toLocaleDateString(locale, {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    });
     let tanggal = week + " " + weton + ", " + date;

    function formatDate(n, locale = 'id') {
      let d = new Date(n)
      return d.toLocaleDateString(locale, {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric' 
      })
    }

/**
 * Timezone 3 wilayah di Indonesia
 */
     const time = moment().tz("Asia/Jakarta").format("HH:mm:ss");
     const WIB = moment().tz("Asia/Jakarta").format("HH:mm:ss");
     const WIT = moment().tz("Asia/Jayapura").format("HH:mm:ss");
     const WITA = moment().tz("Asia/Makassar").format("HH:mm:ss");
    
/**
 * Penyebutan bilangan ribuan dan seterusnya
 */
const h2k = (number) => {
    var SI_POSTFIXES = ["", " K", " M", " G", " T", " P", " E"];
    var tier = Math.log10(Math.abs(number)) / 3 | 0;
    if(tier == 0) return number;
    var postfix = SI_POSTFIXES[tier];
    var scale = Math.pow(10, tier * 3);
    var scaled = number / scale;
    var formatted = scaled.toFixed(1) + '';
    if (/\.0$/.test(formatted));
      formatted = formatted.substr(0, formatted.length - 2);
    return formatted + postfix;
};

/**
 * pembuat exif untuk watermark sticker
*/
const createExif = (pack, auth) =>{
    const code = [0x00,0x00,0x16,0x00,0x00,0x00];
    const exif = {"sticker-pack-id": "com.client.tech", "sticker-pack-name": pack, "sticker-pack-publisher": auth, "android-app-store-link": "https://play.google.com/store/apps/details?id=com.termux", "ios-app-store-link": "https://itunes.apple.com/app/sticker-maker-studio/id1443326857"};
    let len = JSON.stringify(exif).length;
    if (len > 256) {
        len = len - 256;
        code.unshift(0x01);
    } else {
        code.unshift(0x00);
    }
    if (len < 16) {
        len = len.toString(16);
        len = "0" + len;
    } else {
        len = len.toString(16);
    }
    const _ = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00]);
    const __ = Buffer.from(len, "hex");
    const ___ = Buffer.from(code);
    const ____ = Buffer.from(JSON.stringify(exif));
    fs.writeFileSync('./temp/data.exif', Buffer.concat([_, __, ___, ____]), function (err) {
        console.log(err);
        if (err) return console.error(err);
        return `./temp/data.exif`;
    });
};


const modStick = (media, client, mek, from) => {
    out = getRandom('.webp');
    try {
        spawn('webpmux', ['-set','exif', './temp/data.exif', media, '-o', out])
        .on('exit', () => {
            client.sendMessage(from, fs.readFileSync(out), 'stickerMessage', {quoted: mek});
            fs.unlinkSync(out);
            fs.unlinkSync(media);
        });
    } catch (e) {
        console.log(e);
        client.sendMessage(from, 'Terjadi keslahan', 'conversation', { quoted: mek });
        fs.unlinkSync(media);
    }
};



const randomBytes = (length) => {
    return Crypto.randomBytes(length);
};

const generateMessageID = () => {
    return randomBytes(6).toString('hex').toUpperCase();
};

const getGroupAdmins = (participants) => {
	admins = [];
	for (let i of participants) {
		i.isAdmin ? admins.push(i.jid) : '';
	}
	return admins;
};

const getRandom = (ext) => {
	return `${Math.floor(Math.random() * 10000)}${ext}`;
};

module.exports = {
  createExif,
  modStick,
  h2k,
  isUrl,
  isLinkyt,
  pickRandom,
  generateMessageID, 
  getGroupAdmins, 
  getRandom,
  kyun,
  time,
  WIB,
  WITA,
  WIT,
  weton,
  week,
  date,
  waktu,
  tanggal,
  formatDate
}
