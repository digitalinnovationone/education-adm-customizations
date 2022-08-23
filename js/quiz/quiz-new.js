(function () {
    'use strict';

    const storageKeys = window.EducationCustomizations.storageKeys;
    const contentLastId = window.localStorage.getItem(storageKeys.content.lastOpenedId);
    if (contentLastId) {
        document.getElementById("id_content").value = contentLastId;
    }
})();