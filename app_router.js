/**
 * Roteamentos da aplicação
 */
var router   = require('koa-router')()
    , fs     = require('fs-extra')
    , extend = require('extend')
;


//region :: Home page

router.get('/', function *(next) {
    this.body = 'Acesso negado';
});


router.get('/testes', function *(next) {
    require('../_testes')();
});



/**
 * Clientes sem filial
 */
router.get(/^\/(\w+)$/, function *(next) {
    initCliente(this);
});

/**
 * Clientes com filial
 */
router.get(/^\/(\w+)\/(\w+)$/, function *(next) {
    initCliente(this);
});


function initCliente(req){
    var path        = 'apps' + req.originalUrl + '/'
        , engine    = req.app.engine
        , clientes  = req.app.context.clientes
        , app       = req.captures[0]
    ;

    // Registra o contexto do cliente
    var novo = engine.assurePath(clientes, req.captures,
        {
            _log: {
                _last_access    : '',
                _logged_users   : { }
            },
            app: req.captures
        }
    );
    
    // Seta o config no request para o cliente atual
    req.state.config = engine.getObjPath(clientes, req.captures);


    // Foi registrado
    if (novo) {

        extend(true,
            req.state.config,

            fs.existsSync('./config.js')
                ? require('./config.js') : {},

            fs.existsSync('./_common/config.js')
                ? require('./_common/config.js') : {},

            fs.existsSync('apps/' + app  + '/_common/config.js')
                ? require('apps/' + app  + '/_common/config.js') : {},

            fs.existsSync(path + '/config.js')
                ? require(path + '/config.js') : {}
        );

/*
        // Verifica se existe config para o cliente
        if (engine.getConfig(req.captures, path)) {


            // Ajusta paths de customização
            engine.checkCustomPaths(req.state.cliente, req.captures);

            // Menu
            engine.getMenu(req.captures, path);

        } else {

            // Limpa
            engine.removePath(clientes, req.captures);

            // Erro
            req.throw(404, 'Cliente não registrado');

        }
        
    } else {

        // Seta o config no request para o cliente atual
        req.state.cliente = engine.getObjPath(clientes, req.captures);
*/
    }

    // Registra cookie
    var c_key = req.captures.join(':') 
        , key = req.cookies.get(c_key);
    if (!key) {

        // Cria chave identificadora
        const crypto = require('crypto')
            , hash = crypto.createHash('sha256');

        hash.update(req.originalUrl + Date.now() + (Math.random() * (500 - 1) + 1));
        key = hash.digest('hex');
    }
    req.app.request['c_key'] = key;

    if (!req.app.context.running[key]){
        req.app.context.running[key] = req.state.config;
        req.cookies.set(c_key, key);
    }

    // Renderiza index
    engine.render('index', req.state.config)
        .then(function(templ){
            req.body = templ;
        });
    
}

//endregion


module.exports = router;
