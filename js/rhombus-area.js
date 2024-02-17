function calculateRhombusArea(){
    const length1 = getInputValueById('rhombus-length1');
    const length2 = getInputValueById('rhombus-length2');
    
    const area = 0.5 * length1 * length2;
    setInnerTextById('rhombus-area', area);

    setElementById('calculate-area', area);
}