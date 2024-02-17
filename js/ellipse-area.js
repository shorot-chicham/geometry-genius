function calculateEllipseArea (){
    const majorRadius = getInputValueById('ellipse-major-radius');
    const minorRadius = getInputValueById('ellipse-minor-radius');

    const piValue = 22/7;
    const area = piValue * majorRadius * minorRadius;
    setInnerTextById('ellipse-area', area.toFixed(2));
    setElementById('calculate-area', area.toFixed(3));
}