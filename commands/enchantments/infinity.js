const commando = require('discord.js-commando');

class InfinityEnchant extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'infinity',
            group: 'enchantments',
            memberName: 'infinity',
            description: 'Informações detalhadas sobre o encantamento Infinity.'
        });
    }

    async run(message, args) {
        message.reply('\n >>> **Infinity**\n\
            *Descrição:* Flechas infinitas.\n\
            *Tipo de encantamento:* Vanilla\n\
            *Aplicado em:* Arcos.\n\
            *Level máximo:* 1.\n\
            *Conflitos:* Mending.\n\
            *Valor de venda:* $5000.\n\
            *Mapeamento:* Prateleira Roxa, Coluna 4, Linha 3.\n')
    }
}

module.exports = InfinityEnchant;