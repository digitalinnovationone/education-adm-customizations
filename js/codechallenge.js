(function () {
    'use strict';

    function getCourseDioMeUrl() {
        const slug = document.getElementById('id_slug')?.value || '';
        let algorithm = document.querySelector('#id_codechallengehasalgorithm_set-0-algorithm_on_deck > div > span:nth-child(2)')?.innerText || '';
        if (algorithm.split(' - ').length > 1) {
            algorithm = algorithm.split(' - ')[1];
        }
        algorithm = algorithm.toLowerCase().replaceAll(' ', '-');
        return `https://web.dio.me/coding/${slug}/algorithm/${algorithm}`;
    }

    window.EducationCustomizations.createAction('Abrir no DIO.ME', async () => {
        const courseDioMeUrl = getCourseDioMeUrl();
        window.EducationCustomizations.open(courseDioMeUrl);
    });

    window.EducationCustomizations.createAction('Copiar Link DIO.ME', async () => {
        const courseDioMeUrl = getCourseDioMeUrl();
        await window.EducationCustomizations.copy(courseDioMeUrl);
    });

})();