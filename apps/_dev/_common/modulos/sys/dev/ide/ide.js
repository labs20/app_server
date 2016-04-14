/**
 * TShark - Client 3.0
 * Tela de geração de objetos de negócio
 *
 * @copyright [== © 2016, Softlabs ==]
 * @link www.softlabs.com.br
 * @author Luiz Antonio B. Silva [Labs]
 * @since 04/03/2016
 */
tshark.modulos._add('sys.dev.ide', {


    /**
     * Inicializa o menu
     */
    init: function(){
        this.info = {
            titulo: 'Geração de Objetos de Negócio',
            desc: 'Gere objetos de negócio à partir da base de dados',
            help: '',
            icon: 'circular settings icon'
        };

        // Objeto que irá armazenar as conexões disponíveis
        this.conn = new Dataset(this.path);
        this.conn.load('exec getConexoes', {testando: 123});

        // Objeto que irá armazenar os pacotes existentes no server
        this.obj = new Dataset(this.path);
        this.obj.load('exec listModulos');

        // Objeto que irá armazenar os pacotes existentes no server
        this.tabelas = new Dataset(this.path);


        this.package = {
            id: '',
            owner: '',
            modulos: new Dataset(this.path)
        };
        this.package.modulos.key = "name";

        // Efetua o bind
        $('#ide').data('bound', rivets.bind($('#ide'), this));

        var self = this;
    },


    /**
     * onAfter: Chamado depois do processamento default ou depois do overwrite caso ocorra
     * @param response pacote de dados do server
     */
     onAfterExec: function(response){

        if (response['obj']){
            this.obj = response['obj'];
        }

    },


    /**
     * Carrega tabelas do banco da conexão
     */
    refreshTables: function(){
        var mod = sys.dev.ide;
        mod.tabelas.clear();
        mod.tabelas.load('exec getTables', {
            connID: mod.conn.row['id']
        });
    },

    /**
     * Move uma tabela da lista para o novo package
     */
    addTable: function(ev){
        var mod     = sys.dev.ide
            , key   = ev.currentTarget.dataset['id']
            , row   = mod.tabelas.getRow(key)
        ;

        if (row) {
            mod.package.modulos.addRow(row);
            mod.tabelas.delRow(key);
        }
    },

    /**
     * Remove uma tabela do pacote a ser criado
     * @param ev
     */
    delTable: function(ev){
        var mod     = sys.dev.ide
            , key   = ev.currentTarget.dataset['id']
            , row   = mod.package.modulos.getRow(key)
        ;

        if (row) {
            mod.tabelas.addRow(row);
            mod.package.modulos.delRow(key);
        }
    },

    createPackage: function(){
        var mod = sys.dev.ide;
        mod.call('exec createPackage', {
            id: mod.package.id,
            owner: mod.package.owner,
            modulos: mod.package.modulos.rows,
            connID: mod.conn.row['id']
        });
    }

});

//# sourceURL=sys.dev.ide.js