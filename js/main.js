(function render() {
    (function addStyle() {
        const custonStyle = document.createElement('link');
        custonStyle.rel = 'stylesheet';
        custonStyle.href = 'https://digitalinnovationone.github.io/education-adm-customizations/css/styles.css';
        const [head] = document.getElementsByTagName('head');
        head.appendChild(custonStyle);
    })();

    const [body] = document.getElementsByTagName('body');

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

    const actionsFab = (() => {
        const div = document.createElement('div');
        div.className = 'actions';
        div.appendChild(closeButton);
        return div;
    })();

    menuFab.appendChild(actionsFab);

    const fab = (() => {
        const floatingActionButton = document.createElement('button');
        floatingActionButton.id = 'fabAdminCustomizations';
        floatingActionButton.type = 'button';
        floatingActionButton.className = 'custom-education-floating-adm-menu-button';
        floatingActionButton.innerText = '+';
        floatingActionButton.addEventListener('click', () => {
            menuFab.classList.toggle('open');
        });
        return floatingActionButton;
    })();

    body.appendChild(menuFab);
    body.appendChild(fab);

    window.EducationCustomizations = {};

    window.EducationCustomizations.load = function (pageName) {
        const script = document.createElement('script');
        script.src = `https://digitalinnovationone.github.io/education-adm-customizations/js/${pageName}.js`;
        const [body] = document.getElementsByTagName('body');
        body.appendChild(script);
    };

    window.EducationCustomizations.createAction = function (name, listener) {
        const action = document.createElement('button');
        action.type = 'button';
        action.className = 'action';
        action.innerText = name;
        action.addEventListener('click', listener);
        actionsFab.appendChild(action);
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

})();
