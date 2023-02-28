(function () {
    'use strict';

    // Recupera e define como correta a alternativa padrão (criada automaticamente pelo Admin ao abrir a página).
    const alternativaPadrao = document.querySelector('input[name="question_choice-0-correct"]');
    alternativaPadrao.click();

    document.body.addEventListener("keydown", async function (ev) {
        ev = ev || window.event;
        const key = ev.which || ev.keyCode;
        const ctrl = ev.ctrlKey ? ev.ctrlKey : ((key === 17) ? true : false);

        // Verifica se o "Ctrl + V" foi acionado.
        if (key == 86 && ctrl) {
            const clipboardText = await navigator.clipboard.readText();
            let questionFragments = clipboardText.split('\t');
            if (questionFragments.length == 1) {
                questionFragments = clipboardText.split('\\t');
            }

            if (questionFragments.length > 1) {
                document.getElementById('id_description').value = questionFragments[0];
                const alternatives = document.querySelectorAll('textarea[name^="question_choice-"]:not([name="question_choice-__prefix__-description"])');
                let alternativeIndex = 1;
                for (const alternative of alternatives) {
                    alternative.value = questionFragments[alternativeIndex++];
                }
            }
        }

    }, false);
})();