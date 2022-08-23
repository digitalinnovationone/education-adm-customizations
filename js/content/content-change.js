import { storageKeys } from '../constants.js';

(function () {
    'use strict';

    const contentType = document.querySelector('.field-type > div > div')?.innerText || '';

    if (contentType == 'Texto') {
        document.querySelectorAll('[type="submit"][value^="Salvar"').forEach(saveInput => {
            saveInput.addEventListener('mouseover', () => normalizeLinks());
        });
    }

    if (contentType == 'Questionário') {
        const url = window.location.pathname;
        const contentId = url.substring(url.lastIndexOf('/content/') + 9, url.lastIndexOf('/change/'));
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