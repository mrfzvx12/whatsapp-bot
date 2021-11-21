//Hans
// vn command
exports.vnCmd = (v) => {
  return 'Use comandos usando anotações de voz, ative usando comandos ' + v + 'voicecommand on/off';
};

// -- send message
exports.wait = `Por favor espere um momento...`;
exports.bye = `Adeus...`;
exports.done = `Finalizado...`;
exports.next = (value) => {
  return 'Clique próximo para '+value+' próximo';
};
exports.packon = 'O nome do pacote já está registrado no banco de dados do bot';
exports.packoff = 'O nome do pacote de mídia não está registrado no banco de dados do bot';
exports.liston = 'Lista de mídia armazenada no banco de dados do bot';
exports.getlist = 'Use o comando #getimg / #getvid / #getvn / #getstik para recuperar cada pacote de mídia\n*Exemplo*: #getimg lexa';
exports.nolink = (value) => {
  return 'Ligação não disponível! por favor insira o comando adicionando um ligação ' + value;
};

// -- Saying time
exports.night = 'Boa noite';
exports.evening = 'Boa tarde';
exports.day = 'Boa tarde';
exports.morning = 'Bom Dia';

// -- message only
exports.admin = `Este comando só pode ser executado pelo grupo admin! \n por favor, converse com o administrador para executar o comando`;
exports.group = `Este comando só pode ser executado dentro do grupo`;
exports.premium = `Este comando só pode ser usado por usuários prêmio`;
exports.premdl = `Você não é um usuário prêmio, baixe você mesmo usando o ligação\n*ligação* : `;
exports.oversize = 'O tamanho do arquivo excede o tamanho especificado, faça o download você mesmo via ligação debaixo\n*Ligação* : ';
exports.botadmin = `Este comando pode ser usado quando o bot se torna administrador`;
exports.owner = `Este comando só pode ser usado pelo proprietário do bot`;
exports.isprem = `O usuário foi usado como um usuário prêmio antes`;
exports.noprem = `Apenas usuários Prêmio podem usar este recurso, por favor, converse com o proprietário para comprar o recurso prêmio`;
exports.ban = 'O usuário foi banido antes';
exports.noban = 'Este usuário não possui um status de banido no banco de dados do bot';
exports.isadmin = 'Os bot não conseguem tirar o administrador';

// -- text
exports.notag = 'Marque um membro do grupo';
exports.nonum = 'Repita este aviso adicionando o número de destino ou responda ao bate-papo';
exports.notext = 'Por favor, repita este comando adicionando textoA mensagem que você está respondendo não contém tags';
exports.reply = 'Mensagem alvo de resposta...';
exports.replyStic = 'Adesivo de mensagem de resposta...';
exports.replyVid = 'Responder o vídeo...';
exports.replyVn = 'Responder áudio...';
exports.replyImg = 'Imagem de resposta...';
exports.noreply = 'A mensagem que você respondeu não continha uma resposta';
exports.nolink = (value) => {
  return 'Repita adicionando ligação ' + value;
};
exports.addwarn = `⚠️Aviso\nVocê recebe 1 aviso`;
exports.delwarn = `⚠️Aviso\nSeu aviso diminuiu em 1 aviso`;
exports.cekwarn = (warn) => {
  return `O usuário tem um aviso total ${warn}`;
};
exports.nowarn = `O usuário não tem nenhum aviso`;
exports.Pbahasa = `Selecione o idioma que deseja usar

Linguagem utilizávelSelecione o idioma que deseja usar

Idiomas disponíveis :
- Indonesia
- English
- Jawa
- Sunda
- Arab
- Portugis

exemplo : #língua Arab`;
exports.nobahasa = `Idioma não disponível

Linguagem utilizável
- Indonesia
- English
- Jawa
- Sunda
- Arab
- Portugis

exemplo : #língua Arab`;
exports.online = 'Comando recebido para ligar bots neste grupo';
exports.offline = 'Pedidos recebidos desligam bots neste grupo';

// -- group
exports.onwa = 'O usuário já está no grupo';
exports.sendlink = 'Convite enviado com sucesso para ';
exports.open = 'Configurações de grupo alteradas com sucesso para permitir que todos os membros enviem mensagens neste grupo';
exports.close = 'Configurações de grupo alteradas com sucesso para permitir que apenas administradores enviem mensagens neste grupo';
exports.name = (value) => {
  return `Sucesso em mudar de assunto para ${value}`;
};
exports.desk = (value) => {
  return `Alterou com sucesso a descrição do grupo para ${value}`;
};
exports.promote = (value) => {
  return `Promoção de sucesso ${value} como administrador do grupo`;
};
exports.demote = (value) => {
  return 'Sucesso no rebaixamento ' + value;
};

exports.kick = (value) => {
  return 'Pedido recebido, emitido '+value;
};
exports.On = (value) => {
 return `Acendeu com sucesso ${value} esse grupo`;
};
exports.Off = (value) => {
  return value + ' desligado para este grupo';
};
exports.Thison = (value) => {
  return value + ' já passou antes';
};
exports.Thisoff = (value) => {
return value+ ' não ligado antes';
};
exports.OnorOff = 'Repita adicionando on/off';
exports.antilink = 'Você foi detectado enviando ligação outros grupos Whatsapp';
exports.setwel = (value) => {
  return `Repita adicionando texto
*Exemplo :*
!setwelcome Bem-vindo @tag ao @group
Nome : @nama
Biografia do WhatsApp : @about
encontro : @tanggal 

Não se esqueça de se apresentar + leia a descrição do grupo, mana

*Exemplos para cada função*` + value;
};

exports.setbye = (value) => {
  return `Repita adicionando texto
*Exemplo :*
!setbye Adeus @tag

*Exemplos para cada função*` + value;
};

exports.setweldone = (value, fungsi) => {
  return `Substituído com sucesso welcome\n\n`
+ value + `\n\n*Exemplos para cada função*` + fungsi;
};

exports.setbyedone = (value, fungsi) => {
  return `Substituído com sucesso bye\n\n`
+ value + `\n\n*Exemplos para cada função*` + fungsi;
};

exports.default = (value) => {
  return value + ' Voltar para as configurações iniciais';
};

exports.main = (value) => {
  return 'Ainda há ' + value + ' em progresso!';
};
exports.nomain = (value) => {
  return 'Não há nenhum ' + value + ' em progresso!!';
};
exports.inmain = (value) => {
  return 'Você fez ' + value
};
exports.hapus = (value) =>{
  return 'Excluído com sucesso ' + value + ' neste grupo';
};
// game
exports.onGame = 'Ainda há perguntas sem resposta neste chat';
exports.soal = (text1, text2, text3) => {
  return `${text1}

*Tempo esgotado*
${text2}

*PONTOS*
${text3}

Responda esta mensagem para responder
A dica de resposta aparece nos últimos 10 segundos`;
};

exports.timeout = 'Tempo limite, a resposta é ';
exports.salah = '*Errado* !\nTente novamente';
exports.hampir = '*Dikit lagi* !\nTente novamente';
exports.benar = (value, value2) => {
  return `*Direito*\n A resposta é ${value}\nvocê pega ${value2}`;
};

// afk
exports.with = 'Com razão ';
exports.onAfk = (value) => {
  return 'agora você está afk ' + value
};
exports.offAfk = 'Você voltou do AFK'
exports.inAfk = (value, time) => {
  return 'O usuário está no modo AFK ' + value + '\n Sobre : ' + time
}
