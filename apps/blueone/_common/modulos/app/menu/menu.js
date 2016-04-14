/**
 * TShark - Client 3.0
 * Funcionalidades de interface: Menus da aplicação
 *
 * @copyright [== © 2016, Softlabs ==]
 * @link www.softlabs.com.br
 * @author Luiz Antonio B. Silva [Labs]
 * @since 04/03/2016
 */
tshark.modulos._add('app.menu', {

    /**
     * Inicializa o menu
     */
    init: function(){

        // Efetua o bind do menu
        rivets.bind($('.menu-principal'), this);
        
        rivets.bind($('#menu_lateral'), this);

        tshark.bind('#menu_lateral');

        // Carga de dados
        this.data.load();
    },

    /**
     * Clique do menu
     */
    click: function(){

        // Esconde a área atual
        $("#" + old_area).css('display', 'none');

        // Nova área
        old_area = $(this).data('area');

        // Migra menu
        $("#menu_lateral")
            .appendTo($("#" + old_area).find("#menu_area"));

        var r = $(this).data('row');
        tshark.modulos['app.menu'].data.navTo(r);

        tshark.bind('#menu_lateral');

        
        // Exibe
        $("#" + old_area).css('display', 'block');

    }

});

var old_area = "tarefas";

//# sourceURL=app.menu.js