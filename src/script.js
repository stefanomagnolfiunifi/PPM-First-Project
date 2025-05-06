document .addEventListener("DOMContentLoaded", () => {

    function updateRightColumnOffset() {
        const rightCol = document.getElementById('rightCol');
        const alsoRead = document.getElementById('alsoRead');
        if (!rightCol || !alsoRead) return;

        const rect = rightCol.getBoundingClientRect();
        const computedStyle = getComputedStyle(rightCol);
        const paddingLeft = parseFloat(computedStyle.paddingLeft || 0);

        const viewportWidth = document.documentElement.clientWidth;
        const offset = rect.left + paddingLeft;

        const width = viewportWidth - offset;
        alsoRead.style.width = `${width}px`;
        alsoRead.style.left = '0'; // già posizionata relativa alla colonna
    }

    // Avvia l'osservazione
    window.addEventListener('resize', updateRightColumnOffset);
    window.addEventListener('DOMContentLoaded', updateRightColumnOffset);
});