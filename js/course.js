(function() {
    'use strict';

    function getCourseDioMeUrl() {
        const slug = document.getElementById('id_slug').value;
        const uuid = document.querySelector('.field-uuid > div > div').innerText;
        return `https://web.dio.me/course/${slug}/learning/${uuid}`;
    }

    window.EducationCustomizations.createAction('Copiar Link DIO.ME', async () => {
        const courseDioMeUrl = getCourseDioMeUrl();
        await navigator.clipboard.writeText(courseDioMeUrl);
    });

    window.EducationCustomizations.createAction('Copiar CSV Base de Treinamentos', async () => {
        const id = window.location.pathname.split('/')[3];
        const editorial = '';
        const name = document.querySelector('#id_name').value;
        const tecnology = document.querySelector('#id_coursehasskills_set-0-skill > option:selected').innerText;
        const duration = document.querySelector('#id_workload').value;
        const author = document.querySelector('#id_author_on_deck > div > span.tag').innerText;
        const gender = '';
        const stack = '';
        const linkDioMe = getCourseDioMeUrl();
        const LinkAdmin = window.location.href;
        const courseCsv = `${id},${editorial},${name},${tecnology},${duration},${author},${gender},${stack},${linkDioMe},${LinkAdmin}`;
        await navigator.clipboard.writeText(courseCsv);
    });

})();