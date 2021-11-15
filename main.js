const { WAConnection: _WAConnection, ReconnectMode, MessageType, MessageOptions } = require('@adiwajshing/baileys');
const simple = require("./whatsapp/connecting.js");
const WAConnection = simple.WAConnection(_WAConnection);
const client = new WAConnection();
const {
  cekWelcome,
  cekAntilink,
  cekBadword,
  cekAntidelete,
  cekDetect
} = require('./functions/group');
const {
  getCustomWelcome,
  getCustomBye
} = require('./functions/welcome')
const fs = require("fs");
const thumb = fs.readFileSync('./temp/thumb.jpeg')
const { getBuffer } = require('./library/fetcher')
const { week, time, tanggal} = require("./library/functions");
const { color } = require("./library/color");
async function starts() {
	client.autoReconnect = ReconnectMode.onConnectionLost;
	client.version = [3, 3234, 9];
	client.logger.level = 'warn';
	client.on('qr', () => {
	console.log(color('[QR]','white'), color('Scan to establish connection'));
	});

	fs.existsSync('./whatsapp/sessions.json') && client.loadAuthInfo('./whatsapp/sessions.json');
	
	await client.connect({timeoutMs: 30*1000});
  fs.writeFileSync('./whatsapp/sessions.json', JSON.stringify(client.base64EncodedAuthInfo(), null, '\t'));
  link = 'https://chat.whatsapp.com/ILNtrN9st8O5KwXRr3NAqw'
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
	      ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg';
	    }
	    let username = client.getName(num)
      let about = (await client.getStatus(num).catch(console.error) || {}).status || ''
      let member = mdata.participants.length
      let tag = '@'+num.split('@')[0]
	    let buff = await getBuffer(ppimg);
	    let welc = await getCustomWelcome(mdata.id)
	    capt = welc.replace('@tag', tag).replace('@nama', username).replace('@about', about).replace('@tanggal', tanggal).replace('@group', mdata.subject);
	     // client.adReply(mdata.id, capt, MessageType.text, 'Selamat datang member baru', 'Member ke ' + member + ' Group ' + mdata.subject, buff, 'https://www.instagram.com/p/CTKtDqeBgY5/?utm_medium=copy_link');
	     client.sendMessage(mdata.id, buff, MessageType.image, {caption: capt, contextInfo: { mentionedJid: [num] }})
      } else if (anu.action == 'remove') {
        num = anu.participants[0];
        let username = client.getName(num)
        let about = (await client.getStatus(num).catch(console.error) || {}).status || ''
        let member = mdata.participants.length
        let tag = '@'+num.split('@')[0]
        let bye = await getCustomBye(mdata.id);
        capt = bye.replace('@tag', tag).replace('@nama', username).replace('@about', about).replace('@tanggal', tanggal).replace('@group', mdata.subject);
        client.sendMessage(mdata.id, capt, MessageType.text, { contextInfo: {"mentionedJid": [num]}});
      }
  }
});

client.on('message-delete', async (m) => {
    if (m.key.fromMe) return;
    let isAntidelete = cekAntidelete(m.key.remoteJid);
    let isGroup = m.key.remoteJid.endsWith('@g.us');
    if(!isGroup) return;
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


client.on('group-participants-update', async (anu) => {
  metdata = await client.groupMetadata(anu.jid);
  isDetect = cekDetect(metdata.id);
  if(isDetect === false) return ;
  if (anu.action == 'promote') {
    num = anu.participants[0];
    capt = 'PROMOTE DETECTED';
    capt += '\nUser : @' + num.split('@')[0];
    capt += '\nTime : ' + time ;
    return client.sendMessage(metdata.id, capt, MessageType.text, { contextInfo: {"mentionedJid": [num]}});
  } else if (anu.action == 'demote'){
    num = anu.participants[0];
    capt = 'DEMOTE DETECTED';
    capt += '\nUser : @' + num.split('@')[0];
    capt += '\nTime : ' + time;
    return client.sendMessage(metdata.id, capt, MessageType.text, { contextInfo: {"mentionedJid": [num]}});
  }
})


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
  return client.sendMessage(call, `*${client.user.name}!!!* Dilarang melakukan panggilan telefon kepada bot, Nomor kamu otomatis akan di block`, MessageType.text).then(() => client.blockUser(call, "add"));
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
