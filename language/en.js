// -- send message
exports.wait = `Please wait a moment...`;
exports.bye = `Goodbye...`;
exports.done = `Finished...`;
exports.next = (value) => {
  return 'Click next for '+value+'  next';
};
exports.packon = 'Pack name already registered';
exports.packoff = 'The name of the media pack is not registered in the database';
exports.liston = 'List of media stored in database';
exports.getlist = 'Use the command getimg/getvid/getvn/getstik to fetch each media pack\n*Example* : .getimg lexa';
// -- message only
exports.admin = 'Sorry, this command can only be run by group admins';
exports.group = 'Sorry, this command can only be run in groups';
exports.premium = 'Sorry, this command can only be used by premium users';
exports.botadmin = 'This command can be used when the bot becomes admin';
exports.owner = 'This command can be used by owner bots';
exports.isprem = 'User is the previous premium user';
exports.premdl = 'You are not a premium user, download it yourself via the link below\n*LINK* : ';
exports.noprem = 'The user is not yet a premium user';
exports.ban = 'User status has been banned before';
exports.noban = 'User does not have banned status';
exports.isadmin = 'Bot can\'t log admin';
// -- text
exports.notag = 'Tag a group member';
exports.nonum = 'Please repeat by adding the target number';
exports.notext = 'Please repeat by adding text';
exports.reply = 'Reply target message...';
exports.replyStic = 'Reply message sticker...';
exports.replyVid = 'Reply the video...';
exports.replyVn = 'Reply the audio...';
exports.replyImg = 'Reply the imagenya...';
exports.noreply = 'The message you replied to did not contain a reply';
exports.nolink = (value) => {
  return 'Please repeat by adding a link ' + value;
};
exports.addwarn = `⚠️ Warning\nYou get 1 warning`;
exports.delwarn = `⚠️ Warning\nYour warning has decreased by 1 warning`;
exports.cekwarn = (warn) => {
  return `User has total warning ${warn}`;
};
exports.nowarn = `User has no warning`;
exports.Pbahasa = `Select the language you want to use

Usable language
- Indonesia
- English`;
exports.nobahasa = `Language not available

Usable language
- Indonesia
- English`;
exports.online = 'Successfully turned on the bot in this group';
exports.offline = 'Successfully turned off bots in this group';

// -- group
exports.onwa = 'The user is already in the group';
exports.sendlink = 'Send an invitinvitation';
exports.open = 'Changed group settings to allow all members to send messages in this group';
exports.close = 'Changed group settings to allow only admins to send messages in this group';
exports.name = (value) => {
  return `Change the subject to ${value}`;
};
exports.desk = (value) => {
  return `Changed the group description to ${value}`;
};
exports.promote = (value) => {
  return `Successfully promoted ${value} as admin`;
};
exports.demote = (value) => {
  return 'Successfully demoted ' + value;
};

exports.kick = (value) => {
  return 'Order received, issued '+value;
};
exports.On = (value) => {
 return `Turn on ${value} in this group`;
};
exports.Off = (value) => {
  return value + ' turned off for this group';
};
exports.Thison = (value) => {
  return value + ' it\'s been on before';
};
exports.Thisoff = (value) => {
return value+ ' not turned on before';
};
exports.OnorOff = 'Please repeat by adding on/off';

// game
exports.onGame = 'There are still unanswered questions in this chat';
exports.soal = (text1, text2, text3) => {
  return `${text1}

*Timeout*
${text2}

*POIN*
${text3}

Reply this message to answer
The answer hint appears in the last 10 seconds`;
};

exports.timeout = 'Time out the answer is ';
exports.salah = '*Wrong* !\nTry again';
exports.hampir = '*A little more* !\nTry again';
exports.benar = (value, value2) => {
  return `*Right*\nThe answer is ${value}\nyou get ${value2}`;
};