async function namaninja(teks){
hasil = teks.replace(/[a-zA-Z]/gi, v => {
        switch (v.toLowerCase()) {
            case 'a': return 'ka';
            case 'b': return 'tu';
            case 'c': return 'mi';
            case 'd': return 'te';
            case 'e': return 'ku';
            case 'f': return 'lu';
            case 'g': return 'ji';
            case 'h': return 'ri';
            case 'i': return 'ki';
            case 'j': return 'zu';
            case 'k': return 'me';
            case 'l': return 'ta';
            case 'm': return 'rin';
            case 'n': return 'to';
            case 'o': return 'mo';
            case 'p': return 'no';
            case 'q': return 'ke';
            case 'r': return 'shi';
            case 's': return 'ari';
            case 't': return 'ci';
            case 'u': return 'do';
            case 'v': return 'ru';
            case 'w': return 'mei';
            case 'x': return 'na';
            case 'y': return 'fu';
            case 'z': return 'zi';
        }
    });
  return hasil;
}

async function blackpill(teks){
hasil = teks.replace(/[a-zA-Z]/gi, v => {
        switch (v.toLowerCase()) {
            case 'a': return '🅐';
            case 'b': return '🅑';
            case 'c': return '🅒';
            case 'd': return '🅓';
            case 'e': return '🅔';
            case 'f': return '🅕';
            case 'g': return '🅖';
            case 'h': return '🅗';
            case 'i': return '🅘';
            case 'j': return '🅙';
            case 'k': return '🅚';
            case 'l': return '🅛';
            case 'm': return '🅜';
            case 'n': return '🅝';
            case 'o': return '🅞';
            case 'p': return '🅟';
            case 'q': return '🅠';
            case 'r': return '🅡';
            case 's': return '🅢';
            case 't': return '🅣';
            case 'u': return '🅤';
            case 'v': return '🅥';
            case 'w': return '🅦';
            case 'x': return '🅧';
            case 'y': return '🅨';
            case 'z': return '🅩';
            case '1': return '➊';
            case '2': return '➋';
            case '3': return '➌';
            case '4': return '➍';
            case '5': return '➎';
            case '6': return '➏';
            case '7': return '➐';
            case '8': return '➑';
            case '9': return '➒';
            case '0': return '⓿';
        }
    });
  return hasil;
}

async function typewriter(teks) {
hasil = teks.replace(/[a-zA-Z]/g, v => {
        switch (v) {
            case 'a': return '𝚊';
            case 'b': return '𝚋';
            case 'c': return '𝚌';
            case 'd': return '𝚍';
            case 'e': return '𝚎';
            case 'f': return '𝚏';
            case 'g': return '𝚐';
            case 'h': return '𝚑';
            case 'i': return '𝚒';
            case 'j': return '𝚓';
            case 'k': return '𝚔';
            case 'l': return '𝚕';
            case 'm': return '𝚖';
            case 'n': return '𝚗';
            case 'o': return '𝚘';
            case 'p': return '𝚙';
            case 'q': return '𝚚';
            case 'r': return '𝚛';
            case 's': return '𝚜';
            case 't': return '𝚝';
            case 'u': return '𝚞';
            case 'v': return '𝚟';
            case 'w': return '𝚠';
            case 'x': return '𝚡';
            case 'y': return '𝚢';
            case 'z': return '𝚣';
            case 'A': return '𝙰';
            case 'B': return '𝙱';
            case 'C': return '𝙲';
            case 'D': return '𝙳';
            case 'E': return '𝙴';
            case 'F': return '𝙵';
            case 'G': return '𝙶';
            case 'H': return '𝙷';
            case 'I': return '𝙸';
            case 'J': return '𝙹';
            case 'K': return '𝙺';
            case 'L': return '𝙻';
            case 'M': return '𝙼';
            case 'N': return '𝙽';
            case 'O': return '𝙾';
            case 'P': return '𝙿';
            case 'Q': return '𝚀';
            case 'R': return '𝚁';
            case 'S': return '𝚂';
            case 'T': return '𝚃';
            case 'U': return '𝚄';
            case 'V': return '𝚅';
            case 'W': return '𝚆';
            case 'X': return '𝚇';
            case 'Y': return '𝚈';
            case 'Z': return '𝚉';
        }
    });
  return hasil;
}


module.exports = {
  namaninja,
  blackpill,
  typewriter
}

/**
console.log(typewriter('HaA18o'));

text = {
  a: 'b',
  A: 'B'
}

lang = lang || 'example'
co*/