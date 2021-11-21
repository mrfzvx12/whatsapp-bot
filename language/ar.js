// vn command
exports.vnCmd = (v) => {
  return 'استخدم الأوامر باستخدام الملاحظات الصوتية ، وقم بتنشيطها باستخدام الأوامر ' + v + 'voicecommand on/off';
};

// -- send message
exports.wait = `من فضلك انتظر لحظة...`;
exports.bye = `آمنة...`;
exports.done = `تم الانتهاء من...`;
exports.next = (value) => {
  return 'انقر next ل '+value+' التالي';
};
exports.packon = 'تم تسجيل اسم الحزمة بالفعل';
exports.packoff = 'لم يتم تسجيل اسم حزمة الوسائط في قاعدة البيانات';
exports.liston = 'قائمة الوسائط المخزنة في قاعدة البيانات';
exports.getlist = 'استخدم الأمر getimg / getvid / getvn / getstik لجلب كل حزمة وسائط \ n * مثال *: .getimg lexa';
exports.nolink = (value) => {
  return 'من فضلك كرر بإضافة ارتباط ' + value
}

// -- Saying time
exports.night = 'مساء الخير'
exports.evening = 'مساء الخير'
exports.day = 'مساء الخير'
exports.morning = 'صباح الخير'


// -- message only
exports.admin = 'عذرًا ، لا يمكن تشغيل هذا الأمر إلا بواسطة مسؤولي المجموعة';
exports.group = 'عذرًا ، لا يمكن تشغيل هذا الأمر إلا في مجموعات';
exports.premium = 'عذرًا ، لا يمكن استخدام هذا الأمر إلا بواسطة المستخدمين المميزين';
exports.premdl = 'عذرًا ، لست مستخدمًا متميزًا ، قم بتنزيله بنفسك باستخدام الارتباط \ n * LINK * : ';
exports.oversize = 'حجم الملف يتجاوز الحجم المحدد ، قم بتنزيله بنفسك عبر الرابط أدناه\n*Link* : ';
exports.botadmin = 'يمكن استخدام هذا الأمر عندما يصبح الروبوت المسؤول';
exports.owner = 'يمكن استخدام هذا الأمر بواسطة روبوتات المالك';
exports.isprem = 'المستخدم هو المستخدم المميز السابق';
exports.noprem = 'المستخدم ليس مستخدمًا متميزًا بعد';
exports.ban = 'تم حظر حالة المستخدم من قبل';
exports.noban = 'المستخدم ليس لديه حالة محظورة';
exports.isadmin = 'لا يستطيع البوت تسجيل المشرف';

// -- text
exports.notag = 'ضع علامة على أحد أعضاء المجموعة';
exports.nonum = 'من فضلك كرر بإضافة الرقم المستهدف';
exports.notext = 'من فضلك كرر بإضافة نص';
exports.reply = 'الرد على الرسالة الهدف...';
exports.replyStic = 'الرد على ملصق الرسالة...';
exports.replyVid = 'الرد على الفيديو...';
exports.replyVn = 'الرد الصوتي...';
exports.replyImg = 'صورة الرد...';
exports.noreply = 'الرسالة التي قمت بالرد عليها لا تحتوي على رد';
exports.addwarn = `⚠️ تحذير\n تحصل على تحذير واحد`;
exports.delwarn = `⚠️ تحذير\n تم تقليل تحذيرك بمقدار تحذير واحد`;
exports.cekwarn = (warn) => {
  return `المستخدم لديه تحذير كامل ${warn}`;
};
exports.nowarn = `المستخدم ليس لديه تحذير`;
exports.Pbahasa = `حدد اللغة التي تريد استخدامها

لغة قابلة للاستخدام
- Indonesia
- English
- Jawa
- Sunda
- Arab
- Portugis`;
exports.nobahasa = `اللغة غير متوفرة

لغة قابلة للاستخدام
- Indonesia
- English
- Jawa
- Sunda
- Arab
- Portugis`;
exports.online = 'نجح تشغيل الروبوت في هذه المجموعة'
exports.offline = 'تم إيقاف تشغيل الروبوتات في هذه المجموعة بنجاح'

// -- group
exports.onwa = 'المستخدم موجود بالفعل في المجموعة';
exports.sendlink = 'أرسل دعوة إلى';
exports.open = 'تم تغيير إعدادات المجموعة للسماح لجميع الأعضاء بإرسال رسائل في هذه المجموعة';
exports.close = 'تم تغيير إعدادات المجموعة للسماح للمسؤولين فقط بإرسال الرسائل في هذه المجموعة';
exports.name = (value) => {
  return `قم بتغيير الموضوع إلى ${value}`;
};
exports.desk = (value) => {
  return `تم تغيير وصف المجموعة إلى ${value}`;
};
exports.promote = (value) => {
  return `تمت ترقيته بنجاح ${value} كمسؤول`;
};
exports.demote = (value) => {
  return 'تم تخفيض الرتبة بنجاح ' + value;
};

exports.kick = (value) => {
  return 'تم استلام الطلب وإصداره '+value;
};
exports.On = (value) => {
 return `شغله ${value} في هذه المجموعة`;
};
exports.Off = (value) => {
  return value + ' تحولت لهذه المجموعة';
};
exports.Thison = (value) => {
  return value + ' لقد كان من قبل';
};
exports.Thisoff = (value) => {
return value+ ' لم يتم تشغيله من قبل';
};
exports.OnorOff = 'من فضلك كرر بإضافة تشغيل / إيقاف';
exports.antilink = 'لقد تم اكتشاف إرسال رابط آخر لمجموعة whatsapp';
exports.setwel = (value) => {
  return `من فضلك كرر بإضافة نص
*مثال :*
!setwelcome أهلا بك @tag في @group
اسم : @nama
السيرة الذاتية : @about 
تاريخ : @tanggal 

لا تنس قراءة وصف المجموعة ، حسنًا؟

*أمثلة لكل وظيفة*` + value;
};
exports.setbye = (value) => {
  return `من فضلك كرر بإضافة نص
*مثال :*
!setbye مع السلامة @tag

*أمثلة لكل وظيفة*` + value;
};
exports.setweldone = (value, fungsi) => {
  return `تم تغيير الترحيب بنجاح\n\n`
+ value + `\n\n*أمثلة لكل وظيفة*` + fungsi;
};
exports.setbyedone = (value, fungsi) => {
  return `تم استبداله بنجاح وداعا\n\n`
+ value + `\n\n*أمثلة لكل وظيفة*` + fungsi;
};
exports.default = (value) => {
  return value + ' العودة إلى الإعدادات الأولية';
};

exports.main = (value) => {
  return 'لا يزال هناك ' + value + ' في تقدم!';
};
exports.nomain = (value) => {
  return 'لم يكن هناك أي ' + value + ' في تقدم!';
};
exports.inmain = (value) => {
  return 'لقد فعلت ' + value
};
exports.hapus = (value) =>{
  return 'تم الحذف بنجاح ' + value + ' في هذه المجموعة';
};

// game
exports.onGame = 'لا تزال هناك أسئلة بدون إجابة في هذه الدردشة';
exports.soal = (text1, text2, text3) => {
  return `${text1}

*Timeout*
${text2}

*POIN*
${text3}

الرد على هذه الرسالة للرد
يظهر تلميح الإجابة في آخر 10 ثوانٍ`;
};

exports.timeout = 'مهلة الجواب ';
exports.salah = '*خاطئ* !\n حاول مرة أخرىi';
exports.hampir = '*أكثر قليلا* !\n حاول مرة أخرى';
exports.benar = (value, value2) => {
  return `*حق*\n الجواب ${value}\nلقد حصلت ${value2}`;
};

// afk
exports.with = 'مع سبب ';
exports.onAfk = (value) => {
  return 'أنت الآن غير متصل ' + value
};
exports.offAfk = 'لقد عدت من وضع عدم الاتصال'
exports.inAfk = (value, time) => {
  return 'المستخدم في وضع غير متصل بالشبكة ' + value + '\nتشغيل : ' + time
}