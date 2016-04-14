/*
 * Menu da aplicação
 */
var
    // Menu de tarefas
    tarefas = {
        label: "Tarefass",
        area: "tarefas",
        icon: "checkmark icon",
        api: "list default map clientes",
        submenu: [
            {
                label: "Um"
            },
            {
                label: "Dois"
            },
            {
                label: "Tres"
            }
        ]
    }

    // Menu de integrações
    , integracoes = {
        label: "Integrações",
        area: "integracoes",
        icon: "sitemap icon",
        submenu: [
            {
                label: "Itens"
            }
        ]
    }

    // Menu de cartões
    , cartoes = {
        label: "Cartões",
        area: "cartoes",
        icon: "comments outline icon",
        api: "lista blueone map map_itens",
        submenu: [
        ]
    }

    // Menu de Acesso
    , acesso = {
        label: "Perfis e Acesso",
        area: "acesso",
        icon: "user icon",
        submenu: [
        ]
    }

    // Menu de configurações
    , config = {
        label: "Configurações",
        info: "Painel central de configurações",
        area: "configuracoes",
        icon: "settings icon",
        submenu: [
            { label: "Filiais",                 api: "list default map filiais" },
            { label: "Grupos de Item",          api: "list default map grupos" },
            { label: "Itens",                   api: "list default map itens" },
            { label: "Clientes",                api: "list default map clientes" },
            { label: "Fornecedores",            api: "list default map " },
            { label: "Funcionarios",            api: "list default map " },
            { label: "Formas de Pagamento",     api: "list default map " },
            { label: "Cenários Contábeis",      api: "list default map " },
            { label: "Global",                  api: "list default map " }
        ]
    }
;


// Exporta o menu
module.exports = {
    rows: [
        tarefas,
        integracoes,
        cartoes,
        acesso,
        config
    ]
};