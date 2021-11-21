// vn command
exports.vnCmd = (v) => {
  return 'Gunakan perintah menggunakan voice note, aktifkan menggunakan perintah ' + v + 'voicecommand on/off';
};

// -- send message
exports.wait = `Mohon tunggu sebentar...`;
exports.bye = `Selamat tinggal...`;
exports.done = `Selesai...`;
exports.next = (value) => {
  return 'Klik next untuk '+value+' selanjutnya';
};
exports.packon = 'Nama pack sudah terdaftar didalam database bot';
exports.packoff = 'Nama pack media tidak terdaftar didalam database bot';
exports.liston = 'List media yang tersimpan dalam database bot';
exports.getlist = 'Silahkan gunakan perintah #getimg/ #getvid/ #getvn/ #getstik untuk mengambil setiap pack media\n*Contoh* : #getimg lexa';
exports.nolink = (value) => {
  return 'Link tidak tersedia! silahkan masukan perintah dengan menambahkan link ' + value;
};

// -- Saying time
exports.night = 'Selamat Malam';
exports.evening = 'Selamat Sore';
exports.day = 'Selamat Siang';
exports.morning = 'Selamat Pagi';

// -- message only
exports.admin = `Perintah ini hanya dapat dijalankan oleh admin group! \nsilahkan chat admin untuk menjalankan perintah tersebut`;
exports.group = `Perintah ini hanya dapat dijalankan didalam group`;
exports.premium = `Perintah ini hanya dapat digunakan oleh user premium`;
exports.premdl = `Kamu bukan user premium, download sendiri menggunakan link\n*LINK* : `;
exports.oversize = 'Ukuran file melebihi ukuran yang di tentukan, download sendiri melalui link dibawah\n*Link* : ';
exports.botadmin = `Perintah ini bisa digunakan ketika bot menjadi admin`;
exports.owner = `Perintah ini hanya bisa digunakan oleh owner bot`;
exports.isprem = `User sudah dijadikan user premium sebelumnya`;
exports.noprem = `Hanya User Premium yang bisa menggunakan fitur ini,silahkan chat owner untuk membeli fitur premium`;
exports.ban = 'User sudah dibanned sebelumnya';
exports.noban = 'User ini tidak memiliki status banned didalam database bot';
exports.isadmin = 'Maaf bot tidak bisa mengeluarkan admin';

// -- text
exports.notag = 'Tag salah satu anggota group';
exports.nonum = 'Silahkan ulangi peringah ini dengan menambahkan nomor target atau reply chat';
exports.notext = 'Silahkan ulangi perintah ini dengan menambahkan text';
exports.reply = 'Reply pesan target...';
exports.replyStic = 'Reply pesan stickernya...';
exports.replyVid = 'Reply videonya...';
exports.replyVn = 'Reply audionya...';
exports.replyImg = 'Reply imagenya...';
exports.noreply = 'Pesan yang kamu reply tidak mengandung reply';
exports.nolink = (value) => {
  return 'Silahkan ulangi dengan menambahkan link ' + value;
};
exports.addwarn = `⚠️ Peringatan\nKamu mendapatkan 1 peringatan`;
exports.delwarn = `⚠️ Peringatan\nWarning kamu telah berkurang 1 peringatan`;
exports.cekwarn = (warn) => {
  return `User memiliki peringatan total ${warn}`;
};
exports.nowarn = `User tidak memiliki peringatan`;
exports.Pbahasa = `Pilih bahasa yang ingin kamu gunakan

Bahasa yang dapat digunakan
- Indonesia
- English
- Jawa
- Sunda
- Arab
- Portugis

Contoh :  #bahasa Arab`;
exports.nobahasa = `Bahasa tidak tersedia

Bahasa yang dapat digunakan
- Indonesia
- English
- Jawa
- Sunda
- Arab
- Portugis

Contoh :  #bahasa Arab`;
exports.online = 'Perintah diterima menyalakan bot digroup ini';
exports.offline = 'Perintah diterima mematikan bot di group ini';

// -- group
exports.onwa = 'User sudah berada didalam group';
exports.sendlink = 'Sukses mengirim undangan ke ';
exports.open = 'Sukses mengubah setelan group untuk mengizinkan semua anggota dapat mengirim pesan dalam group ini';
exports.close = 'Sukses mengubah setelan group untuk mengizinkan hanya admin yang dapat mengirim pesan dalam group ini';
exports.name = (value) => {
  return `Sukses merubah subjek menjadi ${value}`;
};
exports.desk = (value) => {
  return `Sukses merubah deskripsi group menjadi ${value}`;
};
exports.promote = (value) => {
  return `Sukses menaikkan jabatan ${value} sebagai admin`;
};
exports.demote = (value) => {
  return 'Sukses menurunkan jabatan ' + value;
};

exports.kick = (value) => {
  return 'Perintah di terima, mengeluarkan '+value;
};
exports.On = (value) => {
 return `Sukses menyalakan ${value} di group ini`;
};
exports.Off = (value) => {
  return value + ' di matikan untuk group ini';
};
exports.Thison = (value) => {
  return value + ' sudah menyala sebelumnya';
};
exports.Thisoff = (value) => {
return value+ ' belum menyala sebelumnya';
};
exports.OnorOff = 'Silahkan ulangi dengan menambahkan on/off';
exports.antilink = 'Kamu terdeteksi mengirimkan link whatsapp group lain';
exports.setwel = (value) => {
  return `Silahkan ulangi dengan menambahkan text
*Contoh :*
!setwelcome Selamat Datang @tag di @group
Nama : @nama
Bio : @about 
Tanggal : @tanggal 

Jangan lupa memperkenalkan diri + baca deskripsi group ya kak

*Contoh untuk setiap fungsi*` + value;
};

exports.setbye = (value) => {
  return `Silahkan ulangi dengan menambahkan text
*Contoh :*
!setbye Selamat tinggal @tag

*Contoh untuk setiap fungsi*` + value;
};

exports.setweldone = (value, fungsi) => {
  return `Berhasil mengganti welcome\n\n`
+ value + `\n\n*Contoh untuk setiap fungsi*` + fungsi;
};

exports.setbyedone = (value, fungsi) => {
  return `Berhasil mengganti bye\n\n`
+ value + `\n\n*Contoh untuk setiap fungsi*` + fungsi;
};

exports.default = (value) => {
  return value + ' Kembali ke pengaturan awal';
};

exports.main = (value) => {
  return 'Masih ada ' + value + ' berlangsung!';
};
exports.nomain = (value) => {
  return 'Tidak ada ' + value + ' berlangsung!';
};
exports.inmain = (value) => {
  return 'Kamu sudah melakukan ' + value
};
exports.hapus = (value) =>{
  return 'Berhasil menghapus ' + value + ' di group ini';
};
// game
exports.onGame = 'Masih ada soal belum terjawab di chat ini';
exports.soal = (text1, text2, text3) => {
  return `${text1}

*Timeout*
${text2}

*POIN*
${text3}

Reply pesan ini untuk menjawab
Petunjuk jawaban muncul di 10 detik terakhir`;
};

exports.timeout = 'Waktu habis jawabannya adalah ';
exports.salah = '*Salah* !\nCoba lagi';
exports.hampir = '*Dikit lagi* !\nCoba lagi';
exports.benar = (value, value2) => {
  return `*Benar*\nJawabannya adalah ${value}\nKamu mendapatkan ${value2}`;
};

// afk
exports.with = 'dengan alasan ';
exports.onAfk = (value) => {
  return 'Kamu sekarang afk ' + value
};
exports.offAfk = 'Kamu kembali dari AFK'
exports.inAfk = (value, time) => {
  return 'User sedang dalan mode Afk ' + value + '\n Pada : ' + time
}
