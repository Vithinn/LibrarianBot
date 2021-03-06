const commando = require('discord.js-commando');

class DepthStriderEnchant extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'depthstrider',
            group: 'enchantments',
            memberName: 'depthstrider',
            description: 'Informações detalhadas sobre o encantamento Depth Strider.'
        });
    }

    async run(message, args) {
        message.reply('\n >>> **Depth Strider**\n\
            *Descrição:* Aumenta a velocidade embaixo da água.\n\
            *Tipo de encantamento:* Vanilla\n\
            *Aplicado em:* Botas.\n\
            *Level máximo:* 3.\n\
            *Conflitos:* Frost Walker\n\
            *Valor de venda:* $15000.\n\
            *Mapeamento:* Prateleira Roxa, Coluna 3, Linha 5.\n')
    }
}

module.exports = DepthStriderEnchant;