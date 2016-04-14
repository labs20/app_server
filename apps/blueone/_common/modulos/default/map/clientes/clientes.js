/**
 * TShark - Client 3.0
 * Funcionalidades de interface: Mapeamento de cliente
 *
 * @copyright [== © 2016, Softlabs ==]
 * @link www.softlabs.com.br
 * @author Luiz Antonio B. Silva [Labs]
 * @since 04/03/2016
 */
tshark.modulos._add('default.map.clientes', {

    /**
     * Permite extender uma classe
     */
    extends: 'configuracoes',

    /**
     * Inicialização do módulo
     */
    init: function(){
        this.info = {
            titulo: 'Mapeamento de Cliente',
            info: 'Executa o mapeamento de clientes entre a aplicação externa e o backend',
            help: '',
            icon: 'settings icon'
        };
    },

    /**
     * onBefore: Chamado antes de descer ao server
     * @param sender elemento html que acionou a API
     * @param settings pacote que será enviado ao server
     */
    onBeforeList: function(sender, settings){

        // Personaliza template
        //settings.data['template'] = 'meu_list';

        settings.data['provider'] = {
            limit: 500
        };

        // Dá prosseguimento
        return true;
    },

    /**
     * on: Chamado no retorno do server antes do processamento default da API no client
     * @param response pacote de dados recebido do server
     * @param next função que dá continuidade ao processo - se não chamada ao final, o processamento default não acontece
     */
    onList: function(response, next){
        next();
    },

    /**
     * onAfter: Chamado depois do processamento default ou depois do overwrite caso ocorra
     * @param response pacote de dados do server
     *
    onAfterList: function(response){

    }*/

});
//# sourceURL=default.map.clientes.js