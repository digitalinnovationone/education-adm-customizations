(function () {
    'use strict';

    const contentType = document.querySelector('.field-type > div > div')?.innerText || '';

    if (contentType == 'Texto') {
        document.querySelectorAll('[type="submit"][value^="Salvar"').forEach(saveInput => {
            saveInput.addEventListener('mouseover', () => normalizeLinks());
        });

        window.EducationCustomizations.createFloatingActionButton();

        window.EducationCustomizations.createAction('Template de Lab', async () => {
            await applyTextContentTemplate(15297);
        });

        window.EducationCustomizations.createAction('Template de Curso', async () => {
            await applyTextContentTemplate(15395);
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

    async function applyTextContentTemplate(contentId) {
        const tenplate = await fetch(`https://digitalinnovationone.github.io/education-adm-customizations/js/content/templates/${contentId}.html`);
        const tenplateText = await tenplate.text();
        document.querySelector("iframe.cke_wysiwyg_frame").contentDocument.querySelector('body').innerHTML = tenplateText;
    }
})();