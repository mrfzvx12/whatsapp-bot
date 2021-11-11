const fs = require("fs");
const User = JSON.parse(fs.readFileSync('./database/user.json'));

/**
 * menambah data user ke dalam database
 * @param { string } id
 */
const addUser = (id) => {
  let position = false;
    Object.keys(User).forEach((i) => {
    if (User[i].id === id) {
      position = true;
    }
  });
    if (position === false) {
      const obj = { 
          id: id, 
          nama: '-', 
          language: "indonesia",
          register: false,
          premium: false, 
          banned: false,
          afk: false,
          chatbot: false,
          voiceCommand: false,
          afkReason: '-',
          afkTime: '-',
          poin: 0,
          level: 0,
          warn: 0,
        };
        User.push(obj);
        fs.writeFileSync('./database/user.json', JSON.stringify(User, null, "\t"));
        return false;
    }
};

/**
 * Cek data banned user dalam database
 * @param { string } id 
 */
const cekRegis = (id) => {
  let position = false;
  Object.keys(User).forEach((i) => {
    if (User[i].id === id) {
      position = i;
    }
  });
  if (position !== false) {
    return User[position].register;
    }
};

/**
 * merubah status banned user kedalam database
 * @param { string } id
*/
const addRegister = (id) => {
  let position = false;
  Object.keys(User).forEach((i) => {
    if (User[i].id === id) {
      position = i;
    }
  });
  if (position !== false) {
    User[position].register = true;
    fs.writeFileSync('./database/user.json', JSON.stringify(User, null, "\t"));
  }
};
/**
 * Cek data banned user dalam database
 * @param { string } id 
 */
const cekBanned = (id) => {
  let position = false;
  Object.keys(User).forEach((i) => {
    if (User[i].id === id) {
      position = i;
    }
  });
  if (position !== false) {
    return User[position].banned;
    }
};

/**
 * merubah status banned user kedalam database
 * @param { string } id
*/
const addBanned = (id) => {
  let position = false;
  Object.keys(User).forEach((i) => {
    if (User[i].id === id) {
      position = i;
    }
  });
  if (position !== false) {
    User[position].banned = true;
    fs.writeFileSync('./database/user.json', JSON.stringify(User, null, "\t"));
  }
};

/**
 * merubah status banned user kedalam database
 * @param { string } id
*/
const delBanned = (id) => {
  let position = false;
  Object.keys(User).forEach((i) => {
    if (User[i].id === id) {
      position = i;
    }
  });
  if (position !== false) {
    User[position].banned = false;
    fs.writeFileSync('./database/user.json', JSON.stringify(User, null, "\t"));
  }
};

/**
 * Cek data premium user dalam database
 * @param { string } id 
 */
const cekPremium = (id) => {
  let position = false;
  Object.keys(User).forEach((i) => {
    if (User[i].id === id) {
      position = i;
    }
  });
  if (position !== false) {
    return User[position].premium;
    }
};


/**
 * merubah status premium user kedalam database
 * @param { string } id
*/
const addPremium = (id) => {
  let position = false;
  Object.keys(User).forEach((i) => {
    if (User[i].id === id) {
      position = i;
    }
  });
  if (position !== false) {
    User[position].premium = true;
    fs.writeFileSync('./database/user.json', JSON.stringify(User, null, "\t"));
  }
};

/**
 * merubah status premium user kedalam database
 * @param { string } id
*/
const delPremium = (id) => {
  let position = false;
  Object.keys(User).forEach((i) => {
    if (User[i].id === id) {
      position = i;
    }
  });
  if (position !== false) {
    User[position].premium = false;
    fs.writeFileSync('./database/user.json', JSON.stringify(User, null, "\t"));
  }
};


/**
 * Cek data voice command user dalam database
 * @param { string } id 
 */
const cekVoiceCommand = (id) => {
  let position = false;
  Object.keys(User).forEach((i) => {
    if (User[i].id === id) {
      position = i;
    }
  });
  if (position !== false) {
    return User[position].voiceCommand;
    }
};


/**
 * merubah status voice command user kedalam database
 * @param { string } id
*/
const addVoiceCommand = (id) => {
  let position = false;
  Object.keys(User).forEach((i) => {
    if (User[i].id === id) {
      position = i;
    }
  });
  if (position !== false) {
    User[position].voiceCommand = true;
    fs.writeFileSync('./database/user.json', JSON.stringify(User, null, "\t"));
  }
};

/**
 * merubah status voice command user kedalam database
 * @param { string } id
*/
const delVoiceCommand = (id) => {
  let position = false;
  Object.keys(User).forEach((i) => {
    if (User[i].id === id) {
      position = i;
    }
  });
  if (position !== false) {
    User[position].voiceCommand = false;
    fs.writeFileSync('./database/user.json', JSON.stringify(User, null, "\t"));
  }
};
/**
 * Cek data chatbot user dalam database
 * @param { string } id 
 */
const cekChatbot = (id) => {
  let position = false;
  Object.keys(User).forEach((i) => {
    if (User[i].id === id) {
      position = i;
    }
  });
  if (position !== false) {
    return User[position].chatbot;
    }
};


/**
 * merubah status chatbot user kedalam database
 * @param { string } id
*/
const addChatbot = (id) => {
  let position = false;
  Object.keys(User).forEach((i) => {
    if (User[i].id === id) {
      position = i;
    }
  });
  if (position !== false) {
    User[position].chatbot = true;
    fs.writeFileSync('./database/user.json', JSON.stringify(User, null, "\t"));
  }
};

/**
 * merubah status chatbot user kedalam database
 * @param { string } id
*/
const delChatbot = (id) => {
  let position = false;
  Object.keys(User).forEach((i) => {
    if (User[i].id === id) {
      position = i;
    }
  });
  if (position !== false) {
    User[position].chatbot = false;
    fs.writeFileSync('./database/user.json', JSON.stringify(User, null, "\t"));
  }
};

/**
 * Cek data poin user dalam database
 * @param { string } id 
 */
const cekPoin = (id) => {
  let position = false;
  Object.keys(User).forEach((i) => {
    if (User[i].id === id) {
      position = i;
    }
  });
  if (position !== false) {
    return User[position].poin;
    }
};

/**
 * menambah poin kedalam database user
 * @param { string } id
*/
const addPoin = (id, value) => {
  let position = false;
  if(!value) {
    value = 1;
  }
  Object.keys(User).forEach((i) => {
    if (User[i].id === id) {
      position = i;
    }
  });
  if (position !== false) {
    User[position].poin += value;
    fs.writeFileSync('./database/user.json', JSON.stringify(User, null, "\t"));
  }
};

/**
 * mengurangi poin kedalam database user
 * @param { string } id
*/
const delPoin = (id, value) => {
  let position = false;
  if(!value) {
    value = 1;
  }
  Object.keys(User).forEach((i) => {
    if (User[i].id === id) {
      position = i;
    }
  });
  if (position !== false) {
    User[position].poin -= value;
    fs.writeFileSync('./database/user.json', JSON.stringify(User, null, "\t"));
  }
};


/**
 * Cek data level user dalam database
 * @param { string } id 
 */
const cekLevel = (id) => {
  let position = false;
  Object.keys(User).forEach((i) => {
    if (User[i].id === id) {
      position = i;
    }
  });
  if (position !== false) {
    return User[position].level;
    }
};

/**
 * menambah level kedalam database user
 * @param { string } id
*/
const addLevel = (id) => {
  let position = false;
  Object.keys(User).forEach((i) => {
    if (User[i].id === id) {
      position = i;
    }
  });
  if (position !== false) {
    User[position].level += 1;
    fs.writeFileSync('./database/user.json', JSON.stringify(User, null, "\t"));
  }
};

/**
 * Cek data afk user dalam database
 * @param { string } id 
 */
const cekAfk = (id) => {
  let position = false;
  Object.keys(User).forEach((i) => {
    if (User[i].id === id) {
      position = i;
    }
  });
  if (position !== false) {
    return User[position].afk;
    }
};

/**
 * Cek data afk user dalam database
 * @param { string } id 
 */
const cekAfkReason = (id) => {
  let position = false;
  Object.keys(User).forEach((i) => {
    if (User[i].id === id) {
      position = i;
    }
  });
  if (position !== false) {
    return User[position].afkReason;
    }
};

/**
 * Cek data afk user dalam database
 * @param { string } id 
 */
const cekAfkTime = (id) => {
  let position = false;
  Object.keys(User).forEach((i) => {
    if (User[i].id === id) {
      position = i;
    }
  });
  if (position !== false) {
    return User[position].afkTime;
    }
};


/**
 * menambah data afk kedalam database user
 * @param { string } id
 * @param { Object } tanggal
 * @param { Object } alasan
*/
const addAfk = (id, tanggal, alasan) => {
  let position = false;
  Object.keys(User).forEach((i) => {
    if (User[i].id === id) {
      position = i;
    }
  });
  if (position !== false) {
    User[position].afk = true;
    User[position].afkReason = alasan;
    User[position].afkTime = tanggal;
    fs.writeFileSync('./database/user.json', JSON.stringify(User, null, "\t"));
  }
};

/**
 * menghapus data afk kedalam database user
 * @param { string } id
*/
const delAfk = (id) => {
  let position = false;
  Object.keys(User).forEach((i) => {
    if (User[i].id === id) {
      position = i;
    }
  });
  if (position !== false) {
    User[position].afk = false;
    User[position].afkReason = "-";
    User[position].afkTime = "-";
    fs.writeFileSync('./database/user.json', JSON.stringify(User, null, "\t"));
  }
};

/**
 * Cek data banned user dalam database
 * @param { string } id 
 */
const cekWarn = (id) => {
  let position = false;
  Object.keys(User).forEach((i) => {
    if (User[i].id === id) {
      position = i;
    }
  });
  if (position !== false) {
    return User[position].warn;
    }
};

/**
 * merubah status banned user kedalam database
 * @param { string } id
*/
const addWarn = (id) => {
  let position = false;
  Object.keys(User).forEach((i) => {
    if (User[i].id === id) {
      position = i;
    }
  });
  if (position !== false) {
    User[position].warn += 1
    fs.writeFileSync('./database/user.json', JSON.stringify(User, null, "\t"));
  }
};

/**
 * merubah status banned user kedalam database
 * @param { string } id
 * @param { number } jumlah
*/
const delWarn = (id, jumlah) => {
  let position = false;
  Object.keys(User).forEach((i) => {
    if (User[i].id === id) {
      position = i;
    }
  });
  if (position !== false) {
    User[position].warn -= jumlah;
    fs.writeFileSync('./database/user.json', JSON.stringify(User, null, "\t"));
  }
};


/**
 * Cek semua data user dalam database
 * @param { string } id 
 */
const cekUser = (id) => {
  let position = false;
  Object.keys(User).forEach((i) => {
    if (User[i].id === id) {
      position = i;
    }
  });
  if (position !== false) {
    result = {
      id: User[position].id, 
      premium: User[position].premium, 
      banned: User[position].banned,
      afk: User[position].afk,
      afkReason: User[position].afkReason,
      afkTime: User[position].afkTime,
      poin: User[position].poin,
      level: User[position].level,
      warn: User[position].warn,
    };
    return result;
    }
};


/**
 * Cek data bahasa user dalam database
 * @param { string } id 
 */
const cekBahasa = (id) => {
  let position = false;
  Object.keys(User).forEach((i) => {
    if (User[i].id === id) {
      position = i;
    }
  });
  if (position !== false) {
    return User[position].language
    }
};


/**
 * merubah status bahasa user kedalam database
 * @param { string } id 
 * @param { Object } bahasa
*/
const addBahasa = (id, bahasa) => {
  let position = false;
  Object.keys(User).forEach((i) => {
    if (User[i].id === id) {
      position = i;
    }
  });
  if (position !== false) {
    User[position].language = bahasa;
    fs.writeFileSync('./database/user.json', JSON.stringify(User, null, "\t"));
  }
};


module.exports = {
  User, 
  cekRegis,
  addRegister,
  addUser, 
  cekUser,
  cekPoin, 
  addPoin, 
  delPoin, 
  addLevel,
  cekLevel,
  cekBanned, 
  addBanned, 
  delBanned,
  cekPremium,
  addPremium,
  delPremium,
  addChatbot,
  delChatbot,
  cekVoiceCommand,
  addVoiceCommand,
  delVoiceCommand,
  cekChatbot,
  addAfk,
  delAfk,
  cekAfk,
  cekAfkReason,
  cekAfkTime,
  addWarn,
  delWarn,
  cekWarn,
  addBahasa,
  cekBahasa
 };
 
 /**
  * semua funtion belum sempurna, jika menemukan bug/kesalahan dalam penulisan, silahkan perbaiki
  * @mrf.zvx
  */