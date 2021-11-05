(function() {
    'use strict';

    window.EducationCustomizations.createAction('Copiar Link na Plataforma', async () => {
        const slug = document.getElementById('id_slug').value;
        const uuid = document.querySelector('.field-uuid > div > div').innerText;
        const urlCurso = `https://web.dio.me/course/${slug}/learning/${uuid}`;
        await navigator.clipboard.writeText(urlCurso);
    });

})();