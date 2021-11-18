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
