const axios = require('axios');
const cheerio = require('cheerio');

async function covid(){
	return new Promise(async(resolve, reject) => {
		axios.get('https://covid19.go.id/')
		.then(({ data }) => {
			const $ = cheerio.load(data)
			const hasil = [];
			$('#case > div > div > div > div > div:nth-child(2)').each(function(a,b) {
				const Positif_indo = $(b).find('div:nth-child(3) > strong').text()
				const Meninggal_indo = $(b).find('div:nth-child(5) > strong').text()
				const Sembuh_indo = $(b).find('div:nth-child(4) > strong').text()
				const Update_indo = $(b).find('div.pt-4.text-color-black.text-1').text().trim()
			$('#case > div > div > div > div > div:nth-child(1)').each(function(c,d) {
					const negara = $(d).find('div:nth-child(3) > strong').text() 
					const Positif_global = $(d).find('div:nth-child(4) > strong').text()
					const Meninggal_global = $(d).find('div:nth-child(5) > strong').text()
					const Update_global = $(d).find('div.pt-4.text-color-grey.text-1').text().trim()
				const result = {
				  status: 200,
					indo : {
						indoP: Positif_indo,
						indoM: Meninggal_indo,
						indoS: Sembuh_indo,
						indoU: Update_indo.split(':')[1]
					},
					global: {
						negara: negara,
						positif: Positif_global,
						meninggal: Meninggal_global,
						update: Update_global.split(':')[1].split('\n')[0]
					}
				}
				hasil.push(result)
				})
			})
			resolve(hasil[0])
		})
		.catch(reject)
	})
}

module.exports = {
  covid
}