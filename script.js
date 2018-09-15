const dimensions = 960;

init(16);

function init(size) {
    let container = document.querySelector('.container');
    while (container.lastChild) {
        container.removeChild(container.lastChild);
    }

    container.style['grid-template-columns'] = 
        'repeat(' + size + ', ' + dimensions / size + 'px)';
    container.style['grid-template-rows'] = 
        'repeat(' + size + ', ' + dimensions / size + 'px)';
    container.style['width'] = dimensions + 'px';

    for (i = 0; i < size * size; i++) {
        let child = document.createElement('div');
        child.classList.add('item');
        container.appendChild(child);

        child.onmouseenter = function() {
            let opacity = parseFloat(this.style['opacity']);
            this.style['opacity'] = !isNaN(opacity)
                ? Math.min(1, opacity + 0.1)
                : '0.1';
        };
    }
}

document.querySelector('.reinit').addEventListener('click', function(e) {
    let newSize = window.prompt("New size", "16");
    if (newSize != '' && newSize != null) {
        init(newSize);
    }
});
