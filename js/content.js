(function() {
    'use strict';

    const fab = document.getElementById('fabAdminCustomizations');
    fab.style.display = 'none';

    const contentType = document.querySelector('.field-type > div > div')?.innerText || '';
    if (contentType == 'Texto') {
        console.log('É texto!');
    }
})();