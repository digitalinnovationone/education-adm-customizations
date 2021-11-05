

# Exemplo:


```
    const pageName = 'course';

    (function (pageName) {
        const script = document.createElement('script');
        script.src = `https://falvojr.github.io/education-adm-customizations/js/main.js`;
        const [body] = document.getElementsByTagName('body');
        body.appendChild(script);

        setTimeout(() => {
            window.EducationCustomizations.load(pageName);
        }, 2000);
    })(pageName);

```