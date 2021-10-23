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

// functions dalam library
const simple = require('./library/simple');
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
const { ind, eng, sund } = require('./language/index');

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
let pp = 'https://telegra.ph/file/7c0b1068736040b515d81.jpg'; // thumbnail button message

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
    client.send2ButtonLoc(from, await getBuffer(pp), capt, isWm, 'Menu', '.menu', 'Owner', '.owner')
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
    client.fakeStatus(from, `Nih owner ku @${sender.split('@')[0]}, chat aja kalo ada perlu`, 'Owner Bot', await getBuffer(pp))
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

  case 'upsw':
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
  case 'hidetag':
  case 'notif':
        if(!isOwner && !isAdmins) return m.reply(msg.admin)
        if (!isGroup) return m.reply(msg.group);
        tag = value || ''
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
    if(dia === isAdmins) return m.reply(msg.isadmin)
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
    users = value.replace(/[^0-9]/g, '')+"@s.whatsapp.net"
    user = dia ? dia : users
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
      m.reply(msg.welcomeOn)
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