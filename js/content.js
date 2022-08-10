(function() {
    'use strict';

    const fab = document.getElementById('fabAdminCustomizations');
    fab.style.display = 'none';

    const contentType = document.querySelector('.field-type > div > div')?.innerText || '';
    if (contentType == 'Texto') {
        document.querySelectorAll('[type="submit"][value^="Salvar"').forEach(saveInput => {
            saveInput.addEventListener('mouseover', () => normalizeLinks());
        });
    }

    function normalizeLinks() {
        document.querySelector('.cke_editable').querySelectorAll('a').forEach(link => {
            if(link.target || link.target != '_target') {
                link.target = '_target';
            }
            if(link.style) {
                link.style = 'color: #3498db; text-decoration: underline;'
            }
        });
    }
})();