/**
 * BusinessObjects - Objetos suportados pela aplicação
 * 20/02/16
 */
module.exports = {

    info: {
        owner: 'IDE Tshark',
        cnpj: '',
        email: ''
    },
    
    security:{
        active: false
    },
    
    // Conexões à repositórios de dados
    conexoes:{

        // Base default TShark
        default: {
            tipo: 'mysql',
            conn: {
                database: 'tshark',
                host: 'localhost',
                port: '3347',
                user: 'root',
                pwd: 'desenv123'
            }
        },
        
        // Base blue1 SAP
        sap: {
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
        }
    }
    
};