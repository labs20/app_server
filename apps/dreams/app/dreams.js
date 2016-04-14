/**
 * Created by labs on 08/04/16.
 */

var user = {

    _id          : '',
    _privacy     : 'Publico | Privado',
    _active      : 'Y | N',
    _banned      : 'Y | N',
    _pending_pwd : 'Y | N',

    _creation_date      : 'YYYY-MM-DD HH:MM:SS',
    _deactivation_date  : 'YYYY-MM-DD HH:MM:SS',

    // Relacionamentos
    _followers      : 0,
    _following      : 0,
    _to_come_true   : 0,
    _coming_true    : 0,
    _came_true      : 0,

    username    : '',
    password    : '',
    email       : '',
    facebook_id : '',
    instagram_id: '',
    twitter_id  : '',

    firstname   : '',
    lastname    : '',
    gender      : 'M | F',
    birthday    : 'YYYY-MM-DD',

    img_profile : '',
    img_background: '',

    device_tokens: [
        'token123','token456'
    ],
    config: {
        notify_add: 1, // 0
        notify_add: 1, // 0
        notify_add: 1, // 0
        notify_add: 1, // 0
        notify_add: 1,  // 0
        contas: {
            facebook:{},
            instagram:{},
            twitter:{}
        }
    }
};


var dream = {
    _id         : '',
    _user_id    : '',
    _owner_id   : '',
    _privacy    : 'P | S | F | C',
    _active     : 0,
    _banned     : 'Y | N',

    _creation_date      : 'YYYY-MM-DD HH:MM:SS',
    _last_changed_date  : 'YYYY-MM-DD HH:MM:SS',
    _exclusion_date     : 'YYYY-MM-DD HH:MM:SS',
    _coming_true_date   : 'YYYY-MM-DD HH:MM:SS',
    _came_true_date     : 'YYYY-MM-DD HH:MM:SS',

    description         : '',
    status              : 'to_come | coming_true | came_true ',
    img_cover           : '',

    album               : [
        {img: '', _active: 0},
        {img: '', _active: 0},
        {img: '', _active: 0}
    ],

    comments: [
        {
            _id             : '',
            _user_id        : '',
            _active         : 0,
            _banned         : 'Y | N',
            _creation_date  : 'YYYY-MM-DD HH:MM:SS',
            _exclusion_date : 'YYYY-MM-DD HH:MM:SS',
            text            : ''
        }
    ],

    denuncy: [
        {
            _id             : '',
            _user_id        : '',
            _active         : 0,
            _creation_date  : 'YYYY-MM-DD HH:MM:SS',
            _exclusion_date : 'YYYY-MM-DD HH:MM:SS',
            text            : ''
        }
    ],

    likes: [
        // _user_id ...
    ],

    dreamers: [
        // _user_id ...
    ]

};
