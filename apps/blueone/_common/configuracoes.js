/**
 * Created by labs on 07/03/16.
 */
var configuracoes = {

    /**
     * onAfter: Chamado depois do processamento default ou depois do overwrite caso ocorra
     * @param response pacote de dados do server
     */
    onAfterList: function(response){
        var listId = '#configuracoes_list';

        // Atualiza
        $('#configuracoes_listagem')
            .html(this.templates[response['template']]);

        // Exibe a área
        $('#configuracoes_list')
            .removeClass('ts-hidden');

        // Bind de dados
        this.bind(listId);

        // Bind de funcionalidade
        tshark.bind(listId);
    },

    onAfterForm: function(response){
        var formId = '#configuracoes_form';

        if (config_form_bind){
            config_form_bind.unbind();
            tshark.unbind(formId);
        }

        $(formId)
            .find(".description")
            .empty()
            .append(this.form.obj);

        $(formId)
            .modal('setting', 'transition', 'fade up')
            .modal('setting', 'transition', 'fade up')
            .modal('show');

        // Bind de dados
        config_form_bind = rivets.bind($(formId), this);

        // Bind de funcionalidade
        tshark.bind(formId);
    },

    search: function(){
        alertify.alert('pesquisa' + self.info.titulo);
    }
};

/**
 * Armazena o bind realizado uma vez para que ele possa ser removido ao se trocar de
 * "dono" na tela
 */
var config_list_bind    = false
    , config_form_bind  = false
;