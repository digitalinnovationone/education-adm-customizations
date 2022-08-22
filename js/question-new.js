(function () {
    'use strict';

    // Recupera e define como correta a alternativa padrão (criada automaticamente pelo Admin ao abrir a página).
    const alternativaPadrao = document.querySelector('#question_choice-group input[type="checkbox"]:not([name="question_choice-__prefix__-correct"])');
    alternativaPadrao.click();

    // Cria outras 4 alternativas através da opção "Adicionar outro(a) Escolha" disponível no Admin.
    const alternativasTotais = 5;
    for (let i = 1; i < alternativasTotais; i++) {
        document.querySelector('#question_choice-group tr.add-row a').click();
    }
})();