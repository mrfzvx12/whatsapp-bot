// -- send message
exports.wait = `Mangga antosan sakedap...`;
exports.bye = `Dadah...`;
exports.done = `Réngsé...`;
exports.next = (value) => {
  return 'Klik salajengna pikeun '+value+' Teras';
};
exports.packon = 'Ngaran pek geus didaptarkeun';
exports.packoff = 'Ngaran pakét média henteu kadaptar dina pangkalan data';
exports.liston = 'Daptar média anu disimpen dina pangkalan data';
exports.getlist = 'Anggo paréntah getimg/getvid/getvn/getstik pikeun nyandak unggal pak média\n*Conto* : .getimg lexa';
exports.nolink = (value) => {
  return 'Mangga malikan deui ku nambahkeun tumbu ' + value
}
// -- message only
exports.admin = 'Hampura, paréntah ieu ngan bisa dilaksanakeun ku admin grup'; 
exports.group = 'Hampura, paréntah ieu ngan bisa dijalankeun dina grup'; 
exports.premium = 'Hampura, paréntah ieu ngan bisa dipaké ku pamaké premium'; 
exports.premdl = 'Hapunten anjeun sanés pangguna premium, unduh nyalira nganggo tautan\n*LINK* : ';
exports.botadmin = 'Paréntah ieu tiasa dianggo nalika bot janten admin'; 
exports.owner = 'Paréntah ieu bisa dipaké ku nu boga bot'; 
exports.isprem = 'Pamaké nyaéta pamaké premium saméméhna'; 
exports.noprem = 'Pamaké tacan jadi pamaké premium'; 
exports.ban = 'Status pamaké geus dilarang sateuacanna'; 
exports.noban = 'Pamaké teu boga status larangan'; 
exports.isadmin = 'Bot teu bisa asup kaluar admin';
// -- text
exports.notag = 'Tag hiji anggota grup'; 
exports.nonum = 'Mangga cobian deui tambihan nomer udagan'; 
exports.notext = 'Mangga cobian deui nambahkeun téks'; 
exports.reply = 'Bales pesen targét...'; 
exports.replyStic = 'Bales pesen stiker...'; 
exports.replyVid = 'Bales video...'; 
exports.replyVn = 'Bales audio...'; 
exports.replyImg = 'Bales gambar...'; 
exports.noreply = 'Pesen anu anjeun walon teu ngandung balesan'; 
exports.nolink = (value) => {
  return 'Mangga malikan deui ku nambahkeun link ' + value;
};
exports.addwarn = `⚠️ Awas\nAnjeun meunang 1 warning`; 
exports.delwarn = `⚠️ Perhatosan\nPeringatan anjeun geus ngurangan ku 1 warning`; 
exports.cekwarn = (warn) => {
  return `Pamaké boga warning total ${warn}`; 
  };
exports.nowarn = `Pamaké teu boga peringatan`;
exports.Pbahasa = `Pilih basa nu rék dipaké

Basa nu bisa dipaké
- Indonesia
- English
- Jawa
- Sunda`;
exports.nolanguage = `Basa teu sadia

Basa nu bisa dipaké
- Indonesia
- English
- Jawa
- Sunda`;
exports.online = 'Suksés ngaktipkeun bot dina grup ieu'
exports.offline = 'Geus hasil mareuman bot dina grup ieu'
// -- group
exports.onwa = 'Pamaké geus aya dina grup';
exports.sendlink = 'Kirim ondangan ka';
exports.open = 'Robah setélan grup pikeun ngidinan sakabéh anggota ngirim talatah dina grup ieu';
exports.close = 'Robah setélan grup pikeun ngidinan ngan admin pikeun ngirim pesen dina grup ieu';
exports.name = (value) => {
  return `Robah matuh ka ${value}`;
};
exports.desk = (value) => {
  return `Robah pedaran grup kana ${value}`;
};
exports.promote = (value) => {
  return `Hasil naék pangkat ${value} salaku admin`;
};
exports.demote = (value) => {
  return 'Hasil diturunkeun' + value;
};

exports.kick = (value) => {
  return 'Pesenan ditarima, kaluaran' + value;
};
exports.On = (value) => {
 return `Hidupkeun ${value} dina grup ieu`;
};
exports.Pareum = (value) => {
  return value + 'ditumpurkeun pikeun grup ieu';
};
exports.Thison = (value) => {
  return value + 'geus on';
};
exports.Thisoff = (value) => {
return value + 'teu seuneu sateuacanna';
};
exports.OnorOff = 'Mangga cobian deui nambahkeun on/off';
exports.antilink = 'Anjeun geus kacatet ngirim link grup whatsapp sejen';

// game
exports.onGame = 'Aya kénéh patarosan anu teu acan kajawab dina obrolan ieu';
exports.soal = (text1, text2, text3) => {
  return `${text1}

*Séép waktos*
${text2}

*POINT*
${text3}

Bales pesen ieu pikeun ngajawab
Petunjuk jawaban muncul dina 10 detik terakhir`;
};

exports.timeout = 'Jawaban waktuna nyaéta ';
exports.salah = '*Palsu* !\nCoba deui';
exports.hampir = '*Saeutik deui* !\nCoba deui';
exports.benar = (value, value2) => {
  return `*Leres*\nJawabanna ${value}\nAnjeun meunang ${value2}`;
};