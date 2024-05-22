import './CSSGridPro.scss';


const gridMode = () => {
    let columns = 12;

    document.querySelectorAll('.container').forEach((container) => {
        container.style.position = 'relative';

        const gridlines = document.createElement('div');
        gridlines.classList.add('grid-lines');
        container.appendChild(gridlines);

        const span = document.createElement('span');

        for (let i = 0; i < columns; i++) {
            const line = span.cloneNode();
            gridlines.appendChild(line);
        }
    });

    document.querySelectorAll('.col').forEach((col) => {
        col.style.position = 'relative';
        col.style.outline = '3px solid #000';
        col.style.boxSizing = 'border-box';
    });


}

gridMode();