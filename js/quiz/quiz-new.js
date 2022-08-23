import { storageKeys } from '../constants.js';

(function () {
    'use strict';

    const contentLastId = window.localStorage.getItem(storageKeys.content.lastOpenedId);
    if (contentLastId) {
        document.getElementById("id_content").value = contentLastId;
    }
})();