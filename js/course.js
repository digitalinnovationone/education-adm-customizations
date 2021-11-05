(function() {
    'use strict';

    const custonStyle = document.createElement('link');
    custonStyle.rel = 'stylesheet';
    custonStyle.href = 'https://falvojr.github.io/education-adm-customizations/styles.css';

    const actions = [];

    function createCustomButton(name, listener) {
        const actionButton = document.createElement('button');
        actionButton.innerText = name;
        actionButton.addEventListener('click', listener);
        actions.push(actionButton);
    }

    createCustomButton('Copiar Link na Plataforma', async () => {
        const slug = document.getElementById('id_slug').value;
        const uuid = document.querySelector('.field-uuid > div > div').innerText;
        const urlCurso = `https://web.dio.me/course/${slug}/learning/${uuid}`;
        await navigator.clipboard.writeText(urlCurso);
    });

    (function render() {
        const content = document.createElement('div');
        content.className = 'custom-education-adm-menu';

        content.append(...actions);

        const [head] = document.getElementsByTagName('head');
        head.appendChild(custonStyle);
        const [body] = document.getElementsByTagName('body');
        body.appendChild(content);
    })();

})();