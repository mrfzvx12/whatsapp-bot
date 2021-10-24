const { WAConnection: _WAConnection, ReconnectMode, MessageType, MessageOptions } = require('@adiwajshing/baileys');
const simple = require("./whatsapp/connecting.js");
const WAConnection = simple.WAConnection(_WAConnection);
const client = new WAConnection();
const qrcode = require("qrcode-terminal");
const {
  cekWelcome,
  cekAntilink,
  cekBadword,
  cekAntidelete,
  cekDetect
} = require('./functions/group');
const fs = require("fs");
const { getBuffer, week, time, tanggal} = require("./library/functions");
const { color } = require("./library/color");
async function starts() {
	client.autoReconnect = ReconnectMode.onConnectionLost;
	client.version = [2, 2119, 6];
	client.logger.level = 'warn';
	client.on('qr', () => {
	console.log(color('[QR]','white'), color('Scan to establish connection'));
	});

	fs.existsSync('./whatsapp/sessions.json') && client.loadAuthInfo('./whatsapp/sessions.json');
	
	await client.connect({timeoutMs: 30*1000});
  fs.writeFileSync('./whatsapp/sessions.json', JSON.stringify(client.base64EncodedAuthInfo(), null, '\t'));
  link = 'https://chat.whatsapp.com/JqgBJHtYHgZ2SuR36aDDCo'
  client.query({ json:["action", "invite", `${link.replace('https://chat.whatsapp.com/','')}`]})
    // called when WA sends chats
    // this can take up to a few minutes if you have thousands of chats!
    client.on('chats-received', async ({ hasNewChats }) => {
        console.log(`‣ You have ${client.chats.length} chats, new chats available: ${hasNewChats}`);

        const unread = await client.loadAllUnreadMessages ();
        console.log ("‣ You have " + unread.length + " unread messages");
    });
    // called when WA sends chats
    // this can take up to a few minutes if you have thousands of contacts!
    client.on('contacts-received', () => {
        console.log('‣ You have ' + Object.keys(client.contacts).length + ' contacts');
    });
    
  client.on('group-participants-update', async (anu) => {
      isWelcome = cekWelcome(anu.jid);
      if(isWelcome === true) {
      mdata = await client.groupMetadata(anu.jid);
      if (anu.action == 'add') {
        num = anu.participants[0];
          try {
	      ppimg = await client.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`);
	    } catch {
	      ppimg = 'https://telegra.ph/file/7c0b1068736040b515d81.jpg';
	    }
	    capt = `Hai @${num.split('@')[0]} selamat datang di group ${mdata.subject}\nJangan lupa Perkenalkan diri`;
	    let buff = await getBuffer(ppimg);
	    client.sendButtonLoc(mdata.id, buff, capt, 'Follow me on Instagram\nhttps://www.instagram.com/mrf.zvx', 'Menu', '.menu', false, {
	      contextInfo: {
            mentionedJid: client.parseMention(capt)
	      }
	    });
      } else if (anu.action == 'remove') {
        num = anu.participants[0];
	    capt = `Selamat tinggal 👋🏻 @${num.split('@')[0]}`;
	    client.sendMessage(mdata.id, capt, MessageType.text, { contextInfo: {"mentionedJid": [num]}});
      }
  }
});

client.on('message-delete', async (m) => {
    if (m.key.fromMe) return;
    let isAntidelete = cekAntidelete(m.key.remoteJid);
    if (isAntidelete === false) return;
    m.message = (Object.keys(m.message)[0] === 'ephemeralMessage') ? m.message.ephemeralMessage.message : m.message;
    const Type = Object.keys(m.message)[0];
    await client.reply(m.key.remoteJid, `
Terdeteksi @${m.participant.split`@`[0]} telah menghapus pesan 
*Jam* : ${time}`.trim(), m.message, {
      contextInfo: {
        mentionedJid: [m.participant]
      }
    });
    client.copyNForward(m.key.remoteJid, m.message).catch(e => console.log(e, m));
  });


client.on('group-update', async (m) => {
  metdata = await client.groupMetadata(m.jid);
  isDetect = cekDetect(metdata.id);
  if(isDetect === false) return ;
  if(m.announce === 'false'){ 
    teks = `Group telah dibuka oleh admin\nSekarang semua member bisa mengirim pesan`;
    client.sendMessage(metdata.id, teks, MessageType.text);
}
  if(m.announce === 'true'){ 
    teks = `Group telah ditutup oleh admin\nSekarang hanya admin yang dapat mengirim pesan`;
    client.sendMessage(metdata.id, teks, MessageType.text);
   
}

  if(!m.desc == ''){ 
    tag = m.descOwner.split('@')[0] + '@s.whatsapp.net' ;
    teks = `Deskripsi Group ${metdata.subject} telah diubah oleh Admin @${m.descOwner.split('@')[0]}\n*Deskripsi*\n${m.desc}`;
    client.sendMessage(metdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [tag]}});
  }
  
   if(m.restrict == 'false') {
     teks = `Admin mengubah setelan group untuk mengizinkan agar semua peserta dapat mengedit info group ${metdata.subject}`;
     client.sendMessage(metdata.id, teks, MessageType.text);
   }

    if(m.restrict == 'true'){
      teks = `Admin mengubah setelan group untuk mengizinkan hanya admin yang dapat mengedit info group ${metdata.subject}`;
      client.sendMessage(metdata.id, teks, MessageType.text);
}
});
    
client.on("CB:Call", json => {
  let call;
  calling = JSON.parse(JSON.stringify(json));
  call = calling[1].from;
  client.sendMessage(call, `*${client.user.name}!!!* Dilarang melakukan panggilan telefon kepada bot, Nomor kamu otomatis akan di block`, MessageType.text).then(() => client.blockUser(call, "add"));
}); 


}

/**
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional> 
 */
 
function nocache(module, cb = () => { }) {
  console.log("‣ Module", `'${module}'`, "is now being watched for changes");
  fs.watchFile(require.resolve(module), async () => {
    await uncache(require.resolve(module));
    cb(module);
    });
    }


/**
 * Uncache a module
 * @param {string} module Module name or path
 */
function uncache(module = '.') {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(module)];
      resolve();
      } catch (e) {
        reject(e);
        }
        });
        }

require('./index.js');
nocache('./index.js', module => console.log(color(`Index.js is now updated!`)));


client.on('chat-update', async (message) => {
require('./index.js')(client, message);
});

starts();