(function () {
    'use strict';

    function getCourseDioMeUrl() {
        const slug = document.getElementById('id_slug')?.value || '';
        const uuid = document.querySelector('.field-uuid > div > div')?.innerText || '';
        return `https://web.dio.me/course/${slug}/learning/${uuid}`;
    }

    window.EducationCustomizations.createFloatingActionButton();

    window.EducationCustomizations.createAction('Abrir no DIO.ME', async () => {
        const courseDioMeUrl = getCourseDioMeUrl();
        window.EducationCustomizations.open(courseDioMeUrl);
    });

    window.EducationCustomizations.createAction('Copiar Link DIO.ME', async () => {
        const courseDioMeUrl = getCourseDioMeUrl();
        await window.EducationCustomizations.copy(courseDioMeUrl);
    });

})();
