(function () {
    'use strict';

    const contentType = document.querySelector('.field-type > div > div')?.innerText || '';

    if (contentType == 'Texto') {
        document.querySelectorAll('[type="submit"][value^="Salvar"').forEach(saveInput => {
            saveInput.addEventListener('mouseover', () => normalizeLinks());
        });

        window.EducationCustomizations.createFloatingActionButton();

        window.EducationCustomizations.createAction('Template de Lab', async () => {
            const tenplate = await fetch('https://digitalinnovationone.github.io/education-adm-customizations/js/content/templates/15297.html');
            const tenplateText = await tenplate.text();
            document.querySelector("iframe.cke_wysiwyg_frame").contentDocument.querySelector('body').innerHTML = tenplateText;
        });

        window.EducationCustomizations.createAction('Template de Curso', async () => {
            const tenplate = await fetch('https://digitalinnovationone.github.io/education-adm-customizations/js/content/templates/15395.html');
            const tenplateText = await tenplate.text();
            document.querySelector("iframe.cke_wysiwyg_frame").contentDocument.querySelector('body').innerHTML = tenplateText;
        });
    }

    if (contentType == 'Questionário') {
        const url = window.location.pathname;
        const contentId = url.substring(url.lastIndexOf('/content/') + 9, url.lastIndexOf('/change/'));

        const storageKeys = window.EducationCustomizations.storageKeys;
        window.localStorage.setItem(storageKeys.content.lastOpenedId, contentId);
    }

    function normalizeLinks() {
        document.querySelector("iframe.cke_wysiwyg_frame").contentDocument.querySelectorAll('a').forEach(link => {
            if (link.target != '_blank') {
                link.target = '_blank';
            }
            if (!link.style.color) {
                link.style = 'color: #3498db; text-decoration: underline;'
            }
        });
    }
})();