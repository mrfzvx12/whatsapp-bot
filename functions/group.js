const fs = require("fs");
const Group = JSON.parse(fs.readFileSync('./database/group.json'));

/**
 * menambah data group ke dalam database
 * @param { string } id
 */
const addGroup = (id) => {
  let position = false;
    Object.keys(Group).forEach((i) => {
    if (Group[i].from === id) {
      position = true;
    }
  });
    if (position === false) {
      const obj = { 
          from: id, 
          offline: false, 
          welcome: false, 
          antilink: false,
          badword: false,
          antidelete: false,
          detect: false,
          viewOnce: false,
        };
        Group.push(obj);
        fs.writeFileSync('./database/group.json', JSON.stringify(Group, null, "\t"));
        return false;
    }
};

/**
 * Cek data offline dalam database
 * @param { string } id 
 */
const cekOffline = (id) => {
  let position = false;
  Object.keys(Group).forEach((i) => {
    if (Group[i].from === id) {
      position = i;
    }
  });
  if (position !== false) {
    return Group[position].offline;
    }
};

/**
 * merubah status offline kedalam database
 * @param { string } id
*/
const addOffline = (id) => {
  let position = false;
  Object.keys(Group).forEach((i) => {
    if (Group[i].from === id) {
      position = i;
    }
  });
  if (position !== false) {
    Group[position].offline = true;
    fs.writeFileSync('./database/group.json', JSON.stringify(Group, null, "\t"));
  }
};

/**
 * merubah status offline kedalam database
 * @param { string } id
*/
const delOffline = (id) => {
  let position = false;
  Object.keys(Group).forEach((i) => {
    if (Group[i].from === id) {
      position = i;
    }
  });
  if (position !== false) {
    Group[position].offline = false;
    fs.writeFileSync('./database/group.json', JSON.stringify(Group, null, "\t"));
  }
};

/**
 * Cek data welcome dalam database
 * @param { string } id 
 */
const cekWelcome = (id) => {
  let position = false;
  Object.keys(Group).forEach((i) => {
    if (Group[i].from === id) {
      position = i;
    }
  });
  if (position !== false) {
    return Group[position].welcome;
    }
};

/**
 * merubah status welcome kedalam database
 * @param { string } id
*/
const addWelcome = (id) => {
  let position = false;
  Object.keys(Group).forEach((i) => {
    if (Group[i].from === id) {
      position = i;
    }
  });
  if (position !== false) {
    Group[position].welcome = true;
    fs.writeFileSync('./database/group.json', JSON.stringify(Group, null, "\t"));
  }
};

/**
 * merubah status welcome kedalam database
 * @param { string } id
*/
const delWelcome = (id) => {
  let position = false;
  Object.keys(Group).forEach((i) => {
    if (Group[i].from === id) {
      position = i;
    }
  });
  if (position !== false) {
    Group[position].welcome = false;
    fs.writeFileSync('./database/group.json', JSON.stringify(Group, null, "\t"));
  }
};
/**
 * Cek data detect dalam database
 * @param { string } id 
 */
const cekDetect = (id) => {
  let position = false;
  Object.keys(Group).forEach((i) => {
    if (Group[i].from === id) {
      position = i;
    }
  });
  if (position !== false) {
    return Group[position].detect;
    }
};

/**
 * merubah status detect kedalam database
 * @param { string } id
*/
const addDetect = (id) => {
  let position = false;
  Object.keys(Group).forEach((i) => {
    if (Group[i].from === id) {
      position = i;
    }
  });
  if (position !== false) {
    Group[position].detect = true;
    fs.writeFileSync('./database/group.json', JSON.stringify(Group, null, "\t"));
  }
};

/**
 * merubah status detect kedalam database
 * @param { string } id
*/
const delDetect = (id) => {
  let position = false;
  Object.keys(Group).forEach((i) => {
    if (Group[i].from === id) {
      position = i;
    }
  });
  if (position !== false) {
    Group[position].detect = false;
    fs.writeFileSync('./database/group.json', JSON.stringify(Group, null, "\t"));
  }
};

/**
 * Cek data antilink dalam database
 * @param { string } id 
 */
const cekAntilink = (id) => {
  let position = false;
  Object.keys(Group).forEach((i) => {
    if (Group[i].from === id) {
      position = i;
    }
  });
  if (position !== false) {
    return Group[position].antilink;
    }
};

/**
 * merubah status antilink kedalam database
 * @param { string } id
*/
const addAntilink = (id) => {
  let position = false;
  Object.keys(Group).forEach((i) => {
    if (Group[i].from === id) {
      position = i;
    }
  });
  if (position !== false) {
    Group[position].antilink = true;
    fs.writeFileSync('./database/group.json', JSON.stringify(Group, null, "\t"));
  }
};

/**
 * merubah status antilink kedalam database
 * @param { string } id
*/
const delAntilink = (id) => {
  let position = false;
  Object.keys(Group).forEach((i) => {
    if (Group[i].from === id) {
      position = i;
    }
  });
  if (position !== false) {
    Group[position].antilink = false;
    fs.writeFileSync('./database/group.json', JSON.stringify(Group, null, "\t"));
  }
};

/**
 * Cek data badword dalam database
 * @param { string } id 
 */
const cekBadword = (id) => {
  let position = false;
  Object.keys(Group).forEach((i) => {
    if (Group[i].from === id) {
      position = i;
    }
  });
  if (position !== false) {
    return Group[position].badword;
    }
};

/**
 * merubah status badword kedalam database
 * @param { string } id
*/
const addBadword = (id) => {
  let position = false;
  Object.keys(Group).forEach((i) => {
    if (Group[i].from === id) {
      position = i;
    }
  });
  if (position !== false) {
    Group[position].badword = true;
    fs.writeFileSync('./database/group.json', JSON.stringify(Group, null, "\t"));
  }
};

/**
 * merubah status badword kedalam database
 * @param { string } id
*/
const delBadword = (id) => {
  let position = false;
  Object.keys(Group).forEach((i) => {
    if (Group[i].from === id) {
      position = i;
    }
  });
  if (position !== false) {
    Group[position].badword = false;
    fs.writeFileSync('./database/group.json', JSON.stringify(Group, null, "\t"));
  }
};

/**
 * Cek data antidelete dalam database
 * @param { string } id 
 */
const cekAntidelete = (id) => {
  let position = false;
  Object.keys(Group).forEach((i) => {
    if (Group[i].from === id) {
      position = i;
    }
  });
  if (position !== false) {
    return Group[position].antidelete;
    }
};

/**
 * merubah status antidelete kedalam database
 * @param { string } id
*/
const addAntidelete = (id) => {
  let position = false;
  Object.keys(Group).forEach((i) => {
    if (Group[i].from === id) {
      position = i;
    }
  });
  if (position !== false) {
    Group[position].antidelete = true;
    fs.writeFileSync('./database/group.json', JSON.stringify(Group, null, "\t"));
  }
};

/**
 * merubah status antidelete kedalam database
 * @param { string } id
*/
const delAntidelete = (id) => {
  let position = false;
  Object.keys(Group).forEach((i) => {
    if (Group[i].from === id) {
      position = i;
    }
  });
  if (position !== false) {
    Group[position].antidelete = false;
    fs.writeFileSync('./database/group.json', JSON.stringify(Group, null, "\t"));
  }
};

/**
 * Cek data anti viewOnce dalam database
 * @param { string } id 
 */
const cekViewonce = (id) => {
  let position = false;
  Object.keys(Group).forEach((i) => {
    if (Group[i].from === id) {
      position = i;
    }
  });
  if (position !== false) {
    return Group[position].viewOnce;
    }
};

/**
 * merubah status anti viewOnce kedalam database
 * @param { string } id
*/
const addViewonce = (id) => {
  let position = false;
  Object.keys(Group).forEach((i) => {
    if (Group[i].from === id) {
      position = i;
    }
  });
  if (position !== false) {
    Group[position].viewOnce = true;
    fs.writeFileSync('./database/group.json', JSON.stringify(Group, null, "\t"));
  }
};

/**
 * merubah status antidelete kedalam database
 * @param { string } id
*/
const delViewonce = (id) => {
  let position = false;
  Object.keys(Group).forEach((i) => {
    if (Group[i].from === id) {
      position = i;
    }
  });
  if (position !== false) {
    Group[position].viewOnce = false;
    fs.writeFileSync('./database/group.json', JSON.stringify(Group, null, "\t"));
  }
};

module.exports = {
  Group,
  addGroup,
  addOffline,
  delOffline,
  cekOffline,
  addWelcome,
  delWelcome,
  cekWelcome,
  addAntilink,
  delAntilink,
  cekAntilink,
  addBadword,
  delBadword,
  cekBadword,
  addAntidelete,
  delAntidelete,
  cekAntidelete,
  addDetect,
  delDetect,
  cekDetect,
  addViewonce,
  delViewonce,
  cekViewonce
};