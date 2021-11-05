(function() {
    'use strict';

    function getCourseDioMeUrl() {
        const slug = document.getElementById('id_slug')?.value || '';
        const uuid = document.querySelector('.field-uuid > div > div')?.innerText || '';
        return `https://web.dio.me/lab/${slug}/learning/${uuid}`;
    }

    window.EducationCustomizations.createAction('Copiar Link DIO.ME', async () => {
        const courseDioMeUrl = getCourseDioMeUrl();
        await window.EducationCustomizations.copy(courseDioMeUrl);
    });

    window.EducationCustomizations.createAction('Copiar CSV Base de Treinamentos', async () => {
        const [,,,,id] = window.location.pathname.split('/');
        const editorial = '';
        const name = document.querySelector('#id_name')?.value || '';
        const tecnology = document.querySelector('#id_coursehasskills_set-0-skill > option[selected]')?.innerText || '';
        const duration = document.querySelector('#id_workload')?.value || '';
        const stack = '';
        const linkDioMe = getCourseDioMeUrl();
        const courseCsv = `${id},${editorial},${name},${tecnology},${duration},${stack},${linkDioMe}`;
        await window.EducationCustomizations.copy(courseCsv);
    });

})();