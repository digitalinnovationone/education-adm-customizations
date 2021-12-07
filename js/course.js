(function() {
    'use strict';

    function getCourseDioMeUrl() {
        const slug = document.getElementById('id_slug')?.value || '';
        const uuid = document.querySelector('.field-uuid > div > div')?.innerText || '';
        return `https://web.dio.me/course/${slug}/learning/${uuid}`;
    }

    window.EducationCustomizations.createAction('Abrir no DIO.ME', async () => {
        const courseDioMeUrl = getCourseDioMeUrl();
        window.EducationCustomizations.open(courseDioMeUrl);
    });

    window.EducationCustomizations.createAction('Copiar Link DIO.ME', async () => {
        const courseDioMeUrl = getCourseDioMeUrl();
        await window.EducationCustomizations.copy(courseDioMeUrl);
    });

    window.EducationCustomizations.createAction('Copiar CSV', async () => {
        const [,,,,id] = window.location.pathname.split('/');
        const editorial = '';
        const name = document.querySelector('#id_name')?.value || '';
        const tecnology = document.querySelector('#id_coursehasskills_set-0-skill > option[selected]')?.innerText || '';
        const duration = document.querySelector('#id_workload')?.value || '';
        const author = document.querySelector('#id_author_on_deck > div > span.tag')?.innerText || '';
        const gender = '';
        const stack = '';
        const linkDioMe = getCourseDioMeUrl();
        const linkAdmin = window.location.href;
        const courseCsv = `${id},${editorial},${name},${tecnology},${duration},${author},${gender},${stack},${linkDioMe},${linkAdmin}`;
        await window.EducationCustomizations.copy(courseCsv);
    });

})();
