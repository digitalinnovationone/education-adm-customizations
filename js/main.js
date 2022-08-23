(function render() {
    (function addStyle() {
        const custonStyle = document.createElement('link');
        custonStyle.rel = 'stylesheet';
        custonStyle.href = 'https://digitalinnovationone.github.io/education-adm-customizations/css/styles.css';
        const [head] = document.getElementsByTagName('head');
        head.appendChild(custonStyle);
    })();

    window.EducationCustomizations = {};

    window.EducationCustomizations.load = function (scriptPath) {
        const script = document.createElement('script');
        script.src = `https://digitalinnovationone.github.io/education-adm-customizations/js/${scriptPath}`;
        const [body] = document.getElementsByTagName('body');
        body.appendChild(script);

        const newBreadCrumb = document.createElement('small');
        newBreadCrumb.innerHTML = '{ <a href="https://github.com/digitalinnovationone/education-adm-customizations" target="_blank">education-adm-customizations</a> ativo }';
        document.querySelector('#container > div.breadcrumbs').appendChild(newBreadCrumb);
    };

    window.EducationCustomizations.createFloatingActionButton = function () {
        const menuFab = (() => {
            const div = document.createElement('div');
            div.className = 'custom-education-adm-menu';
            return div;
        })();

        const closeButton = (() => {
            const button = document.createElement('button');
            button.type = 'button';
            button.className = 'close';
            button.innerText = 'x';

            button.addEventListener('click', () => {
                menuFab.classList.toggle('open');
            });

            return button;
        })();

        const fabActions = (() => {
            const div = document.createElement('div');
            div.id = 'fabActions';
            div.className = 'actions';
            div.appendChild(closeButton);
            return div;
        })();

        menuFab.appendChild(fabActions);

        const fab = (() => {
            const floatingActionButton = document.createElement('button');
            floatingActionButton.type = 'button';
            floatingActionButton.className = 'custom-education-floating-adm-menu-button';
            floatingActionButton.innerText = '+';
            floatingActionButton.addEventListener('click', () => {
                menuFab.classList.toggle('open');
            });
            return floatingActionButton;
        })();

        const [body] = document.getElementsByTagName('body');
        body.appendChild(menuFab);
        body.appendChild(fab);
    }

    window.EducationCustomizations.createAction = function (name, listener) {
        const action = document.createElement('button');
        action.type = 'button';
        action.className = 'action';
        action.innerText = name;
        action.addEventListener('click', listener);

        const fabActions = document.getElementById('fabActions');
        fabActions.appendChild(action);
    }

    window.EducationCustomizations.copy = async function (text) {
        // https://stackoverflow.com/a/6976583/3072570
        window.focus();
        if (document.activeElement) {
            document.activeElement.blur();
        }
        await window.navigator.clipboard.writeText(text);
    }

    window.EducationCustomizations.open = function (url) {
        window.open(url, '_blank').focus();
    }

    window.EducationCustomizations.storageKeys = {
        content: {
            lastOpenedId: 'education-adm-customizations.content.lastOpenedId'
        }
    };

})();
