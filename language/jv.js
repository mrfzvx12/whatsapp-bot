// vn command
exports.vnCmd = (v) => {
  return 'Gunakake printah nggunakake voice note, aktifake nggunakake printah ' + v + 'voicecommand on/off';
};

// -- send message
exports.wait = `Siap, enteni sedhela...`;
exports.bye = `Selamat tinggal...`;
exports.done = `Rampung...`;
exports.next = (value) => {
  return 'Klik next nggo '+value+' selanjute';
};
exports.packon = 'Jeneng pack wis terdaftar';
exports.packoff = 'Jeneng pack media urung terdaftar neng database';
exports.liston = 'Daftar media sing ana ning database';
exports.getlist = '';
exports.nolink = (value) => {
  return 'Mangga mbaleni kanthi nambah link ' + value
}

// -- Saying time
exports.night = 'Sugeng dalu'
exports.evening = 'Sugeng sonten'
exports.day = 'Sugeng siang'
exports.morning = 'Sugeng enjang'


// -- message only
exports.admin = 'Nuwun sewu, printah iki mung bisa ditindakake dening admin grup';
exports.group = 'Nuwun sewu, printah iki mung bisa mbukak ing grup';
exports.premium = 'Nuwun sewu, printah iki mung bisa digunakake dening pangguna premium';
exports.premdl = 'Nuwun sewu, sampeyan dudu pangguna premium, download dhewe nggunakake tautan\n*LINK* : ';
exports.oversize = 'Ukuran file ngluwihi ukuran sing ditemtokake, download dhewe liwat link ing ngisor iki\n*Link* : ';
exports.botadmin = 'Printah iki bisa digunakake nalika bot dadi admin';
exports.owner = 'Printah iki bisa digunakake dening bot pemilik';
exports.isprem = 'Pangguna minangka pangguna premium sadurunge';
exports.noprem = 'Pangguna durung dadi pangguna premium';
exports.ban = 'Status pangguna wis dibanned sadurunge';
exports.noban = 'Pangguna ora duwe status banned';
exports.isadmin = 'Bot ora bisa ngeluarke admin';

// -- text
exports.notag = 'Tag anggota grup';
exports.nonum = 'Mangga baleni kanthi nambahake nomer target';
exports.notext = 'Mangga baleni kanthi nambahake teks';
exports.reply = 'Bales pesen target...';
exports.replyStic = 'Bales pesen stikere...';
exports.replyVid = 'Bales videone...';
exports.replyVn = 'Bales audione...';
exports.replyImg = 'Bales gambare...';
exports.noreply = 'Pesen sing sampeyan bales ora ana balesan';
exports.nolink = (value) => {
  return 'Mangga mbaleni kanthi nambah link ' + value;
};
exports.addwarn = `⚠️ Peringatan\nKamu mendapatkan 1 peringatan`;
exports.delwarn = `⚠️ Peringatan\nWarning kamu telah berkurang 1 peringatan`;
exports.cekwarn = (warn) => {
  return `User memiliki peringatan total ${warn}`;
};
exports.nowarn = `Pangguna ora duwe peringatan`;
exports.Pbahasa = `Pilih basa sing pengin digunakake

Basa sing bisa digunakake
- Indonesia
- English 
- Jawa
- SJawa
- Arab
- Portugis`;
exports.nobahasa = `Basa ora kasedhiya

Basa sing bisa digunakake
- Indonesia
- English
- Jawa
- Sunda
- Arab
- Portugis`;
exports.online = 'Kasil nguripake bot ing grup iki'
exports.offline = 'Sukses mateni bot ing grup iki'

// -- group
exports.onwa = 'Pangguna wis ana ing grup kasebut';
exports.sendlink = 'Kirim undhangan menyang';
exports.open = 'Setelan grup sing diowahi supaya kabeh anggota ngirim pesen ing grup iki';
exports.close = 'Setelan grup diganti supaya mung admin bisa ngirim pesen ing grup iki';
exports.name = (value) => {
  return `Owahi subyek menyang ${value}`;
};
exports.desk = (value) => {
  return `Owahi katrangan klompok dadi ${value}`;
};
exports.promote = (value) => {
  return `Kasil munggah pangkat ${value} minangka admin`;
};
exports.demote = (value) => {
  return 'Kasil diturunake ' + value;
};
exports.kick = (value) => {
  return 'Order ditampa, ditanggepi '+value;
};
exports.On = (value) => {
 return `Nguripake ${value} ing grup iki`;
};
exports.Off = (value) => {
  return value + ' dipateni kanggo grup iki';
};
exports.Thison = (value) => {
  return value + ' wis ana sadurunge';
};
exports.Thisoff = (value) => {
return value+ ' ora diuripake sadurunge';
};
exports.OnorOff = 'Mangga mbaleni kanthi nambah on/off';
exports.antilink = 'Sampeyan wis dideteksi ngirim link grup whatsapp liyane';
exports.setwel = (value) => {
  return `Baleni kanthi nambah teks
*Tuladha :*
!setwelcome Sugeng rawuh @tag ing @group
Jeneng : @nama
Bio : @about 
Tanggal : @tanggal 

Aja lali maca deskripsi grup, oke?

*Conto kanggo saben fungsi*` + value;
};

exports.setbye = (value) => {
  return `Baleni kanthi nambah teks
*Tuladha :*
!setbye pamit @tag

*Conto kanggo saben fungsi*` + value;
};
exports.setweldone = (value, fungsi) => {
  return `Kasil diganti sambutan\n\n`
+ value + `\n\n*Conto kanggo saben fungsi*` + fungsi;
};
exports.setbyedone = (value, fungsi) => {
  return `Berhasil diganti bye\n\n`
+ value + `\n\n*Conto kanggo saben fungsi*` + fungsi;
};
exports.default = (value) => {
  return value + ' Bali menyang setelan wiwitan';
};

exports.main = (value) => {
  return 'Isih ana ' + value + ' ing proses!';
};
exports.nomain = (value) => {
  return 'Ora ana ' + value + ' ing proses!';
};
exports.inmain = (value) => {
  return 'Sampeyan wis rampung ' + value
};
exports.hapus = (value) =>{
  return 'Kasil dibusak ' + value + ' ing grup iki';
};

// game
exports.onGame = 'Isih ana pitakonan sing durung dijawab ing obrolan iki';
exports.soal = (text1, text2, text3) => {
  return `${text1}

*Timeout*
${text2}

*POIN*
${text3}

Bales pesen iki kanggo mangsuli
Petunjuk wangsulan ditampilake ing 10 detik pungkasan`;
};

exports.timeout = 'Wangsulane yaiku ';
exports.salah = '*Salah* !\nCoba maneh';
exports.hampir = '*Sithik maneh* !\nCoba maneh';
exports.benar = (value, value2) => {
  return `*Bener*\nWangsulane yaiku ${value}\nsampeyan entuk ${value2}`;
};


// afk
exports.with = 'kanthi alesan ';
exports.onAfk = (value) => {
  return 'sampeyan saiki afk ' + value
};
exports.offAfk = 'Sampeyan bali saka AFK'
exports.inAfk = (value, time) => {
  return 'Pangguna ana ing mode Apk ' + value + '\n On : ' + time
}