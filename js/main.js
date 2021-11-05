
(function render() {
    (function addStyle() {
        const custonStyle = document.createElement('link');
        custonStyle.rel = 'stylesheet';
        custonStyle.href = 'https://falvojr.github.io/education-adm-customizations/css/styles.css';
        const [head] = document.getElementsByTagName('head');
        head.appendChild(custonStyle);
    })();

    (function addMenu() {
        const menu = document.createElement('div');
        menu.className = 'custom-education-adm-menu';

        const actionsContent = document.createElement('div');
        actionsContent.className = 'actions';
        
        const closeButton = document.createElement('button');
        closeButton.type = 'button';
        closeButton.className = 'close';
        closeButton.innerText = 'x';

        closeButton.addEventListener('click', () => {
            const [menu] = document.getElementsByClassName('custom-education-adm-menu');
            menu.classList.toggle('open');
        });

        actionsContent.appendChild(closeButton);

        menu.appendChild(actionsContent);

        const floatingButton = document.createElement('button');
        floatingButton.type = 'button';
        floatingButton.className = 'custom-education-floating-adm-menu-button';
        floatingButton.innerText = '+';
        floatingButton.addEventListener('click', () => {
            content.classList.toggle('open')
        });

        const [body] = document.getElementsByTagName('body');
        body.appendChild(menu);
        body.appendChild(floatingButton);
    })();

    window.EducationCustomizations = {};

    window.EducationCustomizations.load = function (pageName) {
        const script = document.createElement('script');
        script.src = `https://falvojr.github.io/education-adm-customizations/js/${pageName}.js`;
        const [body] = document.getElementsByTagName('body');
        body.appendChild(script);
    };

    window.EducationCustomizations.createAction = function(name, listener) {
        const actionButton = document.createElement('button');
        actionButton.innerText = name;
        actionButton.addEventListener('click', listener);

        const [menu] = document.getElementsByClassName('custom-education-adm-menu');
        menu.appendChild(actionButton)
    }
})();
