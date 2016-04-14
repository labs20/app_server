/**
 * BusinessObjects - Objetos suportados pela aplicação
 * 20/02/16
 */
module.exports = {
    d: 'casajoao',
    info: {
        owner: 'Casas do João',
        cnpj: '20.335.273/0001-02',
        email: 'admin@casasjoao.com.br'
    },
    
    security:{
        active: true
    },
    
    // Conexões à repositórios de dados
    conexoes:{

        // Base blue1 SAP
        default: {
            tipo: 'sqlserver',
            conn: {
                database: 'SBO_DEMOCOMERCIAL_HOMOLOG_SAP',
                host: "10.211.55.8\\SAP",
                port: '1433',
                user: 'sa',
                pwd: '1234'
            },
            formats:{
                date: 'DD/MM/YYYY'
            }
        },

        // Acesso ao SAP via DI
        sap_di: {
            tipo: 'di',
            conn: {
                user: 'manager',
                pwd: '1234'
            }
        },

        // Base testes Giro
        giro: {
            tipo: 'mysql',
            conn: {
                host: 'localhost',
                port: '3347',
                user: 'root',
                pwd: 'desenv123'
            }
        }

    },

    // Objetos de negócio da aplicação
    businessObjects: {

        sap: {
            conn: 'sap-di',
            sap: {
                modulos: [
                    'ocrd', 'oitm'
                ]
            }
        },

        default: {
            conn: 'blue1',
            sap: {
                modulos: [
                    'compras', 'vendas'
                ]
            },
            map: {
                modulos: [
                    'clientes', 'itens'
                ]
            },
            concil: {
                modulos: [
                    'concil_vendas'
                ]
            },
            itens: {
                conn: 'giro',
                modulos: [
                    /* Se não definido nenhum, valem todos */
                ]
            }
        }

    }

};