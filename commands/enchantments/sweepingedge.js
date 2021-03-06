const commando = require('discord.js-commando');

class SweepingEdgeEnchant extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'sweepingedge',
            group: 'enchantments',
            memberName: 'sweepingedge',
            description: 'Informações detalhadas sobre o encantamento Sweeping Edge.'
        });
    }

    async run(message, args) {
        message.reply('\n >>> **Sweeping Edge**\n\
            *Descrição:* Aumenta a área de alcance da espada.\n\
            *Tipo de encantamento:* Vanilla\n\
            *Aplicado em:* Espadas.\n\
            *Level máximo:* 3.\n\
            *Conflitos:* \n\
            *Valor de venda:* $12000.\n\
            *Mapeamento:* Prateleira Vermelha, Coluna 3, Linha 3.\n')
    }
}

module.exports = SweepingEdgeEnchant;