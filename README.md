```CARA MENERJEMAHKAN WEBSITE``` [Klik Disini](https://www.google.com/search?client=ms-android-xiaomi&sxsrf=AOaemvKOp-MCgOkm6_Ko1oY1lImYy06g-Q:1636011368957&q=cara+menerjemahkan+halaman+website+secara+otomatis&spell=1&sa=X&ved=2ahUKEwiJrPqjmf7zAhUXIbcAHb_VDHUQkeECKAB6BAgBEAI&biw=360&bih=511&dpr=2)

<p align="center">
<a href="https://github.com/mrfzvx12"><img title="mrfzvx12" src="https://img.shields.io/badge/github-Mrfzvx12-orange.svg?style=social&logo=github"></a>
</p>
<p align="center">
<img src="https://gpvc.arturio.dev/mrfzvx12" />
<p/>
<p align="center">
<a href="https://github.com/mrfzvx12"><img title="Author" src="https://img.shields.io/badge/Whatsapp Bot-black?style=for-the-badge&logo=whatsApp"></a>
<p/>
<p align="center">
<a href="https://github.com/mrfzvx12/followers"><img title="Followers" src="https://img.shields.io/github/followers/mrfzvx12?label=Followers&style=social"></a>
<a href="https://github.com/mrfzvx12/whatsapp-bot/stargazers/"><img title="Stars" src="https://img.shields.io/github/stars/mrfzvx12/whatsapp-bot?&style=social"></a>
<a href="https://github.com/mrfzvx12/whatsapp-bot/network/members"><img title="Fork" src="https://img.shields.io/github/forks/mrfzvx12/whatsapp-bot?style=social"></a>
<a href="https://github.com/mrfzvx12/whatsapp-bot/watchers"><img title="Watching" src="https://img.shields.io/github/watchers/mrfzvx12/whatsapp-bot?label=Watching&style=social"></a>
<a href="https://github.com/mrfzvx12/whatsapp-bot/watchers"><img title="Contributor" src="https://img.shields.io/github/contributors/mrfzvx12/whatsapp-bot?logo=github&style=social"></a>
</p>
<p align="center">
<a href="https://github.com/mrfzvx12/whatsapp-bot"><img src="https://img.shields.io/github/repo-size/mrfzvx12/whatsapp-bot?label=Repo%20size&style=flat"></a>
</p>


<h3 align="center">WHATSAPP BOT</h3>

WhatsApp bot is a robot will reply your messages Automatically, this bot is intended for **Public bots**, not for **~~Selfbots~~**, WhatsApp bot connects with WhatsApp web using [@adiwajshing/baileys](https://github.com/adiwajshing/Baileys)

For now bots can run using the termux application, You can download it here [Download](https://play.google.com/store/apps/details?id=com.termux) 

After downloading, make sure everything is in the latest version, use 
```bash 
• apt update -y && apt upgrade -y
```
For perfect results you must have the original version of the WhatsApp application, it is not recommended to use the WhatsApp business application

***

### Example
You can try the bot first here for example

<a href="https://chat.whatsapp.com/B4xPY7Tb3QQDWkJmUjFEVo" target="blank"><img src="https://img.shields.io/badge/Whatsapp Bot-30302f?style=social&logo=whatsapp" /></a>

Multi-language for each user, meaning that the user can choose the language he wants to use

- [x] Indonesia
- [x] English
- [x] Jawa
- [x] Sunda
- [x] Arab
- [ ] Languages that will come later

You can open the language  [In here](https://github.com/mrfzvx12/whatsapp-bot/tree/main/language)
***

### installation
- [x] **TERMUX USER**

```bash
• pkg install git
• pkg install ffmpeg
• pkg install nodejs
• git clone https://github.com/mrfzvx12/whatsapp-bot
• cd whatsapp-bot
• npm i
```
When everything is done, set the owner number in ```database/setting-bot.json``` or click [in here](https://github.com/mrfzvx12/whatsapp-bot/blob/3c92f24ea3b01f9af3e736795c9ccea7d76279ea/database/setting-bot.json#L3)

Default :
```
{
	"ownerNumber": ["123@s.whatsapp.net"]
}
```
Save settings and proceed to the last stage
```bash
• npm start
```
When the QR appears, scan it using the WhatsApp application that will be used for bot
and done

***

***

### installation
- [x] **RDP/VPS USER**

* Install Git [`Klik Disini`](https://git-scm.com/downloads)
* Install NodeJS [`Klik Disini`](https://nodejs.org/en/download)
* Install FFmpeg [`Klik Disini`](https://ffmpeg.org/download.html) (**Jangan Lupa Tambahkan FFmpeg ke variabel lingkungan PATH**)
* Install Notepad C++ [`Klik Disini`](https://notepad-plus-plus.org/downloads/v8.1.9)
```
Announcement: 
If you still don't understand or fail during installation? 
report to the number below
```
```bash
• git clone https://github.com/mrfzvx12/whatsapp-bot.git
• cd whatsapp-bot
• npm i
```
When everything is done, set the owner number in ```database/setting-bot.json``` or click [in here](https://github.com/mrfzvx12/whatsapp-bot/blob/3c92f24ea3b01f9af3e736795c9ccea7d76279ea/database/setting-bot.json#L3)

Default :
```
{
	"ownerNumber": ["123@s.whatsapp.net"]
}
```
Save settings and proceed to the last stage
```bash
• npm start
```
When the QR appears, scan it using the WhatsApp application that will be used for bot
and done

***

- [x] **UBUNTU USER**

For better experience

!! Using Termux Emulator, you can download [In Here](https://drive.google.com/file/d/1-1JM3nP98qozw45uhxnLCC4UQ95c08q5/view?usp=drivesdk)

`INSTALL UBUNTU`
```bash
• pkg update
• pkg install proot-distro
• proot-distro install ubuntu
• proot-distro login ubuntu
```
`UBUNTU`
```bash 
• apt update && apt upgrade
• apt install git
• apt install nodejs
• apt install ffmpeg
• git clone https://github.com/mrfzvx12/whatsapp-bot
• npm i
```
Setting owner number, and then
```bash
• npm start
```
When the QR appears, scan it using the WhatsApp application that will be used for bot
and done

***

### Send Message
Example

Send message
```javascript
const { text } = MessageType
teks = 'Hello world'
client.sendMessage(from, teks, text)
```

Send message with reply
```javascript
m.reply('Hello world')
```

Send Button message
```javascript
text = 'Hello world'
desk = 'Click button'
button = 'Click here'
row = 'This button'
client.sendButton(from, text, desk, button, row)
```

### Feature

- [x] Multilingual
- [x] Group Setting
- [x] Antidelete, Antiviewonce, & Detect
- [x] Custom Welcome each group
- [x] On/Off Command in group
- [x] Game
- [x] Automatic Chatbot
- [x] Make sticker with image/video/gif
- [x] Absensi & Voting
- [ ] And much more

You can open menu [In here](https://github.com/mrfzvx12/whatsapp-bot/blob/main/functions/menu.js)

### WhatsApp Group

<p>
<a href="https://chat.whatsapp.com/B4xPY7Tb3QQDWkJmUjFEVo" target="blank"><img src="https://img.shields.io/badge/WhatsApp Bot Group-30302f?style=social&logo=whatsapp" /></a>
</p>

### Contact
For more detailed information, please contact me via social media below:

<p>
<a href="http://wa.me/6282223014661" target="blank"><img src="https://img.shields.io/badge/Whatsapp-30302f?style=social&logo=whatsapp" /></a>
<a href="http://www.instagram.com/mrf.zvx/" target="blank"><img src="https://img.shields.io/badge/Instagram-30302f?style=social&logo=instagram" /></a>
<a href="https://www.facebook.com/profile.php?id=100028409167054" target="blank"><img src="https://img.shields.io/badge/Facebook-30302f?style=social&logo=facebook" /></a>
</p>

***


### Admin & Moderator
[![mrfzvx12](https://github.com/mrfzvx12.png?size=100)](https://github.com/mrfzvx12) | [![moo-d](https://github.com/moo-d.png?size=100)](https://github.com/moo-d) 
----|----
[MrfZvx12](https://github.com/mrfzvx12) | [Moo-d](https://github.com/moo-d)
Moderator & Author | Author


### Some WhatsApp bots are recommended
<details>
<summary>Click Here</summary>

![Moo-d](https://github.com/Moo-d.png?size=70)[![ReadMe Card](https://github-readme-stats.vercel.app/api/pin/?username=moo-d&repo=termux-whatsapp-bot&theme=buefy)](https://github.com/moo-d/termux-whatsapp-bot)

![Nurutomo](https://github.com/Nurutomo.png?size=70)[![ReadMe Card](https://github-readme-stats.vercel.app/api/pin/?username=Nurutomo&repo=wabot-aq&theme=buefy)](https://github.com/Nurutomo/wabot-aq)

![Mhankbarbar](https://github.com/MhankBarBar.png?size=70)[![ReadMe Card](https://github-readme-stats.vercel.app/api/pin/?username=MhankBarBar&repo=weabot&theme=buefy)](https://github.com/MhankBarBar/weabot)

![Dcode-denpa](https://github.com/dcode-denpa.png?size=70)[![ReadMe Card](https://github-readme-stats.vercel.app/api/pin/?username=dcode-denpa&repo=bitch-boot&theme=buefy)](https://github.com/dcode-denpa/bitch-boot)

</details>

### Github Stats

<img height="180em" src="https://github-readme-stats.vercel.app/api?username=mrfzvx12&show_icons=true&hide_border=true&&count_private=true&include_all_commits=true" />


### Language and tools
<a href="https://github.com/mrfzvx12"><img src="https://img.shields.io/badge/-JavaScript-eed718?style=flat&logo=javascript&logoColor=ffffff"></a>
<a href="https://github.com/mrfzvx12"><img
src="https://img.shields.io/badge/-Node.js-3C873A?style=flat&logo=Node.js&logoColor=white"></a>
<a href="https://github.com/mrfzvx12"><img src="http://img.shields.io/badge/-Git-F1502F?style=flat&logo=git&logoColor=FFFFFF"></a>
<a href="https://github.com/mrfzvx12"><img src="http://img.shields.io/badge/-Github-000000?style=flat&logo=github&logoColor=FFFFFF"></a>


## License
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fmrfzvx12%2Fwhatsapp-bot.svg?type=small)](https://app.fossa.com/projects/git%2Bgithub.com%2Fmrfzvx12%2Fwhatsapp-bot?ref=badge_small)
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fmrfzvx12%2Fwhatsapp-bot.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2Fmrfzvx12%2Fwhatsapp-bot?ref=badge_large)
