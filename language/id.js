// -- send message
exports.wait = `Mohon tunggu sebentar...`;
exports.bye = `Selamat tinggal...`;
exports.done = `Selesai...`;
exports.next = (value) => {
  return 'Klik next untuk '+value+' selanjutnya';
};
exports.packon = 'Nama pack sudah terdaftar';
exports.packoff = 'Nama pack media tidak terdaftar dalam database';
exports.liston = 'List media yang tersimpan dalam database';
exports.getlist = 'Gunakan perintah getimg/getvid/getvn/getstik untuk mengambil setiap pack media\n*Contoh* : .getimg lexa';
// -- message only
exports.admin = 'Maaf, perintah ini hanya dapat dijalankan oleh admin group';
exports.group = 'Maaf, perintah ini hanya dapat dijalankan dalam group';
exports.premium = 'Maaf, perintah ini hanya dapat digunakan oleh user premium';
exports.botadmin = 'Perintah ini bisa digunakan ketika bot menjadi admin';
exports.owner = 'Perintah ini bisa digunakan owner bot';
exports.isprem = 'User adalah user premium sebelumnya';
exports.noprem = 'User belum menjadi user premium';
exports.premdl = 'Kamu bukan user premium, download sendiri melalui link di bawah\n*LINK* : ';
exports.ban = 'Status user sudah di banned sebelumnya';
exports.noban = 'User tidak memiliki status banned';
exports.isadmin = 'Bot tidak bisa mengeluarkan admin';

// -- text
exports.notag = 'Tag salah satu anggota group';
exports.nonum = 'Silahkan ulangi dengan menambahkan nomor target';
exports.notext = 'Silahkan ulangi dengan menambahkan text';
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
- English`;
exports.nobahasa = `Bahasa tidak tersedia

Bahasa yang dapat digunakan
- Indonesia
- English`;
exports.online = 'Berhasil menyalakan bot di group ini'
exports.offline = 'Berhasil mematikan bot di group ini'

// -- group
exports.onwa = 'User sudah dalam group';
exports.sendlink = 'Mengirim undangan ke';
exports.open = 'Mengubah setelan group untuk mengizinkan semua anggota dapat mengirim pesan dalam group ini';
exports.close = 'Mengubah setelan group untuk mengizinkan hanya admin yang dapat mengirim pesan dalam group ini';
exports.name = (value) => {
  return `Merubah subjek menjadi ${value}`;
};
exports.desk = (value) => {
  return `Merubah deskripsi group menjadi ${value}`;
};
exports.promote = (value) => {
  return `Berhasil menaikkan jabatan ${value} sebagai admin`;
};
exports.demote = (value) => {
  return 'Berhasil menurunkan jabatan ' + value;
};

exports.kick = (value) => {
  return 'Perintah di terima, mengeluarkan '+value;
};
exports.On = (value) => {
 return `Menyalakan ${value} di group ini`;
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