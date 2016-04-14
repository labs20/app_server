
// Fim da carga do browser
$(document).ready(function() {

    // Inicializa TShark
    tshark.init();

    tshark.register('sys.dev.ide');

    tshark.bind();

});
