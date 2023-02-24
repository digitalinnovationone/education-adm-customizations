(function () {
    'use strict';

    // Recupera e define como correta a alternativa padrão (criada automaticamente pelo Admin ao abrir a página).
    const alternativaPadrao = document.querySelector('#question_choice-group input[type="checkbox"]:is([name="question_choice-0-correct"])');
    alternativaPadrao.click();
})();