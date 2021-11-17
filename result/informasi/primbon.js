const axios = require('axios');
const cheerio = require('cheerio');

async function ArtiMimpi(mimpi) {
  return new Promise((resolve, reject) => {
    axios.get(`https://www.primbon.com/tafsir_mimpi.php?mimpi=${mimpi}&submit=+Submit+`)
      .then(({
        data 
      }) => {
        const $ = cheerio.load(data);
        const detect = $('#body > font > i').text();
        const isAva = /Tidak ditemukan/g.test(detect) ? false : true;
        if (isAva) {
          const isi = $('#body').text().split(`Hasil pencarian untuk kata kunci: ${mimpi}`)[1].replace(/\n\n\n\n\n\n\n\n\n/gi, '\n').replace(`Solusi - Menanggulangi akibat dari tafsir mimpi yang buruk
      Jika anda bermimpi sesuatu yang dapat berakibat buruk bagi anda dan keluarga 
      (seperti mimpi gigi copot dll) anda di harapkan melakukan hal-hal sebagai 
      berikut untuk menanggulanginya:
      Ambillah sapu lidi (bisa juga tusuk gigi, bambu kecil dll). Lalu potong 
      atau patahkan dengan tangan anda menjadi 7 (tujuh) batang, kecil-kecil, 
      kira-kira 3 sentimeter. Sediakan selembar kertas atau tissue. Siapkan 
      garam dapur, sedikit saja. Taruhlah potongan ke tujuh sapu lidi dan garam 
      dapur tadi ke dalam tissue atau kertas. Lipat kertas tersebut dan kuburkan 
      ke dalam tanah (pekarangan, halaman rumah anda). Kalimat yang anda harus 
      ucapkan ketika akan mengubur/membenam kertas (yang berisi 7 potong sapu 
      lidi dan garam) tersebut adalah kalimat yang meminta kepada Yang Maha 
      Kuasa agar di jauhi dari akibat buruk mimpi anda.
      Contoh kalimat:"Ya Tuhan.. Jauhkanlah saya dan keluarga saya dari 
      malapetaka. Tidak akan tumbuh/jadi, garam yang saya kubur ini. Seperti 
      halnya mimpi saya yang dapat berakibat buruk bagi kami tidak akan menjadi 
      kenyataan atau tidak akan terjadi. Amien.."








    
    `, '');
          const res = {
            status: 200,
            result: isi
          };
          resolve(res);
        } else {
          const res = {
            status: 404,
            result: `Arti Mimpi ${mimpi} Tidak Di Temukan`
          };
          resolve(res);
        }
      })
      .catch(reject);
  });
}

async function ArtiNama(nama) {
  return new Promise((resolve, reject) => {
    axios.get(`https://www.primbon.com/arti_nama.php?nama1=${nama}&proses=+Submit%21+`)
      .then(({
        data
      }) => {
        const $ = cheerio.load(data);
        const isi = $('#body').text().split('Nama:')[0];
        const res = {
            status: 200,
            result: isi
          };
          resolve(res);
      })
      .catch(reject);
  });
}

async function zodiakMinggu(querry) {
	const link = await axios.get(`https://www.fimela.com/zodiak/${querry}/minggu-ini`);
	const  $ = cheerio.load(link.data);
	let thumb = $('body > div > div > div').find('div > div > a > img').attr('src');
	let judul = $('body > div > div > div').find('div > div > div.zodiak--content-header__text > h5').text().trim();
	let date = $('body > div > div > div').find('div> div.zodiak--content-header__text > span').text().trim();
	let hoki = $('body > div > div > div > div').find('div > div > div:nth-child(1) > div > span').text().trim();
	let umum = $('body > div > div > div > div').find(' div > div > div:nth-child(1) > div > p').text().trim();
	let love = $('body > div > div > div > div').find(' div > div > div:nth-child(2) > div > p').text().trim();
	let keuangan = $('body > div > div > div > div').find(' div > div > div:nth-child(3) > div > p').text().trim();
	let rezeki = keuangan.replace('Couple', '\n\n- Couple').replace('Single', '- Single');
	const result = {
		status: link.status,
		data: {
			judul: judul,
			thumb: thumb,
			date: date,
			nomer_hoki: hoki,
			isi: {
				umum: umum,
				love: love,
				keuangan: rezeki
			}
		}
	};
	return result;
}

async function zodiakHari(querry) {
	let Hasil = [];
	await axios.request(`https://www.fimela.com/zodiak/${querry}`, {
			method: "GET",
			headers: {
				"accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
				"accept-language": "en-US,en;q=0.9,id;q=0.8",
				"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"90\", \"Google Chrome\";v=\"90\"",
			}
		}).then(({ data}) => {
			const $ = cheerio.load(data);
			let thumb = $('body > div > div > div').find('div > div > a > img').attr('src');
			let judul = $('body > div > div.container-main > div.container-article > div').find('div.zodiak--content-header__right > div.zodiak--content-header__text > h5').text().trim();
			let tanggal = $('body > div > div > div > div > div > div > span').text().trim();
			let nomer_ = $('body > div > div > div > div > div > div').find('div:nth-child(1) > div.zodiak--content__content > span').text().trim();
				let umum = $('body > div > div > div > div > div > div').find('div:nth-child(1) > div.zodiak--content__content > p').text().trim() || undefined;
				let love = $('body > div > div > div > div > div > div').find('div:nth-child(2) > div.zodiak--content__content > p').text().trim() || undefined;
				let keuangan = $('body > div > div > div > div > div > div').find('div:nth-child(3) > div.zodiak--content__content > p').text().trim() || undefined;
				let rezeki = keuangan.replace('Couple', '\n\n- Couple').replace('Single', '- Single');
			const result = {
				judul: judul,
				thumb: thumb,
				date: tanggal,
				no_hoki: nomer_,
				isi: {
				  umum: umum,
				  love: love,
				  keuangan: rezeki
				}
			};
			Hasil.push(result);
		});
		return Hasil[0];
}

module.exports = {
  ArtiMimpi,
  ArtiNama,
  zodiakHari,
  zodiakMinggu
};