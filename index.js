// "use strict" ? difficult mode

// semua functions sudah di buat sesimpel mungkin jika menemukan bug/typo dalam penulisan bisa beritahu saya di issue

// connecting WhatsApp web menggunakan Baileys https://www.github.com/adiwajshing/baileys
const {
  WAConnection: _WAConnection,
  MessageType,
  Presence,
  MessageOptions,
  Mimetype,
  MimetypeMap,
  WALocationMessage,
  ChatModification,
  WA_MESSAGE_STUB_TYPES,
  WA_DEFAULT_EPHEMERAL,
  ReconnectMode,
  ProxyAgent,
  GroupSettingChange,
  waChatKey,
  mentionedJid,
  processTime
} = require("@adiwajshing/baileys");

// functions node modules
const speed = require('performance-now');
const moment = require("moment-timezone");
const { spawn, exec, execSync } = require("child_process");
let path = require('path');
const ffmpeg = require("fluent-ffmpeg");
const toMs = require('ms');
const fs = require("fs");
const similarity = require('similarity');
const threshold = 0.72;
const lxa = require('./result/index');
const package = require('./package.json');
// functions dalam library
const simple = require('./whatsapp/connecting');
const { color, bgcolor } = require('./library/color');
const { 
  getBuffer,
  createExif,
  modStick,
  h2k, 
  isUrl,
  pickRandom,
  generateMessageID, 
  getGroupAdmins,
  getRandom,
  kyun,
  weton,
  week,
  date,
  waktu,
  tanggal,
  time,
  WIB,
  WITA,
  WIT,
  ucapanWaktu,
} = require('./library/functions');

// functions

const {
  direc,
  addImage,
  addVideo,
  addStiker,
  addAudio
} = require('./functions/directory');


const { 
  User, 
  cekRegis,
  addRegister,
  addUser, 
  cekUser,
  cekPoin, 
  addPoin, 
  addLevel,
  cekLevel,
  cekBanned, 
  addBanned, 
  delBanned,
  cekPremium,
  addPremium,
  delPremium,
  addAfk,
  delAfk,
  cekAfk,
  cekAfkReason,
  cekAfkTime,
  addWarn,
  delWarn,
  cekWarn,
  addBahasa,
  cekBahasa
} = require('./functions/user'); // mengubah dan mengambil data user dalam ./database/user

const {
  Group,
  addGroup,
  addOffline,
  delOffline,
  cekOffline,
  addWelcome,
  delWelcome,
  cekWelcome,
  addAntilink,
  delAntilink,
  cekAntilink,
  addBadword,
  delBadword,
  cekBadword,
  addAntidelete,
  delAntidelete,
  cekAntidelete,
  addDetect,
  delDetect,
  cekDetect
} = require('./functions/group'); // mengubah dan mengambil data dalam ./database/group

const {
  st,
  addName,
  addAuthor,
  addPackname,
  addWm,
  addGamewaktu,
  addPoingame,
  addCmd
} = require('./functions/setting-bot'); // mengubah data dalam ./database/setting-bot
const { msgFilter } = require('./functions/antispam')
const { menu } = require('./functions/menu'); // tampilan menu dalam functions/menu
const { ind, eng } = require('./language/index');

// functions dalam ./functions/setting-bot
let ownerNumber = st.ownerNumber; // nomor owner
let prefix = st.prefix; // prefix
let listprefix = st.listprefix; // list prefi
let isPoingame = st.poinGame; // menampilkan poin hadiah keberhasilan dalam game
let isGamewaktu = st.gameWaktu; // waktu yang dibutuhkan untuk game
let isPoinawal = st.poinAwal; // poin awal adalah poin yang harus di capai untuk menaikkan level
let isNama = st.nama; // nama bot
let isAuthor = st.author; // author digunakan dalam fitur sticker
let isPackname = st.packname; // packname digunakan dalam fitur sticker
let isWm = st.wm; // wm ini di gunakan untuk deskripsi dalam button message
let isTotalcmd = st.totalcommand; // informasi jumlah command yang di gunakan user 

// -- thumbnail
let thumb = fs.readFileSync('./temp/thumb.jpeg'); // !! jangan ganti, mau ganti ada casenya

let fakethumb = fs.readFileSync('./temp/thumbnail.jpeg'); // !! jangan ganti, mau ganti ada casenya

let baterai = {
    baterai: 0,
    cas: false
};

module.exports = client = async (client, mek) => {
  try {
    if (!mek.hasNewMessage) return;
    mek = mek.messages.all()[0];
    if (!mek.message) return;
    if(mek.key.fromMe) return; // hapus untuk pengguna self bot namun akan error pada fitur game
    if (mek.key && mek.key.remoteJid == 'status@broadcast') return;
    mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
    let m = simple.smsg(client, mek);
    global.prefix;
    global.blocked;
    const content = JSON.stringify(mek.message);
    const from = mek.key.remoteJid;
    const type = Object.keys(mek.message)[0];
    const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType;
    const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = client.user.phone;
//--
    let body =
      type === "conversation" && mek.message.conversation
        ? mek.message.conversation
        : type == "imageMessage" && mek.message.imageMessage.caption
        ? mek.message.imageMessage.caption
        : type == "videoMessage" && mek.message.videoMessage.caption
        ? mek.message.videoMessage.caption
        : type == "extendedTextMessage" && mek.message.extendedTextMessage.text
        ? mek.message.extendedTextMessage.text
        : type == "buttonsResponseMessage" && mek.message[type].selectedButtonId
        ? mek.message[type].selectedButtonId
        : '';
      for(var v of listprefix){
			if(body.startsWith(v)){
			  prefix = v ;
			}
      }
     const budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : '';
     const command = body.slice(1).trim().split(/ +/).shift().toLowerCase();
     const args = body.trim().split(/ +/).slice(1);
     const more = String.fromCharCode(8206);
     const readMore = more.repeat(4000);
     const value = args.join(' ');
     const isCmd = body.startsWith(prefix);
     const totalchat = await client.chats.all();
     const botNumber = client.user.jid;
     
//-- Group Metadata
     const isGroup = from.endsWith('@g.us');
     const sender = isGroup ? mek.participant : mek.key.remoteJid;
     const groupMetadata = isGroup ? await client.groupMetadata(from) : '';
     const groupName = isGroup ? groupMetadata.subject : '';
     const groupId = isGroup ? groupMetadata.jid : '';
     const groupMembers = isGroup ? groupMetadata.participants : '';
     const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : '';
     const isOwner = ownerNumber.includes(sender) || false;
     const isBotAdmins = groupAdmins.includes(botNumber) || false;
     const isAdmins = groupAdmins.includes(sender) || false;
     let conts = mek.key.fromMe ? client.user.jid : client.contacts[sender] || { notify: jid.replace(/@.+/, '') };
     const pushname = mek.key.fromMe ? client.user.name : conts.name || conts.vname || conts.notify || '-';
     let siapa = mek.quoted ? mek.quoted.sender : mek.mentionedJid && mek.mentionedJid[0] ? mek.mentionedJid[0] : mek.fromMe ? client.user.jid : mek.sender;
     let dia = mek.quoted ? mek.quoted.sender : mek.mentionedJid && mek.mentionedJid[0] ? mek.mentionedJid[0] : false;

// cek Informasi user
     let isPoin = cekPoin(sender);
     let isLevel = cekLevel(sender);
     let isPremium = cekPremium(sender);
     let isBanned = cekBanned(sender);
     let isAfk = cekAfk(sender);
     let isAfkTime = cekAfkTime(sender);
     let isAfkReason = cekAfkReason(sender);
     let isOffline = cekOffline(from);
     let isWelcome = cekWelcome(from);
     let isAntidelete = cekAntidelete(from);
     let isAntilink = cekAntilink(from);
     let isDetect = cekDetect(from);
     let isRegister = cekRegis(sender);
     let msg = cekBahasa(sender);
     
          // -- bahasa
     if (msg === "indonesia") {
       msg = ind;
     } else if (msg === "english") {
       msg = eng;
     } else {
       msg = ind;
     }
     
     // functions penyebutan user premium
     if (isPremium) {
       prem = "Yes";
     } else {
       prem = "No";
     }
     
// -- baterai
client.on('CB:action,,battery', json => {
	const a = json[2][0][1].value;
	const b = json[2][0][1].live;
	baterai.baterai = a;
	baterai.cas = b;
});
     
// detected quoted 
     const isMedia = type === "imageMessage" || type === "videoMessage";
     const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage');
 	 	 const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage');
		 const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage');
		 const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage');
		 const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage');
	   const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage');
		 const isQuotedextendedText = type === 'extendedTextMessage' && content.includes('extendedTextMessage');


// console log command ketika dalam private chat
    if (!isGroup && isCmd) {
      console.log("‣", bgcolor('Command On PRIVATE CHAT', 'magenta'));
      console.log(" From :", color(pushname, "yellow"), "Tanggal :", bgcolor(tanggal, 'grey'));
      console.log(" Command :", color(command.toUpperCase(), "orange"), "MessageType :", bgcolor(type, "orange"));
    }
    
// console log command ketika dalam group
    if (isGroup && isCmd) {
      console.log("‣", bgcolor('Command On', 'magenta'), "GROUP", color(groupName, "orange"));
      console.log(" From :", color(pushname, "yellow"), "Tanggal :", bgcolor(tanggal, 'grey'));
      console.log(" Command :", color(command.toUpperCase(), "orange"), "MessageType :", bgcolor(type, "orange"));
    }
  
// console log pesan tanpa command
    if (!isCmd && !mek.key.fromMe && !mek.isBaileys) {
      console.log("‣", bgcolor('Message','magenta'));
      console.log(" From :", color(pushname, "yellow"), "Tanggal :", bgcolor(tanggal, 'grey'));
      console.log(" Message :", color(budy, "orange"), "MessageType :", bgcolor(type, "orange"));
    }

// Anti spam yang ikut ikutan nyepam :v
    if (isCmd && msgFilter.isFiltered(from)) {
         return m.reply('jangan spam')
					}
    if (isCmd && !isOwner) msgFilter.addFilter(from)


if (budy) addUser(sender); // menambah informasi user kedalam database
if (budy) addGroup(from); // menambah informasi group kedalam database
if (isCmd) addCmd() // menambah jumlah total command ketika user menggunakan command
if (isCmd) addPoin(sender); // menambah poin user ketika menggunakan command

// menambahkan poin ke level dan di akumulasikan untuk menaikkan level
const Amount = isPoinawal * (Math.pow(2, isLevel) - 1)
if (Amount <= isPoin) {
           await addLevel(sender) // akumulasi poin untuk menaikkan level
          }

// khusus command ketika status offline dalam group menyala
switch (command) {
  
  case 'offline': // ketik offline menyala bot tidak akan membalas perintah apapun dalam group tertentu
    if(!isGroup) return m.reply(msg.group)
    if(!isAdmins && !isOwner) return m.reply(msg.admin)
    if (isOffline === true ) {
      return m.reply('Bot offline')
    }
    await addOffline(from)
    m.reply(msg.offline)
    break

  case 'online':
    if(!isGroup) return m.reply(msg.group)
    if(!isAdmins && !isOwner) return m.reply(msg.admin)
    if (isOffline === false ) {
      return m.reply('Bot online')
    }
    await delOffline(from)
    m.reply(msg.online)
    break 
    default:
}


if (isGroup && isOffline === true) return; // ketik offline menyala bot tidak akan membalas perintah apapun dalam group tertentu
if (isBanned) return; // user dengan status banned tidak akan bisa menggunakan command

switch (command) { 
 
  case 'restart': // restart bot !!
    if(!isOwner) return m.reply(msg.owner)
    m.reply('Restart bot, proses membutuhkan waktu kurang dari 1 menit, silahkan tunggu')
try {
  process.send('reset')
} catch (e) {
  m.reply('hmmmm')
}
  break
 
  case 'ping':
    const timestamp = speed();
    const latensi = speed() - timestamp 
    m.reply(`Speed : ${latensi.toFixed(3)} Second`)
  break 

  case 'menu': case 'help':
    m.reply(msg.wait)
    capt = `${ucapanWaktu} ${pushname}

*Level akun* : ${isLevel}
*Total Poin* : ${isPoin}
*Premium* : ${prem}
*Tanggal* : ${tanggal}
*Runtime* : ${kyun(process.uptime())}
`
    capt += readMore
    capt += menu()
    client.send2ButtonLoc(from, thumb, capt, 'Total hit : '+isTotalcmd+'\n'+isWm, 'Info', '.info', 'Owner', '.owner')
    break
  
  case 'bahasa':
    if(!value) return m.reply(msg.Pbahasa)
    if (value.toLowerCase() === "indonesia") {
      await addBahasa(sender, "indonesia")
      m.reply("Bahasa Indonesia terpilih\nSekarang bot akan membalas pesanmu dengan bahasa Indonesia")
    } else if (value.toLowerCase() === "english") {
      await addBahasa(sender, "english")
      m.reply("Selected English\nNow the bot will reply to your message in English")
    } else {
      m.reply(msg.nobahasa)
    }
    break;
  
  case 'owner':
  case 'author':
    number = '6282223014661@s.whatsapp.net'
    client.fakeStatus(from, `Nih owner ku @${number.split('@')[0]}, chat aja kalo ada perlu`, 'Owner Bot', await getBuffer(pp))
    break
    
   case 'info':
   const unread = await client.loadAllUnreadMessages ();
   i = []
   giid = []
				for (mem of totalchat){
					i.push(mem.jid)
				}
				for (id of i){
					if (id && id.includes('g.us')){
						giid.push(id)
					}
				}
   uptime = process.uptime()
   teks = `*INFORMASI*
- Nama : ${client.user.name}
- Versi Bot : ${package.version}
- Author: ${package.author}
- Speed : ${process.uptime()}
- Runtime : ${kyun(uptime)}

*WHATSAPP*
- Kontak : ${Object.keys(client.contacts).length}
- Total pesan : ${totalchat.length}
- Personal Chat : ${totalchat.length - giid.length}
- Total group : ${giid.length}
- Pesan belum dibaca : ${unread.length}
- Versi Wa : ${client.user.phone.wa_version}

*DEVICE*
- Baterai : ${baterai.baterai}%
- Charge : ${baterai.cas === 'true' ? 'Charging' : 'Not charging'}
- Device : ${device_manufacturer}
- Versi OS : ${os_version}
- Versi Device : ${device_model}
- RAM : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
- Browser : *${client.browserDescription[1]}*
- Versi Browser : *${client.browserDescription[2]}*

*OWNER*
- Instagram : https://www.instagram.com/mrf.zvx
- WhatsApp : wa.me/6282223014661

*SCRIPT*
- Git : ${package.homepage}
- License : ${package.license}` 
  client.fakeLink(from, teks, await getBuffer(pp), tanggal, 'https://www.instagram.com/mrf.zvx', mek)
   break
    
  case 'truth':
  case 'dare':
  case 'dilan':
  case 'ilham':
  case 'fakta':
  case 'gombal':
  case 'hacker':
    if(command === "truth" ) {
      hasil = lxa.truth()
    } else if (command === "dare" ) {
      hasil = lxa.dare()
    } else if (command === "dilan") {
      hasil = lxa.dilan()
    } else if (command === "ilham") {
      hasil = lxa.ilham()
    } else if (command === "fakta") {
      hasil = lxa.fakta()
    } else if (command === "gombal") {
      hasil = lxa.gombal()
    } else if (command === "hacker") {
      hasil = lxa.hacker()
    }
    capt = "‣ *"+command.toUpperCase()+"*\n"+hasil
    client.sendButton(from, capt, msg.next(command), 'Next', prefix+command)
    break
    
  case 'fitnah':
    if(!value) return m.reply(msg.notext)
    if(!dia) return m.reply(msg.notag)
    text1 = value.split("/")[0]
    text2 = value.split("/")[2]
    client.fakeReply(from, text1, dia, text2, from)
    break
  
  case 'apakah':
    if(!value) return m.reply(msg.notext)
    apa = ['Tidak', 'Iya', 'Tidak']
    jawaban = pickRandom(apa)
    capt = 'Pertanyaan : Apakah ' + value 
    capt += '\nJawaban : ' + jawaban 
    m.reply(capt)
  break

  case 'siapa':
  case 'siapakah':
    if(!value) return m.reply(msg.notext)
    if(!isGroup) return m.reply(msg.group)
    let member = groupMembers.map(u => u.jid)
    siapa = pickRandom(member)
    capt = 'Pertanyaan : Siapakah ' + value 
    capt += '\nJawaban : @' + siapa.split('@')[0]
    m.reply(capt, null, {
          contextInfo: {
            mentionedJid: client.parseMention(capt),
          },
        });
  break

  case 'kapan':
  case 'kapankah':
    if(!value) return m.reply(msg.notext)
    No = Math.floor(Math.random() * 30)
    Apa = ["Jam lagi","Hari lagi","Minggu lagi","Bulan lagi","Tahun lagi"]
    jawaban = pickRandom(Apa)
    capt = 'Pertanyaan : Kapankah ' + value 
    capt += '\nJawaban : ' + No + ' ' + jawaban
    m.reply(capt)
  break

  case "s":
  case "stiker":
  case "sticker":
    anu = args.join(" ").split("|");
        a = anu[0] !== "" ? anu[0] : isAuthor;
        b = typeof anu[1] !== "undefined" ? anu[1] : isPackname;
    if ( 
      ((isMedia && !mek.message.videoMessage) || isQuotedImage)
      ) { 
        const encmedia = isQuotedImage 
        ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message .extendedTextMessage.contextInfo : mek;
          media = await client.downloadAndSaveMediaMessage(encmedia); 
          await createExif(a, b); 
          out = getRandom(".webp"); 
          ffmpeg(media) 
          .on("error", (e) => { 
            console.log(e); 
            client.sendMessage(from, "Terjadi kesalahan", "conversation", { quoted: mek }); 
            fs.unlinkSync(media); 
            })
            .on("end", () => { 
              _out = getRandom(".webp"); 
              spawn("webpmux", [
                "-set",
                "exif",
                "./temp/data.exif",
                out,
                "-o",
                _out,
              ]).on("exit", () => {
                client.sendMessage(
                  from,
                  fs.readFileSync(_out),
                  "stickerMessage",
                  { quoted: mek }
                );
                fs.unlinkSync(out);
                fs.unlinkSync(_out);
                fs.unlinkSync(media);
              });
            })
            .addOutputOptions([
              `-vcodec`,
              `libwebp`,
              `-vf`,
              `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`,
            ])
            .toFormat("webp")
            .save(out);
        } else if (
          ((isMedia && mek.message.videoMessage.seconds < 11) ||
            (isQuotedVideo &&
              mek.message.extendedTextMessage.contextInfo.quotedMessage
                .videoMessage.seconds < 11))
        ) {
          const encmedia = isQuotedVideo
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          const media = await client.downloadAndSaveMediaMessage(encmedia);
          await createExif(a, b);
          out = getRandom(".webp");
          ffmpeg(media)
            .on("error", (e) => {
              console.log(e);
              client.sendMessage(from, "Terjadi kesalahan", "conversation", {
                quoted: mek,
              });
              fs.unlinkSync(media);
            })
            .on("end", () => {
              _out = getRandom(".webp");
              spawn("webpmux", [
                "-set",
                "exif",
                "./temp/data.exif",
                out,
                "-o",
                _out,
              ]).on("exit", () => {
                client.sendMessage(
                  from,
                  fs.readFileSync(_out),
                  "stickerMessage",
                  { quoted: mek }
                );
                fs.unlinkSync(out);
                fs.unlinkSync(_out);
                fs.unlinkSync(media);
              });
            })
            .addOutputOptions([
              `-vcodec`,
              `libwebp`,
              `-vf`,
              `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`,
            ])
            .toFormat("webp")
            .save(out);
        } else {
          m.reply(
            `Kirim gambar dengan caption ${prefix}stiker, untuk video durasi kurang dari *7 detik*`
          );
        }
        break

  case "take":
  case "colong":
      if (!isQuotedSticker) return m.reply(msg.replyStic);
      encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
        .message.extendedTextMessage.contextInfo;
      media = await client.downloadAndSaveMediaMessage(encmedia);
        anu = args.join(" ").split("|");
        a = anu[0] !== "" ? anu[0] : isPackname;
        b = typeof anu[1] !== "undefined" ? anu[1] : isAuthor;
        createExif(a, b);
        modStick(media, client, mek, from);
        break 
   
  case "toimg":
    if (!isQuotedSticker) return m.reply(msg.replyStic);
        m.reply(msg.wait);
        encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
          .message.extendedTextMessage.contextInfo;
        media = await client.downloadAndSaveMediaMessage(encmedia);
        ran = getRandom(".png");
        exec(`ffmpeg -i ${media} ${ran}`, (err) => {
          fs.unlinkSync(media);
          if (err) return m.reply("Yah gagal, coba ulangi");
          buffer = fs.readFileSync(ran);
          client.sendMessage(from, buffer, image, {caption: msg.done})
          fs.unlinkSync(ran);
        });
        break;

   case 'pinterest':
    if(!value) return m.reply(no.text)
    m.reply(msg.wait)
    go = await lxa.pinterest(value)
    pin = pickRandom(go)
    if(!pin) return m.reply('Error')
    client.sendMessage(from, await getBuffer(pin), image, { quoted: mek, caption: 'Result from *PINTEREST*\n'+pin, thumbnail: fakethumb })
 break

  case 'cogan':
    cogan = ['cogan indo', 'pap cogan', 'cogan']
    push = pickRandom(cogan)
    m.reply(msg.wait)
    go = await lxa.pinterest(push)
    pin = pickRandom(go)
    if(!pin) return m.reply('Error')
    client.sendButtonImg(from, await getBuffer(pin), 'Result from : *PINTEREST*\n'+pin, msg.next(command), 'Next', '.cogan', mek)
 break

  case 'cecan':
    cecan = ['cecan indo', 'pap cecan', 'cecan']
    push = pickRandom(cecan)
    m.reply(msg.wait)
    go = await lxa.pinterest(push)
    pin = pickRandom(go)
    if(!pin) return m.reply('Error')
    client.sendButtonImg(from, await getBuffer(pin), 'Result from : *PINTEREST*\n'+pin, msg.next(command), 'Next', '.cecan', mek)
 break

  case 'cyberpunk':
    cyberpunk = ['cyberpunk jepang', 'cyberpunk']
    push = pickRandom(cyberpunk)
    m.reply(msg.wait)
    go = await lxa.pinterest(push)
    pin = pickRandom(go)
    if(!pin) return m.reply('Error')
    client.sendButtonImg(from, await getBuffer(pin), 'Result from : *PINTEREST*\n'+pin, msg.next(command), 'Next', '.cyberpunk', mek)
 break

  case 'wallpaper':
    wall = ['wallpaper cute', 'wallpaper anime','wallpaper aesthetic']
    push = pickRandom(wall)
    m.reply(msg.wait)
    go = await lxa.pinterest(push)
    pin = pickRandom(go)
    if(!pin) return m.reply('Error')
    client.sendButtonImg(from, await getBuffer(pin), 'Result from : *PINTEREST*\n'+pin, msg.next(command), 'Next', '.wallpaper', mek)
 break

  case 'upsw':
    if(!isOwner) return m.reply(msg.owner)
    const colors = [
    0xff26c4dc, 0xff792138,
    0xff8b6990, 0xfff0b330,
    0xffae8774, 0xff5696ff,
    0xffff7b6b, 0xff57c9ff,
    0xff243640, 0xffb6b327,
    0xffc69fcc, 0xff54c265,
    0xff6e257e, 0xffc1a03f,
    0xff90a841, 0xff7acba5,
    0xff8294ca, 0xffa62c71,
    0xffff8a8c, 0xff7e90a3,
    0xff74676a
]
    let _m = Promise.resolve({ key: { id: '' }})
    if (!m.quoted && !value) m.reply('reply pesan atau sebagai argumen')
    if (m.quoted && m.quoted.mtype !== 'conversation' && !value) _m = m.quoted.forward('status@broadcast')
    if (m.quoted && m.quoted.mtype === 'conversation' && !value) _m = client.sendMessage('status@broadcast', {
        text: m.quoted.text,
        textArgb: 0xffffffff,
        backgroundArgb: pickRandom(colors)
    }, 'extendedTextMessage')
    if (!m.quoted && value) _m =client.sendMessage('status@broadcast', {
        value,
        textArgb: 0xffffffff,
        backgroundArgb: pickRandom(colors)
    }, 'extendedTextMessage')
    if (m.quoted && value) _m = client.forwardMessage('status@broadcast', await m.quoted.cMod('status@broadcast', value))
    m.reply((await _m).key.id)
    break

 case 'tomp3':
   if(isMedia || isQuotedVideo) {
     m.reply(msg.wait)
     q = m.quoted ? m.quoted : m 
     mp3 = await q.download()
     client.sendMessage(from, mp3, audio, {quoted: mek})
   } else {
     m.reply(msg.replyVid)
   }
   break

 case 'tovn':
   if(!isQuotedAudio) return m.reply(msg.replyVn)
   m.reply(msg.wait)
   q = m.quoted ? m.quoted : m 
   vn = await q.download()
  client.sendMessage(from, vn, audio, {ptt: true, quoted: mek})
   break

  case 'listmedia':
   listimg = direc.image
   listvid = direc.video
   listaud = direc.audio
   liststik = direc.sticker
   teks = msg.liston+'\n'
   teks += '╭─⊷❲ *IMAGE* ❳\n'
   	for ( v of listimg) { 
   	  teks += `├  ${v}\n`
	  }
	  teks += '╰────────\n'
	  teks += '╭─⊷❲ *VIDEO* ❳\n'
	  for ( x of listvid) { 
   	  teks += `├  ${x}\n`
	  }
	  teks += '╰────────\n'
	  teks += '╭─⊷❲ *AUDIO* ❳\n'
	  for ( y of listaud) { 
   	  teks += `├  ${y}\n`
	  }
	  teks += '╰────────\n'
	  teks += '╭─⊷❲ *STICKER* ❳\n'
	  for ( z of liststik) { 
   	  teks += `├  ${z}\n`
	  }
	  teks += '╰────────\n'
	  teks += msg.getlist
	  m.reply(teks.trim())
   break
 
 case 'addimg':
   if(!value) return m.reply(msg.notext)
   if(isMedia || isQuotedImage) {
     for ( i of direc.image) {
        if(i === value.toLowerCase()) return m.reply(msg.packon)
        }
   q = m.quoted ? m.quoted : m 
   let img = await q.download() 
   fs.writeFileSync(`./database/media/image/${value.toLowerCase()}.jpeg`, img)
   m.reply(msg.done)
   await addImage(value.toLowerCase())
   } else {
     m.reply(msg.replyImg)
   }
   break

 case 'getimg':
   try { 
     mage = fs.readFileSync(`./database/media/image/${value.toLowerCase()}.jpeg`) 
     client.sendMessage(from, mage, image, { quoted: mek, caption: 'Result : database image', thumbnail: fakethumb })
     } catch {
       m.reply(msg.packoff)
     }
     break

 case 'addvid':
   if(!value) return m.reply(msg.notext)
   if(isMedia || isQuotedVideo) { 
     for ( i of direc.video) {
        if(i === value.toLowerCase()) return m.reply(msg.packon)
        }
   q = m.quoted ? m.quoted : m 
   vid = await q.download()
   fs.writeFileSync(`./database/media/video/${value.toLowerCase()}.mp4`, vid)
   m.reply(msg.done)
   await addVideo(value.toLowerCase())
   } else {
     m.reply(msg.replyVid)
   }
   break

 case 'getvid':
   try { 
     vid = fs.readFileSync(`./database/media/video/${value.toLowerCase()}.mp4`) 
     client.sendMessage(from, vid, video, { quoted: mek, caption: 'Result : database video' })
     } catch {
       m.reply(msg.packoff)
     }
     break


 case 'addvn':
   if(!isQuotedAudio) return m.reply(msg.replyVn)
   if(!value) return m.reply(msg.notext)
   for ( i of direc.audio) {
        if(i === value.toLowerCase()) return m.reply(msg.packon)
        }
   q = m.quoted ? m.quoted : m 
   let aud = await q.download()
   fs.writeFileSync(`./database/media/audio/${value.toLowerCase()}.mp3`, aud)
   m.reply(msg.done)
   await addAudio(value.toLowerCase())
   break

 case 'getvn':
   try { 
     vn = fs.readFileSync(`./database/media/audio/${value.toLowerCase()}.mp3`) 
     client.sendMessage(from, vn, audio, { quoted: mek, ptt: true})
     } catch {
       m.reply(msg.packoff)
     }
     break

 case 'addstik':
   if(!isQuotedSticker) return m.reply(msg.replyStic)
   if (!value) return m.reply(msg.notext)
   for ( i of direc.sticker) {
        if(i === value.toLowerCase()) return m.reply(msg.packon)
        }
   q = m.quoted ? m.quoted : m 
   let stic = await q.download()
   fs.writeFileSync(`./database/media/sticker/${value.toLowerCase()}.webp`, stic) 
   m.reply(msg.done)
   await addStiker(value.toLowerCase())
break

 case 'getstik':
   try { 
     tik = fs.readFileSync(`./database/media/sticker/${value.toLowerCase()}.webp`) 
     client.sendMessage(from, tik, sticker, { quoted: mek })
     } catch {
       m.reply(msg.packoff)
     }
     break

  case 'setfakethumb':
   if(!isOwner) return m.reply(msg.owner)
   if(isMedia || isQuotedImage) {
   q = m.quoted ? m.quoted : m 
   thumb = await q.download() 
   fs.writeFileSync(`./temp/thumbnail.jpeg`, thumb)
   m.reply(msg.done)
   } else {
     m.reply(msg.replyImg)
   }
   break

 case 'setthumb':
 case 'setthumb':
   if(!isOwner) return m.reply(msg.owner)
   if(isMedia || isQuotedImage) {
   q = m.quoted ? m.quoted : m 
   thumb = await q.download() 
   fs.writeFileSync(`./temp/thumb.jpeg`, thumb)
   m.reply(msg.done)
   } else {
     m.reply(msg.replyImg)
   }
   break

 case 'fakethumb':
   if(isMedia || isQuotedImage) {
   q = m.quoted ? m.quoted : m 
   hasil = await q.download() 
   client.sendMessage(from, hasil, image, {quoted: mek, caption: msg.done, thumbnail: fakethumb})
   } else {
     m.reply(msg.replyImg)
   }
   break

 case 'covid':
   covid = await lxa.covid()
   capt = '*INFORMASI COVID INDONESIA*\n'
   capt += 'Positif : ' + covid.indo.indoP
   capt += '\nMeninggal : ' + covid.indo.indoM
   capt += '\nSembuh : ' + covid.indo.indoS
   capt += '\nLast Update : ' + covid.indo.indoU
   capt += '\n\n*INFORMASI COVID GLOBAL*' 
   capt += '\nJumlah : ' + covid.global.negara + ' Negara'
   capt += '\nPositif : ' + covid.global.positif
   capt += '\nMeninggal : ' + covid.global.meninggal
   capt += '\nLast Update : ' + covid.global.update
   m.reply(capt)
   break

 case 'cerpen':
   cerpen = await lxa.RandomCerpen()
   if(cerpen.status === 500) return m.reply('Error')
   capt = '*Judul* : ' + cerpen.result.Judul
   capt += '\n*Karangan* : ' + cerpen.result.Penulis
   capt += '\n\n' + readMore + cerpen.result.cerita
   capt += '\n*Sumber* : ' + cerpen.result.sumber
   m.reply(capt)
   break

 case "playstore":
     if(!value) return m.reply(msg.notext)
     m.reply(msg.wait)
     let play = await lxa.playstore(value); 
     store = '*PLAY STORE*\n'
     for (let i of play) {
       store += `*Nama* : ${i.name}
*Link* : ${i.link}
*Dev* : ${i.developer}
*Link Dev* : ${i.link_dev}\n────────────────\n`;
        } 
     m.reply(store);
   break;

 case 'igvid':
 case 'igimg':
 case 'igdl':
   if(!isUrl(value) && !value) return m.reply(msg.nolink('instagram'));
   if(isUrl(value) && !value.match("instagram.com/p/")) return m.reply('Link invalid');
   m.reply(msg.wait)
   igdl = await lxa.igDl(value)
   buffer = await getBuffer(igdl.result.link)
   desk = igdl.result.desc
   if(!buffer) return m.reply('Error')
   if(igdl.result.link.match('.mp4')){
     if(!isPremium) return m.reply(msg.premdl+igdl.result.link)
     client.sendMessage(from, buffer, video, {quoted: mek, caption: desk})
   } else {
     client.sendMessage(from, buffer, image, {quoted: mek, caption: desk, thumbnail: fakethumb})
   }
   break

 case 'reels':
 case 'reel':
   if(!isUrl(value) && !value) return m.reply(msg.nolink('instagram reel'));
   if(isUrl(value) && !value.match("instagram.com/reel")) return m.reply('Link invalid');
   m.reply(msg.wait)
   igdl = await lxa.igDl(value)
   buffer = await getBuffer(igdl.result.link)
   desk = igdl.result.desc
   if(!buffer) return m.reply('Error')
   if(!isPremium) return m.reply(msg.premdl+igdl.result.link)
   client.sendMessage(from, buffer, video, {quoted: mek, caption: desk})
   break

 case 'tiktok':
 case 'tiktoknowm':
 case 'tiktokaudio':
   if(!isUrl(value) && !value) return m.reply(msg.nolink('tiktok'));
   if(isUrl(value) && !value.match("tiktok.com")) return m.reply('Link invalid');
   m.reply(msg.wait)
   ttdl = await lxa.Ttdl(value)
   if(command.includes('nowm')) {
   buffer = await getBuffer(ttdl.result.nowatermark)
   if(!buffer) return m.reply('Error')
   client.sendMessage(from, buffer, video, {quoted: mek, caption: msg.done})
   } else if (command.includes('audio')) {
     buffer = await getBuffer(ttdl.result.nowatermark)
     if(!buffer) return m.reply('Error')
     client.sendMessage(from, buffer, document, {quoted: mek, mimetype: 'audio/mp4', filename: `Tiktokdownloader.mp3`})
   } else {
     buffer = await getBuffer(ttdl.result.watermark)
     if(!buffer) return m.reply('Error')
     client.sendMessage(from, buffer, video, {quoted: mek, caption: msg.done})
   }
   break

  case 'hidetag':
  case 'notif':
        if(!isOwner && !isAdmins) return m.reply(msg.admin)
        if (!isGroup) return m.reply(msg.group);
        if(!m.quoted) {
          tag = value
        } else if(m.quoted){
          tag = m.quoted.text
        } else {
          tag = ''
        }
        group = await client.groupMetadata(from);
        mention = groupMembers.map(u => u.jid) 
        var optionshidetag = {
          text: tag,
          contextInfo: { mentionedJid: mention },
          quoted: mek,
        };
        client.sendMessage(from, optionshidetag, text);
        break;

  case 'tagall':
    if(!isGroup) return m.reply(msg.group)
    if(!isAdmins && !isOwner) return m.reply(msg.admin)
    mention = groupMembers.map(u => u.jid) 
    m.reply('Tag all Member\n' + mention.map((v, i) => i + 1 + '. @' + v.replace(/@.+/, '')).join`\n`, null, {
    contextInfo: { mentionedJid: mention }
  })
  break

  case 'join':
    if(!isOwner) return
    if(!value) return
    join = value.split('https://chat.whatsapp.com/')[1]
    await client.acceptInvite(join).then((res) => {
      client.sendMessage(res.gid,`Hai 👋🏻\n@${sender.split("@")[0]} Mengundang ku untuk masuk ke dalam Group`, text, {contextInfo:{mentionedJid:[sender]}})
      m.reply(`Succses Join Group!`)
      }).catch((err) => m.reply("‣ "+jsonformat(err)))
    break

  case 'link':
    if(!isGroup) return m.reply(msg.group)
    if(!isAdmins && !isOwner) return m.reply(msg.admin)
    if(!isBotAdmins) return m.reply(msg.botadmin)
    code = await client.groupInviteCode(from)
    link = 'https://chat.whatsapp.com/'+code 
    m.reply(link)
    break
  
  case 'revoke':
    if(!isGroup) return m.reply(msg.group)
    if(!isAdmins && !isOwner) return m.reply(msg.admin)
    if(!isBotAdmins) return m.reply(msg.botadmin)
    await client.revokeInvite(from)
    m.reply(msg.done)
    break
  
  case 'warn':
    if(!isGroup) return m.reply(msg.group)
    if(!isOwner && !isAdmins) return m.reply(msg.admin)
    if(!dia) return m.reply(msg.notag)
    await addWarn(dia)
    warn = cekWarn(dia)
    if (warn === 3) {
      client.groupRemove(from, [dia]).catch((e) => {console.log(`*ERROR:* ${e}`)})
      await delWarn(sender, 3)
      return m.reply(msg.bye)
     }
    m.reply(msg.addwarn)
    break

  case 'delwarn':
    if(!isGroup) return m.reply(msg.group)
    if(!isOwner && !isAdmins) return m.reply(msg.admin)
    if(!dia) return m.reply(msg.notag)
    warn = cekWarn(dia)
    if (warn === 0) {
      return m.reply(msg.nowarn)
    }
    await delWarn(dia, 1)
    m.reply(msg.delwarn)
    break

  case 'cekwarn':
    warn = cekWarn(siapa)
    m.reply(msg.cekwarn(warn))
    break

  case 'addpremium':
    if(!isGroup) return m.reply(msg.group)
    if(!isOwner) return m.reply(msg.owner)
    prem = cekPremium(dia)
    if (prem === true) {
      return m.reply(msg.isprem)
    }
    await addPremium(dia)
    m.reply(msg.done)
    break
    
  case 'delpremium':
    if(!isGroup) return m.reply(msg.group)
    if(!isOwner) return m.reply(msg.owner)
    prem = cekPremium(dia)
    if (prem === false) {
      return m.reply(msg.noprem)
    }
    await delPremium(dia)
    m.reply(msg.done)
    break
    
  case 'banned':
    if(!isGroup) return m.reply(msg.group)
    if(!isOwner) return m.reply(msg.owner)
    ban = cekBanned(dia)
    if (ban === true) {
      return m.reply(msg.ban)
    }
    await addBanned(dia)
    m.reply(msg.done)
    break
    
  case 'unbanned':
    if(!isGroup) return m.reply(msg.group)
    if(!isOwner) return m.reply(msg.owner)
    ban = cekBanned(dia)
    if (ban === false) {
      return m.reply(msg.noban)
    }
    await delBanned(dia)
    m.reply(msg.done)
    break

  case 'open':
    if(!isGroup) return m.reply(msg.group)
    if(!isBotAdmins) return m.reply(msg.botadmin)
    if(!isAdmins && !isOwner) return m.reply(msg.admin)
    // allow everyone to send Message
    await client.groupSettingChange (from, GroupSettingChange.messageSend, false)
    m.reply(msg.open)
    break
    
  case 'close':
    if(!isGroup) return m.reply(msg.group)
    if(!isBotAdmins) return m.reply(msg.botadmin)
    if(!isAdmins && !isOwner) return m.reply(msg.admin)
    // only allow admins to send messages
    await client.groupSettingChange (from, GroupSettingChange.messageSend, true)
    m.reply(msg.close)
    break
    
  case 'setname':
    if(!isGroup) return m.reply(msg.group)
    if(!isBotAdmins) return m.reply(msg.botadmin)
    if(!isAdmins && !isOwner) return m.reply(msg.admin)
    if(!value) return m.reply(msg.notext)
    await client.groupUpdateSubject(from, value)
    m.reply(msg.name(value))
    break

  case 'setppgc':
    if(!isGroup) return m.reply(msg.group)
    if(!isBotAdmins) return m.reply(msg.botadmin)
    if(!isAdmins && !isOwner) return m.reply(msg.admin)
    if(isMedia || isQuotedImage) {
    q = m.quoted ? m.quoted : m 
    let img = await q.download() 
    await client.updateProfilePicture (from, img)
   } else {
     m.reply(msg.replyImg)
   }
    break

  case 'setppbot':
    if(!isGroup) return m.reply(msg.group)
    if(!isBotAdmins) return m.reply(msg.botadmin)
    if(!isAdmins && !isOwner) return m.reply(msg.admin)
    if(isMedia || isQuotedImage) {
    q = m.quoted ? m.quoted : m 
    let img = await q.download() 
    id = client.user.jid
    await client.updateProfilePicture (from, img)
   } else {
     m.reply(msg.replyImg)
   }
    break

  case 'setdesk':
    if(!isGroup) return m.reply(msg.group)
    if(!isBotAdmins) return m.reply(msg.botadmin)
    if(!isAdmins && !isOwner) return m.reply(msg.admin)
    if(!value) return m.reply(msg.notext)
    await client.groupUpdateDescription(from, value)
    m.reply(msg.desk(value))
    break

  case 'kick':
    if(!isGroup) return m.reply(msg.group)
    if(!isBotAdmins) return m.reply(msg.botadmin)
    if(!isOwner) return m.reply(msg.owner)
    if(!dia) return m.reply(msg.notag)
    if(dia = isAdmins) return m.reply(msg.isadmin)
    anu = "@"+dia.split('@')[0]
    capt = msg.kick(anu)
    m.reply(capt, null, {
          contextInfo: {
            mentionedJid: client.parseMention(capt),
          },
        });
    await client.groupRemove(from, [dia])
    break

  case 'add':
    if(!isGroup) return m.reply(msg.group)
    if(!isBotAdmins) return m.reply(msg.botadmin)
    if(!isOwner) return m.reply(msg.owner)
    //if(!dia) return m.reply(msg.notag)
    user = value.replace(/[^0-9]/g, '')+"@s.whatsapp.net"
    try {
    response = await client.groupAdd(from, [user])
    v = response.participants[0]
    invit = (Object.values(v))
    if(invit[0].code == 409) return m.reply(msg.onwa)
    else if(invit[0].code == 403){
    capt = msg.sendlink+"@"+user.split('@')[0]
    m.reply(capt, null, {
          contextInfo: {
            mentionedJid: client.parseMention(capt),
          },
        });
    client.sendGroupV4Invite(from, user, invit[0].invite_code, invit[0].invite_code_exp, groupMetadata.subject , `Invite you, to join a group`)
    }
    } catch (e) {
      m.reply(msg.nonum)
    }
    break 
  
  case 'undang':
    if(!isGroup) return m.reply(msg.group)
    if(!isBotAdmins) return m.reply(msg.botadmin)
    if(!value) return m.reply(msg.nonum)
    users = value.replace(/[^0-9]/g, '')+"@s.whatsapp.net"
    ini = await client.groupInviteCode(from)
    link = 'https://chat.whatsapp.com/'+ini 
    client.sendMessage(users, "@"+sender.split("@")[0]+"\nMengundang mu untuk masuk kedalam group\n"+link, text, {
          contextInfo: {
            mentionedJid: [sender],
          }})
          m.reply(msg.done)
    break

  case 'promote':
    if(!isGroup) return m.reply(msg.group)
    if(!isBotAdmins) return m.reply(msg.botadmin)
    if(!isAdmins && !isOwner) return m.reply(msg.admin)
    if(!dia) return m.reply(msg.notag)
    // id & people to make admin (will throw error if it fails)
    await client.groupMakeAdmin (from, [dia])
    anu = "@"+dia.split('@')[0]
    capt = msg.promote(anu)
    m.reply(capt, null, {
          contextInfo: {
            mentionedJid: client.parseMention(capt),
          },
        });
    break

  case 'demote':
    if(!isGroup) return m.reply(msg.group)
    if(!isBotAdmins) return m.reply(msg.botadmin)
    if(!isAdmins && !isOwner) return m.reply(msg.admin)
    if(!dia) return m.reply(msg.notag)
    // id & people to make admin (will throw error if it fails)
    await client.groupDemoteAdmin (from, [dia]) //demote admins
    anu = "@"+dia.split('@')[0]
    capt = msg.demote(anu)
    m.reply(capt, null, {
          contextInfo: {
            mentionedJid: client.parseMention(capt),
          },
        });
    break

  case 'welcome':
    if(!isGroup) return m.reply(msg.group)
    if(!isAdmins && !isOwner) return m.reply(msg.admin)
    if(!isBotAdmins) return m.reply(msg.botadmin)
    if(!value) return m.reply(msg.OnorOff)
    if (value.toLowerCase() === "on") {
      if(isWelcome === true ) return m.reply(msg.Thison(command.toUpperCase()))
      await addWelcome(from)
      m.reply(msg.On(command.toUpperCase()))
    } else if (value.toLowerCase() === "off") {
      if(isWelcome === false ) return m.reply(msg.Thisoff(command.toUpperCase()))
      await delWelcome(from)
      m.reply(msg.Off(command.toUpperCase()))
    } else {
      m.reply(msg.OnorOff)
    }
    break
    
  case 'antidelete':
    if(!isGroup) return m.reply(msg.group)
    if(!isAdmins && !isOwner) return m.reply(msg.admin)
    if(!isBotAdmins) return m.reply(msg.botadmin)
    if(!value) return m.reply(msg.OnorOff)
    if (value.toLowerCase() === "on") {
      if(isAntidelete === true ) return m.reply(msg.Thison(command.toUpperCase()))
      await addAntidelete(from)
      m.reply(msg.On(command.toUpperCase()))
    } else if (value.toLowerCase() === "off") {
      if(isAntidelete === false ) return m.reply(msg.Thisoff(command.toUpperCase()))
      await delAntidelete(from)
      m.reply(msg.Off(command.toUpperCase()))
    } else {
      m.reply(msg.OnorOff)
    }
    break

  case 'detect':
    if(!isGroup) return m.reply(msg.group)
    if(!isAdmins && !isOwner) return m.reply(msg.admin)
    if(!isBotAdmins) return m.reply(msg.botadmin)
    if(!value) return m.reply(msg.OnorOff)
    if (value.toLowerCase() === "on") {
      if(isDetect === true ) return m.reply(msg.Thison(command.toUpperCase()))
      await addDetect(from)
      m.reply(msg.On(command.toUpperCase()))
    } else if (value.toLowerCase() === "off") {
      if(isDetect === false ) return m.reply(msg.Thisoff(command.toUpperCase()))
      await delDetect(from)
      m.reply(msg.Off(command.toUpperCase()))
    } else {
      m.reply(msg.OnorOff)
    }
    break
    
  case 'antilink':
    if(!isGroup) return m.reply(msg.group)
    if(!isAdmins && !isOwner) return m.reply(msg.admin)
    if(!isBotAdmins) return m.reply(msg.botadmin)
    if(!value) return m.reply(msg.OnorOff)
    if (value.toLowerCase() === "on") {
      if(isAntilink === true ) return m.reply(msg.Thison(command.toUpperCase()))
      await addAntilink(from)
      m.reply(msg.On(command.toUpperCase()))
    } else if (value.toLowerCase() === "off") {
      if(isAntilink === false ) return m.reply(msg.Thisoff(command.toUpperCase()))
      await delAntilink(from)
      m.reply(msg.Off(command.toUpperCase()))
    } else {
      m.reply(msg.OnorOff)
    }
    break
    

  case 'q': 
    if (!m.quoted) return m.reply(msg.reply)
    let qse = client.serializeM(await m.getQuotedObj())
    if (!qse.quoted) return m.reply(msg.noreply)
    await qse.quoted.copyNForward(from, true)
    break 
    
  case 'asahotak':
  case 'siapakahaku':
  case 'tebakkalimat':
  case 'tebakkata':
  case 'tekateki':
  case 'tebaklirik':
    client.game = client.game ? client.game : {}
    if (from in client.game) {
        client.reply(from, msg.onGame, client.game[from][0])
        return false
        } 
        data = fs.readFileSync(`./result/game/${command}.js`);
        list = JSON.parse(data);
        random = Math.floor(Math.random() * list.length);
        json = list[random]
        let caption = msg.soal(json.soal, (isGamewaktu / 1000).toFixed(2), isPoingame).trim()
    client.game[from] = [
        await client.reply(from, caption, m),
        json, isPoingame,
        setTimeout(() => {
          capt = json.jawaban.replace(/[aiueoAIUEO]/gi, '▢')
          m.reply("*Clue*\n"+capt.toUpperCase())
        }, isGamewaktu - 10000),
        setTimeout(() => {
            if (client.game[from]) client.reply(from, msg.timeout+json.jawaban.toUpperCase(), client.game[from][0])
            delete client.game[from]
        }, isGamewaktu)
    ]
 break

  default:
  
    if (budy.startsWith('$')){
      if (!mek.key.fromMe && !isOwner) return;
      qur = budy.slice(2);
      exec(qur, (err, stdout) => {
        if (err) return m.reply(`‣  ${err}`);
        if (stdout) {
          m.reply(stdout);
          }
          });
          }
          
    if (budy.startsWith('>')){
      if (!mek.key.fromMe && !isOwner) return;
      try {
        client.sendMessage(from, "‣ "+JSON.stringify(eval(budy.slice(2)),null,'\t'), text, {quoted: mek});
        } catch(err) {
          e = String(err);
          m.reply("‣ "+e);
          }
          }
          }

    let isLink = 'https://chat.whatsapp.com/'
    if(budy.match(isLink) && isAntilink === true ) {
      if(isAdmins) return
      if(!isBotAdmins) return
      code = await client.groupInviteCode(from) 
      if(budy.match(isLink+code)) {
        return !0
      } else {
        m.reply(msg.antilink)
        await addWarn(sender)
        m.reply(msg.addwarn)
        cek = await cekWarn(sender)
        if(cek === 3) {
          await client.groupRemove(from, sender)
          await delWarn(sender, 3)
        }
      }
    }

// game answer
   if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !m.quoted.text) return 
   if (!client.game) return
    if (m.quoted.from == client.game[from][0].from) {
        let json = JSON.parse(JSON.stringify(client.game[from][1]))
        if (m.text.toLowerCase() == json.jawaban.toLowerCase().trim()) {
            m.reply(msg.benar(json.jawaban.toUpperCase(), isPoingame))
            await addPoin(sender, isPoingame)
            clearTimeout(client.game[from][3])
            clearTimeout(client.game[from][4])
            delete client.game[from]
        } else if (similarity(m.text.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) m.reply(msg.hampir)
        else m.reply(msg.salah)
    } return !0
    

} catch (e) {
  console.log(bgcolor('‣ Alert :', 'red'), e);
}
};

/**
 * End of proyek WhatsApp bot using baileys 
 * 
 * Thank to 
 - https://github.com/MhankBarBar/weabot
 - https://github.com/Nurutomo/wabot-aq
 - All owner bot 
*/