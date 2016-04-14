/*
 * Menu da aplicação
 */
var main_menu   = require('app/menu.js')
    , menu      = {
        rows: []
    }
;

menu.rows.push(main_menu.rows[0]);
menu.rows.push(main_menu.rows[1]);
menu.rows.push(main_menu.rows[4]);

// Exporta o menu
module.exports = menu;